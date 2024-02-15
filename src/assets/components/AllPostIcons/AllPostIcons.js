import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Posticon } from '../Post/PostIcon/Posticon';
import { ShareMsgPopup } from '../Popups/ShareMsgPopup/ShareMsgPopup';
import { CommentPopup } from '../Popups/CommentPopup/CommentPopup';
import { faHeart as solidHeart, faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart, faComment as regularComment, faBookmark as regularBookmark, faPaperPlane as regularPaperPlane } from '@fortawesome/free-regular-svg-icons';
import "./_allPostIcons.scss"

export const AllPostIcons = ({ item, type, statusMorePopup, setIsStatusShared }) => {

    let commentFontSize = null;
    if (type === "commentIcon") {
        commentFontSize = "27px"
    }
    if(type==="post"){
        commentFontSize = "25px"
    }
    if (statusMorePopup) {
        commentFontSize = "23px"
    }
    const [isShared, setIsShared] = useState(false);
    const [isComment, setIsComment] = useState(false);
    const [hover, setHover] = useState({
        msg: false,
        share: false
    });

    const handleMsgHover = () => {
        setHover((prevHover) => ({
            ...prevHover,
            msg: !prevHover.msg,
        }));
    };
    const handleShareHover = () => {
        setHover((prevHover) => ({
            ...prevHover,
            share: !prevHover.share,
        }));
    };

    const shareMsgPopup = () => {
        if (statusMorePopup) {
            setIsStatusShared(true);
            document.body.style.overflow = "hidden";
        } else {
            setIsShared(true);
            document.body.style.overflow = "hidden";
        }
    }
    const shareMsgPopupClose = () => {
        if (statusMorePopup) {
            setIsStatusShared(false);
            document.body.style.overflow = "unset"
        } else {
            setIsShared(false);
            document.body.style.overflow = "unset"
        }
        setIsShared(false);
        document.body.style.overflow = "unset"
    }
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
                event.target.className === "all-icon-popup-parent"
            ) {
                setIsShared(false);
                setIsComment(false);
                document.body.style.overflow = "unset"
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])
    return (
        <div className='post-icon-conatiner'>
            <div className='post-icon' >
                <Posticon commentFontSize={commentFontSize} setLikesClick={null} soildIcon={solidHeart} regularIcon={regularHeart} color="red" />
                {
                    !statusMorePopup &&
                    <FontAwesomeIcon
                        onClick={() => { commentMsgPopup() }}
                        className='post-icon__heart'
                        style={{
                            fontSize: commentFontSize ? commentFontSize : '30px',
                            color: hover.msg ? 'gray' : 'white',
                        }}
                        onMouseOver={handleMsgHover}
                        onMouseOut={handleMsgHover}
                        icon={regularComment} />
                }
                {(isComment && !(type === "commentIcon")) &&
                    <div className='all-icon-popup-parent'>
                        <CommentPopup item={item} commentPopupClose={commentPopupClose} />
                    </div>
                }
                <FontAwesomeIcon
                    onClick={() => { shareMsgPopup() }}
                    className='post-icon__heart'
                    style={{
                        fontSize: commentFontSize ? commentFontSize : '30px',
                        color: hover.share ? 'gray' : 'white',
                    }}
                    onMouseOver={handleShareHover}
                    onMouseOut={handleShareHover}
                    icon={regularPaperPlane}
                />
                {isShared &&
                    <div className='popup-parent'>
                        <ShareMsgPopup shareMsgPopupClose={shareMsgPopupClose} />
                    </div>
                }

            </div>
            {
                !statusMorePopup &&
                <div className=''>
                    <Posticon commentFontSize={commentFontSize} soildIcon={solidBookmark} regularIcon={regularBookmark} color="white" />
                </div>
            }
        </div>
    )
}
