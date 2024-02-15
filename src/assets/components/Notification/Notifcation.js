import React from 'react'
import "./_notification.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
export const Notifcation = ({setNotification, setShortSidebar }) => {
  const notification = [
    {
      systemUpdate: true,
    },
    {
      systemUpdate: true,
    },
    {
      systemUpdate: false,
      img: "https://image.khaleejtimes.com/?uuid=0483b3a8-dba0-5ec6-804d-509895a788af&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.81596&x=0&y=0&width=1500&height=844",
      name: "virat",
      username: "airatKOLI",
      type: "confirm"
    },
    {
      systemUpdate: false,
      img: "https://images.indianexpress.com/2023/08/Rohit-Sharma-2-1.jpg?w=640",
      name: "rohit",
      username: "RohitSHARMA",
      type: "confirm"
    },
    {
      systemUpdate: false,
      img: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
      name: "msdohni",
      username: "Ms_dohni",
      type: "storyliked"
    },
    {
      systemUpdate: false,
      img: "https://images.indianexpress.com/2023/08/Rohit-Sharma-2-1.jpg?w=640",
      name: "rohit",
      username: "RohitSHARMA",
      type: "broadcastInvite"
    },
    {
      systemUpdate: false,
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Hardik_Pandya_%28cropped_2%29.jpg",
      name: "hardik",
      username: "HARDIK panDya",
      type: "following"
    },
    {
      systemUpdate: false,
      img: "https://images.indianexpress.com/2023/08/Rohit-Sharma-2-1.jpg?w=640",
      name: "rohit",
      username: "RohitSHARMA",
      type: "following"
    },
    {
      systemUpdate: false,
      img: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
      name: "msdohni",
      username: "Ms_dohni",
      type: "replyComment"
    },
    {
      systemUpdate: true,
    },
  ]
  const navigate=useNavigate()
  const handelSelect = () => {
    setShortSidebar(false)
    navigate("/profile")
    setNotification(false)
  }
  const handelSystemUpdate=()=>{
    setShortSidebar(false)
    navigate("/setting")
    setNotification(false)
  }
  return (
    <div className='notification-popup'>
      <p className='title'>Notifcation</p>
      <p className='sub-title'>Earlier</p>
      {
        notification.map((item) => (
          <>
            {!item.systemUpdate
              ?
              <div className='profile-details' onClick={() => { handelSelect() }}>
                <div className='img-name'>
                  <img src={item.img} height={42} width={42} />
                  <div className='username-name'>
                    <p className='username'>{item.username}</p>
                    <p className='description'>
                      {item.type === "confirm" && <p>requested to follow you.</p>}
                      {item.type === "storyliked" && <p>liked your story.</p>}
                      {item.type === "broadcastInvite" && <p>invited you to join their broadcast channels.</p>}
                      {item.type === "following" && <p>started following you.</p>}
                      {item.type === "replyComment" && <p>replied to comment.</p>}
                    </p>
                  </div>
                </div>
                {item.type === "confirm" && <button className='follow-btn'>Confirm</button>}
                {item.type === "following" && <button className='following-btn'>Following</button>}

              </div>
              :
              <div className='system-update' onClick={handelSystemUpdate}>
                <FontAwesomeIcon icon={faCircleInfo} size='3x'/><p>Your support request from 13 February was just updated.<span className='time'>5 w</span></p>
              </div>
            }
          </>
        ))
      }
      <div className='empty'>

      </div>
    </div>
  )
}
