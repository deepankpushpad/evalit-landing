import React, { useState, useEffect } from 'react';
import Role from './components/Role';
import EvalitTests from './components/EvalitTests';
import Settings from './components/Settings';
import Share from './components/Share';
import images from '../../constants/imageConstant';
import navigate from '../../utils/navigate';
const TabsSection = () => {
  const [isTitleFixed, setIsTitleFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const titleElement = document.getElementById('sectionTitle');

      if (titleElement) {
        const titlePosition = titleElement.offsetTop;
        //if window mode than - 30
        if (window.innerWidth < 1024) {
          console.log('window', titlePosition);
          setIsTitleFixed(scrollPosition >= titlePosition + 65 );
          return;
        }
        setIsTitleFixed(scrollPosition >= titlePosition - 30);
        console.log('phone', titlePosition);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const componentData = [
    { title: 'Roles', content: <Role />,image:images.roles ,id:'role'},
    { title: 'Evalit Tests', content: <EvalitTests />, image:images.tests ,id:'evalit_tests'},
    { title: 'Settings', content: <Settings /> ,image:images.settings,id:'settings'},
    { title: 'Share', content: <Share />,image:images.share ,id:'share' },
  ];

  return (
    <div className="mt-24">
      <div className="flex justify-center items-center lg:mt-40 text-center lg:p-0">
        <h1
          className="lg:text-4xl text-3xl text-primary font-bold font-roboto lg:p-0 p-2 tracking-widest"
          id="sectionTitle"
        >
          Ridiculously simple. Unbelievably free.
        </h1>
      </div>
      <div className="lg:mt-10 w-full flex flex-col justify-center items-center overflow-hidden mt-10">
        <div
          className={`flex justify-center items-center w-full ${
            isTitleFixed &&
            'fixed top-0 left-0 right-0 bg-white z-10 shadow-md mt-16 lg:mt-28 border-t-[1px] lg:border-gray-72'
          } `}
        >
          <div className="flex justify-center items-center w-full ">
            <div className="flex justify-center items-center w-full ">
            <ul className="flex justify-between items-center w-full  lg:justify-evenly ">
              {componentData.map((item, index) => {
                return (
                  <li
                    className={` ${
                      isTitleFixed ? 'text-secondary ease-in-out flex items-center justify-center flex-col ' :'text-center text-lg font-light font-roboto text-secondary  ml-2 mr-2 cursor-pointer  flex justify-center items-center flex-col lg:flex-row lg:w-full w-4/5 '
                    }`}

                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 200}
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    onClick={() => {
                      navigate(`${item.id}`,270);
                    }}

                  >
                    <img src={item.image} alt="icon" className={`w-40 aspect-auto ${isTitleFixed && 'aspect-auto w-[50px] '}`} />
                    <p
                    // className="lg:text-2xl text-lg font-light font-roboto text-secondary  ml-2 mr-2 cursor-pointer  flex justify-center items-center  "
                    className={`ml-2 mr-2 ${isTitleFixed && 'text-lg hidden'} `}
                    >
                      {item.title}
                    </p>
                  </li>
                );
              })}
            </ul>
            </div>
          </div>
        </div>
        {componentData.map((item, index) => {
          return (
            <div
              className={'flex flex-col items-center w-full mt-10'}
              key={index}
            >
              <hr className="border-1 border-primary w-4/5" />
              <h1
                className={`text-center text-3xl font-light font-roboto text-black p-4`}
                data-aos="zoom-in"
              >
                {item.title}
              </h1>
              <hr className="border-1 border-primary w-4/5" />
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabsSection;
