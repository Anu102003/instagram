import React, { useEffect, useState } from 'react'
import { UnfollowPopup } from '../UnfollowPopup/UnfollowPopup';
import { AboutAccountPopup } from '../AboutAccountPopup/AboutAccountPopup';
import { instahome } from "../../../../images/homepage/instahome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ReportPopupContext } from '../../../../context/CreateContext';
import { ReportPopup } from "../ReportPopupItems/ReportPopup"
import "./_morePopup.scss"
const PopupTypes = {
  REPORT: 'report',
  UNFOLLOW: 'unfollow',
  ABOUT: 'about',
};

export const MorePopup = ({ username, handleIsOpen, favourites, handlefavourites, statusMorePopup, profilePage,reelMorePopuptype}) => {

  const [popupType, setPopupType] = useState(null);
  const [loading, setLoading] = useState(false);
  const openPopup = (type) => {
    setPopupType(type);
    document.body.style.overflow = 'hidden';
  };
  const handelReelMorePopuptype=()=>{
    setPopupType(reelMorePopuptype);
  }
  useEffect(()=>{
    handelReelMorePopuptype()
  },[reelMorePopuptype])
 
  const handleReport = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 500);
    openPopup(PopupTypes.REPORT);
  };
  const handleAbout = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    openPopup(PopupTypes.ABOUT);
  };
  const handleUnfollow = () => {
    openPopup(PopupTypes.UNFOLLOW);
  }
  const favouritesChange = () => {
    handleIsOpen(false);
    document.body.style.overflow = "unset"
    handlefavourites(!favourites)
  }

  const handleCancel = () => {
    handleIsOpen(false);
    document.body.style.overflow = "unset"
  };

  const renderPopup = () => {
    switch (popupType) {
      case PopupTypes.UNFOLLOW:
        return <UnfollowPopup profileImg={instahome.p1} handleIsOpen={handleIsOpen} className={"MorePopup"} />;
      case PopupTypes.REPORT:
        return (
          <>
            <ReportPopupContext.Provider value={{ username, handleCancel }}>
              <ReportPopup />
            </ReportPopupContext.Provider>
          </>
        )
      case PopupTypes.ABOUT:
        return <AboutAccountPopup />;
      default:
        return null;
    }
  };
  return (
    <>
      {!popupType && (
        <>
          {
            statusMorePopup ?
              <div className='more-popup-red-btn' onClick={handleReport}>
                Report as inappropriate
              </div>
              :
              <>
                
                {
                  profilePage ?
                    <>
                      <div className='more-popup-red-btn' onClick={handleReport}>
                        Block
                      </div>
                      <div className='more-popup-red-btn' onClick={handleReport}>
                        Restrict
                      </div>
                    </>
                    : null

                }
                
                  <div className='more-popup-red-btn' onClick={handleReport}>
                    Report
                  </div>

                {
                  !profilePage  &&
                  <>
                    <div className='more-popup-red-btn' onClick={handleUnfollow}>
                      Unfollow
                    </div>
                    <div className='more-popup-btn' onClick={() => { favouritesChange() }}>
                      {
                        !favourites ? 'Add to favourites' : 'Remove from favourites'
                      }
                    </div>
                    <div className='more-popup-btn'>
                      Go to post
                    </div>
                  </>
                }

                
                    <div className='more-popup-btn'>
                      Share to...
                    </div>

                    {
                      !profilePage &&
                      <div className='more-popup-btn'>
                        Copy link
                      </div>
                    }

                    <div className='more-popup-btn' onClick={handleAbout}>
                      About this account
                    </div>
                    <div className='cancel-btn' onClick={handleCancel}>
                      Cancel
                    </div>
                 
              </>
          }

        </>
      )}
      {
        loading ?
          <>
            {
              popupType === "report" && <p className='about-popup__title report-title'>
                <FontAwesomeIcon onClick={handleCancel} className="close-icon" icon={faXmark} size="xl" style={{ color: "#ffffff", cursor: 'pointer' }} />
                Report
              </p>
            }

            <div className='popup-loading'>
              <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" style={{ color: "#ffffff", }} />
            </div>
          </>
          : renderPopup()
      }
      {popupType && popupType !== "unfollow" && popupType !== "report" &&
        <div className='cancel-btn close-btn' onClick={handleCancel}>
          Close
        </div>
      }
    </>
  )
}
