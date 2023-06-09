import React, { useState, useEffect } from 'react';
import Role from './components/Role';
import EvalitTests from './components/EvalitTests';
import Settings from './components/Settings';
import Share from './components/Share';
import images from '../../constants/imageConstant';
import navigate from '../../utils/navigate';
const TabsSection = () => {
  const [isTitleFixed, setIsTitleFixed] = useState(false);
  const [activeTab, setActiveTab] = useState(-1);
  const [isRoleActive, setIsRoleActive] = useState(false);
  const [isEvalitActive, setIsEvalitActive] = useState(false);
  const [isSettingsActive, setIsSettingsActive] = useState(false);
  const [isShareActive, setIsShareActive] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [isMobile, setIsMobile] = useState(false);
  const [isSuperPowerActive, setIsSuperPowerActive] = useState(false);
  useEffect(() => {
    let prevScrollPosition = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      const currentScrollDirection =
        currentScrollPosition > prevScrollPosition ? 'down' : 'up';
      prevScrollPosition = currentScrollPosition;
      const scrollPosition = window.scrollY;
      const titleElement = document.getElementById('sectionTitle');
      //if its above the section setAll States to default
      if (scrollPosition < 1200 && isMobile) {
        setIsRoleActive(false);
        setIsEvalitActive(false);
        setIsSettingsActive(false);
        setIsShareActive(false);
        setIsSuperPowerActive(false);
        setActiveTab(-1);
        setIsTitleFixed(false);
        setIsMobile(false);
        return;
      }
      if (!isMobile && scrollPosition < 800) {
        console.log('here');
        setIsRoleActive(false);
        setIsEvalitActive(false);
        setIsSettingsActive(false);
        setIsShareActive(false);
        setIsSuperPowerActive(false);
        setActiveTab(-1);
        setIsTitleFixed(false);
        return;
      }
      setScrollDirection(currentScrollDirection);

      if (titleElement) {
        const titlePosition = titleElement.offsetTop;
        if (!isSuperPowerActive) {
          if (window.innerWidth < 1024) {
            setIsTitleFixed(scrollPosition >= titlePosition + 65);
            setIsMobile(true);
            return;
          }
          setIsTitleFixed(scrollPosition >= titlePosition - 30);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection, activeTab, isTitleFixed, isSuperPowerActive]);

  const handleTabChange = () => {
    if (scrollDirection === 'down') {
      if (
        isRoleActive &&
        !isEvalitActive &&
        !isSettingsActive &&
        !isShareActive &&
        activeTab === -1
      ) {
        setActiveTab(0);
      }
      if (
        isRoleActive &&
        isEvalitActive &&
        !isSettingsActive &&
        !isShareActive &&
        scrollDirection === 'down' &&
        activeTab === 0
      ) {
        setActiveTab(1);
      }
      if (
        isRoleActive &&
        isEvalitActive &&
        isSettingsActive &&
        !isShareActive &&
        scrollDirection === 'down' &&
        activeTab === 1
      ) {
        setActiveTab(2);
      }
      if (
        isRoleActive &&
        isEvalitActive &&
        isSettingsActive &&
        isShareActive &&
        scrollDirection === 'down' &&
        activeTab === 2
      ) {
        setActiveTab(3);
      }
    }
  };
  useEffect(() => {
    handleTabChange();
  }, [
    activeTab,
    isRoleActive,
    isEvalitActive,
    isSettingsActive,
    isShareActive,
    isSuperPowerActive,
    scrollDirection,
  ]);
  const componentData = [
    { title: 'Roles', content: <Role />, image: images.roles, id: 'role' },
    {
      title: 'Evalit Tests',
      content: <EvalitTests />,
      image: images.tests,
      id: 'evalit_tests',
    },
    {
      title: 'Settings',
      content: <Settings />,
      image: images.settings,
      id: 'settings',
    },
    { title: 'Share', content: <Share />, image: images.share, id: 'share' },
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
          {isTitleFixed && (
            <div className="flex justify-center items-center w-full ">
              <div className="flex justify-center items-center w-full ">
                <ul className="flex justify-between items-center w-full  lg:justify-evenly ">
                  {componentData.map((item, index) => {
                    return (
                      <li
                        className={` ${
                          isTitleFixed
                            ? 'text-secondary ease-in-out flex items-center justify-center flex-col '
                            : 'text-center text-lg font-light font-roboto text-secondary  ml-2 mr-2 cursor-pointer  flex justify-center items-center flex-col lg:flex-row lg:w-full w-4/5 '
                        }`}
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 200}
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        onClick={() => {
                          // navigate(`${item.id}`, 170);
                          if (isMobile) {
                            if (item.title === 'Roles') {
                              navigate(`${item.id}`, 170);
                            } else if (item.title === 'Evalit Tests') {
                              navigate(`${item.id}`, 170);
                            } else if (item.title === 'Settings') {
                              navigate(`${item.id}`, 170);
                            } else if (item.title === 'Share') {
                              navigate(`${item.id}`, 170);
                            }
                          } else {
                            navigate(`${item.id}`, 170);
                          }
                        }}
                      >
                        <div
                          className={`flex justify-center items-center flex-col lg:flex-row  ${
                            activeTab === 0 && item.title === 'Roles'
                              ? 'scale-150  p-2 ' + isTitleFixed
                                ? ' m-2 scale-125'
                                : 'border-none'
                              : activeTab === 1 && item.title === 'Evalit Tests'
                              ? 'scale-150  p-2 ' + isTitleFixed
                                ? ' m-2 scale-125'
                                : 'border-none'
                              : activeTab === 2 && item.title === 'Settings'
                              ? 'scale-150  p-2 ' + isTitleFixed
                                ? ' m-2 scale-125'
                                : 'border-none'
                              : activeTab === 3 && item.title === 'Share'
                              ? 'scale-150  p-2 ' + isTitleFixed
                                ? ' m-2 scale-125'
                                : 'border-none'
                              : 'scale-100 border-none'
                          }`}
                        >
                          <img
                            src={item.image}
                            alt="icon"
                            className={` aspect-auto ${
                              isTitleFixed
                                ? 'aspect-auto w-[50px] '
                                : 'aspect-auto lg:w-[100px] w-[40px] '
                            }

  `}
                          />
                          <p
                            // className="lg:text-2xl text-lg font-light font-roboto text-secondary  ml-2 mr-2 cursor-pointer  flex justify-center items-center  "
                            className={`ml-2 mr-2 ${isTitleFixed && 'text-lg '}


                        ${
                          activeTab === 0 && item.title === 'Roles'
                            ? 'scale-150  p-2 ' + isTitleFixed
                            //activate tooltip
                              ? ' m-2 scale-125   lg:p-1 font-bold bg-clip-text bg-gradient-primary text-transparent font-kalam text-3xl '
                              : 'border-none'
                            : activeTab === 1 && item.title === 'Evalit Tests'
                            ? 'scale-150  p-2 ' + isTitleFixed
                              ? ' m-2 scale-125  lg:p-1 font-bold bg-clip-text bg-gradient-primary text-transparent font-kalam text-3xl '
                              : 'border-none'
                            : activeTab === 2 && item.title === 'Settings'
                            ? 'scale-150  p-2 ' + isTitleFixed
                              ? ' m-2 scale-125  lg:p-1 font-bold bg-clip-text bg-gradient-primary text-transparent font-kalam text-3xl '
                              : 'border-none'
                            : activeTab === 3 && item.title === 'Share'
                            ? 'scale-150  p-2 ' + isTitleFixed
                              ? ' m-2 scale-125  lg:p-1 font-bold bg-clip-text bg-gradient-primary text-transparent font-kalam text-3xl '
                              : 'border-none'
                            : 'scale-100 border-none'
                        }

                       `}
                          >
                            {item.title}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center w-full mt-10 ">
          <Role
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isRoleActive={isRoleActive}
            setIsRoleActive={setIsRoleActive}
            scrollDirection={scrollDirection}
            setIsTitleFixed={setIsTitleFixed}
            isTitleFixed={isTitleFixed}
            setIsSuperPowerActive={setIsSuperPowerActive}
            isSuperPowerActive={isSuperPowerActive}
          />
        </div>
        <div className="flex justify-center items-center w-full mt-10 ">
          <EvalitTests
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isEvalitActive={isEvalitActive}
            setIsEvalitActive={setIsEvalitActive}
            scrollDirection={scrollDirection}
          />
        </div>
        <div className="flex justify-center items-center w-full mt-10 ">
          <Settings
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isSettingsActive={isSettingsActive}
            setIsSettingsActive={setIsSettingsActive}
            scrollDirection={scrollDirection}
          />
        </div>
        <div className="flex justify-center items-center w-full mt-10 ">
          <Share
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isShareActive={isShareActive}
            setIsShareActive={setIsShareActive}
            scrollDirection={scrollDirection}
            setIsTitleFixed={setIsTitleFixed}
            isTitleFixed={isTitleFixed}
            setIsSuperPowerActive={setIsSuperPowerActive}
            isSuperPowerActive={isSuperPowerActive}
          />
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
