import { motion } from "motion/react";
import { Code2, Trophy } from "lucide-react";
import Reveal from "../shared/reveal.tsx";
import AnimatedCounter from "../shared/animated-counter.tsx";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div className="space-y-6">
              <p className="text-sm font-medium tracking-widest text-primary uppercase">
                About me
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                Building scalable products with precision
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I{"'"}m a Software Engineer with a proven ability to lead
                  frontend development, collaborate across teams, and deliver
                  production-grade systems. Currently working at{" "}
                  <span className="text-foreground font-medium">
                    Bynry Technologies
                  </span>
                  , building SaaS solutions for utility and energy management.
                </p>
                <p>
                  My expertise lies in creating high-performance web and mobile
                  applications with clean architecture. I specialize in
                  component-driven development, RBAC-based access control, and
                  optimizing rendering pipelines for smooth user experiences.
                </p>
                <p>
                  From designing scalable frontend architectures to implementing
                  offline-first mobile apps, I focus on writing code that is
                  maintainable, performant, and delivers real value.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "3+", label: "Years in Tech" },
                { value: "5+", label: "Production Apps" },
                { value: "Go Better", label: "Award Winner", isText: true },
                { value: "Full Stack", label: "Web & Mobile", isText: true },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  }}
                  className="bg-card border border-border rounded-xl p-6 text-center transition-colors"
                >
                  {"isText" in stat && stat.isText ? (
                    <>
                      {stat.value === "Go Better" && (
                        <Trophy className="h-7 w-7 text-primary mx-auto mb-2" />
                      )}
                      {stat.value === "Full Stack" && (
                        <Code2 className="h-7 w-7 text-primary mx-auto mb-2" />
                      )}
                      <p className="text-lg sm:text-xl font-serif font-bold text-primary">
                        {stat.value}
                      </p>
                    </>
                  ) : (
                    <p className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                      <AnimatedCounter target={stat.value} />
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
