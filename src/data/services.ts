import {
  bridalMakeup,
  bridalPortfolio,
  bridalPortfolio2,
  hairstylePortfolio,
  facialPortfolio,
  mehndiPortfolio,
  pedicurePortfolio,
  eyebrowPortfolio,
  receptionPortfolio1,
  receptionPortfolio2,
  licetreatmentPortfolio,
} from "@/assets/assets";

export type ServiceContent = {
  slug: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heroImage: string;
  gallery: string[];
  intro: string;
  highlights: string[];
  process: { step: string; detail: string }[];
  whyChooseUs: string;
  faq: { question: string; answer: string }[];
};

export const services: ServiceContent[] = [
  {
    slug: "bridal-makeup",
    title: "Bridal Makeup",
    shortDescription: "Complete bridal transformation with premium products.",
    metaTitle: "Bridal Makeup in Kinathukadavu | Sri's Beauty Parlour",
    metaDescription:
      "Book bridal makeup in Kinathukadavu with Jamuna, 5+ years experience. HD & airbrush finish, draping, saree pinning and trial sessions. Book via WhatsApp.",
    keywords:
      "bridal makeup Kinathukadavu, bridal makeup artist Tamil Nadu, HD bridal makeup, wedding makeup Kinathukadavu",
    heroImage: bridalMakeup,
    gallery: [bridalMakeup, bridalPortfolio, bridalPortfolio2],
    intro:
      "Your wedding day makeup deserves someone who understands both your face and your saree colour palette. Jamuna has been doing bridal makeup in Kinathukadavu for over 5 years, working with brides across Tamil Nadu for muhurtham, reception, and pre-wedding shoots.",
    highlights: [
      "HD and airbrush makeup options suited to camera and lighting",
      "Base, contouring and long-lasting finish that holds through rituals and photos",
      "Saree/dupatta draping and pinning included",
      "Complimentary trial session before the wedding date",
      "Matching hairstyle add-on available on request",
    ],
    process: [
      { step: "Consultation", detail: "We discuss your outfit colour, venue lighting, and the look you want — traditional or contemporary." },
      { step: "Trial session", detail: "A trial is done ahead of the wedding so the final look isn't a surprise on the day." },
      { step: "Wedding day", detail: "We arrive early, do skin prep, makeup, draping and hairstyling so you're ready well before the muhurtham." },
    ],
    whyChooseUs:
      "Jamuna's bridal work is built on repeat bookings from families who return for sisters, cousins and reception looks after seeing the bridal day makeup hold up in photos and videos for hours.",
    faq: [
      { question: "How early should I book bridal makeup?", answer: "We recommend booking 4-6 weeks ahead during wedding season (Nov-Feb) to secure your date and trial slot." },
      { question: "Do you travel to the wedding venue?", answer: "Yes, we do on-location bridal makeup across Kinathukadavu and nearby areas in Tamil Nadu." },
    ],
  },
  {
    slug: "hair-styling",
    title: "Hair Styling",
    shortDescription: "From elegant updos to trendy cuts for every occasion.",
    metaTitle: "Hair Styling in Kinathukadavu | Sri's Beauty Parlour",
    metaDescription:
      "Professional hair styling in Kinathukadavu — bridal updos, curls, braids and trendy cuts for weddings, receptions and everyday occasions. Book via WhatsApp.",
    keywords:
      "hair styling Kinathukadavu, bridal hairstyle Tamil Nadu, hair updo Kinathukadavu, wedding hairstyle salon",
    heroImage: hairstylePortfolio,
    gallery: [hairstylePortfolio],
    intro:
      "Hair styling at Sri's Beauty Parlour covers everything from soft bridal updos and curls to sleek everyday cuts, matched to your face shape and the occasion — wedding, reception, or a regular salon visit.",
    highlights: [
      "Bridal updos, braids and half-up styles for weddings and receptions",
      "Curling, straightening and blow-dry styling",
      "Trendy haircuts for daily wear",
      "Styling matched to outfit and jewellery for events",
      "Add-on to bridal or reception makeup bookings",
    ],
    process: [
      { step: "Style discussion", detail: "We look at your face shape, hair length and the outfit or occasion to suggest styles that suit you." },
      { step: "Prep", detail: "Hair is washed, dried or heat-prepped depending on the style chosen." },
      { step: "Styling & finish", detail: "The final style is set with pins, accessories and finishing spray so it holds for hours." },
    ],
    whyChooseUs:
      "We style hair to actually last through a full wedding function or long event, not just look good for the first photo.",
    faq: [
      { question: "Can I combine hair styling with makeup?", answer: "Yes, hair styling is commonly booked together with bridal, reception, or party makeup." },
      { question: "Do you do hairstyles for guests, not just brides?", answer: "Yes, we style hair for bridesmaids, family members and guests attending weddings and events too." },
    ],
  },
  {
    slug: "skincare-facials",
    title: "Skincare & Facials",
    shortDescription: "Rejuvenating treatments for glowing, healthy skin.",
    metaTitle: "Skincare & Facials in Kinathukadavu | Sri's Beauty Parlour",
    metaDescription:
      "Facials and skincare treatments in Kinathukadavu for glowing, healthy skin — pre-bridal facials, cleanups and rejuvenating treatments. Book via WhatsApp.",
    keywords:
      "facial Kinathukadavu, skincare treatment Tamil Nadu, pre-bridal facial, beauty parlour facial Kinathukadavu",
    heroImage: facialPortfolio,
    gallery: [facialPortfolio],
    intro:
      "Good makeup starts with good skin. Our facial and skincare treatments are designed to brighten, deep-cleanse and prep your skin, whether it's a routine monthly facial or pre-bridal skin preparation.",
    highlights: [
      "Deep-cleansing and brightening facials for all skin types",
      "Pre-bridal skin prep packages leading up to the wedding",
      "De-tan and cleanup treatments",
      "Anti-ageing and hydrating facial options",
      "Skin consultation before every treatment",
    ],
    process: [
      { step: "Skin analysis", detail: "We check your skin type and concerns before recommending a facial or package." },
      { step: "Cleanse & treat", detail: "Cleansing, exfoliation, massage and mask suited to your skin are applied." },
      { step: "Glow finish", detail: "A finishing routine leaves skin visibly brighter and even-toned." },
    ],
    whyChooseUs:
      "For brides, we recommend a facial schedule starting weeks before the wedding so skin looks naturally radiant under makeup, not just on the treatment day.",
    faq: [
      { question: "How soon before a wedding should I start facials?", answer: "Ideally start a pre-bridal facial package 3-4 weeks before the wedding for the best glow on the day." },
      { question: "Do you offer facials for oily or sensitive skin?", answer: "Yes, treatments are chosen based on your skin type after a quick consultation." },
    ],
  },
  {
    slug: "mehndi-art",
    title: "Mehndi Art",
    shortDescription: "Intricate and beautiful henna designs for all celebrations.",
    metaTitle: "Mehndi Art in Kinathukadavu | Sri's Beauty Parlour",
    metaDescription:
      "Bridal and party mehndi designs in Kinathukadavu — intricate henna art for weddings, engagements and festivals. Book via WhatsApp.",
    keywords:
      "mehndi Kinathukadavu, bridal mehndi Tamil Nadu, henna design Kinathukadavu, wedding mehndi artist",
    heroImage: mehndiPortfolio,
    gallery: [mehndiPortfolio],
    intro:
      "From detailed bridal mehndi covering both hands to simpler festive and guest designs, our henna art is done with natural henna paste for a rich, long-lasting stain.",
    highlights: [
      "Intricate bridal mehndi for hands and feet",
      "Arabic, floral and traditional Tamil-style patterns",
      "Simpler designs for guests and family functions",
      "Natural henna paste for a deep, long-lasting stain",
      "Festival and engagement mehndi bookings",
    ],
    process: [
      { step: "Design selection", detail: "We discuss the coverage (hands only, hands & feet) and pattern style you prefer." },
      { step: "Application", detail: "Design is applied with natural henna, working from intricate detail outward." },
      { step: "Aftercare tips", detail: "We share drying and aftercare tips so the stain darkens properly over the following day." },
    ],
    whyChooseUs:
      "Our mehndi work is booked heavily during wedding season because the stain darkens well and holds detail even in close-up wedding photography.",
    faq: [
      { question: "How long does bridal mehndi take?", answer: "Detailed bridal mehndi for both hands typically takes 2-4 hours depending on coverage and design complexity." },
      { question: "Do you travel for mehndi functions?", answer: "Yes, we do on-location mehndi for wedding and engagement functions across Kinathukadavu and nearby areas." },
    ],
  },
  {
    slug: "manicure-pedicure",
    title: "Manicure and Pedicure",
    shortDescription: "Stunning nail designs and premium manicure services.",
    metaTitle: "Manicure & Pedicure in Kinathukadavu | Sri's Beauty Parlour",
    metaDescription:
      "Manicure and pedicure services in Kinathukadavu — nail care, shaping and polish for everyday care or bridal prep. Book via WhatsApp.",
    keywords:
      "manicure Kinathukadavu, pedicure Tamil Nadu, nail care beauty parlour, bridal manicure pedicure",
    heroImage: pedicurePortfolio,
    gallery: [pedicurePortfolio],
    intro:
      "Well-groomed hands and feet complete any look. Our manicure and pedicure services cover routine nail care as well as bridal-day prep, so hands look camera-ready alongside your mehndi and jewellery.",
    highlights: [
      "Nail shaping, cuticle care and buffing",
      "Classic and spa manicure/pedicure options",
      "Polish application in your choice of shade",
      "Bridal manicure-pedicure paired with mehndi bookings",
      "Hygienic, single-use tools where applicable",
    ],
    process: [
      { step: "Soak & cleanse", detail: "Hands and feet are soaked and cleansed to soften skin before shaping." },
      { step: "Shape & buff", detail: "Nails are shaped, cuticles tidied and calluses buffed away." },
      { step: "Finish", detail: "A hydrating massage and polish or natural finish completes the service." },
    ],
    whyChooseUs:
      "For brides, we time the manicure-pedicure so it's fresh for the mehndi and wedding day without smudging designs or polish.",
    faq: [
      { question: "Should I book manicure-pedicure before or after mehndi?", answer: "We usually recommend manicure-pedicure a day before mehndi so hands are prepped and clean for the design." },
      { question: "Do you offer nail art?", answer: "Simple nail art and polish designs are available on request — ask us when booking." },
    ],
  },
  {
    slug: "eyebrow-shaping",
    title: "Eyebrow Shaping",
    shortDescription: "Perfect eyebrow threading and shaping for defined looks.",
    metaTitle: "Eyebrow Shaping in Kinathukadavu | Sri's Beauty Parlour",
    metaDescription:
      "Eyebrow threading and shaping in Kinathukadavu for defined, face-flattering brows — everyday grooming or pre-event shaping. Book via WhatsApp.",
    keywords:
      "eyebrow threading Kinathukadavu, eyebrow shaping Tamil Nadu, brow grooming beauty parlour",
    heroImage: eyebrowPortfolio,
    gallery: [eyebrowPortfolio],
    intro:
      "Well-shaped eyebrows frame the whole face and make makeup application easier. We use precise threading to shape brows according to your natural arch and face structure.",
    highlights: [
      "Precision eyebrow threading",
      "Shaping suited to your natural face structure",
      "Clean-up before makeup application",
      "Regular grooming or one-time event shaping",
      "Gentle technique suited to sensitive skin",
    ],
    process: [
      { step: "Shape assessment", detail: "We check your natural brow line and face shape to plan the arch." },
      { step: "Threading", detail: "Stray hairs are threaded away to define a clean, even shape." },
      { step: "Finishing touch", detail: "A soothing balm is applied after shaping to calm the skin." },
    ],
    whyChooseUs:
      "Clean brow shaping is often booked right before bridal or reception makeup since it directly affects how eye makeup sits.",
    faq: [
      { question: "Does threading hurt?", answer: "There's mild discomfort for a few seconds per section, but it's quick and far gentler than waxing for most people." },
      { question: "How often should I get my eyebrows shaped?", answer: "Every 3-4 weeks keeps the shape defined without over-thinning the brow." },
    ],
  },
  {
    slug: "reception-makeup",
    title: "Reception Makeup",
    shortDescription: "Glamorous looks for special occasions and events.",
    metaTitle: "Reception Makeup in Kinathukadavu | Sri's Beauty Parlour",
    metaDescription:
      "Reception and party makeup in Kinathukadavu — bold, glamorous looks for receptions, engagements and special events. Book via WhatsApp.",
    keywords:
      "reception makeup Kinathukadavu, party makeup Tamil Nadu, engagement makeup, glam makeup beauty parlour",
    heroImage: receptionPortfolio1,
    gallery: [receptionPortfolio1, receptionPortfolio2],
    intro:
      "Reception makeup calls for a different energy than the wedding morning — bolder eyes, richer lip colour and a finish built for evening lighting and photos. We tailor the look to your reception outfit and the mood of the event.",
    highlights: [
      "Bold, evening-appropriate glam makeup",
      "Finish tailored for indoor lighting and flash photography",
      "Matching hairstyle available as an add-on",
      "Suited to receptions, engagements and cocktail events",
      "Outfit and jewellery colour matching",
    ],
    process: [
      { step: "Look planning", detail: "We match the makeup tone to your reception outfit and the venue's lighting style." },
      { step: "Application", detail: "Base, eyes and lips are built up for a glam finish that photographs well under lights." },
      { step: "Final touch-up", detail: "A last check and touch-up is done just before you head out for photos." },
    ],
    whyChooseUs:
      "Many brides book reception makeup separately from bridal makeup with us specifically to get a distinctly different, bolder look for the evening.",
    faq: [
      { question: "Is reception makeup different from bridal makeup?", answer: "Yes — reception looks are usually bolder and evening-appropriate, distinct from the traditional bridal-day look." },
      { question: "Can I book reception and bridal makeup together?", answer: "Yes, many clients book both as a package for the wedding and reception days." },
    ],
  },
  {
    slug: "haircare-lice-treatment",
    title: "HairCare & Lice Treatment",
    shortDescription: "Maintain long and healthy hair.",
    metaTitle: "Hair Care & Lice Treatment in Kinathukadavu | Sri's Beauty Parlour",
    metaDescription:
      "Hair care and lice treatment services in Kinathukadavu — nourishing hair spas and safe, effective lice removal treatments. Book via WhatsApp.",
    keywords:
      "lice treatment Kinathukadavu, hair care Tamil Nadu, hair spa beauty parlour, hair fall treatment",
    heroImage: licetreatmentPortfolio,
    gallery: [licetreatmentPortfolio],
    intro:
      "Healthy, long hair needs regular care, and lice infestations need safe, thorough treatment. We offer nourishing hair spa treatments alongside effective lice removal for both children and adults.",
    highlights: [
      "Safe, thorough lice and nit removal treatment",
      "Nourishing hair spa for dryness and hair fall",
      "Scalp treatments to support healthy hair growth",
      "Suitable for children and adults",
      "Aftercare guidance to prevent recurrence",
    ],
    process: [
      { step: "Scalp check", detail: "We assess the hair and scalp condition or lice severity before treatment." },
      { step: "Treatment", detail: "Lice removal or nourishing hair spa is carried out with suitable products for your hair type." },
      { step: "Aftercare guidance", detail: "We share simple home-care steps to maintain results and prevent lice recurrence." },
    ],
    whyChooseUs:
      "We treat lice care as a hygiene-first service, using thorough removal methods rather than a quick surface treatment.",
    faq: [
      { question: "Is lice treatment safe for children?", answer: "Yes, we use gentle, safe methods suitable for children's scalps." },
      { question: "How many sessions are needed for lice treatment?", answer: "Most cases clear in 1-2 sessions spaced about a week apart, depending on severity." },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
