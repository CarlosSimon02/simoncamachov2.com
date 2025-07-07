import ContentNumberSpy from "@/components/organisms/ContentNumberSpy";
import AboutSection from "./_components/AboutSection";
import ConnectSection from "./_components/ConnectSection";
import ExperienceSection from "./_components/ExperienceSection";
import HeroSection from "./_components/HeroSection";
import ProjectsSection from "./_components/ProjectsSection";

const Home = () => {
  return (
    <div>
      <ContentNumberSpy />
      <HeroSection className="h-auto min-h-[calc(100vh-2.75rem)] py-14 md:min-h-[calc(100vh-3.5rem)] md:py-20 lg:min-h-[calc(100vh-4rem)]" />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ConnectSection />
    </div>
  );
};

export default Home;
