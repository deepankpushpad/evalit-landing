import React, { useEffect } from 'react';
import images from '../../../constants/imageConstant';
const Share = ({isShareActive,setIsShareActive,scrollDirection,setActiveTab,activeTab,setIsTitleFixed,isTitleFixed,setIsSuperPowerActive,isSuperPowerActive}) => {
  useEffect(() => {
    const handleScroll = () => {

      const scrollPosition = window.scrollY;
      const titleElement = document.getElementById('share');

      if (titleElement) {
        const titlePosition = titleElement.offsetTop;

        if (scrollPosition >= titlePosition - 200 && scrollDirection === 'down') {
          setIsShareActive(true);
        } else if ( scrollDirection === 'up' && scrollPosition < titlePosition - 150 && activeTab === 3) {
          setActiveTab(2);
          setIsShareActive(false);
        }
        if (scrollPosition >= titlePosition + 300 ) {
          console.log("fixed");
          setIsTitleFixed(false);
            setIsSuperPowerActive(true);
        }
        // else{
        //   setIsTitleFixed(true);
        //   setIsSuperPowerActive(false);
        // }
      }
      //if its 200px down from titleElment then alert
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isShareActive, scrollDirection,activeTab,isTitleFixed,isSuperPowerActive]);

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
          className="flex flex-col justify-center  lg:w-1/2 w-full items-center"
          data-aos="flip-down"
          data-aos-duration="800"
        >
          <img src={images.mouse} alt="share" className="w-72 h-72  aspect-auto lg:w-96 lg:h-96" />
        </div>
      </div>
    </div>
  );
};

export default Share;
