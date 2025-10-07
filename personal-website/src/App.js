import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

import AboutMePage from './pages/AboutMePage';
import ScriptsPage from './pages/ScriptsPage';
import SoundsPage from './pages/SoundsPage';
import SightsPage from './pages/SightsPage';
import OtherStuffPage from './pages/OtherStuffPage';
import PaperDatabasePage from './pages/PaperDatabasePage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className='main-content'>
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          timeout={350}
          classNames="page"
          unmountOnExit
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/me" element={<AboutMePage />} />
            <Route path="/scripts" element={<ScriptsPage />} />
            <Route path="/sounds" element={<SoundsPage />} />
            <Route path="/sights" element={<SightsPage />} />
            <Route path="/other" element={<OtherStuffPage />} />
            <Route path="/papers" element={<PaperDatabasePage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
