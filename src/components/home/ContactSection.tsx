import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  PhoneCall, 
  Building2,
  ExternalLink
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

  return (
    <section id="contact" className="py-8 sm:py-12 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <Mail className="w-3.5 h-3.5 text-primary-500" />
            <span>Contact Direct & Demande d'Audit</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark tracking-tight">
            Transmettez vos besoins à la Direction Technique
          </h2>
          <p className="text-xs sm:text-sm text-neutral-muted mt-2">
            Nos ingénieurs QHSE et inspecteurs sanitaires réalisent des audits techniques sur site et des chiffrages sous 24h ouvrées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formulaire de Devis (7 Cols) */}
          <div className="lg:col-span-7 bg-neutral-soft/60 rounded-3xl p-6 sm:p-8 border border-neutral-border shadow-sm">
            <h3 className="font-heading font-bold text-lg text-dark mb-1 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary-500" />
              <span>Formulaire de Cotation & Audit sur Site</span>
            </h3>
            <p className="text-xs text-neutral-500 mb-6">
              Remplissez les informations ci-dessous pour recevoir une proposition officielle.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-qhse-50 border border-qhse-200 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-qhse-500 text-white flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-qhse-900">Demande transmise avec succès</h4>
                  <p className="text-xs text-qhse-800 mt-1 max-w-sm mx-auto">
                    Votre dossier a été enregistré par notre service commercial. Un ingénieur QHSE prendra contact sous 24h ouvrées.
                  </p>
                </div>

                <div className="pt-2">
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
                    className="px-5 py-2.5 rounded-xl bg-white border border-neutral-border text-xs font-bold text-neutral-700 hover:bg-neutral-soft transition-colors cursor-pointer shadow-2xs"
                  >
                    Envoyer une autre demande
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
                    <span>Devis officiel sous 24h avec FDS et agréments</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmettre la Demande</span>
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Informations Légales & Coordonnées (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Legal Box */}
            <div className="bg-gradient-to-br from-dark to-dark-card text-white rounded-3xl p-6 border border-primary-500/40 shadow-xl space-y-4">
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

              <div className="space-y-3 text-xs text-neutral-200">
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
                    <span className="font-bold text-white block text-[11px]">Téléphones Directs :</span>
                    <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-primary-300 font-mono block text-emerald-400 font-bold">
                      {COMPANY_INFO.phones[0].number} (Astreinte 24/7)
                    </a>
                    <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="hover:text-primary-300 font-mono block text-neutral-400">
                      {COMPANY_INFO.phones[1].number} (Bureau Administratif)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-[11px]">Email Professionnel :</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-primary-300 font-mono text-xs text-primary-300">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-neutral-400 pt-1">
                  <Clock className="w-4 h-4 text-qhse-400 flex-shrink-0 mt-0.5" />
                  <span>Astreinte d'urgence 24h/24 & 7j/7</span>
                </div>
              </div>

              {/* Direct Call Button */}
              <div className="pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phones[0].raw}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Appeler l'Astreinte : {COMPANY_INFO.phones[0].number}</span>
                </a>
              </div>
            </div>

            {/* Real Interactive Google Maps Card */}
            <div className="bg-white rounded-3xl p-5 border border-neutral-border shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-primary-50 text-primary-600 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-heading font-extrabold text-xs sm:text-sm text-dark block leading-tight">
                      Localisation du Siège Social
                    </span>
                    <span className="text-[11px] text-neutral-500 font-medium block mt-0.5">
                      {COMPANY_INFO.address}, {COMPANY_INFO.city}
                    </span>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${COMPANY_INFO.address}, ${COMPANY_INFO.city}, République du Congo`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-soft hover:bg-primary-50 text-primary-600 text-xs font-bold transition-colors border border-neutral-border flex-shrink-0"
                >
                  <span>Ouvrir Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              
              {/* Google Maps Embed iframe */}
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-neutral-200 relative shadow-inner">
                <iframe
                  title="Carte Google Maps EXCELLENT SERVICES Pointe-Noire"
                  src="https://maps.google.com/maps?q=Pointe-Noire%2C%20Republic%20of%20the%20Congo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
