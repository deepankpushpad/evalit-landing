import React from 'react';

const Role = ({ref}) => {
  return (
    <div className='flex justify-center mt-10' >

    <div className="flex justify-evenly w-full flex-col lg:flex-row lg:gap-0 gap-10  " >
      <div className="flex flex-col justify-center items-center lg:w-1/2 w-full  gap-10 font-karma text-center lg:p-2" data-aos="fade-up-right"
     data-aos-duration="800"
      >
        <h1 className="lg:text-[2rem] text-2xl text-secondary font-bold font-karma  tracking-wider  lg:p-0 lg:w-2/3 leading-[50px]">
          Different assessments for different roles.
        </h1>
        <p className="text-gray-55 text-2xl tracking-wide lg:w-3/5 font-medium">
          We have carefully categorised different roles to recommend you the
          most appropriate tests.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-2 lg:w-1/2 w-full lg:p-0" data-aos="fade-up-left" data-aos-duration="800">
      <div className='flex justify-center items-center flex-col gap-4 font-karma font-bold m-4'>


        <div className="flex justify-start pr-28    ">
          <div className="flex  rounded-full bg-white border-2 border-primary justify-center items-center  p-2 lg:w-64 w-60 ">
            Junior Developer
          </div>
        </div>

        <div className="flex justify-end pl-28">
          <div className="flex  rounded-full bg-white border-2 border-primary justify-center items-center  p-2 lg:w-64 w-60 ">
            Frontend Developer
          </div>
        </div>

        <div className="flex justify-start pr-28  ">
          <div className="flex  rounded-full bg-white border-2 border-primary justify-center items-center  p-2 lg:w-64 w-60 ">
            Software Engineer
          </div>
        </div>

        <div className="flex justify-end pl-28">
          <div className="flex  rounded-full bg-white border-2 border-primary justify-center items-center  p-2 lg:w-64 w-60 ">
            Backend Developer
          </div>
        </div>

        <div className="flex justify-start pr-28   ">
          <div className="flex  rounded-full bg-white border-2 border-primary justify-center items-center  p-2 lg:w-64 w-60 ">
            Java Developer
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Role;
