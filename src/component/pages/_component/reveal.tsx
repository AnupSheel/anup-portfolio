import type { ReactNode } from "react";
import { motion } from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
};

// Animate on mount with staggered delays — no viewport detection needed
export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const initial = {
    up: { opacity: 0, y: 30 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
    scale: { opacity: 0, scale: 0.9 },
  }[direction];

  const target = {
    up: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    scale: { opacity: 1, scale: 1 },
  }[direction];

  return (
    <motion.div
      initial={initial}
      animate={target}
      transition={{
        duration: 0.6,
        delay: delay + 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
