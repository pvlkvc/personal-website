import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../css/Navbar.css";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 992);
  const [hideMenuTransition, setHideMenuTransition] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      const isLargeSized = window.innerWidth > 992;
      setHideMenuTransition(true);
      setIsLargeScreen(isLargeSized);
      setIsMenuOpen(isLargeSized);
      setTimeout(() => setHideMenuTransition(false), 700);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <div className="column navbar large-navbar medium-small-navbar">
        <div className="profile-image"></div>

        <HamburgerMenu
          isOpen={isMenuOpen || isLargeScreen}
          toggleMenu={toggleMenu}
          hideTransition={hideMenuTransition}
        />
      </div>
    </>
  );
}
