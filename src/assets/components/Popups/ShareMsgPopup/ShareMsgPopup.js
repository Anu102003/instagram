import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { UserDetails } from '../../../../database/db';
import "./_shareMsgPopup.scss"

export const ShareMsgPopup = ({ shareMsgPopupClose, reelsShare, msgNewChat }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [checkBoxSelectValue, setCheckBoxSelectValue] = useState([]);
    const [isOverflowed1, setIsOverflowed1] = useState(false);
const[message,setMessage]=useState('')
    useEffect(() => {
        const container1 = document.getElementById('ScrollContainer1');
        if (container1) {
            setIsOverflowed1(container1.scrollHeight > container1.clientHeight);
        }
    }, []);



    const filteredUsers = UserDetails.filter((user) =>
        `${user.username} ${user.name}`.toLowerCase().includes(
            searchTerm.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '')
        )
    );
    const handleShareAccontsSelect = (selectValue) => {
        setCheckBoxSelectValue((prevValue) => {
            if (!prevValue.includes(selectValue)) {
                return [...prevValue, selectValue];
            } else {
                return prevValue.filter((value) => value !== selectValue);
            }
        });
        setSearchTerm('');
    };
    return (
        <div className={reelsShare ? "reels-share-popup" : "share-msg-popup"} >
            <p className='share-popup__title '>
                <span>
                    {msgNewChat ? 'New message' : 'Share'}
                </span>
                <FontAwesomeIcon onClick={() => { shareMsgPopupClose() }} className="share-close-icon" icon={faXmark} size="xl" style={{ color: "#ffffff", cursor: 'pointer' }} />
            </p>

            <div className='share-wrap'>
                <div id="ScrollContainer1" className={`search-container ${isOverflowed1 ? 'overflowed1' : ''}`}>
                    <label className='search-label'>To:</label>
                    <div className='searchResult-input'>
                        <>{
                            checkBoxSelectValue.map((e) => (
                                <div className='search-result' onClick={() => { handleShareAccontsSelect(e) }}>{e}
                                    <FontAwesomeIcon className='search-result-close' icon={faXmark} size="lg" style={{ color: "rgb(65, 129, 197)", cursor: 'pointer' }} />
                                </div>
                            ))
                        }
                        </>
                        <input className="search-input" onChange={(e)=>{setSearchTerm(e.target.value);}} value={searchTerm}
                            type='text' placeholder='Search...' />
                    </div>

                </div>
                <div className='search-elements'>
                    {
                        !searchTerm.length > 0 ?
                            <div className='account-not-found'>
                                No account found.
                            </div>
                            :
                            <>
                                {
                                    filteredUsers.map((item) => {
                                        return (
                                            <div className='user-account' onClick={() => { handleShareAccontsSelect(item.username) }}>
                                                <div className="useraccount-lists">
                                                    <img className="useraccount-img" src={item.img} height={44} width={44} />
                                                    <div className='useraccount-details'>
                                                        <p className='username'>{item.username}</p>
                                                        <p className='name'>{item.name}</p>
                                                    </div>
                                                </div >
                                                <div className='popup-checkbox-outcircle'>
                                                    {
                                                        checkBoxSelectValue.map((e) => (e === item.username) &&
                                                            (<div className='popup-checkbox-incircle'></div>)
                                                        )}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                    }

                </div>
            </div>
            <div className='share-bottom'>
                {
                    checkBoxSelectValue.length > 0 &&
                    <input className="write-a-msg"
                        type='text' placeholder='Write a message...'onChange={(e)=>{setMessage(e.target.value)}} value={message}/>
                }

                <div onClick={()=>{ message.length>0 && setCheckBoxSelectValue([]);setMessage('')}} className={
                    ` submit-msg ${checkBoxSelectValue.length > 0 ? 'submit-report-select' : 'submit-report'}`} >
                    {
                        checkBoxSelectValue.length > 1 ? "Send Separately" : msgNewChat?"Chat":"Send"
                    }
                </div>
            </div>
        </div>
    )
}
