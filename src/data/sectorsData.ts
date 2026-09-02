import { Sector } from '../types';

export const SECTORS_DATA: Sector[] = [
  {
    id: 'oil-and-gas',
    name: 'Pétrole, Gaz & Offshore',
    subtitle: 'Milieux à hauts risques, normes ATEX & plateformes en mer',
    description: 'Interventions spécialisées sur terminaux pétroliers, barges de forage, FPSO et bases industrielles. Respect draconien des plans de prévention, permis de travail (PTW), FDS et habilitations offshore.',
    challenges: [
      'Contraintes ATEX (absence d’étincelles, matériel antidéflagrant)',
      'Accès difficile et isolement géographique en mer',
      'Risques herpétologiques (serpents dangereux) sur les bases forestières et forages terrestres',
      'Exigence de zéro incident et zéro arrêt de production'
    ],
    solutions: [
      'Techniciens formés BOSIET/HUET et habilités ATEX',
      'Dératisation et désinsectisation sans coupure des opérations',
      'Barrières répulsives déserpentisation autour des têtes de puits et dortoirs',
      'Nettoyage périodique et désinfection certifiée des citernes d’eau potable'
    ],
    iconName: 'Flame',
    standardCompliance: 'ISO 14001, ISO 45001 & Référentiels Majeurs Pétroliers'
  },
  {
    id: 'catering-food',
    name: 'Restauration Collective & Agroalimentaire',
    subtitle: 'Conformité HACCP & Hygiène alimentaire irréprochable',
    description: 'Accompagnement des traiteurs industriels, cuisines centrales, cantines de chantier et usines de transformation pour garantir une hygiène absolue et le respect strict du paquet hygiène.',
    challenges: [
      'Tolérance zéro pour les blattes germaniques et les rongeurs',
      'Interdiction formelle de contamination chimique des denrées alimentaires',
      'Audits sanitaires inopinés des clients donneurs d’ordre'
    ],
    solutions: [
      'Gels d’appâtage spécifiques sans pulvérisation en zone de préparation',
      'Postes d’appâtage raticides hermétiques et inviolables numérotés',
      'Planches de glu et désinsectiseurs UV de monitoring des insectes volants',
      'Cahier de passage et fiches de traçabilité HACCP systématiques'
    ],
    iconName: 'Utensils',
    standardCompliance: 'Normes HACCP, Codex Alimentarius & Arrêtés Sanitaires'
  },
  {
    id: 'maritime-logistics',
    name: 'Logistique, Conteneurs & Milieu Portuaire',
    subtitle: 'Protection des flux maritimes, entrepôts & conteneurs',
    description: 'Sécurisation phytosanitaire des conteneurs à l’embarquement, traitement des cales de navires au Port Autonome de Pointe-Noire, et désinfection des hangars de stockage de fret.',
    challenges: [
      'Prolifération rapide des ravageurs dans les cargaisons de bois et de grains',
      'Exigences douanières et normes phytosanitaires internationales à l’export',
      'Grands volumes à traiter sous des délais d’escale très courts'
    ],
    solutions: [
      'Fumigation sous bâche étanche certifiée ISPM 15 / NIMP 15',
      'Démoustication et dératisation continue des parcs à conteneurs',
      'Délivrance expresse des certificats de fumigation et de dératisation maritime',
      'Équipements de protection respiratoire autonome pour cales de navires'
    ],
    iconName: 'Anchor',
    standardCompliance: 'ISPM 15 / OMI / Règlement Sanitaire International (RSI)'
  },
  {
    id: 'healthcare',
    name: 'Santé & Établissements Médicaux',
    subtitle: 'Bio-décontamination, blocs opératoires & laboratoires',
    description: 'Protocoles de désinfection de haut niveau pour détruire les bactéries multirésistantes (BMR), virus et champignons dans les structures de soins et dispensaires pétroliers.',
    challenges: [
      'Prévention des infections nosocomiales',
      'Environnement stérile sans résidus toxiques agressifs',
      'Traitement délicat des équipements médicaux sensibles'
    ],
    solutions: [
      'Désinfection des surfaces par voie aérienne (DSVA) certifiée EN 14476',
      'Nettoyage et chloration microbiologique des réservoirs d’eau médicale',
      'Lutte antiparasitaire avec produits inodores et hypoallergéniques',
      'Rapports de bio-nettoyage remis au comité d’hygiène hospitalière'
    ],
    iconName: 'HeartPulse',
    standardCompliance: 'Normes EN 14476, EN 1276, EN 1650 & Recommandations OMS'
  },
  {
    id: 'hospitality-residential',
    name: 'Hôtellerie, Tertiaire & Résidentiel de Standing',
    subtitle: 'Bureaux, sièges sociaux, résidences VIP & hôtels',
    description: 'Services sur-mesure d’entretien paysager, de désinsectisation discrète et d’assainissement pour maintenir un cadre de travail et de vie prestigieux.',
    challenges: [
      'Nécessité de discrétion absolue sans perturbation des occupants ou clients',
      'Traitement rapide des punaises de lit dans les chambres d’hôtel',
      'Maintien d’espaces verts impeccables toute l’année'
    ],
    solutions: [
      'Interventions en horaires décalés (nocturne ou week-end)',
      'Équipes en uniforme soigné avec badge professionnel identifié',
      'Traitements thermiques et chimiques ciblés contre les punaises de lit',
      'Contrats annuels clés en main avec astreinte prioritaire'
    ],
    iconName: 'Building2',
    standardCompliance: 'Standards Hôteliers 4-5 Étoiles & Démarches RSE'
  }
];
