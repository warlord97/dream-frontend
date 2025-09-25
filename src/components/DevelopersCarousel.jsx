import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const developers = [
  { id: 1, name: "M3M Group", logo: "/images/m3mlogo.png" },
  { id: 2, name: "Godrej Properties", logo: "/images/godrejlogo.png" },
  { id: 3, name: "Tata Housing", logo: "/images/tata.png" },
  { id: 4, name: "ATS Infrastructure", logo: "/images/ATS_LOGO.png" },
  { id: 5, name: "Sobha Developers", logo: "/images/Sobha.png" },
  { id: 6, name: "Bhutani Infra", logo: "/images/Bhutani.png" },
  { id: 7, name: "Dasnac Group", logo: "/images/dasnac.png" },
  { id: 8, name: "Sikka Group", logo: "/images/sikka.png" },
  { id: 9, name: "Eldeco Group", logo: "/images/Eldeco.png" },
  { id: 10, name: "Gaur Group", logo: "/images/Gaurs.png" },
  { id: 11, name: "Ace Group", logo: "/images/acelogo.png" },
];

export default function DevelopersCarousel() {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else if (window.innerWidth < 1280) setCardsPerView(3);
      else setCardsPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % developers.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? developers.length - 1 : (prev - 1) % developers.length
    );
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      visible.push(developers[(current + i) % developers.length]);
    }
    return visible;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="bg-[#082032] py-12 px-4 sm:px-8 md:px-20 lg:px-32 text-white">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-[#FF6B35] text-center">
        Our Developers
      </h2>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto overflow-visible pb-6">
        <div className="flex gap-6 md:gap-8 justify-center overflow-visible">
          {visibleCards.map((dev) => (
            <div
              key={dev.id}
              className="bg-white/5 rounded-2xl shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-black/50 hover:bg-white/10 backdrop-blur-md transition-all duration-300 p-6 sm:p-8 flex flex-col items-center justify-center w-52 sm:w-56 md:w-60 lg:w-64"
            >
              <img
                src={dev.logo}
                alt={dev.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-4"
              />
              <h4 className="font-semibold text-sm sm:text-base md:text-lg text-center text-gray-200">
                {dev.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-3 rounded-full hover:bg-[#FF6B35] transition-colors"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-3 rounded-full hover:bg-[#FF6B35] transition-colors"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
