import Header from "@/components/Header.tsx";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import PreciousMoments from "@/components/PreciousMoments";
import ServicesGallery from "@/components/ServicesGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header></Header>
      <HeroSection></HeroSection>
      <PreciousMoments />

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
