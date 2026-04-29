import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if the user has already provided consent
    const consent = localStorage.getItem('simuladoronline_cookie_consent');
    if (!consent) {
      // Small delay so it doesn't immediately snap in, feels more intentional
      const timer = setTimeout(() => setShowConsent(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('simuladoronline_cookie_consent', 'all');
    setShowConsent(false);
    
    // In the future, this is where you would initialize tracking scripts:
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({ 'event': 'consent_granted' });
  };

  const handleDecline = () => {
    localStorage.setItem('simuladoronline_cookie_consent', 'essential');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col md:flex-row items-start md:items-center gap-6 pointer-events-auto">
            
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-[#D1E9F6] p-3 rounded-xl hidden sm:block">
                <Cookie className="text-brand-primary" size={28} />
              </div>
              <div>
                <h3 className="text-[#002F5D] font-black text-lg mb-1">Nós respeitamos sua privacidade</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Usamos cookies para oferecer a melhor experiência, analisar o tráfego do site e personalizar conteúdo. 
                  Ao clicar em "Aceitar Todos", você concorda com o uso de cookies. Você pode ler mais detalhes e alterar suas 
                  preferências em nossa <Link to="/politica-de-cookies" className="text-brand-primary font-bold underline hover:text-[#002F5D] transition-colors">Política de Cookies</Link>.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-3 rounded-xl font-bold text-[#002F5D] bg-gray-100 hover:bg-gray-200 transition-colors text-sm w-full sm:w-auto"
              >
                Apenas Essenciais
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-xl font-bold text-white bg-brand-primary hover:bg-[#002F5D] transition-all text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Aceitar Todos
              </button>
            </div>

            {/* Optional Close button in top right for mobile */}
            <button 
              onClick={handleDecline}
              className="absolute top-4 right-4 md:hidden text-gray-400 hover:text-gray-600"
              aria-label="Fechar e recusar"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
