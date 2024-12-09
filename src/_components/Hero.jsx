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
      const subject = encodeURIComponent("Inquiry from Eloquent Solutions Website");
      const body = encodeURIComponent(`Email: ${email}\n\nMessage: I'm interested in learning more about Eloquent Solutions.`);
      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@eloquentsolutions.in&su=${subject}&body=${body}`;
      
      // Open Gmail compose window
      window.open(gmailComposeUrl, '_blank');
    }
  };

  return (
    <div 
      className="min-h-screen bg-white relative overflow-hidden"
      style={{
        background: "linear-gradient(111.98deg, rgba(188, 232, 227, 0.01) 31.94%, rgba(93, 204, 193, 0.3) 85.58%)",
      }}
    >
      <main className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-32">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-4 text-center lg:text-left">
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#009688] 
                         animate-slideInLeft opacity-0"
              style={{ 
                fontFamily: "Montserrat, sans-serif",
                animationDelay: "0.2s"
              }}
            >
              Eloquent Solutions
            </h1>

            <div 
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#4A5568] 
                          animate-slideInLeft opacity-0"
              style={{ 
                fontFamily: "Montserrat, sans-serif",
                animationDelay: "0.4s"
              }}
            >
              <p>Builds Smarter</p>
              <p>Develops Faster</p>
              <p>Innovates with Tech</p>
            </div>

            <div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 
                          animate-fadeIn opacity-0"
              style={{ animationDelay: "0.6s" }}
            >
              <input 
                type="email"
                placeholder="Enter your email to get started"
                value={email}
                onChange={handleEmailChange}
                className={`w-full sm:w-96 h-12 rounded-lg border ${
                  email && !isValid 
                    ? 'border-red-500 text-red-600' 
                    : 'border-gray-300'
                } px-6 py-4 
                           focus:outline-none focus:ring-2 focus:ring-[#009688] 
                           transition-all duration-300 hover:shadow-md`}
              />
              <button 
                className={`w-full sm:w-auto h-12 mt-4 sm:mt-0 rounded-2xl px-6 py-4 
                           transition-all duration-300 
                           flex items-center justify-center 
                           ${isValid 
                             ? 'bg-[#00264D] text-white hover:bg-[#003366] animate-pulse hover:scale-105' 
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

          {/* Image Content */}
          <div 
            className="hidden lg:flex items-center justify-center animate-slideInTop opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-full max-w-md h-[25rem] flex items-center justify-center">
              <img 
                src="headermain.svg"
                alt="Innovative Technology"
                className="w-full h-full object-contain animate-float"
              />
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#009688]/10 to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#009688]/5 to-transparent -z-10"></div>
      </main>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes slideInTop {
          0% {
            opacity: 0;
            transform: translateY(-100px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-slideInTop {
          animation: slideInTop 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Hero;