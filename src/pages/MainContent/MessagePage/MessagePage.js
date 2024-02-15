import React, { useContext, useEffect, useState } from 'react'
import "./_messagePage.scss"
import { MessageContext } from '../../../context/CreateContext';
import { sideBarImages } from '../../../images/sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCircleInfo, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faFileImage, faHeart } from '@fortawesome/free-regular-svg-icons';

import InputEmoji from 'react-input-emoji'

export const MessagePage = () => {
  const { selectedMsgAccount, setIsRendered ,setNewChat} = useContext(MessageContext);
  useEffect(() => {
    setIsRendered(true);
    return () => {
      setIsRendered(false);
    };
  }, []);
  const [msgText, setMsgText] = useState("");
  const [enableMsgSend, setEnableMsgSend] = useState(false);
  const clearMsgSend=()=>{
    setMsgText("")
  }
  function handleOnEnter(text) {
    if (text === "") {
      setEnableMsgSend(false)
    } else {
      setMsgText(text)
      setEnableMsgSend(true)
    }
  } return (
    <div className={
      selectedMsgAccount === null ? 'initial-message-container' : 'message-container'}
    >
      <div>
      </div>

      {
        selectedMsgAccount === null ?
          <div className='initial-render'>
            <div className='contents'>
              <div className='msg-img'>
                <div className='msg-img-border'>
                  <img src={sideBarImages.msgs} height={50} width={50} />
                </div>
              </div>
              <p className='your-msg'>Your messages</p>
              <p className='sub-txt'>Send private photos and messages to a friend or group.</p>
              <div className='send-msg'>
                <button className='follow-btn' onClick={()=>{setNewChat(true)}}>Send message</button>
              </div>
            </div>
          </div>
          :
          <>
            <div className='message-head-container'>

              <div className='msg-head'>
                <img src={selectedMsgAccount?.profileImg} height={44} width={44} />
                <p className='username'>{selectedMsgAccount.username}</p>
              </div>
              <div className='msg-icons'>
                <FontAwesomeIcon icon={faPhone} size='lg' />
                <FontAwesomeIcon icon={faVideo} size='xl' />
                <FontAwesomeIcon icon={faCircleInfo} size='lg' />
              </div>

            </div>
            <div className='message-scroll'>
              <div className='message-profile'>
                <img src={selectedMsgAccount.profileImg} height={96} width={96} />
                <p className='name'>{selectedMsgAccount.name}</p>
                <p className='username'>{selectedMsgAccount.username} <span className='dot'>.</span>
                  <span className='instagram-txt'>Instagram</span></p>
                <button className='following-btn'>View Profile</button>
              </div>
              <div className='message-list'>
                {
                  selectedMsgAccount.messages.map((msg, index) => (
                    <div key={index}>
                      {
                        msg.ownaccount ?
                          <div className='other-msg'>
                            <p className='txt'>{msg.text}</p>
                          </div> :
                          <div className='your-msg'>
                            <img src={selectedMsgAccount.profileImg} height={28} width={28} />
                            <p className='txt'>{msg.text}</p>
                          </div>
                      }
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='add-input-box'>
              <InputEmoji
                value={msgText || ""}
                onChange={handleOnEnter}
                cleanOnEnter
                type="text"
                placeholder='Message...'
                borderRadius={6}
                borderColor='black'
                fontSize={13}
              />
              {
                enableMsgSend ?
                  <p className='send-txt' onClick={clearMsgSend}>Send</p>
                  :
                  <div className='send-icons'>
                    <FontAwesomeIcon className='icons' icon={faMicrophone} size='xl' />
                    <FontAwesomeIcon className='icons' icon={faFileImage} size='xl' />
                    <FontAwesomeIcon className='icons' icon={faHeart} size='xl' />
                  </div>
              }
            </div>
          </>

      }

      <div>
      </div>
    </div>
  )
}
