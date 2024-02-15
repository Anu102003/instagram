import React, { useState, useRef } from 'react'
import "./_video.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeXmark, faVolumeHigh, faPlay } from '@fortawesome/free-solid-svg-icons';
export const Video = ({ item, reel }) => {
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
    return (
        <>
            <video
                height={655}
                width={368}
                ref={videoRef}
                onClick={handlePlayPause}
                muted={isMute}
                autoPlay
                loop
            >
                <source src={item.postImg} />
            </video>
            {
                isPause &&
                <div className='video-pause-circle'>
                </div>
            }

            <FontAwesomeIcon
                onClick={handlePlayPause}
                className="playPauseIcon"
                icon={isPause && faPlay}
                size="2xl"
                style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
                onClick={() => { setIsMute(!isMute); console.log("first") }}
                className="volumeIcon"
                icon={isMute ? faVolumeXmark : faVolumeHigh}
                size="lg"
                style={{ color: "rgb(222, 221, 221)" }}
            />
        </>
    )
}
