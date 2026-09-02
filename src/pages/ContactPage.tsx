import React, { useState, useEffect } from 'react';
import { ContactSection } from '../components/home/ContactSection';
import { Mail, PhoneCall, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

const CONTACT_SLIDES = [
  {
    id: 1,
    tag: 'DIRECTION TECHNIQUE & DEVIS',
    title: 'Contactez la Direction QHSE & Commerciale',
    subtitle: 'Audit technique sur site, cotations de marché, appels d’offres et contrats cadres sous 24h ouvrées.',
    image: '/images/sectors/sec_oil_gas.jpg'
  },
  {
    id: 2,
    tag: 'ASTREINTE OPÉRATIONNELLE 24/7',
    title: 'Intervention d’Urgence sous 2h à Pointe-Noire',
    subtitle: 'Équipes d’intervention rapide mobilisables immédiatement pour risques herpétologiques, contaminations ou audits inopinés.',
    image: '/images/sectors/sec_catering_haccp.jpg'
  },
  {
    id: 3,
    tag: 'COUVERTURE ONSHORE & OFFSHORE',
    title: 'Interventions sur Sites Pétroliers & Industriels',
    subtitle: 'Déploiement certifié ATEX et BOSIET/HUET sur plateformes en mer, bases logistiques et terminaux côtiers.',
    image: '/images/sectors/sec_port_logistics.jpg'
  }
];

export const ContactPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CONTACT_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-8">
      {/* 3-Slide Animated Hero Banner */}
      <section className="relative text-white py-16 sm:py-24 border-b border-primary-500/40 overflow-hidden bg-dark">
        
        {/* Background Images Cross-Fade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {CONTACT_SLIDES.map((slide, index) => (
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
            
            {/* Contact Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-wider mb-3.5 border border-primary-400/30 backdrop-blur-sm">
              <Mail className="w-3.5 h-3.5 text-primary-400" />
              <span>{CONTACT_SLIDES[currentSlide].tag}</span>
            </div>

            {/* Dynamic Title */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight min-h-[70px] sm:min-h-[85px] transition-all duration-500">
              {CONTACT_SLIDES[currentSlide].title}
            </h1>

            {/* Dynamic Subtitle */}
            <p className="text-sm sm:text-base text-neutral-200 max-w-2xl mt-2 leading-relaxed min-h-[48px] transition-all duration-500">
              {CONTACT_SLIDES[currentSlide].subtitle}
            </p>

            {/* Action Call Button */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-6">
              <a 
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-industrial-copper active:scale-95"
              >
                <PhoneCall className="w-4 h-4 animate-pulse" />
                <span>Ligne Directe 24/7 : {COMPANY_INFO.phones[0].number}</span>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wider border border-white/20 transition-all backdrop-blur-sm"
              >
                <Mail className="w-4 h-4 text-primary-400" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>

          </div>

          {/* 3 Indicators */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Audit & Devis Sous 24h</span>
                <span className="text-neutral-400 text-[11px]">Chiffrage certifié avec FDS</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Astreinte d'Urgence 24/7</span>
                <span className="text-neutral-400 text-[11px]">Mobilisation sous 2 heures</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Siège à Pointe-Noire</span>
                <span className="text-neutral-400 text-[11px]">Tchimbamba, Rép. du Congo</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Formal Contact Section Component (Form + Legal details + Google Map) */}
      <ContactSection />
    </div>
  );
};
