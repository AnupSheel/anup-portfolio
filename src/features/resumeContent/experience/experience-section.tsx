import { motion } from "motion/react";
import Reveal from "../shared/reveal.tsx";
import { EXPERIENCE } from "../shared/constants.ts";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-medium tracking-widest text-primary uppercase">
              Career
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
              Work Experience
            </h2>
          </div>
        </Reveal>

        <div className="space-y-0">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 0.15}>
              <motion.div
                whileHover={{ x: 4 }}
                className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border hover:border-primary/40 transition-colors"
              >
                {/* Animated timeline dot */}
                <motion.div
                  className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background"
                  whileHover={{
                    scale: 1.5,
                    backgroundColor: "var(--primary)",
                  }}
                />
                <div className="space-y-3">
                  <p className="text-xs font-medium tracking-wider text-primary uppercase">
                    {exp.period}
                  </p>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm font-medium text-foreground/80">
                    {exp.company}
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    {exp.companyDescription}
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    {exp.highlights.map((item) => (
                      <motion.li
                        key={item}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground cursor-default"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
