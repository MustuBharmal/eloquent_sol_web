import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft , ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
    name: "Sanket",
    role: "CEO of productxyz.com",
    avatar: "person.png",
  },
  {
    id: 2,
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    name: "John Doe",
    role: "CTO of abctech.com",
    avatar: "person.png",
  },
  {
    id: 3,
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
    name: "Jane Smith",
    role: "Founder of xyztech.com",
    avatar: "person.png",
  },
];

const TestimonialCard = ({ testimonial, direction }) => (
  <motion.div
    initial={{ opacity: 0, x: direction === "right" ? 20 : -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: direction === "right" ? -20 : 20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="w-full md:w-[35rem] h-auto md:h-[32rem] relative bg-white rounded-2xl shadow-xl p-8 md:p-12"
    style={{
      borderImage: "linear-gradient(to right, #009688, #00264D) 1",
      borderWidth: "2px",
      borderStyle: "solid",
    }}
  >
    {/* Quote decorations */}
    <div className="absolute top-6 left-6 w-12 h-12">
      <img src="quote.png" alt="Quote" className="w-full h-full opacity-90 " />
    </div>
    <div className="absolute bottom-[6.5rem] right-6 w-12 h-12 transform rotate-180">
      <img src="quote.png" alt="Quote" className="w-full h-full " />
    </div>

    {/* Content */}
    <div className="mt-[8rem] mb-10 text-center px-4">
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        {testimonial.quote}
      </p>
    </div>

    {/* Profile */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4"
    >
      <div className="relative w-12 h-12 md:w-14 md:h-14">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-full h-full rounded-full object-cover border-2 border-[#009688]"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#009688]/20 to-[#00264D]/20" />
      </div>
      <div className="text-left">
        <h3 className="font-semibold text-[#00264D]">{testimonial.name}</h3>
        <p className="text-sm text-gray-600">{testimonial.role}</p>
      </div>
    </motion.div>
  </motion.div>
);

const NavigationButton = ({ onClick, direction, disabled }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    disabled={disabled}
   
  >
    {direction === "prev" ? (
      <ChevronLeft className="w-6 h-6 text-black" />
    ) : (
      <ChevronRight className="w-6 h-6 text-black" />
    )}
  </motion.button>
);


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section 
      id="testimonials-section"
      className="relative w-full min-h-screen px-4 py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(79.34%_89.82%_at_50%_10.18%,rgba(0,150,136,0.1)_0%,rgba(0,150,136,0.01)_29.52%,rgba(0,150,136,0.01)_100%)]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#009688]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#00264D]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#00264D] mb-20"
        >
          Our Testimonials
        </motion.h2>

        {/* Testimonial Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Blur Background */}
          <div className="absolute inset-0 -z-10 backdrop-blur-sm bg-white/30 rounded-3xl" />

          {/* Navigation */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 z-10">
            <NavigationButton onClick={handlePrev} direction="prev" />
            <NavigationButton onClick={handleNext} direction="next" />
          </div>

          {/* Testimonial Cards */}
          <div className="relative px-4 py-8 flex justify-center items-center min-h-[500px]">
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={currentIndex}
                testimonial={testimonials[currentIndex]}
                direction={direction}
              />
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? "right" : "left");
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${index === currentIndex 
                    ? 'w-8 bg-[#009688]' 
                    : 'bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;