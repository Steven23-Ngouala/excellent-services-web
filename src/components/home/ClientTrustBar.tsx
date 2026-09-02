import React from 'react';
import { ShieldCheck, Flame, Utensils, Anchor, Building2, CheckCircle2, Award } from 'lucide-react';
import { CLIENTS_DATA } from '../../data/clientsData';

export const ClientTrustBar: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'oil-gas': return <Flame className="w-4 h-4 text-primary-500" />;
      case 'catering': return <Utensils className="w-4 h-4 text-amber-500" />;
      case 'industry': return <Anchor className="w-4 h-4 text-blue-500" />;
      default: return <Building2 className="w-4 h-4 text-dark" />;
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'oil-gas': return 'Pétrole & Offshore ATEX';
      case 'catering': return 'Catering & Hygiène HACCP';
      case 'industry': return 'Logistique & Maritime';
      default: return 'Industrie & Services';
    }
  };

  return (
    <section id="references" className="py-8 sm:py-12 bg-neutral-soft/50 border-b border-neutral-border relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-qhse-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-primary-200 text-xs font-bold uppercase tracking-wider text-primary-700 mb-2.5 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-primary-500" />
            <span>Partenaires & Donneurs d'Ordres Majeurs</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark tracking-tight">
            Ils nous confient la sécurité sanitaire de leurs sites
          </h2>
          <p className="text-xs sm:text-sm text-neutral-muted mt-2">
            Interventions éprouvées sur les terminaux pétroliers, barges offshore, cuisines HACCP et installations critiques en République du Congo.
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CLIENTS_DATA.map((client) => (
            <div 
              key={client.id}
              className="bg-white rounded-3xl p-6 border border-neutral-border hover:border-primary-400 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-neutral-soft border border-neutral-border group-hover:bg-primary-50 group-hover:border-primary-200 transition-colors flex items-center justify-center flex-shrink-0">
                      {getCategoryIcon(client.category)}
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base text-dark group-hover:text-primary-600 transition-colors">
                        {client.name}
                      </h3>
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                        {getCategoryBadge(client.category)}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-qhse-50 text-qhse-700 border border-qhse-200 flex items-center gap-1 flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-qhse-600" />
                    <span>Conforme</span>
                  </span>
                </div>

                <div className="space-y-3 text-xs text-neutral-600">
                  <p className="leading-relaxed">{client.scope}</p>

                  <div className="pt-2.5 border-t border-neutral-border/70">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1.5">
                      Sites & Périmètres d'Intervention :
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {client.sitesOrBarges.map((site, i) => (
                        <span 
                          key={i} 
                          className="inline-block px-2.5 py-0.5 rounded-md bg-neutral-soft text-neutral-700 text-[11px] font-medium border border-neutral-border/60"
                        >
                          {site}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlight Box */}
              <div className="mt-4 pt-3.5 border-t border-neutral-border/80">
                <div className="text-[11px] text-primary-900 bg-primary-50/80 p-3 rounded-2xl border border-primary-100 font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <span className="leading-snug">{client.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
