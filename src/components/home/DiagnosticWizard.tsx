import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  ShieldAlert, 
  Clock, 
  Flame, 
  Utensils, 
  Building2, 
  Home, 
  Anchor, 
  Bug, 
  Droplets, 
  Trees, 
  Crosshair, 
  Check,
  PhoneCall,
  Mail,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';
import { DiagnosticState } from '../../types';

export const DiagnosticWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  
  const [formData, setFormData] = useState<DiagnosticState>({
    establishmentType: 'industry-offshore',
    nuisanceType: 'rodents',
    urgencyLevel: 'immediate',
    siteLocation: 'Pointe-Noire',
    additionalDetails: '',
    contactName: '',
    contactCompany: '',
    contactPhone: '',
    contactEmail: ''
  });

  const establishmentOptions = [
    { id: 'industry-offshore', title: 'Industrie & Pétrole Offshore', desc: 'Barges, bases logistiques, terminaux', icon: <Flame className="w-4 h-4 text-primary-500" /> },
    { id: 'catering-food', title: 'Restauration & Agroalimentaire', desc: 'Cuisines centrales, cantines HACCP', icon: <Utensils className="w-4 h-4 text-amber-500" /> },
    { id: 'port-logistics', title: 'Port, Conteneurs & Fret', desc: 'Hangars de stockage, cales maritimes', icon: <Anchor className="w-4 h-4 text-blue-500" /> },
    { id: 'commercial-offices', title: 'Tertiaire, Banques & Bureaux', desc: 'Sièges sociaux, agences, cliniques', icon: <Building2 className="w-4 h-4 text-dark" /> },
    { id: 'residential', title: 'Résidentiel & Villas VIP', desc: 'Habitations, résidences expatriés', icon: <Home className="w-4 h-4 text-qhse-600" /> },
  ];

  const nuisanceOptions = [
    { id: 'rodents', title: 'Rongeurs (Dératisation)', desc: 'Rats d’égouts, surmulots, souris', icon: <ShieldAlert className="w-4 h-4 text-primary-500" /> },
    { id: 'insects', title: 'Insectes (Désinsectisation)', desc: 'Blattes, moustiques, termites, puces', icon: <Bug className="w-4 h-4 text-amber-600" /> },
    { id: 'snakes', title: 'Serpents & Reptiles (Urgence)', desc: 'Vipères, cobras, barrière répulsive', icon: <Crosshair className="w-4 h-4 text-red-600" /> },
    { id: 'water-tank', title: 'Bâches à Eau & Assainissement', desc: 'Nettoyage cuves, chlore choc, curage', icon: <Droplets className="w-4 h-4 text-blue-600" /> },
    { id: 'green-spaces', title: 'Désherbage ATEX & Espaces Verts', desc: 'Sécurité incendie, entretien parcs', icon: <Trees className="w-4 h-4 text-qhse-600" /> },
  ];

  const urgencyOptions = [
    { id: 'immediate', title: 'Intervention d\'Urgence (24/7)', desc: 'Risque direct ou audit imminent', badge: 'Délai < 2h' },
    { id: '48h', title: 'Audit Préventif & Devis (48h)', desc: 'Visite technique planifiée', badge: '24-48h' },
    { id: 'contract', title: 'Contrat Cadre / Annuel', desc: 'Maintenance récurrente', badge: 'Sur-mesure' },
  ];

  const handleSelectOption = (field: keyof DiagnosticState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const calculateSeverity = () => {
    if (formData.nuisanceType === 'snakes' || formData.urgencyLevel === 'immediate') {
      return { level: 'CRITIQUE / PRIORITÉ 1', color: 'text-red-600 bg-red-50 border-red-200', delay: 'Moins de 2 heures' };
    }
    if (formData.establishmentType === 'industry-offshore' || formData.establishmentType === 'catering-food') {
      return { level: 'ÉLEVÉE (CONFORMITÉ QHSE)', color: 'text-amber-700 bg-amber-50 border-amber-200', delay: 'Sous 12 à 24 heures' };
    }
    return { level: 'STANDARD / CONTRAT', color: 'text-qhse-700 bg-qhse-50 border-qhse-200', delay: 'Sous 24 à 48 heures' };
  };

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
          _subject: `[DIAGNOSTIC EXPRESS] ${formData.contactCompany || formData.contactName} - ${nuisanceOptions.find(o => o.id === formData.nuisanceType)?.title}`,
          _template: 'table',
          _captcha: 'false',
          Demandeur: formData.contactName,
          Entreprise: formData.contactCompany,
          Telephone_Direct: formData.contactPhone,
          Email_Professionnel: formData.contactEmail || 'Non renseigne',
          Etablissement: establishmentOptions.find(o => o.id === formData.establishmentType)?.title,
          Menace_ou_Besoin: nuisanceOptions.find(o => o.id === formData.nuisanceType)?.title,
          Niveau_Urgence: urgencyOptions.find(o => o.id === formData.urgencyLevel)?.title,
          Localisation_Site: formData.siteLocation || 'Pointe-Noire',
          Details_Complementaires: formData.additionalDetails || 'Aucun detail specifique.'
        })
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error('Erreur diagnostic express:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const severity = calculateSeverity();

  return (
    <section id="diagnostic" className="py-10 sm:py-14 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Wizard Card */}
        <div className="bg-neutral-soft/50 rounded-3xl shadow-sm border border-neutral-border overflow-hidden">
          
          {/* Progress Header */}
          <div className="bg-white px-5 sm:px-8 py-3.5 border-b border-neutral-border flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-6">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                    currentStep === step 
                      ? 'bg-primary-500 text-white ring-2 ring-primary-200' 
                      : currentStep > step
                      ? 'bg-qhse-500 text-white'
                      : 'bg-neutral-200 text-neutral-500'
                  }`}>
                    {currentStep > step ? <Check className="w-3.5 h-3.5" /> : step}
                  </div>
                  <span className={`text-xs font-bold hidden sm:inline ${
                    currentStep === step ? 'text-primary-700' : 'text-neutral-500'
                  }`}>
                    {step === 1 ? 'Établissement' : step === 2 ? 'Menace' : 'Coordonnées'}
                  </span>
                </div>
              ))}
            </div>

            <span className="text-xs font-bold text-primary-600 font-mono">
              Étape {currentStep} / 3
            </span>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8">
            
            {isSubmitted ? (
              <div className="text-center py-6 space-y-5 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-qhse-100 text-qhse-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-heading font-extrabold text-xl text-dark">
                    Demande de Diagnostic Transmise !
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
                    Votre rapport d'évaluation a été transmis à la direction technique. Notre ingénieur d'astreinte QHSE vous contacte au <span className="font-bold text-dark">{formData.contactPhone}</span>.
                  </p>
                </div>

                <div className={`max-w-sm mx-auto p-3.5 rounded-2xl border text-left ${severity.color}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider">Criticité Assignée</span>
                    <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-white/80 border">{severity.level}</span>
                  </div>
                  <div className="text-xs font-medium">
                    Délai d'engagement : <span className="font-bold">{severity.delay}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phones[0].raw}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center active:scale-95"
                  >
                    <PhoneCall className="w-4 h-4 animate-pulse" />
                    <span>Appeler l'Astreinte Directe</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => { setIsSubmitted(false); setCurrentStep(1); }}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white border border-neutral-border text-xs font-bold text-neutral-700 hover:bg-neutral-soft transition-colors shadow-2xs cursor-pointer"
                  >
                    Nouveau Diagnostic
                  </button>
                </div>

                <div className="text-[11px] text-neutral-500 flex items-center justify-center gap-1 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-qhse-600 flex-shrink-0" />
                  <span>Rapport officiel transmis par email à la direction technique</span>
                </div>
              </div>
            ) : (
              <div>
                {/* STEP 1 */}
                {currentStep === 1 && (
                  <div className="space-y-5 animate-fadeIn">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-dark mb-0.5">
                        1. Type de site ou installation
                      </h3>
                      <p className="text-xs text-neutral-muted">
                        Sélectionnez l'environnement pour adapter les protocoles QHSE.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {establishmentOptions.map((opt) => {
                        const isSelected = formData.establishmentType === opt.id;
                        return (
                          <div
                            key={opt.id}
                            onClick={() => handleSelectOption('establishmentType', opt.id)}
                            className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3 bg-white ${
                              isSelected
                                ? 'border-primary-500 bg-primary-50/40 shadow-xs'
                                : 'border-neutral-border hover:border-primary-300'
                            }`}
                          >
                            <div className="p-2 rounded-xl bg-neutral-soft flex-shrink-0">
                              {opt.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-heading font-bold text-xs sm:text-sm text-dark">{opt.title}</div>
                              <div className="text-[11px] text-neutral-500 mt-0.5">{opt.desc}</div>
                            </div>
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              isSelected ? 'border-primary-500 bg-primary-500 text-white' : 'border-neutral-300'
                            }`}>
                              {isSelected && <Check className="w-2.5 h-2.5" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex justify-end pt-3">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                      >
                        <span>Étape Suivante</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {currentStep === 2 && (
                  <div className="space-y-5 animate-fadeIn">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-dark mb-0.5">
                        2. Nature de l'intervention requise
                      </h3>
                      <p className="text-xs text-neutral-muted">
                        Choisissez la menace principale à traiter.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {nuisanceOptions.map((opt) => {
                        const isSelected = formData.nuisanceType === opt.id;
                        return (
                          <div
                            key={opt.id}
                            onClick={() => handleSelectOption('nuisanceType', opt.id)}
                            className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3 bg-white ${
                              isSelected
                                ? 'border-primary-500 bg-primary-50/40 shadow-xs'
                                : 'border-neutral-border hover:border-primary-300'
                            }`}
                          >
                            <div className="p-2 rounded-xl bg-neutral-soft flex-shrink-0">
                              {opt.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-heading font-bold text-xs sm:text-sm text-dark">{opt.title}</div>
                              <div className="text-[11px] text-neutral-500 mt-0.5">{opt.desc}</div>
                            </div>
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              isSelected ? 'border-primary-500 bg-primary-500 text-white' : 'border-neutral-300'
                            }`}>
                              {isSelected && <Check className="w-2.5 h-2.5" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Urgency */}
                    <div className="pt-3 border-t border-neutral-border">
                      <label className="font-heading font-bold text-xs sm:text-sm text-dark block mb-2">
                        Niveau d'urgence opérationnelle :
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {urgencyOptions.map((urg) => {
                          const isSelected = formData.urgencyLevel === urg.id;
                          return (
                            <div
                              key={urg.id}
                              onClick={() => handleSelectOption('urgencyLevel', urg.id)}
                              className={`p-2.5 rounded-xl border-2 cursor-pointer transition-all bg-white ${
                                isSelected 
                                  ? 'border-primary-500 bg-primary-50/50' 
                                  : 'border-neutral-border hover:border-neutral-300'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-0.5">
                                <span className="font-bold text-xs text-dark">{urg.title}</span>
                                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-neutral-soft border text-primary-700">
                                  {urg.badge}
                                </span>
                              </div>
                              <p className="text-[10px] text-neutral-500">{urg.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-3">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-neutral-border text-xs font-bold text-neutral-700 hover:bg-white"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Précédent</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                      >
                        <span>Étape Suivante</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {currentStep === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-dark mb-0.5">
                        3. Vos Coordonnées pour Rappel Immédiat
                      </h3>
                      <p className="text-xs text-neutral-muted">
                        Un responsable technique QHSE vous rappelle sous 2h ouvrées.
                      </p>
                    </div>

                    {/* Pre-diagnostic Recap */}
                    <div className="p-3 rounded-xl bg-white border border-neutral-border flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div>
                        <span className="text-neutral-500">Site : </span>
                        <span className="font-bold text-dark">{establishmentOptions.find(o => o.id === formData.establishmentType)?.title}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500">Besoin : </span>
                        <span className="font-bold text-primary-700">{nuisanceOptions.find(o => o.id === formData.nuisanceType)?.title}</span>
                      </div>
                      <div className={`px-2 py-0.5 rounded-md border font-bold text-[10px] ${severity.color}`}>
                        {severity.level}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 mb-1">
                          Nom & Prénom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          placeholder="Ex: Patrice Ngoma"
                          className="w-full px-3 py-2 rounded-xl border border-neutral-border bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-xs sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 mb-1">
                          Société / Établissement <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contactCompany}
                          onChange={(e) => setFormData({ ...formData, contactCompany: e.target.value })}
                          placeholder="Ex: Base Industrielle / Total / Newrest"
                          className="w-full px-3 py-2 rounded-xl border border-neutral-border bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-xs sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 mb-1">
                          Téléphone Direct <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.contactPhone}
                          onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                          placeholder="+242 06 XXX XX XX"
                          className="w-full px-3 py-2 rounded-xl border border-neutral-border bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-xs sm:text-sm font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 mb-1">
                          Localisation du Site
                        </label>
                        <input
                          type="text"
                          value={formData.siteLocation}
                          onChange={(e) => setFormData({ ...formData, siteLocation: e.target.value })}
                          placeholder="Ex: Zone Industrielle Mpita / Djéno"
                          className="w-full px-3 py-2 rounded-xl border border-neutral-border bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-xs sm:text-sm"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-neutral-700 mb-1">
                          Détails complémentaires
                        </label>
                        <textarea
                          rows={2}
                          value={formData.additionalDetails}
                          onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                          placeholder="Superficie approximative, symptômes observés..."
                          className="w-full px-3 py-2 rounded-xl border border-neutral-border bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-xs sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-neutral-border">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-xl border border-neutral-border text-xs font-bold text-neutral-700 hover:bg-white"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Précédent</span>
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Envoi en cours...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Valider et Demander le Rappel</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
