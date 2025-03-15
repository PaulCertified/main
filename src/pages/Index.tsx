import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSectionEmailJS from "@/components/ContactSectionEmailJS";
import CertificatesSection from "@/components/CertificatesSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificatesSection />
      <SkillsSection />
      <ContactSectionEmailJS />
    </main>
  );
};

export default Index;
