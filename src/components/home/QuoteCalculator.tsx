import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  MessageSquare, 
  FileCheck2, 
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';
import { QuoteCalculationState } from '../../types';

export const QuoteCalculator: React.FC = () => {
  const [quoteState, setQuoteState] = useState<QuoteCalculationState>({
    services: ['deratisation', 'desinsectisation'],
    surfaceArea: '500-2000',
    frequency: 'quarterly',
    environment: 'industrial-atex',
    needCertificate: true,
  });

  const [companyName, setCompanyName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const serviceOptions = [
    { id: 'deratisation', name: 'Dératisation de précision', desc: 'Postes d’appâtage sécurisés' },
    { id: 'desinsectisation', name: 'Désinsectisation ciblée', desc: 'Gels & nébulisation ULV' },
    { id: 'desinfection', name: 'Désinfection virucide', desc: 'Décontamination des locaux' },
    { id: 'deserpentisation', name: 'Déserpentisation', desc: 'Barrière répulsive périmètre' },
    { id: 'baches-eau', name: 'Bâches à eau potable', desc: 'Nettoyage & analyses chlore' },
    { id: 'espaces-verts', name: 'Désherbage ATEX', desc: 'Sécurité incendie & tonte' },
  ];

  const surfaceRanges = [
    { id: 'under-500', label: '< 500 m²', desc: 'Bureaux, commerces' },
    { id: '500-2000', label: '500 - 2 000 m²', desc: 'Entrepôts, cantines' },
    { id: '2000-10000', label: '2 000 - 10 000 m²', desc: 'Bases logistiques' },
    { id: 'over-10000', label: '> 10 000 m² / Offshore', desc: 'Terminaux, barges' },
  ];

  const frequencyOptions = [
    { id: 'one-shot', label: 'Intervention Ponctuelle', desc: 'Curatif' },
    { id: 'monthly', label: 'Mensuelle (HACCP)', desc: 'Recommandée' },
    { id: 'quarterly', label: 'Trimestrielle (B2B)', desc: 'Standard' },
    { id: 'annual', label: 'Contrat Cadre Annuel', desc: 'Prioritaire' },
  ];

  const environmentOptions = [
    { id: 'standard', label: 'Tertiaire & Bureaux', mult: 'Standard' },
    { id: 'food-haccp', label: 'Restauration / HACCP', mult: 'HACCP' },
    { id: 'industrial-atex', label: 'Industriel Onshore & ATEX', mult: 'ATEX' },
    { id: 'offshore-barge', label: 'Offshore, Barges & Maritime', mult: 'BOSIET' },
  ];

  const toggleService = (id: string) => {
    setQuoteState((prev) => {
      const exists = prev.services.includes(id);
      if (exists) {
        if (prev.services.length === 1) return prev;
        return { ...prev, services: prev.services.filter((s) => s !== id) };
      } else {
        return { ...prev, services: [...prev.services, id] };
      }
    });
  };

  const getWhatsAppMessage = () => {
    const selectedServiceNames = serviceOptions
      .filter((s) => quoteState.services.includes(s.id))
      .map((s) => s.name)
      .join(', ');

    const selectedSurface = surfaceRanges.find((r) => r.id === quoteState.surfaceArea)?.label;
    const selectedFreq = frequencyOptions.find((f) => f.id === quoteState.frequency)?.label;
    const selectedEnv = environmentOptions.find((e) => e.id === quoteState.environment)?.label;

    return `*DEMANDE DE COTATION PERSONNALISÉE - EXCELLENT SERVICES*
----------------------------------------
🏢 *Société :* ${companyName || 'Non précisé'}
📞 *Contact :* ${contactPhone || 'Non précisé'}
🛠️ *Services demandés :* ${selectedServiceNames}
📐 *Superficie estimée :* ${selectedSurface}
🔄 *Périodicité :* ${selectedFreq}
🏭 *Environnement :* ${selectedEnv}
----------------------------------------
Merci de nous transmettre une proposition commerciale avec les FDS correspondantes.`;
  };

  return (
    <section className="py-16 sm:py-20 bg-neutral-soft border-t border-neutral-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-primary-500" />
            <span>Calculateur B2B</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark tracking-tight">
            Configurez votre Demande de Devis
          </h2>
          <p className="text-xs sm:text-sm text-neutral-muted mt-2">
            Sélectionnez vos besoins pour générer immédiatement votre cahier des charges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Configurator Column */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-5 sm:p-7 border border-neutral-border shadow-xs space-y-6">
            
            {/* 1. Services */}
            <div>
              <label className="font-heading font-bold text-sm sm:text-base text-dark block mb-2.5">
                1. Prestations à inclure :
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {serviceOptions.map((srv) => {
                  const isChecked = quoteState.services.includes(srv.id);
                  return (
                    <div
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`p-3 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-2.5 ${
                        isChecked
                          ? 'border-primary-500 bg-primary-50/40 shadow-2xs'
                          : 'border-neutral-border hover:border-neutral-300'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isChecked ? 'bg-primary-500 border-primary-500 text-white' : 'border-neutral-300'
                      }`}>
                        {isChecked && <Check className="w-2.5 h-2.5" />}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-dark">{srv.name}</div>
                        <div className="text-[10px] text-neutral-500">{srv.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Surface */}
            <div>
              <label className="font-heading font-bold text-sm sm:text-base text-dark block mb-2.5">
                2. Superficie de l'emprise :
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {surfaceRanges.map((surf) => {
                  const isSelected = quoteState.surfaceArea === surf.id;
                  return (
                    <div
                      key={surf.id}
                      onClick={() => setQuoteState({ ...quoteState, surfaceArea: surf.id })}
                      className={`p-2.5 rounded-xl border-2 cursor-pointer text-center transition-all ${
                        isSelected
                          ? 'border-primary-500 bg-primary-500 text-white shadow-2xs'
                          : 'border-neutral-border hover:border-neutral-300 bg-neutral-soft/50'
                      }`}
                    >
                      <div className="font-bold text-xs">{surf.label}</div>
                      <div className={`text-[9px] mt-0.5 ${isSelected ? 'text-primary-100' : 'text-neutral-500'}`}>
                        {surf.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Frequency & Environment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-heading font-bold text-xs sm:text-sm text-dark block mb-1.5">
                  3. Périodicité :
                </label>
                <select
                  value={quoteState.frequency}
                  onChange={(e) => setQuoteState({ ...quoteState, frequency: e.target.value as any })}
                  className="w-full px-3 py-2.5 rounded-xl border border-neutral-border bg-neutral-soft/50 focus:bg-white text-xs sm:text-sm font-medium focus:outline-none focus:border-primary-500"
                >
                  {frequencyOptions.map((freq) => (
                    <option key={freq.id} value={freq.id}>
                      {freq.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-heading font-bold text-xs sm:text-sm text-dark block mb-1.5">
                  4. Environnement :
                </label>
                <select
                  value={quoteState.environment}
                  onChange={(e) => setQuoteState({ ...quoteState, environment: e.target.value as any })}
                  className="w-full px-3 py-2.5 rounded-xl border border-neutral-border bg-neutral-soft/50 focus:bg-white text-xs sm:text-sm font-medium focus:outline-none focus:border-primary-500"
                >
                  {environmentOptions.map((env) => (
                    <option key={env.id} value={env.id}>
                      {env.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-dark to-dark-card rounded-3xl p-5 sm:p-6 text-white border border-primary-500 shadow-lg space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-dark-border">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-primary-400" />
                <span className="font-heading font-bold text-xs sm:text-sm text-white">Récapitulatif</span>
              </div>
              <span className="text-[10px] font-mono font-bold bg-primary-500/30 text-primary-300 px-2 py-0.5 rounded border border-primary-400/30">
                PROFORMA
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-neutral-300">
                <span>Prestations :</span>
                <span className="font-bold text-white text-right">{quoteState.services.length} sélectionné(s)</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Superficie :</span>
                <span className="font-bold text-white">{surfaceRanges.find((r) => r.id === quoteState.surfaceArea)?.label}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Fréquence :</span>
                <span className="font-bold text-primary-300">{frequencyOptions.find((f) => f.id === quoteState.frequency)?.label}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Contrainte :</span>
                <span className="font-bold text-amber-300">{environmentOptions.find((e) => e.id === quoteState.environment)?.mult}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-dark-border space-y-2.5">
              <div>
                <label className="text-[10px] font-bold text-neutral-300 block mb-1">
                  Nom de votre entreprise :
                </label>
                <input
                  type="text"
                  placeholder="Ex: Société Pétrolière / Logistique"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-neutral-400 text-xs focus:outline-none focus:border-primary-400"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-neutral-300 block mb-1">
                  Téléphone / WhatsApp :
                </label>
                <input
                  type="tel"
                  placeholder="+242 06 XXX XX XX"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-neutral-400 text-xs font-mono focus:outline-none focus:border-primary-400"
                />
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-qhse-500 hover:bg-qhse-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm text-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Transmettre par WhatsApp</span>
              </a>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 p-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm text-center"
              >
                <span>Envoyer par Email</span>
              </a>
            </div>

            <div className="text-[10px] text-neutral-400 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-qhse-400" />
              <span>Devis sous 24h avec FDS et certificats</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
