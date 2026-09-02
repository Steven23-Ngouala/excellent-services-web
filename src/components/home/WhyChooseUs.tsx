import React from 'react';
import { 
  FileCheck2, 
  Sparkles, 
  ShieldCheck, 
  Timer, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Flame
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      icon: <FileCheck2 className="w-5 h-5 text-primary-500" />,
      title: "Rigueur & Fiches FDS",
      desc: "Chaque prestation donne lieu à la remise des Fiches de Données de Sécurité (FDS), plans d’appâtage et certificats conformes aux audits ISO et HACCP.",
      badge: "100% Traçable"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-qhse-600" />,
      title: "Molécules & Équipements",
      desc: "Matières actives homologuées par l'OMS (Deltaméthrine, Cyperméthrine, Vertox) appliquées via atomiseurs et nébuliseurs thermiques de pointe.",
      badge: "Normes OMS"
    },
    {
      icon: <Flame className="w-5 h-5 text-accent-copper" />,
      title: "Habilitations ATEX & Offshore",
      desc: "Techniciens formés pour évoluer en milieu confiné, sur plateformes pétrolières, barges flottantes et zones à risque explosible.",
      badge: "Pétrole & Mer"
    },
    {
      icon: <Timer className="w-5 h-5 text-amber-600" />,
      title: "Astreinte Réactive 24/7",
      desc: "Cellule d’urgence dédiée intervenant en moins de 2 heures à Pointe-Noire en cas de serpent, d'infestation critique ou d'avarie sanitaire.",
      badge: "Réponse < 2h"
    }
  ];

  return (
    <section id="valeurs" className="py-16 sm:py-20 bg-neutral-soft border-t border-neutral-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-qhse-200 text-qhse-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-qhse-600" />
            <span>Nos Différenciateurs B2B</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark tracking-tight">
            Pourquoi Choisir EXCELLENT SERVICES ?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-muted mt-2">
            Nous élevons les standards de l’hygiène 3D et de l'assainissement au rang de discipline d'ingénierie QHSE rigoureuse.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-border hover:border-primary-500 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-soft group-hover:bg-primary-50 transition-colors">
                    {diff.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-neutral-soft text-primary-700 border border-neutral-border font-mono">
                    {diff.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-dark group-hover:text-primary-600 transition-colors mb-2">
                  {diff.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {diff.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-border/60 flex items-center gap-1.5 text-xs font-semibold text-qhse-700">
                <CheckCircle2 className="w-4 h-4 text-qhse-600 flex-shrink-0" />
                <span>Garantie de résultat</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Banner */}
        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-dark to-dark-card rounded-3xl p-6 sm:p-8 text-white border border-primary-500/40 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 text-primary-300 text-xs font-bold uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>Engagement Sécurité & Environnement</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                Zéro Compromis sur la Santé des Équipes
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Toutes nos interventions respectent scrupuleusement les délais de réoccupation des locaux, l'absence de résidus toxiques agressifs et le tri des déchets souillés.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm text-center"
              >
                <span>Planifier un Audit Technique</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wider border border-white/15 transition-all text-center"
              >
                <span>Astreinte : {COMPANY_INFO.phones[0].number}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
