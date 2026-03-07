import { Sprout, Warehouse, Calculator, Cloud, Users, Globe, ArrowRight } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Sprout,
      title: 'Crop Tracking',
      description: 'Monitor every stage from planting to harvest. Track growth progress and get timely reminders for each crop.',
      color: 'bg-green-100',
      iconColor: 'text-green-600',
      image: '/images/crop-detail.png',
    },
    {
      icon: Warehouse,
      title: 'Inventory Management',
      description: 'Know what you have, where it is, and its condition. Never lose track of your harvest again.',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
      image: '/images/farmer-inventory.png',
    },
    {
      icon: Calculator,
      title: 'Loss Calculator',
      description: 'Identify where losses occur and get personalized prevention tips to maximize your yield.',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
      image: '/images/dashboard.png',
    },
    {
      icon: Cloud,
      title: 'Weather Integration',
      description: 'Get real-time weather updates to plan your farming activities effectively.',
      color: 'bg-sky-100',
      iconColor: 'text-sky-600',
      image: '/images/my-crops.png',
    },
    {
      icon: Users,
      title: 'Multi-Account Support',
      description: 'Designed for farmers, agri-shops, and vendors. One platform, multiple use cases.',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
      image: '/images/shop-profile.png',
    },
    {
      icon: Globe,
      title: 'Bilingual Interface',
      description: 'Use the app in English or Setswana. Agriculture speaks your language.',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      image: '/images/farmer-profile.png',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-reveal text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F5E9] rounded-full mb-4">
            <Sprout className="w-4 h-4 text-[#2E7D52]" />
            <span className="text-sm font-medium text-[#2E7D52]">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-[#5C5C5C]">
            Powerful tools designed specifically for Botswana's agricultural community
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="scroll-reveal group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-card-hover transition-all hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Header with Image or Icon */}
              <div className="relative h-48 bg-gray-50 overflow-hidden">
                {feature.image ? (
                  <>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center`}>
                        <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center`}>
                      <feature.icon className={`w-10 h-10 ${feature.iconColor}`} />
                    </div>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#2E7D52] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#5C5C5C] mb-4">
                  {feature.description}
                </p>
                <button className="inline-flex items-center text-sm font-medium text-[#2E7D52] hover:text-[#1B5E3A] transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="scroll-reveal mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-[#F8F6F1] rounded-2xl">
            <div className="text-left">
              <p className="font-semibold text-[#1A1A1A]">Want to see more?</p>
              <p className="text-sm text-[#5C5C5C]">Download the app and explore all features</p>
            </div>
            <a
              href="#download"
              className="flex items-center gap-2 px-6 py-3 bg-[#2E7D52] text-white rounded-xl hover:bg-[#1B5E3A] transition-colors"
            >
              <span className="font-medium">Get the App</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
