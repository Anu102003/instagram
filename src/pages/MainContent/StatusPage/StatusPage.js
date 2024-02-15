import React, { useState, useEffect } from 'react';
import "./_statusPage.scss";
import { sideBarImages } from '../../../images/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from '../../../assets/components/Slider/Slider';
import { MorePopup } from '../../../assets/components/Popups/MorePopup/MorePopup';
import { ShareMsgPopup } from '../../../assets/components/Popups/ShareMsgPopup/ShareMsgPopup';

export const StatusPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isStatusShared, setIsStatusShared] = useState(false);
    const navigate = useNavigate();

    const status = useLocation();
    const currentClickStatus = status.state.statusData

    const statusPopupClose = () => {
        navigate("/");
    };
    const shareMsgPopupClose = () => {
        console.log("cl")
        setIsStatusShared(false)
        document.body.style.overflow = "unset"
    }
    useEffect(() => {
        function handler(event) {
            if (
                event.target.className === "popup-parentt"
            ) {
                setIsOpen(false);
                setIsStatusShared(false);
                document.body.style.overflow = "unset"
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])
    return (
        <>
            <div className='status-wrapper' >
                <div className='logo-close'>
                <div className='status-logo'>
                    <img src={sideBarImages.sidebarlogo} width="103px" />
                </div>
                <div className="status-close-icon" onClick={statusPopupClose}>
                    <FontAwesomeIcon
                        icon={faXmark}
                        size="2xl"
                        style={{ color: "#ffffff", cursor: 'pointer' }}
                    />
                </div>
                </div>
                <div className='status-container'>
                    <div className='status-card'>
                        <div className='status-carousel'>
                            <Slider isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                setIsStatusShared={setIsStatusShared}
                                currentClickStatus={currentClickStatus} />
                        </div>
                    </div>
                </div>
            </div>
            {isOpen &&
                <div className='popup-parentt'>
                    <div className="popup-more">
                        <MorePopup statusMorePopup={true} handleIsOpen={setIsOpen} />
                    </div>
                </div>
            }
            {isStatusShared &&
                <div className='popup-parentt'>
                    <ShareMsgPopup shareMsgPopupClose={shareMsgPopupClose} />
                </div>
            }
        </>
    );
};
