import React, { useState } from 'react';
import { 
  Flame, 
  Utensils, 
  Anchor, 
  HeartPulse, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  MessageSquare,
  Clock,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SECTORS_DATA } from '../../data/sectorsData';
import { COMPANY_INFO } from '../../data/companyInfo';

const SECTOR_IMAGES: Record<string, string> = {
  'oil-and-gas': '/images/sectors/sec_oil_gas.jpg',
  'catering-food': '/images/sectors/sec_catering_haccp.jpg',
  'maritime-logistics': '/images/sectors/sec_port_logistics.jpg',
  'healthcare': '/images/sectors/sec_health_clinic.jpg',
  'hospitality-residential': '/images/sectors/sec_commercial_tertiary.jpg',
};

const SECTOR_CTA_CONFIG: Record<string, { buttonText: string; whatsappText: string; sitesCovered: string[] }> = {
  'oil-and-gas': {
    buttonText: 'Demander un Devis Offshore & ATEX',
    whatsappText: 'Bonjour EXCELLENT SERVICES, je souhaite une cotation pour nos installations dans le secteur Pétrole, Gaz & Offshore.',
    sitesCovered: ['Barges de forage', 'FPSO & Plateformes', 'Terminaux pétroliers (Djéno/Likouf)', 'Bases logistiques onshore']
  },
  'catering-food': {
    buttonText: 'Demander un Audit Sanitaire HACCP',
    whatsappText: 'Bonjour EXCELLENT SERVICES, je souhaite un audit d’hygiène et conformité HACCP pour nos cuisines ou réfectoires.',
    sitesCovered: ['Cuisines centrales & traiteurs', 'Réfectoires de bases-vie', 'Unités de transformation', 'Chambres froides & réserves']
  },
  'maritime-logistics': {
    buttonText: 'Demander un Protocole Fumigation Douane',
    whatsappText: 'Bonjour EXCELLENT SERVICES, je souhaite un devis pour la fumigation de conteneurs ou traitement de cales au Port de Pointe-Noire.',
    sitesCovered: ['Parcs à conteneurs sous douane', 'Cales de navires au port', 'Hangars de stockage de fret', 'Silos agro-industriels']
  },
  'healthcare': {
    buttonText: 'Demander un Protocole Bio-Décontamination',
    whatsappText: 'Bonjour EXCELLENT SERVICES, je souhaite une désinfection virucide/bactéricide de haut niveau pour notre établissement médical.',
    sitesCovered: ['Blocs opératoires & stériles', 'Chambres d’hospitalisation', 'Laboratoires d’analyses', 'Dispensaires de chantiers']
  },
  'hospitality-residential': {
    buttonText: 'Demander une Étude Tertiaire & VIP',
    whatsappText: 'Bonjour EXCELLENT SERVICES, je souhaite une étude pour la protection antiparasitaire et espaces verts de notre siège ou résidence.',
    sitesCovered: ['Sièges sociaux & bureaux', 'Hôtels & résidences 4-5 étoiles', 'Résidences d’expatriés VIP', 'Ambassades & consulats']
  }
};

export const SectorShowcase: React.FC = () => {
  const [activeSectorId, setActiveSectorId] = useState<string>(SECTORS_DATA[0].id);

  const activeSector = SECTORS_DATA.find((s) => s.id === activeSectorId) || SECTORS_DATA[0];
  const ctaConfig = SECTOR_CTA_CONFIG[activeSector.id] || SECTOR_CTA_CONFIG['oil-and-gas'];

  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-primary-500" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-amber-500" />;
      case 'Anchor': return <Anchor className="w-5 h-5 text-blue-500" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-red-500" />;
      default: return <Building2 className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="secteurs" className="py-16 sm:py-24 bg-gradient-to-b from-neutral-soft/60 via-white to-neutral-soft/40 border-t border-neutral-border relative overflow-hidden">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-qhse-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-primary-500" />
            <span>Solutions Métiers Spécifiques</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark tracking-tight">
            Une Ingénierie Adaptée aux Exigences de votre Secteur
          </h2>
          <p className="text-xs sm:text-sm text-neutral-muted mt-2.5 leading-relaxed">
            Chaque environnement industriel impose des contraintes de sécurité et de conformité uniques. Cliquez sur votre secteur pour découvrir nos protocoles certifiés.
          </p>
        </div>

        {/* 5 Sector Industrial Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5 mb-8">
          {SECTORS_DATA.map((sector, idx) => {
            const isActive = sector.id === activeSectorId;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSectorId(sector.id)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group relative ${
                  isActive
                    ? 'border-primary-500 bg-white shadow-lg ring-2 ring-primary-500/20 -translate-y-0.5'
                    : 'border-neutral-border bg-white/80 hover:bg-white hover:border-primary-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-primary-50' : 'bg-neutral-soft group-hover:bg-primary-50/50'}`}>
                    {getSectorIcon(sector.iconName)}
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-primary-500 text-white' : 'bg-neutral-100 text-neutral-400'
                  }`}>
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <div className={`font-heading font-bold text-xs sm:text-sm leading-snug transition-colors ${
                    isActive ? 'text-primary-700' : 'text-dark group-hover:text-primary-600'
                  }`}>
                    {sector.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Sector Master Card (Split-View High Contrast Layout) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-border shadow-xl relative overflow-hidden animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Visual, Scope & Core Credentials */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* High-Definition Photo Banner */}
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-neutral-border shadow-md group">
                <img 
                  src={SECTOR_IMAGES[activeSector.id] || SECTOR_IMAGES['oil-and-gas']} 
                  alt={activeSector.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                
                {/* Overlay Floating Tags */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Conformité QHSE Garantie</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 text-white text-xs">
                  <span className="font-mono text-[11px] bg-primary-500/90 backdrop-blur-sm px-2.5 py-1 rounded-lg font-bold">
                    {activeSector.standardCompliance}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] font-medium text-neutral-200">
                    <Clock className="w-3 h-3 text-primary-400" />
                    <span>Astreinte &lt; 2h</span>
                  </span>
                </div>
              </div>

              {/* Scope & Overview */}
              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-dark tracking-tight leading-tight">
                  {activeSector.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-primary-600 mt-1">
                  {activeSector.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed">
                  {activeSector.description}
                </p>
              </div>

              {/* Covered Sites / Installations */}
              <div className="pt-2">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Types d'Installations Traitées :
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {ctaConfig.sitesCovered.map((site, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-neutral-soft border border-neutral-border text-xs font-semibold text-neutral-700"
                    >
                      {site}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Challenges, Solutions & Customized Action */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* 1. Challenges Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 shadow-2xs">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Défis & Risques Critiques du Secteur</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-[13px] text-amber-950">
                  {activeSector.challenges.map((chal, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                      <span className="leading-relaxed">{chal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Solutions Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-qhse-50/80 border border-qhse-200/80 shadow-2xs">
                <div className="text-xs font-bold text-qhse-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-qhse-700 flex-shrink-0" />
                  <span>Protocole & Solutions Déployées par EXCELLENT SERVICES</span>
                </div>
                <div className="space-y-2">
                  {activeSector.solutions.map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-white border border-qhse-100 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-qhse-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-[13px] font-medium text-neutral-800 leading-snug">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Action Block Tailored to the Active Sector */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold uppercase tracking-wider shadow-industrial-copper hover:shadow-md active:scale-95 transition-all text-center"
                >
                  <span>{ctaConfig.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(ctaConfig.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-qhse-500/40 text-qhse-800 bg-qhse-50 hover:bg-qhse-500 hover:text-white text-xs font-bold transition-all shadow-2xs text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
