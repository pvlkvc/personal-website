import { Link } from "react-scroll";

export default function HamburgerMenu({ isOpen, toggleMenu, hideTransition }) {
  return (
    <>
      <div
        className={`column navbar-wrapper ${
          hideTransition ? "no-transition" : ""
        }`}
        style={{ height: isOpen ? `310px` : `0` }}
      >
        <div
          onClick={toggleMenu}
          className="row-centered hamburger-button menu-button"
        >
          <img src="assets/icons/menu.svg" />
        </div>
        <Link
          to="home"
          smooth
          duration={400}
          className="row-centered menu-button"
        >
          <img src="assets/icons/home.svg" />
        </Link>
        <Link
          to="about"
          smooth
          duration={400}
          className="row-centered menu-button"
        >
          <img src="assets/icons/about.svg" />
        </Link>
        <Link
          to="portfolio"
          smooth
          duration={400}
          className="row-centered menu-button"
        >
          <img src="assets/icons/portfolio.svg" />
        </Link>
      </div>
    </>
  );
}
