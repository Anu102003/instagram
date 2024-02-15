import React, { useState, useEffect } from 'react'
import "./_exploreItems.scss"
import { faComment, faHeart, faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CommentPopup } from '../Popups/CommentPopup/CommentPopup'

export const ExploreItems = ({ explore }) => {
    const [postHover, setPostHover] = useState(false)
    const handlePostHover = () => {
        setPostHover((prevPostHover) => !prevPostHover)
    }
    const [isComment, setIsComment] = useState(false);
    const commentMsgPopup = () => {
        setIsComment(true);
        document.body.style.overflow = "hidden"
    }
    const commentPopupClose = () => {
        setIsComment(false);
        document.body.style.overflow = "unset"
    }
    useEffect(() => {
        function handler(event) {
            if (
                event.target.className === "popup-parent"
            ) {
                setIsComment(false);
                document.body.style.overflow = "unset"
            }

        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])
    return (
        <>
            <div className="explore-item" onMouseOver={handlePostHover}
                onMouseOut={handlePostHover} onClick={() => { commentMsgPopup() }}>
                {/* <video width={316}>
                    <source src={explore.postImg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <div className='image-icon'>
                    <FontAwesomeIcon icon={faImage} size="lg" />
                </div>
                <img src={explore.postImg} width={316} height={316} />
                {
                    postHover &&
                    <div className='post-hover'>
                        <p className='post-hover-content'>
                            <FontAwesomeIcon icon={faHeart} />
                            <span className='post-hover-text'>{explore.postLikes}</span>

                        </p>
                        <p className='post-hover-content'>
                            <FontAwesomeIcon icon={faComment} />
                            <span className='post-hover-text'>{explore.comments}</span>
                        </p>
                    </div>
                }
            </div>
            {isComment &&
                <div className='popup-parent'>
                    <CommentPopup item={explore} commentPopupClose={commentPopupClose} />
                </div>
            }
        </>
    )
}
