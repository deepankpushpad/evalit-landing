import React from 'react';
import images from '../../../constants/imageConstant';
const Role = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex justify-evenly w-full lg:flex-row flex-col">
        <div className="flex flex-col justify-center items-center lg:w-1/2 lg:p-14 gap-10 font-karma text-center" data-aos="flip-up" data-aos-duration="800">
        <h1 className="lg:text-[2rem] text-2xl text-secondary font-bold font-karma  tracking-wider  lg:p-0 lg:w-2/3 leading-[50px]">
            That’s it! You are good to go!
          </h1>
          <p className="text-gray-55 text-2xl tracking-wide w-3/4 font-medium leading-10">
            Share via private links OR a common link. Track your applicant
            performances in real-time and make quick decisions!
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2 lg:w-1/2 w-robustfull items-center" data-aos="flip-down" data-aos-duration="800">
          <img src={images.mouse} alt="share"
            className='w-96 h-96 lg:w-2/3 '
           />
        </div>
      </div>
    </div>
  );
};

export default Role;
