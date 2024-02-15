import React, { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { BlockContext } from './context/CreateContext';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SuggestConatiner } from './pages/MainContent/InstaHome/Suggest/SuggestConatiner';
import { MainPage } from './pages/MainContent/MainPage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { StatusPage } from './pages/MainContent/StatusPage/StatusPage';
import { ProfilePage } from './pages/MainContent/ProfilePage/ProfilePage';
import { ExplorePage } from './pages/MainContent/ExplorePage/ExplorePage';
import { ReelsPage } from './pages/MainContent/ReelsPage/ReelsPage';
import { AudioPage } from './pages/MainContent/AudioPage/AudioPage';
import { MessagePage } from './pages/MainContent/MessagePage/MessagePage';
import PrivateRoute from './PrivateRoute';
import { SettingPage } from './pages/MainContent/SettingPage/SettingPage';
function RouterPage() {
    const [blockedDisplay, setBlockedDisplay] = useState(false);
    const isAuthenticated = true;
    return (
        <>
            <BrowserRouter>
                <BlockContext.Provider value={setBlockedDisplay}>

                    <Routes>
                        


                        <Route path="/login" element={<LoginPage />} />
                        {/* HomePage Route */}

                        <Route path="/" element={ <>
                            <HomePage />
                            {/* <PrivateRoute/> */}
                            </>  } >
                        {/* <Route path="/" element={<HomePage />}> */}

                            <Route index element={<MainPage />} />
                            {/* <Route path="/" element={<HomePage />} /> */}
                            <Route path="/people" element={<SuggestConatiner />} />
                            <Route path="/*" element={<PageNotFound />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/explore" element={<ExplorePage />} />
                            <Route path="/reels" element={<ReelsPage />} />
                            <Route path="/audio" element={<AudioPage />} />
                            <Route path="/message" element={<MessagePage />} />
                            <Route path="/setting" element={<SettingPage />} />
                        </Route>


                        {/* status route */}

                        <Route path="/status" element={
                            <StatusPage />
                        } />

                    </Routes>


                    {blockedDisplay && (
                        <div className='bottom-text'>
                            Blocked
                        </div>
                    )}
                </BlockContext.Provider>

            </BrowserRouter>
        </>
    )
}
export default RouterPage;

