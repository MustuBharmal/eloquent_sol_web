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
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
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
        "Welcome to BohraDesign, your go-to hub for top-tier, on-demand services. At BohraDesign, we're transforming the way you find and experience essential services, effortlessly connecting you with skilled professionals ready to assist whenever you need them.",
      image: "p2.png",
      href: "https://www.bohradesign.com",
    },
    {
      id: 3,
      title: "Haqkiki",
      description:
        "With Haqkiki, make new acquaintances anywhere in the world! View millions of profiles from your own country or around the world. You can add the accounts you like to your social media apps by sending them friend requests.",
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
      className={`w-full min-h-screen bg-gradient-to-b from-[#F2F2F2] to-white relative py-20 px-6 sm:px-12 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-[#00264D] mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.7 }}
        >
          Our Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {visibleProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className={`w-full h-64 object-cover rounded-xl shadow-lg transition-transform duration-700 ${
                  imageLoaded[project.id] ? 'scale-100' : 'scale-105 blur-sm'
                }`}
                onLoad={() => handleImageLoad(project.id)}
              />
              <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a 
                href={project.href} 
                target="_blank" 
                className="mt-4 px-4 py-2 bg-[#009688] text-white rounded-xl hover:bg-[#00796b] transition-all"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>

        {allProjects.length > 2 && (
          <div className="flex justify-center mt-16">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-[#009688] text-white rounded-xl hover:bg-[#00796b] transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
