import React from 'react';
import './menu.css'
import philly from '../../pictures/philly.jpg';
import turkeySandwitch from '../../pictures/turkeySandwitch.jpg';
import veggieSoup from '../../pictures/veggieSoup.jpg';
import grilledCheese from '../../pictures/grilledCheese.jpg';

const FallMenu = () => {
  return (
    <div className="container">
      <h1 className="text-center">FALL MENU</h1>

      <div className="menu">
        <ul className="menu-list text-center w-100">
          <li className="menu-item row">Philly CheeseStake..........$12</li>
          <li className="menu-item row">Thanksgiving Turkey Sandwitch..........$15</li>
          <li className="menu-item row">Vegetable Soup..........$6</li>
          <li className="menu-item row">Grilled Cheese Sandwitch..........$9</li>
        </ul>
      </div>
      <div className="menu-pictures">
        <ul className="img-list row">
          <li className="menu-item-img col"><img className="food-image -w" src={philly} alt="Philly CheeseStake" /></li>
          <li className="menu-item-img col"><img className="food-image -w" src={turkeySandwitch} alt="Thanksgiving Turkey Sandwitch" /></li>
          <li className="menu-item-img col"><img className="food-image -w" src={veggieSoup} alt="Veggie Soup" /></li>
          <li className="menu-item-img col"><img className="food-image -w" src={grilledCheese} alt="Grilled Cheese Sandwitch" /></li>

        </ul>
      </div>
    </div>





  );
};

export default FallMenu