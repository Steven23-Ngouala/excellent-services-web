import React, { useState } from 'react';
import { 
  Clock, 
  FlaskConical, 
  ShieldCheck, 
  FileCheck2, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../data/companyInfo';

export const InterventionWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Mobilisation sous 2h & Diagnostic',
      subtitle: 'Audit préalable & cartographie des risques',
      icon: Clock,
      color: 'text-primary-500 bg-primary-50 border-primary-200',
      description: 'Déploiement immédiat de nos ingénieurs sur vos installations à Pointe-Noire ou bases offshore. Évaluation précise des vecteurs d’infestation, identification des points critiques et rédaction du plan de prévention.',
      deliverables: ['Audit technique sur site', 'Cartographie des zones à risque', 'Plan de prévention sécurité']
    },
    {
      num: '02',
      title: 'Sélection des Molécules & FDS',
      subtitle: 'Formulations homologuées OMS & Ministère',
      icon: FlaskConical,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      description: 'Sélection stricte des principes actifs (Deltaméthrine, Cyperméthrine, Vertox) adaptés à l’environnement : respect des denrées alimentaires (HACCP), zones confinées ou contraintes environnementales marines.',
      deliverables: ['Mise à disposition des FDS', 'Molécules biodégradables ciblées', 'Autorisations réglementaires validées']
    },
    {
      num: '03',
      title: 'Exécution Technique Sécurisée',
      subtitle: 'Techniciens habilités & EPI niveau 3',
      icon: ShieldCheck,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      description: 'Application de haute précision par nos équipes certifiées : nébulisation à froid, thermonébulisation, pose de barrières répulsives, curage et hydrocurage sous contrôle permanent de la sécurité.',
      deliverables: ['Matériel industriel certifié', 'Équipements de protection complets', 'Zonage et balisage de sécurité']
    },
    {
      num: '04',
      title: 'Rapport QHSE & Certificat',
      subtitle: 'Délivrance de conformité officielle',
      icon: FileCheck2,
      color: 'text-qhse-700 bg-qhse-50 border-qhse-200',
      description: 'Remise du certificat officiel de traitement sanitaire indispensable pour vos audits qualité, dossier technique d’intervention complet et mise en place d’un calendrier de surveillance préventive.',
      deliverables: ['Certificat officiel de conformité', 'Rapport d’intervention détaillé', 'Planning de contrôle post-traitement']
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-neutral-soft/50 to-white relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-qhse-100/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-primary-500" />
            <span>Rigueur & Méthodologie QHSE</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark tracking-tight">
            Protocole d’Intervention en 4 Étapes
          </h2>
          <p className="text-xs sm:text-sm text-neutral-muted mt-2.5 leading-relaxed">
            De l’appel d’urgence à la délivrance du certificat officiel de conformité, découvrez la rigueur opérationnelle qui rassure les plus grands comptes industriels.
          </p>
        </div>

        {/* 4-Step Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                  isSelected 
                    ? 'bg-white border-primary-500 shadow-xl ring-2 ring-primary-500/20 -translate-y-1' 
                    : 'bg-white/90 border-neutral-border hover:border-primary-300 hover:shadow-md'
                }`}
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-primary-500/30 group-hover:text-primary-500 transition-colors">
                      {step.num}
                    </span>
                    <div className={`p-2.5 rounded-2xl border ${step.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-bold text-base text-dark group-hover:text-primary-600 transition-colors mb-1">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-primary-600 mb-3">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="pt-3.5 border-t border-neutral-border/70 space-y-1.5">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    Livrables Clés :
                  </div>
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-qhse-600 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Bar */}
        <div className="mt-12 p-6 rounded-3xl bg-dark text-white border border-primary-500/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center text-primary-400 flex-shrink-0 hidden sm:flex">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="font-heading font-bold text-base text-white">
                Besoin d'une Intervention d'Urgence ou d'un Audit Préventif ?
              </div>
              <div className="text-xs text-neutral-300 mt-0.5">
                Nos équipes interviennent sous 1 à 2 heures à Pointe-Noire et mobilisent les moyens nécessaires pour vos sites offshore.
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Astreinte 24/7 : {COMPANY_INFO.phones[0].number}</span>
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              <span>Demander un Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
