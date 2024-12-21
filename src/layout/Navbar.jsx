import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage first
      setTargetSection(sectionId); // Set the target section to scroll after navigation
      navigate("/"); // Navigate to homepage
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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle logo click
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to homepage
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    }
  };

  const navItems = [
    { label: "Services", path: "services" },
    { label: "Projects", path: "projects" },
    { label: "Tech Stack", path: "tech-stack" },
    { label: "Why Us", path: "why-us" },
    { label: "Testimonials", path: "testimonials" },
    { label: "Contact Us", path: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full h-20 fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Click */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button onClick={handleLogoClick} className="flex-shrink-0">
            <img
              src="/Logo-02.png"
              alt="Logo"
              className="h-10 sm:h-12 w-auto"
            />
          </button>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="ml-8 lg:ml-16 hidden lg:flex space-x-6 xl:space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleNavigation(item.path)}
              className="text-gray-700 hover:text-[#00264D] font-medium text-sm uppercase tracking-wide relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#009688] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-[#00264D] block transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-[#00264D] block transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-[#00264D] block transition-all duration-300"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  type="button" 
                  onClick={() => handleNavigation(item.path)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-[#00264D] hover:bg-gray-50 rounded-lg
                 font-medium text-sm uppercase tracking-wide transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
