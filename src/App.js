import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppBarContainer from './components/organisms/AppBarContainer';
import LandingPage from './components/views/LandingPage';
import { UserContextProvider } from './context/UserContext';
import { PostContextProvider } from './context/PostContext';
import UserPage from './components/views/UserPage';

function App() {
    return (
        <UserContextProvider>
            <PostContextProvider>
                <div className='App'>
                    <AppBarContainer />
                    <Routes>
                        <Route path='/' element={<LandingPage />} />
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
    );
}

export default App;
