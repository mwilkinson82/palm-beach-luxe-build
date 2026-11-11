import { Helmet } from "react-helmet-async";
import {
  OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  structuredData,
  type Crumb,
  type FaqItem,
} from "@/lib/site";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ProfilePage";
  image?: string;
  noIndex?: boolean;
  breadcrumbs?: Crumb[];
  faq?: FaqItem[];
  extraJsonLd?: Record<string, unknown>[];
  mainEntityId?: string;
}

export const SEO = ({
  title,
  description,
  path,
  pageType = "WebPage",
  image = OG_IMAGE,
  noIndex = false,
  breadcrumbs,
  faq,
  extraJsonLd,
  mainEntityId,
}: SEOProps) => {
  const canonical = path ? absoluteUrl(path) : undefined;
  const jsonLd = structuredData({
    path,
    title,
    description,
    pageType,
    image,
    breadcrumbs,
    faq,
    extra: extraJsonLd,
    mainEntityId,
  });
  const payload = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={SITE_NAME} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      {canonical && <meta name="twitter:url" content={canonical} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Palm Beach" />
      <meta name="geo.position" content="26.7015;-80.0370" />
      <meta name="ICBM" content="26.7015, -80.0370" />
      <script type="application/ld+json">{payload}</script>
    </Helmet>
  );
};

export default SEO;
