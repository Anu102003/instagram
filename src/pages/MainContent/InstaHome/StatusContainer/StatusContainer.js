import React, { useState, useEffect, Children } from 'react';
import './_statusContainer.scss';
import Avatar from '../../../../assets/components/Avatar';
import { statusData } from '../../../../database/db';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const StatusContainer = ({highlight}) => {
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);

  const handleSlide = (direction) => {
    let slider;
    if(highlight){
      slider = document.getElementsByClassName('highlight-carousel-body')[0];
    }
    else{
      slider = document.getElementsByClassName('carousel-body')[0];
    }
    if (direction === 'left') {
      slider.scrollBy(-400, 0);
    } else {
      slider.scrollBy(400, 0);
    }
  };

  const handleScroll = () => {
    let slider;
    if(highlight){
      slider = document.getElementsByClassName('highlight-carousel-body')[0];
    }
    else{
      slider = document.getElementsByClassName('carousel-body')[0];
    }
    setShowLeftIcon(slider.scrollLeft > 0);
    setShowRightIcon(slider.scrollLeft+1 < slider.scrollWidth - slider.clientWidth);
  };

  useEffect(() => {
    let slider;
    if(highlight){
      slider = document.getElementsByClassName('highlight-carousel-body')[0];
    }
    else{
      slider = document.getElementsByClassName('carousel-body')[0];
    }
    slider.addEventListener('scroll', handleScroll);
    return () => {
      slider.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='check'>
      {showLeftIcon && (
        <div className={highlight ?'highlight-left-icon':'left-icon'} onClick={() => handleSlide('left')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      )}

      {showRightIcon && (
        <div className={highlight ?'highlight-right-icon':'right-icon'} onClick={() => handleSlide('right')}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      )}

      <div className={highlight ?'highlight-carousel-body' :'carousel-body'}>
        {statusData.map((item,index) => {
          return <Avatar key={index} image={item} highlight={highlight}/>;
        })}
      </div>
    </section>
  );
};

export default StatusContainer;
