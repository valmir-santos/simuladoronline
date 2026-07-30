import { useEffect } from 'react';

interface ArticleData {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article' | 'software' | 'product' | 'contact';
  imageUrl?: string;
  articleData?: ArticleData;
  customSchema?: object;
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
  imageUrl = 'https://www.simuladoronline.com/assets/og-image.jpg',
  articleData,
  customSchema
}: SEOProps) {
  useEffect(() => {
    const siteName = "Simulador On-Line";
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
    const currentUrl = canonical || window.location.href;

    // 1. Update Title
    document.title = fullTitle;

    // 2. Update Meta Description
    updateTag('meta[name="description"]', 'content', description);

    // 3. Update Open Graph tags
    updateTag('meta[property="og:type"]', 'content', type === 'article' ? 'article' : 'website');
    updateTag('meta[property="og:title"]', 'content', fullTitle);
    updateTag('meta[property="og:description"]', 'content', description);
    updateTag('meta[property="og:image"]', 'content', imageUrl);
    updateTag('meta[property="og:site_name"]', 'content', siteName);
    updateTag('meta[property="og:url"]', 'content', currentUrl);

    // Article Specific Meta Tags
    if (type === 'article' && articleData) {
      if (articleData.publishedTime) {
        updateTag('meta[property="article:published_time"]', 'content', articleData.publishedTime);
      }
      if (articleData.author) {
        updateTag('meta[property="article:author"]', 'content', articleData.author);
      }
      if (articleData.category) {
        updateTag('meta[property="article:section"]', 'content', articleData.category);
      }
    }

    // 4. Update Twitter Card tags
    updateTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateTag('meta[name="twitter:title"]', 'content', fullTitle);
    updateTag('meta[name="twitter:description"]', 'content', description);
    updateTag('meta[name="twitter:image"]', 'content', imageUrl);

    // 5. Update Canonical Link
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', currentUrl);

    // 6. Schema.org JSON-LD Structured Data Injection
    let schemaJson: object;

    if (customSchema) {
      schemaJson = customSchema;
    } else if (type === 'article' && articleData) {
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": imageUrl,
        "url": currentUrl,
        "datePublished": articleData.publishedTime,
        "author": {
          "@type": "Organization",
          "name": articleData.author || siteName,
          "url": "https://www.simuladoronline.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": siteName,
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.simuladoronline.com/favicon.ico"
          }
        }
      };
    } else if (type === 'contact') {
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": fullTitle,
        "description": description,
        "url": currentUrl,
        "mainEntity": {
          "@type": "Organization",
          "name": siteName,
          "telephone": "+55-11-3219-0409",
          "email": "comercial@simuladoronline.com.br",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Gonçalves Crespo, 324 - Tatuapé",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "03067-030",
            "addressCountry": "BR"
          }
        }
      };
    } else {
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": siteName,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Ferramenta nº1 em Multicálculo de Planos de Saúde, Sites e CRM para Corretores de Seguros.",
        "url": "https://www.simuladoronline.com",
        "provider": {
          "@type": "Organization",
          "name": siteName,
          "url": "https://www.simuladoronline.com",
          "logo": "https://www.simuladoronline.com/favicon.ico"
        }
      };
    }

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(schemaJson);

    // 7. Dynamic GA4 Pageview Tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-EM39PKYQ2V', {
        page_path: window.location.pathname + window.location.search + window.location.hash,
        page_title: fullTitle
      });
    }

  }, [title, description, canonical, type, imageUrl, articleData, customSchema]);

  return null;
}
