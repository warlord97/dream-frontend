import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/images/car1.jpg", // replace with your image path
    title: "Welcome to Dream Square Realty",
    subtitle: "Find your dream property with us",
  },
  {
    id: 2,
    image: "/images/car2.jpg",
    title: "Luxury Living Awaits",
    subtitle: "Modern spaces tailored for you",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-6 md:px-20 lg:px-32">
            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {slide.title}
            </h2>
            <p className="text-white text-sm md:text-lg lg:text-xl">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Prev / Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-[#FF6B35] transition-colors z-20"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-[#FF6B35] transition-colors z-20"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-[#FF6B35]" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
