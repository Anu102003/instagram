import React from 'react'
import "./_moreOptionsPopup.scss"
import { faBookmark, faChartSimple, faGear, faTriangleExclamation, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

export const MoreOptionsPopup = ({setSearch, setNotification,setShortSidebar,setMore,setSwitchPopup}) => {
    const navigate = useNavigate();
    const handelMoreOption = (e) => {
        if (e === "Setting") {
            navigate("/setting")
            setMore(false)
            setSearch(false)
            setShortSidebar(false)
            setNotification(false)
            document.body.style.overflow="unset"
        }
        if (e === "Switch-accounts") {
            setSwitchPopup(true)
            setMore(false)
            document.body.style.overflow="unset"
        }
        if (e === "Saved") {
            navigate("/profile")
            setMore(false)
            document.body.style.overflow="unset"
        }
        if (e === "Logout") {
            navigate("/login")
            setMore(false)
            document.body.style.overflow="unset"
        }
    }
    return (
        <div className='more-options'>
            <div className='option' onClick={()=>{handelMoreOption("Setting")}}>
                <FontAwesomeIcon icon={faGear}  />
                Settings
            </div>
            <div className='option'>
                <FontAwesomeIcon icon={faChartSimple} />
                Your Activity
            </div>
            <div className='option' onClick={()=>{handelMoreOption("Saved")}}>
                <FontAwesomeIcon icon={faBookmark} />
                Saved
            </div>
            <div className='option'>
                <FontAwesomeIcon icon={faWandMagicSparkles} />
                Switch Appearence
            </div>
            <div className='option'>
                <FontAwesomeIcon icon={faTriangleExclamation} />
                Report a problem
            </div>
            <div className='line'></div>
            <div className='option' onClick={()=>{handelMoreOption("Switch-accounts")}}>
                Switch accounts
            </div>
            <div className='switch-line'></div>
            <div className='option' onClick={()=>{handelMoreOption("Logout")}}>
                Logout
            </div>
        </div>
    )
}
