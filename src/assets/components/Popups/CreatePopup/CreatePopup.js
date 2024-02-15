import React, { useState } from 'react'
import "./_createPopup.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faCircleExclamation, faPhotoFilm, faXmark } from '@fortawesome/free-solid-svg-icons'
import InputEmoji from 'react-input-emoji'

export const CreatePopup = ({ setCreate, setDiscard, setFile, file }) => {

    const [url, setUrl] = useState('');
    const [error, setError] = useState(false)
    const [next, setNext] = useState(false);
    const [share, setShare] = useState(false);
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            if (selectedFile.type.includes('image')
                //  && selectedFile.size < 1024 * 1024
            ) {
                setFile((prevFile) => ({ ...prevFile, name: selectedFile, type: true }));
                setError(false)
                display(selectedFile)
                console.log("img")
            } else if (selectedFile.type.includes('video')) {
                setFile((prevFile) => ({ ...prevFile, name: selectedFile, type: false }));
                setError(false)
                display(selectedFile)
                console.log("vid")
            }
            else {
                setError(true)
                event.target.value = '';
            }
        }
    };
    const display = (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            setUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };
    const handleClick = () => {
        document.getElementById('fileInput').click();
    };
    const [postText, setPostText] = useState("");
    const [enableSharePost, setEnableSharePost] = useState(false);
    function handleOnEnter(text) {
        if (text === "") {
            setEnableSharePost(false)
        } else {
            setPostText(text)
            setEnableSharePost(true)
        }
    }
    const handelLeftArrow = () => {
        if (!next) {
            setDiscard(true)
        } else {
            setDiscard(false)
            setNext(false)
        }
    }
    return (
        <div className='Create-popup'>
            {
                share ?
                    <>
                        <p className='title'>
                            Post shared
                        </p>
                        <div className='select-items'>
                            <FontAwesomeIcon className='icon' icon={faCircleCheck} style={{ color: "#ff80a6", }} size="10x" />
                            <p className='txt share-txt'>Your post has been shared.</p>
                        </div>
                    </>:
                    <>
                    {
                        (file.name === null || error) ?
                            <>
                                <p className='title'>
                                    Create new post
                                </p>
                                <div className='select-items'>
                                    <FontAwesomeIcon icon={error ? faCircleExclamation : faPhotoFilm} size='5x' className='icon' />
                                    <p className='txt'>{error ?
                                        "This file is not supported"
                                        : "Drag photos and videos here"}</p>
                                    <div className='select-btn'>
                                        <input
                                            type="file"
                                            id="fileInput"
                                            style={{ display: 'none' }}
                                            onChange={handleFileChange}
                                        />
                                        <button className='follow-btn' onClick={handleClick}>
                                            {error ? "Select other Files" : "Select from computer"}
                                        </button>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className='head-container'>
                                    <FontAwesomeIcon icon={faArrowLeft} size="xl" className='create-left-icon'
                                        onClick={handelLeftArrow} />
                                    <p className='title'>
                                        Create new post
                                    </p>
                                    {
                                        !next &&
                                        <p className='next-text' onClick={() => { setNext(true) }}>
                                            Next
                                        </p>
                                    }
                                    {
                                        next &&
                                        <p className='next-text' onClick={() => { setShare(true) }}>
                                            Share</p>
                                    }
                                </div>
                                {url &&
                                    <>
                                        <div className='post-and-txt'>
                                            <div className="vid-or-img">
    
                                                {
                                                    file.type ?
                                                        <img height={509} width={509} src={url} alt="Selected File" />
                                                        :
                                                        <video height={509} width={509} >
                                                            <source src={url} controls autoPlay loop />
                                                        </video>
                                                }
                                            </div>
                                            {
                                                next &&
                                                <div className='txt-details'>
                                                    <div className='profile-details'>
                                                        <img src="https://cdn-icons-png.flaticon.com/512/706/706830.png" height={28} width={28} />
                                                        <p className='username'>User_name</p>
                                                    </div>
                                                    <InputEmoji
                                                        value={postText || ""}
                                                        onChange={handleOnEnter}
                                                        cleanOnEnter
                                                        type="text"
                                                        placeholder='Add a comment...'
                                                        borderRadius={6}
                                                        borderColor='black'
                                                        fontSize={13}
                                                    />
                                                </div>
                                            }
                                        </div>
                                    </>
                                }
                            </>
                    }
                    </>
                }
            <div className='close-icon' onClick={() => { setCreate(false) }}>
                <FontAwesomeIcon icon={faXmark} size='xl' />
            </div>

        </div>
    )
}
