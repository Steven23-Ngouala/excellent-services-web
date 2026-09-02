import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceType: 'Lutte Antiparasitaire (Traitement 3D)',
    siteLocation: 'Pointe-Noire',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    return `*DEMANDE DE DEVIS / AUDIT - EXCELLENT SERVICES*
----------------------------------------
🏢 *Société :* ${formData.company || 'Non renseigné'}
👤 *Demandeur :* ${formData.name}
📞 *Téléphone :* ${formData.phone}
✉️ *Email :* ${formData.email}
🛠️ *Service souhaité :* ${formData.serviceType}
📍 *Lieu :* ${formData.siteLocation}
📝 *Détails :* ${formData.message || 'Demande de visite technique sur site.'}
----------------------------------------
Merci de nous contacter pour établir la proposition commerciale.`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-primary-500" />
            <span>Contact & Cotation</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark tracking-tight">
            Demandez un Audit ou une Cotation
          </h2>
          <p className="text-xs sm:text-sm text-neutral-muted mt-2">
            Notre direction technique et nos ingénieurs QHSE sont à votre disposition pour toute étude sur site.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formulaire */}
          <div className="lg:col-span-7 bg-neutral-soft/60 rounded-3xl p-5 sm:p-7 border border-neutral-border shadow-xs">
            
            {formSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-qhse-100 text-qhse-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-dark">
                  Demande Transmise avec Succès !
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
                  Notre équipe technique prend en charge votre demande. Réponse sous 24h ouvrées.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-qhse-500 hover:bg-qhse-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Envoyer aussi par WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        phone: '',
                        email: '',
                        serviceType: 'Lutte Antiparasitaire (Traitement 3D)',
                        siteLocation: 'Pointe-Noire',
                        message: ''
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-border text-xs font-bold text-neutral-700 hover:bg-white"
                  >
                    Nouveau Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Nom et Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Patrice Ngoma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-neutral-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Entreprise <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Total E&P / Newrest / Société X"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-neutral-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Téléphone Direct <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+242 06 XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-neutral-border bg-white text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Email Professionnel <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@societe.cg"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-neutral-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Prestation Requise
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-neutral-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="Lutte Antiparasitaire (Traitement 3D)">Lutte Antiparasitaire 3D</option>
                      <option value="Déserpentisation & Barrière Répulsive">Déserpentisation</option>
                      <option value="Nettoyage de Bâches à Eau">Bâches à Eau & Assainissement</option>
                      <option value="Curage & Vidange de Fosses">Curage de Fosses Septiques</option>
                      <option value="Fumigation Maritime & Conteneurs">Fumigation Maritime (NIMP 15)</option>
                      <option value="Désherbage Chimique ATEX">Désherbage ATEX & Espaces Verts</option>
                      <option value="Fourniture de Produits & Équipements">Fourniture de Produits QHSE</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Localisation du Site
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Zone Portuaire / Djéno / Mpita"
                      value={formData.siteLocation}
                      onChange={(e) => setFormData({ ...formData, siteLocation: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-neutral-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Détails du besoin & surfaces estimées
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Précisez la problématique rencontrée, la superficie, ou les contraintes d'accès..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-border bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[11px] text-neutral-500 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-qhse-600 flex-shrink-0" />
                    <span>Devis sous 24h avec FDS</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Envoyer la Demande</span>
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Informations Légales & Coordonnées */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Legal Box */}
            <div className="bg-gradient-to-br from-dark to-dark-card text-white rounded-3xl p-5 sm:p-6 border border-primary-500/40 shadow-lg space-y-4">
              <div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-primary-300 px-2 py-0.5 rounded bg-primary-500/20 border border-primary-400/30">
                  Identification Légale
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white mt-1.5">
                  {COMPANY_INFO.legalName}
                </h3>
              </div>

              <div className="space-y-2 text-xs border-y border-dark-border py-3">
                <div className="flex justify-between items-center text-neutral-300">
                  <span className="text-neutral-400">RCCM :</span>
                  <span className="font-mono text-white font-bold bg-white/10 px-1.5 py-0.2 rounded">{COMPANY_INFO.rccm}</span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span className="text-neutral-400">NIU :</span>
                  <span className="font-mono text-white font-bold bg-white/10 px-1.5 py-0.2 rounded">{COMPANY_INFO.niu}</span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span className="text-neutral-400">Siège :</span>
                  <span className="text-white font-semibold">{COMPANY_INFO.city}, Congo</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-neutral-200">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-[11px]">Adresse :</span>
                    <span>{COMPANY_INFO.address}, {COMPANY_INFO.city}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-[11px]">Téléphones :</span>
                    <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-primary-300 font-mono block">
                      {COMPANY_INFO.phones[0].number} (Astreinte 24/7)
                    </a>
                    <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="hover:text-primary-300 font-mono block text-neutral-400">
                      {COMPANY_INFO.phones[1].number} (Bureau)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-[11px]">Email :</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-primary-300 font-mono text-[11px]">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-neutral-400 pt-1">
                  <Clock className="w-4 h-4 text-qhse-400 flex-shrink-0 mt-0.5" />
                  <span>Astreinte 24h/24 & 7j/7</span>
                </div>
              </div>

              {/* Direct WhatsApp */}
              <div className="pt-1">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("Bonjour EXCELLENT SERVICES, je souhaite échanger directement avec un responsable pour nos besoins.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-qhse-500 hover:bg-qhse-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp d'Astreinte Direct</span>
                </a>
              </div>
            </div>

            {/* Pointe-Noire Map Visual */}
            <div className="bg-white rounded-3xl p-4 border border-neutral-border shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary-500" />
                  <span className="font-heading font-bold text-[11px] text-dark uppercase tracking-wider">
                    Pointe-Noire & Kouilou
                  </span>
                </div>
                <span className="text-[9px] font-bold text-qhse-700 bg-qhse-100 px-1.5 py-0.2 rounded">
                  Base Tchimbamba
                </span>
              </div>
              
              <div className="w-full h-36 rounded-2xl bg-neutral-soft border border-neutral-border relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                <div className="relative z-10 text-center space-y-1 p-3">
                  <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary-500 text-white shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-xs text-dark">
                      EXCELLENT SERVICES S.ARL
                    </div>
                    <div className="text-[10px] text-neutral-500">
                      5 Rue des Martyrs, Tchimbamba Aéroport
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
