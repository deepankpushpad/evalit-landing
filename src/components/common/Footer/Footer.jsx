import React from 'react';
import  images  from '../../../constants/imageConstant';
const Footer = () => {
  return (
    <div className="lg:flex bg-tertiary w-full justify-center items-center lg:justify-evenly lg:flex-row sm:grid sm:grid-cols-2 xs:grid-cols-1">
      <div className="lg:p-10 flex flex-col lg:mt-8 lg:w-1/4 w-full justify-center items-center pt-10 p-4 lg:pt-0 gap-4  ">
        <h1 className="text-4xl lg:p-2 font-bold bg-clip-text bg-gradient-primary text-transparent font-kalam">
          Evalit
        </h1>
        <address className="text-gray-700 font-kalam">
          <span className="block">No 38/1 Laxmipura</span>
          <span className="block">Vaderahalli -Sakalvara Road</span>
          <span className="block">Bengaluru 560083, India</span>
        </address>
      </div>
      <div className="flex flex-col lg:p-10 lg:mt-8 mt-5 lg:w-1/4 w-full justify-center items-center pr-7 ">
        <ul className="text-gray-700 font-karma flex flex-col gap-2 font-bold lg:p-0 ">
          <li className="text-xl">How does it work?</li>
          <li className="text-xl">Superpowers</li>
          <li className="text-xl">FAQs</li>
        </ul>
      </div>
      <div className="flex flex-col lg:p-10 lg:mt-8 mt-8 lg:w-1/4 w-full justify-center items-center pr-[0.20rem]">
        <ul className="text-gray-700 font-karma flex flex-col gap-2 font-bold lg:p-0 ">
          <li className="text-xl">Privacy Policy</li>
          <li className="text-xl">Refund Policy</li>
          <li className="text-xl">Terms and condition</li>
        </ul>
      </div>
      <div className="flex  lg:w-1/6   w-full  mt-8 ">
      <div className='w-full flex lg:justify-evenly items-center justify-center lg:mr-0 mr-5'>
      <img src={images.LinkdIn} alt="linkedin" className="aspect-auto w-20 h-16"/>
      <img src={images.Instagram} alt="twitter" className=" aspect-auto w-12 h-12 "/>
      </div>
      </div>
    </div>
  );
};

export default Footer;
