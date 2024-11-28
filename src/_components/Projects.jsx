import React from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Hotfocus",
      description:
        "Moment in both your eyes (gaze) with other (how you look and what your eyes see). with esse cilium dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Haqkiki",
      description:
        "Haqkiki is a social networking app for connecting people across the globe. with esse cilium dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="w-full h-[1272px]  bg-[#F2F2F2] relative">
      <h2
        className="w-[315px] h-[59px] absolute top-[80px] left-[563px] 
        font-montserrat font-bold text-[48px] leading-[58.51px] text-center text-[#00264D]"
      >
        Our Projects
      </h2>

      <div className="space-y-16 absolute top-[304px]">
        {projects.map((project, index) => (
          <div key={project.id} className="w-[960px] h-[350px] ml-[240px] flex">
            <div className="w-[309.68px] h-[350px] border border-[#212121]">
              <img
                src={project.image}
                alt={project.title}
                width={310}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="ml-16 flex flex-col justify-center ">
              <h3
                className="w-[400px] h-[39px] text-[#009688]
                font-semibold text-[32px] leading-[39px] mb-12"
              >
                {project.title}
              </h3>
              <p  className="mb-5 top-[367px]">{project.description}</p>
              <button
                type="button"
                className="w-[145px] h-[48px] px-1 py-1 rounded-[16px] 
                border border-[#00264D] text-center inline-flex items-center 
                justify-center hover:bg-[#00264D] hover:text-white 
                transition-colors duration-300 mb-12"
              >
                Check it Out
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
