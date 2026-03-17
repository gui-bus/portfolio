import { MainClientLayout } from "@/components/common/mainClientLayout";
import { HeroSection } from "@/components/sections/heroSection";
import { MethodologySection } from "@/components/sections/methodologySection";
import { ServicesSection } from "@/components/sections/servicesSection";
import { ProjectsSection } from "@/components/sections/projectsSection";
import { TechStackSection } from "@/components/sections/techStackSection";
import { WorkflowSection } from "@/components/sections/workflowSection";
import { ContactSection } from "@/components/sections/contactSection";
import { Footer } from "@/components/common/footer";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen selection:bg-blue-600/20 dark:selection:bg-blue-500/30 selection:text-blue-600 dark:selection:text-blue-500 transition-colors duration-500">
      <MainClientLayout>
        <HeroSection />
        <MethodologySection />
        <ServicesSection />
        <ProjectsSection />
        <TechStackSection />
        <WorkflowSection />
        <ContactSection />
        <Footer />
      </MainClientLayout>
    </div>
  );
}
