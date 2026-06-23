import Header from "@/components/Header.tsx";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import BridalShowcase from "@/components/BridalShowcase";
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
      <BridalShowcase></BridalShowcase>
      <StatsSection></StatsSection>
      <ServicesGallery></ServicesGallery>
      <TestimonialsSection></TestimonialsSection>
      <AboutSection></AboutSection>
      <MapSection></MapSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
};
export default Index;
