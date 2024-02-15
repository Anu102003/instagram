import React, { useEffect, useState, useRef } from 'react'
import "./_statusItem.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeHigh, faVolumeXmark, faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { MorePopup } from '../../../assets/components/Popups/MorePopup/MorePopup';
import { AllPostIcons } from '../../../assets/components/AllPostIcons/AllPostIcons';
export const StatusItem = ({ statusData}) => {
    const [isPause, setIsPause] = useState(false);
    const [isMute, setIsMute] = useState(false);
    const videoRef = useRef(null);
    const progressRef = useRef(null);
    const [statusReply, setStatusReply] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [progressValue, setProgressValue] = useState(0);

    const handelStatusReply = (e) => {
        const value = e.target.value;
        setStatusReply(value)
    }

    const handleSend = () => {
        setStatusReply("")
    }
 

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPause(false)
        } else {
            video.pause();
            setIsPause(true)
        }
    };
    const morePopup = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden"
    }
    const handleProgressChange = () => {
        const video = videoRef.current;
        const progress = progressRef.current;
        const value = (video.currentTime / video.duration) * 100;
        setProgressValue(value);
        progress.value = value;
    };

    useEffect(() => {
        const video = videoRef.current;
        const progress = progressRef.current;
        const playVideo = () => {
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
    }, []);
    useEffect(() => {
        function handler(event) {
            if (
                event.target.className === "popup-parent"
            ) {
                setIsOpen(false);
                document.body.style.overflow = "unset"
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])
    return (
        <div className="status-display">
            <div className='status-progress'>
                <progress ref={progressRef} value={0} max={100} className="custom-progress-bar"></progress>
            </div>
            <div className='status-details'>

                <div className='status-userdetails'>

                    <img className='status-profile-img' src={statusData.img} />
                    <p className='status-username'>{statusData.username}</p>
                    <p className='status-time'>{statusData.time}</p>
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
                    {isOpen &&
                        <div className='popup-parent'>
                            <div className="popup-more">
                                <MorePopup statusMorePopup={true} handleIsOpen={setIsOpen} />
                            </div>
                        </div>
                    }

                </div>
            </div>

            <div className='status-msg-share-like'>
                <input onChange={handelStatusReply} value={statusReply} className='status-msg' type='text' placeholder={"Reply to " + statusData.username + "..."} />
                {
                    statusReply.length !== 0 ?
                        <p className='status-msg-send' onClick={handleSend}>Send</p>
                        :
                        <div className='status-share-like'>
                            <AllPostIcons statusMorePopup={true} />
                        </div>
                }
            </div>
            <video
                onClick={handlePlayPause}
                onTimeUpdate={handleProgressChange}
                ref={videoRef}
                className='status-video'
                muted={isMute}
            >
                <source src={statusData.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
