import { useScroll, useTransform, motion } from "motion/react";
import AnimatedBackground from "../../features/resumeContent/shared/animated-background.tsx";
import Navbar from "../../features/resumeContent/navbar/navbar.tsx";
import HeroSection from "../../features/resumeContent/hero/hero-section.tsx";
import AboutSection from "../../features/resumeContent/about/about-section.tsx";
import ProjectsSection from "../../features/resumeContent/projects/projects-section.tsx";
import SkillsSection from "../../features/resumeContent/skills/skills-section.tsx";
import ExperienceSection from "../../features/resumeContent/experience/experience-section.tsx";
import EducationSection from "../../features/resumeContent/education/education-section.tsx";
import ContactSection from "../../features/resumeContent/contact/contact-section.tsx";
import FooterSection from "../../features/resumeContent/footer/footer-section.tsx";

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
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
