import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

import AboutMePage from './pages/AboutMePage';
import ScriptsPage from './pages/ScriptsPage';
import SoundsPage from './pages/SoundsPage';
import SightsPage from './pages/SightsPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/me" element={<AboutMePage />} />
            <Route path="/scripts" element={<ScriptsPage />} />
            <Route path="/sounds" element={<SoundsPage />} />
            <Route path="/sights" element={<SightsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
