import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { techStacks } from "../constant/service";

function TechStack() {
  const [activeTab, setActiveTab] = useState("App Development");

  console.log(techStacks)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-white to-gray-100 overflow-hidden">
      <section className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-center text-[#00264D] mb-8"
          >
            Our <span className="text-teal-500">Tech Stack</span>
          </motion.h2>

          {/* Tabs */}
          <Tabs defaultValue="App Development" onValueChange={setActiveTab}>
            <TabsList className="flex justify-center space-x-2 sm:space-x-4 mb-8">
              {Object.keys(techStacks).map((stack) => (
                <TabsTrigger
                  key={stack}
                  value={stack}
                  className={`px-3 sm:px-6 py-2 text-xs sm:text-sm text-center rounded-full transition-all duration-200 ${
                    activeTab === stack
                      ? "bg-teal-500 text-white font-semibold shadow-md"
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
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
                  >
                    <AnimatePresence>
                      {technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="group relative p-4 bg-white rounded-2xl shadow-lg 
                            hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex justify-center items-center">
                            <motion.img
                              initial={{ opacity: 0, rotate: -10 }}
                              animate={{ opacity: 1, rotate: 0 }}
                              transition={{ 
                                type: "spring", 
                                stiffness: 300, 
                                damping: 10 
                              }}
                              src={tech.icon}
                              alt={tech.name}
                              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 
                                transition-transform duration-300 
                                group-hover:rotate-6"
                            />
                          </div>
                          <h3 className="mt-4 text-center text-sm sm:text-base font-bold text-gray-900 
                            group-hover:text-teal-500 transition-colors">
                            {tech.name}
                          </h3>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
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
