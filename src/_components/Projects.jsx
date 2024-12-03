import React, { useState, useEffect } from "react";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

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
      title: "Hotfocus",
      description:
        "Moment in both your eyes (gaze) with other (how you look and what your eyes see). with esse cilium dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/placeholder.svg",
      techStack: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Haqkiki",
      description:
        "Haqkiki is a social networking app for connecting people across the globe. with esse cilium dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/placeholder.svg",
      techStack: ["Flutter", "Firebase", "AWS"],
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "Description for project three. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/placeholder.svg",
      techStack: ["React Native", "GraphQL", "PostgreSQL"],
    },
    {
      id: 4,
      title: "Project Four",
      description:
        "Description for project four. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/placeholder.svg",
      techStack: ["Vue.js", "Django", "MySQL"],
    },
  ];

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 2);

  return (
    <section 
      id="projects-section"
      className={`w-full min-h-screen bg-[#F2F2F2] relative py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center text-[#00264D] mb-20 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Our Projects
        </h2>

        <div className="space-y-20 md:space-y-32">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 lg:w-[400px] aspect-[4/3] group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-semibold text-[#009688] hover:text-[#00796b] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
                <button
                  type="button"
                  className="group relative inline-flex items-center justify-center px-8 py-3 rounded-2xl 
                    border-2 border-[#00264D] text-[#00264D] font-medium
                    hover:bg-[#00264D] hover:text-white transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00264D]
                    transform hover:scale-105 active:scale-95"
                >
                  <span>Check it Out</span>
                  <svg 
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {allProjects.length > 2 && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center justify-center px-8 py-3 rounded-2xl 
                bg-[#009688] text-white font-medium
                hover:bg-[#00796b] transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#009688]
                transform hover:scale-105 active:scale-95"
            >
              <span>{showAll ? 'Show Less' : 'Show More'}</span>
              <svg 
                className={`ml-2 w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
