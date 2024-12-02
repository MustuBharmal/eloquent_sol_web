import React from "react";
import "../styles/animations.css";

function Hero() {
  return (
    <div
      className="min-h-screen bg-white relative"
      style={{
        background: "linear-gradient(111.98deg, rgba(188, 232, 227, 0.01) 31.94%, rgba(93, 204, 193, 0.3) 85.58%)",
      }}
    >
      <main className="relative w-full max-w-[90rem] h-[42.5rem] mx-auto mt-[5rem] px-4 sm:px-6 lg:px-8 overflow-hidden">
        <h1
          className="absolute top-[5rem] left-[5rem] w-[46.0625rem] h-[3.6875rem] font-montserrat font-bold text-[3rem] leading-[3.6569375rem] text-[#009688] animate-slideInLeft opacity-0"
          style={{ fontFamily: "Montserrat, sans-serif", animationDelay: "0.2s" }}
        >
          Eloquent Solutions
        </h1>
        <div
          className="absolute top-[10.4375rem] left-[5rem] w-[20.6875rem] h-[9.375rem] font-montserrat font-semibold text-[2rem] leading-[3.125rem] text-[#4A5568] animate-slideInLeft opacity-0"
          style={{ fontFamily: "Montserrat, sans-serif", animationDelay: "0.4s" }}
        >
          <p>Builds Smarter</p>
          <p>Develops Faster</p>
          <p>Innovates with Tech</p>
        </div>
        <div className="absolute top-[28.8125rem] left-[5rem] flex animate-fadeIn opacity-0" style={{ animationDelay: "0.6s" }}>
          <input
            type="email"
            placeholder="Enter your email to get started"
            className="w-[21.875rem] h-[3rem] rounded-lg border border-gray-300 px-[1.875rem] py-[1.1875rem] focus:outline-none focus:ring-2 focus:ring-[#009688] transition-all duration-300 hover:shadow-md"
          />
          <button
            className="ml-6 w-[9.5rem] h-[3rem] bg-[#00264D] text-white rounded-2xl px-[1.5625rem] py-[1.1875rem] hover:bg-[#003366] transition-all duration-300 flex items-center justify-center animate-pulse hover:scale-105"
            onClick={() => {
              window.location.href = "mailto:info@eloquentsolutions.in";
            }}
          >
            Get Started!
          </button>
        </div>
        <div className="absolute lg:top-[8.3125rem] lg:right-[10.1875rem] md:top-[6rem] md:right-[8rem] top-[4rem] right-[4rem] 
            lg:w-[22.8125rem] lg:h-[25rem] md:w-[20rem] md:h-[22rem] w-[16rem] h-[18rem] 
            flex items-center justify-center rounded-full 
            animate-slideInRight opacity-0
            hover:shadow-lg hover:shadow-blue-200/50"
            style={{ animationDelay: "0.4s" }}>
          <span className="w-full h-full p-2">
            <img
              src="headermain.svg"
              alt="Innovative Technology"
              className="w-full h-full object-contain animate-float"
            />
          </span>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#009688]/10 to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#009688]/5 to-transparent -z-10"></div>
      </main>
    </div>
  );
}

export default Hero;
