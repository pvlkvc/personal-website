import { useState } from "react";
import { Link } from "react-scroll";
import "../css/Navbar.css";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="column navbar large-navbar medium-small-navbar">
        <div className="column navbar-wrapper">
          <div className="side-image-container"></div>
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
        </div>
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </>
  );
}
