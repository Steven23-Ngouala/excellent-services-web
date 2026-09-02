export interface SubService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  targetPestsOrScope: string[];
  protocolSteps: string[];
  moleculesAndEquipment: string[];
  safetyAndFds: string;
  certification: string;
}

export interface ExpertisePole {
  id: string;
  code: string;
  title: string;
  shortDescription: string;
  iconName: string;
  accentColor: string;
  heroBadge: string;
  subServices: SubService[];
  keyBenefits: string[];
}

export interface ClientReference {
  id: string;
  name: string;
  category: 'oil-gas' | 'catering' | 'industry' | 'health' | 'commercial';
  scope: string;
  sitesOrBarges: string[];
  logoText: string;
  highlight: string;
}

export interface Sector {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  challenges: string[];
  solutions: string[];
  iconName: string;
  standardCompliance: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  title: string;
  challenge: string;
  intervention: string;
  result: string;
  metrics: { label: string; value: string }[];
  qhseBadge: string;
}

export interface DiagnosticState {
  establishmentType: string;
  nuisanceType: string;
  urgencyLevel: string;
  siteLocation: string;
  additionalDetails: string;
  contactName: string;
  contactCompany: string;
  contactPhone: string;
  contactEmail: string;
}

export interface QuoteCalculationState {
  services: string[];
  surfaceArea: string;
  frequency: 'one-shot' | 'monthly' | 'quarterly' | 'annual';
  environment: 'standard' | 'industrial-atex' | 'offshore-barge' | 'food-haccp';
  needCertificate: boolean;
}
