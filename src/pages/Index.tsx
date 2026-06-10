import Header from "@/components/Header.tsx";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header></Header>
      <HeroSection></HeroSection>
      <MapSection></MapSection>
    </div>
  );
};
export default Index;
