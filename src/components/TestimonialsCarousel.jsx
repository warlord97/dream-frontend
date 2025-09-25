import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    image: "/images/amit.jpg",
    feedback:
      "Dreamsquare Realty helped me find my dream home effortlessly. Their professionalism and market knowledge are unmatched!",
    rating: 4,
  },
  {
    id: 2,
    name: "Priya Verma",
    image: "/images/priya.jpg",
    feedback:
      "The team was extremely helpful and patient throughout the buying process. Highly recommend Dreamsquare Realty.",
    rating: 3,
  },
  {
    id: 3,
    name: "Rahul Gupta",
    image: "/images/rahul.jpg",
    feedback:
      "Exceptional service! They made buying property a stress-free and enjoyable experience.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    image: "/images/sneha.jpg",
    feedback:
      "Professional, trustworthy, and responsive. I couldn’t have asked for a better consultant.",
    rating: 4,
  },
];

export default function TestimonialsCarousel() {
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
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : (prev - 1) % testimonials.length
    );
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      visible.push(testimonials[(current + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="bg-[#F9FAFB] py-16 px-6 md:px-20 lg:px-32 text-[#082032]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
        Our Customers Think We're The Best
      </h2>

      <div className="relative max-w-7xl mx-auto pb-6 overflow-visible">
        {/* Carousel */}
        <div className="flex gap-8 justify-center overflow-visible">
          {visibleCards.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex-shrink-0 w-80"
            >
              {/* Stars */}
              <div className="flex text-[#FF6B35] mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              {/* Feedback */}
              <p className="text-sm md:text-base text-gray-600 mb-6">
                {t.feedback}
              </p>
              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-200"
                />
                <h4 className="font-semibold text-base md:text-lg">{t.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-3 rounded-full hover:bg-[#FF6B35] transition-colors"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-3 rounded-full hover:bg-[#FF6B35] transition-colors"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
