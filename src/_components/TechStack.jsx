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
   <div className="w-full ">
     <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Title */}
        <h2
          className="text-3xl font-bold text-center text-[#00264D] top-[80px]"
          style={{
            width: "23.875rem",
            height: "3.6875rem",
            fontSize: "3rem",
            lineHeight: "3.657rem",
            fontWeight: 700,
            margin: "0 auto",
          }}
        >
          Our Tech Stack
        </h2>

        {/* Tabs */}
        <Tabs
          defaultValue=""
          className="w-full relative  mt-28" 
          onValueChange={setActiveTab}
        >
          <TabsList className="relative grid w-full grid-cols-3">
            {Object.keys(techStacks).map((stack) => (
              <TabsTrigger
                key={stack}
                value={stack}
                className={`transition-all duration-300 text-center ${
                  activeTab === stack
                    ? "text-[#009688] font-semibold"
                    : "text-[#808080]"
                }`}
                style={{
                  width: "20rem",
                  height: "1.8125rem",
                  fontSize: "1.5rem",
                  lineHeight: "1.829rem",
                  fontWeight: 600,
                  margin: "0 auto",
                }}
              >
                {stack}
              </TabsTrigger>
            ))}

            {/* Sliding Bar */}
            <div
              className="absolute bottom-0 h-1 bg-[#009688] transition-all duration-300"
              style={{
                width: "33%",
                left:
                  activeTab === "App Development"
                    ? "0%"
                    : activeTab === "Web Development"
                    ? "33%"
                    : "66%",
              }}
            ></div>
          </TabsList>

          {/* Tabs Content */}
          {Object.entries(techStacks).map(([stack, technologies]) => (
            <TabsContent key={stack} value={stack}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-12 h-12"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
   </div>
  );
}

export default TechStack;
