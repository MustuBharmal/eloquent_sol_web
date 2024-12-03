import React from 'react';
import { motion } from 'framer-motion';

const WhyEloquentSolutions = () => {
  const items = [
    {
      icon: (
        <img
          src="setting image.png"
          alt="Design Icon"
          className="w-[3.5rem] md:w-[4.5rem] lg:w-[5.625rem] h-[3.5rem] md:h-[4.5rem] lg:h-[5.625rem] transition-transform duration-300 group-hover:scale-110"
        />
      ),
      title: "Designing Ideas, Building Futures",
      content: "Turning your vision into digital experiences that inspire and engage",
    },
    {
      icon: (
        <img
          src="robo image.png"
          alt="Technology Icon"
          className="w-[3.5rem] md:w-[4.5rem] lg:w-[5.625rem] h-[3.5rem] md:h-[4.5rem] lg:h-[5.625rem] transition-transform duration-300 group-hover:scale-110"
        />
      ),
      title: "Empowering Brands with Technology",
      content: "Leveraging the latest tools to create apps and websites that drive results",
    },
    {
      icon: (
        <img
          src="idea image.png"
          alt="Innovation Icon"
          className="w-[3.5rem] md:w-[4.5rem] lg:w-[5.625rem] h-[3.5rem] md:h-[4.5rem] lg:h-[5.625rem] transition-transform duration-300 group-hover:scale-110"
        />
      ),
      title: "Innovate, Create, Inspire",
      content: "Blending creativity and strategy to deliver designs that captivate",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="w-full max-w-[90rem] min-h-[30rem] md:min-h-[40rem] lg:min-h-[46.75rem] mt-[8rem] md:mt-[10rem] lg:mt-[15rem] px-4 md:px-6 lg:px-8 bg-[radial-gradient(73.87%_83.62%_at_50%_16.38%,rgba(0,150,136,0.1)_0%,rgba(0,150,136,0.01)_29.6%,rgba(0,150,136,0.01)_100%)]">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[38rem] mx-auto pt-[3rem] md:pt-[4rem] lg:pt-[5rem] text-center text-2xl md:text-3xl lg:text-[3rem] font-bold leading-tight lg:leading-[3.657rem] text-[#00264D]"
      >
        Why Eloquent Solutions
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row justify-center gap-8 md:gap-[2rem] lg:gap-[3.75rem] mt-[4rem] md:mt-[6rem] lg:mt-[10.3125rem] px-4"
      >
        {items.map((item, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="group w-full md:w-[15.5rem] lg:w-[17.5rem] h-auto md:h-[17.5rem] lg:h-[18.5rem] relative flex flex-col items-center p-4 md:p-0"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-[8rem] md:w-[9rem] lg:w-[10rem] h-[8rem] md:h-[9rem] lg:h-[10rem] rounded-full border border-[#F2F2F2] bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              {item.icon}
            </motion.div>
            <h3 className="mt-6 md:mt-8 lg:mt-[3.125rem] w-full max-w-[15.5rem] text-center text-lg md:text-xl lg:text-[1.25rem] font-semibold leading-tight text-black">
              {item.title}
            </h3>
            <p className="mt-4 w-full max-w-[17.5rem] text-center text-sm md:text-base font-normal leading-relaxed text-black font-roboto">
              {item.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyEloquentSolutions;