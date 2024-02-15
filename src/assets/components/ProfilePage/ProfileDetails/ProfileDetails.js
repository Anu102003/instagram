import React,{useState,useEffect} from 'react'
import "./_profileDetails.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faUserPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { UnfollowPopup } from '../../../../assets/components/Popups/UnfollowPopup/UnfollowPopup';
import { instahome } from '../../../../images/homepage/instahome';
import { MorePopup } from '../../../../assets/components/Popups/MorePopup/MorePopup';
export const ProfileDetails = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const morePopup = () => {
    setIsOpenMore(true);
    document.body.style.overflow = "hidden"
  }
  const [followClick, setFollowClick] = useState(false);
  const [followText, setFollowText] = useState("Follow")

  const asideFollowFunction = () => {
    if (followText === "Following") {
      setIsOpen(true);
      document.body.style.overflow = "hidden"
    }
    else if (followText === "Follow") {
      setFollowClick(true)
      setTimeout(() => {
        setFollowClick(false);
        setFollowText("Following")
      }, 2000);

    }
  }
  const cancelChange = (cancelValue) => {
    setIsOpen(cancelValue);
    document.body.style.overflow = "unset"
  }
  const unfollowChange = (unfollowValue) => {
    setIsOpen(unfollowValue);
    document.body.style.overflow = "unset"
    setFollowClick(true)
    setTimeout(() => {
      setFollowClick(false);
      setFollowText("Follow")
    }, 2000);
  }
  useEffect(() => {
    function handler(event) {
      if (
        event.target.className === "popup-parent"
      ) {
        setIsOpenMore(false);
        document.body.style.overflow = "unset"
      }
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [])

  return (
    <div className='profile'>
          <div className='profile__pic'>
            <img src="https://storage.googleapis.com/pai-images/b9ffb7118fa5430eb39766c2d0d3747d.jpeg" />
          </div>
          <div className='profile__details'>
            <div className='usernameBtns'>
              <p className='username'>saaji._</p>

              <button className={followText === "Follow" ? 'follow-btn' : 'following-btn'} onClick={() => { asideFollowFunction() }}>
                {
                  followClick ?
                    <FontAwesomeIcon className="loading-icon" icon={faSpinner} spin style={{ color: "#ffffff", }} />
                    :
                    followText
                }
              </button>
              {isOpen && <UnfollowPopup profileImg={instahome.p1} handleIsOpen={unfollowChange} cancelChange={cancelChange} />
              }
              {
                followText !== "Follow" &&
                <button className='following-btn'>
                  Messages
                </button>
              }

              <button className='following-btn add-people'>
                <FontAwesomeIcon icon={faUserPlus} size="lg" style={{ color: "#ffffff" }} />
              </button>

              <FontAwesomeIcon onClick={morePopup} className="more-dots" icon={faEllipsis} size="xl" style={{ color: "#ffffff" }} />
              {
                isOpenMore &&
                <div className='popup-parent'>
                  <div className="popup-more">
                    <MorePopup handleIsOpen={setIsOpenMore} profilePage={true} />
                  </div>
                </div>
              }
            </div>

            <div className='post-follow-following'>
              <p className='txt'><span className='no'>5</span>posts</p>
              <p className='txt'><span className='no'>5</span>followers</p>
              <p className='txt'><span className='no'>5</span>following</p>
            </div>

            <p className='name'> saaji_D</p>
            <p className='description'>
              Yass its a fp of a person whom i admire all time @saajii._ 😍💙<br />
              Wish him on 29th june💗🥳<br />
              Its been 4yrs of being his fan🥺<br />
              never ends♾️🤍<br />
            </p>
          </div>
        </div>
  )
}
