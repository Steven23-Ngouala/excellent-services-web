import { ExpertisePole } from '../types';

export const EXPERTISES_DATA: ExpertisePole[] = [
  {
    id: '3d-pest-control',
    code: 'POL-3D',
    title: 'Lutte Antiparasitaire (Traitement 3D)',
    shortDescription: 'Dératisation de haute précision, Désinsectisation ciblée et Désinfection virucide/bactéricide aux normes internationales.',
    iconName: 'ShieldAlert',
    accentColor: '#8E351C',
    heroBadge: 'Certifié Hygiène Industrielle & HACCP',
    keyBenefits: [
      'Éradication totale sans interruption des activités opérationnelles',
      'Postes d’appâtage sécurisés, étiquetés et géoréférencés',
      'Molécules rémanentes non toxiques pour le personnel après réintégration',
      'Rapports d’intervention et certificats de salubrité conformes aux audits'
    ],
    subServices: [
      {
        id: 'deratisation',
        name: 'Dératisation de Haute Précision',
        tagline: 'Contrôle et éradication des rongeurs (Rats noirs, Surmulots, Souris)',
        description: 'Mise en place d’un dispositif hermétique de lutte contre les rongeurs nuisibles. Implantation de postes d’appâtage sécurisés inviolables avec raticides anticoagulants haute appétence (Vertox, blocs hydrofuges paraffinés pour zones humides et industrielles).',
        targetPestsOrScope: ['Rattus norvegicus (Rat d’égout)', 'Rattus rattus (Rat noir)', 'Mus musculus (Souris domestique)'],
        protocolSteps: [
          'Audit préliminaire des voies de pénétration et des zones de nidification',
          'Cartographie et installation des boîtes d’appâtage numérotées',
          'Suivi de consommation périodique et réapprovisionnement',
          'Ramassage sécurisé des cadavres et désinfection des galeries'
        ],
        moleculesAndEquipment: ['Vertox Blocs Paraffinés (Brodifacoum/Bromadiolone)', 'Boîtes d’appâtage sécurisées verrouillées à clé', 'Plaques de glu de monitoring'],
        safetyAndFds: 'Fiches de Données de Sécurité (FDS) remises au responsable QHSE. Antidote spécifique (Vitamine K1) consigné.',
        certification: 'Conforme aux standards industriels pétroliers et normes HACCP'
      },
      {
        id: 'desinsectisation',
        name: 'Désinsectisation Ciblée & Éradication',
        tagline: 'Traitement curatif et préventif des insectes rampants et volants',
        description: 'Traitement par pulvérisation résiduelle à basse pression, gel d’appâtage discret ou thermonébulisation ULV (Ultra Low Volume). Ciblage spécifique des blattes germaniques/américaines, fourmis, moustiques vecteurs de maladies, termites et punaises de lit.',
        targetPestsOrScope: ['Blattella germanica (Cafards)', 'Anopheles / Aedes (Moustiques)', 'Termites du bois d’œuvre', 'Punaises de lit'],
        protocolSteps: [
          'Inspection approfondie des zones chaudes, humides et moteurs électriques',
          'Application de gel appât spécifique sans odeur en cuisine et bureaux',
          'Pulvérisation péri-murale de pyréthrinoïdes de synthèse rémanents',
          'Nébulisation spatiale pour les faux-plafonds et gaines techniques'
        ],
        moleculesAndEquipment: ['Deltaméthrine 2.5 EC', 'Cyperméthrine Micro-encapsulée', 'Atomiseurs thermiques Stihl SR450', 'Nébuliseurs électriques ULV'],
        safetyAndFds: 'Délai de réentrée respecté (2h à 4h). Produits biodégradables à faible toxicité mammifère.',
        certification: 'Homologation Ministère de la Santé & OMS (WHO-PQ)'
      },
      {
        id: 'desinfection',
        name: 'Désinfection Virucide & Bactéricide',
        tagline: 'Décontamination biologique à large spectre (Bactéries, Virus, Champignons)',
        description: 'Désinfection intégrale des surfaces et de l’air ambiant par brumisation de désinfectants de grade médical et hospitalier. Idéal pour bases-vie, salles de contrôle, blocs sanitaires, cantines industrielles et cliniques.',
        targetPestsOrScope: ['Coronavirus & Virus enveloppés', 'Staphylocoques & Entérobactéries', 'Moisissures et spores fongiques'],
        protocolSteps: [
          'Nettoyage mécanique préalable des surfaces encrassées',
          'Brumisation à froid par micro-gouttelettes (10 à 30 microns)',
          'Temps de contact certifié (15 à 30 minutes)',
          'Délivrance de l’attestation de décontamination biologique'
        ],
        moleculesAndEquipment: ['Composés d’ammonium quaternaire de 5e génération', 'Peroxyde d’hydrogène stabilisé', 'Générateurs d’aérosols pulsés'],
        safetyAndFds: 'Non corrosif pour les équipements électroniques sous réserve de protocole sec.',
        certification: 'Normes EN 14476 (Virucide), EN 1276 (Bactéricide)'
      }
    ]
  },
  {
    id: 'specialized-interventions',
    code: 'POL-SPEC',
    title: 'Interventions Spécialisées & Sécurité Périmétrique',
    shortDescription: 'Déserpentisation périmétrique des sites isolés, Fumigation industrielle maritime et Démoustication d’envergure.',
    iconName: 'AlertTriangle',
    accentColor: '#B85D41',
    heroBadge: 'Protection Périmétrique & Milieux Hostiles',
    keyBenefits: [
      'Neutralisation des risques d’envenimation en zone forestière et pétrolière',
      'Barrières répulsives minérales et olfactives durables (résistantes aux pluies tropicales)',
      'Traitement sous bâches de conteneurs à l’export et cales de navires',
      'Équipes équipées de pinces de contention et sérums anti-venimeux d’urgence'
    ],
    subServices: [
      {
        id: 'deserpentisation',
        name: 'Déserpentisation Sécurisée & Barrière Répulsive',
        tagline: 'Protection des bases-vie, forages et installations contre les reptiles dangereux',
        description: 'Établissement d’un cordon sanitaire répulsif autour des bâtiments, ateliers et zones de vie. Capture sécurisée des spécimens présents (Cobras, Vipères du Gabon, Mambas, Pythons) et traitement répulsif des pourtours.',
        targetPestsOrScope: ['Bitis gabonica (Vipère du Gabon)', 'Naja melanoleuca (Cobra noir)', 'Dendroaspis (Mamba)', 'Reptiles divers'],
        protocolSteps: [
          'Débroussaillage et élimination des abris de chasse (tôles, gravats)',
          'Pose d’une barrière répulsive granuleuse sur le périmètre clôturé',
          'Application de solutions répulsives liquides sur les seuils et aérations',
          'Sensibilisation du personnel aux conduites à tenir en cas de rencontre'
        ],
        moleculesAndEquipment: ['Répulsifs soufrés et aromatiques naturels certifiés', 'Pinces herpétologiques professionnelles de 1.5m', 'Sacs de transport sécurisés'],
        safetyAndFds: 'Produits respectueux de la faune non-cible et des sols.',
        certification: 'Protocole validé pour chantiers E&P Onshore / Forage'
      },
      {
        id: 'fumigation',
        name: 'Fumigation Industrielle & Maritime',
        tagline: 'Traitement des conteneurs, stocks de bois, cales et silos',
        description: 'Fumigation hermétique par gaz pénétrant pour l’éradication totale des insectes xylophages, charançons et larves dans les cargaisons de bois, denrées stockées et conteneurs maritimes d’import/export.',
        targetPestsOrScope: ['Insectes xylophages', 'Charançons des grains', 'Capricornes', 'Nuisibles de quarantaine'],
        protocolSteps: [
          'Vérification de l’étanchéité sous bâche polyéthylène haute résistance',
          'Injection contrôlée du gaz selon dosage volumétrique précis',
          'Période de maintien sous gaz sous surveillance continue des fuites',
          'Dégazage contrôlé et délivrance du certificat phytosanitaire international'
        ],
        moleculesAndEquipment: ['Phosphure d’aluminium / Phosphine', 'Détecteurs de gaz Dräger et détecteurs à photo-ionisation', 'Masques complets à cartouche anti-gaz'],
        safetyAndFds: 'Périmètre de sécurité strict avec balisage réglementaire 24h/24.',
        certification: 'Conformité aux normes ISPM 15 / NIMP 15 et conventions maritimes OMI'
      },
      {
        id: 'demoustication-masse',
        name: 'Démoustication de Masse & Lutte Antivectorielle',
        tagline: 'Campagnes intensives de réduction du paludisme et de la dengue',
        description: 'Traitement combiné des gîtes larvaires (eaux stagnantes, caniveaux) et nébulisation spatiale adulticide pour réduire drastiquement la densité vectorielle sur les grands complexes industriels.',
        targetPestsOrScope: ['Anopheles gambiae (Vecteur Paludisme)', 'Aedes aegypti (Vecteur Dengue/Chikungunya)', 'Culex quinquefasciatus'],
        protocolSteps: [
          'Recensement cartographique des points d’eau et regards pluviaux',
          'Traitement larvicide biologique (Bacillus thuringiensis israelensis)',
          'Nébulisation thermique crépusculaire à l’atomiseur lourd',
          'Mesure de l’indice d’agressivité et contrôle de l’efficacité'
        ],
        moleculesAndEquipment: ['Bti (Larvicide sélectif)', 'Pyréthrinoïdes spatiaux', 'Canons nébuliseurs montés sur pick-up'],
        safetyAndFds: 'Inoffensif pour les poissons, batraciens et animaux domestiques.',
        certification: 'Conforme au Plan National de Lutte contre le Paludisme'
      }
    ]
  },
  {
    id: 'sanitation-water',
    code: 'POL-EAU',
    title: 'Assainissement & Traitement des Eaux',
    shortDescription: 'Nettoyage, désinfection et détartrage de bâches à eau potable, curage de fosses et hydrocurage.',
    iconName: 'Droplets',
    accentColor: '#2E7D32',
    heroBadge: 'Sécurité Sanitaire de l’Eau & Réseaux',
    keyBenefits: [
      'Eau potable saine et exempte de biofilm bactérien (Légionelle, E. Coli)',
      'Vidange et curage de fosses sans odeurs avec traitement enzymatique',
      'Camions hydrocureurs pour débouchage d’urgence des canalisations',
      'Analyses physico-chimiques et bactériologiques après intervention'
    ],
    subServices: [
      {
        id: 'baches-eau',
        name: 'Nettoyage & Désinfection de Bâches à Eau Potable',
        tagline: 'Châteaux d’eau, réservoirs enterrés, citernes alimentaires et piscines',
        description: 'Vidange, nettoyage haute pression des parois, décapage des dépôts calcaires et boues résiduelles, suivi d’une désinfection complète par chloration choc ou nébulisation de désinfectant alimentaire.',
        targetPestsOrScope: ['Biofilm bactérien', 'Boues et sédiments', 'Algues', 'Légionelles & Coliformes'],
        protocolSteps: [
          'Consignation et vidange sécurisée du réservoir',
          'Brossage mécanique et lavage haute pression des parois et radier',
          'Évacuation des résidus boueux et aspiration',
          'Désinfection chimique, rinçage contrôlé et remise en eau avec contrôle du chlore libre'
        ],
        moleculesAndEquipment: ['Hypochlorite de sodium de qualité alimentaire', 'Nettoyeurs haute pression 250 bars', 'Ventilateurs d’extraction pour espace confiné'],
        safetyAndFds: 'Intervention en espace confiné avec détecteur 4 gaz et harnais de sécurité.',
        certification: 'Conforme aux exigences sanitaires d’alimentation en eau potable (OMS)'
      },
      {
        id: 'curage-fosses',
        name: 'Curage & Vidange de Fosses Septiques',
        tagline: 'Fosses toutes eaux, dégraisseurs industriels et stations d’épuration',
        description: 'Pompage complet des matières de vidange, curage des fonds, débouchage des canalisations d’amenée et réensemencement bactérien pour restaurer l’activité biologique naturelle.',
        targetPestsOrScope: ['Boues de vidange', 'Graisses accumulées', 'Engorgements de réseaux'],
        protocolSteps: [
          'Aspiration puissante par camion citerne hydrocureur',
          'Nettoyage au jet haute pression des parois et des paniers dégraisseurs',
          'Inspection visuelle de l’état des cuves et regards',
          'Apport de bio-activateurs enzymatiques pour relance de la flore'
        ],
        moleculesAndEquipment: ['Camion hydrocureur combiné', 'Tuyaux d’aspiration semi-rigides haute résistance', 'Bio-activateurs enzymatiques'],
        safetyAndFds: 'Acheminement et dépotage des matières en centre de traitement agréé.',
        certification: 'Traçabilité environnementale et bordereau de suivi des déchets'
      }
    ]
  },
  {
    id: 'environment-green-spaces',
    code: 'POL-ENV',
    title: 'Environnement & Espaces Verts',
    shortDescription: 'Désherbage chimique contrôlé des zones ATEX, aménagement paysager et entretien de parcs industriels.',
    iconName: 'Trees',
    accentColor: '#2E7D32',
    heroBadge: 'Gestion Végétale & Sécurité Incendie',
    keyBenefits: [
      'Élimination du risque d’incendie sur zones pétrolières par désherbage total',
      'Maintien de la visibilité sécuritaire le long des clôtures et caméras CCTV',
      'Parcs industriels et consulaires impeccables et valorisés',
      'Matériel thermique professionnel et équipes autonomes'
    ],
    subServices: [
      {
        id: 'desherbage-atex',
        name: 'Désherbage Chimique Contrôlé (Zones ATEX & Industrielles)',
        tagline: 'Sous-stations électriques, parcs de stockage pétrolier et voies ferrées',
        description: 'Application raisonnée d’herbicides systémiques et rémanents pour neutraliser la repousse végétale dans les zones sensibles où les débroussailleuses mécaniques sont proscrites en raison du risque d’étincelles.',
        targetPestsOrScope: ['Graminées envahissantes', 'Adventices ligneuses', 'Plantes grimpantes sur clôtures'],
        protocolSteps: [
          'Analyse des conditions météorologiques (absence de vent et pluie)',
          'Pulvérisation ciblée à grosses gouttes pour éviter la dérive',
          'Création de zones coupe-feu stériles autour des bacs de stockage'
        ],
        moleculesAndEquipment: ['Herbicides non résiduels à pénétration foliaire', 'Pulvérisateurs à pression constante avec buses anti-dérive'],
        safetyAndFds: 'Port d’EPI complets (combinaisons chimiques, lunettes, gants nitrile).',
        certification: 'Conformité sécurité incendie des installations classées'
      },
      {
        id: 'entretien-paysager',
        name: 'Horticulture & Entretien des Parcs Industriels',
        tagline: 'Tonte, élagage de sécurité, débroussaillage et valorisation paysagère',
        description: 'Contrats réguliers d’entretien paysager pour sièges sociaux, bases-vie, résidences de cadres et emprises industrielles à Pointe-Noire.',
        targetPestsOrScope: ['Espaces verts d’entreprises', 'Haies de clôture', 'Arbres en surplomb de lignes'],
        protocolSteps: [
          'Tonte et bordurage au rototransmetteur',
          'Taille géométrique des haies et massifs ornementaux',
          'Élagage raisonné des branches menaçantes',
          'Évacuation immédiate des déchets verts'
        ],
        moleculesAndEquipment: ['Tondeuses autoportées', 'Débroussailleuses professionnelles', 'Taille-haies télescopiques'],
        safetyAndFds: 'Matériel insonorisé et respectueux des horaires de travail du site.',
        certification: 'Normes de propreté et esthétique environnementale'
      }
    ]
  },
  {
    id: 'qhse-supplies',
    code: 'POL-QHSE',
    title: 'Fournitures & Équipements QHSE',
    shortDescription: 'Vente et distribution de matériel professionnel de traitement, raticides certifiés et consommables hygiène.',
    iconName: 'PackageCheck',
    accentColor: '#1F1513',
    heroBadge: 'Équipements & Produits Homologués',
    keyBenefits: [
      'Fourniture de produits de marque déposée (Vertox, Deltaméthrine originale)',
      'Matériel de pulvérisation robuste garanti et pièces de rechange',
      'Livraison directe sur base industrielle ou chantier',
      'Assistance technique et formation à l’utilisation sécurisée'
    ],
    subServices: [
      {
        id: 'materiel-traitement',
        name: 'Matériel de Pulvérisation & Nébulisation',
        tagline: 'Atomiseurs, nébuliseurs ULV, pulvérisateurs et postes d’appâtage',
        description: 'Distribution d’équipements professionnels pour les départements hygiène internes des entreprises pétrolières, minières et agroalimentaires.',
        targetPestsOrScope: ['Équipements d’application', 'Consommables d’hygiène', 'EPI de protection chimique'],
        protocolSteps: [
          'Conseil technique selon les volumes et surfaces à traiter',
          'Vérification et test en atelier avant expédition',
          'Mise à disposition des notices et fiches techniques en français'
        ],
        moleculesAndEquipment: ['Atomiseurs à dos 2 temps', 'Nébuliseurs ULV 220V/Batterie', 'Boîtes d’appâtage raticides inviolables'],
        safetyAndFds: 'Matériel certifié CE / ISO.',
        certification: 'Garantie constructeur et support après-vente local'
      }
    ]
  }
];
