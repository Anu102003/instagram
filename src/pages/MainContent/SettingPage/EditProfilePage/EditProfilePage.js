import React, { Children, useEffect, useRef, useState } from 'react'
import "./_editProfilePage.scss"
import { instahome } from '../../../../images/homepage/instahome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faCircleCheck, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
export const EditProfilePage = () => {
    const textAreaRef = useRef();
    const [wordsCount, setWordsCount] = useState(0);
    const handelCount = () => {
        const text = textAreaRef.current.value;
        setWordsCount(text.length)
    }
    const [selectGender, setSelectGender] = useState("Prefer not to say")
    const [selectGenderHover, setSelectGenderHover] = useState(false)
    const [customValue, setCustomValue] = useState("")
    const handelCustomGender = (e) => {
        const value = e.target.value;
        setCustomValue(value);
    }
    useEffect(() => {
        function handler(e) {
            const value = e.target.className
            if (value !== "gender-options-container" && (value !== "gender-dropdown null" || value === "gender-dropdown red-border")) {
                setSelectGenderHover(false)
            }
            if (value === "custom-input red-border" || value === "custom-input null") {
                setSelectGenderHover(true)
            }
            if ((value === "gender-dropdown null" || value === "gender-dropdown red-border")) {
                setSelectGenderHover(!selectGenderHover)
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [selectGenderHover])
    const [toggle,setToggle]=useState(false)
    return (
        <div className='edit-profile'>
            <p className='title'>Edit Profile</p>
            <div className='profile-details'>
                <div className='img-name'>
                    <img src={instahome.profile} height={56} width={56} />
                    <div className='profile-name'>
                        <p className='username'>Username</p>
                        <p className='name'>Name</p>
                    </div>
                </div>
                <button className='follow-btn'>
                    Change photo
                </button>
            </div>
            <div className='website'>
                <p className='web-title'>Website</p>
                <div className='web-container'>Website</div>
                <p className='web-sub-txt'>Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.</p>
            </div>
            <div className='bio'>
                <p className='bio-title'>Bio</p>
                <div className={`bio-container ${wordsCount > 0 ? 'bio-border' : null}`}>
                    <textarea onChange={handelCount} className='input' placeholder='Bio' ref={textAreaRef}></textarea>
                    <div className='words' >{wordsCount}/150</div>
                </div>
            </div>
            <div className='gender'>
                <p className='gender-title'>Gender</p>
                <div className={`gender-dropdown ${(selectGender === "Custom" && customValue.length === 0) ? "red-border" : null}`}>
                    {(selectGender === "Custom" && customValue.length !== 0) ? customValue : selectGender}
                    <FontAwesomeIcon className='down-icon' icon={faAngleDown} />
                </div>
                {
                    selectGenderHover &&
                    <div className='gender-options-container'>
                        <div className='gender-options' onClick={() => { setSelectGender("Female"); setSelectGenderHover(false) }}>
                            Female
                            <FontAwesomeIcon icon={selectGender === "Female" ? faCircleCheck : faCircle} />
                        </div>
                        <div className='gender-options' onClick={() => { setSelectGender("Male"); setSelectGenderHover(false) }}>
                            Male
                            <FontAwesomeIcon icon={selectGender === "Male" ? faCircleCheck : faCircle} />
                        </div>
                        <div className='gender-options-custom' onClick={() => { setSelectGender("Custom") }}>
                            <div className='gender-options' >
                                Custom
                                <FontAwesomeIcon icon={selectGender === "Custom" ? faCircleCheck : faCircle} />
                            </div>
                            <input type='text' value={customValue} className={`custom-input ${(selectGender === "Custom" && customValue.length === 0) ? "red-border" : null}`} onChange={(e) => { handelCustomGender(e) }} />
                        </div>
                        <div className='gender-options' onClick={() => { setSelectGender("Prefer not to say"); setSelectGenderHover(false) }}>
                            Prefer not to say
                            <FontAwesomeIcon icon={selectGender === "Prefer not to say" ? faCircleCheck : faCircle} />
                        </div>
                    </div>
                }
                <p className='gender-sub-txt'>This won't be part of your public profile.</p>
            </div>
            <div className='show-account-suggest'>
                <p className='show-account-suggest-title'>Show account suggestions on profiles</p>
                <div className='show-account-suggest-container'>
                    <div className='show-account-suggest-txt'>
                        <p className='head'>Show account suggestions on profiles</p>
                        <p className='txt'>Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles.</p>
                    </div>
                    <FontAwesomeIcon icon={toggle?faToggleOn:faToggleOff} className='toggle' onClick={()=>{setToggle(!toggle)}}/>
                </div>
            </div>
            <div className='submit-btn'>

            <button className='follow-btn'>Submit</button>
            </div>
        </div>
    )
}
