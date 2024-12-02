import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (location.pathname === '/') {
      // If we're on the homepage, scroll to the section
      const element = document.getElementById(path.replace('/', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to homepage then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(path.replace('/', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header
      className="w-full h-20 bg-white shadow-md fixed top-0 left-0 z-50"
      style={{
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex-shrink-0 transition-transform duration-200 hover:scale-105"
          >
            <img
              src="/Logo-02.png"
              alt="Logo"
              width={64}
              height={45}
              className="h-12 w-auto"
            />
          </Link>
          <nav className="ml-16 hidden lg:flex space-x-8">
            {[
              { label: 'Services', path: 'services' },
              { label: 'Projects', path: 'projects' },
              { label: 'Tech Stack', path: 'tech-stack' },
              { label: 'Why us', path: 'why-us' },
              { label: 'Testimonials', path: 'testimonials' },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.path)}
                className="text-gray-700 hover:text-[#00264D] font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <button
          onClick={() => handleNavigation('contact')}
          className="bg-[#00264D] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#003366] transition-colors duration-200"
        >
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Navbar;