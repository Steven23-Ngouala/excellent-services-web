import React from 'react';
import { SectorShowcase } from '../components/home/SectorShowcase';
import { Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SectorsPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-dark to-dark-card text-white py-14 sm:py-16 border-b border-primary-500/40 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-wider mb-3 border border-primary-400/30">
            <Building2 className="w-3.5 h-3.5 text-primary-400" />
            <span>Référentiels Métiers</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Secteurs d’Intervention Stratégiques
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mt-3 leading-relaxed">
            Pétrole offshore & onshore, restauration collective (normes HACCP), conteneurs maritimes, structures de santé et complexes tertiaires à Pointe-Noire.
          </p>

          <div className="pt-6">
            <Link
              to="/diagnostic"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <span>Lancer un Diagnostic pour votre Secteur</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sector Showcase Component */}
      <SectorShowcase />
    </div>
  );
};
