import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { trackCTAClick } from "@/lib/analytics";

interface NavbarProps {
  scrolled: boolean;
}

export function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "Flow" },
  ];

  const scrollToSection = (href: string) => {
    if (pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate('/', { state: { scrollTo: href } });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FDFCF9]/80 backdrop-blur-xl py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-500">
              <img
                src="/images/logo.jpg"
                alt="Agricola Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-black text-[#081C15] tracking-tighter">
              Agricola
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-bold uppercase tracking-[0.2em] text-[#081C15]/40 hover:text-[#1B4332] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-8">
            <button
              className="text-sm font-bold uppercase tracking-[0.2em] text-[#081C15]/40 hover:text-[#1B4332] transition-colors"
              onClick={() =>
                window.open("https://dashboard.agricola-app.com", "_blank")
              }
            >
              Dashboard
            </button>
            <Button
              className="bg-[#1B4332] hover:bg-[#081C15] text-white rounded-full font-bold px-8 py-6"
              onClick={() => { trackCTAClick('get_app', 'navbar'); scrollToSection("#download"); }}
            >
              Get App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#081C15]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#FDFCF9] z-50 flex flex-col p-8 space-y-12 animate-fade-in">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/logo.jpg"
                  alt="Agricola Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-black text-[#081C15] tracking-tighter">
                Agricola
              </span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-5xl font-black text-[#081C15] tracking-tighter text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              className="text-5xl font-black text-[#081C15]/40 tracking-tighter text-left"
              onClick={() =>
                window.open("https://dashboard.agricola-app.com", "_blank")
              }
            >
              Dashboard
            </button>
          </div>
          <div className="mt-auto">
            <Button
              className="w-full bg-[#1B4332] text-white rounded-full font-bold py-8 text-xl"
              onClick={() => { trackCTAClick('get_app', 'navbar_mobile'); scrollToSection("#download"); }}
            >
              Download App
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
