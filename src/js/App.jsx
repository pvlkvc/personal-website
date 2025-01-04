import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../css/App.css'
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';

export default function App() {
  return (
    <>
        <div className="row">
          <Navbar />
          <div className='main column'>
            <Home />
            <About />
          </div>
          {/* <Router /> */}
        </div>

      {/*
      <div className="main">
        <div className="row main-row">
          <Router />
        </div>
      </div>
      */}
    </>
  );
}
