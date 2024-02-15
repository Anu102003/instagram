import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faSpinner } from '@fortawesome/free-solid-svg-icons';

export const ReportItems = ({ reportList, handleReportItems }) => {
    const [reportLoadingStates, setReportLoadingStates] = useState(
        Object.fromEntries(Object.keys(reportList).map((key) => [key, false]))
    );

    const handleReportList = (label, key) => {
        setReportLoadingStates((prevLoadingStates) => ({
            ...prevLoadingStates,
            [key]: true,
        }));
        setTimeout(() => {
            setReportLoadingStates((prevLoadingStates) => ({
                ...prevLoadingStates,
                [key]: false,
            }));
            handleReportItems(label);
        }, 500);
    };

    return (
        <>
        <div className='report-contents'> 
            {Object.entries(reportList).map(([key, [label, value]]) => (
                <div
                    key={key}
                    className="report-content-items"
                    onClick={() => {
                        handleReportList(label, key);
                    }}
                >
                    <p className="report-content-text">{value}</p>
                    <div className="report-arrow-load-icon">
                        {reportLoadingStates[key] ? (
                            <FontAwesomeIcon icon={faSpinner} spin />
                        ) : (
                            <FontAwesomeIcon icon={faAngleRight} />
                        )}
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};
