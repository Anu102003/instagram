import React, { useState } from 'react'
import "./_hideStoryLive.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight, faCircleCheck, faSearch } from '@fortawesome/free-solid-svg-icons'
export const HideStoryLive = () => {
    const [select, setSelect] = useState(false)
    const closeFrnds = [
        {
            img: "https://image.khaleejtimes.com/?uuid=0483b3a8-dba0-5ec6-804d-509895a788af&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.81596&x=0&y=0&width=1500&height=844",
            name: "virat",
            username: "airatKOLI",
        },
        {
            img: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
            name: "msdohni",
            username: "Ms_dohni",
        },
        {
            img: "https://images.indianexpress.com/2023/08/Rohit-Sharma-2-1.jpg?w=640",
            name: "rohit",
            username: "RohitSHARMA",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Hardik_Pandya_%28cropped_2%29.jpg",
            name: "hardik",
            username: "HARDIK panDya",
        },
    ]
    const [searchTerm, setSearchTerm] = useState('');
    const searchQuery = (e) => {
        setSearchTerm(e.target.value);
    }
    const filteredUsers = closeFrnds.filter((user) =>
        `${user.username} ${user.name}`.toLowerCase().includes(
            searchTerm.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '')
        )
    );
    const [radioSelect, setRadioSelect] = useState(false)
    return (
        <div className='hideStoryLive'>
            {
                !select ?
                    <>
                        <p className='title'>Hide story and live</p>
                        <div className='select-hideStoryLive'>
                            <div className='options' onClick={() => { setSelect(true) }}>
                                <p>hide story and live from</p>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                    </> :
                    <>
                        <p className='title'>Hide story from</p>
                        <p className='sub-txt'>Hide all photos and videos you add to your story from specific people. This also hides your live videos.</p>
                        <div className="search-input">
                            <input className="input-field" onChange={searchQuery} value={searchTerm}
                                type='text' placeholder='Search...' />
                            <FontAwesomeIcon className="search-icon" icon={faSearch} style={{ color: "gray" }} />
                        </div>
                        {
                            filteredUsers.map((item) => (
                                <div className='profile-details' onClick={() => { setRadioSelect(!radioSelect) }}>
                                    <div className='img-name'>
                                        <img src={item.img} height={42} width={42} />
                                        <div className='username-name'>
                                            <p className='username'>{item.username}</p>
                                            <p className='description'>
                                                {item.name}
                                            </p>
                                        </div>
                                    </div>
                                    <FontAwesomeIcon size="lg" icon={radioSelect ? faCircleCheck : faCircle} style={{ color: radioSelect ? "#0095F6" : "gray" }} />
                                </div>

                            ))
                        }
                    </>
            }
        </div>
    )
}
