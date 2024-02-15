import React, { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { loginpage } from '../../images/loginpage'

export const Signin = () => {

    const [signInValue, setSignInValue] = useState({
        signin: "",
        password: ""
    })

    const [signInError, setSignInError] = useState({
        signinError: "",
        passwordError: "",
        validateError: ""
    })

    const [validSignIn, setValidSignIn] = useState({
        signinValid: false,
        passwordValid: false
    });

    const [eyeVisible, setEyeVisible] = useState(false)

    const [signInLoading, setSignInLoading] = useState(false);

    //validating sign in value
    const signInChange = (e) => {

        const { value } = e.target;

        if (value === "") {
            setSignInError({ ...signInError, signinError: "Please enter a value" })
            setValidSignIn({ ...validSignIn, signinValid: false })
        }

        //email valid
        else if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
            setSignInValue({ ...signInValue, signin: e.target.value })
            setSignInError({ ...signInError, signinError: "" })
            setValidSignIn({ ...validSignIn, signinValid: true })
        }

        //username valid
        else if (/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(value)) {
            setSignInValue({ ...signInValue, signin: e.target.value })
            setSignInError({ ...signInError, signinError: "" })
            setValidSignIn({ ...validSignIn, signinValid: true })
        }

        //phone number valid
        else if (value === "" || /^[0-9]+$/.test(value)) {
            if (value.length === 10) {
                setSignInValue({ ...signInValue, signin: e.target.value })
                setSignInError({ ...signInError, signinError: "" })
                setValidSignIn({ ...validSignIn, signinValid: true })
            } else {
                setSignInError({ ...signInError, signinError: "Please enter a valid phone number" })
                setValidSignIn({ ...validSignIn, signinValid: false })
            }
        }

        else {
            setSignInError({ ...signInError, signinError: "Incorrect email or username" })
            setValidSignIn({ ...validSignIn, signinValid: false })
        }
    }


    //validating password 
    const passwordChange = (e) => {

        const pwd = e.target.value;
        if (pwd === "") {
            setSignInError({ ...signInError, passwordError: "Please enter a password" })
            setValidSignIn({ ...validSignIn, passwordValid: false })
        } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(pwd) && pwd.length >= 6) {
            setSignInValue({ ...signInValue, password: e.target.value })
            setSignInError({ ...signInError, passwordError: "" })
            setValidSignIn({ ...validSignIn, passwordValid: true })
        } else {
            setSignInError({ ...signInError, passwordError: "Password must contain at least one uppercase letter, one lowercase letter and one digit" })
            setValidSignIn({ ...validSignIn, passwordValid: false })
        }
    }

    //sign in validate
    const validateSignIn = (e) => {
        e.preventDefault();
        if (validSignIn.signinValid === true && validSignIn.passwordValid === true) {
            setSignInError({ ...signInError, validateError: "" })
            console.log(signInValue)
            setSignInLoading(true)
            setTimeout(() => {
                setSignInLoading(false);
            }, 2000);
        } else {
            setSignInError({ ...signInError, validateError: "Please enter correct data" })
            setSignInLoading(false)
        }
    }

    return (
        <>
            {/* Input field of SignIn value */}
            <input className='login-text'
                defaultValue={setSignInValue.signin === "" ? "" : setSignInValue.signin}
                onChange={signInChange}
                type='text'
                placeholder='Phone number,username or email address'
                autocomplete="off" />
            <p className='signin-error'>{signInError.signinError}</p>


            {/* Input field of Password value */}
            <div className='sigin-password'>
                <input className='login-text'
                    defaultValue={setSignInValue.password === "" ? "" : setSignInValue.password}
                    onChange={passwordChange}
                    type={eyeVisible ? "text" : "password"}
                    placeholder='Password'
                    autocomplete="off" />
                <div className='eye-icon' onClick={() => setEyeVisible(!eyeVisible)}>
                    {
                        eyeVisible ?
                            <FontAwesomeIcon icon={faEye} /> :
                            <FontAwesomeIcon icon={faEyeSlash} />
                    }
                </div>
            </div>
            <p className='signin-error'>{signInError.passwordError}</p>


            {/* Sign In Button */}
            <button className='login-button' onClick={validateSignIn}>
                <div>
                    Sign In
                </div>
            </button>
            {
                signInLoading ?
                    <div className='signin-loading'>
                        <img src={loginpage.loading} width="35px" />
                    </div> :
                    <></>
            }
            <p className='signin-error'>{signInError.validateError}</p>
        </>
    )
}
