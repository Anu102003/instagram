import React, { useEffect, useState } from 'react'
import "./login.scss"
import { Signin } from './Signin'
import { Signup } from './Signup'
import { loginpage } from '../../images/loginpage'

export const LoginPage = () => {
  const [isLogin, setLogin] = useState(true)
  const onChangeLogin = () => {
    isLogin ? setLogin(false) : setLogin(true)
  }
  
  const [imgList, setImgList] = useState([loginpage.side1, loginpage.side2, loginpage.side3]);
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (imgIndex >= imgList.length - 1) {
        setImgIndex(0);
      }
      else {
        setImgIndex(imgIndex + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [imgIndex]);

  return (
    <>

      <div className="login-grid-card">

        {/* 1 */}
        <div className='grid-child'>
        </div>

        {/* 2 */}
        <div className='login-grid-content'>

          {/* left container */}
          <div className='login-left-container'>

            <img src={loginpage.loginimg} />
            <img src={imgList[imgIndex]} className='screen' />
          </div>
          <div>

            {/* right container */}
            <div className='login-right-container'>
              <img className="login-logo" src={loginpage.logo} />
              <div className='login-signin'>
                {
                  isLogin ? <Signin /> : <Signup />
                }

                <div className='login-div-or'>
                  <div className='login-dividor'></div>
                  <div className='login-or'>OR</div>
                  <div className='login-dividor'></div>
                </div>
                <div className='login-fb'><img src={loginpage.fb} className="fb-img" width="16px" style={{ "marginRight": "6px" }} />Log in with Facebook</div>
                <div className='login-forgot'>Forgotten your password?</div>
              </div>
            </div>


            <div className='login-sign-option'>
              {
                isLogin ?
                  <div className='login-sign'>
                    Don't have an account? <span onClick={onChangeLogin} className='sign-text' >Sign up</span>
                  </div> :
                  <div className='login-sign'>
                    Have an account? <span onClick={onChangeLogin} className='sign-text'>Sign in</span>
                  </div>
              }
            </div>


            <div className='login-app'>
              <div className='login-app-text'>
                Get the app.
              </div>
              <div className='login-app-img'>
                <a href="https://apps.apple.com/us/app/instagram/id389801252?vt=lo" target='new_tab'>  <img src={loginpage.app} height="40px" /></a>
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D28AD2669-0378-43A5-BB36-C2DC2B6A58C2%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps://www.google.com/&pli=1" target='new_tab'>
                  <img src={loginpage.play} height="40px" /></a>
              </div>
            </div>

          </div>
        </div>

        {/* 3 */}
        <div className='grid-child'>
        </div>

      </div>
    </>
  )
}

