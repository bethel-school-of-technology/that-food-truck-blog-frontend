import React, { Component } from 'react';
import Image1 from '../../pictures/truckphoto1.png';
import Image2 from '../../pictures/truckphoto2.png';
import Image3 from '../../pictures/truckphoto3.png';
import Image4 from '../../pictures/truckphoto4.png';
import Card from '../Card';

const Cards = [
  {
    title: 'string',
    img: Image3,
    about:
      'Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.',
    blogId: '24',
  },
  {
    title: 'string',
    img: Image4,
    about:
      'Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.',
    blogId: '24',
  },
  {
    title: 'string',
    img: Image1,
    about:
      'Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.',
    blogId: '24',
  },
  {
    title: 'string',
    img: Image2,
    about:
      'Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.',
    blogId: '24',
  },
  {
    title: 'string',
    img: Image3,
    about:
      'Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.',
    blogId: '24',
  },
];
const FeaturedCards = [
  {
    title: 'string',
    img: Image1,
    about:
      'Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.',
    blogId: '24',
  },
  {
    title: 'string',
    img: Image2,
    about:
      'Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.',
    blogId: '24',
  },
];

export class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <div
          id='carouselExampleIndicators'
          className='carousel slide carousel-fade shadow-lg p-3 mb-5 bg-white rounded card mt-3'
          data-ride='carousel'
        >
          <ol className='carousel-indicators'>
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='0'
              className='active'
            ></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='3'></li>
          </ol>
          <div className='carousel-inner'>
            <div className='carousel-item active ' data-interval='10000'>
              <img
                src={Image1}
                className='d-block w-100'
                alt='carosel item one'
              ></img>
            </div>
            <div className='carousel-item' data-interval='10000'>
              <img
                src={Image2}
                className='d-block w-100'
                alt='carosel item Two'
              ></img>
            </div>
            <div className='carousel-item' data-interval='10000'>
              <img
                src={Image3}
                className='d-block w-100'
                alt='carosel item Three'
              ></img>
            </div>
            <div className='carousel-item' data-interval='10000'>
              <img
                src={Image4}
                className='d-block w-100'
                alt='carosel item Four'
              ></img>
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
        <Card Cards={FeaturedCards} Title='Featured' />
        <Card Cards={Cards} Title='More' />
      </div>
    );
  }
}

export default HomePage;
