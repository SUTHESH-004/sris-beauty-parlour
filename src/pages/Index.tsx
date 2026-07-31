import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, [location.hash]);

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
