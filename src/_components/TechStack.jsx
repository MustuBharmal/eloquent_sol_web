import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const techStacks = {
  "App Development": [
    { name: "Dart", icon: "Dart 1.svg" },
    { name: "Flutter", icon: "Flutter 1.svg" },
    { name: "Kotlin", icon: "kotalin.svg" },
    { name: "Postman", icon: "postman 1.svg" },
  ],
  "Web Development": [
    { name: "React", icon: "react.svg" },
    { name: "Next.js", icon: "nextjs-icon.svg" },
    { name: "Node.js", icon: "nodejs-icon.svg" },
    { name: "MongoDB", icon: "mongodb.svg" },
  ],
  "Graphic Design": [
    { name: "Adobe Photoshop", icon: "photoshop 1.svg" },
    { name: "Figma", icon: "figma 1.svg" },
    { name: "Canva", icon: "canva 1.svg" },
    { name: "Illustrator", icon: "adobe_illustrator.svg" },
  ],
};

function TechStack() {
  const [activeTab, setActiveTab] = useState("App Development");

  return (
    <div className="w-full">
      <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title with decorative elements */}
          <div className="relative mb-16 sm:mb-24">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            <div className="absolute -top-10 left-1/3 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            
            <h2 className="relative text-4xl sm:text-5xl font-bold text-center text-[#00264D] mb-4">
              Our Tech Stack
            </h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust and scalable solutions
            </p>
          </div>

          {/* Tabs */}
          <Tabs
            defaultValue="App Development"
            className="w-full relative"
            onValueChange={setActiveTab}
          >
            <TabsList className="relative flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-0 mb-12 sm:mb-0">
              {Object.keys(techStacks).map((stack) => (
                <TabsTrigger
                  key={stack}
                  value={stack}
                  className={`relative px-6 py-3 transition-all duration-300 text-center rounded-lg sm:rounded-none
                    hover:bg-gray-50 sm:hover:bg-transparent group ${
                    activeTab === stack
                      ? "text-[#009688] font-semibold"
                      : "text-gray-600 hover:text-[#009688]"
                  }`}
                >
                  <span className="text-base sm:text-lg lg:text-xl transition-all duration-300 group-hover:scale-105">
                    {stack}
                  </span>
                  {activeTab === stack && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#009688] hidden sm:block" />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tabs Content */}
            <div className="mt-8 sm:mt-16">
              {Object.entries(techStacks).map(([stack, technologies]) => (
                <TabsContent 
                  key={stack} 
                  value={stack}
                  className="transition-all duration-500 transform"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                    {technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="group flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2"
                      >
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-4">
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full transform transition-transform duration-300 group-hover:scale-110" />
                          <div
                            className="relative w-full h-full bg-white rounded-full flex items-center justify-center
                              shadow-lg transition-all duration-300 group-hover:shadow-xl"
                          >
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                        </div>
                        <span className="text-sm sm:text-base font-medium text-gray-700 group-hover:text-[#009688] transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

export default TechStack;
