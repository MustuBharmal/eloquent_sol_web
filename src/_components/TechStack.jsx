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
    <div className="w-full bg-gray-50">
      <section className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#00264D] mb-8">
            Our <span className="text-teal-500">Tech Stack</span>
          </h2>

          {/* Tabs */}
          <Tabs defaultValue="App Development" onValueChange={setActiveTab}>
            <TabsList className="flex justify-center space-x-4 mb-8">
              {Object.keys(techStacks).map((stack) => (
                <TabsTrigger
                  key={stack}
                  value={stack}
                  className={`px-6 py-2 text-center rounded-lg transition-all duration-200 ${
                    activeTab === stack
                      ? "bg-teal-500 text-white font-semibold"
                      : "bg-white text-gray-800 hover:bg-teal-100"
                  }`}
                >
                  {stack}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mt-8">
              {Object.entries(techStacks).map(([stack, technologies]) => (
                <TabsContent key={stack} value={stack}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="group relative p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 md:hover:scale-110"
                      >
                        <div className="flex justify-center items-center">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-12 h-12 md:w-16 md:h-16"
                          />
                        </div>
                        <h3 className="mt-4 text-center text-sm md:text-base font-semibold group-hover:text-teal-500">
                          {tech.name}
                        </h3>
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
