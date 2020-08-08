import React, {Component} from 'react';
import './menu.css'
import falafelWrap from './FalafelWrap.jpg';
import chxTacos from './grilledChxTacos.jpg';
import kaleSalad from './kaleSalad.jpg'
import lambGyro from './Lamb-Gyro.jpg';

const SpringMenu = () => {
    return(
      <div className="container">
        <h1 className="text-center">SPRING MENU</h1>

        <div clasName="menu">
          <ul className="menu-list text-center w-100">
            <li className="menu-item row">Falafel Wrap..........$10</li>
            <li className="menu-item row">Chicken Tacos..........$8</li>
            <li className="menu-item row">Kale Salad..........$10</li>
            <li className="menu-item row">Lamb Gyro..........$11</li>
          </ul>
          </div>
        <div className="menu-pictures w-100">
          <ul className="img-list row w-100">
            <li className="menu-item-img col"><img className="food-image -w" src={falafelWrap} alt="Falafel Wrap" /></li>
            <li className="menu-item-img col"><img className="food-image -w" src={chxTacos} alt="Chicken Tacos" /></li>
            <li className="menu-item-img col"><img className="food-image -w" src={kaleSalad} alt="Kale Salad" /></li>
            <li className="menu-item-img col"><img className="food-image -w" src={lambGyro} alt="Lamb Gyro" /></li>

          </ul>
        </div>
        </div>
      
  



    );
};

export default SpringMenu