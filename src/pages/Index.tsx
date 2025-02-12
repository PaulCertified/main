
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import CertificatesSection from "@/components/CertificatesSection";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificatesSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
