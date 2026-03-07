import { Play, Apple, QrCode, CheckCircle2, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DownloadCTA() {
  const benefits = [
    'Free to download and use',
    'Works offline',
    'No hidden fees',
    'Regular updates',
  ];

  return (
    <section id="download" className="py-20 lg:py-28 bg-gradient-to-b from-[#F8F6F1] to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#2E7D52] blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#D4A03A] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F5E9] rounded-full">
                <Sprout className="w-4 h-4 text-[#2E7D52]" />
                <span className="text-sm font-medium text-[#2E7D52]">Download Now</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
                Ready to Transform Your Farming?
              </h2>
              <p className="text-lg text-[#5C5C5C] leading-relaxed">
                Download Agricola today and join the movement to reduce food loss in Botswana. 
                Start tracking, managing, and growing your farm more efficiently.
              </p>
              <p className="text-lg text-[#8A8A8A] italic">
                "Tswela pele le rona. Downloada Agricola jaanong."
              </p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2E7D52] flex-shrink-0" />
                  <span className="text-[#5C5C5C]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#2E7D52] hover:bg-[#1B5E3A] text-white px-8 py-6 text-lg rounded-xl hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.agricola.app', '_blank')}
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                <div className="text-left">
                  <span className="block text-xs opacity-80">Get it on</span>
                  <span className="block font-semibold">Google Play</span>
                </div>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-500 px-8 py-6 text-lg rounded-xl cursor-not-allowed"
                disabled
              >
                <Apple className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <span className="block text-xs opacity-80">Coming soon to</span>
                  <span className="block font-semibold">App Store</span>
                </div>
              </Button>
            </div>

            {/* QR Code Option */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
              <div className="w-16 h-16 bg-[#F8F6F1] rounded-lg flex items-center justify-center">
                <QrCode className="w-8 h-8 text-[#2E7D52]" />
              </div>
              <div>
                <p className="font-medium text-[#1A1A1A]">Scan to Download</p>
                <p className="text-sm text-[#5C5C5C]">Point your camera at the QR code</p>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="relative">
            <div className="relative flex justify-center items-center">
              {/* Background circle */}
              <div className="absolute w-80 h-80 bg-[#2E7D52]/10 rounded-full" />
              
              {/* Main phone */}
              <div className="relative z-10 phone-mockup w-64 sm:w-72">
                <img
                  src="/images/dashboard.png"
                  alt="Agricola App Dashboard"
                  className="w-full h-auto"
                />
              </div>

              {/* Secondary phone */}
              <div className="absolute -right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 phone-mockup w-48 sm:w-56 opacity-90">
                <img
                  src="/images/crop-detail.png"
                  alt="Agricola Crop Tracking"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -left-4 bottom-20 z-30 bg-white rounded-xl shadow-xl p-4 animate-pulse-soft">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E8F5E9] rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#2E7D52]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1A1A1A]">Free Download</p>
                    <p className="text-xs text-[#8A8A8A]">No credit card required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
