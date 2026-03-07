import { useEffect, useRef, useState } from 'react';
import { Users, TrendingDown, Package, MapPin } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Impact() {
  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Farmers Using Agricola',
      color: 'bg-white/10',
    },
    {
      icon: TrendingDown,
      value: 30,
      suffix: '%',
      label: 'Average Loss Reduction',
      color: 'bg-white/10',
    },
    {
      icon: Package,
      value: 10000,
      suffix: '+',
      label: 'Kilograms Tracked',
      color: 'bg-white/10',
    },
    {
      icon: MapPin,
      value: 3,
      suffix: '',
      label: 'Regions Covered',
      color: 'bg-white/10',
    },
  ];

  return (
    <section id="impact" className="py-20 lg:py-28 bg-[#2E7D52] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#D4A03A] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-reveal text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Making a Difference
          </h2>
          <p className="text-lg text-white/80">
            Join farmers across Botswana who are transforming their harvests
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="scroll-reveal bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-colors"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="scroll-reveal mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">For Farmers</h3>
            <p className="text-white/70">
              Track crops, plan better, and prove your production capacity to buyers and lenders.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">For Agri-Shops</h3>
            <p className="text-white/70">
              Manage inventory efficiently, reduce stock-outs, and track product origins.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">For Vendors</h3>
            <p className="text-white/70">
              Source consistent supply, track losses, and improve cash flow management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
