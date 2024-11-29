import React from 'react';

const WhyEloquentSolutions = () => {
  const items = [
    {
      icon: (
        <img
          src="setting image.png"
          alt="Design Icon"
          className="w-[5.625rem] h-[5.625rem]"
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
          className="w-[5.625rem] h-[5.625rem]"
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
          className="w-[5.625rem] h-[5.625rem]"
        />
      ),
      title: "Innovate, Create, Inspire",
      content: "Blending creativity and strategy to deliver designs that captivate",
    },
  ];

  return (
    <div className="w-[90rem] h-[46.75rem] mt-[15rem] bg-[radial-gradient(73.87%_83.62%_at_50%_16.38%,rgba(0,150,136,0.1)_0%,rgba(0,150,136,0.01)_29.6%,rgba(0,150,136,0.01)_100%)]">
      <h2 className="w-[38rem] h-[3.6875rem] mt-[5rem] mx-auto text-center text-[3rem] font-bold leading-[3.657rem] text-[#00264D]">
        Why Eloquent Solutions
      </h2>
      <div className="flex justify-center gap-[3.75rem] mt-[10.3125rem]">
        {items.map((item, index) => (
          <div key={index} className="w-[17.5rem] h-[18.5rem] relative">
            <div className="w-[10rem] h-[10rem] absolute top-0 left-1/2 -translate-x-1/2 rounded-[18.75rem] border border-[#F2F2F2] shadow-[0px_0.25rem_0.5rem_0px_#000000] flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="w-[15.5rem] h-[3rem] absolute top-[12.125rem] left-1/2 -translate-x-1/2 text-center text-[1.25rem] font-semibold leading-[1.524rem] text-black">
              {item.title}
            </h3>
            <p className="w-[17.5rem] h-[2.375rem] absolute top-[16.125rem] left-0 text-center text-base font-normal leading-[1.172rem] text-black font-roboto">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyEloquentSolutions;
