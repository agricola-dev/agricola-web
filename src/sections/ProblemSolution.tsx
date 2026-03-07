import { AlertTriangle, Sprout, TrendingDown, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';

export function ProblemSolution() {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Lack of Tracking',
      description: "Farmers don't have simple tools to record what they plant, harvest, and lose.",
    },
    {
      icon: AlertTriangle,
      title: 'Poor Storage Practices',
      description: 'Limited knowledge about optimal storage methods and loss prevention.',
    },
    {
      icon: TrendingDown,
      title: 'Information Gaps',
      description: 'No reliable data on when and where losses occur.',
    },
    {
      icon: TrendingDown,
      title: 'Market Inefficiencies',
      description: 'Disconnect between farmers and merchants leads to spoilage and waste.',
    },
  ];

  const solutions = [
    {
      icon: CheckCircle2,
      title: 'Built for Botswana',
      description: 'Bilingual (English-Setswana), designed for local crops like sorghum, maize, and beans.',
    },
    {
      icon: CheckCircle2,
      title: 'Mobile-First Design',
      description: 'Works offline, optimized for rural connectivity and affordable smartphones.',
    },
    {
      icon: CheckCircle2,
      title: 'Data-Driven Decisions',
      description: 'Track everything from planting to market, identify loss patterns, improve yields.',
    },
  ];

  return (
    <section id="problem" className="py-20 lg:py-28 bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Section */}
        <div className="scroll-reveal mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/images/problem-solution.jpg"
                  alt="Comparison of traditional vs modern storage"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#E8913A]">20-40%</p>
                  <p className="text-sm text-[#5C5C5C] mt-1">Annual Produce Loss</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium text-red-600">The Challenge</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                  Food Loss in Botswana
                </h2>
                <p className="text-lg text-[#5C5C5C] leading-relaxed">
                  Botswana loses an estimated <span className="font-semibold text-[#E8913A]">20-40% of agricultural produce</span> to post-harvest losses annually. This represents millions of Pula lost, food insecurity perpetuated, and farmer incomes drastically reduced.
                </p>
              </div>

              {/* Problem Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
                  >
                    <problem.icon className="w-6 h-6 text-[#E8913A] mb-3" />
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">{problem.title}</h3>
                    <p className="text-sm text-[#5C5C5C]">{problem.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-16">
          <div className="h-px bg-gray-300 flex-1 max-w-xs" />
          <ArrowRight className="w-6 h-6 text-[#2E7D52]" />
          <div className="h-px bg-gray-300 flex-1 max-w-xs" />
        </div>

        {/* Solution Section */}
        <div className="scroll-reveal">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F5E9] rounded-full mb-4">
              <Lightbulb className="w-4 h-4 text-[#2E7D52]" />
              <span className="text-sm font-medium text-[#2E7D52]">Our Solution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
              Smart Agricultural Management
            </h2>
            <p className="text-lg text-[#5C5C5C]">
              Agricola bridges the gap between traditional farming practices and modern agricultural management.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-[#2E7D52] rounded-3xl p-8 lg:p-12 mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Sprout className="w-12 h-12 text-white/80" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Our Mission
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  To reduce post-harvest losses in Botswana by{' '}
                  <span className="font-bold text-[#D4A03A]">30% within 3 years</span>{' '}
                  by providing accessible, mobile-first tools that help farmers and merchants make data-driven decisions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-white">30%</p>
                  <p className="text-sm text-white/80 mt-1">Loss Reduction Goal</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-white">3</p>
                  <p className="text-sm text-white/80 mt-1">Year Timeline</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-white">100%</p>
                  <p className="text-sm text-white/80 mt-1">Free to Use</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-white">24/7</p>
                  <p className="text-sm text-white/80 mt-1">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-[#2E7D52]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{solution.title}</h3>
                <p className="text-[#5C5C5C]">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
