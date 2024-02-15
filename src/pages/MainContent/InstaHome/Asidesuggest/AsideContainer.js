import React, { useState, useEffect, } from 'react'
import "./_aside.scss"
import { instahome } from '../../../../images/homepage/instahome'
import { AsideSuggestList } from '../../../../assets/components/AsideSuggestList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { SwitchPopup } from '../../../../assets/components/Popups/SwitchPopup/SwitchPopup'
import { useNavigate } from 'react-router-dom'
import { UserDetails } from '../../../../database/db'

export const AsideContainer = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const handleSeeAll = () => {
        navigate("/people")
    }
    const navigateProfilePage=()=>{
        navigate("/profile")
    }
    useEffect(() => {
        function handler(event) {
            if (
                event.target.className !== "aside-text-basic aside-content__profile__text open-btn" &&
                event.target.className === "popup-switch-parent"
            ) {
                setIsOpen(false);
                document.body.style.overflow = "unset"
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])

    //  to get random profile data :-
    // const getRandomSubset = (array, count) => {
    //     const shuffledArray = array.sort(() => 0.5 - Math.random());
    //     return shuffledArray.slice(0, count);
    // };

    // const randomFiveUsers = getRandomSubset(UserDetails, 5);

    return (
        <>
            {/* Profile  */}

            <div className='aside-content__profile'>
                <div className='suggest-img'>
                    <img onClick={navigateProfilePage} src={instahome.profile} />
                </div>
                <div className='suggest-text'>
                    <p className='suggest-username' onClick={navigateProfilePage} >User_name
                    </p>
                </div>
                <div onClick={() => { setIsOpen(true); document.body.style.overflow = "hidden" }} className="aside-text-basic aside-content__profile__text open-btn">
                    Switch
                </div>

                {isOpen && <div className='popup-switch-parent'>
                    <div className="popup-switch">
                        <div className="close-container"><FontAwesomeIcon className='close-icon' icon={faXmark} onClick={() => { setIsOpen(false); document.body.style.overflow = "unset" }} /></div>
                        <SwitchPopup />
                    </div>
                </div>}
            </div>

            {/* suggest  */}

            <div className='aside-content__suggest'>
                <p className='suggest-username' id="aside-username">Suggested for you
                </p>
                <div className="see-all-text" onClick={handleSeeAll}>
                    See All
                </div>
            </div>

            {/* Suggest List */}
            
            {
                UserDetails.slice(0, 5).map(e => (
                    <AsideSuggestList userdata={e} />
                ))
            }


        </>
    )
}
