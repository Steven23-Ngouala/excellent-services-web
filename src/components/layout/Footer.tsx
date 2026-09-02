import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUpRight, 
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';
import { EXPERTISES_DATA } from '../../data/expertisesData';
import { SECTORS_DATA } from '../../data/sectorsData';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-12 border-t-4 border-primary-500 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-qhse-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-dark-border">
          
          {/* Col 1: Identity & Legal */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white p-0.5 border border-primary-400">
                <img src="/logo.jpeg" alt="EXCELLENT SERVICES" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white block leading-tight">
                  EXCELLENT <span className="text-primary-400">SERVICES</span>
                </span>
                <span className="text-[11px] text-neutral-400 font-semibold uppercase">
                  {COMPANY_INFO.legalName}
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Société spécialisée dans les services QHSE, l’assainissement industriel, la déserpentisation et la lutte antiparasitaire (Traitement 3D) en République du Congo.
            </p>

            <div className="p-3.5 rounded-xl bg-dark-card border border-dark-border space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-neutral-400">
                <span>Régistre de Commerce (RCCM) :</span>
                <span className="font-mono text-white font-semibold">{COMPANY_INFO.rccm}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>Numéro d'Identification Unique (NIU) :</span>
                <span className="font-mono text-white font-semibold">{COMPANY_INFO.niu}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>Forme Juridique :</span>
                <span className="text-primary-300 font-semibold">S.A.R.L.</span>
              </div>
            </div>
          </div>

          {/* Col 2: Nos 5 Expertises */}
          <div>
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              Expertises Majeures
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              {EXPERTISES_DATA.map((exp) => (
                <li key={exp.id}>
                  <button
                    onClick={() => scrollToSection('#expertises')}
                    className="hover:text-primary-300 transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-primary-400 group-hover:translate-x-1 transition-transform" />
                    <span>{exp.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Secteurs d'Intervention */}
          <div>
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-qhse-500"></span>
              Secteurs Industriels
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              {SECTORS_DATA.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollToSection('#secteurs')}
                    className="hover:text-qhse-400 transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-qhse-500 group-hover:translate-x-1 transition-transform" />
                    <span>{sec.name}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#references"
                  onClick={(e) => { e.preventDefault(); scrollToSection('#references'); }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary-400 hover:text-white transition-colors"
                >
                  <span>Voir nos grands comptes (Total, Newrest...)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Siège & Contacts Officiels */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-400"></span>
              Siège & Astreinte
            </h4>

            <div className="flex items-start gap-2.5 text-sm text-neutral-300">
              <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}, {COMPANY_INFO.city}, {COMPANY_INFO.country}</span>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-neutral-300">
              <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
              <div>
                <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-white font-semibold block">
                  {COMPANY_INFO.phones[0].number}
                </a>
                <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="text-neutral-400 hover:text-white text-xs block">
                  {COMPANY_INFO.phones[1].number}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-neutral-300">
              <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white font-medium text-xs break-all">
                {COMPANY_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-neutral-400 pt-2 border-t border-dark-border">
              <Clock className="w-4 h-4 text-qhse-400 flex-shrink-0" />
              <span>Cellule d'intervention 24/7 sur site & offshore</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-qhse-500" />
            <span>&copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. Tous droits réservés.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-400">Conformité QHSE & Normes Internationales</span>
            <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
            <span className="text-neutral-400">Pointe-Noire, Congo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
