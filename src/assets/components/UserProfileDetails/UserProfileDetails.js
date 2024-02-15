import React, { useState, useRef, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateContext from '../../../context/CreateContext';
import { instahome } from "../../../images/homepage/instahome"
import { MorePopup } from '../Popups/MorePopup/MorePopup';
import { ProfileHover } from '../ProfileHover/ProfileHover';
import { faHeart as solidHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { Posticon } from '../Post/PostIcon/Posticon';
import { ViewReplys } from '../Popups/ViewReplys/ViewReplys';
import "./_userProfileDetails.scss";
import { useNavigate } from 'react-router-dom';

export const UserProfileDetails = ({ type, commentUserHover, setReply }) => {
    const navigate = useNavigate();

    const navigateProfilePage = () => {
        navigate("/profile")
    }
    let comment = false;
    if (type === "comment") {
        comment = true;
    }
    if (type === "commentProfile") {
        comment = true;
    }
    const contextData = useContext(CreateContext)
    let item = contextData;
    if (comment) {
        item = commentUserHover
    } else {
        item = contextData
    }

    const [isHoveredImage, setIsHoveredImage] = useState(false);
    const [isHoveredUsername, setIsHoveredUsername] = useState(false);

    const [profileHover, setProfileHover] = useState("Image")
    const [popupPosition, setPopupPosition] = useState('below');


    const [isOpen, setIsOpen] = useState(false);
    const [favourites, setFavourites] = useState(false);

    //more
    const [commentMore, setCommentMore] = useState(null)
    const handleCommentMore = () => {
        setCommentMore((prevCommentMore) => !prevCommentMore)
    }

    //likeCount
    const [likesClick, setLikesClick] = useState()
    const [likesCount, setLikesCount] = useState(item.likes)
    const handelLikes = () => {
        if (likesClick) {
            setLikesCount(prevLikesCount => prevLikesCount - 1);
        } else {
            setLikesCount(prevLikesCount => prevLikesCount + 1);
        }
    };

    //date
    const [formattedDate, setFormattedDate] = useState('');
    useEffect(() => {
        const currentDate = new Date();
        const inputDate = new Date(item.date);

        const timeDifference = currentDate - inputDate;
        const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
        if (hoursDifference === 0) {
            setFormattedDate("Now");
        } else if (hoursDifference < 24) {
            setFormattedDate(`${hoursDifference} h`);
        }
        else {
            const daysDifference = Math.floor(hoursDifference / 24);
            setFormattedDate(`${daysDifference} d`);
        }
    }, [item.date]);

    //replyUsername Setting
    const handelReplyWithUsername = (userName) => {
        let name="*" + `${userName} `
        setReply((prevReply)=>
        ({...prevReply,
            enable:true,
            username:name,
        })
        )
    }

    //viewreply
    const [isViewReply, setViewReply] = useState(false)

    const morePopup = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden"
    }
    const hoverContainerRef = useRef(null);

    const handleScroll1 = () => {
        const containerRect = hoverContainerRef.current.getBoundingClientRect();
        const isAbove = window.innerHeight - containerRect.top > 360;
        setPopupPosition(!isAbove ? 'above' : 'below');
    };

    // useEffect(() => {
    //     handleScroll1();
    //     window.addEventListener('scroll', handleScroll1);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll1);
    //     };
    // }, []);

    useEffect(() => {
        function handler(event) {
            if (
                event.target.className === "comment-report-popup"
            ) {
                setIsOpen(false);
                document.body.style.overflow="unset"
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])
    return (
        <div className='post-head-container'
            onMouseOver={handleCommentMore}
            onMouseOut={handleCommentMore}>

            <div className='post-profile'
                ref={hoverContainerRef}>

                <div className='post-profile__img'
                    onMouseEnter={() => {
                        setIsHoveredImage(true); setProfileHover("Image");
                    }}
                    onMouseLeave={() => { setIsHoveredImage(false); }}
                >

                    <img onClick={navigateProfilePage} src={item.profileImg} height={30} width={30} />
{/*                     
                    {isHoveredImage && (
                        <div>
                            <ProfileHover popupPosition={popupPosition} myClassName={isHoveredUsername ? "side-view" : ""} profileHover={profileHover} type={type} commentUserHover={commentUserHover} />
                        </div>
                    )} */}

                </div>

                <div className='post-profile__text'>
                    <div className='comment-list'>
                        <p className='profile-username'>
                            <p className='profile-username__text'>
                                <span onMouseEnter={() => {
                                    setIsHoveredUsername(true);
                                    setProfileHover("Username");
                                }}
                                    onMouseLeave={() => { setIsHoveredUsername(false) }}
                                    onClick={navigateProfilePage}>
                                    {item.username}</span>
                                {/* {isHoveredUsername && (
                                    <div className='profile-hover-div'>
                                        <ProfileHover popupPosition={popupPosition} myClassName="side-view" profileHover={profileHover} type={type} commentUserHover={commentUserHover} />
                                    </div>
                                )} */}

                                <img src={instahome.tick} width="20px" height="20px" />
                                {
                                    (type === null) &&
                                    <div className='post-profile__time'><div className='dot'></div>{item.postDay} d</div>
                                }

                            </p>

                            {
                                (comment && type!=="commentProfile")&& 
                                <span className='comment-txt'>
                                    {item.comment}
                                </span>
                            }</p>

                        {
                            (comment && type!=="commentProfile")&&
                            <>
                                <p className='comment-bottom'>
                                    <p className='comment-time'>
                                        {formattedDate}
                                    </p>
                                    {
                                        likesCount > 0 &&
                                        <p className='comment-likes'>
                                            {likesCount} likes
                                        </p>
                                    }                
                                                        {/* <p className='comment-reply' onClick={() => { handelReplyWithUsername(item.username) }}> */}

                                    <p className='comment-reply' onClick={() => { handelReplyWithUsername(item.username) }}>
                                        Reply
                                    </p>
                                    {
                                        commentMore && <p className='comment-more' onClick={() => { morePopup() }}>
                                            ...
                                        </p>
                                    }

                                </p>
                                {
                                    item.reply.length !== 0 &&
                                    <p className='comment-view-reply' onClick={() => { setViewReply(!isViewReply) }}>
                                        <div className='line-bar'></div>
                                        {
                                            isViewReply ? 'Hide replies' : `View replies (${item.reply.length})`
                                        }

                                    </p>
                                }
                                {
                                    isViewReply && item.reply.map((e => (
                                        <ViewReplys reply={e}  type={type} />
                                    )))
                                }
                            </>
                        }


                    </div>

                    <p className='sound'>{item.audio}</p>
                </div>
            </div>
            <div className='post-right-corner'>
                {
                    favourites && <div className='post-favourites-icon'>
                        <FontAwesomeIcon icon={faStar} style={{ color: "#f5b356", }} />
                    </div>
                }
                {

                    (type === null || type==="commentProfile") && <div className='more-dots' onClick={() => { morePopup() }}>
                        ...
                    </div>
                }


                {
                    (comment && type!=="commentProfile") &&
                    <div onClick={handelLikes}>
                        <Posticon setLikesClick={setLikesClick} soildIcon={solidHeart} regularIcon={regularHeart} color="red" type={type} />
                    </div>
                }
            </div>
            {isOpen &&
                <div className='comment-report-popup'>
                     <div className="popup-more">
                        <MorePopup username={item.username} handleIsOpen={setIsOpen} favourites={favourites} handlefavourites={setFavourites} />
                     </div>
                </div>
            }

        </div>
    )
}
