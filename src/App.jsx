import "./css/App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="row">
        <Navbar />
        <div className="column main xlarge-main large-main medium-main">
          <Home />
          <About />
          <Portfolio />
          <Footer />
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
