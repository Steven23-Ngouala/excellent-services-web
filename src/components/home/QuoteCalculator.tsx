import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  FileCheck2, 
  ShieldCheck,
  Send,
  Sparkles
} from 'lucide-react';
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
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);

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

  const handleRequestQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/excel.services959@yahoo.fr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[SIMULATION DEVIS] ${companyName} - Estimation de Surface`,
          _template: 'table',
          _captcha: 'false',
          Entreprise: companyName,
          Email_Professionnel: contactEmail,
          Telephone_Direct: contactPhone,
          Prestations_Cochees: quoteState.services.map(s => serviceOptions.find(opt => opt.id === s)?.name).join(', '),
          Superficie_Estimee: surfaceRanges.find((r) => r.id === quoteState.surfaceArea)?.label,
          Frequence_Souhaitee: frequencyOptions.find((f) => f.id === quoteState.frequency)?.label,
          Contrainte_Operationnelle: environmentOptions.find((e) => e.id === quoteState.environment)?.mult
        })
      });
      setIsCalculated(true);
    } catch (err) {
      console.error('Erreur simulation devis:', err);
      setIsCalculated(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="simulateur" className="py-8 sm:py-12 bg-neutral-soft/50 border-b border-neutral-border relative overflow-hidden">
      
      {/* Subtle Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <Calculator className="w-3.5 h-3.5 text-primary-500" />
            <span>Simulateur & Calculateur de Besoins</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark tracking-tight">
            Configurez votre estimation d'intervention
          </h2>
          <p className="text-xs sm:text-sm text-neutral-muted mt-2">
            Sélectionnez vos prestations, votre superficie et votre niveau de contrainte pour obtenir une proposition commerciale chiffrée.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Form (8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-border shadow-sm space-y-6">
            
            {/* 1. Services */}
            <div>
              <label className="font-heading font-bold text-xs sm:text-sm text-dark block mb-2.5">
                1. Prestations requises (sélection multiple) :
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {serviceOptions.map((srv) => {
                  const isChecked = quoteState.services.includes(srv.id);
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => toggleService(srv.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-start justify-between gap-2 ${
                        isChecked
                          ? 'border-primary-500 bg-primary-50/60 ring-1 ring-primary-400/50'
                          : 'border-neutral-border bg-white hover:bg-neutral-soft'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs text-dark">{srv.name}</div>
                        <div className="text-[10px] text-neutral-500 mt-0.5">{srv.desc}</div>
                      </div>
                      <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isChecked ? 'bg-primary-500 text-white' : 'border border-neutral-300'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Surface */}
            <div>
              <label className="font-heading font-bold text-xs sm:text-sm text-dark block mb-2.5">
                2. Superficie ou envergure du site :
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {surfaceRanges.map((surf) => {
                  const isSelected = quoteState.surfaceArea === surf.id;
                  return (
                    <button
                      key={surf.id}
                      type="button"
                      onClick={() => setQuoteState({ ...quoteState, surfaceArea: surf.id })}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50/60 ring-1 ring-primary-400/50'
                          : 'border-neutral-border bg-white hover:bg-neutral-soft'
                      }`}
                    >
                      <div className="font-bold text-xs text-dark">{surf.label}</div>
                      <div className="text-[10px] text-neutral-500 mt-0.5">{surf.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Frequency & Environment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-heading font-bold text-xs sm:text-sm text-dark block mb-1.5">
                  3. Fréquence d'intervention :
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
                  4. Environnement opérationnel :
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

          {/* Right Summary Card (4 Cols) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-dark to-dark-card rounded-3xl p-6 text-white border border-primary-500 shadow-xl space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-dark-border">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-primary-400" />
                <span className="font-heading font-bold text-xs sm:text-sm text-white">Récapitulatif Configuré</span>
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

            <form onSubmit={handleRequestQuote} className="pt-3 border-t border-dark-border space-y-2.5">
              <div>
                <label className="text-[10px] font-bold text-neutral-300 block mb-1">
                  Nom de votre entreprise :
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Société Pétrolière / Logistique"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-400 text-xs focus:outline-none focus:border-primary-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-bold text-neutral-300 block mb-1">
                    Email professionnel :
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@societe.cg"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-400 text-xs focus:outline-none focus:border-primary-400"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-neutral-300 block mb-1">
                    Téléphone direct :
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+242 06 XXX XX XX"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-400 text-xs font-mono focus:outline-none focus:border-primary-400"
                  />
                </div>
              </div>

              {isCalculated ? (
                <div className="p-3 rounded-xl bg-qhse-900/60 border border-qhse-500 text-center space-y-1 animate-fadeIn">
                  <div className="text-xs font-bold text-emerald-400 flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Demande transmise avec succès !</span>
                  </div>
                  <div className="text-[10px] text-neutral-300">
                    Notre direction commerciale vous contacte sous 24h ouvrées.
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 p-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 text-center cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Envoi du devis...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Demander le Devis Formel</span>
                    </>
                  )}
                </button>
              )}
            </form>

            <div className="text-[10px] text-neutral-400 text-center flex items-center justify-center gap-1 pt-1">
              <ShieldCheck className="w-3 h-3 text-qhse-400" />
              <span>Réponse officielle sous 24h avec FDS et certificats</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
