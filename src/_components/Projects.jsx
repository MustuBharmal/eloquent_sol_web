import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const allProjects = [
    {
      id: 1,
      title: "Jagran Brand Activation",
      description:
        "Brand activation to increase brand awareness, drive sales, build lasting relationships with the target audience, and develop customer loyalty by events, campaigns, and interaction.",
      image: "p1.png",
      href: "https://play.google.com/store/apps/details?id=com.raj_infosys.jagran_solution&hl=en_US",
    },
    {
      id: 2,
      title: "BohraDesign",
      description:
        "Welcome to BohraDesign, your go-to hub for top-tier, on-demand services. At BohraDesign, we're transforming the way you find and experience essential services, effortlessly connecting you with skilled professionals ready to assist whenever you need them..",
      image: "p2.png",
      href: "https://www.bohradesign.com",
    },
    {
      id: 3,
      title: "Haqkiki",
      description:
        "With Haqkiki, make new acquaintances anywhere in the world! View millions of profiles from your own country or around the world. You can add the accounts you like to your social media apps by sending them friend requests. Maintain control over your social media accounts and choose who to share them with.",
      image: "p3.png",
      href: "https://play.google.com/store/apps/details?id=com.haqkiki&hl=en_US",
    },
    {
      id: 4,
      title: "SmartLearn - AI Education Platform",
      description:
        "An intelligent learning management system that personalizes education through AI-driven insights. SmartLearn adapts to each student's learning style, providing customized content and progress tracking for optimal educational outcomes.",
      image: "p4.png",
      href: "https://smartlearn.edu",
    },
  ];

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 2);

  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section 
      id="projects-section"
      className={`w-full min-h-screen bg-gradient-to-b from-[#F2F2F2] to-white relative py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center text-[#00264D] mb-20"
        >
          Our Projects
        </motion.h2>

        <div className="space-y-20 md:space-y-32">
          {visibleProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            >
              {/* Image Container */}
              <motion.div 
                className="w-full md:w-1/2 lg:w-[400px] aspect-[4/3] group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transform transition-transform duration-700 ${
                    imageLoaded[project.id] ? 'scale-100' : 'scale-105 blur-sm'
                  }`}
                  onLoad={() => handleImageLoad(project.id)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded[project.id] ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Content Container */}
              <motion.div 
                className="w-full md:w-1/2 space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                transition={{ duration: 0.7, delay: index * 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#009688] hover:text-[#00796b] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
                  {project.description}
                </p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 py-3 rounded-xl 
                    border-2 border-[#00264D] text-[#00264D] font-medium text-sm md:text-base
                    hover:bg-[#00264D] hover:text-white transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00264D]
                    transform hover:scale-105 active:scale-95"
                >
                  <span>View Project</span>
                  <svg 
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {allProjects.length > 2 && (
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center justify-center px-8 py-3 rounded-xl 
                bg-[#009688] text-white font-medium
                hover:bg-[#00796b] transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009688]
                transform hover:scale-105 active:scale-95"
            >
              <span>{showAll ? 'Show Less' : 'Show More'}</span>
              <motion.svg 
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-2 w-4 h-4"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;
