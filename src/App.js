import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppBarContainer from './components/organisms/AppBarContainer';
import LandingPage from './components/pages/LandingPage';
import { UserContextProvider } from './context/UserContext';

function App() {
    return (
        <UserContextProvider>
            <div className='App'>
                <AppBarContainer />
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                </Routes>
                <Routes>
                    <Route path='/:userName' element={<LandingPage />} />
                </Routes>
            </div>
        </UserContextProvider>
    );
}

export default App;
