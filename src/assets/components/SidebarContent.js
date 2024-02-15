import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sideBarImages } from '../../images/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const SidebarContent = ({ search, message, setMessage, setSearch, shortSidebar, notification, setNotification, setShortSidebar, setShortSidebarType, setCreate, more, setMore }) => {
  const navigate = useNavigate();

  const [sidebarContent, setSidebarContent] = useState({
    sidebarText: ["Home", "Search", "Explore", "Reels", "Messages", "Notifications", "Create", "Profile", "Threads", "More"],
    sidebarImage: [sideBarImages.home, sideBarImages.search, sideBarImages.explore,
    sideBarImages.reels, sideBarImages.msgs, sideBarImages.heart, sideBarImages.create,
    sideBarImages.profile, sideBarImages.threads, sideBarImages.more]
  });

  const [contentSelected, setContentSelected] = useState("Home");
  const [hover, setHover] = useState(null);
  const hoverHandle = () => {
    setHover((prevHover) => !prevHover);
  }
  const changeSidebarContent = (e) => {

    setContentSelected(e);
    if (e === "Home") {
      navigate("/");
      setShortSidebar(false)
      setSearch(false)
      setNotification(false)
      setMessage(false)
      if (more) {
        setMore(false)
      }
    }
    if (e === "Explore") {
      navigate("/explore");
      setSearch(false);
      setShortSidebar(false)
      setNotification(false)
      setMessage(false)
    }
    if (e === "Profile") {
      navigate("/profile");
      setSearch(false);
      setShortSidebar(false)
      setNotification(false)
      setMessage(false)
    }
    if (e === "Reels") {
      navigate("/reels")
      setSearch(false);
      setShortSidebar(false)
      setNotification(false)
      setMessage(false)
    }

    if (e === "Search") {
      setSearch(!search)
      setNotification(false)
      if(message){
        setShortSidebar(true)
      }else{
        setShortSidebar(!search)
      }
    }
    if (e === "Messages") {
      navigate("/message")
      setShortSidebar(true)
      setMessage(true)
      setSearch(false);
      setNotification(false)
    }
    if (e === "Threads") {
      window.open("https://www.threads.net/login", "_blank")
      setSearch(false);
      setNotification(false)
      setMessage(false)
    }
    if (e === "Create") {
      setCreate(true)
      document.body.style.overflow = "hidden"
    }
    if (e === "More") {
      setMore(true)
      document.body.style.overflow = "hidden"
    }
    if (e === "Notifications") {
      setNotification(!notification)
      setSearch(false);
      if(message){
        setShortSidebar(true)
      }else{
        setShortSidebar(!notification)
      }
    }
  };
  return (
    <>
      {
        sidebarContent.sidebarImage.map((Image, index) => {
          return (
            <div key={index} className={
              shortSidebar ? 'short-sidebar-content' :
                sidebarContent.sidebarText[index] === "Threads" ? 'sidebar-content threads-div' : 'sidebar-content'}
              onClick={() => {
                changeSidebarContent(sidebarContent.sidebarText[index]);
              }}
              onMouseEnter={sidebarContent.sidebarText[index] === "Threads" ? hoverHandle : null}
              onMouseLeave={sidebarContent.sidebarText[index] === "Threads" ? hoverHandle : null}
            >
              <div className={
                (contentSelected === "Search" && contentSelected === sidebarContent.sidebarText[index] && shortSidebar)
                  ? 'content-logo-selected' : shortSidebar ? "short-content-logo" : 'content-logo'}>
                <img src={Image} width="23px" alt={`icon-${index}`}
                  className={shortSidebar ? "short-search-img" : "search-img"}
                />
              </div>
              <div className='sidebar-text-conatiner'>
                {
                  !shortSidebar &&
                  <div className=
                    {contentSelected === sidebarContent.sidebarText[index]
                      ? contentSelected === "Search" ? 'content-text' : 'content-text-selected' : 'content-text'}>
                    {sidebarContent.sidebarText[index]}
                  </div>
                }
                {
                  (sidebarContent.sidebarText[index] === "Threads" && hover) &&
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"sm"} style={{ color: 'gray' }} />
                }
              </div>
            </div>
          )
        }
        )}
    </>
  );
};
