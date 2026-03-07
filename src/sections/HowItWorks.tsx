import { Download, Settings, TrendingUp, CheckCircle2 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Download,
      title: 'Download & Create Account',
      description: 'Get the app from Google Play and create your free account. Choose your profile: Farmer, Agri Shop, or Vendor.',
      details: [
        'Free download from Google Play',
        'Quick 2-minute setup',
        'Choose your account type',
        'Select your preferred language',
      ],
      image: '/images/farmer-profile.png',
    },
    {
      number: '02',
      icon: Settings,
      title: 'Set Up Your Farm',
      description: 'Add your fields, crops, and storage locations. The app adapts to your specific farming setup.',
      details: [
        'Add your farm location',
        'Register your fields',
        'Set up storage locations',
        'Configure crop types',
      ],
      image: '/images/my-crops.png',
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Start Tracking & Growing',
      description: 'Record plantings, monitor progress, manage inventory, and watch your efficiency improve.',
      details: [
        'Track crop growth stages',
        'Record harvests',
        'Manage inventory',
        'Analyze loss patterns',
      ],
      image: '/images/dashboard.png',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#E8F5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-reveal text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4">
            <CheckCircle2 className="w-4 h-4 text-[#2E7D52]" />
            <span className="text-sm font-medium text-[#2E7D52]">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-lg text-[#5C5C5C]">
            Three simple steps to transform your farming
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`scroll-reveal grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-bold text-[#2E7D52]/20">{step.number}</span>
                  <div className="w-12 h-12 bg-[#2E7D52] rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[#5C5C5C] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#2E7D52] rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-[#5C5C5C]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative">
                  {/* Background decoration */}
                  <div className={`absolute -inset-4 bg-[#2E7D52]/10 rounded-3xl ${index % 2 === 0 ? '-rotate-3' : 'rotate-3'}`} />
                  
                  {/* Phone mockup */}
                  <div className="relative phone-mockup max-w-sm mx-auto">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Step badge */}
                  <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} bg-white rounded-xl shadow-lg px-4 py-2`}>
                    <span className="text-sm font-medium text-[#2E7D52]">Step {step.number}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="scroll-reveal mt-20 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              Ready to get started?
            </h3>
            <p className="text-[#5C5C5C] mb-6">
              Join hundreds of farmers already using Agricola
            </p>
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2E7D52] text-white rounded-xl hover:bg-[#1B5E3A] transition-colors font-medium"
            >
              Download Now
              <TrendingUp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
