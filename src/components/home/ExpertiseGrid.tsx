import React, { useState } from 'react';
import { 
  Bug, 
  Crosshair, 
  Droplets, 
  Trees, 
  PackageCheck, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Zap, 
  Beaker,
  ShieldCheck,
  Clock,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { EXPERTISES_DATA } from '../../data/expertisesData';
import { COMPANY_INFO } from '../../data/companyInfo';
import { SubService } from '../../types';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';

const POLE_IMAGES: Record<string, string> = {
  '3d-pest-control': '/images/expertises/exp_1_pest_3d.jpg',
  'specialized-interventions': '/images/expertises/exp_2_snake_fumigation.jpg',
  'sanitation-water': '/images/expertises/exp_3_water_sanitation.jpg',
  'environment-green-spaces': '/images/expertises/exp_4_green_spaces.jpg',
  'qhse-supplies': '/images/expertises/exp_5_qhse_supplies.jpg',
};

const POLE_ICONS: Record<string, React.ReactNode> = {
  '3d-pest-control': <Bug className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />,
  'specialized-interventions': <Crosshair className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />,
  'sanitation-water': <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />,
  'environment-green-spaces': <Trees className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />,
  'qhse-supplies': <PackageCheck className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
};

export const ExpertiseGrid: React.FC = () => {
  const [activePoleId, setActivePoleId] = useState<string>(EXPERTISES_DATA[0].id);
  const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activePole = EXPERTISES_DATA.find((p) => p.id === activePoleId) || EXPERTISES_DATA[0];

  const handleOpenSubServiceDetails = (subService: SubService) => {
    setSelectedSubService(subService);
    setIsModalOpen(true);
  };

  const activeImage = POLE_IMAGES[activePole.id] || POLE_IMAGES['3d-pest-control'];

  return (
    <section id="expertises" className="py-8 sm:py-12 bg-neutral-soft/50 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-qhse-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 5 Pole Selector Industrial Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5 mb-6 sm:mb-8">
          {EXPERTISES_DATA.map((pole, idx) => {
            const isActive = pole.id === activePoleId;
            return (
              <button
                key={pole.id}
                onClick={() => setActivePoleId(pole.id)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group relative ${
                  isActive
                    ? 'border-primary-500 bg-white shadow-lg ring-2 ring-primary-500/20 -translate-y-0.5'
                    : 'border-neutral-border bg-white/80 hover:bg-white hover:border-primary-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-primary-50' : 'bg-neutral-soft group-hover:bg-primary-50/50'}`}>
                    {POLE_ICONS[pole.id] || <Zap className="w-4 h-4 text-dark" />}
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
                    {pole.title.split('(')[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pole Presentation Master Card (Split-View High Contrast) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-border shadow-xl mb-8 relative overflow-hidden animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Real Photo & Identity */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Photo Banner with Badges */}
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-neutral-border shadow-md group">
                <img 
                  src={activeImage} 
                  alt={activePole.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                
                {/* Floating Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-primary-500 text-white shadow-xs">
                    {activePole.code}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Conforme QHSE</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <Badge variant="qhse" size="sm">
                    {activePole.heroBadge}
                  </Badge>
                  <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] font-medium text-neutral-200">
                    <Clock className="w-3 h-3 text-primary-400" />
                    <span>Astreinte &lt; 2h</span>
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-dark tracking-tight leading-tight">
                  {activePole.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                  {activePole.shortDescription}
                </p>
              </div>

            </div>

            {/* Right Column: Key Benefits & Action Block */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Key Benefits Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-qhse-50/80 to-neutral-soft border border-qhse-200/80 shadow-2xs">
                <div className="text-xs font-bold text-qhse-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-qhse-700 flex-shrink-0" />
                  <span>Garanties & Avantages Opérationnels</span>
                </div>
                
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-neutral-800">
                  {activePole.keyBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 p-2 rounded-xl bg-white/90 border border-qhse-100 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-qhse-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold uppercase tracking-wider shadow-industrial-copper hover:shadow-md active:scale-95 transition-all text-center"
                >
                  <span>Demander une Intervention pour ce Pôle</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Bonjour EXCELLENT SERVICES, je souhaite une intervention pour le pôle : ${activePole.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-qhse-500/40 text-qhse-800 bg-qhse-50 hover:bg-qhse-500 hover:text-white text-xs font-bold transition-all shadow-2xs text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Astreinte</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Sub-services Grid (3 Technical Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {activePole.subServices.map((sub) => (
            <div
              key={sub.id}
              className="bg-white rounded-3xl border border-neutral-border hover:border-primary-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6 group relative"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-lg border border-primary-100">
                    Protocole Spécialisé
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 font-bold">
                    FDS OMS / MINISTÈRE
                  </span>
                </div>

                <h4 className="font-heading font-bold text-base text-dark group-hover:text-primary-600 transition-colors mb-1.5 leading-snug">
                  {sub.name}
                </h4>

                <p className="text-xs font-semibold text-primary-600 mb-2.5 italic">
                  {sub.tagline}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {sub.description}
                </p>

                {/* Target Scope */}
                <div className="mb-4 pt-3 border-t border-neutral-border/70">
                  <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    Cibles & Périmètre Traités :
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sub.targetPestsOrScope.map((target, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-neutral-soft text-neutral-700 text-[11px] font-medium border border-neutral-border"
                      >
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3.5 border-t border-neutral-border flex items-center justify-between">
                <span className="text-[11px] text-qhse-700 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-qhse-600" />
                  <span>FDS Certifiée</span>
                </span>
                <button
                  onClick={() => handleOpenSubServiceDetails(sub)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary-50 hover:bg-primary-500 text-primary-700 hover:text-white text-xs font-bold transition-all group/btn"
                >
                  <span>Détails & Protocole</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Technical Protocol Modal */}
      {selectedSubService && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedSubService.name}
          subtitle={selectedSubService.tagline}
        >
          <div className="space-y-5 text-sm text-neutral-700">
            <div>
              <h5 className="font-heading font-bold text-dark text-sm sm:text-base mb-1.5">Description Opérationnelle</h5>
              <p className="leading-relaxed bg-neutral-soft p-3.5 rounded-xl border border-neutral-border text-xs sm:text-sm">
                {selectedSubService.description}
              </p>
            </div>

            <div>
              <h5 className="font-heading font-bold text-dark text-sm sm:text-base mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary-500" />
                <span>Étapes du Protocole d'Intervention</span>
              </h5>
              <div className="space-y-2">
                {selectedSubService.protocolSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-neutral-soft border border-neutral-border/60 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-primary-500 text-white font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="font-medium text-neutral-800">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-primary-50/70 border border-primary-200">
                <div className="text-xs font-bold text-primary-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Beaker className="w-3.5 h-3.5 text-primary-600" />
                  <span>Molécules & Équipements</span>
                </div>
                <ul className="space-y-1 text-xs text-primary-950">
                  {selectedSubService.moleculesAndEquipment.map((item, i) => (
                    <li key={i} className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-qhse-50/70 border border-qhse-200">
                <div className="text-xs font-bold text-qhse-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-qhse-600" />
                  <span>Sécurité, FDS & Normes</span>
                </div>
                <p className="text-xs text-qhse-950 mb-1.5">
                  {selectedSubService.safetyAndFds}
                </p>
                <div className="text-[10px] font-bold text-qhse-700 bg-white/80 p-1.5 rounded border border-qhse-200">
                  {selectedSubService.certification}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-border flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-neutral-500">
                Besoin d'un audit sur site pour cette prestation ?
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-3.5 py-2 rounded-lg border border-neutral-border text-xs font-semibold hover:bg-neutral-soft"
                >
                  Fermer
                </button>
                <Link
                  to="/contact"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold transition-colors shadow-xs"
                >
                  Demander une Intervention
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      )}

    </section>
  );
};
