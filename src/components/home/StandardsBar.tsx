import React from 'react';
import { 
  ShieldCheck, 
  Droplets, 
  Flame, 
  FileCheck2, 
  Award,
  Sparkles
} from 'lucide-react';

export const StandardsBar: React.FC = () => {
  const standards = [
    {
      id: 'haccp',
      badge: 'HACCP INTERNATIONAL',
      title: 'Sécurité Sanitaire & Alimentaire',
      desc: 'Protocoles conformes aux exigences strictes de la restauration collective, catering offshore et bases-vie.',
      icon: ShieldCheck,
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      id: 'oms',
      badge: 'DIRECTIVES OMS',
      title: 'Qualité & Potabilité de l’Eau',
      desc: 'Nettoyage, désinfection et analyses bactériologiques de bâches à eau selon les standards mondiaux de santé.',
      icon: Droplets,
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      id: 'atex',
      badge: 'STANDARDS ATEX 1 & 2',
      title: 'Milieux Pétroliers & Explosifs',
      desc: 'Habilitations spécifiques pour interventions sécurisées sur terminaux pétroliers, FPSO et zones à risque d’étincelle.',
      icon: Flame,
      color: 'text-primary-600 bg-primary-50 border-primary-200'
    },
    {
      id: 'gov',
      badge: 'AGRÉMENTS MINISTÉRIELS',
      title: 'Conformité Réglementaire Congo',
      desc: 'Enregistrement officiel RCCM 07 B 142 & NIU M2008110000448143 sous contrôle des normes environnementales nationales.',
      icon: FileCheck2,
      color: 'text-qhse-700 bg-qhse-50 border-qhse-200'
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-neutral-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-soft border border-neutral-border text-xs font-bold uppercase tracking-wider text-dark mb-2.5">
            <Award className="w-3.5 h-3.5 text-primary-500" />
            <span>Référentiels & Accréditations</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark tracking-tight">
            Des Normes Internationales au Service de vos Sites
          </h2>
          <p className="text-xs sm:text-sm text-neutral-muted mt-2">
            Chaque opération respecte rigoureusement les standards des donneurs d’ordre les plus exigeants de l'industrie pétrolière et maritime.
          </p>
        </div>

        {/* 4 Standard Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {standards.map((std) => {
            const Icon = std.icon;
            return (
              <div 
                key={std.id}
                className="p-5 rounded-2xl bg-neutral-soft/60 border border-neutral-border hover:border-primary-400 hover:bg-white transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`p-2.5 rounded-xl border ${std.color} group-hover:scale-105 transition-transform flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-dark border border-neutral-border shadow-2xs">
                      {std.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-sm text-dark group-hover:text-primary-600 transition-colors mb-1.5">
                    {std.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {std.desc}
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-neutral-border/60 flex items-center gap-1.5 text-[11px] font-bold text-qhse-700">
                  <Sparkles className="w-3.5 h-3.5 text-qhse-600 flex-shrink-0" />
                  <span>100% Traçabilité & Conformité</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
