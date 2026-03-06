import { useState } from "react";
import { motion } from "motion/react";

export default function MagneticLink({
  href,
  label,
  children,
  size = "sm",
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  size?: "sm" | "lg";
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const padding = size === "lg" ? "p-3" : "p-2.5";
  const iconSize = size === "lg" ? "h-5 w-5" : "h-4 w-4";

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setPos({
          x: (e.clientX - centerX) * 0.3,
          y: (e.clientY - centerY) * 0.3,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className={`${padding} rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors`}
    >
      <span className={iconSize}>{children}</span>
    </motion.a>
  );
}
