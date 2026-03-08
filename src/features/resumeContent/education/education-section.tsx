import { motion } from "motion/react";
import { GraduationCap, Trophy } from "lucide-react";
import Reveal from "../shared/reveal.tsx";
import TiltCard from "../shared/tilt-card.tsx";
import { Card, CardContent } from "../../../component/ui/card.tsx";
import { EDUCATION } from "../shared/constants.ts";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-medium tracking-widest text-primary uppercase">
              Education
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
              Academic Background
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.15} direction="scale">
              <TiltCard className="relative h-full" tiltAmount={6}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-3">
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      transition={{ type: "spring" }}
                    >
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.field}
                      </p>
                    </div>
                    <p className="text-sm font-medium">{edu.school}</p>
                    <p className="text-xs text-primary font-medium tracking-wider uppercase">
                      {edu.period}
                    </p>
                  </CardContent>
                </Card>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Achievement */}
        <Reveal delay={0.3}>
          <motion.div whileHover={{ scale: 1.01 }} className="mt-12">
            <Card className="border-primary/20 bg-[#fefce8] dark:bg-[#2e1d0f] hover:shadow-lg transition-shadow relative z-[2]">
              <CardContent className="p-6 flex items-start gap-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <Trophy className="h-8 w-8 text-primary shrink-0 mt-1" />
                </motion.div>
                <div>
                  <h3 className="font-semibold">
                    Go Better Award — Website Optimization
                  </h3>
                  <p className="text-xs text-primary font-medium tracking-wider uppercase mt-1">
                    November 2024
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Recognized for improving website performance and
                    responsiveness. Developed responsive templates enhancing
                    user experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
