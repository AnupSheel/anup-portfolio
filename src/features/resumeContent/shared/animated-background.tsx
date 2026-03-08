import { useEffect, useRef, useCallback } from "react";

/* ────────────────────────────────────────────────────────
   Interactive particle / bubble background
   • Floating bubbles drift upward with gentle sway
   • Mouse proximity pushes particles away (repulsion)
   • Mouse click bursts a ring of sparkle particles
   • Adapts to light / dark theme via CSS variables
   ──────────────────────────────────────────────────────── */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  hue: number;
  drift: number;
  speed: number;
  wobblePhase: number;
  wobbleSpeed: number;
  type: "bubble" | "sparkle";
  life: number;
  maxLife: number;
}

const BUBBLE_COUNT = 60;
const MOUSE_RADIUS = 180;
const REPULSION_STRENGTH = 1.2;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function createBubble(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: 0,
    vy: 0,
    radius: randomBetween(3, 8),
    opacity: randomBetween(0.4, 0.85),
    hue: randomBetween(25, 60),
    drift: randomBetween(-0.35, 0.35),
    speed: randomBetween(0.2, 0.5),
    wobblePhase: Math.random() * Math.PI * 2,
    wobbleSpeed: randomBetween(0.01, 0.025),
    type: "bubble",
    life: Infinity,
    maxLife: Infinity,
  };
}

function createSparkle(x: number, y: number, angle: number): Particle {
  const speed = randomBetween(2, 5);
  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: randomBetween(1.5, 4),
    opacity: 1,
    hue: randomBetween(30, 55),
    drift: 0,
    speed: 0,
    wobblePhase: 0,
    wobbleSpeed: 0,
    type: "sparkle",
    life: 0,
    maxLife: randomBetween(35, 65),
  };
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const animFrame = useRef(0);
  const dims = useRef({ w: 0, h: 0 });

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    dims.current = { w, h };
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // seed bubbles on first load
    if (particles.current.filter((p) => p.type === "bubble").length === 0) {
      particles.current = Array.from({ length: BUBBLE_COUNT }, () =>
        createBubble(w, h),
      );
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouse.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouse.current = { x: -9999, y: -9999 };
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    const count = 16;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + randomBetween(-0.2, 0.2);
      particles.current.push(createSparkle(e.clientX, e.clientY, angle));
    }
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) {
      mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) {
      mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      const count = 16;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + randomBetween(-0.2, 0.2);
        particles.current.push(
          createSparkle(e.touches[0].clientX, e.touches[0].clientY, angle),
        );
      }
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    mouse.current = { x: -9999, y: -9999 };
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    const isDark = () => document.documentElement.classList.contains("dark");

    function draw() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const { w, h } = dims.current;
      const mx = mouse.current.x;
      const my = mouse.current.y;
      const dark = isDark();

      ctx.clearRect(0, 0, w, h);

      /* ── connecting lines between nearby bubbles ── */
      const bubbles = particles.current.filter((p) => p.type === "bubble");
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const dx = bubbles[i].x - bubbles[j].x;
          const dy = bubbles[i].y - bubbles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.18;
            ctx.beginPath();
            ctx.moveTo(bubbles[i].x, bubbles[i].y);
            ctx.lineTo(bubbles[j].x, bubbles[j].y);
            ctx.strokeStyle = dark
              ? `hsla(45, 80%, 70%, ${alpha})`
              : `hsla(35, 55%, 50%, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      /* ── remove dead sparkles ── */
      particles.current = particles.current.filter((p) => {
        if (p.type === "sparkle") {
          p.life++;
          return p.life < p.maxLife;
        }
        return true;
      });

      /* ── update & draw each particle ── */
      for (const p of particles.current) {
        if (p.type === "bubble") {
          // wobble
          p.wobblePhase += p.wobbleSpeed;
          const wobbleX = Math.sin(p.wobblePhase) * 0.6;

          // drift upward
          p.y -= p.speed;
          p.x += p.drift + wobbleX;

          // wrap
          if (p.y < -p.radius * 3) {
            p.y = h + p.radius * 3;
            p.x = Math.random() * w;
          }
          if (p.x < -30) p.x = w + 30;
          if (p.x > w + 30) p.x = -30;

          // mouse repulsion
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force =
              ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * REPULSION_STRENGTH;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }

          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.92;
          p.vy *= 0.92;

          // ---- draw bubble ----
          // outer glow
          const glowR = p.radius * 3;
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
          if (dark) {
            grad.addColorStop(
              0,
              `hsla(${p.hue}, 85%, 75%, ${p.opacity * 0.65})`,
            );
            grad.addColorStop(
              0.5,
              `hsla(${p.hue}, 75%, 65%, ${p.opacity * 0.25})`,
            );
            grad.addColorStop(1, `hsla(${p.hue}, 65%, 55%, 0)`);
          } else {
            grad.addColorStop(
              0,
              `hsla(${p.hue}, 65%, 50%, ${p.opacity * 0.55})`,
            );
            grad.addColorStop(
              0.5,
              `hsla(${p.hue}, 55%, 45%, ${p.opacity * 0.2})`,
            );
            grad.addColorStop(1, `hsla(${p.hue}, 45%, 40%, 0)`);
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          // solid dot core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = dark
            ? `hsla(${p.hue}, 90%, 82%, ${p.opacity * 0.8})`
            : `hsla(${p.hue}, 70%, 48%, ${p.opacity * 0.7})`;
          ctx.fill();
        } else {
          /* ── sparkle particle ── */
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.95;
          p.vy *= 0.95;
          p.vy += 0.04; // gravity

          const progress = p.life / p.maxLife;
          const alpha = 1 - progress;
          const size = p.radius * (1 - progress * 0.4);

          // glow
          const sGrad = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            size * 5,
          );
          if (dark) {
            sGrad.addColorStop(0, `hsla(${p.hue}, 100%, 88%, ${alpha * 0.9})`);
            sGrad.addColorStop(
              0.4,
              `hsla(${p.hue}, 90%, 72%, ${alpha * 0.35})`,
            );
            sGrad.addColorStop(1, `hsla(${p.hue}, 80%, 60%, 0)`);
          } else {
            sGrad.addColorStop(0, `hsla(${p.hue}, 85%, 55%, ${alpha * 0.85})`);
            sGrad.addColorStop(0.4, `hsla(${p.hue}, 70%, 48%, ${alpha * 0.3})`);
            sGrad.addColorStop(1, `hsla(${p.hue}, 60%, 42%, 0)`);
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 5, 0, Math.PI * 2);
          ctx.fillStyle = sGrad;
          ctx.fill();

          // cross sparkle
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(progress * Math.PI);
          ctx.beginPath();
          ctx.moveTo(0, -size * 2.5);
          ctx.lineTo(0, size * 2.5);
          ctx.moveTo(-size * 2.5, 0);
          ctx.lineTo(size * 2.5, 0);
          ctx.strokeStyle = dark
            ? `hsla(${p.hue}, 100%, 92%, ${alpha * 0.7})`
            : `hsla(${p.hue}, 85%, 60%, ${alpha * 0.6})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.restore();
        }
      }

      /* ── cursor glow ── */
      if (mx > 0 && my > 0) {
        const cg = ctx.createRadialGradient(mx, my, 0, mx, my, 130);
        if (dark) {
          cg.addColorStop(0, "hsla(45, 85%, 72%, 0.08)");
          cg.addColorStop(0.5, "hsla(45, 75%, 62%, 0.03)");
          cg.addColorStop(1, "hsla(45, 65%, 55%, 0)");
        } else {
          cg.addColorStop(0, "hsla(40, 65%, 55%, 0.06)");
          cg.addColorStop(0.5, "hsla(40, 55%, 48%, 0.02)");
          cg.addColorStop(1, "hsla(40, 45%, 42%, 0)");
        }
        ctx.beginPath();
        ctx.arc(mx, my, 130, 0, Math.PI * 2);
        ctx.fillStyle = cg;
        ctx.fill();
      }

      animFrame.current = requestAnimationFrame(draw);
    }

    animFrame.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrame.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    handleResize,
    handleMouseMove,
    handleMouseLeave,
    handleClick,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ display: "block" }}
    />
  );
}
