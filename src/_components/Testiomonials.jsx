import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { testimonials } from "../constant/service";

const TestimonialCard = ({ testimonial }) => (
  <div className="relative w-full max-w-xl mx-4 bg-white shadow-2xl rounded-xl p-6 md:p-10 border border-[#009688] flex flex-col justify-between transition-transform duration-500 ease-in-out transform">
    <p className="text-base md:text-2xl text-gray-700 leading-relaxed mb-8 hidden md:block">
      "{testimonial.quote}"
    </p>
    
    <p className="text-base text-gray-700 leading-relaxed mb-8 md:hidden">
      {testimonial.quote}
    </p>

    {/* User Profile Section */}
    <div className="flex items-center mt-6">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#009688]"
      />
      <div className="ml-4">
        <h3 className="text-lg md:text-xl font-semibold text-[#00264D]">
          {testimonial.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-500">
          {testimonial.role}
        </p>
      </div>
    </div>
  </div>
);

const NavigationButton = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className="p-4 rounded-full shadow-md hover:shadow-lg transition-all bg-[#009688] text-white hidden md:block"
  >
    {direction === "prev" ? (
      <ChevronLeft className="w-6 h-6" />
    ) : (
      <ChevronRight className="w-6 h-6" />
    )}
  </button>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        const interval = setInterval(handleNext, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
      }
    };

    if (mediaQuery.matches) {
      const interval = setInterval(handleNext, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#009688] to-[#00264D] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="relative flex items-center justify-center">
          <NavigationButton onClick={handlePrev} direction="prev" />

          <div className="w-full flex justify-center">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </div>

          <NavigationButton onClick={handleNext} direction="next" />
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-[#009688]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
