import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { EmergencyFab } from './components/layout/EmergencyFab';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExpertisesPage } from './pages/ExpertisesPage';
import { SectorsPage } from './pages/SectorsPage';
import { ReferencesPage } from './pages/ReferencesPage';
import { DiagnosticPage } from './pages/DiagnosticPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-neutral-text antialiased selection:bg-primary-500 selection:text-white">
        {/* Fixed Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/expertises" element={<ExpertisesPage />} />
            <Route path="/secteurs" element={<SectorsPage />} />
            <Route path="/references" element={<ReferencesPage />} />
            <Route path="/diagnostic" element={<DiagnosticPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all fallback redirecting to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* 24/7 Emergency & WhatsApp Floating Button */}
        <EmergencyFab />
      </div>
    </BrowserRouter>
  );
};

export default App;
