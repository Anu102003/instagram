import React, { useContext, useState } from 'react'
import { ReportPopupContext } from '../../../../../context/CreateContext'
import { BlockContext } from '../../../../../context/CreateContext';
export const BlockPopus = () => {
    const { username, handleCancel } = useContext(ReportPopupContext);
    const [confirmBlock,setConfirmBlock]=useState(false)
    const setBlockedDisplay  = useContext(BlockContext);
    const handleConfirmBlock = () => {
        setConfirmBlock(true)
        setBlockedDisplay(true)
        setTimeout(() => {
            setBlockedDisplay(false)
        }, 2000)
    }
    return (
        <>
            {
                !confirmBlock ?
                    <div className='block-popup'>
                        <div className='block-popup-head'>
                            <p className='block-txt'>
                                Block {username} ?
                            </p>
                            <p className='block-subtxt'>
                                They won't be able to find your profile, posts or story on Instagram. Instagram won't let them know that you've blocked them.
                            </p>
                        </div>
                        <div className='unfollow__btn block-btn' onClick={handleConfirmBlock}>
                            Block
                        </div>
                        <div className='cancel-btn' onClick={handleCancel} >
                            Cancel
                        </div>
                    </div>
                    :
                    <div className='block-popup'>
                        <div className='block-popup-head'>
                            <p className='block-txt'>
                                Blocked {username}
                            </p>
                            <p className='block-subtxt'>
                                You can unblock them at any time from their profile.
                            </p>
                        </div>

                        <div className='cancel-btn dismiss-btn' onClick={handleCancel} >
                            Dismiss
                        </div>
                    </div>
            }

        </>
    )
}
