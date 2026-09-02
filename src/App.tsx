import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { EmergencyFab } from './components/layout/EmergencyFab';
import { HeroSection } from './components/home/HeroSection';
import { ClientTrustBar } from './components/home/ClientTrustBar';
import { ExpertiseGrid } from './components/home/ExpertiseGrid';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { DiagnosticWizard } from './components/home/DiagnosticWizard';
import { SectorShowcase } from './components/home/SectorShowcase';
import { CaseStudies } from './components/home/CaseStudies';
import { QuoteCalculator } from './components/home/QuoteCalculator';
import { ContactSection } from './components/home/ContactSection';

export const App: React.FC = () => {
  const [selectedExpertiseId, setSelectedExpertiseId] = useState<string | undefined>();

  const handleSelectExpertise = (expertiseId: string) => {
    setSelectedExpertiseId(expertiseId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-text antialiased selection:bg-primary-500 selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar onSelectExpertise={handleSelectExpertise} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Key Metrics & Badges */}
        <HeroSection />

        {/* 2. Client Trust Bar (Total E&P, Newrest, Carroil, Mafricom...) */}
        <ClientTrustBar />

        {/* 3. The 5 Core Expertise Poles & Protocol Modals */}
        <ExpertiseGrid selectedPoleId={selectedExpertiseId} />

        {/* 4. Why Choose Us (Differentiators, Safety, FDS, Habilitations) */}
        <WhyChooseUs />

        {/* 5. Interactive Diagnostic Wizard (3 Steps Simulator) */}
        <DiagnosticWizard />

        {/* 6. Industry-specific Sector Showcases */}
        <SectorShowcase />

        {/* 7. Case Studies & FAQ */}
        <CaseStudies />

        {/* 8. Interactive Quote Calculator */}
        <QuoteCalculator />

        {/* 9. Contact & Formal Audit Request + Legal Map */}
        <ContactSection />
      </main>

      {/* Footer with Legal Mentions, RCCM, NIU & Map shortcuts */}
      <Footer />

      {/* 24/7 Emergency & WhatsApp Floating Button */}
      <EmergencyFab />
    </div>
  );
};

export default App;
