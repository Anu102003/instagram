import React, { useState } from 'react'
import "./_reelMorePopup.scss"

export const ReelMorePopup = ({ setMainPopup, setType }) => {

    const handleReelsReport = () => {
        setType("report")
        setMainPopup(true)
    }
    const handleAbout = () => {
        setType("about")
        setMainPopup(true)
    }

    const [followClick, setFollowClick] = useState(true)

    return (

        <>
            <div className='reel-more-popup-red-btn' onClick={handleReelsReport}>
                Report
            </div>
            <div className={`reel-more-popup-btn ${!followClick ? 'unfollow' : 'follow'}`} onClick={() => { setFollowClick(!followClick) }}>
                {
                    followClick ? "Follow" : "UnFollow"
                }
            </div>
            <div className='reel-more-popup-btn'>
                Go to post
            </div>
            <div className='reel-more-popup-btn'>
                Share to...
            </div>
            <div className='reel-more-popup-btn'>
                Copy link
            </div>
            <div className='reel-more-popup-btn'>
                Embed
            </div>
            <div className='reel-more-popup-btn' onClick={handleAbout}>
                About this account
            </div>
        </>

    )
}
