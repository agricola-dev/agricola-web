export function Impact() {
  const stats = [
    { value: '500+', label: 'Active Farmers' },
    { value: '30%', label: 'Waste Reduction' },
    { value: '10K+', label: 'KG Tracked' },
    { value: '3', label: 'Regions' },
  ];

  return (
    <section id="impact" className="section-padding bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-4 scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <p className="text-7xl sm:text-8xl font-black text-[#1B4332] tracking-tighter">
                {stat.value}
              </p>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#081C15]/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-32 pt-24 border-t border-[#081C15]/5 grid lg:grid-cols-3 gap-24">
          <div className="scroll-reveal">
            <h4 className="text-2xl font-black text-[#081C15] mb-4">Empowering the Field</h4>
            <p className="text-lg text-[#081C15]/60 leading-relaxed font-medium">
              We provide the tools farmers need to prove their production capacity and access fair markets.
            </p>
          </div>
          <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
            <h4 className="text-2xl font-black text-[#081C15] mb-4">Optimizing the Shop</h4>
            <p className="text-lg text-[#081C15]/60 leading-relaxed font-medium">
              Real-time inventory data helps agri-shops reduce overstock and eliminate expired products.
            </p>
          </div>
          <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
            <h4 className="text-2xl font-black text-[#081C15] mb-4">Securing the Vendor</h4>
            <p className="text-lg text-[#081C15]/60 leading-relaxed font-medium">
              Vendors gain a transparent view into their supply chain, ensuring consistent quality and supply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
