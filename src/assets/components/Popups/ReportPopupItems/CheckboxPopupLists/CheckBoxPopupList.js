import React, { useState } from 'react'
import { ReportHeading } from '../ReportHeading'
import "./_checkboxpopuplist.scss"
import { ItsSpamPopup } from '../ItsSpam/ItsSpamPopup';
export const ReportPopupList = ({ popupType ,popupname}) => {

  const [checkBoxSelect, setCheckBoxSelect] = useState("");
  const [submited, setSubmited] = useState(false);
  const handleCheckBoxSelect = (checkBoxSelectValue) => {
    setCheckBoxSelect(checkBoxSelectValue)
  }
  const handleSubmit = () => {
    setSubmited(true);
  }
  return (
    <>
      {
        !submited ?
          <>
            <ReportHeading />
            {popupType.map((section, index) => (
              <div className='report-popup-list' key={index} >

                {section.checkBox &&
                  (
                    <div className='popup-checkbox-list'>
                      {section.checkBox.map((text, index) => (
                        <div className='popup-checkbox-items' onClick={() => handleCheckBoxSelect(text)}>
                          <div className='popup-checkbox-outcircle'>
                            {checkBoxSelect === text && (
                              <div className='popup-checkbox-incircle'></div>
                            )}
                          </div>
                          <div key={index} className='popup-checkbox-text'>{text}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                {
                  section.title &&
                  <>
                    <p className='title'>{section.title}</p>
                    <p className='we-remove-txt'> We remove:</p>
                  </>
                }
                {
                  section.note &&
                  (
                    <div className='notes'>
                      <ul>
                        {section.note.map((notes, index) => (
                          <li className="points" key={index}>{notes}</li>
                        ))}
                      </ul>
                    </div>
                  )
                }
              </div>
            ))}
            <div className={ 
              (popupname==="hatespeech" || checkBoxSelect.length>0 )
              ? 'submit-report-select' : 'submit-report'} onClick={handleSubmit}>
              Submit Report
            </div>
          </>
          :
          <ItsSpamPopup />
      }
    </>
  )
}

