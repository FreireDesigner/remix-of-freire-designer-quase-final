import { useState, useEffect } from "react";

const HeroBanner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [0, 1, 2, 3, 4];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="gradient-banner py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
          BANNER_PRINCIPAL_{activeSlide + 1}
        </h2>
        <p className="text-primary-foreground/90 mb-1">
          Substitua com sua imagem promocional
        </p>
        <p className="text-sm text-primary-foreground/70">
          Mobile: 800x450px | Desktop: 1400x500px
        </p>
        
        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {slides.map((slide) => (
            <button
              key={slide}
              onClick={() => setActiveSlide(slide)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeSlide === slide 
                  ? "bg-primary-foreground" 
                  : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
