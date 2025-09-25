import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const locations = [
  { id: 1, image: "/images/noida2.jpg", name: "Greater Noida", projects: 5 },
  { id: 2, image: "/images/noida1.jpg", name: "Noida Expressway", projects: 10 },
  { id: 3, image: "/images/noida3.jpg", name: "Central Noida", projects: 6 },
  { id: 4, image: "/images/noida4.jpg", name: "Noida Extension", projects: 4 },
];

export default function ExploreLocations() {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % locations.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0
        ? locations.length - 1
        : (prev - 1 + locations.length) % locations.length
    );
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      visible.push(locations[(current + i) % locations.length]);
    }
    return visible;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20 text-[#082032]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center">
        Explore Our Locations
      </h2>

      <div className="relative max-w-7xl mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute top-1/2 -left-10 md:-left-12 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 text-white rounded-full items-center justify-center hover:bg-[#FF6B35] transition-colors z-20"
        >
          <FaChevronLeft />
        </button>

        {/* Cards Container */}
        <div className="flex justify-center gap-6 overflow-hidden w-full">
          {visibleCards.map((loc) => (
            <div
              key={loc.id}
              className="flex-shrink-0 w-72 sm:w-80 md:w-96 lg:w-96 h-60 md:h-64 shadow-lg hover:shadow-2xl transition duration-300 rounded overflow-hidden relative"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                <h3 className="text-base md:text-lg font-semibold text-white">
                  {loc.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-200">
                  {loc.projects} Projects
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="hidden lg:flex absolute top-1/2 -right-10 md:-right-12 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 text-white rounded-full items-center justify-center hover:bg-[#FF6B35] transition-colors z-20"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
