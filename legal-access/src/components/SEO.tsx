import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = "Legal Access | Law Made Easy. Access Made Possible.",
  description = "Legal Access is Nigeria's leading legal-tech platform, democratizing access to justice through tech-driven legal solutions, professional matching, and law tutoring.",
  keywords = "legal services Nigeria, law tutoring, legal tech, pro bono lawyers, SME legal support, legal consultation",
  image = "/src/assets/Main_Logo-removebg-preview.png",
  url = "https://legalaccess.live/",
}: SEOProps) {
  const fullTitle = title.includes("Legal Access") ? title : `${title} | Legal Access`;

  const pathSegments = new URL(url).pathname.split('/').filter(Boolean);
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://legalaccess.live/"
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        "item": `https://legalaccess.live/${pathSegments.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Legal Access",
        "alternateName": "Legal Access Nigeria",
        "url": "https://legalaccess.live/",
        "logo": "https://legalaccess.live/src/assets/Main_Logo-removebg-preview.png",
        "sameAs": [
          "https://www.linkedin.com/company/legal-access-hq/",
          "https://x.com/Legalaccess_HQ",
          "https://www.instagram.com/lex_access?igsh=MXh0dGdnc3gyNnh2cA=="
        ],
        "description": description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressCountry": "NG"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+2348052829096",
          "contactType": "customer support"
        }
      },
      breadcrumbList
    ]
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
