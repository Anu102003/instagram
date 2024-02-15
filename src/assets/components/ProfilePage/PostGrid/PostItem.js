import React, { useState, useEffect } from 'react'
import {faCirclePlay, faComment, faHeart, faImage, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CommentPopup } from '../../Popups/CommentPopup/CommentPopup'
import "./_postGrid.scss"
export const PostItem = ({ posts, reels,explore }) => {
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
            <div className={explore?'posts':'posts post-border'} onMouseOver={handlePostHover}
                onMouseOut={handlePostHover} onClick={() => { commentMsgPopup() }} >

                {
                    !posts.postType ?
                        <>

                            {
                                reels ?
                                    <>
                                        <div className='reel-icon'>
                                            <FontAwesomeIcon icon={faPlay} size="lg" />
                                            <p className='views'>{posts.views} M</p>
                                        </div>
                                        <video height={360} width={221}>
                                            <source src={posts.postImg} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </> :
                                    <>
                                        <div className='video-icon'>
                                            <FontAwesomeIcon icon={faCirclePlay} size="lg" />
                                        </div>
                                        <video height={explore?316:295} width={explore?316:296}>
                                            <source src={posts.postImg} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </>
                            }
                        </>
                        :
                        <>
                            <div className='image-icon'>
                                <FontAwesomeIcon icon={faImage} size="lg" />
                            </div>
                            <img src={posts.postImg} height={explore?316:295} width={explore?316:296} />
                        </>
                }
                {
                    postHover &&
                    <div className={explore ?'post-hover-explore':!reels ? 'post-hover-img'  :'post-hover-video' }>
                        <p className='post-hover-content'>
                            <FontAwesomeIcon icon={faHeart} />
                            <span className='post-hover-text'>{posts.postLikes}</span>

                        </p>
                        <p className='post-hover-content'>
                            <FontAwesomeIcon icon={faComment} />
                            <span className='post-hover-text'>{posts.comments}</span>
                        </p>
                    </div>
                }
            </div>
            {isComment &&
                <div className='popup-parent'>
                    <CommentPopup item={posts} commentPopupClose={commentPopupClose} />
                </div>
            }
        </>
    )
}
