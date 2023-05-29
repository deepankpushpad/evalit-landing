import React, { useState, useEffect } from 'react';
import Tabs from '../../UI/Tabs/Tabs';
import ScrollAwareDiv from '../../UI/Scrollable';
import Role from './components/Role';
import EvalitTests from './components/EvalitTests';
import Settings from './components/Settings';
import Share from './components/Share';
const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' },
    { title: 'Tab 3', content: 'Content for Tab 3' },
    // Add more tabs as needed
  ];
  const componentData = [
    { title: 'Roles', content: <Role /> },
    { title: 'Evalit Tests', content: <EvalitTests /> },
    { title: 'Settings', content: <Settings /> },
    { title: 'Share', content: <Share /> },
  ];

  useEffect(() => {}, []);

  return (
    <div
      className=" mt-24 "
      // onScroll={(e) => {
      // console.log(e.target.scrollLeft);
      // //on scrollTop move the slider horizontally
      // window.scrollTo(0,e.target.scrollTop*100);
      // }}
    >
      <div className="flex justify-center items-center lg:mt-40 text-center lg:p-0 ">
        <h1 className="lg:text-4xl text-3xl text-primary font-bold font-roboto lg:p-0 p-2 tracking-widest">
          Ridiculously simple. Unbelievably free.
        </h1>
      </div>
      <div className="mt-10 w-full flex flex-col justify-center items-center overflow-hidden">
        {/* <Tabs /> */}
        {/* <hr className="border-1 border-primary w-4/5" />
        <h1
          className="text-center text-4xl font-light font-roboto text-black p-4"
          data-aos="zoom-in"
        >
          Roles
        </h1>
        <hr className="border-1 border-primary w-4/5" />
        <Role /> */}
        {
          componentData.map((item, index) => {
              return (
                <>
                <hr className="border-1 border-primary w-4/5" />
                <h1
                  className="text-center text-3xl font-light font-roboto text-black p-4"
                  data-aos="zoom-in"
                >
                  {item.title}
                </h1>
                <hr className="border-1 border-primary w-4/5" />
                {item.content}
                </>
              );
            })
        }
      </div>
    </div>
  );
};

export default TabsSection;
