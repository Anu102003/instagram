import React, { useState, useEffect } from 'react'
import { Posticon } from '../../Post/PostIcon/Posticon'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import "./_viewreply.scss"

export const ViewReplys = ({ reply, setCommentText, type }) => {
    //likeCount
    const [likesClick, setLikesClick] = useState()
    const [likesCount, setLikesCount] = useState(reply.likes)
    const handelLikes = () => {
        if (likesClick) {
            setLikesCount(prevLikesCount => prevLikesCount - 1);
        } else {
            setLikesCount(prevLikesCount => prevLikesCount + 1);
        }
    };

    //replyUsername Setting
    const handelReplyWithUsername = (userName) => {
        setCommentText('@' + userName + ' ')
    }
    //more
    const [commentMore, setCommentMore] = useState(null)
    //date
    const [formattedDate, setFormattedDate] = useState('');
    useEffect(() => {
        const currentDate = new Date();
        const inputDate = new Date(reply.date);

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
    }, [reply.date]);
    return (
        <div className='view-comment-container'>
            <div className='comment-list'>
                <div className='view-comment'>

                <div className='post-profile__img'>
                    <img src={reply.profileImg} height={30} width={30} />
                </div>
                <p className='profile-username'>
                    <p className='profile-username__text'>
                        <span>{reply.username}</span>
                    </p>
                    <span className='comment-txt'>
                        {reply.comment}
                    </span>
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
                    <p className='comment-reply' onClick={() => { handelReplyWithUsername(reply.username) }}>
                        Reply
                    </p>
                    {
                        commentMore && <p className='comment-more'>
                            ...
                        </p>
                    }
                </p>
                </p>
                </div>
            </div>
                <div className="view-comment-likes" onClick={handelLikes}>
                    <Posticon setLikesClick={setLikesClick} soildIcon={solidHeart} regularIcon={regularHeart} color="red" type={type} />
                </div>
        </div>
    )
}
