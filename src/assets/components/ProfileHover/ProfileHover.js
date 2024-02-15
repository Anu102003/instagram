import React, { useContext } from 'react'
import { instahome } from '../../../images/homepage/instahome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import CreateContext from '../../../context/CreateContext';
import "./_profileHover.scss"
import { useNavigate } from 'react-router-dom';
export const ProfileHover = ({ popupPosition, myClassName = "", profileHover ,type,commentUserHover}) => {
    const navigate = useNavigate();
    
    const navigateProfilePage=()=>{
        navigate("/profile")
    }
    if (profileHover === "Description") {
    }
    const contextData = useContext(CreateContext)
    let item = contextData;
    if (type === "comment") {
        item = commentUserHover
    } else {
        item = contextData
    }

    return (
        <>
           
            <div className={`profile-hover ${profileHover === 'Description'
                ? popupPosition === 'above' ? 'description-above' : 'description-below'
                : popupPosition === 'above'
                    ? profileHover === 'Username' ? 'username-above' : 'above'
                    : profileHover === 'Username' ? 'username-below' : 'below'
                } ${myClassName}`}>
                <div className='profile-hover__head'>
                    <div className='img' >
                        <img onClick={navigateProfilePage} src={item.profileImg} height={55} width={55} />
                    </div>
                    <div className='text'>
                        <p className='username' onClick={navigateProfilePage}>
                            {item.username}<img src={instahome.tick} width="20px" height="20px" />
                        </p>
                        <p className='name'>{item.name} </p>
                    </div>
                </div>
                <div className='profile-hover__top'>
                    <div className='top-contents'>
                        <p className='posts'>
                            <p className='posts__text'>
                                {item.posts}
                            </p>
                            posts
                        </p>
                    </div>
                    <div className='top-contents'>
                        <p className='posts'>
                            <p className='posts__text'>
                                {item.followers}
                            </p>
                            followers
                        </p>
                    </div>
                    <div className='top-contents'>
                        <p className='posts'>
                            <p className='posts__text'>
                                {item.following}
                            </p>
                            following
                        </p>
                    </div>
                </div>
                <div className='profile-hover__posts'>
                    <div>
                        <img src={item.post1Img} height={120} width={120} />
                    </div>
                    <div>
                        <img src={item.post2Img} height={120} width={120} />
                    </div>
                    <div>
                        <img src={item.post3Img} height={120} width={120} />
                    </div>
                </div>
                <div className='profile-hover__btns'>
                    <button className='msg-btn'>
                        <FontAwesomeIcon icon={faCommentDots} size="lg" style={{ color: "#ffffff" }} /> Messages
                    </button>
                    <button className='following-btn'>
                        following
                    </button>
                </div>
            </div >
        </>
    )
}
