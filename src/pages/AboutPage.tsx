import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Clock, 
  Target, 
  Leaf, 
  PhoneCall, 
  Mail, 
  CheckCircle2, 
  Flame, 
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

const ABOUT_SLIDES = [
  {
    id: 1,
    tag: 'HISTOIRE & VISION D’ENTREPRISE',
    title: 'L’Excellence Opérationnelle QHSE en République du Congo',
    subtitle: 'Depuis 2008, partenaire de confiance des multinationales pétrolières, maritimes, agroalimentaires et industrielles.',
    image: '/images/hero/hero_offshore_qhse.jpg'
  },
  {
    id: 2,
    tag: 'RIGUEUR SCIENTIFIQUE & SÉCURITÉ',
    title: 'Des Normes Internationales au Cœur de nos Protocoles',
    subtitle: 'Conformité HACCP, OMS et habilitations ATEX/BOSIET pour des interventions sans compromis sur la sécurité.',
    image: '/images/expertises/exp_snake_fumigation.jpg'
  },
  {
    id: 3,
    tag: 'RÉACTIVITÉ & ASTREINTE 24/7',
    title: 'Une Base Stratégique à Pointe-Noire',
    subtitle: 'Mobilisation immédiate de nos techniciens et ingénieurs pour protéger vos installations terrestres et maritimes.',
    image: '/images/sectors/sec_port_logistics.jpg'
  }
];

export const AboutPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ABOUT_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const milestones = [
    {
      year: '2008',
      title: 'Création à Pointe-Noire',
      desc: 'Immatriculation officielle au RCCM de Pointe-Noire et lancement des premiers contrats de dératisation et désinsectisation pour le secteur tertiaire.'
    },
    {
      year: '2012',
      title: 'Expansion Industrielle & BTP',
      desc: 'Développement du pôle Assainissement industriel et vidange de fosses septiques pour les chantiers et bases logistiques.'
    },
    {
      year: '2016',
      title: 'Agrément Offshore & ATEX',
      desc: 'Certification des équipes aux standards pétroliers (BOSIET/HUET) et début des interventions sur barges et sites isolés (déserpentisation).'
    },
    {
      year: 'Aujourd’hui',
      title: 'Leader Intégré des Services QHSE',
      desc: 'Partenaire référencé dans les Vendor Lists de Total E&P, Newrest, Carroil et Mafricom avec traçabilité FDS systématique.'
    }
  ];

  const coreValues = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: 'Sécurité Absolue (Zéro Incident)',
      desc: 'Application stricte des règles de sécurité industrielle, port des EPI adaptés et habilitations ATEX pour milieux confinés.'
    },
    {
      icon: <Award className="w-6 h-6 text-primary-500" />,
      title: 'Molécules Homologuées & FDS',
      desc: 'Utilisation exclusive de produits certifiés par le Ministère de la Santé et l’OMS, avec fiches de données de sécurité remises au client.'
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: 'Astreinte & Réactivité 24/7',
      desc: 'Délai d’engagement d’urgence sous 2 heures sur toute la région de Pointe-Noire et le Kouilou pour les risques sanitaires critiques.'
    },
    {
      icon: <Leaf className="w-6 h-6 text-teal-500" />,
      title: 'Responsabilité Environnementale',
      desc: 'Dosages raisonnés, gestion écologique des déchets chimiques et respect scrupuleux des écosystèmes côtiers et forestiers.'
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-12">
      
      {/* 3-Slide Hero Banner */}
      <section className="relative text-white py-16 sm:py-24 border-b border-primary-500/40 overflow-hidden bg-dark">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {ABOUT_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out ${
                  index === currentSlide ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          ))}

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/65 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50 z-10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-15 z-10" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl text-center sm:text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-wider mb-3.5 border border-primary-400/30 backdrop-blur-sm">
              <Building2 className="w-3.5 h-3.5 text-primary-400" />
              <span>{ABOUT_SLIDES[currentSlide].tag}</span>
            </div>

            {/* Dynamic Title */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight min-h-[70px] sm:min-h-[85px] transition-all duration-500">
              {ABOUT_SLIDES[currentSlide].title}
            </h1>

            {/* Dynamic Subtitle */}
            <p className="text-sm sm:text-base text-neutral-200 max-w-2xl mt-2 leading-relaxed min-h-[48px] transition-all duration-500">
              {ABOUT_SLIDES[currentSlide].subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-6">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-industrial-copper active:scale-95"
              >
                <Briefcase className="w-4 h-4" />
                <span>Demander notre Dossier d'Agrément</span>
              </Link>

              <a 
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wider border border-white/20 transition-all backdrop-blur-sm"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>{COMPANY_INFO.phones[0].number}</span>
              </a>
            </div>

          </div>

          {/* 3 Indicators */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">+15 Ans d'Expérience</span>
                <span className="text-neutral-400 text-[11px]">Créée et immatriculée en 2008</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-primary-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">100% Conformité QHSE</span>
                <span className="text-neutral-400 text-[11px]">Agréments ministériels & FDS</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Flame className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Secteurs Sensibles</span>
                <span className="text-neutral-400 text-[11px]">Pétrole, Maritime, Agroalimentaire</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Story & Company Presentation */}
      <section className="py-12 sm:py-16 bg-white border-b border-neutral-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider border border-primary-200">
                <Target className="w-3.5 h-3.5 text-primary-500" />
                <span>Notre Vocation & Identité</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-dark tracking-tight leading-tight">
                Une Expertise Technique Forgée par les Exigences des Grands Comptes
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Fondée à Pointe-Noire en 2008, <strong>EXCELLENT SERVICES S.A.R.L.</strong> s’est imposée comme un acteur incontournable de l’assainissement spécialisé, de la désinfection et du traitement 3D (Dératisation, Désinsectisation, Désinfection) en République du Congo.
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Face aux contraintes climatiques équatoriales et aux exigences QHSE strictes des opérateurs pétroliers, logistiques et hôteliers, nous déployons des protocoles certifiés, du matériel industriel de pointe et des molécules à haute rémanence respectueuses de l’homme et de l’environnement.
              </p>

              {/* Stat Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-neutral-soft border border-neutral-border text-center">
                  <div className="font-heading font-extrabold text-xl sm:text-2xl text-primary-600">2008</div>
                  <div className="text-[10px] text-neutral-500 uppercase font-bold mt-0.5">Année de Création</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-soft border border-neutral-border text-center">
                  <div className="font-heading font-extrabold text-xl sm:text-2xl text-emerald-600">+50</div>
                  <div className="text-[10px] text-neutral-500 uppercase font-bold mt-0.5">Sites Sécurisés</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-soft border border-neutral-border text-center col-span-2 sm:col-span-1">
                  <div className="font-heading font-extrabold text-xl sm:text-2xl text-amber-600">24/7</div>
                  <div className="text-[10px] text-neutral-500 uppercase font-bold mt-0.5">Astreinte Congo</div>
                </div>
              </div>

            </div>

            {/* Legal / Corporate Profile Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-dark to-dark-card text-white rounded-3xl p-6 sm:p-7 border border-primary-500/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-dark-border">
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-primary-300 px-2 py-0.5 rounded bg-primary-500/20 border border-primary-400/30">
                  Fiche Juridique Officielle
                </span>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Vendor List Ready</span>
                </span>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  {COMPANY_INFO.legalName}
                </h3>
                <p className="text-xs text-neutral-300 mt-0.5">
                  Société à Responsabilité Limitée de droit congolais
                </p>
              </div>

              <div className="space-y-2 text-xs border-y border-dark-border py-3">
                <div className="flex justify-between items-center text-neutral-300">
                  <span className="text-neutral-400">RCCM :</span>
                  <span className="font-mono text-white font-bold bg-white/10 px-2 py-0.5 rounded">{COMPANY_INFO.rccm}</span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span className="text-neutral-400">NIU :</span>
                  <span className="font-mono text-white font-bold bg-white/10 px-2 py-0.5 rounded">{COMPANY_INFO.niu}</span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span className="text-neutral-400">Siège Social :</span>
                  <span className="text-white font-semibold">{COMPANY_INFO.city}, Rép. du Congo</span>
                </div>
                <div className="flex justify-between items-center text-neutral-300">
                  <span className="text-neutral-400">Adresse :</span>
                  <span className="text-white font-medium">{COMPANY_INFO.address}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contacter la Direction Commerciale</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-12 sm:py-16 bg-neutral-soft/50 border-b border-neutral-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary-700 text-xs font-bold uppercase tracking-wider border border-primary-200 mb-2 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-primary-500" />
              <span>Nos Engagements QHSE</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark tracking-tight">
              Les 4 Piliers de notre Rigueur Opérationnelle
            </h2>
            <p className="text-xs sm:text-sm text-neutral-muted mt-1.5">
              Chaque contrat est régi par des engagements fermes sur la sécurité, la santé et le respect environnemental.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-neutral-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="p-3 rounded-2xl bg-neutral-soft w-fit border border-neutral-border">
                  {val.icon}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-heading font-bold text-sm text-dark">{val.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-12 sm:py-16 bg-white border-b border-neutral-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider border border-primary-200 mb-2">
              <Clock className="w-3.5 h-3.5 text-primary-500" />
              <span>Notre Historique</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark tracking-tight">
              15 Années de Développement Continu
            </h2>
          </div>

          <div className="space-y-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-neutral-soft/60 border border-neutral-border flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all hover:bg-white hover:shadow-xs"
              >
                <div className="px-3.5 py-2 rounded-2xl bg-dark text-white font-mono font-extrabold text-sm sm:text-base border border-primary-500/40 flex-shrink-0">
                  {m.year}
                </div>
                <div className="flex-1 space-y-0.5">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-dark">{m.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to action footer banner */}
      <section className="py-12 bg-gradient-to-r from-dark to-dark-card text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Besoin d’intégrer notre entreprise à votre Vendor List ?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
            Contactez notre direction pour recevoir notre dossier administratif complet (RCCM, NIU, attestations CNSS, FDS et agréments ministériels).
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              <span>Contacter la Direction QHSE</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wider border border-white/20 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>{COMPANY_INFO.phones[0].number}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
