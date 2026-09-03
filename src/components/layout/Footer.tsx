import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';
import { EXPERTISES_DATA } from '../../data/expertisesData';
import { SECTORS_DATA } from '../../data/sectorsData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-12 border-t-4 border-primary-500 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-qhse-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-dark-border">
          
          {/* Col 1: Identity & Legal */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-white p-0.5 border border-primary-400">
                <img src="/logo.jpeg" alt="EXCELLENT SERVICES" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-white block leading-tight">
                  EXCELLENT <span className="text-primary-400">SERVICES</span>
                </span>
                <span className="text-[10px] text-neutral-400 font-semibold uppercase">
                  {COMPANY_INFO.legalName}
                </span>
              </div>
            </Link>

            <p className="text-xs text-neutral-300 leading-relaxed">
              Société spécialisée dans les services QHSE, l’assainissement industriel, la déserpentisation et la lutte antiparasitaire (Traitement 3D) en République du Congo.
            </p>

            <div className="p-3.5 rounded-xl bg-dark-card border border-dark-border space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-neutral-400">
                <span>RCCM :</span>
                <span className="font-mono text-white font-semibold">{COMPANY_INFO.rccm}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>NIU :</span>
                <span className="font-mono text-white font-semibold">{COMPANY_INFO.niu}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>Forme :</span>
                <span className="text-primary-300 font-semibold">S.A.R.L.</span>
              </div>
            </div>
          </div>

          {/* Col 2: Nos 5 Expertises */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              Pages Expertises
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              {EXPERTISES_DATA.map((exp) => (
                <li key={exp.id}>
                  <Link
                    to="/expertises"
                    className="hover:text-primary-300 transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-primary-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    <span>{exp.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Secteurs d'Intervention */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-qhse-500"></span>
              Secteurs Clés
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              {SECTORS_DATA.map((sec) => (
                <li key={sec.id}>
                  <Link
                    to="/secteurs"
                    className="hover:text-qhse-400 transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-qhse-500 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    <span>{sec.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Siège & Contacts */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-400"></span>
              Siège & Astreinte
            </h4>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
              <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}, {COMPANY_INFO.city}, {COMPANY_INFO.country}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
              <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
              <div>
                <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-white font-semibold block">
                  {COMPANY_INFO.phones[0].number}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
              <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white font-medium text-xs break-all">
                {COMPANY_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2 border-t border-dark-border">
              <Clock className="w-3.5 h-3.5 text-qhse-400 flex-shrink-0" />
              <span>Astreinte 24/7 sur site & offshore</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-qhse-500" />
            <span>&copy; {new Date().getFullYear()} {COMPANY_INFO.legalName} Tous droits réservés.</span>
          </div>

          <div className="text-neutral-400 text-xs">
            <span>{COMPANY_INFO.city}, {COMPANY_INFO.country}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
