import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Custom App Development",
      description: "Building intuitive, scalable, and high-performance mobile applications tailored to your business needs.",
      details: "Whether it's Android, iOS, or cross-platform, we deliver apps that enhance user experiences and drive results.",
      image: "app-dev.png",
    },
    {
      title: "Web Design & Development",
      description: "Creating responsive and visually stunning websites that leave lasting impressions.",
      details: "From e-commerce platforms to portfolio websites, we ensure your online presence stands out with cutting-edge design and functionality.",
      image: "web-dev.webp",
    },
    {
      title: "Creative Graphic Design",
      description: "Crafting compelling visuals that resonate with your brand identity.",
      details: "From logos to marketing materials , documents, and more. We also provide graphic design services for businesses looking to enhance their brand identity and visual appeal.",
      image: "graphic-design.webp",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-32"
    >
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div
          className="w-full h-full opacity-30"
          style={{
            background: `radial-gradient(circle at 20% 20%, rgba(0, 150, 136, 0.15) 0%, rgba(0, 150, 136, 0) 25%), 
                         radial-gradient(circle at 80% 50%, rgba(0, 38, 77, 0.1) 0%, rgba(0, 38, 77, 0) 30%), 
                         linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(105, 167, 231, 0.05) 100%)`
          }}
        />
      </div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="font-montserrat font-bold text-3xl md:text-5xl text-[#00264D]">
          Our Services
        </h2>
      </motion.div>

      {/* Services Cards */}
      <div className="grid gap-16 md:gap-20 lg:gap-24 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col md:flex-col lg:flex-col gap-8"
          >
            {/* Image Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="flex-1 space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h3 className="font-montserrat font-semibold text-xl md:text-2xl lg:text-3xl text-[#009688]">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                {service.description}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {service.details}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="mt-4 px-6 py-3 rounded-lg border-2 border-[#00264D] font-medium text-[#00264D] bg-transparent hover:bg-[#00264D] hover:text-white transition-all duration-300"
              >
                Know more
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
