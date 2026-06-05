import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: "website" | "article" | "profile";
  image?: string;
  noIndex?: boolean;
}

// Business information for structured data
const businessInfo = {
  name: "Beau Monde Builders",
  legalName: "Beau Monde Builders LLC",
  url: "https://bmbpalmbeach.com",
  logo: "https://bmbpalmbeach.com/favicon.png",
  description: "Florida's premier custom luxury home builder on Worth Avenue, Palm Beach. 30 years of bespoke homebuilding for discerning clients.",
  foundingDate: "1994",
  address: {
    streetAddress: "205 Worth Avenue, Suite 120",
    addressLocality: "Palm Beach",
    addressRegion: "FL",
    postalCode: "33480",
    addressCountry: "US"
  },
  geo: {
    latitude: "26.7015",
    longitude: "-80.0370"
  },
  phone: "+1-561-646-8992",
  email: "aj@bmbpalmbeach.com",
  priceRange: "$$$$$",
  openingHours: ["Mo-Fr 09:00-17:00", "Sa By Appointment"],
  sameAs: [
    "https://instagram.com/beaumondebuilders",
    "https://facebook.com/beaumondebuilders",
    "https://linkedin.com/company/beaumondebuilders",
    "https://youtube.com/@beaumondebuilders"
  ],
  areaServed: [
    "Palm Beach, FL",
    "West Palm Beach, FL",
    "Palm Beach County, FL",
    "South Florida"
  ],
  services: [
    "Custom Home Building",
    "Luxury Home Construction",
    "Estate Home Building",
    "Oceanfront Home Construction",
    "Waterfront Home Building",
    "Home Renovation",
    "Architectural Design Coordination"
  ]
};

// LocalBusiness + HomeAndConstructionBusiness schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
  "@id": `${businessInfo.url}/#organization`,
  name: businessInfo.name,
  legalName: businessInfo.legalName,
  url: businessInfo.url,
  logo: {
    "@type": "ImageObject",
    url: businessInfo.logo
  },
  image: businessInfo.logo,
  description: businessInfo.description,
  foundingDate: businessInfo.foundingDate,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  priceRange: businessInfo.priceRange,
  address: {
    "@type": "PostalAddress",
    ...businessInfo.address
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: businessInfo.geo.latitude,
    longitude: businessInfo.geo.longitude
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
      description: "By Appointment Only"
    }
  ],
  sameAs: businessInfo.sameAs,
  areaServed: businessInfo.areaServed.map(area => ({
    "@type": "City",
    name: area
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Custom Luxury Home Building Services",
    itemListElement: businessInfo.services.map((service, index) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service
      },
      position: index + 1
    }))
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1"
  },
  slogan: "Bespoke Luxury Redefined",
  knowsAbout: [
    "Custom Home Building",
    "Luxury Construction",
    "Palm Beach Architecture",
    "Florida Real Estate Development",
    "High-End Residential Construction"
  ]
};

// Website schema for sitelinks searchbox
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${businessInfo.url}/#website`,
  url: businessInfo.url,
  name: businessInfo.name,
  description: businessInfo.description,
  publisher: {
    "@id": `${businessInfo.url}/#organization`
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${businessInfo.url}/projects?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

// FAQ Schema for common questions (GEO optimization)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Beau Monde Builders different from other luxury home builders in Palm Beach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beau Monde Builders is led by AJ Hoover, a Florida Certified Master Builder with 30 years of experience. This elite designation is held by only the finest builders in Florida, requiring extensive experience, impeccable ethics, verified references, and unwavering commitment to client satisfaction. We provide hands-on leadership in every project, ensuring uncompromising quality."
      }
    },
    {
      "@type": "Question",
      name: "What areas does Beau Monde Builders serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beau Monde Builders primarily serves Palm Beach, West Palm Beach, and Palm Beach County, Florida. We specialize in oceanfront estates, waterfront properties, and luxury custom homes throughout South Florida."
      }
    },
    {
      "@type": "Question",
      name: "What is a Florida Certified Master Builder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Florida Certified Master Builder designation is an elite voluntary certification representing the pinnacle of construction excellence. Requirements include 7+ years of experience, a clean regulatory record, verified client and subcontractor references, and a written warranty. It's held by only the most distinguished builders in Florida."
      }
    },
    {
      "@type": "Question",
      name: "What is the typical timeline for building a custom luxury home with Beau Monde Builders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline for a custom luxury home varies based on size, complexity, and design requirements. Our 9-step process includes initial consultation, site selection, design and planning, transparent budgeting, permits and approvals, construction, custom finishes, quality assurance, and seamless transition. We provide detailed timelines during our initial consultation."
      }
    },
    {
      "@type": "Question",
      name: "How do I schedule a consultation with Beau Monde Builders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can schedule a private consultation by calling (561) 646-8992, emailing info@beaumondebuilders.com, or visiting our office at 205 Worth Avenue, Suite 120, Palm Beach, FL 33480. Our office hours are Monday through Friday 9:00 AM to 5:00 PM, with Saturday appointments available by request."
      }
    }
  ]
};

export const SEO = ({
  title,
  description = businessInfo.description,
  canonical,
  type = "website",
  image = "https://bmbpalmbeach.com/og-image.jpg",
  noIndex = false,
}: SEOProps) => {
  const siteTitle = "Beau Monde Builders Palm Beach";
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} — Luxury Custom Home Builder`;
  const canonicalUrl = canonical ? `${businessInfo.url}${canonical}` : businessInfo.url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content="Beau Monde Builders" />
      <link rel="canonical" href={canonicalUrl} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Palm Beach" />
      <meta name="geo.position" content={`${businessInfo.geo.latitude};${businessInfo.geo.longitude}`} />
      <meta name="ICBM" content={`${businessInfo.geo.latitude}, ${businessInfo.geo.longitude}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Beau Monde Builders" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

// Page-specific structured data components
export const ServicePageSchema = ({ serviceName, description }: { serviceName: string; description: string }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@id": `${businessInfo.url}/#organization`
    },
    areaServed: businessInfo.areaServed.map(area => ({
      "@type": "City",
      name: area
    })),
    serviceType: "Custom Luxury Home Building"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const PersonSchema = ({ 
  name, 
  jobTitle, 
  description, 
  image 
}: { 
  name: string; 
  jobTitle: string; 
  description: string;
  image?: string;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    jobTitle: jobTitle,
    description: description,
    image: image,
    worksFor: {
      "@id": `${businessInfo.url}/#organization`
    },
    knowsAbout: [
      "Custom Home Building",
      "Luxury Construction",
      "Palm Beach Real Estate"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const BreadcrumbSchema = ({ items }: { items: { name: string; url: string }[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${businessInfo.url}${item.url}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEO;
