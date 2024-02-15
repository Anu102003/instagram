import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Posticon = ({ setLikesClick, soildIcon, regularIcon, color, type, commentFontSize }) => {
  const [hover, setHover] = useState({
    hover: false,
    click: false
  });
  const handleHover = () => {
    setHover((prevHover) => ({
      ...prevHover,
      hover: !prevHover.hover,
    }));
  };

  const iconClick = () => {
    setHover((prevHover) => ({
      ...prevHover,
      click: !prevHover.click,
    }));

  };
  if (type === "comment") {
    setLikesClick(hover.click)
  }
  return (
    <>
      <div onClick={iconClick}>
        <FontAwesomeIcon
          className='post-icon__heart'
          style={{
            fontSize: type === "comment" ? '12px' : commentFontSize ? commentFontSize : '30px',
            color: hover.click ? color : hover.hover ? 'gray' : 'white',
          }}
          onMouseOver={handleHover}
          onMouseOut={handleHover}
          icon={hover.click ? soildIcon : regularIcon}
        />
      </div>
    </>
  )
}

















