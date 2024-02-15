import React,{useState,useEffect} from 'react'
import { instahome } from "../../images/homepage/instahome"
import { ProfileHover } from './ProfileHover';
import { ViewReplys } from './Popups/ViewReplys';

export const CommentProfileDetails = ({item,type,setCommentText,comment,commentUserHover,popupPosition,reply}) => {
    
    const [profileHover, setProfileHover] = useState("Image")

    const [isHoveredUsername, setIsHoveredUsername] = useState(false);

     //more
     const [commentMore, setCommentMore] = useState(null)

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
        setCommentText('@' + userName + ' ')
    }

    //viewreply
    const[isViewReply,setViewReply]=useState(false)
    return (
        <div className='post-profile__text'>
            <div className='comment-list'>
                <p className='profile-username'>
                    <p className='profile-username__text'>
                        <span onMouseEnter={() => {
                            setIsHoveredUsername(true);
                            setProfileHover("Username");
                        }}
                            onMouseLeave={() => { setIsHoveredUsername(false) }}>{item.username}</span>
                        {isHoveredUsername && (
                            <div className='profile-hover-div'>
                                <ProfileHover popupPosition={popupPosition} myClassName="side-view" profileHover={profileHover} type={type} commentUserHover={commentUserHover} />
                            </div>
                        )}
                        <img src={instahome.tick} width="20px" height="20px" />
                        {
                            (type === null) &&
                            <div className='post-profile__time'><div className='dot'></div>{item.postDay} d</div>
                        }

                    </p>

                    {
                        comment && <span className='comment-txt'>
                            {item.comment}
                        </span>
                    }</p>

                {
                    comment &&
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
                            <p className='comment-reply' onClick={() => { handelReplyWithUsername(item.username) }}>
                                Reply
                            </p>
                            {
                                commentMore && <p className='comment-more'>
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
                                <ViewReplys reply={e} setCommentText={setCommentText}/>
                            )))
                        }
                    </>
                }


            </div>
            <p className='sound'>{item.audio}</p>
        </div>
    )
}
