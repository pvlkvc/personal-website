import "./css/App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";

export default function App() {
  return (
    <>
      <div className="row">
        <Navbar />
        <div className="main column">
          <Home />
          <About />
          <Portfolio />
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
