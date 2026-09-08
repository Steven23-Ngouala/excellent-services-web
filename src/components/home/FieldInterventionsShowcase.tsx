import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Award
} from 'lucide-react';
import { FIELD_INTERVENTIONS } from '../../data/fieldInterventionsData';

interface Props {
  showTitle?: boolean;
}

export const FieldInterventionsShowcase: React.FC<Props> = ({ 
  showTitle = true 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FIELD_INTERVENTIONS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeItem = FIELD_INTERVENTIONS[currentSlide];

  return (
    <section className="relative text-white py-16 sm:py-24 border-y border-primary-500/40 overflow-hidden bg-dark">
      
      {/* Background Images Cross-Fade with Ken Burns Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {FIELD_INTERVENTIONS.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out ${
                index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Industrial Dark Gradients for Optimal Contrast & 100% Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/90 to-dark/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/60 z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15 z-10" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        {showTitle && (
          <div className="max-w-3xl mb-8 sm:mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-xs font-bold uppercase tracking-wider mb-3.5 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-primary-400" />
              <span>Opérations Terrain & Retours Réels • Pointe-Noire</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              Nos Interventions Opérationnelles en Images
            </h2>
            
            <p className="text-xs sm:text-sm text-neutral-300 mt-2.5 max-w-2xl leading-relaxed">
              Découvrez la rigueur de nos protocoles de sécurité, notre matériel professionnel et l'engagement de nos techniciens habilités en conditions réelles à Pointe-Noire.
            </p>
          </div>
        )}

        {/* Interactive 4-Slide Tabs Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
          {FIELD_INTERVENTIONS.map((item, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentSlide(idx)}
                className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all backdrop-blur-md flex flex-col justify-between group cursor-pointer ${
                  isActive 
                    ? 'bg-primary-500/30 border-primary-400 shadow-md ring-1 ring-primary-400/50 scale-102' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isActive ? 'text-primary-300' : 'text-neutral-400'}`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-[9px] sm:text-[10px] uppercase font-bold px-2 py-0.5 rounded ${isActive ? 'bg-primary-500 text-white' : 'bg-white/10 text-neutral-300'}`}>
                    {item.categoryLabel.split(' ')[0]}
                  </span>
                </div>
                <div className={`text-xs font-bold leading-snug line-clamp-1 ${isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>
                  {item.categoryLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Intervention Focus Card */}
        <div className="bg-dark/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/15 shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Col: Details & Protocol (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-primary-500/20 text-primary-300 text-[10px] font-bold uppercase tracking-wider border border-primary-400/30 font-mono">
                  {activeItem.categoryLabel}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 text-neutral-200 text-[10px] font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-primary-400" />
                  <span>{activeItem.location}</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-white leading-snug">
                {activeItem.title}
              </h3>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                {activeItem.summary}
              </p>

              {/* Safety & Protocol Box */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-start gap-2.5 text-xs text-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-[11px]">Niveau de Sécurité QHSE :</span>
                    <span>{activeItem.safetyLevel}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-neutral-200 pt-1 border-t border-white/10">
                  <Wrench className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-[11px]">Équipements & Matériel Opérationnel :</span>
                    <span className="text-neutral-300">{activeItem.equipment}</span>
                  </div>
                </div>
              </div>

              {/* Key Points */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold text-neutral-300 block uppercase tracking-wider">Points Clés du Protocole :</span>
                {activeItem.keyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-qhse-400 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Col: Metrics & CTA (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
              
              {/* Client Type Tag */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300">
                <span className="text-[10px] font-mono uppercase font-bold text-primary-300 block mb-1">Cible & Milieux d'Application :</span>
                <span className="font-semibold text-white">{activeItem.clientType}</span>
              </div>

              {/* 3 Metrics Cards */}
              <div className="grid grid-cols-3 gap-2 text-center bg-white/5 p-4 rounded-2xl border border-white/10">
                {activeItem.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-heading font-extrabold text-lg sm:text-xl text-primary-400">{m.value}</div>
                    <div className="text-[10px] font-bold text-neutral-300 uppercase leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Single CTA Button (Without Facebook Video) */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-industrial-copper active:scale-95 group text-center"
                >
                  <Award className="w-4 h-4 text-primary-200" />
                  <span>Demander une Intervention pour ce Pôle</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
