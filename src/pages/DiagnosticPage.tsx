import React, { useState, useEffect } from 'react';
import { DiagnosticWizard } from '../components/home/DiagnosticWizard';
import { QuoteCalculator } from '../components/home/QuoteCalculator';
import { Clock, PhoneCall, ShieldCheck, CheckCircle2, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

const DIAGNOSTIC_SLIDES = [
  {
    id: 1,
    tag: 'SIMULATEUR DE CRITICITÉ QHSE',
    title: 'Diagnostic Express & Estimation Technique',
    subtitle: 'Évaluez en 3 étapes simples la sévérité de l’infestation ou du risque sanitaire pour déclencher le protocole approprié.',
    image: '/images/hero/hero_pest_treatment.jpg'
  },
  {
    id: 2,
    tag: 'ASTREINTE & SÉCURITÉ PÉRIMÉTRIQUE',
    title: 'Déserpentisation & Risques Herpétologiques',
    subtitle: 'Intervention prioritaire en moins de 2 heures pour neutraliser les menaces de serpents et reptiles sur vos bases et villas.',
    image: '/images/expertises/exp_snake_fumigation.jpg'
  },
  {
    id: 3,
    tag: 'ASSAINISSEMENT & EAU POTABLE',
    title: 'Décontamination & Conformité Sanitaire',
    subtitle: 'Protocoles de désinfection virucide, nettoyage de cuves d’eau et curage de fosses certifiés avec remise de rapport.',
    image: '/images/hero/hero_water_sanitation.jpg'
  }
];

export const DiagnosticPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % DIAGNOSTIC_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-8">
      {/* 3-Slide Animated Hero Banner */}
      <section className="relative text-white py-16 sm:py-24 border-b border-primary-500/40 overflow-hidden bg-dark">
        
        {/* Background Images Cross-Fade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {DIAGNOSTIC_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out ${
                  index === currentSlide ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          ))}

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/65 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50 z-10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-15 z-10" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl text-center sm:text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-wider mb-3.5 border border-primary-400/30 backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5 text-primary-400" />
              <span>{DIAGNOSTIC_SLIDES[currentSlide].tag}</span>
            </div>

            {/* Dynamic Title */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight min-h-[70px] sm:min-h-[85px] transition-all duration-500">
              {DIAGNOSTIC_SLIDES[currentSlide].title}
            </h1>

            {/* Dynamic Subtitle */}
            <p className="text-sm sm:text-base text-neutral-200 max-w-2xl mt-2 leading-relaxed min-h-[48px] transition-all duration-500">
              {DIAGNOSTIC_SLIDES[currentSlide].subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-6">
              <a 
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-industrial-copper active:scale-95"
              >
                <PhoneCall className="w-4 h-4 animate-pulse" />
                <span>Astreinte d'Urgence 24/7 : {COMPANY_INFO.phones[0].number}</span>
              </a>

              <a 
                href="#simulateur"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all backdrop-blur-sm"
              >
                <Calculator className="w-4 h-4 text-primary-400" />
                <span>Simuler une Estimation</span>
              </a>
            </div>

          </div>

          {/* 3 Indicators */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Audit Technique Guidé</span>
                <span className="text-neutral-400 text-[11px]">3 questions pour cibler la criticité</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Délai Réponse Immédiat</span>
                <span className="text-neutral-400 text-[11px]">Rappel direct par un ingénieur</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Conformité QHSE</span>
                <span className="text-neutral-400 text-[11px]">Fiches FDS & normes OMS</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 1. Diagnostic Wizard Component (Urgency & Severity in 3 Steps) */}
      <DiagnosticWizard />

      {/* 2. Quote Calculator Component (Detailed Surface, Frequency & Service Simulation) */}
      <QuoteCalculator />
    </div>
  );
};
