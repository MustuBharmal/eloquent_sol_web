import { Link } from "react-router-dom";

const Navbar = () => {
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
            <Link
              to="/#services"
              className="text-gray-700 hover:text-[#00264D] font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Services
            </Link>
            <Link
              to="/#projects"
              className="text-gray-700 hover:text-[#00264D] font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Projects
            </Link>
            <Link
              to="/#tech-stack"
              className="text-gray-700 hover:text-[#00264D] font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Tech Stack
            </Link>
            <Link
              to="/#why-us"
              className="text-gray-700 hover:text-[#00264D] font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Why us
            </Link>
            <Link
              to="/#testimonials"
              className="text-gray-700 hover:text-[#00264D] font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Testimonials
            </Link>
          </nav>
        </div>
        <Link
          to="/contact"
          className="bg-[#00264D] text-white px-6 py-2.5 rounded-lg shadow-md hover:bg-[#003366] transition-all duration-200 font-medium text-sm uppercase tracking-wide transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00264D] focus:ring-opacity-50 inline-block"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
