import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
// import { Sprout } from 'lucide-react'; // Hidden for future use

export function Footer() {
  const quickLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Impact', href: '#impact' },
    { label: 'Download', href: '#download' },
  ];

  const businessLinks = [
    { label: 'Merchant Dashboard', href: 'https://dashboard.agricola.co.bw', external: true },
    { label: 'Partner with Us', href: '#', external: true },
    { label: 'Contact Sales', href: 'mailto:sales@agricola.co.bw', external: true },
  ];

  const supportLinks = [
    { label: 'Help Center', href: '#', external: true },
    { label: 'Contact Us', href: 'mailto:support@agricola.co.bw', external: true },
    { label: 'Privacy Policy', href: '#', external: true },
    { label: 'Terms of Service', href: '#', external: true },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/agricola', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/agricola', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/agricola', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/agricola', label: 'LinkedIn' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
                <img src="/images/logo.jpg" alt="Agricola Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold">Agricola</span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Empowering Botswana's farmers with smart tools to track crops, manage inventory, and reduce post-harvest losses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#2E7D52]" />
                <a href="mailto:hello@agricola.co.bw" className="hover:text-white transition-colors">
                  hello@agricola.co.bw
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#2E7D52]" />
                <a href="tel:+26712345678" className="hover:text-white transition-colors">
                  +267 123 456 78
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#2E7D52]" />
                <span>Gaborone, Botswana</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-[#2E7D52]" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* For Businesses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">For Businesses</h3>
            <ul className="space-y-3">
              {businessLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-[#2E7D52]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-[#2E7D52]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Agricola. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2E7D52] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">Language:</span>
              <button className="text-[#2E7D52] font-medium hover:underline">English</button>
              <span className="text-gray-600">|</span>
              <button className="text-gray-400 hover:text-white transition-colors">Setswana</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
