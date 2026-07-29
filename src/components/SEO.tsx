import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article' | 'software';
  imageUrl?: string;
}

const updateTag = (selector: string, attribute: string, value: string, tagType: string = 'meta') => {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement(tagType);
    if (tagType === 'meta') {
      const isProperty = selector.includes('property');
      const attrName = isProperty ? 'property' : 'name';
      const attrValue = selector.match(/["'](.*?)["']/)?.[1] || '';
      element.setAttribute(attrName, attrValue);
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
};

export default function SEO({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  imageUrl = 'https://www.simuladoronline.com/assets/og-image.jpg'
}: SEOProps) {
  useEffect(() => {
    const siteName = "Simulador On-Line";
    const fullTitle = `${title} | ${siteName}`;

    // Update Title
    document.title = fullTitle;

    // Update Meta Description
    updateTag('meta[name="description"]', 'content', description);

    // Update Open Graph tags
    updateTag('meta[property="og:type"]', 'content', type);
    updateTag('meta[property="og:title"]', 'content', fullTitle);
    updateTag('meta[property="og:description"]', 'content', description);
    updateTag('meta[property="og:image"]', 'content', imageUrl);
    updateTag('meta[property="og:site_name"]', 'content', siteName);
    
    if (canonical) {
      updateTag('meta[property="og:url"]', 'content', canonical);
    }

    // Update Twitter tags
    updateTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateTag('meta[name="twitter:title"]', 'content', fullTitle);
    updateTag('meta[name="twitter:description"]', 'content', description);
    updateTag('meta[name="twitter:image"]', 'content', imageUrl);

    // Update Canonical URL
    if (canonical) {
      let canonicalElement = document.querySelector('link[rel="canonical"]');
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.setAttribute('href', canonical);
    }

    // Update Schema.org JSON-LD
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

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(organizationSchema);

  }, [title, description, canonical, type, imageUrl]);

  return null;
}
