import { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import type { WPPost, Product, Template, LandingPageItem, Partner, CompactTableUpdate } from '../services/wpService';

export const SITE_URL = 'https://www.simuladoronline.com';

// Dados que a página precisava buscar depois de abrir. No build eles são
// carregados antes, vão no HTML e o navegador reaproveita sem buscar de novo.
export interface SsrData {
  path?: string;
  posts?: WPPost[];
  post?: WPPost | null;
  recentPosts?: WPPost[];
  products?: Product[];
  templates?: Template[];
  landingPages?: LandingPageItem[];
  partners?: Partner[];
  compactUpdates?: CompactTableUpdate[];
}

export const SsrDataContext = createContext<SsrData>({});

export const readSsrData = (): SsrData => {
  if (typeof document === 'undefined') return {};
  const el = document.getElementById('__SSR_DATA__');
  try {
    return el ? JSON.parse(el.textContent || '{}') : {};
  } catch {
    return {};
  }
};

// Só vale para a página em que o visitante entrou; ao navegar para outra
// rota a página volta a buscar os dados como antes.
export const useSsrData = (): SsrData => {
  const data = useContext(SsrDataContext);
  const { pathname } = useLocation();
  return data.path === pathname ? data : {};
};

// Datas sempre no fuso de Brasília, para o HTML do build e o do navegador baterem.
export const formatDateBR = (date: string, options?: Intl.DateTimeFormatOptions) => {
  const d = new Date(date);
  if (isNaN(d.getTime())) return date;
  return d.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo', ...options });
};
