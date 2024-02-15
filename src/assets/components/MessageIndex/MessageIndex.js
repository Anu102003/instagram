import React, { useState } from 'react'
import "./_messageIndex.scss"
import { faChevronDown, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MsgDetails } from '../../../database/db'
export const MessageIndex = ({selectedMsgAccount,setSelectedMsgAccount,setSwitchPopup,setNewChat}) => {
    const handelSelectedMsgAccount = (account) => {
        setSelectedMsgAccount(account)
    }
    return (
        <div className='message-index'>
            <div className='current-user' >
                <p className='username' onClick={()=>{setSwitchPopup(true)}}>User-name <span><FontAwesomeIcon icon={faChevronDown} size='2xs' /></span></p>
                <FontAwesomeIcon icon={faPenToSquare} size='lg' style={{ cursor: "pointer" }} onClick={()=>{setNewChat(true)}}/>
            </div>
           
            <div className='msg-head-container'>
                <p className='msg-heading'>
                    Messages
                </p>
                <p className='request-heading'>
                    Requests
                </p>
            </div>
            <div className='msg-list'>
                {
                    MsgDetails.map((msg, index) => {
                        return (
                            <div key={index} 
                            className={selectedMsgAccount?.username === msg.username ?'selected-msg-item':'msg-item'}
                             onClick={()=>{handelSelectedMsgAccount(msg)}}>
                                <img src={msg.profileImg} height={56} width={56} />
                                <div>
                                    <p className='username'>{msg.name}</p>
                                    {
                                        msg.messages.map((text, index) => (
                                            <div key={index} className='last-msg'>
                                                {
                                                    index === msg.messages.length - 1 &&
                                                    <>
                                                        {
                                                            text.ownaccount && <p>You: </p>
                                                        }
                                                        <p>{text.text}</p>
                                                    </>
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
