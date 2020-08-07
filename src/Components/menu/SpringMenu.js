import React, {Component} from 'react';
import './menu.css'
import falafelWrap from './FalafelWrap.jpg';
import chxTacos from './grilledChxTacos.jpg';
import kaleSalad from './kaleSalad.jpg'
import lambGyro from './Lamb-Gyro.jpg';

const SpringMenu = () => {
    return(
      <div className="container">
        <div className="menu-page row">

        <div clasName="menu">
          <ul className="menu-list col">
            <li className="menu-item row-cols-1">Falafel Wrap..........$10</li>
            <li className="menu-item row-cols-1">Chicken Tacos..........$8</li>
            <li className="menu-item row-cols-1">Kale Salad..........$10</li>
            <li className="menu-item row-cols-1">Lamb Gyro..........$11</li>
          </ul>
          </div>
        <div className="menu-pictures">
          <ul className="img-list col">
            <li className="menu-item-img"><img className="food-image -w" src={falafelWrap} alt="Falafel Wrap" /></li>
            <li className="menu-item-img"><img className="food-image -w" src={chxTacos} alt="Chicken Tacos" /></li>
            <li className="menu-item-img"><img className="food-image -w" src={kaleSalad} alt="Kale Salad" /></li>
            <li className="menu-item-img"><img className="food-image -w" src={lambGyro} alt="Lamb Gyro" /></li>

          </ul>
        </div>
        </div>
        </div>
  



    );
};

export default SpringMenu