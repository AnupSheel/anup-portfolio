import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowDown,
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Trophy,
  User,
} from "lucide-react";
import Reveal from "./_component/reveal.tsx";
import FloatingParticles from "./_component/floating-particles.tsx";
import AnimatedBackground from "./_component/animated-background.tsx";
import { Button } from "../ui/button.tsx";
import { Card, CardContent } from "../ui/card.tsx";
import TiltCard from "./_component/tilt-card.tsx";
import AnimatedCounter from "./_component/animated-counter.tsx";
import TypewriterText from "./_component/typewriter-text.tsx";

const RESUME_URL = "https://cdn.hercules.app/file_VFilwUb3haa2m7efC9uSyNHf";

const PROJECTS = [
  {
    title: "Smart Bill Submetering",
    company: "Bynry",
    description:
      "Led frontend development of a smart utility billing system with authentication, RBAC, and permission management. Designed scalable architecture with reusable components and optimized UI performance.",
    tags: ["React", "TypeScript", "Tailwind CSS", "RBAC"],
    image: "https://cdn.hercules.app/file_hJeBT3nZPPG5UGq6F7cQPVeP",
    type: "professional" as const,
  },
  {
    title: "Smart360 Platform",
    company: "Bynry",
    description:
      "Led frontend development for a large-scale enterprise platform. Built scalable dashboards and reusable UI components, designed architecture for complex data workflows.",
    tags: ["React", "TypeScript", "Dashboards", "Data Workflows"],
    image: "https://cdn.hercules.app/file_YahooDZ1BNlmCYX0OW9RWR0S",
    type: "professional" as const,
  },
  {
    title: "Field Force Mobile App",
    company: "Bynry",
    description:
      "Built a cross-platform mobile app with offline-first data handling using Zustand and Realm. Enabled seamless data sync in low-connectivity environments.",
    tags: ["React Native", "Zustand", "Realm", "Offline-First"],
    image: "https://cdn.hercules.app/file_K0a7AH1fV1l1u9gZ0Xtz6eag",
    type: "professional" as const,
  },
  {
    title: "Recipe Vlog Web App",
    company: "Personal Project",
    description:
      "Built a full CRUD application for managing and browsing recipes. Designed an admin panel for recipe management with API integration using Axios for seamless data handling.",
    tags: ["Angular", "HTML", "CSS", "Bootstrap", "Axios"],
    image: "https://cdn.hercules.app/file_mArjoC0oecc03ijnAfPho2G6",
    type: "personal" as const,
  },
  {
    title: "Amazon Clone",
    company: "Personal Project",
    description:
      "Built a responsive e-commerce UI replicating the Amazon shopping experience with product listings, navigation, and modern layout using pure HTML5 and CSS3.",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    image: "https://cdn.hercules.app/file_FzD5Px6Dzj7TT44EtMDtR6km",
    type: "personal" as const,
  },
];

const SKILL_CATEGORIES = [
  { name: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { name: "Frontend", items: ["React", "Angular", "React Native"] },
  {
    name: "State Management",
    items: ["Zustand", "Context API", "TanStack Query"],
  },
  { name: "UI Frameworks", items: ["Tailwind CSS", "Material UI", "Ng-Zorro"] },
  { name: "Database", items: ["MySQL", "Realm"] },
  { name: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Bynry Technologies Pvt. Ltd.",
    companyDescription:
      "SaaS product company building solutions for utility and energy management",
    period: "Jan 2025 — Present",
    highlights: [
      "Led frontend development and delivered scalable product features",
      "Built high-performance applications using React, TypeScript, Tailwind CSS",
      "Developed cross-platform features using React Native",
      "Implemented authentication and RBAC-based access control",
      "Optimized rendering and API handling for improved performance",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Bynry Technologies Pvt. Ltd.",
    companyDescription:
      "SaaS product company building solutions for utility and energy management",
    period: "Apr 2024 — Jan 2025",
    highlights: [
      "Developed UI using Angular, React, Tailwind CSS, and Material UI",
      "Built reusable components and improved frontend architecture",
      "Integrated REST APIs and handled service-layer logic",
      "Performed unit testing using Jasmine and Karma",
    ],
  },
  {
    role: "Associate Consultant — Oracle HCM ERP",
    company: "Mastek India Ltd.",
    companyDescription:
      "Global IT services company specializing in enterprise digital transformation",
    period: "May 2022 — Apr 2023",
    highlights: [
      "Supported Oracle HCM modules for enterprise clients",
      "Configured and resolved system issues",
      "Gathered requirements and delivered solutions",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Engineering (BE)",
    field: "Electronics and Telecommunication",
    school: "Sinhgad College of Engineering, Pune",
    period: "2019 — 2022",
  },
  {
    degree: "Diploma",
    field: "Electronics and Telecommunication",
    school: "Government Polytechnic, Nagpur",
    period: "2016 — 2019",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* ─── Magnetic social button ──── */
function MagneticLink({
  href,
  label,
  children,
  size = "sm",
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  size?: "sm" | "lg";
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const padding = size === "lg" ? "p-3" : "p-2.5";
  const iconSize = size === "lg" ? "h-5 w-5" : "h-4 w-4";

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setPos({
          x: (e.clientX - centerX) * 0.3,
          y: (e.clientY - centerY) * 0.3,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className={`${padding} rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors`}
    >
      <span className={iconSize}>{children}</span>
    </motion.a>
  );
}

/* ─── Interactive skill tag ──── */
function SkillTag({ name }: { name: string }) {
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

export default function Index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[60]"
      />

      {/* Navigation */}
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
            {[
              "about",
              "projects",
              "skills",
              "experience",
              "education",
              "contact",
            ].map((item) => (
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

      {/* ─── HERO ─── */}
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
              and{" "}
              <span className="text-foreground font-medium">TypeScript</span>.
              Skilled in performance optimization, state management, and API
              integration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="gap-2"
                >
                  <Briefcase className="h-4 w-4" />
                  View my work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
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

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 sm:py-32 bg-muted/30">
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
                    My expertise lies in creating high-performance web and
                    mobile applications with clean architecture. I specialize in
                    component-driven development, RBAC-based access control, and
                    optimizing rendering pipelines for smooth user experiences.
                  </p>
                  <p>
                    From designing scalable frontend architectures to
                    implementing offline-first mobile apps, I focus on writing
                    code that is maintainable, performant, and delivers real
                    value.
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

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="py-24 sm:py-32">
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

      {/* ─── SKILLS ─── */}
      <section id="skills" className="py-24 sm:py-32 bg-muted/30">
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

      {/* ─── EXPERIENCE ─── */}
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

      {/* ─── EDUCATION ─── */}
      <section id="education" className="py-24 sm:py-32 bg-muted/30">
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
              <Card className="border-primary/20 bg-primary/5 hover:shadow-lg transition-shadow">
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

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
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
                Looking for a frontend engineer who can lead development,
                optimize performance, and deliver production-ready systems? Let
                {"'"}s connect.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() => window.open("mailto:anupsheel97@gmail.com")}
                >
                  <Mail className="h-4 w-4" />
                  anupsheel97@gmail.com
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
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

      {/* ─── FOOTER ─── */}
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
            {"\u00A9"} {new Date().getFullYear()} Anup Sheel. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <User className="h-3.5 w-3.5" />
            <span>Pune, India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
