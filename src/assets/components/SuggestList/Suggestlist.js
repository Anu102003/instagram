import React, { useState } from 'react'
import { instahome} from '../../../images/homepage/instahome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import "./_suggestlist.scss"
export const Suggestlist = ({userdata}) => {
    const [followClick, setFollowClick] = useState(false);
    const [followText, setFollowText] = useState("Follow")
    const followfunction = () => {
        setFollowClick(true)
        setTimeout(() => {
            setFollowClick(false);
            setFollowText("Following")
        }, 2000);
    }
    return (
        <>
            <div></div>

            <div className='suggest-list'>
                <div className='suggest-img'>
                    <img src={userdata.img} />
                </div>
                <div className='suggest-text'>
                    <p className='suggest-username'>{userdata.username}
                        <img src={instahome.tick} width="20px" height="20px" />
                    </p>
                    <p className='suggest-name'>{userdata.name}</p>
                    <p className='suggest-status'>{userdata.subtext}</p>
                </div>
                <div className='suggest-btn'>
                    <button className={followText === "Follow" ? 'follow-btn' : 'following-btn'}
                        onClick={() => { followfunction() }}>
                        {
                            followClick ?
                                <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#ffffff", }} />
                                :
                                followText
                        }
                    </button>
                </div>
            </div>

            <div></div>
        </>
    )
}
