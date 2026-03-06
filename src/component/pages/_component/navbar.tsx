import { motion } from "motion/react";
import { Download } from "lucide-react";
import { Button } from "../../ui/button.tsx";
import { NAV_ITEMS, RESUME_URL, scrollToSection } from "./constants.ts";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-[3px] left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="font-serif text-xl font-bold tracking-tight text-foreground cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          AS<span className="text-primary">.</span>
        </motion.span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item)}
              className="hover:text-foreground transition-colors capitalize cursor-pointer"
            >
              {item}
            </motion.button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            className="gap-2 hidden sm:inline-flex"
            onClick={() => window.open(RESUME_URL, "_blank")}
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </Button>
          <Button size="sm" onClick={() => scrollToSection("contact")}>
            Get in touch
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
