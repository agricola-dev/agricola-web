export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Profile',
      description: 'Farmer, Agri-Shop, or Vendor. Agricola tailors itself to your specific role in the ecosystem.',
    },
    {
      number: '02',
      title: 'Digitalize Your Farm',
      description: 'Register fields and storage. Our intuitive interface makes setup a matter of minutes.',
    },
    {
      number: '03',
      title: 'Track & Thrive',
      description: 'Begin logging activity. Watch as real-time data transforms your daily decision making.',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-[#1B4332] text-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          {steps.map((step, index) => (
            <div key={index} className="space-y-8 scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="flex items-center gap-6">
                <span className="text-7xl font-black opacity-20">{step.number}</span>
                <div className="h-px bg-[#FDFCF9]/20 flex-1" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-[#FDFCF9]/60 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
