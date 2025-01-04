import { Link } from "react-scroll";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="main-vertical side">
        <div className="column">
          <div className="side-logo-container">
            <div className="side-logo-textbox">
              <h1 className="side-logo-text">
                A<span className="text-highlighted">P</span>
              </h1>
            </div>
          </div>

          <ul>
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

          <p className="side-copyright">© 2024 Anna Pawlukiewicz </p>
        </div>
      </div>
    </>
  );
}
