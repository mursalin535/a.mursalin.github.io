import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import TargetCursor from "./components/ui/TargerCursor" 

// import OtherPage from './components/OtherPage'; // for future routes

import './App.css';

function App() {
  return (
    <>
       <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      >
        <Outlet />
      </TargetCursor>
    </>
  );
}

export default App;
