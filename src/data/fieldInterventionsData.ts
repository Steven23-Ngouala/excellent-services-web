export interface FieldIntervention {
  id: string;
  title: string;
  category: '3d' | 'snake' | 'office' | 'water';
  categoryLabel: string;
  location: string;
  clientType: string;
  image: string;
  equipment: string;
  safetyLevel: string;
  summary: string;
  keyPoints: string[];
  metrics: { label: string; value: string }[];
  facebookVideoPrompt: string;
}

export const FIELD_INTERVENTIONS: FieldIntervention[] = [
  {
    id: 'nebulisation-entrepot-3d',
    title: 'Thermonébulisation & Dératisation d’Entrepôts Logistiques',
    category: '3d',
    categoryLabel: 'Lutte Antiparasitaire (3D)',
    location: 'Zone Portuaire & Industrielle, Pointe-Noire',
    clientType: 'Bases logistiques, dépôts de fret & terminaux conteneurs',
    image: '/images/interventions/field_3d_nebulization.jpg',
    equipment: 'Thermonébulisateur PulsFOG & Pulvérisateurs haute pression',
    safetyLevel: 'EPI Niveau 3 (Combinaison étanche, masque respiratoire cartouche ABEK)',
    summary: 'Traitement curatif et préventif contre les ravageurs de stocks, rongeurs et insectes volants dans des volumes industriels jusqu’à 15 000 m³.',
    keyPoints: [
      'Brouillard thermique à pénétration totale dans les interstices inaccessibles',
      'Pose de postes d’appâtage sécurisés numérotés avec plan de masse',
      'Délivrance immédiate du certificat 3D et des Fiches de Données de Sécurité (FDS)'
    ],
    metrics: [
      { label: 'Efficacité', value: '100%' },
      { label: 'Délai d’action', value: '< 2h' },
      { label: 'Agrément', value: 'Ministère' }
    ],
    facebookVideoPrompt: 'Démonstration vidéo du brouillard thermique en entrepôt'
  },
  {
    id: 'deserpentisation-site-petrolier',
    title: 'Déserpentisation & Barrière Répulsive Périmétrique',
    category: 'snake',
    categoryLabel: 'Sécurité Industrielle & ATEX',
    location: 'Sites Onshore & Terminaux Pétroliers, Congo',
    clientType: 'Compagnies pétrolières, bases de vie & chantiers BTP',
    image: '/images/interventions/field_snake_repellent.jpg',
    equipment: 'Épandage mécanique, répulsifs agréés non toxiques pour le personnel',
    safetyLevel: 'Habilitation ATEX / Gants anti-perforation / Pince de capture herpétologique',
    summary: 'Sécurisation anti-reptiles et anti-venimeux autour des clôtures, têtes de puits et bases-vie pour éliminer tout risque d’envenimation des équipes.',
    keyPoints: [
      'Établissement d’un cordon répulsif hermétique et durable sur 3 à 5 mètres de large',
      'Inspection herpétologique diurne et nocturne des zones de stockage et tuyauteries',
      'Sensibilisation des superviseurs HSE aux gestes de premiers secours et identification'
    ],
    metrics: [
      { label: 'Protection', value: '90 jours' },
      { label: 'Risque Morsure', value: '0 Incident' },
      { label: 'Écologique', value: 'Norme CE' }
    ],
    facebookVideoPrompt: 'Application de la barrière anti-reptiles en zone industrielle'
  },
  {
    id: 'desinfection-bureaux-haccp',
    title: 'Brumisation ULV & Bio-Nettoyage de Sièges Sociaux & Bureaux',
    category: 'office',
    categoryLabel: 'Hygiène des Locaux & Tertiaire',
    location: 'Centre-Ville & Plateaux Administratifs, Pointe-Noire',
    clientType: 'Banques, directions générales, cabinets d’audit et sièges d’entreprises',
    image: '/images/interventions/field_office_disinfection.jpg',
    equipment: 'Nébuliseur électrique ULV (Ultra Bas Volume) à micro-gouttelettes',
    safetyLevel: 'Produits bactéricides, virucides et fongicides conformes EN 14476',
    summary: 'Désinfection intégrale des surfaces de travail, salles de réunion climatisées et claviers sans laisser de résidus humides sur les équipements électroniques.',
    keyPoints: [
      'Micro-diffusion à froid permettant une réintégration des locaux sous 1 heure',
      'Élimination à 99,99% des germes, bactéries et allergènes en suspension',
      'Planification en horaires décalés (nocturne ou week-end) pour continuité d’activité'
    ],
    metrics: [
      { label: 'Réintégration', value: '1 Heure' },
      { label: 'Spectre Virucide', value: 'EN 14476' },
      { label: 'Résidu électronique', value: 'Zéro' }
    ],
    facebookVideoPrompt: 'Brumisation ULV sans risque pour le matériel informatique'
  },
  {
    id: 'nettoyage-bache-eau-potable',
    title: 'Curage, Détartrage & Désinfection de Bâches à Eau Industrielles',
    category: 'water',
    categoryLabel: 'Assainissement & Eau Potable',
    location: 'Complexes Agroalimentaires & Usines, Pointe-Noire',
    clientType: 'Hôtellerie, bases de vie, cliniques, industries agroalimentaires',
    image: '/images/interventions/field_water_sanitation.jpg',
    equipment: 'Nettoyeur haute pression 200 bars, trépied d’accès confiné, détecteur 4 gaz',
    safetyLevel: 'Habilitation Espace Confiné (CATEC) + Désinfection chlorée agréée santé publique',
    summary: 'Vidange, élimination des boues et biofilms, traitement de choc bactéricide et remise en service avec contrôle de potabilité physico-chimique.',
    keyPoints: [
      'Évacuation sécurisée des sédiments et décapage mécanique des parois béton/inox',
      'Désinfection microbiologique de choc selon les recommandations OMS pour l’eau potable',
      'Délivrance du certificat d’assainissement et du rapport d’analyse avant mise en eau'
    ],
    metrics: [
      { label: 'Pression Jet', value: '200 Bars' },
      { label: 'Qualité Eau', value: 'Norme OMS' },
      { label: 'Certification', value: 'Analyses Labo' }
    ],
    facebookVideoPrompt: 'Curage haute pression et désinfection d’un réservoir de 50 000L'
  }
];

export const FACEBOOK_REELS_SPOTLIGHT = [
  {
    id: 'reel-1',
    title: 'Thermonébulisation en Hangar Logistique',
    duration: '0:45',
    views: '1.2k',
    description: 'Immersion au cœur d’une désinsectisation par brouillard thermique dans un grand entrepôt sous douane.',
    category: 'Traitement 3D',
    url: 'https://www.facebook.com/servicesexcellen/'
  },
  {
    id: 'reel-2',
    title: 'Sécurisation Anti-Serpents sur Base Vie',
    duration: '0:58',
    views: '950',
    description: 'Pose méthodique d’une barrière répulsive en granulés le long du périmètre clôturé pour protéger le personnel.',
    category: 'Déserpentisation',
    url: 'https://www.facebook.com/servicesexcellen/'
  },
  {
    id: 'reel-3',
    title: 'Désinfection ULV de Salles de Conférence',
    duration: '0:35',
    views: '1.8k',
    description: 'Traitement virucide de fin de semaine dans les bureaux de direction avec remise en service express.',
    category: 'Hygiène Bureaux',
    url: 'https://www.facebook.com/servicesexcellen/'
  },
  {
    id: 'reel-4',
    title: 'Nettoyage & Désinfection d’une Réserve d’Eau',
    duration: '1:12',
    views: '2.1k',
    description: 'Hydro-curage à 200 bars des parois d’une bâche industrielle de 50m³ avant analyse de potabilité.',
    category: 'Assainissement',
    url: 'https://www.facebook.com/servicesexcellen/'
  }
];
