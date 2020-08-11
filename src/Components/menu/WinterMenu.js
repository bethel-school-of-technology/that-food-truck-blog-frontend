import React from 'react';
import './menu.css'
import corndog from '../../pictures/baconCornDog.jpg';
import macAndCheese from '../../pictures/macAndCheese.jpg';
import turkeySandwitch from '../../pictures/turkSand.jpg';
import sliders from '../../pictures/sliders.jpg';

const WinterMenu = () => {
  return (
    <div className="container">
      <h1 className="text-center">WINTER MENU</h1>

      <div className="menu">
        <ul className="menu-list text-center w-100">
          <li className="menu-item row">Bacon Corndog..........$11</li>
          <li className="menu-item row">Mac and Cheese..........$9</li>
          <li className="menu-item row">Turkey Sandwitch..........$12</li>
          <li className="menu-item row">Sliders(4)..........$18</li>
        </ul>
      </div>
      <div className="menu-pictures">
        <ul className="img-list row">
          <li className="menu-item-img col"><img className="food-image -w" src={corndog} alt="Bacon Corndog" /></li>
          <li className="menu-item-img col"><img className="food-image -w" src={macAndCheese} alt="Macaroni and Cheese" /></li>
          <li className="menu-item-img col"><img className="food-image -w" src={turkeySandwitch} alt="Turkey Sandwitch" /></li>
          <li className="menu-item-img col"><img className="food-image -w" src={sliders} alt="Hamburger sliders" /></li>

        </ul>
      </div>
    </div>





  );
};

export default WinterMenu