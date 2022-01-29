import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import carousel from '../slider/Slider.module.css';
import data from '../../constants/data';

const Slider = () => {
  return (
    <>
      <Carousel className={carousel.slider}>
        {data.map((item, i) => (
          <Carousel.Item interval={1000} key={i}>
            <div className={carousel.slider}>
              <img
                className={carousel.image}
                src={item.image}
                alt={item.header}
              />
              <div className={carousel.header}>
                <img src={item.number} alt='Number' />
                <h1>{item.header}</h1>
                <p>{item.para}</p>
              </div>
            </div>
            <span aria-hidden="true" className={`carousel-control-prev-icon ${carousel.prev}`} />
            <span aria-hidden="true" className={`carousel-control-next-icon ${carousel.next}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;