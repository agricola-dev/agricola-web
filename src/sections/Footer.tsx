export function Footer() {
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Flow', href: '#how-it-works' },
    { label: 'Impact', href: '#impact' },
    { label: 'Merchant', href: 'https://dashboard.agricola.co.bw' },
  ];

  return (
    <footer className="bg-[#FDFCF9] py-24 border-t border-[#081C15]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
          <div className="space-y-8 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl overflow-hidden shadow-sm">
                <img src="/images/logo.jpg" alt="Agricola Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-black text-[#081C15] tracking-tighter">Agricola</span>
            </div>
            <p className="text-lg text-[#081C15]/40 leading-relaxed font-medium">
              The digital infrastructure for Botswana's agricultural future. 
              Smarter tracking. Less waste. Higher yields.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 lg:gap-24">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#081C15]/30 text-balance">Product</p>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-lg font-bold text-[#081C15] hover:text-[#1B4332] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#081C15]/30">Connect</p>
              <ul className="space-y-4">
                <li><a href="#" className="text-lg font-bold text-[#081C15]">Instagram</a></li>
                <li><a href="#" className="text-lg font-bold text-[#081C15]">Twitter</a></li>
                <li><a href="#" className="text-lg font-bold text-[#081C15]">Facebook</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#081C15]/30">Contact</p>
              <p className="text-lg font-bold text-[#081C15]">hello@agricola.co.bw</p>
              <p className="text-lg font-bold text-[#081C15]">+267 123 456 78</p>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-[#081C15]/5 flex flex-col sm:flex-row justify-between items-center gap-8">
          <p className="text-sm font-bold text-[#081C15]/30 uppercase tracking-widest">
            © {new Date().getFullYear()} Agricola. Botswana.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm font-bold text-[#081C15]/30 uppercase tracking-widest hover:text-[#081C15]">Privacy</a>
            <a href="#" className="text-sm font-bold text-[#081C15]/30 uppercase tracking-widest hover:text-[#081C15]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
