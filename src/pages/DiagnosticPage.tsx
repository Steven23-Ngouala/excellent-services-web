import React from 'react';
import { DiagnosticWizard } from '../components/home/DiagnosticWizard';
import { Clock } from 'lucide-react';

export const DiagnosticPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-dark to-dark-card text-white py-14 sm:py-16 border-b border-primary-500/40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-wider mb-3 border border-primary-400/30">
            <Clock className="w-3.5 h-3.5 text-primary-400" />
            <span>Évaluation Immédiate de Criticité</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Simulateur de Diagnostic Express
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto mt-3 leading-relaxed">
            Identifiez le niveau d'urgence de votre menace parasitaire ou sanitaire et recevez le protocole d'intervention recommandé sous 2 heures.
          </p>
        </div>
      </section>

      {/* Diagnostic Wizard Component */}
      <div className="py-4">
        <DiagnosticWizard />
      </div>
    </div>
  );
};
