import ContentNumberSpy from "@/components/organisms/ContentNumberSpy";
import { styles } from "../utils";
import AboutSection from "./_components/AboutSection";
import ConnectSection from "./_components/ConnectSection";
import ExperienceSection from "./_components/ExperienceSection";
import HeroSection from "./_components/HeroSection";
import ProjectsSection from "./_components/ProjectsSection";

const Home = () => {
  return (
    <div>
      <ContentNumberSpy />
      <HeroSection className={styles.layoutHeights.heroSection} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ConnectSection />
    </div>
  );
};

export default Home;
