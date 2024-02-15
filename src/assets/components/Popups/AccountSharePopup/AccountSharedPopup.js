import React from 'react'
import "./_accountSharePopup.scss"
export const AccountSharedPopup = ({ currentUsername,accountShared }) => {
    return (
        <><div className='account-share'>

            <p className='account-share__text'>
                These are the public accounts that have the most followers in common with ademirquintino's. Seeing these may help you identify accounts with similar interests.
            </p>
            {
                accountShared?.map(x => (
                    <div className='profile-list'>
                        <div className='profile-list__img'>
                            <img src={x.profileImg} height={42} width={42}/>
                        </div>
                        <div className='profile-list__text'>
                            <p className='profile-list__username'>{x.username}</p>
                            <p>{x.percentage} of {currentUsername}'s followers also follow {x.username}</p>
                        </div>
                    </div>
                ))
            }

        </div>
        </>
    )
}
