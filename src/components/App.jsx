import "../css/App.css";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";

export default function App() {
  return (
    <>
      <div className="column">
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
