import { useState, useEffect } from "react";
import { MessageCircle, ArrowRight, Heart, Users, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  bridalMakeup,
  bridalPortfolio,
  bridalPortfolio2,
  receptionPortfolio1,
  receptionPortfolio2,
  babyShower,
  marriageImage,
} from "@/assets/assets";

const leftImages = [
  { src: babyShower, alt: "Baby shower celebration styling at Sri's Beauty Parlour" },
  { src: marriageImage, alt: "Marriage makeup and styling at Sri's Beauty Parlour" },
];
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: Users, value: 1000, suffix: "+", label: "Happy Clients" },
  { icon: Calendar, value: 5, suffix: "+", label: "Years Experience" },
  { icon: Sparkles, value: 100, suffix: "+", label: "Bridal Makeovers" },

  { icon: Heart, value: 100, suffix: "%", label: "Satisfaction" },
];

const StatItem = ({ stat, isVisible }: { stat: (typeof stats)[0]; isVisible: boolean }) => {
  const { count, trigger } = useCountUp(stat.value);
  const Icon = stat.icon;

  useEffect(() => {
    if (isVisible) trigger();
  }, [isVisible, trigger]);

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-1">
        <Icon className="w-4 h-4 text-primary" />
        <span className="font-serif text-2xl md:text-3xl font-bold text-foreground">
          {count}{stat.suffix}
        </span>
      </div>
      <p className="text-muted-foreground text-xs">{stat.label}</p>
    </div>
  );
};

const rightTopImages = [
  { src: bridalPortfolio, alt: "Stunning bridal makeup at Sri's Beauty Parlour" },
  { src: bridalPortfolio2, alt: "Beautiful bridal transformation at Sri's Beauty Parlour" },
  { src: bridalMakeup, alt: "Bridal makeup artistry at Sri's Beauty Parlour" },
];

const rightBottomImages = [
  { src: receptionPortfolio1, alt: "Glamorous reception makeup at Sri's Beauty Parlour" },
  { src: receptionPortfolio2, alt: "Reception event styling at Sri's Beauty Parlour" },
];

const CyclingImage = ({
  images,
  interval,
  aspectClass,
}: {
  images: { src: string; alt: string }[];
  interval: number;
  aspectClass: string;
}) => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1 % images.length);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setNext((current + 1) % images.length);
      setTransitioning(true);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setTransitioning(false);
      }, 1200);
    }, interval);

    return () => clearInterval(id);
  }, [current, interval, images.length]);

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-xl ${aspectClass}`}>
      <img
        key={`current-${current}`}
        src={images[current].src}
        alt={images[current].alt}
        className="absolute inset-0 w-full h-full object-cover animate-kenburns"
        loading="lazy"
      />

      {images.length > 1 && (
        <img
          key={`next-${next}`}
          src={images[next].src}
          alt={images[next].alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1200 ease-in-out ${transitioning ? "opacity-100" : "opacity-0"}`}
        />
      )}

      <div className="absolute inset-0 bg-linear-to-t from-foreground/40 via-transparent to-transparent" />
    </div>
  );
};

const PreciousMoments = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.3);
  const { ref: galleryRef, isVisible: galleryVisible } =
    useScrollAnimation(0.15);

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-primary font-medium mb-4 tracking-widest uppercase">
            Precious Moments
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Beauty for Every <span className="text-primary">Occasion</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Weddings, celebrations, or everyday confidence — styled with care,
            made to remember.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12 transition-all duration-700 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} isVisible={statsVisible} />
          ))}
        </div>

        {/* Gallery */}
        <div
          ref={galleryRef}
          className={`max-w-5xl mx-auto transition-all duration-1000 ${galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <div className="relative rounded-3xl border border-border p-6 md:p-8">
            {/* Trust badge on border */}
            <div className="absolute -top-4 right-8 z-10">
              <div className="inline-flex items-center gap-2 border border-primary/20 bg-card text-primary px-4 py-2 rounded-full shadow-sm">
                <Heart className="w-4 h-4 fill-primary" />
                <span className="font-semibold text-sm">Trusted by 1000+ Clients</span>
              </div>
            </div>

            {/* Labels row */}
            <div className="grid md:grid-cols-12 gap-6 mb-3">
              <p className="md:col-span-7 text-sm font-medium text-muted-foreground tracking-wide uppercase">
                Celebrations
              </p>
              <p className="hidden md:block md:col-span-5 text-sm font-medium text-muted-foreground tracking-wide uppercase">
                Bridal
              </p>
            </div>

            {/* Images + CTA */}
            <div className="grid md:grid-cols-12 gap-6 items-end">
              {/* Left — Baby shower + Book */}
              <div className="md:col-span-7 flex flex-col">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CyclingImage
                    images={leftImages}
                    interval={10000}
                    aspectClass="aspect-4/3 md:aspect-5/4 shadow-2xl"
                  />
                </div>

                <div className="mt-6 flex justify-center">
                  <Button
                    size="lg"
                    className="w-full max-w-md gap-3 group hover:scale-[1.02] transition-all shadow-lg rounded-xl px-10 py-6 text-base"
                    asChild
                  >
                    <a
                      href="https://wa.me/919790674312?text=Hi%20I%20would%20like%20to%20book%20an%20appointment"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Book an Appointment
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right column */}
              <div className="md:col-span-5 flex flex-col gap-4">
                {/* Bridal */}
                <div className="relative group">
                  <CyclingImage
                    images={rightTopImages}
                    interval={3500}
                    aspectClass="aspect-4/3"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-primary-foreground font-serif font-bold">
                      Wedding Glam
                    </span>
                  </div>
                </div>

                {/* Reception */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3">
                    Reception
                  </p>
                  <div className="relative group">
                    <CyclingImage
                      images={rightBottomImages}
                      interval={4500}
                      aspectClass="aspect-video"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-primary-foreground font-serif font-bold">
                        Event Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreciousMoments;
