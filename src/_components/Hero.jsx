import React from "react";

function Hero() {
  return (
    <div className="min-h-screen bg-white">
      <main className="relative w-full max-w-[90rem] h-[42.5rem] mx-auto mt-[5rem] px-4 sm:px-6 lg:px-8 overflow-hidden">
        <h1
          className="absolute top-[5rem] left-[5rem] w-[46.0625rem] h-[3.6875rem] font-montserrat font-bold text-[3rem] leading-[3.6569375rem] text-[#009688]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Eloquent Solutions
        </h1>
        <div
          className="absolute top-[10.4375rem] left-[5rem] w-[20.6875rem] h-[9.375rem] font-montserrat font-semibold text-[2rem] leading-[3.125rem] text-[#4A5568]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <p>Builds Smarter</p>
          <p>Develops Faster</p>
          <p>Innovates with Tech</p>
        </div>
        <div className="absolute top-[28.8125rem] left-[5rem] flex">
          <input
            type="email"
            placeholder="Enter your email to get started"
            className="w-[21.875rem] h-[3rem] rounded-lg border border-gray-300 px-[1.875rem] py-[1.1875rem] focus:outline-none focus:ring-2 focus:ring-[#009688]"
          />
          <button
            className="ml-6 w-[9.5rem] h-[3rem] bg-[#00264D] text-white rounded-2xl px-[1.5625rem] py-[1.1875rem] hover:bg-[#003366] transition-colors flex items-center justify-center"
            onClick={() => {
              window.location.href = "mailto:info@eloquentsolutions.in";
            }}
          >
            Get Started!
          </button>
        </div>
        <div className="absolute top-[8.3125rem] right-[10.1875rem] w-[22.8125rem] h-[25rem] border border-[#212121] flex items-center justify-center bg-gray-50">
          <span className="text-gray-400">
            <img
              src="headermain.svg" // Replace with your image path
              alt="Innovative Technology"
            />
          </span>
        </div>
      </main>
    </div>
  );
}

export default Hero;
