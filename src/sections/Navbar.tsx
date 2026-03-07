import { useState } from 'react';
import { Menu, X, Sprout, Store, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  scrolled: boolean;
}

export function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'en' | 'tn'>('en');

  const navLinks = [
    { href: '#features', label: currentLang === 'en' ? 'Features' : 'Ditshwanelo' },
    { href: '#how-it-works', label: currentLang === 'en' ? 'How It Works' : 'Tsela e e Dirang' },
    { href: '#impact', label: currentLang === 'en' ? 'Impact' : 'Tlhokego' },
    { href: '#download', label: currentLang === 'en' ? 'Download' : 'Downloada' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-nav' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden group-hover:scale-105 transition-transform">
              <img src="/images/logo.jpg" alt="Agricola Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold text-[#1A1A1A]">Agricola</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-[#5C5C5C] hover:text-[#2E7D52] font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 text-sm text-[#5C5C5C] hover:text-[#2E7D52] transition-colors"
              >
                {currentLang === 'en' ? 'English' : 'Setswana'}
                <ChevronDown className="w-4 h-4" />
              </button>
              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-1 min-w-[120px]">
                  <button
                    onClick={() => {
                      setCurrentLang('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
                      currentLang === 'en' ? 'text-[#2E7D52] font-medium' : 'text-[#5C5C5C]'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setCurrentLang('tn');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
                      currentLang === 'tn' ? 'text-[#2E7D52] font-medium' : 'text-[#5C5C5C]'
                    }`}
                  >
                    Setswana
                  </button>
                </div>
              )}
            </div>

            <Button
              variant="outline"
              className="border-[#2E7D52] text-[#2E7D52] hover:bg-[#E8F5E9]"
              onClick={() => window.open('https://dashboard.agricola.co.bw', '_blank')}
            >
              <Store className="w-4 h-4 mr-2" />
              {currentLang === 'en' ? 'Merchant Dashboard' : 'Dashboard ya Morekisi'}
            </Button>
            <Button
              className="bg-[#2E7D52] hover:bg-[#1B5E3A] text-white"
              onClick={() => scrollToSection('#download')}
            >
              {currentLang === 'en' ? 'Get the App' : 'Tswaya App'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1A1A1A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1A1A1A]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-2 text-[#5C5C5C] hover:text-[#2E7D52] font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-3">
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentLang('en')}
                  className={`px-3 py-1 text-sm rounded ${
                    currentLang === 'en'
                      ? 'bg-[#2E7D52] text-white'
                      : 'bg-gray-100 text-[#5C5C5C]'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setCurrentLang('tn')}
                  className={`px-3 py-1 text-sm rounded ${
                    currentLang === 'tn'
                      ? 'bg-[#2E7D52] text-white'
                      : 'bg-gray-100 text-[#5C5C5C]'
                  }`}
                >
                  Setswana
                </button>
              </div>
              <Button
                variant="outline"
                className="w-full border-[#2E7D52] text-[#2E7D52]"
                onClick={() => window.open('https://dashboard.agricola.co.bw', '_blank')}
              >
                <Store className="w-4 h-4 mr-2" />
                {currentLang === 'en' ? 'Merchant Dashboard' : 'Dashboard ya Morekisi'}
              </Button>
              <Button
                className="w-full bg-[#2E7D52] hover:bg-[#1B5E3A] text-white"
                onClick={() => scrollToSection('#download')}
              >
                {currentLang === 'en' ? 'Get the App' : 'Tswaya App'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
