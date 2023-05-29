import React from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import SwitchButton from '../../../UI/SwitchButton/SwitchButton';
const Settings = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex justify-evenly w-full lg:flex-row flex-col lg:gap-0 gap-4">
        <div className="flex flex-col justify-center items-center lg:w-1/2 lg:p-14 gap-10 font-karma text-center" data-aos="zoom-out-up" data-aos-duration="800">
          <h1 className="lg:text-[2rem] text-2xl text-secondary font-bold font-karma  tracking-wider  lg:p-0 lg:w-2/3 leading-[50px]">
            Essential configurations for your convenience
          </h1>
          <p className="text-gray-55 text-2xl tracking-wide w-3/4 font-medium leading-10">
            Select settings for your test with easy toggle buttons. Leave the
            complexities to us!
          </p>
        </div>

        <div className="flex flex-col justify-center gap-2 lg:w-1/2 w-full items-center" data-aos="zoom-out-down" data-aos-duration="800">
          <div className="grid grid-cols-2 grid-rows-4 w-2/3 gap-8">
            <div className="flex justify-evenly items-center ">
              <BsFillGearFill className="text-2xl " />
              <h1 className="  p-2">Shuffle Questions:</h1>
            </div>
            <div className="flex justify-start items-center">
              <SwitchButton
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <h1 className="flex   justify-center items-center  p-2 text-green-50 font-inter">
                Enabled
              </h1>
            </div>
            <div className="flex justify-evenly items-center ">
              <BsFillGearFill className="text-2xl " />
              <h1 className="  p-2">Shuffle Questions:</h1>
            </div>
            <div className="flex justify-start items-center">
              <SwitchButton
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <h1 className="flex   justify-center items-center  p-2 text-green-50 font-inter">
                Enabled
              </h1>
            </div>
            <div className="flex justify-evenly items-center ">
              <BsFillGearFill className="text-2xl " />
              <h1 className="  p-2">Shuffle Questions:</h1>
            </div>
            <div className="flex justify-start items-center">
              <SwitchButton
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <h1 className="flex   justify-center items-center  p-2 text-green-50 font-inter">
                Enabled
              </h1>
            </div>
            <div className="flex justify-evenly items-center ">
              <BsFillGearFill className="text-2xl " />
              <h1 className="  p-2">Shuffle Questions:</h1>
            </div>
            <div className="flex justify-start items-center">
              <SwitchButton
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <h1 className="flex   justify-center items-center  p-2 text-green-50 font-inter">
                Enabled
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
