export function Features() {
  const features = [
    {
      title: 'Precision Tracking',
      description: 'Monitor every growth stage from seed to harvest with satellite-synced reminders.',
      image: '/images/crop-detail.png',
    },
    {
      title: 'Inventory Flow',
      description: 'Know your stock levels in real-time. Reduce spoilage with intelligent storage alerts.',
      image: '/images/farmer-inventory.png',
    },
    {
      title: 'Data Insights',
      description: 'Visualize your farm performance. Identify loss patterns before they impact your bottom line.',
      image: '/images/dashboard.png',
    },
  ];

  return (
    <section id="features" className="section-padding bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 space-y-6 scroll-reveal">
                <h3 className="text-4xl sm:text-5xl font-black text-[#081C15]">
                  {feature.title}
                </h3>
                <p className="text-xl text-[#081C15]/60 leading-relaxed font-medium">
                  {feature.description}
                </p>
                <div className="pt-4">
                  <button className="text-[#1B4332] font-bold text-lg hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Learn how it works <span className="text-2xl">→</span>
                  </button>
                </div>
              </div>
              <div className="flex-1 scroll-reveal">
                <div className="relative p-2 sm:p-4 bg-white rounded-[2.5rem] shadow-soft border border-gray-100">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto rounded-[2rem]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
