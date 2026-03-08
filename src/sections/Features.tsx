export function Features() {
  const features = [
    {
      title: 'Precision Tracking',
      description: 'Monitor every growth stage from seed to harvest with satellite-synced reminders.',
    },
    {
      title: 'Inventory Flow',
      description: 'Know your stock levels in real-time. Reduce spoilage with intelligent storage alerts.',
    },
    {
      title: 'Data Insights',
      description: 'Visualize your farm performance. Identify loss patterns before they impact your bottom line.',
    },
  ];

  return (
    <section id="features" className="section-padding bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="space-y-6 scroll-reveal"
            >
              <h3 className="text-3xl sm:text-4xl font-black text-[#081C15]">
                {feature.title}
              </h3>
              <p className="text-lg text-[#081C15]/60 leading-relaxed font-medium">
                {feature.description}
              </p>
              <div className="pt-4">
                <button className="text-[#1B4332] font-bold text-lg hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Learn how it works <span className="text-2xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
