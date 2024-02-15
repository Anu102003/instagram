import React, { useState } from 'react';
import Slide from './Slide';
import "./_slider.scss"
import { statusData } from '../../../database/db';

const Slider = ({ isOpen, setIsOpen, setIsStatusShared, currentClickStatus }) => {
const last=statusData.length-1
  const [current, setCurrent] = useState(currentClickStatus.index);
  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent((previous < 0) ? 0 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent((next === statusData.length) ? statusData.length - 1 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const wrapperTransform = {
    'transform': `translateX(-${current * (100 / statusData.length)}%)`
  };

  return (
    <div className='slider'>
      <ul className="slider-list" style={wrapperTransform}>
        {statusData.map((slide) => (
          <Slide
          last={last}
            key={slide.index}
            slide={slide}
            current={current}
            handleSlideClick={handleSlideClick}
            handlePreviousClick={handlePreviousClick}
            handleNextClick={handleNextClick}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setIsStatusShared={setIsStatusShared}
          />
        ))}
      </ul>

    </div>
  );
};

export default Slider;
