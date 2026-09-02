import React, { useState } from 'react';
import { 
  ChevronDown, 
  ShieldCheck, 
  Award,
  HelpCircle
} from 'lucide-react';
import { CASE_STUDIES_DATA, FAQ_DATA } from '../../data/caseStudiesData';

export const CaseStudies: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Case Studies */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-primary-500" />
              <span>Retours d'Expérience</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark tracking-tight">
              Résultats Prouvés sur le Terrain
            </h2>
            <p className="text-xs sm:text-sm text-neutral-muted mt-2">
              Découvrez nos interventions réussies face aux défis d'infestation et de conformité complexes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
            {CASE_STUDIES_DATA.map((study) => (
              <div 
                key={study.id}
                className="bg-neutral-soft/70 rounded-3xl p-5 sm:p-6 border border-neutral-border hover:border-primary-500 transition-all duration-300 shadow-xs hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-dark text-white font-mono">
                      {study.sector}
                    </span>
                    <span className="text-[10px] font-bold text-qhse-700 bg-qhse-100 px-2 py-0.5 rounded">
                      Succès
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-dark mb-2.5 leading-snug">
                    {study.title}
                  </h3>

                  {/* Challenge & Intervention */}
                  <div className="space-y-2.5 text-xs mb-4">
                    <div className="p-2.5 rounded-xl bg-white border border-neutral-border/70">
                      <span className="font-bold text-red-700 block mb-0.5">Défi :</span>
                      <p className="text-neutral-600 leading-relaxed text-[11px]">{study.challenge}</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-neutral-border/70">
                      <span className="font-bold text-primary-700 block mb-0.5">Protocole Déployé :</span>
                      <p className="text-neutral-600 leading-relaxed text-[11px]">{study.intervention}</p>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="pt-3 border-t border-neutral-border">
                  <div className="grid grid-cols-3 gap-1.5 text-center bg-white p-2.5 rounded-xl border border-neutral-border/70 mb-2.5">
                    {study.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="font-heading font-extrabold text-xs sm:text-sm text-primary-600">
                          {m.value}
                        </div>
                        <div className="text-[8px] sm:text-[9px] font-semibold text-neutral-500 uppercase leading-tight mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-[10px] sm:text-[11px] text-qhse-800 font-semibold flex items-center gap-1 justify-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-qhse-600 flex-shrink-0" />
                    <span>{study.qhseBadge}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Section 2: FAQ */}
        <div className="pt-8 border-t border-neutral-border max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-soft border border-neutral-border text-xs font-bold uppercase tracking-wider text-dark mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-primary-500" />
              <span>Questions Fréquentes</span>
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-dark">
              Procédures, Délais & Habilitations
            </h3>
          </div>

          <div className="space-y-2.5">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-neutral-border bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-3 font-heading font-bold text-xs sm:text-sm text-dark hover:text-primary-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary-500' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs text-neutral-600 leading-relaxed border-t border-neutral-border/50 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
