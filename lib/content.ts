export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export type Category = "PORTRAITS" | "WEDDINGS" | "FASHION" | "TRAVEL" | "COMMERCIAL";

export const categories: ("ALL" | Category)[] = [
  "ALL",
  "PORTRAITS",
  "WEDDINGS",
  "FASHION",
  "TRAVEL",
  "COMMERCIAL",
];

export type Project = {
  /** Uppercase title shown in the case-study drawer */
  title: string;
  /** Title-case title shown on the plate caption */
  name: string;
  /** Long location line shown in the drawer */
  meta: string;
  /** Short location line shown on the plate caption */
  place: string;
  category: string;
  synopsis: string;
};

export type Plate = Project & {
  filter: Category;
  series: string;
  image: string;
  alt: string;
  /** Full Tailwind class strings so the compiler can detect them */
  span: string;
  aspect: string;
  hoverScale: string;
  extra?: string;
  sizes: string;
  /** Layout override used when a category filter (not ALL) is active */
  filtered?: { span: string; aspect: string; sizes: string };
};

export const plates: Plate[] = [
  {
    title: "THE WEDDING STORY",
    name: "The Wedding Story",
    meta: "Ahmedabad, India · 2026",
    place: "Ahmedabad · 2026",
    category: "Weddings",
    filter: "WEDDINGS",
    series: "Archival Gelatin Silver Series / 01",
    synopsis:
      "A three-day traditional and contemporary synthesis within the vaulted corridors of an ancestral Haveli. Documented on medium format Tri-X.",
    image: "/images/work-wedding-story.jpg",
    alt: "Intimate candlelit documentary photograph of a bride in a heritage Indian courtyard, soft amber lantern glow.",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
    hoverScale: "group-hover:scale-[1.03]",
    sizes: "(min-width: 768px) 58vw, 100vw",
    // Under the WEDDINGS filter this leads as a panorama above the wedding triptych
    filtered: { span: "md:col-span-12", aspect: "aspect-[21/9]", sizes: "100vw" },
  },
  {
    title: "ECHOES OF SILENCE",
    name: "Echoes of Silence",
    meta: "Copenhagen, Denmark · 2025",
    place: "Copenhagen · 2025",
    category: "Portraits",
    filter: "PORTRAITS",
    series: "Natural Light Monograph / 02",
    synopsis:
      "A meditation on quiet interior spaces and scandinavian winter light. Portraying ceramicists and writers in their undisturbed studio routines.",
    image: "/images/work-echoes-of-silence.jpg",
    alt: "Black and white studio portrait of an elderly artist with expressive hands in soft window light.",
    span: "md:col-span-5",
    aspect: "aspect-[3/4]",
    hoverScale: "group-hover:scale-[1.03]",
    sizes: "(min-width: 768px) 42vw, 100vw",
  },
  {
    title: "SOLITUDE IN KYOTO",
    name: "Solitude in Kyoto",
    meta: "Kyoto, Japan · 2025",
    place: "Kyoto · 2025",
    category: "Travel",
    filter: "TRAVEL",
    series: "Spatial Architecture Survey / 03",
    synopsis:
      "Dawn studies along the philosopher pathway and bamboo sanctuaries. Exploring silence and temporal stillness in historic Kansai.",
    image: "/images/work-solitude-in-kyoto.jpg",
    alt: "Misty dawn over wooden Zen temple gardens in Kyoto, muted green and charcoal tones.",
    span: "md:col-span-12",
    aspect: "aspect-[21/9]",
    hoverScale: "group-hover:scale-[1.02]",
    extra: "my-space-sm",
    sizes: "100vw",
  },
  {
    title: "HAUTE COUTURE N°4",
    name: "Haute Couture N°4",
    meta: "Paris Fashion Week · 2026",
    place: "Paris · 2026",
    category: "Fashion",
    filter: "FASHION",
    series: "Editorial Commission / 04",
    synopsis:
      "Backstage silhouettes and textile textures caught between runway presentations at Palais de Tokyo. Raw, candid, unfiltered elegance.",
    image: "/images/work-haute-couture.jpg",
    alt: "Editorial fashion detail of pleated silk organza in dramatic side lighting.",
    span: "md:col-span-4",
    aspect: "aspect-square",
    hoverScale: "group-hover:scale-[1.03]",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
  {
    title: "TERRAFORMING LIGHT",
    name: "Terraforming Light",
    meta: "Reykjavík, Iceland · 2025",
    place: "Reykjavík · 2025",
    category: "Commercial",
    filter: "COMMERCIAL",
    series: "Spatial Objects & Matter / 05",
    synopsis:
      "Commission for a Nordic modernist furniture atelier. Monolithic timber and volcanic basalt surfaces staged against Icelandic glacial skies.",
    image: "/images/work-terraforming-light.jpg",
    alt: "Sculptural oak bench on black volcanic sand under an overcast sub-Arctic sky.",
    span: "md:col-span-8",
    aspect: "aspect-[16/10]",
    hoverScale: "group-hover:scale-[1.03]",
    sizes: "(min-width: 768px) 66vw, 100vw",
  },
  // Wedding triptych: three 4-column 2:3 plates
  {
    title: "HASTA MILAP",
    name: "Hasta Milap",
    meta: "Jaipur, India · 2025",
    place: "Jaipur · 2025",
    category: "Weddings",
    filter: "WEDDINGS",
    series: "Ceremony Details / 06",
    synopsis:
      "The joining of hands beneath orchid and rose garlands. A study of the quiet gestures inside a traditional ceremony — henna, bangles, and the thread that binds two families.",
    image: "/images/wedding-hasta-milap.jpg",
    alt: "Bride and groom's hands joined during a traditional Indian wedding ceremony, surrounded by pink orchid garlands and embroidered textiles.",
    span: "md:col-span-4",
    aspect: "aspect-[2/3]",
    hoverScale: "group-hover:scale-[1.03]",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
  {
    title: "CONFETTI AT THE ABBEY",
    name: "Confetti at the Abbey",
    meta: "Somerset, England · 2025",
    place: "Somerset · 2025",
    category: "Weddings",
    filter: "WEDDINGS",
    series: "35mm Colour Negative / 07",
    synopsis:
      "An English countryside celebration beneath a gothic stone arch. Petals in the air, guests lining the path, and the first steps taken together in late summer sun.",
    image: "/images/wedding-confetti.jpg",
    alt: "Newlyweds walking out of a gothic stone church doorway as guests throw confetti on either side of the path.",
    span: "md:col-span-4",
    aspect: "aspect-[2/3]",
    hoverScale: "group-hover:scale-[1.03]",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
  {
    title: "THE ENGAGEMENT",
    name: "The Engagement",
    meta: "London, England · 2025",
    place: "London · 2025",
    category: "Weddings",
    filter: "WEDDINGS",
    series: "Engagement Portrait / 08",
    synopsis:
      "A winter engagement portrait — one ring, clasped hands, and the unguarded laughter that arrives just after the formal frame.",
    image: "/images/wedding-engagement.jpg",
    alt: "Smiling engaged couple holding hands outdoors, the engagement ring visible, in a navy suit and a white wrap coat.",
    span: "md:col-span-4",
    aspect: "aspect-[2/3]",
    hoverScale: "group-hover:scale-[1.03]",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
];

export const featuredStory: Project = {
  title: "A MOMENT IN TIME",
  name: "A Moment in Time",
  meta: "Vestfirðir, Iceland · Winter",
  place: "Vestfirðir · Winter",
  category: "Documentary",
  synopsis:
    "An uninterrupted fourteen-day solo residency studying sea fog, glacial tides, and the fragility of coastal outposts.",
};

export type LightboxImage = { src: string; caption: string; alt: string };

export const caseStudyImages: (LightboxImage & { aspect: string })[] = [
  {
    src: "/images/case-study-01.jpg",
    caption: "Case Study Spread 01",
    alt: "Editorial spread showing a monochrome architectural portrait in dramatic interior light.",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/case-study-02.jpg",
    caption: "Case Study Detail 02",
    alt: "Candid detail of a hand gesture and textured silk garment.",
    aspect: "aspect-square",
  },
  {
    src: "/images/case-study-03.jpg",
    caption: "Case Study Detail 03",
    alt: "Wide perspective of an empty architectural courtyard in evening light.",
    aspect: "aspect-square",
  },
];

export const dispatches: LightboxImage[] = [
  {
    src: "/images/dispatch-01.jpg",
    caption: "Plate 01 — Morning mist over the Seine, Paris",
    alt: "Foggy morning over the Seine river in Paris with silhouetted bridges.",
  },
  {
    src: "/images/dispatch-02.jpg",
    caption: "Plate 02 — Portrait of architect Maya Lind, Stockholm",
    alt: "Minimalist portrait of a woman in high-neck knitwear against a concrete wall.",
  },
  {
    src: "/images/dispatch-03.jpg",
    caption: "Plate 03 — Shadow study, Arles",
    alt: "Stone arches casting linear shadows across an empty courtyard in Arles.",
  },
  {
    src: "/images/dispatch-04.jpg",
    caption: "Plate 04 — Bridal veil movement in open vineyard",
    alt: "Translucent bridal veil catching the wind over golden grass at twilight.",
  },
  {
    src: "/images/dispatch-05.jpg",
    caption: "Plate 05 — Traditional tea room sliding partition, Nara",
    alt: "Japanese wooden interior with shoji screens in soft morning light.",
  },
  {
    src: "/images/dispatch-06.jpg",
    caption: "Plate 06 — Darkroom silver bath development in progress",
    alt: "Darkroom under red safelight with a silver gelatin print emerging in a tray.",
  },
];

export const approach = [
  {
    index: "01 / DISCIPLINE",
    title: "OBSERVE",
    body: "Finding the moments that happen naturally. Without intervention, waiting until the subject forgets the lens entirely.",
  },
  {
    index: "02 / ARCHITECTURE",
    title: "FRAME",
    body: "Creating compositions with intention. Harmonizing negative space, tactile materials, and ambient daylight into balanced equilibrium.",
  },
  {
    index: "03 / ARTIFACT",
    title: "PRESERVE",
    body: "Turning temporary moments into lasting physical images. Fine archival papers, non-acidic cotton rags, and hand-bound cloth albums.",
  },
];

export const services = [
  {
    title: "Wedding Photography",
    tags: "Documentary / Bespoke Monograph / Worldwide",
    body: "Unobtrusive, cinematic recording of your marriage celebrations. Covering multi-day international destinations with a balance of 35mm candid film and medium format family portraits. Includes archival box and gallery delivery.",
    cta: "Request Rate Card →",
  },
  {
    title: "Portrait Photography",
    tags: "Artists / Authors / Editorial Profiles",
    body: "Intimate studio sessions capturing the quiet nuance of personality. Designed for publication monographs, record sleeves, and artist portfolios utilizing natural light settings.",
    cta: "Inquire Portrait →",
  },
  {
    title: "Fashion & Editorial",
    tags: "Campaigns / Lookbooks / Periodicals",
    body: "Collaborative visual concepts for forward-thinking maisons and independent designers. Emphasizing movement, tactile fibers, and authentic cinematic environments.",
    cta: "Lookbook Inquiries →",
  },
  {
    title: "Events & Gatherings",
    tags: "Private Salons / Vernissages / Symposiums",
    body: "Capturing the atmosphere of cultural gatherings, gallery inaugurations, and private dinners with documentary discretion and understated panache.",
    cta: "Book Event →",
  },
  {
    title: "Commercial Photography",
    tags: "Architects / Design Studios / Hospitality",
    body: "Documenting spatial harmony, craft processes, and brand heritage for luxury studios, hoteliers, and design institutions globally.",
    cta: "Commercial Briefs →",
  },
  {
    title: "Creative Projects & Books",
    tags: "Self-Published Monographs / Art Residencies",
    body: "Collaborative art book development from field documentation through prepress typography and Japanese binding specifications.",
    cta: "Propose Project →",
  },
];

export const experienceSteps = [
  {
    title: "DISCOVER",
    body: "Initial consultation to discuss the context, emotional goals, locations, and aesthetic expectations of the commission.",
  },
  {
    title: "PLAN",
    body: "Lighting reconnaissance, site surveys, wardrobe palette alignment, and shot-list curation without constraining spontaneity.",
  },
  {
    title: "SHOOT",
    body: "An immersive, fluid production where we honor the organic momentum of the day using natural light and deliberate framing.",
  },
  {
    title: "DELIVER",
    body: "Archival master scans, bespoke web vault access, and tailored physical linen-bound photobooks delivered to your home.",
  },
];

export const projectTypes = [
  { value: "wedding", label: "Wedding Monograph" },
  { value: "portrait", label: "Studio Portrait" },
  { value: "editorial", label: "Fashion / Editorial" },
  { value: "commercial", label: "Commercial / Architectural" },
  { value: "other", label: "Other Collaboration" },
];
