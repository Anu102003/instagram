import React, { useState, useEffect } from 'react'
import { instahome } from '../../images/homepage/instahome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { UnfollowPopup } from './Popups/UnfollowPopup/UnfollowPopup'
import { useNavigate } from 'react-router-dom'

export const AsideSuggestList = ({ userdata }) => {
    const navigate=useNavigate();
    const [followClick, setFollowClick] = useState(false);
    const [followText, setFollowText] = useState("Follow")
    const [isOpen, setIsOpen] = useState(false);

    const navigateProfilePage=()=>{
        navigate("/profile")
    }
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
                event.target.className === "popup-switch-parent"
            ) {
                setIsOpen(false);
                document.body.style.overflow = "unset"
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])

    return (
        <>
            <div className='aside-content__list'>
                <div className='suggest-img'>
                    <img onClick={navigateProfilePage} src={userdata.img} />
                </div>
                <div className='suggest-text'>
                    <p className='suggest-username' onClick={navigateProfilePage}>
                        {userdata.username}
                        <img src={instahome.tick} width="20px" height="20px" />
                    </p>
                    <p className='suggest-status'>{userdata.subtext}</p>
                </div>
                <div className={followText === "Follow" ? 'follow-text' : 'following-text'}
                    onClick={() => { asideFollowFunction() }}>
                    {
                        followClick ?
                            <FontAwesomeIcon className="loading-icon" icon={faSpinner} spin style={{ color: "#ffffff", }} />
                            :
                            followText
                    }
                </div>
                {isOpen && <UnfollowPopup profileImg={instahome.p1} handleIsOpen={unfollowChange} cancelChange={cancelChange} />
                }

            </div>
        </>
    )
}
