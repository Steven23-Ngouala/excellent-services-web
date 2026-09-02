import React, { useState } from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Droplets, 
  Trees, 
  PackageCheck, 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Zap, 
  Info,
  Beaker,
  ShieldCheck
} from 'lucide-react';
import { EXPERTISES_DATA } from '../../data/expertisesData';
import { SubService } from '../../types';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';

interface ExpertiseGridProps {
  selectedPoleId?: string;
}

export const ExpertiseGrid: React.FC<ExpertiseGridProps> = () => {
  const [activePoleId, setActivePoleId] = useState<string>(EXPERTISES_DATA[0].id);
  const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activePole = EXPERTISES_DATA.find((p) => p.id === activePoleId) || EXPERTISES_DATA[0];

  const getPoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'AlertTriangle': return <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Droplets': return <Droplets className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'Trees': return <Trees className="w-4 h-4 sm:w-5 sm:h-5" />;
      case 'PackageCheck': return <PackageCheck className="w-4 h-4 sm:w-5 sm:h-5" />;
      default: return <Zap className="w-4 h-4 sm:w-5 sm:h-5" />;
    }
  };

  const handleOpenSubServiceDetails = (subService: SubService) => {
    setSelectedSubService(subService);
    setIsModalOpen(true);
  };

  return (
    <section id="expertises" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Beaker className="w-3.5 h-3.5 text-primary-500" />
            <span>Pôles d'Excellence Technique</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark tracking-tight">
            Nos Domaines d’Intervention Spécialisés
          </h2>
          <p className="text-xs sm:text-sm text-neutral-muted mt-2">
            Des protocoles scientifiques stricts, des molécules homologuées à haute rémanence et des équipements industriels de pointe.
          </p>
        </div>

        {/* Tab Navigation for 5 Poles */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {EXPERTISES_DATA.map((pole) => {
            const isActive = pole.id === activePoleId;
            return (
              <button
                key={pole.id}
                onClick={() => setActivePoleId(pole.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-500 text-white shadow-industrial-copper'
                    : 'bg-neutral-soft text-neutral-700 hover:bg-neutral-border/80 border border-neutral-border'
                }`}
              >
                <span>{getPoleIcon(pole.iconName)}</span>
                <span className="whitespace-nowrap">{pole.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pole Presentation Banner */}
        <div className="bg-gradient-to-r from-dark to-dark-card rounded-3xl p-6 sm:p-7 text-white border border-primary-500/40 shadow-lg mb-8 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-primary-500/40 text-primary-200 border border-primary-400/30">
                  {activePole.code}
                </span>
                <Badge variant="qhse" size="sm">
                  {activePole.heroBadge}
                </Badge>
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                {activePole.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {activePole.shortDescription}
              </p>
            </div>

            <div className="flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-4 md:max-w-xs">
              <div className="text-xs font-bold text-primary-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-qhse-400" />
                <span>Garanties & Avantages</span>
              </div>
              <ul className="space-y-1 text-xs text-neutral-300">
                {activePole.keyBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-qhse-400 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sub-services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {activePole.subServices.map((sub) => (
            <div
              key={sub.id}
              className="bg-white rounded-2xl border border-neutral-border hover:border-primary-500 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between p-5 sm:p-6 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-md">
                    Protocole Spécialisé
                  </span>
                  <button
                    onClick={() => handleOpenSubServiceDetails(sub)}
                    className="text-neutral-400 hover:text-primary-600 p-1 transition-colors"
                    title="Voir la fiche technique détaillée"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                <h4 className="font-heading font-bold text-base text-dark group-hover:text-primary-600 transition-colors mb-1.5">
                  {sub.name}
                </h4>

                <p className="text-xs font-medium text-primary-700 mb-2 italic">
                  {sub.tagline}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed mb-3.5">
                  {sub.description}
                </p>

                {/* Target Scope */}
                <div className="mb-3.5 pt-2.5 border-t border-neutral-border/60">
                  <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                    Cibles & Périmètre :
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {sub.targetPestsOrScope.map((target, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-neutral-soft text-neutral-700 text-[10px] font-medium border border-neutral-border/60"
                      >
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-neutral-border flex items-center justify-between">
                <span className="text-[11px] text-qhse-700 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-qhse-600" />
                  <span>FDS Certifiée</span>
                </span>
                <button
                  onClick={() => handleOpenSubServiceDetails(sub)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors group/btn"
                >
                  <span>Détails & Protocole</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Banner */}
        <div className="mt-10 text-center">
          <a
            href="#diagnostic"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-dark hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            <span>Simuler un Protocole d'Intervention pour votre Site</span>
            <ArrowRight className="w-4 h-4 text-primary-400" />
          </a>
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
                <a
                  href="#contact"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold transition-colors shadow-xs"
                >
                  Demander une Intervention
                </a>
              </div>
            </div>
          </div>
        </Modal>
      )}

    </section>
  );
};
