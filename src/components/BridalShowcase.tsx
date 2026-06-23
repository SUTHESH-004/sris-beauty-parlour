import {
  MessageCircle,
  ArrowRight,
  Heart,
  Sparkles,
  Crown,
  Gem,
  PartyPopper,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { bridalMakeup, bridalPortfolio, receptionPortfolio } from "@/assets/assets";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const occasions = [
  {
    icon: Crown,
    title: "Bridal Makeup",
    description:
      "Look like royalty on your wedding day with our signature bridal artistry — from traditional to modern looks.",
    highlight: "500+ Happy Brides",
  },
  {
    icon: Gem,
    title: "Engagement & Reception",
    description:
      "Stunning glam for your engagement ceremony, reception, and sangeet — every event deserves a unique look.",
    highlight: "Head-Turning Looks",
  },
  {
    icon: PartyPopper,
    title: "Festivals & Celebrations",
    description:
      "From Diwali to Pongal, look your festive best with our skincare, hair, and makeup services.",
    highlight: "Celebrate in Style",
  },
  {
    icon: Camera,
    title: "Photoshoots & Events",
    description:
      "Camera-ready makeup and styling for pre-wedding shoots, birthdays, baby showers, and more.",
    highlight: "Picture Perfect",
  },
];

const BridalShowcase = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: galleryRef, isVisible: galleryVisible } =
    useScrollAnimation(0.15);
  const { ref: occasionsRef, isVisible: occasionsVisible } =
    useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section className="py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-primary font-medium mb-4 tracking-widest uppercase flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Every Moment Matters
            <Sparkles className="w-4 h-4" />
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Make Your Precious Moments{" "}
            <span className="text-primary">Unforgettable</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From your wedding day to everyday confidence — Sri's Beauty Parlour
            is here to make every occasion special with expert care and
            personalized styling.
          </p>
        </div>

        {/* Gallery */}
        <div
          ref={galleryRef}
          className={`max-w-6xl mx-auto mb-28 transition-all duration-1000 ${galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <div className="relative grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 relative group">
              <div className="absolute -inset-3 bg-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-4/5 md:aspect-3/4">
                <img
                  src={bridalMakeup}
                  alt="Beautiful bridal transformation at Sri's Beauty Parlour"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="w-5 h-5 text-primary-foreground" />
                    <span className="text-primary-foreground font-serif text-xl font-bold">
                      Your Day, Your Glow
                    </span>
                  </div>
                  <p className="text-primary-foreground/80 text-sm">
                    Expert styling for every celebration that matters to you
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl aspect-square">
                <img
                  src={bridalPortfolio}
                  alt="Stunning makeup for special occasions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-primary-foreground font-serif font-bold">
                    Wedding Glam
                  </span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-xl aspect-4/3">
                <img
                  src={receptionPortfolio}
                  alt="Glamorous reception and event makeup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-primary-foreground font-serif font-bold">
                    Event Ready
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex absolute -right-4 top-12 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-lg items-center gap-3 z-10">
              <Heart className="w-5 h-5 fill-primary-foreground" />
              <span className="font-bold text-sm">
                Trusted by 1000+ Clients
              </span>
            </div>
          </div>
        </div>

        {/* Occasions Grid */}
        <div ref={occasionsRef} className="max-w-6xl mx-auto mb-20">
          <h3
            className={`font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-16 transition-all duration-700 ${occasionsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            We're Here for Every Occasion
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion, index) => {
              const Icon = occasion.icon;
              return (
                <div
                  key={index}
                  className={`relative text-center group p-6 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${occasionsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {occasion.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {occasion.description}
                  </p>
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {occasion.highlight}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`text-center transition-all duration-700 ${ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="inline-block bg-linear-to-r from-primary/10 via-accent/30 to-primary/10 rounded-3xl p-10 md:p-14 border border-primary/10">
            <p className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Look Your Best?
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Whether it's your wedding, a festival, or just a day to treat
              yourself — book an appointment and let us bring out your best.
            </p>
            <Button
              size="lg"
              className="gap-3 group hover:scale-105 transition-all shadow-lg text-base px-8 py-6 rounded-xl"
              asChild
            >
              <a
                href="https://wa.me/919790674312?text=Hi%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Book an Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridalShowcase;
