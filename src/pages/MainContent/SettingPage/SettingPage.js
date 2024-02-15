import React, { useState } from 'react'
import "./_settingPage.scss"
import { faArrowsRotate, faBan, faBell, faBellSlash, faCircleUser, faArrrowUpAZ, faEyeSlash, faHashtag, faHeartCircleExclamation, faInfinity, faLock, faRectangleAd, faShieldHalved, faStar, faUser, faUserLargeSlash, faArrowUpAZ, faDownload, faLanguage, faDesktop, faUsers, faChartColumn, faLifeRing } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { EditProfilePage } from './EditProfilePage/EditProfilePage'
import { NotificationsPage } from './NotificationsPage/NotificationsPage'
import { MuteAccoutPage } from './MuteAccountPage/MuteAccoutPage'
import { Settings } from '../../../assets/components/Settings/Settings'
import { CloseFriendsPage } from './CloseFriendsPage/CloseFriendsPage'
import { BlockPage } from './BlockPage/BlockPage'
import { HideStoryLive } from './HideStoryLive/HideStoryLive'

export const SettingPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("edit-profile");

  const handelAccountCenter = () => {
    window.open("https://accountscenter.instagram.com/?entry_point=app_settings", "_self")
  }
  const handleSettingMenu = (menu) => {
    setSelectedMenu(menu);
  }

  const renderSettingMenu = () => {
    switch (selectedMenu) {
      case "edit-profile":
        return <EditProfilePage />
      case "notifications":
        return <NotificationsPage />
      case "mute-account":
        return <MuteAccoutPage />
      case "like-share":
        return <Settings type={"like-share"} />
      case "account-privacy":
        return <Settings type={"account-privacy"} />
      case "archive-download":
        return <Settings type={"archive-download"} />
      case "close-frnds":
        return <CloseFriendsPage />
      case "block":
        return <BlockPage />
      case "hide-story-live":
        return <HideStoryLive />
      default:
        return <EditProfilePage />
    }
  }
  const handelSupervision = () => {
    window.open("https://familycenter.instagram.com/accounts/17841463869712464/?entrypoint=supervision_web&fc_session_id=b764f619-e5b5-472c-8927-65642616ecee&is_home_entry=1", "_blank")
  }
  return (
    <div className='setting-page'>

      <div className='setting-sidebar'>
        <p className='title'>Setting</p>
        <div className='account-center-container' onClick={handelAccountCenter}>
          <p className='meta-head'>
            <FontAwesomeIcon icon={faInfinity} style={{ color: "#1f55b2", }} />
            <span className='meta'>Meta</span>
          </p>
          <p className='account-center-txt'>Account Center</p>
          <p className='sub-txt'>Manage your connected experiences and account settings across Meta technologies.</p>
          <div className='icon-details'>
            <p><FontAwesomeIcon icon={faUser} /></p>
            Personal details
          </div>
          <div className='icon-details'>
            <p><FontAwesomeIcon icon={faShieldHalved} /></p>
            Password and security
          </div>
          <div className='icon-details'>
            <p><FontAwesomeIcon icon={faRectangleAd} /></p>
            Ad preferences
          </div>
          <p className='see-more'>See more in Accounts Center</p>
        </div>

        <p className='setting-menu-heading'>How you use Instagram</p>
        <div className={`setting-menu-content ${selectedMenu === "edit-profile" && "selected"}`} onClick={() => { handleSettingMenu("edit-profile") }}>
          <FontAwesomeIcon icon={faCircleUser} />
          Edit profile
        </div>
        <div className={`setting-menu-content ${selectedMenu === "notifications" && "selected"}`} onClick={() => { handleSettingMenu("notifications") }}>
          <FontAwesomeIcon icon={faBell} />
          Notifications
        </div>

        <p className='setting-menu-heading'>What you see</p>
        <div className={`setting-menu-content ${selectedMenu === "mute-account" && "selected"}`} onClick={() => { handleSettingMenu("mute-account") }}>
          <FontAwesomeIcon icon={faBellSlash} />
          Muted accounts
        </div>
        <div className={`setting-menu-content ${selectedMenu === "like-share" && "selected"}`} onClick={() => { handleSettingMenu("like-share") }}>
          <FontAwesomeIcon icon={faHeartCircleExclamation} />
          Like and share counts
        </div>

        <p className='setting-menu-heading'>Who can see your content</p>
        <div className={`setting-menu-content ${selectedMenu === "account-privacy" && "selected"}`} onClick={() => { handleSettingMenu("account-privacy") }}>
          <FontAwesomeIcon icon={faLock} />
          Account privacy
        </div>
        <div className={`setting-menu-content ${selectedMenu === "close-frnds" && "selected"}`} onClick={() => { handleSettingMenu("close-frnds") }}>
          <FontAwesomeIcon icon={faStar} />
          Close friends
        </div>
        <div className={`setting-menu-content ${selectedMenu === "block" && "selected"}`} onClick={() => { handleSettingMenu("block") }}>
          <FontAwesomeIcon icon={faBan} />
          Blocked
        </div>
        <div className={`setting-menu-content ${selectedMenu === "hide-story-live" && "selected"}`} onClick={() => { handleSettingMenu("hide-story-live") }}>
          <FontAwesomeIcon icon={faEyeSlash} />
          Hide story and live
        </div>

        <p className='setting-menu-heading'>How others can interact with you</p>
        <div className='setting-menu-content'>
          <FontAwesomeIcon icon={faFacebookMessenger} />
          Messages and story replies
        </div>
        <div className='setting-menu-content'>
          <FontAwesomeIcon icon={faHashtag} />
          Tags and mentions
        </div>
        <div className='setting-menu-content'>
          <FontAwesomeIcon icon={faComment} />
          Comments
        </div>
        <div className='setting-menu-content'>
          <FontAwesomeIcon icon={faArrowsRotate} />
          Sharing and remixes
        </div>
        <div className='setting-menu-content'>
          <FontAwesomeIcon icon={faUserLargeSlash} />
          Restricted accounts
        </div>
        <div className='setting-menu-content'>
          <FontAwesomeIcon icon={faArrowUpAZ} />
          Hidden words
        </div>

        <p className='setting-menu-heading'>Your app and media</p>
        <div className={`setting-menu-content ${selectedMenu === "archive-download" && "selected"}`} onClick={() => { handleSettingMenu("archive-download") }}>
          <FontAwesomeIcon icon={faDownload} />
          Archiving and downloading
        </div>
        <div className='setting-menu-content'>
          <FontAwesomeIcon icon={faLanguage} />
          Language
        </div>
        <div className='setting-menu-content'>
          <FontAwesomeIcon icon={faDesktop} />
          Website permissions
        </div>

        <p className='setting-menu-heading'>For families</p>
        <div className='setting-menu-content' onClick={handelSupervision}>
          <FontAwesomeIcon icon={faUsers} />
          Supervision
        </div>

        <p className='setting-menu-heading'>For professionals</p>
        <div className='setting-menu-content' >
          <FontAwesomeIcon icon={faChartColumn} />
          Account type and tools
        </div>

        <p className='setting-menu-heading'>More info and support</p>
        <div className='setting-menu-content'>
          <FontAwesomeIcon icon={faLifeRing} />
          Help
        </div>
        <div className='setting-menu-content'>
          <FontAwesomeIcon icon={faUser} />
          Account status
        </div>
        <div className='empty'>
        </div>
      </div>
      <div className='setting-content'>
        {
          renderSettingMenu()
        }
      </div>
    </div>
  )
}
