
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "../StatusItem/_statusItem.scss"
import { faPlay, faPause, faVolumeHigh, faVolumeXmark, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { AllPostIcons } from '../AllPostIcons/AllPostIcons';

const Slide = ({ last, slide, current, handleSlideClick, handlePreviousClick, handleNextClick, isOpen, setIsOpen, setIsStatusShared }) => {
  const [isPause, setIsPause] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [statusReply, setStatusReply] = useState("");
  const [progressValue, setProgressValue] = useState(0);

  const handleProgressChange = () => {
    const video = videoRef.current;
    const progress = progressRef.current;
    const value = (video.currentTime / video.duration) * 100;
    setProgressValue(value);
    progress.value = value;
    if (value === 100) {
      handleNextClick();
    }
  };


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

  const handleSlideClickInternal = () => {
    handleSlideClick(slide.index);
  };

  const classNames = 'slide' +
    (current === slide.index ? ' slide--current' :
      current - 1 === slide.index ? ' slide--previous' :
        current + 1 === slide.index ? ' slide--next' :
          current - 2 === slide.index ? ' slide--previous' :
            current + 2 === slide.index ? ' slide--next' :
              current - 3 === slide.index ? ' slide--previous' :
                current + 3 === slide.index ? ' slide--next' :
                  current - 4 === slide.index ? ' slide--previous' :
                    current + 4 === slide.index ? ' slide--next' :
                      '');

  const handelStatusReply = (e) => {
    const value = e.target.value;
    setStatusReply(value)
  }

  const handleSend = () => {
    setStatusReply("")
  }

  const previousClick = () => {
    handlePreviousClick()
  }
  const nextClick = () => {
    handleNextClick()
  }


  const morePopup = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden"
  }
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const progress = progressRef.current;
      const playVideo = () => {
        setIsPause(false)
        video.play().catch(error => {
          console.error('Autoplay', error);
        });
      };
      const handleCanPlay = () => {
        playVideo();
        video.removeEventListener('canplay', handleCanPlay);
      };
      const handleTimeUpdate = () => {
        const progressValue = (video.currentTime / video.duration) * 100;
        progress.value = progressValue;
      };
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [videoRef.current]);
  return (
    <li
      className={classNames}
      onClick={handleSlideClickInternal} >
      <div className="slide-image-wrapper">
        {
          (current !== 0 && current === slide.index) &&
          <div className='status-left-icon' onClick={previousClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        }
        <div className="status-display">
          {
            current === slide.index &&
            <>
              {/* progress bar */}
              <div className='status-progress'>
                <progress ref={progressRef} value={0} max={100} className="custom-progress-bar"></progress>
              </div>

              {/* status details */}
              <div className='status-details'>



                <div className='status-userdetails'>
                  <img className='status-profile-img' src={slide.img} />
                  <p className='status-username'>{slide.username}</p>
                  <p className='status-time'>{slide.time}</p>
                </div>

                <div className='status-icons'>
                  <FontAwesomeIcon
                    onClick={handlePlayPause}
                    className="playPauseIcon"
                    icon={!isPause ? faPause : faPlay}
                    size="lg"
                    style={{ color: "#ffffff" }}
                  />
                  <FontAwesomeIcon
                    onClick={() => { setIsMute(!isMute) }}
                    className="volumeIcon"
                    icon={isMute ? faVolumeXmark : faVolumeHigh}
                    size="lg"
                    style={{ color: "#ffffff" }}
                  />
                  <FontAwesomeIcon onClick={morePopup} icon={faEllipsis} size="xl" style={{ color: "#ffffff" }} />


                </div>

              </div>

              {/* status share msg */}
              <div className='status-msg-share-like'>
                <input onChange={handelStatusReply} value={statusReply} className='status-msg' type='text' placeholder={"Reply to " + slide.username + "..."} />
                {
                  statusReply.length !== 0 ?
                    <p className='status-msg-send' onClick={handleSend}>Send</p>
                    :
                    <div className='status-share-like'>
                      <AllPostIcons statusMorePopup={true}
                        setIsStatusShared={setIsStatusShared} />
                    </div>
                }
              </div>


              <video
                onClick={handlePlayPause}
                ref={videoRef}
                className='status-video'
                muted={isMute}
                onTimeUpdate={handleProgressChange}
                autoPlay
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </>
          }

          {current !== slide.index &&
            <>
              <img src={slide.src} alt="Slide" className="status-outer" />
              <div className="status-profile">
                <img src={slide.img} alt="Slide" height={56} width={56} />
                <p className='username'>{slide.username}</p>
                <p className='time'>{slide.time}</p>
              </div>
            </>
          }
        </div>
        {
          (current !== last && current === slide.index) &&
          <div className='status-right-icon' onClick={nextClick}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        }
      </div>
    </li >
  );

}
export default Slide;





