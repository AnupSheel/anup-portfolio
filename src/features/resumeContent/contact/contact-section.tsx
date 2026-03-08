import { motion } from "motion/react";
import { Download, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "../../../component/ui/button.tsx";
import Reveal from "../shared/reveal.tsx";
import FloatingParticles from "../shared/floating-particles.tsx";
import MagneticLink from "../shared/magnetic-link.tsx";
import { RESUME_URL } from "../shared/constants.ts";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <FloatingParticles count={12} />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <div className="space-y-4">
            <p className="text-sm font-medium tracking-widest text-primary uppercase">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
              Let{"'"}s work together
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Looking for a frontend engineer who can lead development, optimize
              performance, and deliver production-ready systems? Let
              {"'"}s connect.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="gap-2"
                onClick={() => window.open("mailto:anupsheel97@gmail.com")}
              >
                <Mail className="h-4 w-4" />
                anupsheel97@gmail.com
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                onClick={() => window.open("tel:+918788101061")}
              >
                <Phone className="h-4 w-4" />
                +91 8788101061
              </Button>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex items-center justify-center gap-5 pt-8">
            <MagneticLink
              href="https://linkedin.com/in/anup-sheel-9131a6208"
              label="LinkedIn"
              size="lg"
            >
              <Linkedin className="h-5 w-5" />
            </MagneticLink>
            <MagneticLink
              href="mailto:anupsheel97@gmail.com"
              label="Email"
              size="lg"
            >
              <Mail className="h-5 w-5" />
            </MagneticLink>
            <MagneticLink href={RESUME_URL} label="Download Resume" size="lg">
              <Download className="h-5 w-5" />
            </MagneticLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
