import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { ClientTrustBar } from '../components/home/ClientTrustBar';
import { StandardsBar } from '../components/home/StandardsBar';
import { InterventionWorkflow } from '../components/home/InterventionWorkflow';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { BrochureModal } from '../components/home/BrochureModal';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Droplets, 
  Trees, 
  PackageCheck, 
  ArrowRight, 
  Clock, 
  CheckCircle, 
  ShieldCheck,
  Building2,
  FileCheck,
  FileText,
  Download
} from 'lucide-react';
import { EXPERTISES_DATA } from '../data/expertisesData';
import { SECTORS_DATA } from '../data/sectorsData';

export const HomePage: React.FC = () => {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const getPoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-primary-500" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-accent-copper" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-blue-600" />;
      case 'Trees': return <Trees className="w-5 h-5 text-qhse-600" />;
      case 'PackageCheck': return <PackageCheck className="w-5 h-5 text-dark" />;
      default: return <ShieldCheck className="w-5 h-5 text-primary-500" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero Section avec Carousel 3 Images Défilantes */}
      <HeroSection />

      {/* 2. Bandeau Clients Grands Comptes (Total, Newrest, Carroil, Mafricom) */}
      <ClientTrustBar />

      {/* 3. Proposition 2: Bandeau des Normes & Référentiels (HACCP, OMS, ATEX, Agréments) */}
      <StandardsBar />

      {/* 4. Nos 5 Pôles d'Expertise */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-wider mb-2.5">
                <FileCheck className="w-3.5 h-3.5 text-primary-500" />
                <span>Nos 5 Pôles Spécialisés</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark tracking-tight">
                L'Ingénierie de l'Hygiène & de l'Assainissement
              </h2>
            </div>
            <Link
              to="/expertises"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary-600 hover:text-primary-800 transition-colors group flex-shrink-0"
            >
              <span>Consulter toutes nos fiches techniques</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {EXPERTISES_DATA.map((pole) => (
              <div
                key={pole.id}
                className="bg-neutral-soft/60 rounded-2xl p-5 sm:p-6 border border-neutral-border hover:border-primary-500 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white border border-neutral-border shadow-2xs group-hover:scale-105 transition-transform">
                      {getPoleIcon(pole.iconName)}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-primary-700 border border-neutral-border">
                      {pole.code}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-dark group-hover:text-primary-600 transition-colors mb-2">
                    {pole.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {pole.shortDescription}
                  </p>

                  <ul className="space-y-1.5 mb-4 text-xs text-neutral-700">
                    {pole.subServices.slice(0, 2).map((sub) => (
                      <li key={sub.id} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-qhse-600 flex-shrink-0" />
                        <span className="font-medium text-neutral-800">{sub.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/expertises"
                  className="pt-3 border-t border-neutral-border/60 inline-flex items-center justify-between text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors"
                >
                  <span>Voir le protocole complet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}

            {/* CTA Card to Discover All */}
            <div className="bg-gradient-to-br from-dark to-dark-card rounded-2xl p-6 text-white border border-primary-500/40 flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary-300 px-2 py-0.5 rounded bg-primary-500/20 border border-primary-400/30 inline-block mb-3">
                  Protocoles Certifiés
                </div>
                <h3 className="font-heading font-extrabold text-lg text-white mb-2">
                  Besoin d'un Audit Spécifique sur votre Site ?
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Nos ingénieurs QHSE interviennent sous 2h à Pointe-Noire et sur vos installations offshore.
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <Link
                  to="/diagnostic"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Diagnostic Express</span>
                </Link>
                <Link
                  to="/expertises"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/10"
                >
                  <span>Toutes nos expertises</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Proposition 1: Frise Interactive "Protocole d'Intervention en 4 Étapes" */}
      <InterventionWorkflow />

      {/* 6. Proposition 5: Section Dédiée Plaquette Corporate & Dossier d'Agrément Fournisseur */}
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

      {/* 7. Why Choose Us (Différenciateurs B2B) */}
      <WhyChooseUs />

      {/* 8. Secteurs d'Activité Aperçu */}
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

      {/* 9. Bottom Contact & Diagnostic CTA */}
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
