import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck as soildfaSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck as regularfaSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { loginpage } from '../../../../images/loginpage'
import "./_switchpopup.scss"

export const SwitchPopup = () => {
    const [eyeVisible, setEyeVisible] = useState(false)
    const [checked, setChecked] = useState(false)
    const [popupLoading, setPopupLoading] = useState(false);

    const [popupValue, setPopupValue] = useState({
        popup: "",
        password: ""
    })
    const [popupError, setPopupError] = useState({
        popupError: "",
        passwordError: "",
        validateError: ""
    })

    const [validPopup, setValidPopup] = useState({
        popupValid: false,
        passwordValid: false
    });
    //validating sign in value
    const popupChange = (e) => {

        const { value } = e.target;

        if (value === "") {
            setPopupError({ ...popupError, popupError: "Please enter a value" })
            setValidPopup({ ...validPopup, popupValid: false })
        }

        //email valid
        else if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
            setPopupValue({ ...popupValue, popup: e.target.value })
            setPopupError({ ...popupError, popupError: "" })
            setValidPopup({ ...validPopup, popupValid: true })
        }

        //username valid
        else if (/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(value)) {
            setPopupError({ ...popupError, popupError: "" })
            setValidPopup({ ...validPopup, popupValid: true })
        }

        //phone number valid
        else if (value === "" || /^[0-9]+$/.test(value)) {
            if (value.length === 10) {
                setPopupValue({ ...popupValue, popup: e.target.value })
                setPopupError({ ...popupError, popupError: "" })
                setValidPopup({ ...validPopup, popupValid: true })
            } else {
                setPopupError({ ...popupError, popupError: "Please enter a valid phone number" })
                setValidPopup({ ...validPopup, popupValid: false })
            }
        }

        else {
            setPopupError({ ...popupError, popupError: "Incorrect email or username" })
            setValidPopup({ ...validPopup, popupValid: false })
        }
    }


    //validating password 
    const passwordChange = (e) => {

        const pwd = e.target.value;
        if (pwd === "") {
            setPopupError({ ...popupError, passwordError: "Please enter a password" })
            setValidPopup({ ...validPopup, passwordValid: false })
        } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(pwd) && pwd.length >= 6) {
            setPopupValue({ ...popupValue, password: e.target.value })
            setPopupError({ ...popupError, passwordError: "" })
            setValidPopup({ ...validPopup, passwordValid: true })
        } else {
            setPopupError({ ...popupError, passwordError: "Password must contain at least one uppercase letter, one lowercase letter and one digit" })
            setValidPopup({ ...validPopup, passwordValid: false })
        }
    }

    //sign in validate
    const validatePopup = (e) => {
        e.preventDefault();
        if (validPopup.popupValid === true && validPopup.passwordValid === true) {
            setPopupError({ ...popupError, validateError: "" })
            console.log(popupValue)
            setPopupLoading(true)
            setTimeout(() => {
                setPopupLoading(false);
            }, 2000);
        } else {
            setPopupError({ ...popupError, validateError: "Please enter correct data" })
            setPopupLoading(false)
        }
    }


    return (
        <>
            <div className='switch-popup'>


                {/* logo */}
                <div className='switch-popup__logo'>
                    <img src={loginpage.logowhite} width="174px" />
                </div>


                {/* username */}
                <p className='switch-error'>{popupError.popupError}</p>
                <div className='switch-popup__input'>
                    <p className='switch-popup__label'>
                        Phone number, username or email address
                    </p>
                    <input type='text'
                        defaultValue={setPopupValue.popup === "" ? "" : setPopupValue.popup}
                        onChange={popupChange} 
                        autoComplete="off"/>


                </div>


                {/* password */}
                <p className='switch-error'>{popupError.passwordError}</p>
                <div className='switch-popup__input switch_password'>
                    <p className='switch-popup__label'>
                        Password
                    </p>
                    <input type={eyeVisible ? "text" : "password"}
                        defaultValue={setPopupValue.password === "" ? "" : setPopupValue.password}
                        onChange={passwordChange}
                        autoComplete="off" />
                    <div className='switch-popup__e-icon' onClick={() => setEyeVisible(!eyeVisible)}>
                        {
                            eyeVisible ?
                                <FontAwesomeIcon icon={faEye} /> :
                                <FontAwesomeIcon icon={faEyeSlash} />
                        }
                    </div>
                </div>


                {/* save login */}
                <div className='switch-popup__save' onClick={() => setChecked(!checked)}>
                    {
                        checked ?
                            <FontAwesomeIcon icon={soildfaSquareCheck} /> :
                            <FontAwesomeIcon icon={regularfaSquareCheck} />
                    }
                    <p className='switch-popup__save-text'>Save login info</p>
                </div>


                {/* login btn */}
                <button className='switch-popup__login-btn' onClick={validatePopup}>
                    {/* <div>
                        Log in
                    </div> */}
                {
                            popupLoading?
                                <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#ffffff", }} />
                                :
                                <>Log in</>
                        }
                </button>

                {/* {
                    popupLoading ?
                        <div className='signin-loading'>
                            <img src={loginpage.loading} width="35px" />
                        </div> :
                        <></>
                } */}
                <p className='switch-error'>{popupError.validateError}</p>



                {/* forget password */}
                <div className='login-forgot switch-forget' style={{ color: "white" }}>Forgotten your password?</div>

            </div>
        </>
    )
}
