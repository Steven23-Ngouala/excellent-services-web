import { CaseStudy } from '../types';

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'barge-offshore-likouf',
    client: 'Catering International / Offshore Operator',
    sector: 'Offshore Pétrolier (Barge d’hébergement Likouf)',
    title: 'Campagne d’éradication 3D complète sans arrêt des rotations du personnel',
    challenge: 'Infestation sévère de blattes germaniques dans les cuisines et coursives d’une barge accueillant 180 agents offshore, avec interdiction d’utiliser des produits odorants ou inflammables à bord.',
    intervention: 'Déploiement d’un binôme certifié BOSIET. Traitement ciblé par gel appât de dernière génération haute appétence, nébulisation à froid ULV dans les faux plafonds et traitement des gaines de ventilation lors des créneaux de faible affluence.',
    result: '100% d’éradication constatée lors de l’audit de contrôle à J+14. Zéro perturbation de service pour le catering et zéro jour d’arrêt technique.',
    metrics: [
      { label: 'Taux de réduction des nuisibles', value: '100%' },
      { label: 'Temps d’arrêt des cuisines', value: '0 Heure' },
      { label: 'Score audit hygiène client', value: '98.5/100' }
    ],
    qhseBadge: 'Conformité Offshore & PTW Validée'
  },
  {
    id: 'terminal-djeno-serpents',
    client: 'Opérateur Pétrolier Majeur',
    sector: 'Terminal Pétrolier Onshore (Djéno)',
    title: 'Ceinture herpétologique & déserpentisation d’un parc de stockage de brut',
    challenge: 'Présence récurrente de serpents venimeux (Vipères du Gabon et Cobras cracheurs) à proximité des vannes manuelles et des zones de passage piétonnier en saison des pluies.',
    intervention: 'Débroussaillage contrôlé et mise en place d’un cordon sanitaire répulsif minéral sur 3 200 mètres linéaires de périmètre. Installation de balises d’information et formation flash des équipes de quart.',
    result: 'Zéro observation de reptiles dans les zones de travail durant les 6 mois consécutifs. Sécurisation intégrale des opérateurs de maintenance.',
    metrics: [
      { label: 'Périmètre sécurisé', value: '3.2 km' },
      { label: 'Incidents herpétologiques', value: '0 Incident' },
      { label: 'Durabilité de la barrière', value: '6 Mois' }
    ],
    qhseBadge: 'Permis de Travail Spécifique Milieu Sensible'
  },
  {
    id: 'bache-eau-clinique',
    client: 'Établissement de Santé & Bloc Chirurgical',
    sector: 'Secteur Hospitalier',
    title: 'Détartrage, curage et désinfection de bâches à eau potable de 150 m³',
    challenge: 'Contamination bactérienne constatée par biofilm dans les cuves d’alimentation principale alimentant la stérilisation et le bloc chirurgical.',
    intervention: 'Vidange par tronçon avec maintien d’un réseau de secours. Nettoyage hydrodynamique 250 bars, neutralisation chimique du biofilm, désinfection au chlore choc alimentaire et analyses bactériologiques en laboratoire accrédité.',
    result: 'Eau certifiée conforme aux normes d’eau de consommation humaine OMS. Rétablissement de l’alimentation en 24h chrono.',
    metrics: [
      { label: 'Capacité traitée', value: '150 m³' },
      { label: 'Conformité microbiologique', value: '100%' },
      { label: 'Délai d’exécution', value: '24 Heures' }
    ],
    qhseBadge: 'Certificat de Salubrité et d’Analyse d’Eau Délivré'
  }
];

export const FAQ_DATA = [
  {
    question: "Quelle est votre zone géographique d’intervention ?",
    answer: "Nous intervenons principalement sur Pointe-Noire, Brazzaville et l’ensemble des sites industriels onshore (Djéno, Tchimbamba, Malonda, Kouilou) et offshore (champs pétroliers en mer) de la République du Congo."
  },
  {
    question: "Fournissez-vous les Fiches de Données de Sécurité (FDS) et rapports post-intervention ?",
    answer: "Absolument. Chaque intervention fait systématiquement l’objet d’un dossier documentaire complet remis au responsable QHSE : FDS des produits appliqués, fiches techniques, certificats de traitement, cartographie des postes d’appâtage et recommandations préventives."
  },
  {
    question: "Vos techniciens disposent-ils des habilitations requises pour intervenir en milieu pétrolier et offshore ?",
    answer: "Oui. Nos techniciens sont formés aux exigences de sécurité industrielle, port des EPI complets, sensibilisation ATEX, procédures de permis de travail (PTW) et détiennent les habilitations nécessaires pour les opérations sur barges et plateformes pétrolières."
  },
  {
    question: "Quels sont vos délais d’intervention en cas d’urgence critique (ex: serpent signalé, rupture sanitaire) ?",
    answer: "Notre cellule d’astreinte est mobilisable 24h/24 et 7j/7. Pour les urgences critiques à Pointe-Noire, nous intervenons sous 1 à 2 heures après votre appel au +242 06 667 63 27."
  },
  {
    question: "Les produits utilisés présentent-ils un risque pour le personnel ou les denrées alimentaires ?",
    answer: "Nous utilisons exclusivement des molécules homologuées par les autorités sanitaires et l’OMS (WHO-PQ), avec des formulations ciblées (gels inodores, micro-encapsulations, raticides paraffinés sécurisés en boîtes verrouillées) conçues pour une efficacité maximale sans risque de contamination résiduelle."
  }
];
