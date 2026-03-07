import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FDFCF9] flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Content */}
          <div className="space-y-12 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#081C15] leading-[0.9] tracking-tighter">
                Grow <br />
                <span className="text-[#1B4332]">Better.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#081C15]/70 max-w-lg leading-relaxed font-medium">
                The digital infrastructure for Botswana's agricultural future. 
                Smarter tracking. Less waste. Higher yields.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-[#1B4332] hover:bg-[#081C15] text-white px-10 py-8 text-xl rounded-full transition-all duration-300 shadow-soft"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.agricola.app', '_blank')}
              >
                <Play className="w-6 h-6 mr-3 fill-current" />
                Join the Waitlist
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-[#081C15]/5">
              <div className="space-y-1">
                <p className="text-3xl font-black text-[#081C15]">20%+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#081C15]/40">Avg. Loss in Botswana</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black text-[#1B4332]">30%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#081C15]/40">Our Reduction Goal</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10 p-4 sm:p-8 bg-white rounded-[3rem] shadow-soft border border-gray-100 rotate-2">
              <img
                src="/images/dashboard.png"
                alt="Agricola Dashboard"
                className="w-full h-auto rounded-[2rem]"
              />
            </div>
            {/* Minimalist decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#1B4332]/5 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
