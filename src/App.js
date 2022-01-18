import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppBarContainer from './components/organisms/AppBarContainer';
import LandingPage from './components/views/LandingPage';
import { UserContextProvider } from './context/UserContext';
import { PostContextProvider } from './context/PostContext';
import UserPage from './components/views/UserPage';
import { ApplicationContextProvider } from './context/ApplicationContext';
import CreateNewPost from './components/views/CreateNewPost';
import DiscardPostModal from './components/views/DiscardPostModal';
import LoginPage from './components/views/LoginPage';

function App() {
    return (
        <ApplicationContextProvider>
            <UserContextProvider>
                <PostContextProvider>
                    <div className='App'>
                        <AppBarContainer />
                        <DiscardPostModal />
                        <CreateNewPost />
                        <Routes>
                            <Route path='/' element={<LandingPage />} />
                            <Route path='/login' element={<LoginPage />} />
                            <Route path='/p/:postId' element={<LandingPage openModal={true} />} />
                            <Route path='/:userName' element={<UserPage />} />
                            <Route
                                path='/:userName/p/:postId'
                                element={<UserPage openModal={true} />}
                            />
                        </Routes>
                    </div>
                </PostContextProvider>
            </UserContextProvider>
        </ApplicationContextProvider>
    );
}

export default App;
