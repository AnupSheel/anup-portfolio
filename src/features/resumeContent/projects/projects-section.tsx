import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import Reveal from "../shared/reveal.tsx";
import TiltCard from "../shared/tilt-card.tsx";
import SkillTag from "../shared/skill-tag.tsx";
import { Card, CardContent } from "../../../component/ui/card.tsx";
import { PROJECTS } from "../shared/constants.ts";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-medium tracking-widest text-primary uppercase">
              Featured work
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
              Projects I{"'"}ve built
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Production applications and personal projects spanning utility
              management, enterprise platforms, mobile solutions, and web
              development.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.15} direction="scale">
              <TiltCard className="relative h-full">
                <Card className="group overflow-hidden pt-0 h-full hover:shadow-xl transition-shadow duration-300 border-border/60">
                  <div className="aspect-video overflow-hidden relative">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />
                    <span
                      className={`absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-sm ${
                        project.type === "personal"
                          ? "bg-accent/80 text-accent-foreground"
                          : "bg-primary/80 text-primary-foreground"
                      }`}
                    >
                      {project.type === "personal"
                        ? "Personal"
                        : "Professional"}
                    </span>
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {project.title}
                        </h3>
                        <p className="text-xs font-medium text-primary">
                          {project.company}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ rotate: -45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                      </motion.div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <SkillTag key={tag} name={tag} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
