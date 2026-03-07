import { useState, useEffect } from 'react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Agricola has transformed how I manage my farm. I now know exactly what I have in storage and can plan better for market days.",
      name: 'Kabelo M.',
      role: 'Farmer',
      location: 'Mochudi',
    },
    {
      quote: "Finally, an app that understands Botswana farming. The Setswana language option makes it so easy for my workers to use.",
      name: 'Masego T.',
      role: 'Agri Shop Owner',
      location: 'Gaborone',
    },
    {
      quote: "Since using Agricola, I've reduced my post-harvest losses by half. The loss calculator helped me identify exactly where I was losing produce.",
      name: 'Thabo K.',
      role: 'Vegetable Vendor',
      location: 'Francistown',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="section-padding bg-[#FDFCF9] border-t border-[#081C15]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#081C15]/30 mb-12">Voices from the Field</p>
          
          <div className="min-h-[300px] flex flex-col justify-center">
            <blockquote className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#081C15] leading-[1.1] tracking-tighter mb-12 italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex items-center gap-8">
              <div className="h-px bg-[#1B4332] w-12" />
              <div>
                <p className="text-xl font-black text-[#081C15]">{testimonials[currentIndex].name}</p>
                <p className="text-sm font-bold uppercase tracking-widest text-[#081C15]/40 mt-1">
                  {testimonials[currentIndex].role} — {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 transition-all duration-500 ${
                  index === currentIndex ? 'w-12 bg-[#1B4332]' : 'w-4 bg-[#081C15]/10'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
