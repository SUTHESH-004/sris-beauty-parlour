import Header from "@/components/Header.tsx";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import ServicesGallery from "@/components/ServicesGallery";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header></Header>
      <HeroSection></HeroSection>
      <StatsSection></StatsSection>
      <MapSection></MapSection>
      <ServicesGallery></ServicesGallery>
      <TestimonialsSection></TestimonialsSection>
      <ContactSection></ContactSection>
      <AboutSection></AboutSection>
      <Footer></Footer>
    </div>
  );
};
export default Index;
