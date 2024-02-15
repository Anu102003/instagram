import React from 'react'
import { post } from '../../../database/db';
import { Post } from './Post';
import CreateContext from '../../../context/CreateContext';

export const PostList = () => {

  return (
    <>
      {
        post.map((item) => {
          return <>
            <CreateContext.Provider value={item}>
              <div>
                <Post item={item} />
              </div>
            </CreateContext.Provider>
          </>
        })
      }
    </>
  )
}
