import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./_profilePage.scss"
import { faTableCells, faUserTag, faVideo } from '@fortawesome/free-solid-svg-icons';
import StatusContainer from '../InstaHome/StatusContainer/StatusContainer';
import { ProfileDetails } from '../../../assets/components/ProfilePage/ProfileDetails/ProfileDetails';
import { PostGrid } from '../../../assets/components/ProfilePage/PostGrid/PostGrid';
import { post, reels, tagged } from '../../../database/db';
export const ProfilePage = () => {
  const [cellSelected, setCellSelected] = useState(
    {
      post: true,
      reel: false,
      tagged: false,
    }
  )
  const handleCellSelected = (cellValue) => {
    if (cellValue === "post") {
      setCellSelected({ ...cellSelected, post: true, reel: false, tagged: false })
    }
    if (cellValue === "reel") {
      setCellSelected({ ...cellSelected, post: false, reel: true, tagged: false })
    }
    if (cellValue === "tagged") {
      setCellSelected({ ...cellSelected, post: false, reel: false, tagged: true })
    }
  }

  return (
    <div className='profile-page-container'>
      <div>
        {/* 1 */}
      </div>

      <div className='profile-page'>

        <ProfileDetails />

        <div className='highlight'>
          <StatusContainer highlight={true} />
        </div>

        <div className='post-reels-tags'>

          <div className={`cells  ${cellSelected.post && 'cell-bar'}`}
            onClick={() => { handleCellSelected("post") }}>

            <FontAwesomeIcon icon={faTableCells} size='sm' style={{ color: !cellSelected.post ? 'gray' : 'white', }} />
            <p className='cell-txt'
              style={{ color: !cellSelected.post ? 'gray' : 'white', }}>
              POSTS</p>
          </div>

          <div className={`cells  ${cellSelected.reel && 'cell-bar'}`}
            onClick={() => { handleCellSelected("reel") }}>

            <FontAwesomeIcon icon={faVideo} size='sm' style={{ color: !cellSelected.reel ? 'gray' : 'white', }} />
            <p className='cell-txt'
              style={{ color: !cellSelected.reel ? 'gray' : 'white', }}>
              REELS</p>

          </div>

          <div className={`cells  ${cellSelected.tagged && 'cell-bar'}`}
            onClick={() => { handleCellSelected("tagged") }}>

            <FontAwesomeIcon icon={faUserTag} size='sm' style={{ color: !cellSelected.tagged ? 'gray' : 'white', }} />
            <p className='cell-txt'
              style={{ color: !cellSelected.tagged ? 'gray' : 'white', }}>
              TAGGED</p>

          </div>
        </div>
          {
            cellSelected.post && <PostGrid post={post}/>
          }
          {
            cellSelected.reel && <PostGrid post={reels} reels={true}/>
          }
          {
            cellSelected.tagged && <PostGrid post={tagged}/>
          }
      </div>

      <div>
        {/* 3 */}
      </div>
    </div>
  )
}
