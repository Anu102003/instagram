import React, { useState, useEffect } from 'react'
import "./_reelsPage.scss"
import { reels } from '../../../database/db'
import { Reels } from '../../../assets/components/Reels/Reels'
import { MorePopup } from '../../../assets/components/Popups/MorePopup/MorePopup'

export const ReelsPage = () => {

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown') {
        window.scrollBy(0, 650);
      } else if (event.key === 'ArrowUp') {
        window.scrollBy(0, -650);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const [isOpenMore, setIsOpenMore] = useState(false)
  useEffect(() => {
    function handler(event) {
      if (
        event.target.className === "popup-parent"
      ) {
        setIsOpenMore(false);
        setMainPopup(false)
        setType(null)
        document.body.style.overflow = "unset"
      }
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [])
  const [mainpopup, setMainPopup] = useState(false)
  const [type, setType] = useState(null)
  useEffect(()=>{
    if(mainpopup){
      document.body.style.overflow = "hidden"
    // console.log(mainpopup)
    // console.log(type)
    // console.log("hidd")
  }
  },[mainpopup])
  return (
    <div className='reels-container'>
      <div>
      </div>
      <div>
        {
          reels.map(item => {
            return (
              <>
                <Reels item={item} setIsOpenMore={setIsOpenMore} setMainPopup={setMainPopup} setType={setType} />
              </>
            )
          })
        }
      </div>
      <div>

      </div>
      {
        (isOpenMore && mainpopup) &&
        <div className='popup-parent'>
          <div className="popup-more">

            <MorePopup handleIsOpen={setIsOpenMore} reelMorePopuptype={type}/>

          </div>
        </div>
      }
    </div>
  )
}
