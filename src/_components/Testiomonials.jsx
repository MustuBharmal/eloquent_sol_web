import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Eloquent Solutions has been instrumental in delivering several apps for us with exceptional precision in design and flawless code.",
    name: "Raj",
    role: "CEO, Raj Information Systems Pvt Ltd",
    avatar: "raj.jpg",
  },
  {
    id: 2,
    quote: "Eloquent Solutions stands out for their speed and efficiency in development. Their streamlined process has made them an invaluable part of our team.",
    name: "CodeKernel",
    role: "CEO, CodeKernel",
    avatar: "codekernel.jpg",
  },
  {
    id: 3,
    quote: "We've had the pleasure of working with Eloquent Solutions on multiple projects, and their timely delivery has been outstanding.",
    name: "Perfect Solutions",
    role: "CEO, Perfect Solutions",
    avatar: "person.png",
  },
];

const TestimonialCard = ({ testimonial, direction }) => (
  <motion.div
    initial={{ opacity: 0, x: direction === "right" ? 50 : -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: direction === "right" ? -50 : 50 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="relative w-full md:w-[40rem] bg-white shadow-2xl rounded-xl p-10 md:p-16 border border-[#009688] flex flex-col justify-between"
  >
    {/* Top Quote Icon */}
    <img 
      src="/quote.png" 
      alt="quote" 
      className="w-12 h-12 absolute top-4 left-4 opacity-20"
    />

    <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-8">
      "{testimonial.quote}"
    </p>

    {/* User Profile Section */}
    <div className="flex items-center mt-10">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#009688]"
      />
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-[#00264D]">{testimonial.name}</h3>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>

    {/* Bottom Quote Icon */}
    <img 
      src="/quote.png" 
      alt="quote" 
      className="w-12 h-12 absolute bottom-4 right-4 opacity-20 transform rotate-180"
    />
  </motion.div>
);

const NavigationButton = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
  >
    {direction === "prev" ? (
      <ChevronLeft className="w-6 h-6 text-[#00264D]" />
    ) : (
      <ChevronRight className="w-6 h-6 text-[#00264D]" />
    )}
  </button>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#009688] to-[#00264D] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="relative flex items-center justify-center">
          <NavigationButton onClick={handlePrev} direction="prev" />

          <div className="w-full flex justify-center">
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={currentIndex}
                testimonial={testimonials[currentIndex]}
                direction={direction}
              />
            </AnimatePresence>
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
