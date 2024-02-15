import React, { useState } from 'react'
import { instahome } from "../../images/homepage/instahome/index"
import { useNavigate } from 'react-router-dom'
const Avatar = ({ image, highlight }) => {
  const navigate = useNavigate();
  const [statusSelected, setStatusSelected] = useState(false)
  const handelStatuSelected = () => {
    setStatusSelected(true);
    setTimeout(() => {
      navigate('/status', { state: { statusData: image} });
    }, 500);

  }
  return (
    <section className={highlight ? 'highlight-avatar-detail' : 'avatar-detail'} onClick={handelStatuSelected}>
      <div className={!statusSelected ? "status-card__img" : "story-gif"}>
        {
          statusSelected ?
            <>
              {
                highlight ?
                  <img className="highlight-selected-img" src={image.img} /> :
                  <>
                    <img src={instahome.story} alt="" />
                    <div className="story-img">
                      <img className="status-img" src={image.img} alt="" />
                    </div>
                  </>
              }
            </>
            :
            <img className={highlight ? "highlight-status-img" : "status-img"} src={image.img} alt="" />
        }
      </div>

      <div className='status-card__username'>
        <p>{image.name}</p>
      </div>
    </section>
  )
}

export default Avatar;