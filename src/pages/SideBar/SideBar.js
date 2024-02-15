import React, { useState } from 'react'
import "./sidebar.scss"
import { sideBarImages } from '../../images/sidebar'
import { SidebarContent } from '../../assets/components/SidebarContent'
import { useNavigate } from 'react-router-dom'

const SideBar = ({search,setSearch,message,setMessage,shortSidebar,notification,setNotification,setShortSidebar,setShortSidebarType,setCreate,more,setMore}) => {
  const navigate = useNavigate();
  const handleInstaLogo = () => {
    navigate("/")
    setShortSidebar(false)
    setSearch(false)
  }
  return (
    <>
      {
        !shortSidebar ?
          <div className='sidebar-logo' onClick={handleInstaLogo}>
            <img src={sideBarImages.sidebarlogo} width="103px" />
          </div> :
          <div className='short-sidebar-logo' onClick={handleInstaLogo}>
            <img src={sideBarImages.shortlogo} width={25} />
          </div>
      }
      <div className='sidebar-list'>
        <SidebarContent message={message} setMessage={setMessage} search={search} notification={notification} setSearch={setSearch} more={more} setNotification={setNotification} shortSidebar={shortSidebar} setShortSidebar={setShortSidebar} setShortSidebarType={setShortSidebarType} setCreate={setCreate} setMore={setMore} />
      </div>
    </>
  )
}

export default SideBar