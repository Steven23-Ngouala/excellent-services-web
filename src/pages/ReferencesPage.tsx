import React, { useState, useEffect } from 'react';
import { ClientTrustBar } from '../components/home/ClientTrustBar';
import { CaseStudies } from '../components/home/CaseStudies';
import { 
  Award, 
  Flame, 
  Utensils, 
  Anchor, 
  Building2
} from 'lucide-react';

const REFERENCES_SLIDES = [
  {
    id: 1,
    client: 'TOTAL E&P CONGO',
    sector: 'Pétrole Offshore & Onshore',
    subtitle: 'Assainissement, dératisation continue & déserpentisation des bases pétrolières et barges de forage',
    image: '/images/sectors/sec_oil_gas.jpg',
    icon: Flame,
    color: 'text-primary-400'
  },
  {
    id: 2,
    client: 'NEWREST CONGO',
    sector: 'Catering & Restauration HACCP',
    subtitle: 'Contrôle vectoriel strict et désinfection microbiologique des cuisines industrielles et bases-vie',
    image: '/images/sectors/sec_catering_haccp.jpg',
    icon: Utensils,
    color: 'text-amber-300'
  },
  {
    id: 3,
    client: 'CARROIL',
    sector: 'Logistique & Transport Portuaire',
    subtitle: 'Fumigation des cargaisons, traitement antiparasitaire des entrepôts et désinfection de flotte',
    image: '/images/sectors/sec_port_logistics.jpg',
    icon: Anchor,
    color: 'text-blue-400'
  },
  {
    id: 4,
    client: 'MAFRICOM',
    sector: 'Distribution & Espaces Tertiaires',
    subtitle: 'Désinsectisation préventive, dératisation hermétique et maintien des standards sanitaires',
    image: '/images/sectors/sec_commercial_tertiary.jpg',
    icon: Building2,
    color: 'text-purple-300'
  }
];

export const ReferencesPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % REFERENCES_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-8">
      {/* 4-Slide Animated Hero Banner */}
      <section className="relative text-white py-16 sm:py-24 border-b border-primary-500/40 overflow-hidden bg-dark">
        
        {/* Background Images Cross-Fade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {REFERENCES_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.client}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out ${
                  index === currentSlide ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          ))}

          {/* Gradients for Optimal Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/65 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50 z-10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-15 z-10" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl text-center sm:text-left">
            
            {/* Reference Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-wider mb-3.5 border border-primary-400/30 backdrop-blur-sm">
              <Award className="w-3.5 h-3.5 text-primary-400" />
              <span>{REFERENCES_SLIDES[currentSlide].client} • {REFERENCES_SLIDES[currentSlide].sector}</span>
            </div>

            {/* Dynamic Title */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight min-h-[70px] sm:min-h-[85px] transition-all duration-500">
              Références Clients & Retours d’Expérience
            </h1>

            {/* Dynamic Subtitle */}
            <p className="text-sm sm:text-base text-neutral-200 max-w-2xl mt-2 leading-relaxed min-h-[48px] transition-all duration-500">
              {REFERENCES_SLIDES[currentSlide].subtitle}
            </p>

          </div>

          {/* Interactive 4-References Navigation Pills */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {REFERENCES_SLIDES.map((slide, idx) => {
              const Icon = slide.icon;
              const isActive = idx === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`p-3 rounded-xl border text-left transition-all backdrop-blur-md flex flex-col justify-between group ${
                    isActive 
                      ? 'bg-primary-500/25 border-primary-400 shadow-md ring-1 ring-primary-400/50' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isActive ? 'text-primary-300' : 'text-neutral-400'}`}>
                      0{idx + 1}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isActive ? slide.color : 'text-neutral-400 group-hover:text-white'}`} />
                  </div>
                  <div className={`text-xs font-bold leading-tight line-clamp-1 ${isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>
                    {slide.client}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Partners Grid Component */}
      <ClientTrustBar />

      {/* Proven Field Results & Case Studies Component */}
      <CaseStudies />
    </div>
  );
};
