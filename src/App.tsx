import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Topbar, Footer, Breadcrumbs } from './components/Navigation';
import Home from './pages/Home';
import CookieConsent from './components/CookieConsent';

// Lazy loading das rotas secundárias para reduzir o bundle inicial no mobile
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const TestarGratis = lazy(() => import('./pages/TestarGratis'));
const Contratar = lazy(() => import('./pages/Contratar'));
const Termos = lazy(() => import('./pages/Termos'));
const PoliticaPrivacidade = lazy(() => import('./pages/PoliticaPrivacidade'));
const PoliticaCookies = lazy(() => import('./pages/PoliticaCookies'));
const ObrigadoNewsletter = lazy(() => import('./pages/ObrigadoNewsletter'));
const Parceiros = lazy(() => import('./pages/Parceiros'));
const Noticias = lazy(() => import('./pages/Noticias'));
const AdminBlog = lazy(() => import('./pages/AdminBlog'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Fallback de carregamento leve e veloz
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CookieConsent />
      <div className="flex flex-col min-h-screen font-sans selection:bg-brand-primary selection:text-white">
        <Topbar />
        <Header />
        <Breadcrumbs />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/testar-gratis" element={<TestarGratis />} />
              <Route path="/contratar" element={<Contratar />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/obrigado-newsletter" element={<ObrigadoNewsletter />} />
              <Route path="/parceiros" element={<Parceiros />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/admin-blog" element={<AdminBlog />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/termos" element={<Termos />} />
              <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
