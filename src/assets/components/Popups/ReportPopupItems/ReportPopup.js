import React, { useState } from 'react'
import { ItsSpamPopup } from './ItsSpam/ItsSpamPopup';
import { ReportPopupList } from './CheckboxPopupLists/CheckBoxPopupList';
import "../ReportPopupItems/_reportpopup.scss"
import { ReportHeading } from './ReportHeading';
import { ReportItems } from './ReportItems';
import { ReportPopupClose } from '../../../../context/CreateContext';
import { hatespeech, nudity ,voilence,illegalsale} from '../../../../database/reporttxt';

const PopupTypes = {
  ITSSPAM: 'itsspam',
  NUDITY: 'nudity',
  HATESPEECH: 'hatespeech',
  VOILENCE: 'voilence',
  ILLEGALSALE: 'illegalsale',
  BULLING: 'bulling',
  VIOLATION: 'violation',
  SUICIDE: 'Suicide',
  DISORDERS: 'disorders',
  SCAM: 'SCAM',
  FALSEINFO: 'falseinfo',
  DONTLIKE: 'dontlike',
};
export const ReportPopup = () => {
  const [popupType, setPopupType] = useState(null);

  const [reportList, setReportList] = useState({
    ITSSPAM: ['itsspam', 'It\'s spam'],
    NUDITY: ['nudity', 'Nudity or sexual activity'],
    HATESPEECH: ['hatespeech', 'Hate speech or symbols'],
    VOILENCE: ['voilence', 'Violence or dangerous organisations'],
    ILLEGALSALE: ['illegalsale', 'Sale of illegal or regulated goods'],
    BULLING: ['bulling', 'Bullying or harassment'],
    VIOLATION: ['violation', 'Intellectual property violation'],
    SUICIDE: ['Suicide', ' Suicide or self-injury'],
    DISORDERS: ['disorders', ' Eating disorders'],
    SCAM: ['SCAM', 'Scam or fraud'],
    FALSEINFO: ['falseinfo', 'False information'],
    DONTLIKE: ['dontlike', 'I just don\'t like it'],
  })
  const openPopup = (type) => {
    setPopupType(type);
    document.body.style.overflow = 'hidden';
  };
  const closePopup = () => {
    setPopupType(null);
    document.body.style.overflow = 'hidden';
  };
  const handleReportItems = (reportValue) => {
    openPopup(reportValue)
  };
  const renderPopup = () => {
    switch (popupType) {
      case PopupTypes.ITSSPAM:
        return <ItsSpamPopup />
      case PopupTypes.NUDITY:
        return <ReportPopupList popupType={nudity} />
      case PopupTypes.HATESPEECH:
        return <ReportPopupList popupType={hatespeech} popupname={"hatespeech"} />
      case PopupTypes.VOILENCE: 
        return <ReportPopupList popupType={voilence} />
      case PopupTypes.ILLEGALSALE: 
        return <ReportPopupList popupType={illegalsale}/>
        case PopupTypes.SCAM: 
        return <ItsSpamPopup />
      case PopupTypes.DONTLIKE: 
        return <ItsSpamPopup />

      default:
        return null;
    }
  };
  return (
    <>
      <ReportPopupClose.Provider value={{ popupType, setPopupType }}>
        {!popupType &&
          <>
            <ReportHeading />
            <ReportItems reportList={reportList} handleReportItems={handleReportItems} />
          </>
        }
        {renderPopup()}
      </ReportPopupClose.Provider>
    </>
  );
};


