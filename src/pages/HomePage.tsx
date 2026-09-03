import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section avec Carousel 3 Images Défilantes & Métriques */}
      <HeroSection />

      {/* 2. Section CTA Directe & Diagnostic */}
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
    </div>
  );
};
