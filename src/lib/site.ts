import ajPortrait from "@/assets/aj-hoover-v3.png.asset.json";

/** Canonical origin for bmbpalmbeach.com. No trailing slash. */
export const SITE = "https://bmbpalmbeach.com";

export const SITE_NAME = "Beau Monde Builders";

export const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/6iWXmZqL0lNraTpN5woUupsc9OB3/social-images/social-1780526669183-Beau_Monde_Palm_Beacg_Website_Preview.webp";

export const PALM_BEACH = {
  streetAddress: "205 Worth Avenue, Suite 120",
  addressLocality: "Palm Beach",
  addressRegion: "FL",
  postalCode: "33480",
  addressCountry: "US",
} as const;

export const ROCKLEDGE = {
  streetAddress: "1129 Rockledge Blvd Ste 101",
  addressLocality: "Rockledge",
  addressRegion: "FL",
  postalCode: "32955",
  addressCountry: "US",
} as const;

export const PALM_BEACH_PHONE = "+1-561-646-8992";
export const PALM_BEACH_PHONE_DISPLAY = "(561) 646-8992";
export const ROCKLEDGE_PHONE = "+1-321-298-4122";
export const PUBLIC_EMAIL = "aj@bmbpalmbeach.com";

export const LICENSE = {
  name: "Florida Certified Building Contractor",
  identifier: "CBC1260651",
} as const;

/**
 * Areas already named on this site (office city, the renovations list,
 * and Palm Beach County). Not expanded beyond those.
 */
export const SERVICE_AREAS = [
  "Palm Beach",
  "Palm Beach Island",
  "West Palm Beach",
  "Jupiter Island",
  "Singer Island",
  "Palm Beach County",
] as const;

export const IDS = {
  palmBeach: `${SITE}/#palm-beach`,
  parent: "https://www.bmb.builders/#organization",
  person: `${SITE}/#aj-hoover`,
  website: `${SITE}/#website`,
} as const;

/** Confirmed profiles. Google Maps links are search URLs, not place IDs. */
export const SOCIAL_LINKS = {
  instagram: {
    href: "https://www.instagram.com/bmbbuilders/",
    label: "Instagram",
    handle: "@bmbbuilders",
  },
  facebook: {
    href: "https://www.facebook.com/beaumondebuilders",
    label: "Facebook",
  },
  youtube: {
    href: "https://www.youtube.com/@AjHooverBMB",
    label: "YouTube",
    handle: "@AjHooverBMB",
  },
  linkedin: {
    href: "https://www.linkedin.com/company/beau-monde-builders/",
    label: "LinkedIn",
  },
} as const;

export const REVIEW_LINKS = {
  googleRockledge: {
    href: "https://www.google.com/maps/search/?api=1&query=Beau+Monde+Builders%2C+1129+Rockledge+Blvd+Ste+101%2C+Rockledge%2C+FL",
    label: "Google (Rockledge)",
  },
  googlePalmBeach: {
    href: "https://www.google.com/maps/search/?api=1&query=Beau+Monde+Builders%2C+205+Worth+Avenue+Suite+120%2C+Palm+Beach%2C+FL",
    label: "Google (Palm Beach)",
  },
  houzz: {
    href: "https://www.houzz.com/professionals/general-contractors/beau-monde-builders-inc-pfvwus-pf~1921934198",
    label: "Houzz",
  },
} as const;

const BBB_PROFILE =
  "https://www.bbb.org/us/fl/rockledge/profile/home-builders/beau-monde-builders-inc-0733-90709521";

const CHAMBER_PROFILE =
  "https://business.palmbeaches.org/business-directory/Details/beau-monde-builders-4720823";

/**
 * Identity links only. No aggregateRating and no reviewCount:
 * Google treats self-serving review markup on a LocalBusiness as ineligible.
 * Houzz is included because it is a confirmed profile. Google Maps search
 * URLs are hasMap links, not sameAs, until a place ID is confirmed.
 * Yelp is named on the page but has no confirmed business URL here.
 */
export const SAME_AS = [
  SOCIAL_LINKS.instagram.href,
  SOCIAL_LINKS.facebook.href,
  SOCIAL_LINKS.linkedin.href,
  SOCIAL_LINKS.youtube.href,
  REVIEW_LINKS.houzz.href,
  BBB_PROFILE,
  CHAMBER_PROFILE,
] as const;

export const PUBLIC_PATHS = [
  "/",
  "/about",
  "/process",
  "/projects",
  "/renovations",
  "/press",
  "/social",
  "/contact",
  "/privacy",
  "/terms",
  "/sitemap",
  "/unsubscribe",
] as const;

export type FaqItem = { question: string; answer: string };

export const HOME_FAQS: FaqItem[] = [
  {
    question: "Who builds custom homes in Palm Beach?",
    answer:
      "Beau Monde Builders builds custom homes from its Palm Beach office at 205 Worth Avenue, Suite 120, Palm Beach, Florida 33480. The phone number there is (561) 646-8992, and the email is aj@bmbpalmbeach.com. The firm is led by AJ Hoover, a Florida Certified Master Builder, an NAHB Certified Master Building Professional, and a Florida Certified Building Contractor (license CBC1260651), with 30 years in the construction industry. Headquarters is 1129 Rockledge Blvd, Suite 101, Rockledge, Florida. The Rockledge office publishes its own site at bmb.builders.",
  },
  {
    question: "What does a Palm Beach renovation involve?",
    answer:
      "A renovation with Beau Monde Builders can cover a whole home, a condominium, a kitchen, or a bath. The renovations page names Palm Beach Island, West Palm Beach, Jupiter Island, and Singer Island, and it describes condominium projects that include building management, schedule rules, and jobsite logistics. The scope and price are set for each project. To talk about a renovation, call (561) 646-8992 or use the contact form.",
  },
];

export const RENOVATION_FAQS: FaqItem[] = [HOME_FAQS[1]];

export type Crumb = { name: string; path: string };

export function absoluteUrl(path: string) {
  if (!path || path === "/") return `${SITE}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE}${normalized}`;
}

function areaNode(name: string) {
  return {
    "@type": name === "Palm Beach County" ? "AdministrativeArea" : "Place",
    name,
    containedInPlace: { "@type": "State", name: "Florida" },
  };
}

const areaServed = SERVICE_AREAS.map(areaNode);

const services: { id: string; name: string; description: string; url: string }[] = [
  {
    id: `${SITE}/#service-custom-homes`,
    name: "Custom home building",
    description: "Custom homes from the Palm Beach office at 205 Worth Avenue.",
    url: `${SITE}/process`,
  },
  {
    id: `${SITE}/#service-renovation`,
    name: "Home renovation",
    description: "Whole-home, condominium, kitchen, and bath renovations.",
    url: `${SITE}/renovations`,
  },
  {
    id: `${SITE}/#service-condo`,
    name: "Condominium renovation",
    description: "Condominium renovations, including work in managed buildings.",
    url: `${SITE}/renovations`,
  },
  {
    id: `${SITE}/#service-kitchen`,
    name: "Kitchen renovation",
    description: "Kitchen renovations.",
    url: `${SITE}/renovations`,
  },
  {
    id: `${SITE}/#service-bath`,
    name: "Bathroom renovation",
    description: "Bath renovations.",
    url: `${SITE}/renovations`,
  },
];

function postalAddress(address: typeof PALM_BEACH | typeof ROCKLEDGE) {
  return { "@type": "PostalAddress", ...address };
}

const palmBeachBusiness = {
  "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
  "@id": IDS.palmBeach,
  name: SITE_NAME,
  url: `${SITE}/`,
  image: OG_IMAGE,
  logo: {
    "@type": "ImageObject",
    url: `${SITE}/favicon.png`,
  },
  foundingDate: "2015",
  description:
    "Beau Monde Builders is a custom home builder and renovation firm founded in 2015. The Palm Beach office is at 205 Worth Avenue, Suite 120, Palm Beach, Florida. Headquarters is in Rockledge, Florida. AJ Hoover, the chief executive, has 30 years in the construction industry.",
  telephone: PALM_BEACH_PHONE,
  email: PUBLIC_EMAIL,
  address: postalAddress(PALM_BEACH),
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.7015",
    longitude: "-80.0370",
  },
  hasMap: REVIEW_LINKS.googlePalmBeach.href,
  parentOrganization: { "@id": IDS.parent },
  founder: { "@id": IDS.person },
  employee: { "@id": IDS.person },
  sameAs: [...SAME_AS],
  areaServed,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PALM_BEACH_PHONE,
    email: PUBLIC_EMAIL,
    contactType: "customer service",
    areaServed: "US-FL",
    availableLanguage: "English",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Beau Monde Builders services",
    itemListElement: services.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: { "@id": service.id },
    })),
  },
};

const parentOrganization = {
  "@type": "Organization",
  "@id": IDS.parent,
  name: SITE_NAME,
  url: "https://www.bmb.builders/",
  foundingDate: "2015",
  description:
    "Beau Monde Builders, founded in 2015, is headquartered at 1129 Rockledge Blvd, Suite 101, Rockledge, Florida. The Palm Beach office is a separate site at bmbpalmbeach.com.",
  telephone: ROCKLEDGE_PHONE,
  address: postalAddress(ROCKLEDGE),
  hasMap: REVIEW_LINKS.googleRockledge.href,
  subOrganization: { "@id": IDS.palmBeach },
};

const person = {
  "@type": "Person",
  "@id": IDS.person,
  name: "AJ Hoover",
  jobTitle: "Chief Executive Officer",
  description:
    "AJ Hoover is a Florida Certified Master Builder, an NAHB Certified Master Building Professional, and a Florida Certified Building Contractor (CBC1260651), with 30 years in the construction industry. Beau Monde Builders was founded in 2015.",
  image: absoluteUrl(ajPortrait.url),
  telephone: PALM_BEACH_PHONE,
  email: PUBLIC_EMAIL,
  worksFor: [{ "@id": IDS.parent }, { "@id": IDS.palmBeach }],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: LICENSE.name,
      identifier: LICENSE.identifier,
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Florida Department of Business and Professional Regulation",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Florida Certified Master Builder",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "NAHB Certified Master Building Professional",
      recognizedBy: {
        "@type": "Organization",
        name: "National Association of Home Builders",
      },
    },
  ],
  knowsAbout: ["Custom home building", "Home renovation"],
};

const website = {
  "@type": "WebSite",
  "@id": IDS.website,
  url: `${SITE}/`,
  name: "Beau Monde Builders Palm Beach",
  description: palmBeachBusiness.description,
  publisher: { "@id": IDS.palmBeach },
  inLanguage: "en-US",
};

const serviceNodes = services.map((service) => ({
  "@type": "Service",
  "@id": service.id,
  name: service.name,
  description: service.description,
  serviceType: service.name,
  url: service.url,
  provider: { "@id": IDS.palmBeach },
  areaServed,
}));

export function faqNode(items: FaqItem[], path: string) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    url: absoluteUrl(path),
    isPartOf: { "@id": IDS.website },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbNode(items: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function structuredData(opts: {
  path?: string;
  title: string;
  description: string;
  pageType?: string;
  image?: string;
  breadcrumbs?: Crumb[];
  faq?: FaqItem[];
  extra?: Record<string, unknown>[];
  mainEntityId?: string;
}) {
  const graph: Record<string, unknown>[] = [
    palmBeachBusiness,
    parentOrganization,
    person,
    website,
    ...serviceNodes,
  ];

  if (opts.path) {
    const page: Record<string, unknown> = {
      "@type": opts.pageType || "WebPage",
      "@id": `${absoluteUrl(opts.path)}#webpage`,
      url: absoluteUrl(opts.path),
      name: opts.title,
      description: opts.description,
      isPartOf: { "@id": IDS.website },
      about: { "@id": IDS.palmBeach },
      inLanguage: "en-US",
      primaryImageOfPage: opts.image || OG_IMAGE,
    };
    if (opts.mainEntityId) page.mainEntity = { "@id": opts.mainEntityId };
    if (opts.breadcrumbs?.length) {
      page.breadcrumb = breadcrumbNode(opts.breadcrumbs);
    }
    graph.push(page);
  }

  if (opts.faq?.length && opts.path) graph.push(faqNode(opts.faq, opts.path));

  for (const node of opts.extra || []) {
    const { ["@context"]: _context, ...rest } = node;
    graph.push(rest);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
