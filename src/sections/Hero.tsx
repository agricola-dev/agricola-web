import { Button } from '@/components/ui/button';
import { Play, ChevronDown, TrendingDown, Target } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen gradient-hero pt-[72px] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#2E7D52] blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#D4A03A] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F5E9] rounded-full">
              <span className="w-2 h-2 bg-[#2E7D52] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#2E7D52]">
                Now Available on Google Play
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
                Empowering{' '}
                <span className="text-[#2E7D52]">Botswana's</span> Farmers
              </h1>
              <p className="text-xl text-[#5C5C5C] leading-relaxed max-w-xl">
                Track crops, manage inventory, and reduce post-harvest losses. 
                From field to market, make every harvest count.
              </p>
              <p className="text-lg text-[#8A8A8A] italic">
                "Agricola e thusa balemi le barekisi ba temothuo"
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#2E7D52] hover:bg-[#1B5E3A] text-white px-8 py-6 text-lg rounded-xl hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.agricola.app', '_blank')}
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Get it on Google Play
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#2E7D52] text-[#2E7D52] hover:bg-[#E8F5E9] px-8 py-6 text-lg rounded-xl"
                onClick={() => scrollToSection('#features')}
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#E8913A]">
                  <TrendingDown className="w-5 h-5" />
                  <span className="text-2xl font-bold">20-40%</span>
                </div>
                <p className="text-sm text-[#8A8A8A]">Current Loss Rate</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#2E7D52]">
                  <Target className="w-5 h-5" />
                  <span className="text-2xl font-bold">30%</span>
                </div>
                <p className="text-sm text-[#8A8A8A]">Reduction Goal</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-bold text-[#2E7D52]">500+</span>
                <p className="text-sm text-[#8A8A8A]">Farmers Using</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-bold text-[#2E7D52]">2</span>
                <p className="text-sm text-[#8A8A8A]">Languages</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-farmer.jpg"
                alt="Farmer using Agricola app in field"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Phone Mockup */}
            <div className="absolute -bottom-8 -left-8 w-48 sm:w-56 phone-mockup animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <img
                src="/images/dashboard.png"
                alt="Agricola App Dashboard"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-[#2E7D52]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#2E7D52]">-50%</p>
                  <p className="text-sm text-[#8A8A8A]">Loss Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#problem')}
            className="flex flex-col items-center text-[#8A8A8A] hover:text-[#2E7D52] transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
