import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faSpinner, faPeopleArrows, faAngleRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import CreateContext from '../../../../context/CreateContext';
import { instahome } from '../../../../images/homepage/instahome';
import { AccountSharedPopup } from '../AccountSharePopup/AccountSharedPopup';
import "./_aboutAccountPopup.scss"
export const AboutAccountPopup = () => {
  const item = useContext(CreateContext);
  const [joinBtn, setJoinBtn] = useState({
    loading: false,
    joinBtnState: true
  });
  const [loading, setLoading] = useState(false);
  const [sharedBtn, setSharedBtn] = useState(false);
  const sharedBtnClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setSharedBtn(true);
  }
  const joinBtnHandel = () => {
    setJoinBtn({ ...joinBtn, loading: true })

    setTimeout(() => {
      setJoinBtn({ ...joinBtn, loading: false, joinBtnState: !joinBtn.joinBtnState })
    }, 1000);
  };

  return (
    <>
      {
        !sharedBtn ?
          <div className="about-popup">
            <p className='about-popup__title'>About this account</p>
            <div className='about-popup__profile'>
              <div className='about-popup-heading'>
                <div className="about-popup-img">
                  <img src={item?.profileImg} width="78px" height="78px" />
                </div>
                <p className='about-popup-username'>{item?.username}
                  <img src={instahome.tick} width="20px" height="20px" />
                </p>
                <p className='about-popup-text'>
                  <p>To help keep our community authentic, we're showing information about accounts on Instagram.
                    <a href="https://help.instagram.com/697961817256175" className='about-popup-link'>See why this information is important.
                    </a>
                  </p>
                </p>
              </div>
            </div>

            <div className='about-popup__content'>
              <div className='about-content-list'>
                <div className='content-icon'>
                  <FontAwesomeIcon icon={faCalendarDays} size="xl" style={{ color: "#ffffff", }} />
                </div>
                <div className='content-items'>
                  <p className='content-items__text'>
                    Date joined
                  </p>
                  <p className='content-items__subtext'>
                    {item?.joinedDate}
                  </p>
                </div>
              </div>
              <div className='about-content-list'>
                <div className='content-icon'>
                  <FontAwesomeIcon icon={faLocationDot} size="xl" style={{ color: "#ffffff", }} />
                </div>
                <div className='content-items'>
                  <p className='content-items__text'>
                    Account based in
                  </p>
                  <p className='content-items__subtext'>
                    {item?.location}
                  </p>
                </div>
              </div>
              {
                item?.accountShared.length > 0 &&
                <div className=' shared' onClick={sharedBtnClick}>
                  <div className='shared-icon-txt'>
                    <div className='shared-icon'>
                      <FontAwesomeIcon icon={faPeopleArrows} size="sm" style={{ color: "#ffffff", }} />
                    </div>
                    <div className='content-items'>
                      <p className='content-items__text'>
                        Accounts with shared followers
                      </p>
                    </div>
                  </div>
                  <div className='shared-right-arrow'>
                    {item?.accountShared.length}
                    <FontAwesomeIcon icon={faAngleRight} style={{ color: "rgb(168, 168, 168)", paddingLeft: "10px" }} />
                  </div>
                </div>
              }

              <div className='about-content-list'>
                <div className='content-icon'>
                  <img src={instahome.verified} width="20px" height="23px" />
                </div>
                <div className='content-items'>
                  <p className='content-items__text'>
                    Verified
                  </p>
                  <p className='content-items__subtext'>
                    {item?.verified}
                  </p>
                </div>
              </div>
              <p className='about-content-text'>
                Accounts with a verified badge have been authenticated using trusted documentation. Some verified accounts are owned by a notable person, brand or entity, while others are Meta Verified.
              </p>
              <p className='about-content-text'>With a Meta Verified subscription, you get a verified badge, proactive account protection, access to direct account support and increased prominence across Facebook and Instagram.
                <a href="https://help.instagram.com/733907830039577" className='about-content-link'> Learn more
                </a>
              </p>
              <div className={
                joinBtn.joinBtnState ? 'about-popup__btn' : 'about-popup__btn-hover'} onClick={joinBtnHandel}>
                {
                  joinBtn.loading ?
                    <div className='popup-loading'>
                      <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" style={{ color: "#ffffff", }} />
                    </div>
                    : (
                      joinBtn.joinBtnState ? " Join the waitlist for Meta Verified" :
                        "Leave the waiting list for Meta Verified"
                    )
                }

              </div>
            </div>
          </div>
          : <>
            <p className='about-popup__title shared-account'>
              <FontAwesomeIcon className="right-arrow" icon={faChevronLeft} size="xl" style={{ color: "#ffffff", cursor: 'pointer' }} onClick={() => { setSharedBtn(false) }} />
              Accounts with shared followers</p>
            {
              loading ?
                <div className='popup-loading'>
                  <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" style={{ color: "#ffffff" }} />
                </div>
                :
                <AccountSharedPopup currentUsername={item?.username} accountShared={item?.accountShared}/>
            }
          </>
      }
    </>
  );
};