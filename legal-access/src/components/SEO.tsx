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

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

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
    </Helmet>
  );
}
