import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSpinner, faPlay, faVolumeXmark, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { UserProfileDetails } from '../../UserProfileDetails/UserProfileDetails';
import { AllPostIcons } from '../../AllPostIcons/AllPostIcons';
import "./_commentPopup.scss";
import InputEmoji from 'react-input-emoji'

export const CommentPopup = ({ item, commentPopupClose, reelsComment }) => {
  const [commentText, setCommentText] = useState("");
  const [enableCommentPost, setEnableCommentPost] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPosted, setIsPosted] = useState(false);

  const [isPause, setIsPause] = useState(false);
  const [isMute, setIsMute] = useState(true);
  const videoRef = useRef(null);
  const handelPost = () => {

    if (enableCommentPost) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setIsPosted(true)
      setCommentText(null)
      setEnableCommentPost(false)
    }
  }

  const [reply, setReply] = useState({
    enable: false,
    username: ""
  }
  )
  console.log(commentText + reply.username)


  useEffect(() => {
    if (reply.enable) {
      const res = commentText.includes(reply.username);
      console.log(!res);
      if (!res) {
        setCommentText(prevCommentText => prevCommentText === "" ? reply.username : `${prevCommentText}  ${reply.username}`);
      }
      setEnableCommentPost(true)
      setReply((prevReply) =>
      ({
        ...prevReply,
        enable: false
      })
      )
    }
  }, [reply])

  function handleOnEnter(text) {
    if (text === "") {
      setEnableCommentPost(false)
    } else {
      setCommentText(text)
      setEnableCommentPost(true)
    }
  }
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

  return (
    <div className='comment-popup' style={{
      height:reelsComment&&"350px",
      width:reelsComment&&"320px",
    }}>
      {
        !reelsComment &&
        <div className='comment-popup__left'>
          {
            item.postType ?
              <img src={item.postImg} width={544} height={684} /> :
              <>
                <video height={684} width={544} ref={videoRef} onClick={handlePlayPause} muted={isMute} autoPlay loop>
                  <source src={item.postImg} alt="your browser does not support" ></source>
                </video>
                <FontAwesomeIcon
                  onClick={handlePlayPause}
                  className="playPauseIcon"
                  icon={isPause && faPlay}
                  size="5x"
                  style={{ color: "#ffffff" }}
                />
                <FontAwesomeIcon
                  onClick={() => { setIsMute(!isMute) }}
                  className="volumeIcon"
                  icon={isMute ? faVolumeXmark : faVolumeHigh}
                  size="lg"
                  style={{ color: "rgb(222, 221, 221)" }}
                />
              </>
          }
        </div>
      }
      <div className='comment-popup__right'>
        <div className='comment-popup-userprofile'>
          <UserProfileDetails type={"commentProfile"} commentUserHover={item} />
        </div>
        <div className='comment-popup-userlist' style={{
          height:reelsComment?"auto":"458px",
          overflow:reelsComment?"none":"hidden"
        }}>
          <div className='comment-list-container'  style={{
          height:reelsComment?"200px":"100%",
          }}>
            {
              item.postComments.map((e => (

                <div className='comment-container'>
                  <UserProfileDetails type={"comment"} commentUserHover={e} setReply={setReply} />
                </div>
              )))
            }
          </div>
        </div>
        {
          !reelsComment &&
          <div className='comment-icons'>
            <AllPostIcons type="commentIcon" />
            <p className='comment-likes'>{item.postLikes} likes</p>
            <p className='comment-date'>
              {item.postDay} day
            </p>
          </div>
        }
        <div className='comment-post-add'>
          <div className='comment-add'>

            {
              loading ?
                <div className='comment-post-loading'>
                  <FontAwesomeIcon icon={faSpinner} spinPulse size="lg" style={{ color: "#ffffff" }} />
                </div>
                :
                <div className='post-add-comment' style={{width: reelsComment&& "20rem"}}>
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
                  <p onClick={handelPost} className={enableCommentPost ? 'comment-post-blue' : 'comment-post'}>Post</p>
                </div>
            }

          </div>
        </div>
        <div>

        </div>

      </div>
      <div className='comment-close-icon'>
        <FontAwesomeIcon onClick={commentPopupClose} className={reelsComment ? "reel-close-icon" : "close-icon"} icon={faXmark} size={reelsComment ? "xs" : "2xl"} style={{ color: "#ffffff", cursor: 'pointer' }} />
      </div>
    </div>

  )
}
