import React from "react";
import { services } from "../constant/service";

const Services = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div
          className="w-full h-full opacity-30"
          style={{
            background: `radial-gradient(circle at 20% 20%, rgba(0, 150, 136, 0.15) 0%, rgba(0, 150, 136, 0) 25%), 
                         radial-gradient(circle at 80% 50%, rgba(0, 38, 77, 0.1) 0%, rgba(0, 38, 77, 0) 30%), 
                         linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(105, 167, 231, 0.05) 100%)`,
          }}
        />
      </div>

      {/* Title Section */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-montserrat font-bold text-3xl md:text-5xl text-[#00264D]">
          Our Services
        </h2>
      </div>

      {/* Services Cards */}
      <div className="grid gap-12 md:gap-16 lg:gap-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-8">
            {/* Image Section */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-4 text-center">
              <h3 className="font-montserrat font-semibold text-xl md:text-2xl lg:text-3xl text-[#009688]">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                {service.description}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {service.details}
              </p>
              <button className="mt-4 px-6 py-3 rounded-lg border-2 border-[#00264D] font-medium text-[#00264D] bg-transparent hover:bg-[#00264D] hover:text-white transition-all duration-300">
                Know more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
