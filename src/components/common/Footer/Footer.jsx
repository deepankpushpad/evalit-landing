import React from 'react';
import images from '../../../constants/imageConstant';
import navigate from '../../../utils/navigate';
const Footer = () => {
  return (
    <div className="flex bg-tertiary w-full justify-center items-center lg:justify-evenly lg:flex-row flex-wrap">
      <div className="lg:p-10 flex flex-col lg:mt-8 lg:w-1/4 w-1/2 justify-center  p-4 lg:pt-0 lg:gap-4 gap-2 md:w-1/2 md:items-center  ">
        <h1 className="lg:text-4xl text-3xl lg:p-2 font-bold bg-clip-text bg-gradient-primary text-transparent font-kalam">
          Evalit
        </h1>
        <address className="text-gray-700 font-karma flex flex-col  ">
          <span className=" lg:text-lg text-md block">No 38/1, Laxmipura, Vaderahalli</span>
          <span className=" lg:text-lg text-md block">
          Sakalvara Road Anekal, Taluk
          </span>
          <span className=" lg:text-lg text-md block">
          Bengaluru, Karnataka (560083)
          </span>
        </address>
      </div>
      <div className="flex lg:hidden lg:flex-col lg:p-10 lg:mt-8 mb-12 lg:w-1/4 w-1/2 lg:justify-center lg:items-center lg:pr-7 gap-2">
      <div className=' flex flex-col gap-4 relative top-10 md:left-[30%] left-[15%]'>
      <h1 className='text-2xl font-bold font-karma text-gray-700 lg:hidden'>Quick Links</h1>
        <ul className="text-gray-700 font-karma flex flex-col gap-0 lg:gap-2 font-bold lg:p-0  justify-center cursor-pointer">
          <li className="lg:text-md" onClick={() => navigate('how-does-it-work')}>
            How does it work?
          </li>
          <li className="lg:text-md" onClick={() => navigate('superpowers')}>
            Superpowers
          </li>
          <li className="lg:text-md" onClick={() => navigate('faqs')}>
            FAQs
          </li>
        </ul>
      <h1 className='text-2xl font-bold font-karma text-gray-700 lg:hidden'>Support</h1>
        <ul className="text-gray-700 font-karma flex flex-col gap-0 lg:gap-2 font-bold lg:p-0 lg:hidden  ">
          <li className="lg:text-md" onClick={() => navigate('how-does-it-work')}>
          Privacy Policy
          </li>
          <li className="lg:text-md" onClick={() => navigate('superpowers')}>
          Refund Policy
          </li>
          <li className="lg:text-md" onClick={() => navigate('faqs')}>
          Terms and condition
          </li>
        </ul>
      </div>
      </div>


      <div className="lg:flex flex-col lg:p-10 lg:mt-8  lg:w-1/4 justify-center pl-4 mt-4 mb-8 lg:mb-0 gap-2 hidden items-center">
      <h1 className='text-2xl font-bold font-karma text-gray-700 lg:hidden'>Quick Links</h1>
        <ul className="text-gray-700 font-karma flex flex-col lg:gap-2 font-bold lg:p-0 cursor-pointer ">
        <li className="lg:text-md" onClick={() => navigate('how-does-it-work')}>
            How does it work?
          </li>
          <li className="lg:text-md" onClick={() => navigate('superpowers',60)}>
            Superpowers
          </li>
          <li className="lg:text-md" onClick={() => navigate('faqs',60)}>
            FAQs
          </li>
        </ul>
      </div>


      <div className="lg:flex flex-col lg:p-10 lg:mt-8  lg:w-1/4 w-1/2 justify-center ju pl-4 mt-4 mb-8 lg:mb-0 gap-2 hidden ">
      <h1 className='text-2xl font-bold font-karma text-gray-700 lg:hidden'>Support</h1>
        <ul className="text-gray-700 font-karma flex flex-col lg:gap-2 font-bold lg:p-0 ">
          <li className="lg:text-md">Privacy Policy</li>
          <li className="lg:text-md">Refund Policy</li>
          <li className="lg:text-md ">Terms and condition</li>
        </ul>
      </div>
      <div className="lg:flex  hidden  lg:w-1/6   w-1/2     ">
        <div className="w-full flex lg:justify-evenly items-center justify-center lg:mr-0 mr-8 mb-3 lg:mb-0 ">
          <img
            src={images.LinkdIn}
            alt="linkedin"
            className="aspect-auto w-[4.4rem]  "
          />
          <img
            src={images.Instagram}
            alt="twitter"
            className=" aspect-auto lg:w-10 lg:h-10 w-9 h-9"
          />
        </div>
      </div>
      <hr className="lg:hidden w-[95%] border-2 border-emerald-400" />

      <div className="w-full flex lg:justify-evenly items-center justify-end lg:mr-0 mr-[10%] mb-3 lg:mb-0 lg:hidden ">
      <p className='text-left w-3/4 pl-5 text-bold'>© 2023 Evalit</p>
          <img
            src={images.LinkdIn}
            alt="linkedin"
            className="aspect-auto w-[4.4rem]  "
          />
          <img
            src={images.Instagram}
            alt="twitter"
            className=" aspect-auto lg:w-10 lg:h-10 w-9 h-9"
          />
        </div>
    </div>
  );
};

export default Footer;
