import React from 'react';
import Image3 from '../../pictures/truckphoto3.png';
import Val from '../../pictures/val.png';
import Ethan from '../../pictures/ethan.png';
import Aubrena from '../../pictures/aubrena.png';
import Mitch from '../../pictures/mitch.png';

const About = () => {
  return (
    <div className='About container shadow-lg p-3 mb-5 bg-white rounded'>
      <div className='card justify-content-center'>
        <div className='card'>
          <h2 className='Mission text-center'> Our Mission </h2>
          <div className='card-body mb-2'>

            Our hearts are to share and expand the Gospel of Jesus through our
            Food Truck Businesses. Our goal is that all would know Jesus would
            encounter the love of God through our food, and those that don't
            know the Fathers love would encounter His love for them. Every meal
            is made in excellence knowing we want our customers to taste the
            goodness of God in every bite.
          </div>
          <img
            className='rounded mx-auto d-block'
            width='550'
            height='400'
            src={Image3}
            alt='food truck'
          />

          <div className='card-body text-center'>
            <h2> Our Values </h2>
            <h4> Excellence </h4> Our food is farm to table and 100% organic.
            <h4> Community </h4> We gather people to join together and feast.
            <h4> Creativity & Growth </h4>
            We are always looking for different ways to expand our menu from glory to glory.
          </div>

          <div className='container text-center'>
            <h2> Locations </h2>
            <div className='row'>
              <ul className='container text-center '>
                <li className='list-group-item'> Redding, California </li>
                <li className='list-group-item'> Atlanta, Georgia </li>
                <li className='list-group-item'> Austin, Texas </li>
                <li className='list-group-item'> San Francisco, California </li>
                <li className='list-group-item'> San Diego, California </li>
                <li className='list-group-item'> Santa Barbara, California </li>
              </ul>
            </div>
          </div>

          <div className='text-center'>
            <h2> Our Founders </h2>
          </div>
          <div className='row'>
            <div className='col-md-7'>
              <div className='thumbnail'>
                <img
                  width='220'
                  height='200'
                  src={Val}
                  alt='Val'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'> Val </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='thumbnail'>
                <img
                  width='220'
                  height='200'
                  src={Aubrena}
                  alt='Aubrena'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'>Aubrena</p>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-7'>
              <div className='thumbnail'>
                <img
                  width='210'
                  height='200'
                  src={Ethan}
                  alt='Ethan'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'>Ethan </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='thumbnail'>
                <img
                  width='220'
                  height='200'
                  src={Mitch}
                  alt='Mitch'
                  className='mx-auto d-block'
                />
                <div className='caption'>
                  <p className='text-center'>Mitch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
