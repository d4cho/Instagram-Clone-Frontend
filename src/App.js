import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppBarContainer from './components/organisms/AppBarContainer';
import LandingPage from './components/pages/LandingPage';
import { UserContextProvider } from './context/UserContext';
import { PostContextProvider } from './context/PostContext';

function App() {
    return (
        <UserContextProvider>
            <PostContextProvider>
                <div className='App'>
                    <AppBarContainer />
                    <Routes>
                        <Route path='/' element={<LandingPage />}>
                            <Route path=':userName' element={<LandingPage />} />
                        </Route>
                    </Routes>
                </div>
            </PostContextProvider>
        </UserContextProvider>
    );
}

export default App;
