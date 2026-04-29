import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    type: 'text',
    title: 'A primeira ferramenta de cálculos online para corretores de plano de saúde do mercado',
    subtitle: 'A partir de R$30.00',
    cta: 'Quero testar agora!',
    bg: 'bg-brand-secondary',
    accent: 'text-brand-primary',
    actionUrl: '/testar-gratis'
  },
  {
    type: 'image-only',
    image: '/banner-allcare-suas-vendas-podem-valer-muito-mais.png',
    mobileImage: '/banner-allcare-suas-vendas-podem-valer-muito-mais-1080x1350.png',
    link: 'https://www.corretorallcare.com.br/'
  },
  {
    type: 'image',
    title: 'CORRETOR, COMECE 2026 COM O SEU NOME LIMPO!',
    subtitle: 'VOCÊ ESTÁ COM O NOME SUJO E NÃO CONSEGUE CRÉDITO?',
    cta: 'ENTRE EM CONTATO AGORA PELO WHATSAPP',
    image: 'https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?q=80&w=2070&auto=format&fit=crop',
    overlay: 'bg-[#002F5D]/85',
    actionUrl: 'https://api.whatsapp.com/send?phone=5511994227649&text=Ol%C3%A1+Guilherme,+sou+cliente+do+*Simulador+On-Line(Valmir)*+tenho+interesse+em+regularizar+meu+nome+',
    icon: 'whatsapp',
    features: [
      'Na Lex Reabilita Nome, limpamos seu CPF/CNPJ em até 30 dias, de forma 100% judicial, baseada na Súmula 359 do STJ.',
      'Atuamos em todos os órgãos: SPC, Serasa, Boa Vista, Quod e Cenprot (Cartórios).'
    ]
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-brand-secondary">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          {(slides[current].type === 'image' || slides[current].type === 'image-only') && (
            <div className="absolute inset-0 z-0">
              {slides[current].type === 'image-only' && slides[current].link ? (
                <a href={slides[current].link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <picture className="w-full h-full block">
                    {slides[current].mobileImage && (
                      <source media="(max-width: 768px)" srcSet={slides[current].mobileImage} />
                    )}
                    <img
                      src={slides[current].image}
                      alt="Banner Slide"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </a>
              ) : (
                <>
                  <picture className="w-full h-full block">
                    {slides[current].mobileImage && (
                      <source media="(max-width: 768px)" srcSet={slides[current].mobileImage} />
                    )}
                    <img
                      src={slides[current].image}
                      alt={slides[current].title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </picture>
                  <div className={`absolute inset-0 ${slides[current].overlay} backdrop-blur-[2px]`} />
                </>
              )}
            </div>
          )}

          {slides[current].type !== 'image-only' && (
            <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight"
              >
                {slides[current].title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`text-xl md:text-2xl font-bold mb-12 ${slides[current].accent || 'text-white/80'} underline underline-offset-8 decoration-2`}
              >
                {slides[current].subtitle}
              </motion.p>

              {slides[current].features && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col md:flex-row justify-center gap-4 mb-10 text-white text-sm md:text-base text-left max-w-4xl mx-auto"
                >
                  {slides[current].features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 bg-black/30 p-4 md:p-6 rounded-2xl backdrop-blur-md flex-1 border border-white/10 shadow-lg">
                      <ShieldCheck className="text-green-400 shrink-0 mt-0.5" size={28} />
                      <p className="leading-relaxed">{feat}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                {slides[current].actionUrl?.startsWith('http') ? (
                  <a 
                    href={slides[current].actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_10px_40px_rgba(61,171,227,0.3)] hover:scale-105 active:scale-95 transition-all ${slides[current].icon === 'whatsapp' ? 'bg-[#25D366] hover:bg-[#1DA851]' : 'bg-brand-primary'}`}
                  >
                    {slides[current].icon === 'whatsapp' && <MessageCircle size={22} />}
                    {slides[current].cta}
                    {slides[current].icon !== 'whatsapp' && <ArrowRight size={22} />}
                  </a>
                ) : (
                  <Link 
                    to={slides[current].actionUrl || "/produtos"} 
                    className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_10px_40px_rgba(61,171,227,0.3)] hover:scale-105 active:scale-95 transition-all"
                  >
                    {slides[current].cta}
                    <ArrowRight size={22} />
                  </Link>
                )}
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex justify-between px-4 md:px-8 pointer-events-none">
        <button
          onClick={prevSlide}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 inset-x-0 z-20 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === i ? 'w-10 bg-brand-primary' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Ambient decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-button/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </section>
  );
}
