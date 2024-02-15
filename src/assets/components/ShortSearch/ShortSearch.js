import React, { useState } from 'react'
import "./shortSearch.scss"
import { UserDetails } from '../../../database/db';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setSearchUserData, removeSearchUserData, clearAllSearchUserData } from '../../../database/action';
import { useSelector } from 'react-redux';

export const ShortSearch = ({ setShortSidebar }) => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const [previousValue, setPreviousValue] = useState(null);

    const user = useSelector((state) => state.searchUserData);
    const searchUserData = user ? user : [];

    const searchQuery = (e) => {
        setSearchTerm(e.target.value);
        setPreviousValue(searchUserData);
    }
    const clearSearchQuery=(e)=>{
        setSearchTerm("");
    }
    const filteredUsers = UserDetails.filter((user) =>
        `${user.username} ${user.name}`.toLowerCase().includes(
            searchTerm.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '')
        )
    );


    const navigateProfilePage = (selectValue) => {
        setShortSidebar(false)
        navigate("/profile")
        dispatch(setSearchUserData({ current: selectValue, previous: previousValue }));
        setSearchTerm('');
    }

    const navigateSearchProfilePage = (selectValue) => {
        setShortSidebar(false)
        navigate("/profile")
    }
    const removeSearchProfilePage = (index) => {
        dispatch(removeSearchUserData(index));
    };
    const clearAllSearchData = () => {
        dispatch(clearAllSearchUserData());
    };

    return (
        <div className='short-side-search'>
            <div className='search-head'>
                <p className='search-txt'>Search</p>
                <div className='search-input-container'>
                    {
                        searchTerm.length>0 &&
                        <FontAwesomeIcon  onClick={clearSearchQuery} className="circle-xmark-icon" icon={faCircleXmark} style={{ color: "#909192", }} />
                    }
                    <input type='text' className='search-input' placeholder='Search' onChange={searchQuery} value={searchTerm} />
                </div>
            </div>
            <div className='search-container'>
                {
                    !searchTerm.length > 0 ?
                        <>
                            <div className='recent-div'>
                                <p className='recent'>Recent</p>
                                {
                                    searchUserData.length>0  &&
                                <p className='clearAll' onClick={clearAllSearchData}>Clear All</p>
                                }
                            </div>
                            {
                                !searchUserData.length > 0 ?
                                    <div className='no-recent-search'>
                                        No Recent Search
                                    </div>
                                    :
                                    <>
                                        {
                                            [...searchUserData].reverse().map((data, index) => (
                                                <div className='user-account side-search-account' key={index} >
                                                    <div className="useraccount-lists" onClick={() => { navigateSearchProfilePage(data.current) }}>
                                                        <img className="useraccount-img" src={data.current.img} height={44} width={44} />
                                                        <div className='useraccount-details'>
                                                            <p className='username'>{data.current.username}</p>
                                                            <p className='name'>{data.current.name}</p>
                                                        </div>
                                                    </div >
                                                    <div onClick={() => { removeSearchProfilePage(searchUserData.length - 1 - index) }}>
                                                        <FontAwesomeIcon icon={faXmark} size='lg' style={{ color: "gray" }} />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </>
                            }
                        </>
                        :
                        <>
                            {
                                filteredUsers.map((item, index) => {
                                    return (
                                        <div className='user-account side-search-account' key={index} onClick={() => { navigateProfilePage(item) }}>
                                            <div className="useraccount-lists">
                                                <img className="useraccount-img" src={item.img} height={44} width={44} />
                                                <div className='useraccount-details'>
                                                    <p className='username'>{item.username}</p>
                                                    <p className='name'>{item.name}</p>
                                                </div>
                                            </div >
                                        </div>
                                    )
                                })
                            }
                        </>
                }
            </div>
        </div>
    )
}
