import React, { useState } from 'react'
import "./_blockPage.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { instahome } from '../../../../images/homepage/instahome';
export const BlockPage = () => {
    const UserDetails = [
        {
            img: "https://i.dailymail.co.uk/i/pix/2016/05/23/22/348B850600000578-3605456-image-m-32_1464040491071.jpg",
            name: "Ankit",
            username: "vANKIT_",
            subtext: "Popular",
            time: "2h",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        },
        {
            img: "https://image.khaleejtimes.com/?uuid=0483b3a8-dba0-5ec6-804d-509895a788af&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.81596&x=0&y=0&width=1500&height=844",
            name: "virat",
            username: "airatKOLI",
            subtext: "Popular",
            time: "10h",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        },
        {
            img: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
            name: "msdohni",
            username: "Ms_dohni",
            subtext: "Popular",
            time: "2h",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        },
        {
            img: "https://images.indianexpress.com/2023/08/Rohit-Sharma-2-1.jpg?w=640",
            name: "rohit",
            username: "RohitSHARMA",
            subtext: "Popular",
            time: "2h",
            video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        },
    ]

    return (
        <div className='block-page'>
            <p className='title'>Blocked accounts</p>
            <p className='sub-txt'>You can block people anytime from their profiles.</p>
            {
                UserDetails.map((userdata) => (
                    <div className='suggest-list'>
                        <div className='suggest-img'>
                            <img src={userdata.img} />
                        </div>
                        <div className='suggest-text'>
                            <p className='suggest-username'>{userdata.username}
                                <img src={instahome.tick} width="20px" height="20px" />
                            </p>
                            <p className='suggest-name'>{userdata.name}</p>
                        </div>
                        <div className='suggest-btn'>
                            <button className='following-btn'>
                                Unblock
                            </button>
                        </div>
                    </div>

                ))
            }

        </div>
    )
}
