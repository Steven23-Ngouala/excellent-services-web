import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronDown, 
  Clock, 
  AlertCircle,
  FileCheck2,
  Bug,
  Droplets,
  Trees,
  Crosshair,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyInfo';
import { EXPERTISES_DATA } from '../../data/expertisesData';

interface NavbarProps {
  onOpenAuditModal?: () => void;
  onSelectExpertise?: (expertiseId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectExpertise }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpertiseDropdownOpen, setIsExpertiseDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Expertises', href: '#expertises', hasDropdown: true },
    { name: 'Secteurs', href: '#secteurs' },
    { name: 'Références', href: '#references' },
    { name: 'Diagnostic', href: '#diagnostic' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsExpertiseDropdownOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getExpertiseIcon = (id: string) => {
    switch(id) {
      case '3d-pest-control': return <Bug className="w-4 h-4 text-primary-600" />;
      case 'specialized-interventions': return <Crosshair className="w-4 h-4 text-accent-copper" />;
      case 'sanitation-water': return <Droplets className="w-4 h-4 text-qhse-600" />;
      case 'environment-green-spaces': return <Trees className="w-4 h-4 text-qhse-700" />;
      default: return <FileCheck2 className="w-4 h-4 text-dark" />;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Banner - QHSE Emergency & Direct Line */}
      <div className="bg-dark text-white text-[11px] py-1.5 px-4 border-b border-dark-border hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a 
            href="#accueil" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#accueil'); }}
            className="flex items-center gap-3 group flex-shrink-0 mr-4"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-xs border border-primary-500 bg-white p-0.5 flex-shrink-0 group-hover:scale-105 transition-transform">
              <img 
                src="/logo.jpeg" 
                alt="Logo EXCELLENT SERVICES S.ARL" 
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
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div 
                    className="flex items-center gap-1 py-2 text-sm font-semibold text-neutral-text hover:text-primary-500 transition-colors cursor-pointer whitespace-nowrap"
                    onMouseEnter={() => setIsExpertiseDropdownOpen(true)}
                    onMouseLeave={() => setIsExpertiseDropdownOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpertiseDropdownOpen ? 'rotate-180' : ''}`} />
                    
                    {/* Compact, clean, 100% solid Dropdown */}
                    {isExpertiseDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-neutral-200 p-3 mt-1 animate-fadeIn z-50 ring-1 ring-black/5">
                        <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider px-3 py-1 border-b border-neutral-100 mb-1.5">
                          Nos 5 Pôles d'Intervention
                        </div>
                        <div className="space-y-1">
                          {EXPERTISES_DATA.map((exp) => (
                            <a
                              key={exp.id}
                              href={`#expertises`}
                              onClick={(e) => {
                                e.preventDefault();
                                if (onSelectExpertise) onSelectExpertise(exp.id);
                                handleNavClick('#expertises');
                              }}
                              className="flex items-center gap-3 p-2 rounded-xl hover:bg-primary-50 transition-colors group/item text-left"
                            >
                              <div className="p-2 rounded-lg bg-neutral-soft group-hover/item:bg-white transition-colors flex-shrink-0">
                                {getExpertiseIcon(exp.id)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold text-dark group-hover/item:text-primary-600 truncate">
                                  {exp.title}
                                </div>
                                <div className="text-[11px] text-neutral-500 truncate">
                                  {exp.shortDescription}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm font-semibold text-neutral-text hover:text-primary-500 transition-colors py-2 whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                )}
              </div>
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

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold tracking-wide uppercase transition-all shadow-xs active:scale-95 whitespace-nowrap"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Demander un Audit</span>
            </a>
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
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-3 py-2.5 rounded-lg text-sm font-bold text-neutral-text hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-border space-y-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary-500 text-white text-xs font-bold shadow-xs uppercase tracking-wider"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Demander un Audit Gratuit</span>
              </a>

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
