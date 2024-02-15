import React, { useState } from 'react'
import { loginpage } from '../../images/loginpage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export const Signup = () => {
    const [signUpValue, setSignUpValue] = useState({
        mobileEmail: "",
        fullName: "",
        userName: "",
        password: ""
    })
    const [signUpError, setSignUpError] = useState({
        mobileEmailError: "",
        fullNameError: "",
        userNameError: "",
        passwordError: "",
        validateError: ""
    })
    const [validSignUp, setValidSignUp] = useState({
        mobileEmailValid: false,
        fullName: false,
        userNameValid: false,
        passwordValid: false
    });
    const [signUpLoading, setSignUpLoading] = useState(false);
    const [signUpEyeVisible, setSignUpEyeVisible] = useState(false)


    //validating sign in value
    const mobileEmailChange = (e) => {
        const val = e.target.value;
        if (val === "") {
            setSignUpError({ ...signUpError, mobileEmailError: "Please enter a value" })
            setValidSignUp({ ...validSignUp, mobileEmailValid: false })
        }
        //email valid
        else if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val))) {
            setSignUpValue({ ...signUpValue, mobileEmail: e.target.value })
            setSignUpError({ ...signUpError, mobileEmailError: "" })
            setValidSignUp({ ...validSignUp, mobileEmailValid: true })
        }
        //phone number valid
        else if (val === "" || /^[0-9]+$/.test(val)) {
            if (val.length === 10) {
                setSignUpValue({ ...signUpValue, mobileEmail: e.target.value })
                setSignUpError({ ...signUpError, mobileEmailError: "" })
                setValidSignUp({ ...validSignUp, mobileEmailValid: true })
            } else {
                setSignUpError({ ...signUpError, mobileEmailError: "Please enter a valid phone number" })
                setValidSignUp({ ...validSignUp, mobileEmailValid: false })
            }
        }
        else {
            setSignUpError({ ...signUpError, mobileEmailError: "Please enter a valid email" })
            setValidSignUp({ ...validSignUp, mobileEmailValid: false })
        }
    }


    //validating full name value
    const fullNameChange = (e) => {
        const fullname = e.target.value;
        if (fullname === "") {
            setSignUpError({ ...signUpError, fullNameError: "Please enter a value" })
            setValidSignUp({ ...validSignUp, fullNameValid: false })
        }
        //username valid
        else if (!(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/.test(fullname))) {
            if (!/^[A-Z]/.test(fullname)) {
                setSignUpError({ ...signUpError, fullNameError: "Full name must start with a capital letter" })
                setValidSignUp({ ...validSignUp, fullNameValid: false })
            } else if (/\d/.test(fullname)) {
                setSignUpError({ ...signUpError, fullNameError: "Full name cannot contain numbers" })
                setValidSignUp({ ...validSignUp, fullNameValid: false })
            } else if (/[^a-zA-Z\s]/.test(fullname)) {
                setSignUpError({ ...signUpError, fullNameError: "Full name cannot contain special characters" })
                setValidSignUp({ ...validSignUp, fullNameValid: false })
            }
            else {
                setSignUpValue({ ...signUpValue, fullName: e.target.value })
                setSignUpError({ ...signUpError, fullNameError: "" })
                setValidSignUp({ ...validSignUp, fullNameValid: true })
            }
        }
        else {
            setSignUpValue({ ...signUpValue, fullName: e.target.value })
            setSignUpError({ ...signUpError, fullNameError: "" })
            setValidSignUp({ ...validSignUp, fullNameValid: true })
        }
    }

    //validating sign in value
    const userNameChange = (e) => {
        const username = e.target.value;
        if (username === "") {
            setSignUpError({ ...signUpError, userNameError: "Please enter a value" })
            setValidSignUp({ ...validSignUp, userNameValid: false })
        }
        //username valid
        else if (/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(username)) {
            setSignUpValue({ ...signUpValue, userName: e.target.value })
            setSignUpError({ ...signUpError, userNameError: "" })
            setValidSignUp({ ...validSignUp, userNameValid: true })
        }
        else if (/[^a-zA-Z\s]/.test(username)) {
            setSignUpError({ ...signUpError, userNameError: "User name cannot contain special characters" })
            setValidSignUp({ ...validSignUp, userNameValid: false })
        }
        else {
            setSignUpError({ ...signUpError, userNameError: "Username contains alphabets and numbers" })
            setValidSignUp({ ...validSignUp, userNameValid: false })
        }
    }


    //validating password 
    const signUpPasswordChange = (e) => {

        const pwd = e.target.value;
        if (pwd === "") {
            setSignUpError({ ...signUpError, passwordError: "Please enter a password" })
            setValidSignUp({ ...validSignUp, passwordValid: false })
        } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(pwd) && pwd.length >= 6) {
            setSignUpValue({ ...signUpValue, password: e.target.value })
            setSignUpError({ ...signUpError, passwordError: "" })
            setValidSignUp({ ...validSignUp, passwordValid: true })
        } else {
            setSignUpError({ ...signUpError, passwordError: "Password must contain at least one uppercase letter, one lowercase letter and one digit" })
            setValidSignUp({ ...validSignUp, passwordValid: false })
        }
    }

    //sign up validate
    const validateSignUp = (e) => {
        e.preventDefault();
        if (validSignUp.mobileEmailValid === true && validSignUp.fullNameValid === true
            && validSignUp.userNameValid === true && validSignUp.passwordValid === true) {
            setSignUpError({ ...signUpError, validateError: "" })
            console.log(signUpValue)
            setSignUpLoading(true)
            setTimeout(() => {
                setSignUpLoading(false);
            }, 2000);
        } else {
            setSignUpError({ ...signUpError, validateError: "Please enter correct data" })
            setSignUpLoading(false)
        }
    }

    return (
        <>
            {/* Input field of SignUp value */}
            <input className='login-text'
                defaultValue={setSignUpValue.mobileEmail === "" ? "" : setSignUpValue.mobileEmail}
                onChange={mobileEmailChange}
                type='text'
                placeholder='Mobile number or email address'
                autocomplete="off" />
            <p className='signin-error'>{signUpError.mobileEmailError}</p>

            {/* Input field of Full Name value */}
            <input className='login-text'
                defaultValue={setSignUpValue.fullName === "" ? "" : setSignUpValue.fullName}
                onChange={fullNameChange}
                type='text'
                placeholder='Full Name'
                autocomplete="off" />
            <p className='signin-error'>{signUpError.fullNameError}</p>

            {/* Input field of Username value */}
            <input className='login-text'
                defaultValue={setSignUpValue.userName === "" ? "" : setSignUpValue.userName}
                onChange={userNameChange}
                type='text'
                placeholder='Username'
                autocomplete="off" />
            <p className='signin-error'>{signUpError.userNameError}</p>

            {/* Input field of Password value */}
            <div className='sigin-password'>
                <input className='login-text'
                    defaultValue={setSignUpValue.password === "" ? "" : setSignUpValue.password}
                    onChange={signUpPasswordChange}
                    type={signUpEyeVisible ? "text" : "password"}
                    placeholder='Password'
                    autocomplete="off" />
                <div className='eye-icon' onClick={() => setSignUpEyeVisible(!signUpEyeVisible)}>
                    {
                        signUpEyeVisible ?
                            <FontAwesomeIcon icon={faEye} /> :
                            <FontAwesomeIcon icon={faEyeSlash} />
                    }
                </div>
            </div>
            <p className='signin-error'>{signUpError.passwordError}</p>

            {/* Sign Up Button */}
            <button className='login-button' onClick={validateSignUp}>
                <div>
                    Sign Up
                </div>
            </button>
            {
                signUpLoading ?
                    <div className='signin-loading'>
                        <img src={loginpage.loading} width="35px" />
                    </div> :
                    <></>
            }
            <p className='signin-error'>{signUpError.validateError}</p>
        </>
    )
}
