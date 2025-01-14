import { Link } from "react-scroll";

export default function HamburgerMenu({ isOpen, toggleMenu }) {
  return (
    <>
      <div
        className="column hamburger-wrapper"
        style={{ height: isOpen ? `400px` : `0` }}
      >
        <div onClick={toggleMenu} className="column-centered hamburger-button">
          <img src="assets/icons/menu.svg" />
        </div>
        <Link
          to="home"
          smooth
          duration={400}
          className="column-centered hamburger-button"
        >
          <img src="assets/icons/menu.svg" />
        </Link>
        <Link
          to="about"
          smooth
          duration={400}
          className="column-centered hamburger-button"
        >
          <img src="assets/icons/menu.svg" />
        </Link>
        <Link
          to="portfolio"
          smooth
          duration={400}
          className="column-centered hamburger-button"
        >
          <img src="assets/icons/menu.svg" />
        </Link>
      </div>
    </>
  );
}
