import React from 'react'
import "./_unfollowpopup.scss"
export const UnfollowPopup = ({profileImg,handleIsOpen,className}) => {
    const handleChangeUpdate = () => {
        handleIsOpen(false);
        document.body.style.overflow = "unset"
    };
    const handleUnfollowUpdate = () => {
        handleIsOpen(false);
        document.body.style.overflow = "unset"
    };
    return (
        <div className={className==="MorePopup"?'unfollow':'popup-switch-parent'}>
            <div  className='popup-switch'>
                <div className='unfollow'>
                    <div className='unfollow__profile'>
                        <img src={profileImg} width="90px" height="90px" />
                        <p className='unfollow__username'>Unfollow @myYogi_adiyanath</p>
                    </div>
                    <div className='unfollow__btn' onClick={handleUnfollowUpdate}>
                        Unfollow
                    </div>
                    <div className='cancel-btn' onClick={handleChangeUpdate}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    )
}
