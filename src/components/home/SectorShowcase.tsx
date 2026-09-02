import React, { useState } from 'react';
import { 
  Flame, 
  Utensils, 
  Anchor, 
  HeartPulse, 
  Building2, 
  ShieldCheck, 
  CheckCircle, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SECTORS_DATA } from '../../data/sectorsData';

const SECTOR_IMAGES: Record<string, string> = {
  'oil-gas': '/images/sectors/sec_oil_gas.jpg',
  'catering': '/images/sectors/sec_catering_haccp.jpg',
  'logistics': '/images/sectors/sec_port_logistics.jpg',
  'health': '/images/sectors/sec_health_clinic.jpg',
  'commercial': '/images/sectors/sec_commercial_tertiary.jpg',
};

export const SectorShowcase: React.FC = () => {
  const [activeSectorId, setActiveSectorId] = useState<string>(SECTORS_DATA[0].id);

  const activeSector = SECTORS_DATA.find((s) => s.id === activeSectorId) || SECTORS_DATA[0];

  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-4 h-4 text-primary-500" />;
      case 'Utensils': return <Utensils className="w-4 h-4 text-amber-500" />;
      case 'Anchor': return <Anchor className="w-4 h-4 text-blue-500" />;
      case 'HeartPulse': return <HeartPulse className="w-4 h-4 text-red-500" />;
      default: return <Building2 className="w-4 h-4 text-dark" />;
    }
  };

  return (
    <section id="secteurs" className="py-16 sm:py-20 bg-neutral-soft border-t border-neutral-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-primary-500" />
            <span>Expertise Sectorielle</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark tracking-tight">
            Des Solutions Conçues pour vos Métiers
          </h2>
          <p className="text-xs sm:text-sm text-neutral-muted mt-2">
            Chaque secteur présente des contraintes réglementaires strictes. Nous adaptons nos interventions à votre environnement.
          </p>
        </div>

        {/* Sector Navigation Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-8">
          {SECTORS_DATA.map((sector) => {
            const isActive = sector.id === activeSectorId;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSectorId(sector.id)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'border-primary-500 bg-white shadow-sm ring-2 ring-primary-100'
                    : 'border-neutral-border bg-white/70 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-primary-50' : 'bg-neutral-soft'}`}>
                    {getSectorIcon(sector.iconName)}
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-primary-500"></span>}
                </div>
                <div>
                  <div className={`font-heading font-bold text-xs sm:text-sm ${isActive ? 'text-primary-700' : 'text-dark'}`}>
                    {sector.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Sector Presentation Card with Photo Preview */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-border shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left Info & Photo Column */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Sector Photo Banner */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-neutral-border shadow-2xs group">
                <img 
                  src={SECTOR_IMAGES[activeSector.id] || SECTOR_IMAGES['oil-gas']} 
                  alt={activeSector.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-bold bg-primary-500/90 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                    {activeSector.name}
                  </span>
                  <span className="font-mono text-[11px] bg-black/60 px-2 py-0.5 rounded">
                    {activeSector.standardCompliance}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-dark">
                  {activeSector.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-primary-700 mt-1 italic">
                  {activeSector.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed">
                  {activeSector.description}
                </p>
              </div>

              {/* Challenges */}
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Défis & Contraintes Spécifiques</span>
                </div>
                <ul className="space-y-1 text-xs text-amber-950">
                  {activeSector.challenges.map((chal, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 flex-shrink-0"></span>
                      <span>{chal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Solutions Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-5 sm:p-6 rounded-2xl bg-neutral-soft border border-neutral-border">
                <div className="text-xs font-bold text-dark uppercase tracking-wider mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-qhse-600" />
                  <span>Solutions Déployées</span>
                </div>
                
                <div className="space-y-2.5">
                  {activeSector.solutions.map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-neutral-border shadow-2xs">
                      <CheckCircle className="w-4 h-4 text-qhse-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-neutral-800">{sol}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-3.5 border-t border-neutral-border flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-neutral-500 font-medium">
                    Déploiement sur mesure.
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-all"
                  >
                    <span>Demander une Cotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
