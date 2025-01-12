import React, { useState, useEffect } from "react";
import { allProjects } from "../constant/service";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});
  const [expanded, setExpanded] = useState({});

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

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section 
      id="projects-section"
      className={`w-full min-h-screen bg-gradient-to-b from-[#F2F2F2] to-white relative py-20 px-6 sm:px-12 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-[#00264D] mb-16 transition-opacity duration-700"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          Our Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-700"
              style={{ transform: isVisible ? 'translateY(0)' : 'translateY(50px)', opacity: isVisible ? 1 : 0 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-48 object-contain transition-transform duration-700 ${
                  imageLoaded[project.id] ? 'scale-100' : 'scale-105 blur-sm'
                }`}
                onLoad={() => handleImageLoad(project.id)}
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-center">{project.title}</h3>
                  <p className="mt-2 text-gray-600">
                    {expanded[project.id] ? project.description : `${project.description.slice(0, 100)}...`}
                    {project.description.length > 100 && (
                      <button 
                        onClick={() => toggleExpand(project.id)} 
                        className="text-[#009688] ml-2"
                      >
                        {expanded[project.id] ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </p>
                </div>
                <a 
                  href={project.href} 
                  target="_blank" 
                  className="mt-4 inline-block px-4 py-2 bg-[#009688] text-white rounded-xl hover:bg-[#00796b] transition-all self-center"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {allProjects.length > 3 && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-[#009688] text-white rounded-xl hover:bg-[#00796b] transition-all"
              style={{ transform: isVisible ? 'translateY(0)' : 'translateY(20px)', opacity: isVisible ? 1 : 0 }}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
