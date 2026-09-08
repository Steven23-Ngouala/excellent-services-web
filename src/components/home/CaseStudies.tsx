import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle
} from 'lucide-react';
import { FAQ_DATA } from '../../data/caseStudiesData';

export const CaseStudies: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ Section */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-soft border border-neutral-border text-xs font-bold uppercase tracking-wider text-dark mb-2">
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
