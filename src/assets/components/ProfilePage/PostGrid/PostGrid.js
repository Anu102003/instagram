import React, { useState } from 'react'
import "./_postGrid.scss"
import { PostItem } from './PostItem'
export const PostGrid = ({ post,reels }) => {

    return (
        <>
            <div className='post-grid-container'>
                <div className='post-wrapper'>
                    {
                        post.map((posts,index) => (
                            <PostItem key={index} posts={posts} reels={reels}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
