import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

import AboutMePage from './pages/AboutMePage';
import ScriptsPage from './pages/ScriptsPage';
import SoundsPage from './pages/SoundsPage';
import SightsPage from './pages/SightsPage';
import OtherStuffPage from './pages/OtherStuffPage';
import PaperDatabasePage from './pages/PaperDatabasePage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/me" element={<AboutMePage />} />
            <Route path="/scripts" element={<ScriptsPage />} />
            <Route path="/sounds" element={<SoundsPage />} />
            <Route path="/sights" element={<SightsPage />} />
            <Route path="/other" element={<OtherStuffPage />} />
            <Route path="/papers" element={<PaperDatabasePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
