import React, { useRef, useState } from 'react'
import "./_audioPage.scss"
import { useLocation } from 'react-router-dom'
import { PostGrid } from '../../../assets/components/ProfilePage/PostGrid/PostGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
export const AudioPage = () => {
    const [save, setSave] = useState(false);
    const get = useLocation();
    const item = get.state.audioData;
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef();
    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };
    const handleSeek = (e) => {
        const seekTime = e.target.value;
        audioRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(1, '0')}:${String(seconds).padStart(2, '0')}`;
    };
    return (
        <>

            <div className='audio-container'>
                <div>

                </div>
                <div className='audio-wrapper'>
                    <h2 className='audio-heading'>Audio</h2>
                    <div className='audio-profile'>
                        <div className='audio-profile-img'>
                            <img src={item.audioImg} height={150} width={150} />
                        </div>
                        <div className='audio-profile-details'>
                            <p className='audio-title'>{item.title}</p>
                            <p className='audio-reels-count'>{item.reels.length} reels</p>
                            <button className='audio-save-btn' onClick={() => { setSave(!save) }}>
                                {
                                    !save ?
                                        "Save Audio" :
                                        "Saved"
                                } </button><br></br>
                            <div className='audio-player'>
                                <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={() => setIsPlaying(false)}>
                                    <source src={item.audio}
                                        type="audio/mp3" />
                                </audio>
                                <div onClick={togglePlayPause}>
                                    {!isPlaying ?
                                        <FontAwesomeIcon icon={faPlay} />
                                        :
                                        <FontAwesomeIcon icon={faPause} />
                                    }
                                </div>
                                <input
                                    type="range"
                                    value={currentTime}
                                    max={audioRef.current ? audioRef.current.duration : 0}
                                    onChange={handleSeek}
                                    className='audio-input-range'
                                />
                                <div>{formatTime(currentTime)}</div>
                            </div>


                        </div>
                    </div>
                    <div className='audio-reels'>
                        <PostGrid post={item.reels} reels={true} />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}
