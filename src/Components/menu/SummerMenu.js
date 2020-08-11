import React from 'react';
import './menu.css'
import burger from '../../pictures/classicburger.jpg';
import friedChicken from '../../pictures/friedChxSand.jpg';
import healthyBowl from '../../pictures/healthyBowl.jpg';
import smoothie from '../../pictures/smoothie.jpg';

const SummerMenu = () => {
  return (
    <div className="container">
      <h1 className="text-center">SUMMER MENU</h1>

      <div className="menu">
        <ul className="menu-list text-center w-100">
          <li className="menu-item row">Classic Buger..........$10</li>
          <li className="menu-item row">Crispy Chicken Sandwitch..........$12</li>
          <li className="menu-item row">Quinoa Vegetable Bowl..........$9</li>
          <li className="menu-item row">Strawberry Banana Smoothie..........$6</li>
        </ul>
      </div>
      <div className="menu-pictures">
        <ul className="img-list row">
          <li className="menu-item-img col"><img className="food-image -w" src={burger} alt="Classic Burger" /></li>
          <li className="menu-item-img col"><img className="food-image -w" src={friedChicken} alt="Fried Chicken Sandwitch" /></li>
          <li className="menu-item-img col"><img className="food-image -w" src={healthyBowl} alt="Veggie Bowl" /></li>
          <li className="menu-item-img col"><img className="food-image -w" src={smoothie} alt="Smoothie" /></li>

        </ul>
      </div>
    </div>





  );
};

export default SummerMenu