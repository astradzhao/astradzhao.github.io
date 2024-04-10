import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

import AboutMePage from './pages/AboutMePage';
import MachinesPage from './pages/MachinesPage';
import SoundsPage from './pages/SoundsPage';
import ImagesPage from './pages/ImagesPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App' style={{ display: 'flex', height: '100vh' }}>
        <NavBar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/me" element={<AboutMePage />} />
            <Route path="/machines" element={<MachinesPage />} />
            <Route path="/sounds" element={<SoundsPage />} />
            <Route path="/images" element={<ImagesPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
