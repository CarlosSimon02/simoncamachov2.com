import HeroSection from "./_components/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection className="h-auto min-h-[calc(100vh-2.75rem)] py-14 md:min-h-[calc(100vh-3.5rem)] md:py-20 lg:min-h-[calc(100vh-4rem)]" />
    </div>
  );
};

export default Home;
