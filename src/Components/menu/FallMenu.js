import React from 'react';
import './menu.css';
import kale from '../../pictures/kaleSalad.jpg';
import thxGiving from '../../pictures/ThxGivingSand.jpg';
import philly from '../../pictures/Philly.jpg';
import Reuben from '../../pictures/Reuben.jpg';

const FallMenu = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>Fall MENU</h1>

      <div className='menu'>
        <ul className='menu-list text-center w-100'>
          <li className='menu-item row'>Kale Salad..........$10</li>
          <li className='menu-item row'>
            Thanksgiving "Leftovers" Sandwitch..........$12
          </li>
          <li className='menu-item row'>Philly Cheesesteak..........$10</li>
          <li className='menu-item row'>Reuben..........$12</li>
        </ul>
      </div>
      <div className='menu-pictures'>
        <ul className='img-list row'>
          <li className='menu-item-img col'>
            <img className='food-image -w' src={kale} alt='kale' />
          </li>
          <li className='menu-item-img col'>
            <img className='food-image -w' src={thxGiving} alt='ThxGiving' />
          </li>
          <li className='menu-item-img col'>
            <img className='food-image -w' src={philly} alt='PhillyChsStk' />
          </li>
          <li className='menu-item-img col'>
            <img className='food-image -w' src={Reuben} alt='Reuben' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FallMenu;
