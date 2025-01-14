import { Link } from "react-scroll";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="column navbar large-navbar medium-small-navbar">
        <div className="side-image-container">
          {/*
          <h1 className="side-logo-text">
            A<span className="text-highlighted">P</span>
          </h1>
          */}
        </div>

        <ul className="column-centered side-menu-list">
          <li className="side-menu-item">
            <Link to="home" smooth duration={400}>
              home
            </Link>
          </li>
          <li className="side-menu-item">
            <Link to="about" smooth duration={400}>
              about me
            </Link>
          </li>
          <li className="side-menu-item">
            <Link to="portfolio" smooth duration={400}>
              fun stuff
            </Link>
          </li>
        </ul>

        <div></div>
      </div>
    </>
  );
}
