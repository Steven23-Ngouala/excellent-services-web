import React from 'react';
import { ShieldCheck, Flame, Utensils, Anchor, Building, HeartPulse } from 'lucide-react';
import { CLIENTS_DATA } from '../../data/clientsData';

export const ClientTrustBar: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'oil-gas': return <Flame className="w-4 h-4 text-primary-500" />;
      case 'catering': return <Utensils className="w-4 h-4 text-amber-500" />;
      case 'industry': return <Anchor className="w-4 h-4 text-blue-500" />;
      case 'health': return <HeartPulse className="w-4 h-4 text-red-500" />;
      default: return <Building className="w-4 h-4 text-dark" />;
    }
  };

  return (
    <section id="references" className="py-16 sm:py-20 bg-neutral-soft border-y border-neutral-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-neutral-border text-xs font-bold uppercase tracking-wider text-primary-600 mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-primary-500" />
            <span>Références Industrielles & Grands Comptes</span>
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
              className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-border hover:border-primary-400 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-neutral-soft group-hover:bg-primary-50 transition-colors flex-shrink-0">
                      {getCategoryIcon(client.category)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-dark group-hover:text-primary-600 transition-colors">
                        {client.name}
                      </h3>
                      <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                        {client.category === 'oil-gas' ? 'Pétrole & Offshore' : client.category === 'catering' ? 'Catering & HACCP' : 'Industrie & Services'}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-qhse-50 text-qhse-700 border border-qhse-200">
                    Certifié
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-neutral-600">
                  <p className="line-clamp-2">{client.scope}</p>

                  <div className="pt-2 border-t border-neutral-border/60">
                    <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-1.5">
                      Sites & Unités :
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {client.sitesOrBarges.map((site, i) => (
                        <span 
                          key={i} 
                          className="inline-block px-2 py-0.5 rounded bg-neutral-soft text-neutral-600 text-[10px] font-medium border border-neutral-border/60"
                        >
                          {site}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 text-[11px] text-primary-800 bg-primary-50/70 p-2.5 rounded-xl border border-primary-100 font-medium">
                {client.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
