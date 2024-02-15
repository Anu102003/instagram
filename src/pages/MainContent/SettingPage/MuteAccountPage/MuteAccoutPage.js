import React from 'react'
import "./_muteAccountPage.scss"
export const MuteAccoutPage = () => {
  const muteAccount = [
    {
      img: "https://image.khaleejtimes.com/?uuid=0483b3a8-dba0-5ec6-804d-509895a788af&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.81596&x=0&y=0&width=1500&height=844",
      name: "virat",
      username: "airatKOLI",
      mutePost: true,
      muteStory: true,
    },
    {
      img: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
      name: "msdohni",
      username: "Ms_dohni",
      mutePost: true,
      muteStory: false,
    },
    {
      img: "https://images.indianexpress.com/2023/08/Rohit-Sharma-2-1.jpg?w=640",
      name: "rohit",
      username: "RohitSHARMA",
      mutePost: false,
      muteStory: true,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Hardik_Pandya_%28cropped_2%29.jpg",
      name: "hardik",
      username: "HARDIK panDya",
      mutePost: true,
      muteStory: false,
    },
  ]
  return (

    <div className='muted-account'>
      <p className='title'>Muted Accounts</p>
      {
        muteAccount.length!==0 ?
        <>
      {
        muteAccount.map((item) => (
          <div className='profile-details'>
            <div className='img-name'>
              <img src={item.img} height={42} width={42} />
              <div className='username-name'>
                <p className='username'>{item.username}</p>
                <p className='description'>
                  {
                    (item.mutePost && item.muteStory) ? "Posts and story muted" :
                      <>
                        {
                          item.mutePost && "Posts muted"
                        }
                        {
                          item.muteStory && "Story muted"
                        }
                      </>
                  }
                </p>
              </div>
            </div>
            <button className='following-btn'>View Profile</button>
          </div>
        ))
      }
        </>
        :
        <p className='subtxt'>You haven't muted anyone</p>
      }
    </div>
  )
}
