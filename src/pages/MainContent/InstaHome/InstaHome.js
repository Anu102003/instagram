import React from 'react'
import "./instahome.scss"
import { AsideContainer } from './Asidesuggest/AsideContainer'
import { StatusContainer } from './StatusContainer/StatusContainer'
import { PostContainer } from './Post/PostContainer'

const InstaHome = () => {
  return (
    <>
      <div className='home-content'>
        <div className='status-post-content'>
          <div className='status-conetnt'>
          <StatusContainer />
          </div>
          <div className='post-content'>
          <PostContainer/>
          </div>
        </div>
        <div className='aside-content'>
          <AsideContainer />
        </div>
      </div>
      {/* <SuggestConatiner/> */}
    </>
  )
}

export default InstaHome