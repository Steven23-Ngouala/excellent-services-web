import React, { useState } from 'react';
import { PhoneCall, MessageSquare, AlertTriangle, X } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export const EmergencyFab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Quick Options */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-primary-500 p-4 w-72 mb-2 animate-fadeIn transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-border mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              <span className="text-xs font-bold uppercase text-dark tracking-wider">Astreinte d'Urgence 24/7</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-dark p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-muted mb-3">
            Besoin d’une intervention immédiate (serpent, désinfection critique, barge offshore) ?
          </p>

          <div className="space-y-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("🚨 URGENCE EXCELLENT SERVICES : Nous avons un besoin immédiat d'intervention sur notre site.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-qhse-500 hover:bg-qhse-600 text-white text-xs font-bold transition-all shadow-sm group"
            >
              <MessageSquare className="w-4 h-4" />
              <div className="flex-1">
                <div className="leading-tight">WhatsApp Immédiat</div>
                <div className="text-[10px] text-qhse-100 font-normal">Réponse en moins de 5 min</div>
              </div>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold transition-all shadow-sm group"
            >
              <PhoneCall className="w-4 h-4" />
              <div className="flex-1">
                <div className="leading-tight">Appeler la Ligne d'Urgence</div>
                <div className="text-[10px] text-primary-100 font-mono">{COMPANY_INFO.phones[0].number}</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-industrial-copper hover:shadow-2xl active:scale-95 transition-all duration-300 border border-primary-400"
        aria-label="Contacter le service d'urgence"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] text-white font-bold items-center justify-center">!</span>
        </span>
        
        <AlertTriangle className="w-5 h-5 text-amber-300" />
        <span className="text-xs sm:text-sm font-bold tracking-wide pr-1 hidden sm:inline">
          {isOpen ? "Fermer l'Urgence" : "Urgence & WhatsApp 24/7"}
        </span>
      </button>
    </div>
  );
};
