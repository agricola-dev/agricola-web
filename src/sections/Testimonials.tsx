import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Agricola has transformed how I manage my farm. I now know exactly what I have in storage and can plan better for market days. The inventory tracking feature alone has saved me thousands of Pula.",
      name: 'Kabelo M.',
      role: 'Farmer',
      location: 'Mochudi',
      rating: 5,
      avatar: 'K',
    },
    {
      quote: "Finally, an app that understands Botswana farming. The Setswana language option makes it so easy for my workers to use. Everyone on my farm can now track crops without any confusion.",
      name: 'Masego T.',
      role: 'Agri Shop Owner',
      location: 'Gaborone',
      rating: 5,
      avatar: 'M',
    },
    {
      quote: "Since using Agricola, I've reduced my post-harvest losses by half. The loss calculator helped me identify exactly where I was losing produce and how to fix it.",
      name: 'Thabo K.',
      role: 'Vegetable Vendor',
      location: 'Francistown',
      rating: 5,
      avatar: 'T',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-reveal text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F5E9] rounded-full mb-4">
            <Quote className="w-4 h-4 text-[#2E7D52]" />
            <span className="text-sm font-medium text-[#2E7D52]">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
            What Farmers Are Saying
          </h2>
          <p className="text-lg text-[#5C5C5C]">
            Real stories from real farmers across Botswana
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="scroll-reveal relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-[#F8F6F1] rounded-3xl p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-[#2E7D52] rounded-xl flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D4A03A] fill-[#D4A03A]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-[#1A1A1A] leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#2E7D52] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A]">{testimonials[currentIndex].name}</p>
                  <p className="text-[#5C5C5C]">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#F8F6F1] hover:border-[#2E7D52] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#5C5C5C]" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#2E7D52] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#F8F6F1] hover:border-[#2E7D52] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-[#5C5C5C]" />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="scroll-reveal mt-16 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 text-[#8A8A8A]">
            <div className="w-8 h-8 bg-[#E8F5E9] rounded-lg flex items-center justify-center">
              <Star className="w-4 h-4 text-[#2E7D52]" />
            </div>
            <span className="text-sm">4.8 Rating on Google Play</span>
          </div>
          <div className="flex items-center gap-2 text-[#8A8A8A]">
            <div className="w-8 h-8 bg-[#E8F5E9] rounded-lg flex items-center justify-center">
              <Quote className="w-4 h-4 text-[#2E7D52]" />
            </div>
            <span className="text-sm">100+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
