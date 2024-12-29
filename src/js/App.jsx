import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../css/App.css'
import Navbar from './Navbar.jsx'

export default function App() {
  const [count, setCount] = useState(0)

  const Sections = {
    HOME: "Home",
    ABOUT: "About"
  }

  const renderSection = (sectionName) => {

  }

  return (
    <>
      <div className="main">
        <div className="row">
          <Navbar />
          <div id="body-area" className="main-vertical body-area"></div>
        </div>
      </div>

      {/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count + 10}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </>
  )
}
