import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppBarContainer from './components/organisms/AppBarContainer';
import LandingPage from './components/pages/LandingPage';

function App() {
    return (
        <div className='App'>
            <AppBarContainer />
            <Routes>
                <Route path='/' element={<LandingPage />} />
            </Routes>
        </div>
    );
}

export default App;
