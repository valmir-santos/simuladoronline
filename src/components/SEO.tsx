import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article' | 'software';
  imageUrl?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  imageUrl = 'https://www.simuladoronline.com/assets/og-image.jpg' // Default OG image
}: SEOProps) {
  const siteName = "Simulador On-Line";
  const fullTitle = `${title} | ${siteName}`;

  // Organization structured data for better AI/Google understanding
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Simulador On-Line",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Ferramenta SaaS de multicálculos de planos de saúde e odontológico para corretores.",
    "url": "https://www.simuladoronline.com",
    "provider": {
      "@type": "Organization",
      "name": "Simulador On-Line"
    }
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}
