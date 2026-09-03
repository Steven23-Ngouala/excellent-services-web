import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { BrochureModal } from '../components/home/BrochureModal';
import { 
  ArrowRight, 
  ShieldCheck,
  Building2,
  FileText,
  Download
} from 'lucide-react';
import { SECTORS_DATA } from '../data/sectorsData';

export const HomePage: React.FC = () => {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section avec Carousel 3 Images Défilantes */}
      <HeroSection />

      {/* 2. Section Dédiée Plaquette Corporate & Dossier d'Agrément Fournisseur */}
      <section className="py-14 sm:py-16 bg-white border-y border-neutral-border relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-neutral-soft via-white to-primary-50/40 rounded-3xl p-6 sm:p-10 border border-primary-500/30 shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 text-primary-700 text-xs font-bold uppercase tracking-wider border border-primary-500/20">
                <FileText className="w-3.5 h-3.5 text-primary-600" />
                <span>Espace Acheteurs & Directeurs QHSE</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark tracking-tight">
                Téléchargez notre Plaquette Corporate & Dossier d’Agrément
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Retrouvez dans un document officiel prêt à imprimer l’ensemble de nos qualifications légales (RCCM, NIU), fiches techniques FDS, protocoles QHSE et références clients pour votre comité d’achats et <em>Vendor List</em>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <button
                onClick={() => setIsBrochureOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-industrial-copper hover:shadow-md active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Consulter / Télécharger le PDF</span>
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-soft text-dark font-bold text-xs uppercase tracking-wider border border-neutral-border hover:border-primary-400 transition-all shadow-xs"
              >
                <span>Demander une Cotation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (Différenciateurs B2B) */}
      <WhyChooseUs />

      {/* 4. Secteurs d'Activité Aperçu */}
      <section className="py-16 sm:py-20 bg-white border-t border-neutral-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-soft border border-neutral-border text-xs font-bold uppercase tracking-wider text-dark mb-2.5">
              <Building2 className="w-3.5 h-3.5 text-primary-500" />
              <span>Secteurs Stratégiques</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark tracking-tight">
              Adapté aux Exigences des Acteurs Majeurs
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {SECTORS_DATA.map((sec) => (
              <Link
                key={sec.id}
                to="/secteurs"
                className="p-4 rounded-2xl bg-neutral-soft/60 border border-neutral-border hover:border-primary-500 hover:bg-white transition-all text-center group flex flex-col items-center justify-between"
              >
                <div className="p-2.5 rounded-xl bg-white shadow-2xs group-hover:bg-primary-50 transition-colors mb-2">
                  <Building2 className="w-5 h-5 text-primary-600" />
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-dark group-hover:text-primary-600 transition-colors">
                  {sec.name}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/secteurs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
            >
              <span>Découvrir nos solutions par secteur</span>
              <ArrowRight className="w-3.5 h-3.5 text-primary-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Bottom Contact & Diagnostic CTA */}
      <section className="py-16 bg-gradient-to-r from-dark to-dark-card text-white border-t border-primary-500/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-primary-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Contact Direct & Astreinte 24/7</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white max-w-2xl mx-auto tracking-tight">
            Prêt à Sécuriser vos Installations avec EXCELLENT SERVICES ?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Obtenez un devis formel sous 24h avec toutes les Fiches de Données de Sécurité (FDS) et certificats de conformité.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <span>Demander un Devis Formel</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/diagnostic"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              <span>Lancer le Diagnostic Express</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Corporate Brochure Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </div>
  );
};
