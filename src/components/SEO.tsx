import { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../lib/ssr';

interface ArticleData {
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article' | 'software' | 'product' | 'contact';
  imageUrl?: string;
  articleData?: ArticleData;
  customSchema?: object;
  noindex?: boolean;
}

const SITE_NAME = 'Simulador On-Line';
const DEFAULT_IMAGE = 'https://www.simuladoronline.com/assets/og-image.jpg';

// No build (pré-renderização) a página registra aqui os dados de SEO e o
// script escreve as tags no <head> do HTML.
export const SeoCollectorContext = createContext<{ data?: SEOProps & { url: string } } | null>(null);

export const buildSeo = (props: SEOProps, url: string) => {
  const { title, description, type = 'website', imageUrl = DEFAULT_IMAGE, articleData, customSchema, noindex } = props;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const currentUrl = props.canonical || url;

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
        "name": articleData.author || SITE_NAME,
        "url": "https://www.simuladoronline.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": SITE_NAME,
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
        "name": SITE_NAME,
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
      "name": SITE_NAME,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "Ferramenta nº1 em Multicálculo de Planos de Saúde, Sites e CRM para Corretores de Seguros.",
      "url": "https://www.simuladoronline.com",
      "provider": {
        "@type": "Organization",
        "name": SITE_NAME,
        "url": "https://www.simuladoronline.com",
        "logo": "https://www.simuladoronline.com/favicon.ico"
      }
    };
  }

  const meta: { attr: 'name' | 'property'; key: string; value: string }[] = [
    { attr: 'name', key: 'description', value: description },
    { attr: 'name', key: 'robots', value: noindex ? 'noindex, nofollow' : 'index, follow' },
    { attr: 'property', key: 'og:type', value: type === 'article' ? 'article' : 'website' },
    { attr: 'property', key: 'og:title', value: fullTitle },
    { attr: 'property', key: 'og:description', value: description },
    { attr: 'property', key: 'og:image', value: imageUrl },
    { attr: 'property', key: 'og:site_name', value: SITE_NAME },
    { attr: 'property', key: 'og:url', value: currentUrl },
    { attr: 'property', key: 'og:locale', value: 'pt_BR' },
    { attr: 'name', key: 'twitter:card', value: 'summary_large_image' },
    { attr: 'name', key: 'twitter:title', value: fullTitle },
    { attr: 'name', key: 'twitter:description', value: description },
    { attr: 'name', key: 'twitter:image', value: imageUrl },
  ];
  if (type === 'article' && articleData) {
    if (articleData.publishedTime) meta.push({ attr: 'property', key: 'article:published_time', value: articleData.publishedTime });
    if (articleData.author) meta.push({ attr: 'property', key: 'article:author', value: articleData.author });
    if (articleData.category) meta.push({ attr: 'property', key: 'article:section', value: articleData.category });
  }

  return { fullTitle, currentUrl, meta, schemaJson, noindex };
};

// Tags do <head> em texto, usadas pelo script de build.
export const renderHeadTags = (props: SEOProps, url: string) => {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const seo = buildSeo(props, url);
  return [
    `<title>${esc(seo.fullTitle)}</title>`,
    ...seo.meta.map((m) => `<meta ${m.attr}="${m.key}" content="${esc(m.value)}" />`),
    seo.noindex ? '' : `<link rel="canonical" href="${esc(seo.currentUrl)}" />`,
    `<script type="application/ld+json" id="schema-org-dynamic">${JSON.stringify(seo.schemaJson).replace(/</g, '\\u003c')}</script>`,
  ].filter(Boolean).join('\n  ');
};

const updateTag = (attr: 'name' | 'property', key: string, value: string) => {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
};

export default function SEO(props: SEOProps) {
  const { pathname } = useLocation();
  const url = `${SITE_URL}${pathname}`;

  const collector = useContext(SeoCollectorContext);
  if (collector) collector.data = { ...props, url };

  const { title, description, canonical, type, imageUrl, articleData, customSchema, noindex } = props;

  useEffect(() => {
    const seo = buildSeo(props, url);

    // 1. Title e meta tags (description, robots, Open Graph, Twitter, artigo)
    document.title = seo.fullTitle;
    seo.meta.forEach((m) => updateTag(m.attr, m.key, m.value));

    // 2. Canonical (página noindex fica sem canonical)
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (seo.noindex) {
      canonicalElement?.remove();
    } else {
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.setAttribute('href', seo.currentUrl);
    }

    // 3. Schema.org JSON-LD
    let scriptElement = document.querySelector('script#schema-org-dynamic');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      scriptElement.setAttribute('id', 'schema-org-dynamic');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(seo.schemaJson);

    // 4. Pageview do GA4 na navegação interna
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-EM39PKYQ2V', {
        page_path: window.location.pathname + window.location.search + window.location.hash,
        page_title: seo.fullTitle
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, canonical, type, imageUrl, articleData, customSchema, noindex, url]);

  return null;
}
