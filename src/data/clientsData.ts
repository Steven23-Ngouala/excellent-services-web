import { ClientReference } from '../types';

export const CLIENTS_DATA: ClientReference[] = [
  {
    id: 'total-ep-congo',
    name: 'Total E&P Congo',
    category: 'oil-gas',
    scope: 'Traitement 3D, Déserpentisation, Nettoyage de Bâches à eau & Espaces verts',
    sitesOrBarges: [
      'Terminal Pétrolier de Djéno',
      'Base Industrielle Pointe-Noire',
      'Champ Offshore Nkossa (Barges & FPU)',
      'Site Alima & Moho Nord',
      'Bases-vie & Villas de cadres'
    ],
    logoText: 'TOTAL E&P CONGO',
    highlight: 'Contrat pluriannuel de maintenance hygiène 3D et sécurisation des sites pétroliers majeurs.'
  },
  {
    id: 'newrest-congo',
    name: 'Newrest Congo',
    category: 'catering',
    scope: 'Désinsectisation HACCP, Dératisation de précision & Désinfection continue',
    sitesOrBarges: [
      'Barge Likouf',
      'Barge Halani 1',
      'Cuisine Centrale & Entrepôts frigorifiques',
      'Camps de vie Onshore'
    ],
    logoText: 'NEWREST CONGO',
    highlight: 'Maintien du niveau d’infestation zéro dans le respect strict du référentiel HACCP international.'
  },
  {
    id: 'carroil',
    name: 'Carroil Logistics & Services',
    category: 'industry',
    scope: 'Fumigation de conteneurs, Dératisation des hangars de stockage & Curage',
    sitesOrBarges: [
      'Parc à conteneurs Zone Portuaire',
      'Ateliers mécaniques lourds',
      'Magasins de transit'
    ],
    logoText: 'CARROIL',
    highlight: 'Protection des flux logistiques maritimes et des zones de stockage sous douane.'
  },
  {
    id: 'mafricom',
    name: 'Mafricom Congo',
    category: 'commercial',
    scope: 'Dératisation des entrepôts d’alimentation générale & Désinsectisation',
    sitesOrBarges: [
      'Entrepôts logistiques de gros',
      'Supermarchés & Points de vente',
      'Flotte de transport'
    ],
    logoText: 'MAFRICOM CONGO',
    highlight: 'Contrôle strict des denrées alimentaires et prévention des pertes de marchandises.'
  },
  {
    id: 'cliniques-sante',
    name: 'Cliniques & Établissements Hospitaliers',
    category: 'health',
    scope: 'Bactéricidie, Désinfection chirurgicale, Bâches d’eau médicale',
    sitesOrBarges: [
      'Blocs opératoires',
      'Salles d’hospitalisation & Maternités',
      'Laboratoires d’analyses médicales'
    ],
    logoText: 'SECTEUR MÉDICAL POINTE-NOIRE',
    highlight: 'Protocoles de bio-nettoyage et désinfection à très haut niveau d’exigence sanitaire.'
  },
  {
    id: 'residences-consulats',
    name: 'Ensembles Résidentiels & Missions Diplomatiques',
    category: 'commercial',
    scope: 'Déserpentisation périmétrique, Entretien d’espaces verts & Traitement 3D',
    sitesOrBarges: [
      'Résidences diplomatiques',
      'Complexes résidentiels expatriés',
      'Hôtels 4 et 5 étoiles'
    ],
    logoText: 'HÔTELLERIE & RÉSIDENTIEL VIP',
    highlight: 'Discrétion, réactivité et utilisation de produits inodores certifiés.'
  }
];
