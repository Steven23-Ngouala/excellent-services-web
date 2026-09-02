import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';
import { EXPERTISES_DATA } from '../../data/expertisesData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-neutral-border">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-neutral-border flex items-center justify-between z-20">
          <div className="flex items-center gap-2 text-dark font-heading font-bold text-base">
            <FileText className="w-5 h-5 text-primary-500" />
            <span>Plaquette Corporate & Dossier d'Agrément Fournisseur</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-soft hover:bg-neutral-200 text-dark text-xs font-bold transition-colors"
              title="Imprimer / Enregistrer en PDF"
            >
              <Printer className="w-3.5 h-3.5 text-neutral-600" />
              <span className="hidden sm:inline">Imprimer / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-neutral-400 hover:text-dark hover:bg-neutral-soft transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Content */}
        <div className="p-6 sm:p-8 space-y-6 text-dark print:p-0" id="corporate-brochure">
          
          {/* Header Identity */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b-2 border-primary-500">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-white border border-primary-500 p-1 flex-shrink-0 shadow-xs">
                <img src="/logo.jpeg" alt="EXCELLENT SERVICES S.A.R.L." className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-dark leading-tight">
                  EXCELLENT <span className="text-primary-500">SERVICES S.A.R.L.</span>
                </h1>
                <div className="text-xs text-neutral-500 font-medium">
                  Hygiène 3D • Assainissement Industriel • Solutions QHSE
                </div>
                <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
                  RCCM : <span className="text-dark font-bold">{COMPANY_INFO.rccm}</span> | NIU : <span className="text-dark font-bold">{COMPANY_INFO.niu}</span>
                </div>
              </div>
            </div>

            <div className="text-right text-xs space-y-0.5 sm:border-l sm:pl-6 border-neutral-border">
              <div className="font-bold text-qhse-700 bg-qhse-50 px-2.5 py-1 rounded-full inline-block mb-1 border border-qhse-200">
                Agréé Sites Industriels & Offshore
              </div>
              <div className="text-neutral-500">Siège : {COMPANY_INFO.address}</div>
              <div className="text-neutral-500">{COMPANY_INFO.city}, {COMPANY_INFO.country}</div>
            </div>
          </div>

          {/* Presentation */}
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-primary-600">
              1. Présentation de la Société
            </h2>
            <p className="text-xs text-neutral-700 leading-relaxed">
              Fondée en {COMPANY_INFO.foundingYear}, <strong>EXCELLENT SERVICES S.A.R.L.</strong> est une entreprise congolaise de référence spécialisée dans l’ingénierie de l’hygiène 3D (Dératisation, Désinsectisation, Désinfection), la déserpentisation de haute précision, l’assainissement technique des bâches à eau et la fourniture d’équipements de sécurité QHSE.
            </p>
          </div>

          {/* 5 Poles Grid */}
          <div className="space-y-3">
            <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-primary-600">
              2. Nos 5 Pôles d’Intervention Spécialisés
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EXPERTISES_DATA.map((exp) => (
                <div key={exp.id} className="p-3 rounded-xl bg-neutral-soft border border-neutral-border space-y-1">
                  <div className="font-bold text-xs text-dark flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    <span>{exp.title}</span>
                  </div>
                  <div className="text-[11px] text-neutral-600 line-clamp-2 leading-relaxed">
                    {exp.shortDescription}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Reassurance */}
          <div className="space-y-3">
            <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-primary-600">
              3. Standards Réglementaires & Engagements QHSE
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
                <div className="font-bold text-amber-800">HACCP</div>
                <div className="text-[10px] text-amber-700">Sécurité alimentaire</div>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
                <div className="font-bold text-blue-800">Normes OMS</div>
                <div className="text-[10px] text-blue-700">Potabilité des eaux</div>
              </div>
              <div className="p-2.5 rounded-xl bg-primary-50 border border-primary-200">
                <div className="font-bold text-primary-800">ATEX 1 & 2</div>
                <div className="text-[10px] text-primary-700">Zones explosives</div>
              </div>
              <div className="p-2.5 rounded-xl bg-qhse-50 border border-qhse-200">
                <div className="font-bold text-qhse-800">FDS Traçables</div>
                <div className="text-[10px] text-qhse-700">Molécules sélectives</div>
              </div>
            </div>
          </div>

          {/* References */}
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-primary-600">
              4. Principales Références Clients
            </h2>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-neutral-800">
              <span className="px-3 py-1 bg-neutral-100 rounded-lg border border-neutral-200">Total E&P Congo (Pétrole)</span>
              <span className="px-3 py-1 bg-neutral-100 rounded-lg border border-neutral-200">Newrest Congo (Catering)</span>
              <span className="px-3 py-1 bg-neutral-100 rounded-lg border border-neutral-200">Carroil (Logistique & Forage)</span>
              <span className="px-3 py-1 bg-neutral-100 rounded-lg border border-neutral-200">Mafricom (Grande Distribution)</span>
            </div>
          </div>

          {/* Contact Box */}
          <div className="p-4 rounded-2xl bg-dark text-white space-y-3">
            <div className="font-bold text-xs uppercase tracking-wider text-primary-300">
              Coordonnées Officielles & Astreinte 24/7
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>{COMPANY_INFO.phones[0].number}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>{COMPANY_INFO.address}, {COMPANY_INFO.city}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md px-6 py-4 border-t border-neutral-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-500">
            Document officiel prêt pour inscription dans votre <em>Vendor List</em>.
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("Bonjour EXCELLENT SERVICES, je souhaite recevoir votre dossier d'agrément et plaquette commerciale complète en PDF.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-qhse-500 hover:bg-qhse-600 text-white font-bold text-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Demander le PDF par WhatsApp</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Imprimer / PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
