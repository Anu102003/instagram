import React, { useEffect, useState, useRef } from 'react'
import "./_reels.scss"
import { Video } from '../Video/Video';
import { ReelsSideIcon } from '../ReelsSideIcon/ReelsSideIcon';
export const Reels = ({ item,setIsOpenMore,setMainPopup, setType }) => {
    const [followClick, setFollowClick] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const [isContentOverflowed, setIsContentOverflowed] = useState(false);
    const contentContainerRef = useRef(null);
    const [fitHeight, setFitHeigth] = useState(0);
    useEffect(() => {
        if (showMore) {
            const contentContainer = contentContainerRef.current;
            console.log(contentContainer.scrollHeight)

            if (contentContainer.scrollHeight > 200) {
                setIsContentOverflowed(true);
            } else {
                setFitHeigth(contentContainer.scrollHeight + "px")
                setIsContentOverflowed(false);
            }
        }
    }, [showMore]);

    return (
        <div className='reels-vid' >
            <Video item={item} reel={true} />
            <ReelsSideIcon item={item} setIsOpenMore={setIsOpenMore} setMainPopup={setMainPopup} setType={setType}/>
            <div className='reels-details'>
                <div className='user-details'>
                    <img src={item.profileImg} height={32} width={32} />
                    <p className='username'>{item.username}
                        <span className='dot'>.</span>
                    </p>
                    <button className='follow' onClick={() => { setFollowClick(!followClick) }}>
                        {followClick ? "Following" : "Follow"}
                    </button>
                </div>
                <div ref={contentContainerRef}
                    onClick={() => { setShowMore(!showMore) }}
                    style={{
                        overflowY: showMore ? 'auto' : 'hidden',
                        minHeight: showMore ? isContentOverflowed ? '200px' : fitHeight : null,
                    }}
                    className={'reels-description'}

                >
                    {!showMore &&
                        <p className='more'>. . . more</p>
                    }
                    <p className='description' style={{
                        width: showMore ? '19.30rem' : '17rem'
                    }}>{item.description}</p>
                </div>
                <div className='reels-audio'>
                    <p className='audio' >{item.audio}</p>
                </div>
            </div>
        </div>
    )
}
