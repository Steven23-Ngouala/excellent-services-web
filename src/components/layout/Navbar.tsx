import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  PhoneCall, 
  Clock, 
  Menu, 
  X, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Expertises', path: '/expertises' },
    { name: 'Secteurs', path: '/secteurs' },
    { name: 'Références', path: '/references' },
    { name: 'Diagnostic', path: '/diagnostic' },
    { name: 'Contact & Devis', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Banner - QHSE Emergency & Direct Line */}
      <div className="bg-dark text-white text-[11px] py-1.5 px-4 border-b border-dark-border hidden md:block">
        <div className="max-w-[1700px] mx-auto px-2 sm:px-4 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-qhse-light">
              <ShieldCheck className="w-3.5 h-3.5 text-qhse-500" />
              <span className="font-semibold text-emerald-400">Intervention d'Urgence 24/7 & Protocoles Certifiés QHSE</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-300">
              <Clock className="w-3 h-3 text-primary-400" />
              <span>Pointe-Noire & Plateformes Offshore</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-neutral-400 text-[11px]">
              RCCM : <span className="text-neutral-200 font-mono">{COMPANY_INFO.rccm}</span> | NIU : <span className="text-neutral-200 font-mono">{COMPANY_INFO.niu}</span>
            </div>
            <a 
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="flex items-center gap-1.5 font-bold text-primary-300 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-primary-400 animate-pulse" />
              <span>Astreinte Directe : {COMPANY_INFO.phones[0].number}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-neutral-border' 
          : 'bg-white py-3.5 shadow-2xs'
      }`}>
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group flex-shrink-0 mr-6 lg:mr-10 xl:mr-14"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-xs border border-primary-500 bg-white p-0.5 flex-shrink-0 group-hover:scale-105 transition-transform">
              <img 
                src="/logo.jpeg" 
                alt="Logo EXCELLENT SERVICES S.A.R.L." 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-base sm:text-lg text-dark tracking-tight leading-none group-hover:text-primary-600 transition-colors">
                  EXCELLENT
                </span>
                <span className="font-heading font-bold text-base sm:text-lg text-primary-500 tracking-tight leading-none">
                  SERVICES
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-neutral-muted block mt-0.5 whitespace-nowrap">
                Hygiène 3D • QHSE • Assainissement
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 lg:gap-5 xl:gap-7 flex-shrink-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors py-2 whitespace-nowrap ${
                    isActive ? 'text-primary-600 font-bold' : 'text-neutral-text hover:text-primary-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0 ml-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-qhse-500/30 text-qhse-700 bg-qhse-50 hover:bg-qhse-500 hover:text-white text-xs font-bold transition-all shadow-2xs whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold tracking-wide uppercase transition-all shadow-xs active:scale-95 whitespace-nowrap"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Demander un Devis</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="p-2 rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors"
              aria-label="Appeler d'urgence"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-neutral-text hover:text-primary-500 hover:bg-neutral-soft focus:outline-none transition-colors"
              aria-label="Menu principal"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-border px-4 pt-3 pb-5 space-y-2.5 animate-fadeIn shadow-lg">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                      isActive ? 'bg-primary-50 text-primary-600' : 'text-neutral-text hover:bg-neutral-soft'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-border space-y-2">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary-500 text-white text-xs font-bold shadow-xs uppercase tracking-wider"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Demander un Devis / Audit</span>
              </Link>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-qhse-500 text-white text-xs font-bold"
              >
                <span>WhatsApp Astreinte : {COMPANY_INFO.phones[0].number}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
