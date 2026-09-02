import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Crosshair, 
  Award, 
  Flame, 
  Anchor, 
  AlertTriangle,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';
import { Badge } from '../ui/Badge';

export const HeroSection: React.FC = () => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-white">
      {/* Background Grid & Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-qhse-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* QHSE Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-qhse-50 border border-qhse-200 text-qhse-800 text-xs sm:text-sm font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-qhse-500 animate-ping" />
              <ShieldCheck className="w-4 h-4 text-qhse-600" />
              <span>Intervention d'Urgence 24/7 & Protocoles QHSE</span>
            </div>

            {/* Title */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-dark tracking-tight leading-[1.18]">
              L’Excellence Opérationnelle en <span className="text-primary-500 underline decoration-primary-300 decoration-wavy decoration-2">Hygiène 3D</span>, Assainissement & Solutions QHSE.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Partenaire stratégique des acteurs majeurs de l’industrie pétrolière onshore & offshore, du maritime, de la restauration collective et des grands sites en République du Congo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => scrollTo('#diagnostic')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-industrial-copper hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Lancer le Diagnostic Express</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('#references')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-soft text-dark font-bold text-xs uppercase tracking-wider border border-neutral-border hover:border-primary-400 transition-all shadow-xs"
              >
                <span>Nos Références Clients</span>
              </button>
            </div>

            {/* Reassurance Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 pt-3 text-xs font-semibold text-neutral-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-qhse-600 flex-shrink-0" />
                <span>FDS & Fiches Techniques</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-qhse-600 flex-shrink-0" />
                <span>Habilitations ATEX & Offshore</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-qhse-600 flex-shrink-0" />
                <span>Normes HACCP</span>
              </div>
            </div>

          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="bg-gradient-to-br from-dark to-dark-card rounded-3xl p-6 sm:p-7 text-white shadow-xl border border-primary-500/40 relative overflow-hidden space-y-5">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/15 rounded-full blur-2xl pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-dark-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center border border-primary-400">
                      <img src="/logo.jpeg" alt="EXCELLENT SERVICES" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm tracking-wide text-white">EXCELLENT SERVICES</div>
                      <div className="text-[10px] text-primary-300 font-mono">Pointe-Noire • République du Congo</div>
                    </div>
                  </div>
                  <Badge variant="qhse" size="sm">
                    Agrément QHSE
                  </Badge>
                </div>

                {/* Focus areas with airy spacing */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary-500/20 text-primary-400 flex-shrink-0">
                        <Crosshair className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Lutte Antiparasitaire 3D</div>
                        <div className="text-[11px] text-neutral-400">Dératisation • Désinsectisation • Désinfection</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-qhse-400 bg-qhse-900/40 px-2 py-0.5 rounded">100% ACTIF</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent-copper/20 text-accent-copper flex-shrink-0">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Déserpentisation Sécurisée</div>
                        <div className="text-[11px] text-neutral-400">Barrières répulsives & Périmètres sensibles</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-900/40 px-2 py-0.5 rounded">URGENCE 24/7</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-qhse-500/20 text-qhse-400 flex-shrink-0">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Bâches à Eau & Assainissement</div>
                        <div className="text-[11px] text-neutral-400">Curage • Hydrocurage • Analyses bactériologiques</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-900/40 px-2 py-0.5 rounded">CONFORME OMS</span>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-primary-200">Interventions Complexes & Offshore</div>
                    <div className="text-[10px] text-neutral-400">Barges, FPSO, Terminaux & Bases de forage</div>
                  </div>
                  <div className="flex -space-x-1.5">
                    <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center text-white border-2 border-dark" title="Pétrole">
                      <Flame className="w-3 h-3" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white border-2 border-dark" title="Maritime">
                      <Anchor className="w-3 h-3" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-qhse-600 flex items-center justify-center text-white border-2 border-dark" title="QHSE">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-lg border border-neutral-border flex items-center gap-2.5 hidden sm:flex">
                <div className="p-2 rounded-xl bg-qhse-100 text-qhse-700">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-dark">+15 Ans d'Expérience</div>
                  <div className="text-[10px] text-neutral-muted">Pointe-Noire, Congo</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Animated Key Industrial Metrics */}
        <div className="mt-14 pt-8 border-t border-neutral-border grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_INFO.metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-soft/80 border border-neutral-border hover:border-primary-400 transition-all hover:shadow-xs group text-center sm:text-left"
            >
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-primary-500 group-hover:scale-105 transition-transform duration-300">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-dark mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-neutral-muted mt-0.5 line-clamp-1">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
