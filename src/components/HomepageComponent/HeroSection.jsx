import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center lg:mt-40 flex-col gap-10 mt-20">
      <div className="text-center">
        <h1
          className="lg:text-4xl text-4xl text-primary font-bold font-roboto lg:p-0 p-2 tracking-widest

        leading-[50px]
          "
          style={{
            textShadow: '0px 1px, 1px 0px, 1px 0px',
          }}
        >
          Never pay for hiring
        </h1>
      </div>
      <div className="text-center">
        <h1 className="lg:text-3xl text-2xl text-secondary font-bold font-karma leading-10 tracking-wider p-2 lg:p-0">
          World’s only COMPLETELY free coding assessment platform.
        </h1>
      </div>
      <div className="lg:w-2/3 flex flex-col text-center lg:gap-1 w-4/5 gap-1">
        <p className="lg:text-lg text-md font-medium font-roboto  tracking-wider block w-full">
          Forget paying for expensive tools and elaborate setups.
        </p>
        <p className="lg:text-lg text-md font-medium font-roboto  tracking-wider block w-full">
          Create tests and share invites within 60 seconds.
        </p>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div className="bg-primary text-white rounded-xl w-40 font-karma font-bold p-3 flex justify-center items-center">
         <span>Screen for free!</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
