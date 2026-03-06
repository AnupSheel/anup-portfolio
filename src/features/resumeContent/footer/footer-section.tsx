import { motion } from "motion/react";
import { User } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="font-serif text-lg font-bold tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          AS<span className="text-primary">.</span>
        </motion.span>
        <p className="text-sm text-muted-foreground">
          {"\u00A9"} {new Date().getFullYear()} Anup Sheel. All rights reserved.
        </p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <User className="h-3.5 w-3.5" />
          <span>Pune, India</span>
        </div>
      </div>
    </footer>
  );
}
