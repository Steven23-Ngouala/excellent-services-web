import React, { useState, useEffect } from 'react';
import { SectorShowcase } from '../components/home/SectorShowcase';
import { Building2, ArrowRight, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const SECTORS_SLIDES = [
  {
    id: 1,
    tag: 'SECTEUR PÉTROLIER',
    title: 'Pétrole, Gaz & Installations Offshore',
    subtitle: 'Interventions ATEX sur plateformes pétrolières, barges de forage, FPSO & terminaux de Djéno/Likouf',
    image: '/images/sectors/sec_oil_gas.jpg'
  },
  {
    id: 2,
    tag: 'AGROALIMENTAIRE & CATERING',
    title: 'Restauration Collective & Normes HACCP',
    subtitle: 'Désinfection, dératisation et conformité stricte pour cuisines industrielles, bases-vie & traiteurs',
    image: '/images/sectors/sec_catering_haccp.jpg'
  },
  {
    id: 3,
    tag: 'PORTUAIRE & MARITIME',
    title: 'Logistique, Conteneurs & Milieu Portuaire',
    subtitle: 'Fumigation sous douane, démoustication et sécurisation des dépôts du Port Autonome de Pointe-Noire',
    image: '/images/sectors/sec_port_logistics.jpg'
  },
  {
    id: 4,
    tag: 'SANTÉ & MÉDICAL',
    title: 'Cliniques, Hôpitaux & Laboratoires',
    subtitle: 'Bio-décontamination, désinfection virucide/bactéricide de blocs opératoires et salles blanches',
    image: '/images/sectors/sec_health_clinic.jpg'
  },
  {
    id: 5,
    tag: 'TERTIAIRE & RÉSIDENTIEL',
    title: 'Bureaux d’Affaires & Résidences Sécurisées',
    subtitle: 'Protection antiparasitaire continue et déserpentisation périmétrique pour sièges sociaux & complexes VIP',
    image: '/images/sectors/sec_commercial_tertiary.jpg'
  }
];

export const SectorsPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SECTORS_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-8">
      {/* 5-Slide Animated Hero Banner */}
      <section className="relative text-white py-16 sm:py-24 border-b border-primary-500/40 overflow-hidden bg-dark">
        
        {/* Background Images Cross-Fade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {SECTORS_SLIDES.map((slide, index) => (
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
              <Building2 className="w-3.5 h-3.5 text-primary-400" />
              <span>{SECTORS_SLIDES[currentSlide].tag} • Référentiels Métiers</span>
            </div>

            {/* Dynamic Title */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight min-h-[70px] sm:min-h-[85px] transition-all duration-500">
              {SECTORS_SLIDES[currentSlide].title}
            </h1>

            {/* Dynamic Subtitle */}
            <p className="text-sm sm:text-base text-neutral-200 max-w-2xl mt-2 leading-relaxed min-h-[48px] transition-all duration-500">
              {SECTORS_SLIDES[currentSlide].subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 pt-6">
              <Link
                to="/diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                <span>Lancer un Diagnostic Sectoriel</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wider border border-white/20 transition-all backdrop-blur-sm"
              >
                <FileCheck className="w-4 h-4 text-primary-400" />
                <span>Demander une Cotation Spécifique</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Sector Showcase Detailed Component */}
      <SectorShowcase />
    </div>
  );
};
