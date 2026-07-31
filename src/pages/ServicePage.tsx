import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  MessageCircle,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Check,
  Sparkles,
  ArrowRight,
  Award,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services, getServiceBySlug, type ServiceContent } from "@/data/services";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SITE_URL = "https://srisbeautyparlour.com";
const WHATSAPP_BASE = "https://wa.me/919790674312";

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  visible,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  visible: boolean;
}) => (
  <div
    className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
  >
    <p className="text-primary font-medium mb-4 tracking-widest uppercase flex items-center justify-center gap-2 text-sm">
      <Sparkles className="w-4 h-4" />
      {eyebrow}
      <Sparkles className="w-4 h-4" />
    </p>
    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
  index,
  visible,
}: {
  faq: ServiceContent["faq"][number];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  visible: boolean;
}) => (
  <div
    className={`rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-primary/5 transition-colors"
    >
      <h3 className="font-serif text-lg font-bold text-foreground">
        {faq.question}
      </h3>
      <ChevronDown
        className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
    <div
      className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
    >
      <div className="overflow-hidden">
        <p className="text-muted-foreground leading-relaxed px-6 pb-5">
          {faq.answer}
        </p>
      </div>
    </div>
  </div>
);

const ServiceSwitcher = ({ activeSlug }: { activeSlug: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    const activeEl = el?.querySelector<HTMLElement>('[data-active="true"]');
    activeEl?.scrollIntoView({ block: "nearest", inline: "center" });
    updateArrows();
    const timer = setTimeout(updateArrows, 350);
    return () => clearTimeout(timer);
  }, [activeSlug]);

  const scrollByAmount = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });
  };

  return (
    <div className="bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-1">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll services left"
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all ${canLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="flex gap-1 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/${s.slug}`}
              data-active={s.slug === activeSlug}
              className={`shrink-0 text-sm px-4 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                s.slug === activeSlug
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
              }`}
            >
              {s.title}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll services right"
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all ${canRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const [openFaq, setOpenFaq] = useState(0);

  const { ref: highlightsRef, isVisible: highlightsVisible } =
    useScrollAnimation(0.1);
  const { ref: processRef, isVisible: processVisible } =
    useScrollAnimation(0.1);
  const { ref: galleryRef, isVisible: galleryVisible } =
    useScrollAnimation(0.1);
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation(0.2);
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation(0.1);
  const { ref: otherRef, isVisible: otherVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.2);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const pageUrl = `${SITE_URL}/${service.slug}`;
  const whatsappHref = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    `Hi, I would like to book ${service.title}`,
  )}`;
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "BeautySalon",
      name: "Sri's Beauty Parlour",
      telephone: "+919790674312",
      address: {
        "@type": "PostalAddress",
        streetAddress: "22/7, Kumaran Hardware Building, Near Muthoot Finance",
        addressLocality: "Kinathukadavu",
        addressRegion: "Tamil Nadu",
        postalCode: "642109",
        addressCountry: "IN",
      },
    },
    areaServed: "Kinathukadavu, Tamil Nadu",
    url: pageUrl,
  };

  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.keywords} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={service.heroImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      {/* Breadcrumb */}
      <div className="sticky top-16 z-40 mt-16 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav
          aria-label="Breadcrumb"
          className="container mx-auto px-6 flex items-center gap-2 text-sm text-muted-foreground py-3 overflow-x-auto whitespace-nowrap no-scrollbar"
        >
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-primary transition-colors shrink-0"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link
            to="/#services"
            className="hover:text-primary transition-colors shrink-0"
          >
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-foreground font-medium shrink-0">
            {service.title}
          </span>
        </nav>
      </div>

      {/* Quick service switcher */}
      <ServiceSwitcher activeSlug={service.slug} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative">
            <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start py-10 md:py-14">
              <div className="md:col-span-3 min-w-0 md:order-2">
                <div className="flex items-start gap-4 md:block">
                  {/* Compact image beside the heading on mobile only */}
                  <div className="shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-lg md:hidden">
                    <img
                      src={service.heroImage}
                      alt={`${service.title} at Sri's Beauty Parlour, Kinathukadavu`}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-primary font-medium mb-4 tracking-widest uppercase flex items-center gap-2 text-sm">
                      <Sparkles className="w-4 h-4" />
                      Our Expertise
                    </p>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                      {service.title} in Kinathukadavu
                    </h1>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {service.intro}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["5+ Years Experience", "500+ Happy Clients", "On-Location Available"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>

                <Button
                  size="lg"
                  className="gap-3 group hover:scale-105 transition-all shadow-lg text-base px-8 py-6 rounded-xl"
                  asChild
                >
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Book via WhatsApp
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="hidden md:block md:col-span-2 md:order-1 min-w-0 relative group max-w-xs sm:max-w-sm md:max-w-none mx-auto md:mt-9">
                <div className="absolute -inset-3 bg-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-4/3 md:aspect-square">
                  <img
                    src={service.heroImage}
                    alt={`${service.title} at Sri's Beauty Parlour, Kinathukadavu`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-primary-foreground" />
                      <span className="text-primary-foreground font-serif text-lg font-bold">
                        {service.title}
                      </span>
                    </div>
                    <p className="text-primary-foreground/80 text-xs">
                      Sri's Beauty Parlour, Kinathukadavu
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex absolute -right-4 -top-4 bg-primary text-primary-foreground px-4 py-2.5 rounded-2xl shadow-lg items-center gap-2 z-10">
                  <Award className="w-4 h-4" />
                  <span className="font-bold text-xs">Trusted Local Experts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 md:py-20 bg-card relative overflow-hidden">
          <div className="absolute top-20 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative">
            <SectionHeader
              eyebrow="What You Get"
              title="What's Included"
              subtitle={`Everything covered in our ${service.title.toLowerCase()} service.`}
              visible={highlightsVisible}
            />
            <div
              ref={highlightsRef}
              className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {service.highlights.map((item, i) => (
                <div
                  key={item}
                  className={`group flex items-start gap-4 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${highlightsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Check className="w-4.5 h-4.5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </span>
                  <span className="text-muted-foreground leading-relaxed pt-2">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative">
            <SectionHeader
              eyebrow="Simple Process"
              title="How It Works"
              visible={processVisible}
            />
            <div
              ref={processRef}
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative"
            >
              <div className="hidden md:block absolute top-7 left-[16.5%] right-[16.5%] h-px bg-primary/15" />
              {service.process.map((p, i) => (
                <div
                  key={p.step}
                  className={`relative text-center rounded-2xl border border-primary/10 bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-500 ${processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="relative w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-lg mb-5 mx-auto shadow-lg shadow-primary/20">
                    {i + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    {p.step}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {p.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {service.gallery.length > 0 && (
          <section className="py-16 md:py-20 bg-card relative overflow-hidden">
            <div className="absolute top-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative">
              <SectionHeader eyebrow="A Glimpse" title="Gallery" visible={galleryVisible} />
              <div
                ref={galleryRef}
                className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              >
                {service.gallery.map((img, i) => (
                  <div
                    key={i}
                    className={`group relative overflow-hidden rounded-2xl shadow-lg aspect-3/4 transition-all duration-700 ${galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    <img
                      src={img}
                      alt={`${service.title} example ${i + 1} at Sri's Beauty Parlour`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why choose us */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative">
            <div
              ref={whyRef}
              className={`max-w-3xl mx-auto text-center bg-linear-to-r from-primary/10 via-accent/30 to-primary/10 rounded-3xl border border-primary/10 p-10 md:p-14 transition-all duration-700 ${whyVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Choose Sri's Beauty Parlour
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.whyChooseUs}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {service.faq.length > 0 && (
          <section className="py-16 md:py-20 bg-card relative overflow-hidden">
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative">
              <SectionHeader
                eyebrow="Got Questions"
                title="Frequently Asked Questions"
                visible={faqVisible}
              />
              <div ref={faqRef} className="max-w-3xl mx-auto space-y-4">
                {service.faq.map((f, i) => (
                  <FAQItem
                    key={f.question}
                    faq={f}
                    index={i}
                    visible={faqVisible}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other services */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-10 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative">
            <SectionHeader
              eyebrow="Keep Exploring"
              title="Explore Other Services"
              visible={otherVisible}
            />
            <div
              ref={otherRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {otherServices.map((s, i) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className={`group block relative overflow-hidden rounded-2xl shadow-md aspect-3/4 transition-all duration-700 ${otherVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <img
                    src={s.heroImage}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-primary-foreground font-medium text-sm">
                      {s.title}
                    </span>
                    <div className="flex items-center gap-1 text-primary-foreground/0 group-hover:text-primary-foreground/90 transition-all">
                      <span className="text-xs">View</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 text-center relative">
            <div
              ref={ctaRef}
              className={`transition-all duration-700 ${ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to book your {service.title.toLowerCase()}?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Message us on WhatsApp with your preferred date and we'll
                confirm your appointment.
              </p>
              <Button
                size="lg"
                className="gap-3 group hover:scale-105 transition-all shadow-lg text-base px-8 py-6 rounded-xl"
                asChild
              >
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Book Now on WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
