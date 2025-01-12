import React, { useState } from "react";

function Hero() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle email input changes
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  };

  // Handle button click
  const handleGetStarted = () => {
    if (isValid) {
      // Construct Gmail compose URL
      const subject = encodeURIComponent("Inquiry from Eloquent Solutions ");
      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@eloquentsolutions.in&su=${subject}`;
      
      // Open Gmail compose window
      window.open(gmailComposeUrl, '_blank');
    }
  };

  return (
    <div 
      className="bg-white relative overflow-hidden w-full"
      style={{
        background: "linear-gradient(111.98deg, rgba(188, 232, 227, 0.01) 31.94%, rgba(93, 204, 193, 0.3) 85.58%)",
      }}
    >
      <main className="w-full px-4 sm:px-6 lg:px-8 py-[10rem] sm:py-40 md:py-48 lg:py-56">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-4 text-center lg:text-left order-2 lg:order-1">
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#009688] 
                         animate-slideInLeft opacity-0 mb-2 sm:mb-4"
              style={{ 
                fontFamily: "Montserrat, sans-serif",
                animationDelay: "0.2s"
              }}
            >
              Eloquent Solutions
            </h1>

            <div 
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#4A5568] 
                          animate-slideInLeft opacity-0 mb-4 sm:mb-6"
              style={{ 
                fontFamily: "Montserrat, sans-serif",
                animationDelay: "0.4s"
              }}
            >
              <p className="mb-1">Builds Smarter</p>
              <p className="mb-1">Develops Faster</p>
              <p>Innovates with Tech</p>
            </div>

            <div 
              className="flex flex-col space-y-3 sm:space-y-0 
                          animate-fadeIn opacity-0"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <input 
                  type="email"
                  placeholder="Enter your email to get started"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full h-12 rounded-lg border ${
                    email && !isValid 
                      ? 'border-red-500 text-red-600' 
                      : 'border-gray-300'
                  } px-4 sm:px-6 py-2 
                             focus:outline-none focus:ring-2 focus:ring-[#009688] 
                             transition-all duration-300 hover:shadow-md`}
                />
                <button 
                  className={`w-full sm:w-auto h-12 rounded-2xl px-4 sm:px-6 py-2
                             transition-all duration-300 
                             flex items-center justify-center 
                             hover:shadow-md whitespace-nowrap
                             ${isValid 
                               ? 'bg-green-500 text-white hover:bg-green-400 animate-pulse hover:scale-105' 
                               : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                             }`}
                  onClick={handleGetStarted}
                  disabled={!isValid}
                >
                  Get Started!
                </button>
              </div>
              {email && !isValid && (
                <p className="text-red-500 text-sm mt-2 text-center lg:text-left">
                  Please enter a valid email address
                </p>
              )}
            </div>
          </div>

          {/* Image Content */}
          <div 
            className="flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0 
                       animate-slideInTop opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-full max-w-md h-auto flex items-center justify-center">
              <img 
                src="assets/icons/headermain.svg"
                alt="Innovative Technology"
                className="w-full h-full max-h-64 sm:max-h-80 lg:max-h-[25rem] object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
