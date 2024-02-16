import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ReportPopupContext } from '../../../../context/CreateContext';
import { ReportPopupClose } from '../../../../context/CreateContext';
export const ReportHeading = () => {
    const { username, handleCancel } = useContext(ReportPopupContext);
    const { popupType, setPopupType } = useContext(ReportPopupClose);
    return (
        <div className="report-popup">
            <p className='report-title'>
                {
                    popupType !== null &&
                    <FontAwesomeIcon onClick={() => { setPopupType(null) }} className="right-arrow" icon={faChevronLeft} size="xl" style={{ color: "#ffffff", cursor: 'pointer' }} />
                }
                <FontAwesomeIcon onClick={handleCancel} className="close-icon" icon={faXmark} size="xl" style={{ color: "#ffffff" }} />
                Report
            </p>
            <div className='report-content-list'>
                <div className='report-heading'>
                    Why are you reporting this post?
                </div>
            </div>
        </div>
    )
}
