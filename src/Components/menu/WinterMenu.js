import React from 'react';
import './menu.css';
import grilledCheese from '../../pictures/grilledchz.jpg';
import porkbelly from '../../pictures/smkPorkBelly.jpg';
import philly from '../../pictures/Philly.jpg';
import sliders from '../../pictures/sliders.jpg';

const WinterMenu = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>Winter MENU</h1>

      <div className='menu'>
        <ul className='menu-list text-center w-100'>
          <li className='menu-item row'>
            6 cheese Grilled Cheese..........$10
          </li>
          <li className='menu-item row'>
            Smoked Pork belly sandwich.........$12
          </li>
          <li className='menu-item row'>Philly Cheesesteak..........$10</li>
          <li className='menu-item row'>Classic Sliders..........$10</li>
        </ul>
      </div>
      <div className='menu-pictures'>
        <ul className='img-list row'>
          <li className='menu-item-img col'>
            <img
              className='food-image -w'
              src={grilledCheese}
              alt='grilledCheese'
            />
          </li>
          <li className='menu-item-img col'>
            <img className='food-image -w' src={porkbelly} alt='porkbelly' />
          </li>
          <li className='menu-item-img col'>
            <img className='food-image -w' src={philly} alt='PhillyChsStk' />
          </li>
          <li className='menu-item-img col'>
            <img className='food-image -w' src={sliders} alt='sliders' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WinterMenu;
