import React from 'react'
import "./_explorePage.scss"
import {explore } from '../../../database/db'
import { PostItem } from '../../../assets/components/ProfilePage/PostGrid/PostItem';

export const ExplorePage = () => {

    return (
        <div className='explore-container'>
            <div className='explore'>
                {explore.map((explore, index) => (
                    // <ExploreItems explore={explore} />
                    <PostItem posts={explore} explore={true}/>
                ))}
            </div>
        </div>
    );
};
