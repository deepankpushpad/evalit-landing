import React, { useState } from 'react';
import Hamburger from '../../../UI/Hamburger/HamBurger';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import navigate from '../../../utils/navigate';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleChange = () => {
    setShow(!show);
  };
  const navLinks = [
    { title: 'How does it work?', id: 'how-does-it-work' },
    { title: 'Superpowers', id: 'superpowers' },
    { title: 'FAQs', id: 'faqs' },
  ];

  const MobileMenu = () => {
    return (
      <div
        className="fixed top-0 left-0 w-full h-full bg-tertiary bg-opacity-[95%] flex justify-center items-center"
        onClick={() => {
          setShow(false);
        }}
      >
        <div className="flex flex-col justify-evenly items-center w-3/5 h-3/5  rounded-3xl">
          {navLinks.map((item, index) => {
            return (
              <p
                className="font-kalam text-2xl text-gray-700 hover:text-gray-900 font-semibold"
                key={index}
                onClick={() => {
                  item.id === 'superpowers' ? navigate(`${item.id}`,10) : item.id === 'faqs' ? navigate(`${item.id}`, 10) : navigate(`${item.id}`);
                }}
              >
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full justify-between z-50 lg:border-none border-b-2 border-gray fixed top-0 left-0 bg-white ">
      <div className="lg:w-1/5 flex items-center lg:h-28 justify-center w-1/3 z-50 h-16">
        <h1 className="lg:text-4xl text-3xl lg:p-2 font-bold bg-clip-text bg-gradient-primary text-transparent font-kalam z-50">
          <a href="/">Evalit</a>
        </h1>
      </div>
      <div className="lg:w-4/6  items-center lg:h-28 justify-evenly lg:flex  w-0 hidden h-16 md:w-4/5 z-50">
        {navLinks.map((item, index) => {
          return (
            <p
              className="font-kalam text-2xl text-gray-700 hover:text-gray-900 font-semibold z-50  hover:cursor-pointer"
              key={index}
              onClick={() => {
                item.id === 'superpowers'
                  ? navigate(item.id, 150)
                  : navigate(`${item.id}`,50);
              }}
            >
              {item.title}
            </p>
          );
        })}
        <button className="bg-primary text-white rounded-3xl w-32 p-2 text-bold">
          Get Started
        </button>
      </div>
      <div className="w-2/3  items-center lg:h-28  lg:hidden flex  justify-end mr-10 h-16">
        {show ? (
          <RxCross1
            className="lg:text-4xl text-3xl text-gray-700 hover:text-gray-900 font-semibold z-50"
            onClick={handleChange}
          />
        ) : (
          <RxHamburgerMenu
            className="lg:text-4xl text-3xl text-gray-700 hover:text-gray-900 font-semibold z-50"
            onClick={handleChange}
          />
        )}
        {show && <MobileMenu />}
      </div>
    </div>
  );
};

export default Navbar;
