import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Crosshair, 
  Award, 
  Flame, 
  Anchor, 
  AlertTriangle,
  FileCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../data/companyInfo';
import { Badge } from '../ui/Badge';

const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/hero/hero_offshore.jpg',
    badge: 'Offshore & Milieux Pétroliers',
    caption: 'Interventions sur plateformes, barges & terminaux pétroliers'
  },
  {
    id: 2,
    image: '/images/hero/hero_pest_treatment.jpg',
    badge: 'Lutte Antiparasitaire 3D',
    caption: 'Dératisation, désinsectisation & désinfection industrielle'
  },
  {
    id: 3,
    image: '/images/hero/hero_water_sanitation.jpg',
    badge: 'Assainissement & Bâches à Eau',
    caption: 'Curage, hydrocurage & analyses bactériologiques certifiées'
  }
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="accueil" className="relative pt-32 sm:pt-40 pb-16 lg:pb-24 overflow-hidden bg-dark text-white">
      
      {/* 3 Background Sliding Images with Smooth Cross-Fade and Ken Burns zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.badge}
              className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out ${
                index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Industrial Dark Gradients for 100% Text Readability & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/60 z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15 z-10" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* QHSE Animated Badge & Slide Indicator */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-qhse-900/60 border border-qhse-500/40 text-emerald-300 text-xs font-bold shadow-xs backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-qhse-400 animate-ping" />
                <ShieldCheck className="w-4 h-4 text-qhse-400" />
                <span>Intervention d'Urgence 24/7 & Protocoles QHSE</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-neutral-300 text-[11px] font-medium backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                <span>{HERO_SLIDES[currentSlide].badge}</span>
              </div>
            </div>

            {/* Main H1 Title */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.18]">
              L’Excellence Opérationnelle en <span className="text-primary-400">Hygiène 3D</span>, Assainissement & Solutions QHSE.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-200 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Partenaire stratégique des acteurs majeurs de l’industrie pétrolière onshore & offshore, du maritime, de la restauration collective et des grands sites en République du Congo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                to="/diagnostic"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-industrial-copper hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Lancer le Diagnostic Express</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/references"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 hover:border-primary-400 transition-all shadow-xs backdrop-blur-sm"
              >
                <span>Nos Références Clients</span>
              </Link>
            </div>

            {/* Reassurance Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 pt-2 text-xs font-semibold text-neutral-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>FDS & Fiches Techniques</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Habilitations ATEX & Offshore</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Normes HACCP</span>
              </div>
            </div>

          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="bg-gradient-to-br from-dark-card/90 to-dark/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 text-white shadow-2xl border border-primary-500/40 relative overflow-hidden space-y-4">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/20 rounded-full blur-2xl pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center border border-primary-400 flex-shrink-0 shadow-xs">
                      <img src="/logo.jpeg" alt="EXCELLENT SERVICES" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-xs sm:text-sm tracking-wide text-white leading-tight">EXCELLENT SERVICES</div>
                      <div className="text-[10px] text-primary-300 font-mono mt-0.5">Pointe-Noire • République du Congo</div>
                    </div>
                  </div>
                  <Badge variant="qhse" size="sm">
                    Agrément QHSE
                  </Badge>
                </div>

                {/* Focus areas */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-lg bg-primary-500/20 text-primary-400 flex-shrink-0">
                        <Crosshair className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white leading-snug">Lutte Antiparasitaire 3D</div>
                        <div className="text-[11px] text-neutral-300 mt-0.5 leading-snug">Dératisation • Désinsectisation • Désinfection</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded flex-shrink-0">100% ACTIF</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-lg bg-accent-copper/20 text-accent-copper flex-shrink-0">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white leading-snug">Déserpentisation Sécurisée</div>
                        <div className="text-[11px] text-neutral-300 mt-0.5 leading-snug">Barrières répulsives & Périmètres sensibles</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded flex-shrink-0">URGENCE 24/7</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 flex-shrink-0">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white leading-snug">Bâches à Eau & Assainissement</div>
                        <div className="text-[11px] text-neutral-300 mt-0.5 leading-snug">Curage • Hydrocurage • Analyses d'eau</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-blue-300 bg-blue-950/60 border border-blue-500/30 px-2 py-0.5 rounded flex-shrink-0">CONFORME OMS</span>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs gap-3">
                  <div>
                    <div className="font-bold text-primary-200 leading-snug">Interventions Complexes & Offshore</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5 leading-snug">Barges, FPSO, Terminaux & Bases pétrolières</div>
                  </div>
                  <div className="flex -space-x-1.5 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center text-white border-2 border-dark" title="Pétrole">
                      <Flame className="w-3 h-3" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white border-2 border-dark" title="Maritime">
                      <Anchor className="w-3 h-3" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-qhse-600 flex items-center justify-center text-white border-2 border-dark" title="QHSE">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="mt-3 bg-dark-card/90 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-md border border-white/15 flex items-center gap-2.5 max-w-max">
                <div className="p-1.5 sm:p-2 rounded-xl bg-qhse-900/60 text-emerald-400 border border-qhse-500/30 flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">+15 Ans d'Expérience</div>
                  <div className="text-[10px] text-neutral-300 leading-tight mt-0.5">Pointe-Noire, Congo</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Slide Pagination Pills */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === currentSlide 
                  ? 'w-8 bg-primary-500' 
                  : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Aller au slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* 4 Animated Key Industrial Metrics */}
        <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_INFO.metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-400/60 transition-all hover:shadow-xs group text-center sm:text-left backdrop-blur-sm"
            >
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-primary-400 group-hover:scale-105 transition-transform duration-300">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-neutral-300 mt-0.5 line-clamp-1">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
