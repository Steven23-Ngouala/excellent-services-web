import React, { useState, useEffect } from 'react';
import { ExpertiseGrid } from '../components/home/ExpertiseGrid';
import { ShieldCheck, FileCheck, PhoneCall, Bug, Crosshair, Droplets, Trees, PackageCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { Link } from 'react-router-dom';

const EXPERTISES_SLIDES = [
  {
    id: 1,
    poleCode: 'PÔLE 01',
    title: 'Lutte Antiparasitaire (Traitement 3D)',
    subtitle: 'Dératisation de haute précision, désinsectisation ciblée & désinfection virucide',
    image: '/images/expertises/exp_1_pest_3d.jpg',
    icon: Bug,
    color: 'text-primary-400'
  },
  {
    id: 2,
    poleCode: 'PÔLE 02',
    title: 'Interventions Spécialisées & Sécurité Périmétrique',
    subtitle: 'Déserpentisation périmétrique, fumigation de conteneurs & démoustication d’envergure',
    image: '/images/expertises/exp_2_snake_fumigation.jpg',
    icon: Crosshair,
    color: 'text-amber-300'
  },
  {
    id: 3,
    poleCode: 'PÔLE 03',
    title: 'Assainissement & Traitement des Eaux',
    subtitle: 'Nettoyage & désinfection de bâches à eau potable, curage de fosses & hydrocurage',
    image: '/images/expertises/exp_3_water_sanitation.jpg',
    icon: Droplets,
    color: 'text-blue-400'
  },
  {
    id: 4,
    poleCode: 'PÔLE 04',
    title: 'Environnement & Espaces Verts',
    subtitle: 'Désherbage chimique contrôlé en zones ATEX, élagage & aménagement paysager',
    image: '/images/expertises/exp_4_green_spaces.jpg',
    icon: Trees,
    color: 'text-emerald-400'
  },
  {
    id: 5,
    poleCode: 'PÔLE 05',
    title: 'Fournitures & Équipements QHSE',
    subtitle: 'Distribution de matériel certifié, raticides homologués, pulvérisateurs & EPI',
    image: '/images/expertises/exp_5_qhse_supplies.jpg',
    icon: PackageCheck,
    color: 'text-purple-300'
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
    <div className="pt-24 sm:pt-28 pb-16">
      {/* 5-Slide Animated Hero Banner */}
      <section className="relative text-white py-16 sm:py-24 border-b border-primary-500/40 overflow-hidden bg-dark">
        
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

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                <FileCheck className="w-4 h-4" />
                <span>Demander un Devis Formel</span>
              </Link>

              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wider border border-white/20 transition-all backdrop-blur-sm"
              >
                <PhoneCall className="w-4 h-4 text-primary-400" />
                <span>Astreinte 24/7 : {COMPANY_INFO.phones[0].number}</span>
              </a>
            </div>

          </div>

          {/* Interactive 5-Poles Navigation Pills */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {EXPERTISES_SLIDES.map((slide, idx) => {
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
                      {slide.poleCode}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isActive ? slide.color : 'text-neutral-400 group-hover:text-white'}`} />
                  </div>
                  <div className={`text-xs font-bold leading-tight line-clamp-1 ${isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>
                    {slide.title.split('(')[0]}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Main Grid Component with Full Technical Details & FDS Modals */}
      <ExpertiseGrid />
    </div>
  );
};
