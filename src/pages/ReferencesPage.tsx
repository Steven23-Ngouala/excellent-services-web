import React from 'react';
import { ClientTrustBar } from '../components/home/ClientTrustBar';
import { CaseStudies } from '../components/home/CaseStudies';
import { Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ReferencesPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-dark to-dark-card text-white py-14 sm:py-16 border-b border-primary-500/40 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-wider mb-3 border border-primary-400/30">
            <Award className="w-3.5 h-3.5 text-primary-400" />
            <span>Preuves & Grands Comptes</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Références Clients & Études de Cas
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mt-3 leading-relaxed">
            Total E&P Congo, Newrest Congo, Carroil, Mafricom... Retours d'expérience chiffrés et protocoles déployés sur des sites industriels et offshore d'envergure.
          </p>

          <div className="pt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Demander notre Dossier d'Agrément Vendor List</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients & Case Studies Components */}
      <ClientTrustBar />
      <CaseStudies />
    </div>
  );
};
