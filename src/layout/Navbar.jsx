import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { navItems } from "../constant/service";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [targetSection, setTargetSection] = useState(null);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section after route change
  useEffect(() => {
    if (targetSection) {
      scrollToSection(targetSection);
      setTargetSection(null); // Reset the target after scrolling
    }
  }, [location, targetSection]);

  // Unified navigation handler for desktop and mobile
  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      setTargetSection(sectionId); // Set the target section to scroll after navigation
      navigate('/'); // Navigate to homepage
    } else {
      // If already on homepage, scroll directly to the section
      scrollToSection(sectionId);
    }
    setIsOpen(false); // Close mobile menu
  };

  // Scroll to the section by id
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle logo click
  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/'); // Navigate to homepage
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    }
  };

  return (
    <header
      className={`w-full h-20 fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Click */}
        <div className="flex-shrink-0">
          <button onClick={handleLogoClick} className="flex-shrink-0">
            <img src="/Logo-02.png" alt="Logo" className="h-10 sm:h-12 w-auto" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="ml-8 lg:ml-16 hidden lg:flex space-x-6 xl:space-x-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.path)}
              className="text-gray-700 hover:text-[#00264D] font-medium text-sm uppercase tracking-wide relative group"
            >
              {item.label}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#009688] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-[#00264D] block transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-[#00264D] block transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-[#00264D] block transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Contact Us Button */}
        <button
          onClick={() => handleNavigation('contact')}
          className="hidden lg:block text-white bg-[#009688] hover:bg-[#00796B] font-medium text-sm uppercase tracking-wide px-4 py-2 rounded-lg transition-colors duration-300"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.path)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-[#00264D] hover:bg-gray-50 rounded-lg
                  font-medium text-sm uppercase tracking-wide transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('contact')}
              className="block w-full text-left px-4 py-2 text-white bg-[#009688] hover:bg-[#00796B] rounded-lg
                font-medium text-sm uppercase tracking-wide transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
