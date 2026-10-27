import React, { createRef, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
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
  // The entering and exiting pages are mounted at the same time, so each path needs its own ref.
  const nodeRefs = useRef(new Map());
  if (!nodeRefs.current.has(location.pathname)) {
    nodeRefs.current.set(location.pathname, createRef());
  }
  const nodeRef = nodeRefs.current.get(location.pathname);

  useEffect(() => {
    // Scroll body to top whenever location changes (body has overflow: auto in App.css)
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [location]);

  return (
    <div className='main-content'>
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={350}
          classNames="page"
          unmountOnExit
        >
          <div ref={nodeRef}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/me" element={<AboutMePage />} />
              <Route path="/scripts" element={<ScriptsPage />} />
              <Route path="/sounds" element={<SoundsPage />} />
              <Route path="/sights" element={<SightsPage />} />
              <Route path="/other" element={<OtherStuffPage />} />
              <Route path="/papers" element={<PaperDatabasePage />} />
            </Routes>
          </div>
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