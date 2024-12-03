import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0, scale: 0.8 },
  show: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

function TechStack() {
  const [activeTab, setActiveTab] = useState("App Development");
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="w-full overflow-hidden">
      <section className="py-12 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-[#00264D] mb-12 md:mb-16 relative"
          >
            <motion.span
              className="inline-block"
              whileHover={{
                scale: 1.05,
                color: "#009688",
                transition: { duration: 0.2 },
              }}
            >
              Our Tech Stack
            </motion.span>
          </motion.h2>

          {/* Tabs */}
          <Tabs
            defaultValue="App Development"
            className="w-full relative mt-8 md:mt-16"
            onValueChange={setActiveTab}
          >
            <TabsList className="relative grid w-full grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-0 p-2 bg-gradient-to-r from-gray-50/50 via-white/50 to-gray-50/50 rounded-2xl backdrop-blur-sm">
              {Object.keys(techStacks).map((stack, index) => (
                <motion.div
                  key={stack}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <TabsTrigger
                    value={stack}
                    className={`relative w-full transform transition-all duration-500 text-center px-4 py-3 md:px-6 md:py-4 rounded-xl overflow-hidden ${
                      activeTab === stack
                        ? "text-[#009688] font-semibold bg-white shadow-lg scale-105 border border-teal-100"
                        : "text-[#808080] hover:text-[#009688] hover:-translate-y-1 hover:bg-white/80 hover:shadow-md"
                    }`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-50/50 via-white/50 to-teal-50/50"
                      initial={false}
                      animate={{
                        opacity: activeTab === stack ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="relative z-10 text-sm md:text-base lg:text-xl whitespace-nowrap flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {stack}
                      {activeTab === stack && (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-4 h-4 text-[#009688]"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </motion.svg>
                      )}
                    </motion.span>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009688]"
                      initial={false}
                      animate={{
                        scaleX: activeTab === stack ? 1 : 0,
                        opacity: activeTab === stack ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>

            {/* Tabs Content */}
            <div className="mt-12 md:mt-20">
              <AnimatePresence mode="wait">
                {Object.entries(techStacks).map(([stack, technologies]) => (
                  <TabsContent key={stack} value={stack}>
                    <motion.div
                      variants={container}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, transition: { duration: 0.2 } }}
                      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12"
                    >
                      {technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          variants={item}
                          whileHover={{ scale: 1.05 }}
                          onHoverStart={() => setHoveredTech(tech.name)}
                          onHoverEnd={() => setHoveredTech(null)}
                          className="flex flex-col items-center text-center group"
                        >
                          <motion.div
                            whileHover={{ y: -8 }}
                            className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-2xl flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:shadow-2xl group-hover:bg-gradient-to-br from-white to-gray-50"
                            style={{
                              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                            }}
                          >
                            <motion.img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6, ease: "easeInOut" }}
                            />
                          </motion.div>
                          <motion.span
                            animate={{
                              color: hoveredTech === tech.name ? "#009688" : "#374151",
                              scale: hoveredTech === tech.name ? 1.1 : 1,
                            }}
                            className="text-sm md:text-base lg:text-lg font-medium transition-all duration-300"
                          >
                            {tech.name}
                          </motion.span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

export default TechStack;
