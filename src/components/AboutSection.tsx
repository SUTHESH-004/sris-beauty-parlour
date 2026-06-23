import { vigneshPortrait, jamunaPortrait } from "@/assets/assets";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation(0.2);
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-primary font-medium mb-4 tracking-widest uppercase">
            Meet the Team
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            The Faces Behind Our Success
          </h2>
        </div>

        <div
          ref={teamRef}
          className={`grid md:grid-cols-2 gap-10 max-w-5xl mx-auto transition-all duration-700 delay-150 ${teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Jamuna */}
          <div className="group rounded-3xl border border-primary/15 bg-linear-to-b from-primary/5 to-transparent p-8 md:p-10 text-center transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
            <div className="relative w-44 h-44 mx-auto mb-6">
              <div className="absolute -inset-3 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-primary shadow-lg shadow-primary/15 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={jamunaPortrait}
                  alt="Jamuna, lead beautician and founder"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="inline-block text-[10px] font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 tracking-widest uppercase">
              Founder & Lead Beautician
            </span>
            <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
              Jamuna
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              With over 5 years of experience, Jamuna has transformed thousands
              of brides and clients. Her expertise spans bridal makeup, hair
              styling, skincare, and mehndi artistry — she believes every woman
              deserves to feel beautiful.
            </p>
          </div>

          {/* Vignesh */}
          <div className="group rounded-3xl border border-border bg-linear-to-b from-muted/30 to-transparent p-8 md:p-10 text-center transition-all duration-500 hover:shadow-xl hover:shadow-foreground/5 hover:border-border">
            <div className="relative w-44 h-44 mx-auto mb-6">
              <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-foreground/15 shadow-lg shadow-foreground/5 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={vigneshPortrait}
                  alt="Vignesh Alaguvel, Managing Partner"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="inline-block text-[10px] font-semibold text-muted-foreground bg-muted/50 px-3 py-1 rounded-full mb-3 tracking-widest uppercase">
              Co-Founder
            </span>
            <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
              Vignesh Alaguvel
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              The backbone behind Jamuna's success — overseeing operations,
              finances, and ensuring everything runs seamlessly behind the
              scenes.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div
          ref={quoteRef}
          className={`mt-16 max-w-2xl mx-auto text-center transition-all duration-700 ${quoteVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="h-px w-16 bg-primary/30 mx-auto mb-8" />
          <blockquote className="font-serif text-xl md:text-2xl text-foreground/80 italic">
            Together, we bring beauty and business excellence under one roof
          </blockquote>
          <p className="mt-4 text-muted-foreground text-sm">
            — A partnership built on love, trust, and shared dreams
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
