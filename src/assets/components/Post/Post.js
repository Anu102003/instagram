import React, { useState, useEffect, useRef, useContext } from 'react'
import { ProfileHover } from '../ProfileHover/ProfileHover';
import CreateContext from '../../../context/CreateContext';
import { UserProfileDetails } from '../UserProfileDetails/UserProfileDetails';
import { CommentPopup } from '../Popups/CommentPopup/CommentPopup';
import "./_post.scss";
import { AllPostIcons } from '../AllPostIcons/AllPostIcons';
import InputEmoji from 'react-input-emoji'
import { Video } from '../Video/Video';

export const Post = () => {

    const item = useContext(CreateContext);

    const [isHoveredDescriptionUsername, setIsHoveredDescriptionUsername] = useState(false);

    const [profileHover, setProfileHover] = useState("Image")
    const [popupDescriptionPosition, setPopupDescriptionPosition] = useState('below');
    const [isComment, setIsComment] = useState(false);

    const hoverContainerDescriptionRef = useRef(null);
    const [commentText, setCommentText] = useState("");
    const [enableCommentPost, setEnableCommentPost] = useState(false);

    const [isPause, setIsPause] = useState(false);
    const [isMute, setIsMute] = useState(true);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (!video.paused) {
          video.pause();
          setIsPause(true)
    
        } else {
          video.play();
          setIsPause(false)
        }
      };

    function handleOnEnter(text) {
        if (text === "") {
            setEnableCommentPost(false)
        } else {
            setCommentText(text)
            setEnableCommentPost(true)
        }
    }

    const handelPost = () => {

        if (enableCommentPost) {
            setEnableCommentPost(false)
            setCommentText("")
        }
    }

    const commentMsgPopup = () => {
        setIsComment(true);
        document.body.style.overflow = "hidden"
    }
    const commentPopupClose = () => {
        setIsComment(false);
        document.body.style.overflow = "unset"
    }

    const handleScroll2 = () => {
        const ref = hoverContainerDescriptionRef.current;
        if (ref) {
            const containerRect = ref.getBoundingClientRect();
            const isAbove = window.innerHeight - containerRect.top > 360;
            setPopupDescriptionPosition(!isAbove ? 'above' : 'below');
        }
    };
    useEffect(() => {
        function handler(event) {

            if (
                event.target.className === "post-popup-parent"
            ) {
                setIsComment(false);
                document.body.style.overflow = "unset"
            }

        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])
    useEffect(() => {
        handleScroll2();
        window.addEventListener('scroll', handleScroll2);

        return () => {
            window.addEventListener('scroll', handleScroll2);
        };
    }, []);
    return (

        <div className='post-card'>
            <UserProfileDetails type={null} />
            {
                item.postType ?
                    <div className='post-img-vid'>
                        <img src={item.postImg} />
                    </div> :
                    <div className='post-img-vid'>
                        <Video item={item} />
                    </div>
            }

            <AllPostIcons item={item} type={"post"}/>

            <div className='post-likes'>
                <p>{item.postLikes} likes</p>
            </div>

            <div className='post-description' ref={hoverContainerDescriptionRef}>
                <span className='post-description__username '
                    onMouseEnter={() => { setIsHoveredDescriptionUsername(true); setProfileHover("Description") }}
                    onMouseLeave={() => setIsHoveredDescriptionUsername(false)}>
                    {item.username}
                    {
                        isHoveredDescriptionUsername &&
                        (
                            <ProfileHover
                                popupPosition={isHoveredDescriptionUsername ? popupDescriptionPosition : null}
                                profileHover={profileHover} />
                        )
                    }
                </span>
                <span className='post-description__text '>{item.description}</span>
            </div>

            <div className='post-more'>
                <p>more</p>
            </div>

            <div className='post-translation'>
                <p>See Translation</p>
            </div>

            <div className='post-view'>
                <p onClick={() => { commentMsgPopup() }} >
                    View all {item.comments} comments</p>
                {(isComment) &&
                    <div className='post-popup-parent'>
                        <CommentPopup item={item} commentPopupClose={commentPopupClose} />
                    </div>
                }
            </div>

            <div className='post-add-comment'>
                <InputEmoji
                    value={commentText || ""}
                    onChange={handleOnEnter}
                    cleanOnEnter
                    type="text"
                    placeholder='Add a comment...'
                    borderRadius={6}
                    borderColor='black'
                    fontSize={13}
                />
                {
                    enableCommentPost &&
                    <p onClick={handelPost} className='comment-post-blue'>Post</p>
                }
            </div>
        </div >
    )
}
