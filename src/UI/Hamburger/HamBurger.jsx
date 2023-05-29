import React from 'react';
import './HamBurger.css';
const HamBurger = ({ setShow, show }) => {
  return (
    <label
      className="burger"
      htmlFor="burger"
      onClick={() => {
        console.log(show);
        setShow((show) => !show);
      }}
    >
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default HamBurger;
