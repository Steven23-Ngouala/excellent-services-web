import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ClientTrustBar } from '../components/home/ClientTrustBar';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section avec Carousel 3 Images Défilantes & Métriques */}
      <HeroSection />

      {/* 2. Logos Clients & Partenaires Majeurs */}
      <ClientTrustBar />
    </div>
  );
};
