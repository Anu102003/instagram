import React, { useState } from 'react'
import "./_settings.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'

export const Settings = ({ type }) => {
    const [toggle, setToggle] = useState(false)
    const menu = [
        {
            title: "Like and share counts",
            subHead: "Hide like and share counts",
            subText1: "On Instagram, the number of likes on posts and reels from other accounts will be hidden. You can hide the number of likes on your own posts and reels by going to Advanced settings before sharing.",
            subText2: "On Threads, the number of likes, views, reposts and quotes on posts from other profiles will be hidden. You can hide these on your own posts from the menu for each post. ",
            link: "https://help.instagram.com/113355287252104"
        },
        {
            title: "Account privacy",
            subHead: "Private account",
            subText1: "When your account is public, your profile and posts can be seen by anyone, on or off Instagram, even if they don't have an Instagram account.",
            subText2: "When your account is private, only the followers that you approve can see what you share, including your photos or videos on hashtag and location pages, and your followers and following lists. ",
            link: "https://help.instagram.com/116024195217477"
        }
    ]
    let data;
    if (type === "like-share") {
        data = menu[0]
    } else if (type === "account-privacy") {
        data = menu[1]
    }
    return (
        <div className='setting'>
            {
                type === "archive-download" ?
                    <>
                        <p className='title'>Archiving and downloading</p>
                        <p className='sub-title'>Saving to archive</p>
                        <div className='sub-txt-toggle outline'>
                            <div className='head-txt'>
                            <p className='sub-txt-head'>Save story to archive</p>
                            <p className='subtext'>Automatically save photos and videos to your archive so you don't have to save them to your phone. Only you can see your archive.</p>
                            </div>
                            <FontAwesomeIcon icon={toggle ? faToggleOn : faToggleOff} size='2x' onClick={() => { setToggle(!toggle) }} />
                        </div>
                    </>
                    :
                    <>
                        <p className='title'>{data.title}</p>
                        <div className='sub-txt-toggle'>
                            <p className='sub-txt-head'>{data.subHead}</p>
                            <FontAwesomeIcon icon={toggle ? faToggleOn : faToggleOff} size='2x' onClick={() => { setToggle(!toggle) }} />
                        </div>
                        <p className='subtext'>{data.subText1}</p>
                        <p className='subtext'>{data.subText2}
                            <span className='learn-more'>
                                <a href={data.link} target='_blank'>Learn more</a></span> </p>
                    </>
            }
        </div>
    )
}
