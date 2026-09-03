import React, { useState, useEffect } from 'react';
import { ExpertiseGrid } from '../components/home/ExpertiseGrid';
import { InterventionWorkflow } from '../components/home/InterventionWorkflow';
import { ShieldCheck } from 'lucide-react';

const EXPERTISES_SLIDES = [
  {
    id: 1,
    poleCode: 'PÔLE 01',
    title: 'Lutte Antiparasitaire (Traitement 3D)',
    subtitle: 'Dératisation de haute précision, désinsectisation ciblée & désinfection virucide',
    image: '/images/expertises/exp_1_pest_3d.jpg'
  },
  {
    id: 2,
    poleCode: 'PÔLE 02',
    title: 'Interventions Spécialisées & Sécurité Périmétrique',
    subtitle: 'Déserpentisation périmétrique, fumigation de conteneurs & démoustication d’envergure',
    image: '/images/expertises/exp_2_snake_fumigation.jpg'
  },
  {
    id: 3,
    poleCode: 'PÔLE 03',
    title: 'Assainissement & Traitement des Eaux',
    subtitle: 'Nettoyage & désinfection de bâches à eau potable, curage de fosses & hydrocurage',
    image: '/images/expertises/exp_3_water_sanitation.jpg'
  },
  {
    id: 4,
    poleCode: 'PÔLE 04',
    title: 'Environnement & Espaces Verts',
    subtitle: 'Désherbage chimique contrôlé en zones ATEX, élagage & aménagement paysager',
    image: '/images/expertises/exp_4_green_spaces.jpg'
  },
  {
    id: 5,
    poleCode: 'PÔLE 05',
    title: 'Fournitures & Équipements QHSE',
    subtitle: 'Distribution de matériel certifié, raticides homologués, pulvérisateurs & EPI',
    image: '/images/expertises/exp_5_qhse_supplies.jpg'
  }
];

export const ExpertisesPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % EXPERTISES_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-8">
      {/* 5-Slide Animated Hero Banner */}
      <section className="relative text-white py-10 sm:py-14 border-b border-primary-500/40 overflow-hidden bg-dark">
        
        {/* Background Images Cross-Fade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {EXPERTISES_SLIDES.map((slide, index) => (
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

          {/* Gradients for Optimal Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/65 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50 z-10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-15 z-10" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl text-center sm:text-left">
            
            {/* Pole Active Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-wider mb-3.5 border border-primary-400/30 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-primary-400" />
              <span>{EXPERTISES_SLIDES[currentSlide].poleCode} • Catalogue Opérationnel QHSE</span>
            </div>

            {/* Dynamic Title */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight min-h-[70px] sm:min-h-[85px] transition-all duration-500">
              {EXPERTISES_SLIDES[currentSlide].title}
            </h1>

            {/* Dynamic Subtitle */}
            <p className="text-sm sm:text-base text-neutral-200 max-w-2xl mt-2 leading-relaxed min-h-[48px] transition-all duration-500">
              {EXPERTISES_SLIDES[currentSlide].subtitle}
            </p>

          </div>
        </div>
      </section>

      {/* Main Grid Component with Full Technical Details & FDS Modals */}
      <ExpertiseGrid />

      {/* 4-Step QHSE Intervention Methodology */}
      <InterventionWorkflow />
    </div>
  );
};
