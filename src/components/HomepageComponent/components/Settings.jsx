import React,{useEffect} from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import SwitchButton from '../../../UI/SwitchButton/SwitchButton';
const Settings = () => {
  const settingsData = [
    {
      title: 'Shuffle Questions',
      isChecked: true,
    },
    {
      title: 'Random Questions',
      isChecked: false,
    },
    {
      title: 'Allow Switching Windows',
      isChecked: true,
    },
    {
      title: 'Allow Copy - Paste',
      isChecked: true,
    },
  ];

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const titleElement = document.getElementById('settings');

        if (titleElement) {
          const titlePosition = titleElement.offsetTop;
          if(scrollPosition >= titlePosition -130 ){
            console.log('You have scrolled to the settings section');
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className="flex justify-center mt-10" id="settings">
      <div className="flex justify-evenly w-full lg:flex-row flex-col lg:gap-0 gap-4">
        <div
          className="flex flex-col justify-center items-center lg:w-1/2 lg:p-14 gap-10 font-karma text-center"
          data-aos="zoom-out-up"
          data-aos-duration="800"
        >
          <h1 className="lg:text-[2rem] text-[1.6rem] text-secondary font-bold font-karma  tracking-wider w-10/12 lg:p-0 lg:w-2/3 lg:leading-[50px]">
            Essential configurations for your convenience
          </h1>
          <p className="text-gray-55 lg:text-[1.3rem] text-[1.2rem]  tracking-wide w-3/4 font-medium lg:leading-10 leading-0">
            Select settings for your test with easy toggle buttons. Leave the
            complexities to us!
          </p>
        </div>

        <div
          className="flex flex-col justify-center gap-2 lg:w-1/2 w-full items-center"
          data-aos="zoom-out-down"
          data-aos-duration="800"
        >
          <div className="grid grid-cols-2 grid-rows-4 w-3/4 gap-8">
            {settingsData.map((data, index) => {
              return (
                <React.Fragment key={index}>
                {/* make it in the center */}
                  <div className="flex items-center">
                    <BsFillGearFill className="text-lg m-2 text-gray-72" />
                    <h1 className="text-center">{data.title}:</h1>
                  </div>
                  <div className="flex justify-center items-center">
                    <SwitchButton
                      defaultChecked
                      isChecked={data.isChecked}
                      color="primary"
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <h1
                      className={`flex   justify-center items-center  p-2 ${
                        data.isChecked ? 'text-green-50' : 'text-gray-55'
                      } font-inter`}
                    >
                      {data.isChecked ? 'Enabled' : 'Disabled'}
                    </h1>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
