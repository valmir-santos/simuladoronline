import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Linkedin,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Zap,
  Layout as LayoutIcon,
  Users,
  FileText,
  Monitor,
  Smartphone
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

// --- TOPBAR COMPONENT ---
export function Topbar() {
  return (
    <div className="bg-brand-secondary text-white py-3 px-4 text-xs font-medium border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <a href="https://api.whatsapp.com/send?phone=551132190409&text=Olá sou corretor e gostaria de algumas informações" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-brand-primary transition-colors">
              <MessageCircle size={14} className="text-white" />
              <span>(11) 3219-0409</span>
            </a>
            <span className="text-white/30">|</span>
            <a href="tel:2135270540" className="flex items-center gap-1.5 hover:text-brand-primary transition-colors">
              <Phone size={14} className="text-white" />
              <span>(21) 3527-0540</span>
            </a>
          </div>
          <a href="mailto:comercial@simuladoronline.com.br" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
            <Mail size={14} className="text-white" />
            <span className="text-sm">comercial@simuladoronline.com.br</span>
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto px-4 md:px-0">
          <a 
            href="https://app.simuladoronline.com/login/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f05a41] hover:bg-opacity-90 text-white px-4 py-2.5 md:py-1.5 rounded-md text-sm md:text-xs font-bold transition-all shadow-sm text-center w-full md:w-auto"
          >
            Área do Cliente - Clássica
          </a>
          <a 
            href="https://app.simuladoronline.com/app/sessao/login" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f05a41] hover:bg-opacity-90 text-white px-4 py-2.5 md:py-1.5 rounded-md text-sm md:text-xs font-bold transition-all shadow-sm text-center w-full md:w-auto"
          >
            Área do Cliente - Mobile
          </a>
        </div>

        <div className="flex gap-4 justify-center mt-2 md:mt-0">
          <a href="#" className="hover:text-brand-primary transition-colors"><Instagram size={16} /></a>
          <a href="#" className="hover:text-brand-primary transition-colors"><Facebook size={16} /></a>
          <a href="#" className="hover:text-brand-primary transition-colors"><Twitter size={16} /></a>
          <a href="#" className="hover:text-brand-primary transition-colors"><Youtube size={16} /></a>
          <a href="#" className="hover:text-brand-primary transition-colors"><Linkedin size={16} /></a>
        </div>
      </div>
    </div>
  );
}

// --- HEADER COMPONENT ---
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'TESTAR GRÁTIS', path: '/testar-gratis' },
    { name: 'NOSSOS PLANOS', path: '/produtos' },
    { name: 'SOBRE O SIMULADOR', path: '/sobre' },
    { name: 'FALE CONOSCO', path: '/contato' },
    { name: 'BLOG', path: '/blog' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo_simulador_alta.jpg" alt="Simulador On-Line" className="h-12 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-semibold transition-all duration-200 hover:text-brand-primary",
                  location.pathname === item.path ? "text-brand-primary underline decoration-2 underline-offset-8" : "text-brand-secondary/70"
                )}
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-secondary p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-semibold text-brand-secondary hover:bg-gray-50 hover:text-brand-primary rounded-md"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-8 px-3 space-y-3">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 ml-1">Acesso ao Sistema</div>
                
                <a
                  href="https://app.simuladoronline.com/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 w-full bg-brand-secondary text-white p-4 rounded-xl font-bold shadow-md active:scale-95 transition-all"
                >
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Monitor size={20} className="text-brand-primary" />
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-sm">Sistema Clássico</span>
                    <span className="text-[10px] opacity-50 font-medium">Desktop & Notebook</span>
                  </div>
                </a>

                <a
                  href="https://app.simuladoronline.com/app/sessao/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 w-full bg-brand-button text-white p-4 rounded-xl font-bold shadow-md active:scale-95 transition-all"
                >
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Smartphone size={20} className="text-white" />
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-sm">Sistema Mobile</span>
                    <span className="text-[10px] opacity-80 font-medium">Celular & Tablet</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// --- BREADCRUMBS COMPONENT ---
export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') return null;

  return (
    <nav className="bg-gray-50/50 border-b border-gray-100 mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm text-brand-secondary/60 font-medium">
          <li>
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const formattedName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');

            return (
              <li key={name} className="flex items-center space-x-2">
                <ChevronRight size={14} className="opacity-40" />
                {isLast ? (
                  <span className="text-brand-primary font-bold">{formattedName}</span>
                ) : (
                  <Link to={routeTo} className="hover:text-brand-primary transition-colors">{formattedName}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

// --- FOOTER COMPONENT ---
export function Footer() {
  return (
    <footer className="bg-brand-secondary text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img src="/logo_simulador_alta.jpg" alt="Simulador On-Line" className="h-12 w-auto object-contain bg-white rounded-md p-1" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Desde 2006 transformando o dia a dia do corretor de planos de saúde com ferramentas SaaS de alta performance e sites especializados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-white transition-all"><X size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-white transition-all"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Produtos</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/produtos" className="hover:text-brand-primary transition-colors">Simulador Estadual</Link></li>
              <li><Link to="/produtos" className="hover:text-brand-primary transition-colors">Simulador Nacional</Link></li>
              <li><Link to="/produtos" className="hover:text-brand-primary transition-colors">Sites para Corretores</Link></li>
              <li><Link to="/produtos" className="hover:text-brand-primary transition-colors">Sistemas Multi-Calculo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Links Úteis</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/sobre" className="hover:text-brand-primary transition-colors">Quem Somos</Link></li>
              <li><Link to="/blog" className="hover:text-brand-primary transition-colors">Blog & Novidades</Link></li>
              <li><Link to="/contato" className="hover:text-brand-primary transition-colors">Suporte Técnico</Link></li>
              <li><Link to="/termos" className="hover:text-brand-primary transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Canais de Vendas</h4>
            <div className="space-y-4 text-sm">
              <a href="https://api.whatsapp.com/send?phone=551132190409&text=Olá sou corretor e gostaria de algumas informações" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-brand-primary transition-colors">
                <Phone size={18} className="text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <p>(11) 3219-0409 (São Paulo)</p>
                  <p>(21) 3527-0540 (Rio de Janeiro)</p>
                </div>
              </a>
              <a href="https://api.whatsapp.com/send?phone=551132190409&text=Olá sou corretor e gostaria de algumas informações" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-primary transition-colors">
                <MessageCircle size={18} className="text-green-500 shrink-0" />
                <p>Atendimento via WhatsApp</p>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-xs text-gray-500 font-medium tracking-wide">
            © {new Date().getFullYear()} SIMULADOR ON-LINE S.A. | TODOS OS DIREITOS RESERVADOS. PRODUTO HEADLESS SAAS.
          </p>
        </div>
      </div>
      
      {/* WhatsApp Floating Action */}
      <a 
        href="https://api.whatsapp.com/send?phone=551132190409&text=Olá sou corretor e gostaria de algumas informações" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
      >
        <MessageCircle size={28} fill="white" />
      </a>
    </footer>
  );
}
