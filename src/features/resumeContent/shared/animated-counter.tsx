import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

type AnimatedCounterProps = {
  target: string;
  duration?: number;
};

export default function AnimatedCounter({
  target,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  const numericMatch = target.match(/^(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = target.replace(/^\d+/, "");

  useEffect(() => {
    if (hasAnimated || numericValue === 0) {
      if (numericValue === 0) setDisplay(target);
      return;
    }

    // Start counting immediately after mount with a short delay
    const startDelay = setTimeout(() => {
      setHasAnimated(true);
      let startTime: number | null = null;
      let animationFrame: number;

      function animate(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1,
        );
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * numericValue);
        setDisplay(`${current}${suffix}`);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      }

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, 600);

    return () => clearTimeout(startDelay);
  }, [hasAnimated, numericValue, suffix, duration, target]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      {display}
    </motion.span>
  );
}
