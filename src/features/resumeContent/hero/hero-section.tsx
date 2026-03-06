import { motion } from "motion/react";
import {
  ArrowDown,
  Briefcase,
  Download,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "../../../component/ui/button.tsx";
import FloatingParticles from "../shared/floating-particles.tsx";
import TypewriterText from "../shared/typewriter-text.tsx";
import MagneticLink from "../shared/magnetic-link.tsx";
import { RESUME_URL, scrollToSection } from "../shared/constants.ts";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <FloatingParticles count={25} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-12 w-full relative z-10">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <MapPin className="h-3.5 w-3.5" />
              Pune, India
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-600 dark:text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight"
          >
            Hi, I{"'"}m Anup Sheel
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl font-medium h-10"
          >
            <TypewriterText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Experienced in building scalable web and mobile applications using{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">React Native</span>,
            and <span className="text-foreground font-medium">TypeScript</span>.
            Skilled in performance optimization, state management, and API
            integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="gap-2"
              >
                <Briefcase className="h-4 w-4" />
                View my work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.open(RESUME_URL, "_blank")}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-5 pt-2"
          >
            <MagneticLink
              href="https://linkedin.com/in/anup-sheel-9131a6208"
              label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </MagneticLink>
            <MagneticLink href="mailto:anupsheel97@gmail.com" label="Email">
              <Mail className="h-4 w-4" />
            </MagneticLink>
            <MagneticLink href="tel:+918788101061" label="Phone">
              <Phone className="h-4 w-4" />
            </MagneticLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
