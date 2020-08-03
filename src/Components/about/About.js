import React from 'react';
import Image3 from '../../pictures/truckphoto3.png';
import Val from '../../pictures/val.png';
import Ethan from '../../pictures/ethan.png';
import Aubrena from '../../pictures/aubrena.png';
import Mitch from '../../pictures/mitch.png';



const About = props => {
  return <div className="About">
    <h4 className="Mission text-center"> Our Mission </h4>
    <p> Our hearts are in sharing and expanding the Gospel of Jesus through our Food Truck Businesses. Our goal is that all know Jesus would encounter the love of God through our food, and those that don't know the Fathers love would encounter His love for them.
    Every meal is made in excellence knowing we want our customers to taste the goodness of God in every bite.
                    </p>
    <img width="550" height="400" src={Image3} alt="food truck" className="center" />
    <p className="Location text-left"> <h3> Our Values </h3>
      <h4> Excellence </h4> Our food is farm to table and 100% organic. <h4> Community </h4> We gather people to join together and feast.
                        <h4> Creativity & Growth  </h4> We are always looking for different ways to expand our menu from glory to glory.
                    </p>

    <div className="Location text-right">
      <h3> Locations </h3>
      <ul className="text-right">
        <li className="text-right"> Redding, California </li>
        <li className="text-right"> Atlanta, Georgia </li>
        <li> Austin, Texas  </li>
        <li> San Francisco, California </li>
        <li> San Diego, California </li>
        <li> Santa Barbara, California </li>
      </ul> </div>
    <p>
      <h3 className="Veam text-center"> Our VEAM Founders </h3>
      <u>
        <li> Val Bonilla
                    <img width="200" height="200" src={Val} alt="Val" />
        </li>
        <li>Ethan Ferrier
                        <img width="200" height="200" src={Ethan} alt="Ethan" />
        </li>
        <li> Aubrena Taylor
                          <img width="200" height="200" src={Aubrena} alt="Aubrena" />
        </li>
        <li> Mitch Mccuen
                          <img width="200" height="200" src={Mitch} alt="Mitch" />
        </li>
      </u>


    </p>

  </div>;
};

About.propTypes = {};

export default About;
