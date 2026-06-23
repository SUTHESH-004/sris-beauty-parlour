import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, ArrowRight, MapPin, Clock, Gift, Briefcase, X } from "lucide-react";
import { logo, srisNameMark, heroBeautyIllustration } from "@/assets/assets";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showOffers, setShowOffers] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let rafId = 0;
    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafId = 0;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Full Background Image */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.4}px, 0) scale(${1 + scrollY * 0.0005})`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src={heroBeautyIllustration}
          alt="Beauty artist in a pink salon holding skincare and makeup products"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />
      </div>

      {/* Subtle animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-28">
        <div className="max-w-xl md:max-w-2xl">
          {/* Glassmorphism card */}
          <div className="relative backdrop-blur-md bg-background/40 border border-primary/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/40 rounded-br-3xl" />

            {/* Logo + Brand + Headline row */}
            <div
              className={`relative flex items-center gap-4 md:gap-6 mb-5 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              {/* Left: Name image + Headline */}
              <div className="flex-1 min-w-0">
                {/* Name mark */}
                <div className="relative h-[50px] w-[160px] sm:h-[65px] sm:w-[210px] md:h-[80px] md:w-[260px] overflow-hidden mb-3">
                  <img
                    src={srisNameMark}
                    alt="Sri's Beauty Parlour"
                    className="absolute h-[140%] w-[140%] -top-[22%] -left-[6%] object-cover drop-shadow-sm"
                  />
                </div>
                {/* Headline */}
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-1">
                  Your Beauty,
                </h1>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1]">
                  <span className="text-primary relative inline-block">
                    Our Passion
                    <svg
                      className="absolute -bottom-1 left-0 w-full"
                      viewBox="0 0 200 8"
                      fill="none"
                    >
                      <path
                        d="M2 6C50 2 150 2 198 6"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="200"
                        strokeDashoffset="200"
                        style={{
                          animation: isLoaded
                            ? "draw 1.2s ease-out 0.8s forwards"
                            : "none",
                        }}
                      />
                    </svg>
                  </span>
                </h1>
              </div>

              {/* Right: Logo */}
              <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36">
                <div className="absolute -inset-3 bg-primary/10 rounded-full blur-xl" />
                <img
                  src={logo}
                  alt="Sri's Beauty Parlour Logo"
                  className="relative h-full w-full object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Description */}
            <p
              className={`text-base text-muted-foreground leading-relaxed mb-7 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Expert bridal makeup, hair styling & skincare by{" "}
              <strong className="text-foreground">Jamuna</strong> — 5+ years
              making every client feel beautiful and confident.
            </p>

            {/* CTA Buttons */}
            <div
              className={`space-y-3 mb-6 transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Button
                size="lg"
                className="w-full gap-3 group hover:scale-[1.02] transition-all shadow-lg text-base py-6 rounded-xl"
                asChild
              >
                <a
                  href="https://wa.me/919790674312?text=Hi%20I%20want%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                  <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 group hover:scale-[1.02] transition-all bg-background/50 py-5 rounded-xl"
                  asChild
                >
                  <a href="mailto:srisparlour1223@gmail.com">
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 group hover:scale-[1.02] transition-all bg-background/50 py-5 rounded-xl"
                  asChild
                >
                  <a href="tel:+919790674312">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Services tags */}
            <div
              className={`flex flex-wrap gap-2 transition-all duration-700 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            >
              {["Bridal Makeup", "Hair Styling", "Skincare", "Facials"].map(
                (service) => (
                  <span
                    key={service}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-muted-foreground"
                  >
                    {service}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm overflow-hidden py-2.5 border-t border-primary/20">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 25s linear infinite" }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 shrink-0">
              <a
                href="#location"
                onClick={(e) => { e.preventDefault(); document.getElementById("location")?.scrollIntoView({ behavior: "smooth" }); }}
                className="flex items-center gap-2 text-foreground text-sm hover:text-primary transition-colors cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-primary" />
                22/7, Kumaran Hardware Building, Near Muthoot Finance, Kinathukadavu, Tamil Nadu 642109
              </a>
              <span className="text-foreground/20">|</span>
              <span className="flex items-center gap-2 text-foreground text-sm">
                <Clock className="w-3.5 h-3.5 text-primary" />
                Open Daily: 9 AM – 8 PM
              </span>
              <span className="text-foreground/20">|</span>
              <span className="flex items-center gap-2 text-foreground text-sm">
                <Phone className="w-3.5 h-3.5 text-primary" />
                +91 97906 74312
              </span>
              <span className="text-foreground/20">|</span>
              <span className="flex items-center gap-2 text-foreground text-sm">
                <Briefcase className="w-3.5 h-3.5 text-primary" />
                On-location service available
              </span>
              <span className="text-foreground/20">|</span>
              <button
                onClick={() => setShowOffers(true)}
                className="flex items-center gap-2 text-primary text-sm font-semibold hover:text-primary/70 transition-colors"
              >
                <Gift className="w-3.5 h-3.5" />
                Book now for 10% off — Festive Offers!
              </button>
              <span className="text-foreground/20 mr-8">|</span>
            </div>
          ))}
        </div>
      </div>

      {/* Offers Popup */}
      {showOffers && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowOffers(false)}>
          <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" />
          <div
            className="relative bg-card rounded-3xl shadow-2xl max-w-md w-full p-8 border border-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowOffers(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                <Gift className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Festive Offers
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Celebrate this season with exclusive deals at Sri's Beauty Parlour
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                <span className="text-2xl font-bold text-primary">10%</span>
                <div>
                  <p className="font-medium text-foreground text-sm">Off on Bridal Packages</p>
                  <p className="text-muted-foreground text-xs">Full bridal makeup + hair + mehndi</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                <span className="text-2xl font-bold text-primary">15%</span>
                <div>
                  <p className="font-medium text-foreground text-sm">Off on Skincare Combos</p>
                  <p className="text-muted-foreground text-xs">Facial + cleanup + hair spa</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                <span className="text-2xl font-bold text-primary">Free</span>
                <div>
                  <p className="font-medium text-foreground text-sm">Mehndi with Reception Package</p>
                  <p className="text-muted-foreground text-xs">Book reception makeup & get mehndi free</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full gap-2 rounded-xl py-5 text-base" asChild>
              <a
                href="https://wa.me/919790674312?text=Hi%20I%20saw%20the%20festive%20offers%20and%20would%20like%20to%20book"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Book Now on WhatsApp
              </a>
            </Button>

            <p className="text-center text-muted-foreground text-xs mt-4">
              Valid for a limited time. Terms apply.
            </p>
          </div>
        </div>
      )}

      {/* SVG animation keyframe */}
      <style>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
