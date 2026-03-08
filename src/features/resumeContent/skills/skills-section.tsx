import { motion } from "motion/react";
import Reveal from "../shared/reveal.tsx";
import SkillTag from "../shared/skill-tag.tsx";
import { Card, CardContent } from "../../../component/ui/card.tsx";
import { SKILL_CATEGORIES } from "../shared/constants.ts";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-medium tracking-widest text-primary uppercase">
              Tech stack
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
              Skills {"&"} Technologies
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">
              Hover over the tags to interact with them
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, i) => (
            <Reveal key={category.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow hover:border-primary/20">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-sm text-primary">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <SkillTag key={item} name={item} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
