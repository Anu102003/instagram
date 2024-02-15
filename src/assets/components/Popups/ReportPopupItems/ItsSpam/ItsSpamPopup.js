import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { ReportPopupContext } from '../../../../../context/CreateContext'
import { BlockPopus } from './BlockPopus'
import "./_itsSpam.scss"
export const ItsSpamPopup = () => {
    const { username, handleCancel } = useContext(ReportPopupContext);
    const [isBlock, setIsBlock] = useState(false);
    return (
        <>
            {
                !isBlock ?
                    <div className='its-spam'>
                        <div className='its-spam-head'>
                            <div className='its-spam-tickIcon'>
                                <FontAwesomeIcon icon={faCircleCheck} size="3x" style={{ color: "#58c122", }} />
                            </div>
                            <p className='its-spam-txt'>Thanks for letting us know</p>
                            <p className='its-spam-subtxt'>Your feedback is important in helping us keep the Instagram community safe.</p>
                        </div>
                        <div className="report-content-items" onClick={() => { setIsBlock(true) }}>
                            <p className="report-content-text block-text">Block {username}</p>
                            <div className="report-arrow-load-icon">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </div>
                        <a className="report-link" href="https://help.instagram.com/477434105621119" target='_blank'>
                            <div className="report-content-items">
                                <p className="report-content-text">Learn more about Instagram's Community Guidelines</p>
                                <div className="report-arrow-load-icon">
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                            </div>
                        </a>
                        <div className='close-btn' onClick={handleCancel}>
                            Close
                        </div>
                    </div>
                    :
                    <BlockPopus username={username} />
            }
        </>
    )
}
