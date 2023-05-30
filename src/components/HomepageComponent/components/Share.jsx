import React, { useEffect } from 'react';
import images from '../../../constants/imageConstant';
const Share = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const titleElement = document.getElementById('share');

      if (titleElement) {
        const titlePosition = titleElement.offsetTop;
        if (scrollPosition >= titlePosition - 130) {
          console.log('You have scrolled to the share section');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="flex justify-center mt-10" id="share">
      <div className="flex justify-evenly w-full lg:flex-row flex-col">
        <div
          className="flex flex-col justify-center items-center lg:w-1/2 lg:p-14 gap-10 font-karma text-center"
          data-aos="flip-up"
          data-aos-duration="800"
        >
          <h1 className="lg:text-[2rem] text-2xl text-secondary font-bold font-karma  tracking-wider  lg:p-0 lg:w-2/3 lg:leading-[50px]">
            That’s it! You are good to go!
          </h1>
          <p className="text-gray-55 lg:text-[1.3rem] text-[1.2rem]  tracking-wide w-3/4 font-medium lg:leading-10 leading-0">
            Share via private links OR a common link. Track your applicant
            performances in real-time and make quick decisions!
          </p>
        </div>
        <div
          className="flex flex-col justify-center  lg:w-1/2 w-robustfull items-center"
          data-aos="flip-down"
          data-aos-duration="800"
        >
          <img src={images.mouse} alt="share" className="w-72 h-72 lg:w-3/4 aspect-auto" />
        </div>
      </div>
    </div>
  );
};

export default Share;
