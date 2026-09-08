import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Wrench, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { FIELD_INTERVENTIONS } from '../../data/fieldInterventionsData';
import { COMPANY_INFO } from '../../data/companyInfo';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

interface Props {
  showTitle?: boolean;
  limit?: number;
}

export const FieldInterventionsShowcase: React.FC<Props> = ({ 
  showTitle = true,
  limit
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les Réalisations' },
    { id: '3d', label: 'Lutte 3D (Thermonébulisation)' },
    { id: 'snake', label: 'Déserpentisation Industrielle' },
    { id: 'office', label: 'Désinfection Bureaux ULV' },
    { id: 'water', label: 'Curage Bâches & Assainissement' },
  ];

  const filtered = activeCategory === 'all' 
    ? FIELD_INTERVENTIONS 
    : FIELD_INTERVENTIONS.filter(item => item.category === activeCategory);

  const displayedInterventions = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="py-16 sm:py-20 bg-neutral-soft/50 border-t border-neutral-border relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100 border border-primary-300/60 text-primary-800 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-primary-600" />
              <span>Opérations Terrain & Retours Réels</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark tracking-tight leading-tight">
              Nos Interventions Opérationnelles en Images
            </h2>
            
            <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 max-w-2xl mx-auto leading-relaxed">
              Découvrez la rigueur de nos protocoles de sécurité, notre matériel professionnel et l'engagement de nos techniciens habilités en conditions réelles à Pointe-Noire.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-primary-500 text-white shadow-xs scale-102'
                      : 'bg-white text-neutral-600 border border-neutral-border hover:bg-neutral-100 hover:text-dark'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Interventions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedInterventions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-neutral-border hover:border-primary-400/80 transition-all duration-300 shadow-xs hover:shadow-md overflow-hidden flex flex-col justify-between group"
            >
              {/* Image & Badges */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-dark">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                
                {/* Category & Location Badges */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-dark/85 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-white/20">
                    {item.categoryLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-primary-500/90 backdrop-blur-md text-white font-bold text-[10px] flex items-center gap-1 shadow-xs">
                    <MapPin className="w-3 h-3" />
                    <span>Pointe-Noire</span>
                  </span>
                </div>

                {/* Safety & Protocol Banner at bottom of image */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-2.5 rounded-xl bg-dark/80 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center gap-2 text-[11px] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="line-clamp-1">{item.safetyLevel}</span>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-dark leading-snug group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Equipment Highlight Box */}
                  <div className="mt-3.5 p-3 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-2.5">
                    <Wrench className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 block">Matériel Opérationnel :</span>
                      <span className="text-xs font-semibold text-dark">{item.equipment}</span>
                    </div>
                  </div>

                  {/* Key Protocol Steps */}
                  <div className="mt-4 space-y-1.5">
                    <span className="text-[11px] font-bold text-neutral-700 block">Points clés du protocole :</span>
                    {item.keyPoints.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-qhse-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics & Actions */}
                <div className="pt-4 border-t border-neutral-border/80 space-y-3">
                  {/* 3 Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center bg-primary-50/50 p-2.5 rounded-xl border border-primary-100">
                    {item.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="font-heading font-extrabold text-sm text-primary-700">{m.value}</div>
                        <div className="text-[9px] font-semibold text-neutral-500 uppercase">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <a
                      href={COMPANY_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-[#1877F2] font-bold text-xs transition-all text-center group/btn"
                    >
                      <FacebookIcon className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                      <span className="line-clamp-1">Voir Vidéo sur Facebook</span>
                      <ExternalLink className="w-3 h-3 ml-auto opacity-60" />
                    </a>

                    <Link
                      to="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-dark hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-all text-center"
                    >
                      <span>Demander Intervention</span>
                      <ArrowRight className="w-3.5 h-3.5 text-primary-400" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
