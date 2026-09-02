import React from 'react';
import { ContactSection } from '../components/home/ContactSection';
import { QuoteCalculator } from '../components/home/QuoteCalculator';
import { Mail, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-dark to-dark-card text-white py-14 sm:py-16 border-b border-primary-500/40 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-wider mb-3 border border-primary-400/30">
            <Mail className="w-3.5 h-3.5 text-primary-400" />
            <span>Devis Formel & Astreinte 24/7</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Contactez la Direction QHSE & Commerciale
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mt-3 leading-relaxed">
            Pour toute demande d'audit technique, cotation de marché, appel d'offres ou intervention d'urgence sur vos installations à Pointe-Noire ou en mer.
          </p>

          <div className="flex items-center gap-4 pt-6">
            <a 
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Ligne Directe : {COMPANY_INFO.phones[0].number}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quote Calculator Component */}
      <QuoteCalculator />

      {/* Formal Contact Section Component */}
      <ContactSection />
    </div>
  );
};
