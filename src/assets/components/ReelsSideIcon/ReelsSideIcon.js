import React, { useEffect, useState } from 'react'
import "./_reelsSideIcon.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart, faBookmark as solidBookmark, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart, faComment as regularComment, faBookmark as regularBookmark, faPaperPlane as regularPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { ShareMsgPopup } from '../Popups/ShareMsgPopup/ShareMsgPopup';
import { useNavigate } from 'react-router-dom';
import { ReelMorePopup } from '../Popups/ReelMorePopup/ReelMorePopup';
import { CommentPopup } from '../Popups/CommentPopup/CommentPopup';
export const ReelsSideIcon = ({ item, setIsOpenMore, setMainPopup, setType }) => {
    const navigate = useNavigate();
    const [hover, setHover] = useState({
        heart: false,
        comment: false,
        share: false,
        tag: false,
        more: false,
    })
    const [click, setClick] = useState({
        heart: false,
        comment: false,
        share: false,
        tag: false,
        more: false,
    })
    const setShareClick = (newState) => {
        setClick((prevClick) => ({
            ...prevClick,
            share: newState,
        }));
    };
    const setCommentClick = (newState) => {
        setClick((prevClick) => ({
            ...prevClick,
            comment: newState,
        }));
    };
    const redirectToAudio = () => {
        navigate("/audio", { state: { audioData: item.audioData } })
    }
    const hoverHandel = (iconName) => {
        if (iconName === "heart") {
            setHover((prevHover) => ({
                ...prevHover, heart: !prevHover.heart
            }))
        } else if (iconName === "comment") {
            setHover((prevHover) => ({
                ...prevHover, comment: !prevHover.comment
            }))
        }
        else if (iconName === "share") {
            setHover((prevHover) => ({
                ...prevHover, share: !prevHover.share
            }))
        }
        else if (iconName === "tag") {
            setHover((prevHover) => ({
                ...prevHover, tag: !prevHover.tag
            }))
        }
        else if (iconName === "more") {
            setHover((prevHover) => ({
                ...prevHover, more: !prevHover.more
            }))
        }
    }

    useEffect(() => {
        function handler(event) {
            const name = event.target.className
            const moreicon = "svg-inline--fa fa-ellipsis share-adjust"
            const shareicon = "svg-inline--fa fa-paper-plane share-adjust"
            const commenticon = "svg-inline--fa fa-comment "

            if (
                event.target.className !== "reel-more-popup" && (name.baseVal !== moreicon && name.baseVal !== '')
            ) {
                setClick((prevClick) => ({ ...prevClick, more: false }))
                document.body.style.overflow = "unset"
            }
            if (name === "reel-more-popup-btn follow" || name === "reel-more-popup-btn unfollow") {
                setClick((prevClick) => ({ ...prevClick, more: true }))
            }
            if (
                event.target.className !== "reel-more-popup" && (name.baseVal !== shareicon && name.baseVal !== '')
            ) {
                setClick((prevClick) => ({ ...prevClick, share: false }))
                document.body.style.overflow = "unset"
            }

            if (
                event.target.className !== "reel-more-popup" && (name.baseVal !== commenticon && name.baseVal !== '')
            ) {
                setClick((prevClick) => ({ ...prevClick, comment: false }))
                document.body.style.overflow = "unset"
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])


    const moreHandel = () => {
        setIsOpenMore(true)
        setMainPopup(false)
        setType(null)
        setClick((prevClick) => ({ ...prevClick, more: !prevClick.more, comment: false, share: false }))
        document.body.style.overflow = "hidden"
    }
    const shareHandel = () => {
        setClick((prevClick) => ({ ...prevClick, share: !prevClick.share, more: false, comment: false }))
    }
    const commentHandel = () => {
        setClick((prevClick) => ({ ...prevClick, comment: !prevClick.comment, more: false, share: false }))
    }
    // useEffect(()=>{
    //     if(click.more){
    //         console.log("%")
    //         document.body.style.overflow = "hidden"
    //     }else{
    //         console.log("&")
    //         document.body.style.overflow = "unset"
    //     }
    // },[click.more])
    return (
        <div className='reels-icon'>
            <div className="icons" onClick={() => { setClick((prevClick) => ({ ...prevClick, heart: !prevClick.heart })) }} >
                {
                    click.heart ?
                        <FontAwesomeIcon icon={solidHeart}
                            style={{ color: "red" }}
                        />
                        :
                        <FontAwesomeIcon icon={regularHeart}
                            onMouseEnter={() => { hoverHandel("heart") }}
                            onMouseLeave={() => { hoverHandel("heart") }}
                            style={{ color: hover.heart ? "gray" : "white" }} />
                }
                <p className='icon-bottom-txt'>{item.postLikes}</p>
            </div>
            <div className="icons" onClick={commentHandel} >
                <FontAwesomeIcon icon={regularComment}
                    onMouseEnter={() => { hoverHandel("comment") }}
                    onMouseLeave={() => { hoverHandel("comment") }}
                    style={{ color: hover.comment ? "gray" : "white" }} />
                <p className='icon-bottom-txt'>{item.comments}</p>
            </div>
            <div className="share" onClick={shareHandel} >
                <FontAwesomeIcon icon={regularPaperPlane}
                    className='share-adjust'
                    onMouseEnter={() => { hoverHandel("share") }}
                    onMouseLeave={() => { hoverHandel("share") }}
                    style={{ color: hover.share ? "gray" : "white" }} />
            </div>
            <div className="tag" onClick={() => { setClick((prevClick) => ({ ...prevClick, tag: !prevClick.tag })) }} >
                {
                    click.tag ?
                        <FontAwesomeIcon className='tag-adjust'
                            icon={solidBookmark}
                            style={{ color:"white" }} />
                        :
                        <FontAwesomeIcon className='tag-adjust'
                            icon={regularBookmark}
                            onMouseEnter={() => { hoverHandel("tag") }}
                            onMouseLeave={() => { hoverHandel("tag") }}
                            style={{ color: hover.tag ? "gray" : "white" }} />
                }

            </div>
            <div className="share" onClick={moreHandel} >
                <FontAwesomeIcon className='share-adjust'
                    icon={faEllipsis}
                    onMouseEnter={() => { hoverHandel("more") }}
                    onMouseLeave={() => { hoverHandel("more") }}
                    style={{ color: hover.more ? "gray" : "white" }} />
            </div>
            {(click.more) &&
                <div className='reel-more-popup'>
                    <ReelMorePopup setMainPopup={setMainPopup} setType={setType} />
                </div>
            }
            {(click.share) &&
                <div className='share-more-popup'>
                    <ShareMsgPopup shareMsgPopupClose={setShareClick} reelsShare={true} />
                </div>
            }
            {(click.comment) &&
                <div className='comment-more-popup'>
                    <CommentPopup item={item} commentPopupClose={setCommentClick} reelsComment={true} />
                </div>
            }
            <div className="icons" onClick={redirectToAudio} >
                <img className="audio-img" src={item.profileImg}
                    onMouseEnter={() => { hoverHandel("audio-img") }}
                    onMouseLeave={() => { hoverHandel("audio-img") }}
                    height={24} width={24} />
            </div>
        </div>
    )
}
