import React, { useState, useEffect } from 'react'
import SideBar from '../SideBar/SideBar'
import "./homepage.scss"
import { Outlet } from 'react-router-dom'
import { ShortSearch } from '../../assets/components/ShortSearch/ShortSearch'
import { MessageIndex } from '../../assets/components/MessageIndex/MessageIndex'
import { MessageContext } from '../../context/CreateContext'
import { SwitchPopup } from "../../assets/components/Popups/SwitchPopup/SwitchPopup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { ShareMsgPopup } from '../../assets/components/Popups/ShareMsgPopup/ShareMsgPopup'
import { CreatePopup } from '../../assets/components/Popups/CreatePopup/CreatePopup'
import { MoreOptionsPopup } from '../../assets/components/Popups/MoreOptionsPopup/MoreOptionsPopup'
import { Notifcation } from '../../assets/components/Notification/Notifcation'

const HomePage = () => {
  const [shortSidebar, setShortSidebar] = useState(false);
  const [shortSidebarType, setShortSidebarType] = useState(null)
  const [notification, setNotification] = useState(false)
  const [search, setSearch] = useState(false)
  const [message, setMessage] = useState(false)

  const [selectedMsgAccount, setSelectedMsgAccount] = useState(null)
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    if (isRendered) {
      setShortSidebar(true)
      setMessage(true)
    }
  }, [isRendered])

  const [switchPopup, setSwitchPopup] = useState(false);
  const [newChat, setNewChat] = useState(false)
  const [create, setCreate] = useState(false)
  const [discard, setDiscard] = useState(false);
  const [file, setFile] = useState({
    name: null,
    img: false,
  });
  const [more, setMore] = useState(false);
  useEffect(() => {
    function handler(event) {
      if (
        event.target.className === "popup-switch-parent"
      ) {
        setSwitchPopup(false);
        document.body.style.overflow = "unset"
      }
      if (
        event.target.className === "search-popup"
      ) {
        if (message) {
          setSearch(false);
          setShortSidebar(true)
        } else {
          setSearch(false);
          setShortSidebar(false)
        }
      }
      if (
        event.target.className === "notifications-popup"
      ) {
        if (message) {
          setNotification(false);
          setShortSidebar(true)
        } else {

          setNotification(false);
          setShortSidebar(false)
        }

        document.body.style.overflow = "unset"
      }
      if (
        event.target.className === "popup-new-chat-parent"
      ) {
        setNewChat(false);
        document.body.style.overflow = "unset"
      }
      if (
        event.target.className === "popup-create-parent"
      ) {
        setCreate(false);
        setFile((prevFile) => ({ ...prevFile, name: null, img: false }))
        document.body.style.overflow = "unset"
      }
      if (event.target.className === "popup-discard-parent") {
        setDiscard(false);
      }
      if (event.target.className === "more-option-parent") {
        setMore(false)
        document.body.style.overflow = "unset"
      }
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [message])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);



  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowWidth);
    window.addEventListener('DOMContentLoaded', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
      window.removeEventListener('DOMContentLoaded', updateWindowWidth);
    };
  }, []); 
   
  useEffect(()=>{
    if(windowWidth<1400){
      setShortSidebar(true)
      console.log("first")
    }
    if(windowWidth>1240){
      if(message){
        setShortSidebar(true)
      }
      else{
        setShortSidebar(false)
      }
    }
  },[windowWidth])
  return (
    <>
      <div className="container">
        <div className={
          shortSidebar ? "short-sidebar" : "sidebar"}>
          <SideBar search={search} setSearch={setSearch} message={message} setMessage={setMessage} shortSidebar={shortSidebar} notification={notification} setNotification={setNotification} setShortSidebar={setShortSidebar} setShortSidebarType={setShortSidebarType} setCreate={setCreate} setMore={setMore} more={more} />
        </div>

        {search &&
          <div className='search-popup'>
            <ShortSearch setShortSidebar={setShortSidebar} />
          </div>
        }
        {notification &&
          <div className='notifications-popup'>
            <Notifcation setNotification={setNotification} setShortSidebar={setShortSidebar} />
          </div>
        }
        {(isRendered && message) &&
          <div className='msg-popup'>
            <MessageIndex selectedMsgAccount={selectedMsgAccount} setSelectedMsgAccount={setSelectedMsgAccount} setSwitchPopup={setSwitchPopup} setNewChat={setNewChat} />
          </div>
        }
        <div className="main-content">
          <MessageContext.Provider value={{ selectedMsgAccount, setIsRendered, setNewChat }}>
            <Outlet />
          </MessageContext.Provider>
        </div>



        {switchPopup
          && <div className='popup-switch-parent'>
            <div className="popup-switch">
              <div className="close-container"><FontAwesomeIcon className='close-icon' icon={faXmark} onClick={() => { setSwitchPopup(false); document.body.style.overflow = "unset" }} /></div>
              <SwitchPopup />
            </div>
          </div>}


        {
          newChat &&
          <div className='popup-new-chat-parent'>
            <div className="popup-new-chat">
              <ShareMsgPopup shareMsgPopupClose={setNewChat} msgNewChat={true} />
            </div>
          </div>
        }
        {
          create &&
          <div className='popup-create-parent'>
            <div className="popup-create">
              <CreatePopup setCreate={setCreate} setDiscard={setDiscard} setFile={setFile} file={file} />
            </div>
          </div>
        }
        {
          discard &&
          <div className='popup-discard-parent'>
            <div className="popup-discard">
              <p className='discard-title'>Discard post?</p>
              <p className='discard-txt'>If you leave, your edits won't be saved.</p>
              <p className='discard-discard-txt' onClick={() => {
                setDiscard(false);
                setFile((prevFile) => ({ ...prevFile, name: null }))
              }}
              >Discard</p>

              <p className='discard-cancel' onClick={() => { setDiscard(false) }}>Cancel</p>
            </div>
          </div>
        }

        {
          more &&
          <div className='more-option-parent'>
            <div className="popup-more-option">
              <MoreOptionsPopup setSearch={setSearch} setNotification={setNotification} setShortSidebar={setShortSidebar} setMore={setMore} setSwitchPopup={setSwitchPopup} />
            </div>
          </div>
        }
      </div>

    </>
  )
}

export default HomePage















