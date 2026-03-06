import { motion } from "motion/react";

export default function SkillTag({ name }: { name: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-medium cursor-default select-none inline-block transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      {name}
    </motion.span>
  );
}
