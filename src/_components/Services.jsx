import React from "react";

const Services = () => {
  return (
    <section
      className="w-full max-w-[1440px] h-auto min-h-[1300px] mx-auto relative px-4 md:px-6 lg:px-0"
      style={{
        background:
          "radial-gradient(93.92% 93.92% at 50% 6.08%, rgba(105, 167, 231, 0.2) 0%, rgba(105, 167, 231, 0.01) 30.39%, rgba(105, 167, 231, 0.01) 98.56%)",
      }}
    >
      {/* Title Section */}
      <div className="absolute top-[10px] left-[50%] transform -translate-x-1/2 w-full text-center">
        <h2 className="font-montserrat font-bold text-3xl md:text-[48px] leading-tight md:leading-[58.51px] text-[#00264D]">
          Our Services
        </h2>
      </div>

      {/* Services Cards */}
      <div className="absolute top-[180px] left-0 lg:left-[240px] space-y-8 w-full lg:w-auto px-4 lg:px-0">
        {/* Service 1: Custom App Development */}
        <div className="flex flex-col lg:flex-row w-full lg:w-[960px] h-auto lg:h-[320px] mb-8">
          {/* Image Section */}
          <div className="relative w-full lg:w-[309.68px] h-[250px] lg:h-[320px] border border-[#212121] overflow-hidden">
            <img
              src="placeholder-image-url.jpg"
              alt="Mobile application development illustration"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 pt-6 lg:pt-0 lg:pl-[62px]">
            <h3 className="font-montserrat font-semibold text-2xl lg:text-[32px] leading-tight lg:leading-[39.01px] text-[#009688] w-full lg:w-[494px]">
              Custom App Development
            </h3>
            <div>
              <p className="font-roboto font-bold text-[16px] leading-[18.75px] mt-6 w-full lg:w-[588.39px]">
                Building intuitive, scalable, and high-performance mobile
                applications tailored to your business needs.
              </p>
              <p>
                Whether it's Android, iOS, or cross-platform, we deliver apps
                that enhance user experiences and drive results.
              </p>
            </div>

            <button className="mt-8 lg:mt-[133px] w-auto h-[48px] border-[0.2px] border-[#00264D] rounded-[16px] px-6 py-2 flex items-center justify-center gap-[10px] bg-[#F2F2F2] hover:bg-[#00264D] hover:text-white transition-all duration-300 transform hover:scale-105">
              <span className="font-montserrat">Know more</span>
            </button>
          </div>
        </div>

        {/* Service 2: Web Design & Development */}
        <div className="flex flex-col lg:flex-row w-full lg:w-[960px] h-auto lg:h-[320px] mb-8">
          {/* Image Section */}
          <div className="relative w-full lg:w-[309.68px] h-[250px] lg:h-[320px] border border-[#212121] overflow-hidden">
            <img
              src="placeholder-image-url.jpg"
              alt="Web development and coding concept"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 pt-6 lg:pt-0 lg:pl-[62px]">
            <h3 className="font-montserrat font-semibold text-2xl lg:text-[32px] leading-tight lg:leading-[39.01px] text-[#009688] w-full lg:w-[494px]">
              Web Design & Development
            </h3>
            <div>
              <p className="font-roboto font-bold text-[16px] leading-[18.75px] mt-6 w-full lg:w-[588.39px]">
                Creating responsive and visually stunning websites that leave
                lasting impressions.
              </p>
              <p>
                From e-commerce platforms to portfolio websites, we ensure your
                online presence stands out with cutting-edge design and
                functionality.
              </p>
            </div>

            <button className="mt-8 lg:mt-[133px] w-auto h-[48px] border-[0.2px] border-[#00264D] rounded-[16px] px-6 py-2 flex items-center justify-center gap-[10px] bg-[#F2F2F2] hover:bg-[#00264D] hover:text-white transition-all duration-300 transform hover:scale-105">
              <span className="font-montserrat">Know more</span>
            </button>
          </div>
        </div>

        {/* Service 3: Creative Graphic Design */}
        <div className="flex flex-col lg:flex-row w-full lg:w-[960px] h-auto lg:h-[320px] mb-8">
          {/* Image Section */}
          <div className="relative w-full lg:w-[309.68px] h-[250px] lg:h-[320px] border border-[#212121] overflow-hidden">
            <img
              src="placeholder-image-url.jpg"
              alt="Creative design and branding workspace"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 pt-6 lg:pt-0 lg:pl-[62px]">
            <h3 className="font-montserrat font-semibold text-2xl lg:text-[32px] leading-tight lg:leading-[39.01px] text-[#009688] w-full lg:w-[494px]">
              Creative Graphic Design
            </h3>
            <div>
              <p className="font-roboto font-bold text-[16px] leading-[18.75px] mt-6 w-full lg:w-[588.39px]">
                Crafting compelling visuals that resonate with your brand
                identity.
              </p>
              <p>
                From logos to marketing materials, we help you communicate
                effectively through brand elements, documents, and more.
              </p>
            </div>
            <button className="mt-8 lg:mt-[133px] w-auto h-[48px] border-[0.2px] border-[#00264D] rounded-[16px] px-6 py-2 flex items-center justify-center gap-[10px] bg-[#F2F2F2] hover:bg-[#00264D] hover:text-white transition-all duration-300 transform hover:scale-105">
              <span className="font-montserrat">Know more</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;