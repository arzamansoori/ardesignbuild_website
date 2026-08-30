import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";

import logo from "../assets/logo.png";
import { BUSINESS_NAME } from "../utils/constants";

const Header = ({ backLink }) => {
  const [openHamburger, setOpenHamburger] = useState(false);
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenHamburger(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    setOpenHamburger(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-surface">
      <div className="mx-auto px-4 sm:px-6 lg:px-16 py-3 flex justify-between items-center text-cream">
        <Link to="/#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt={BUSINESS_NAME}
            title={BUSINESS_NAME}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="40"
            height="40"
            className="w-10 rounded-full object-cover bg-cream"
          />

          <p className="font-bold text-xl sm:text-2xl">{BUSINESS_NAME}</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-7 text-lg">
          <Link to="/#home" className="nav-link">
            Home
          </Link>
          <Link to="/#about" className="nav-link">
            About
          </Link>
          <Link to="/#projects" className="nav-link">
            Projects
          </Link>
          <Link to="/#gallery" className="nav-link">
            Gallery
          </Link>
          <Link to="/#reviews" className="nav-link">
            Reviews
          </Link>
          <Link to="/#contact" className="nav-link">
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="relative lg:hidden" ref={menuRef}>
          <button
            onClick={() => setOpenHamburger(!openHamburger)}
            className="text-2xl"
          >
            ☰
          </button>

          {/* Dropdown */}
          {openHamburger && (
            <div className="absolute right-0 mt-3 w-40 bg-surface border border-line rounded-lg shadow-lg flex flex-col text-sm gap-4 p-4">
              <Link to="/#home" onClick={handleClose} className="nav-link">
                Home
              </Link>
              <Link to="/#about" onClick={handleClose} className="nav-link">
                About
              </Link>
              <Link to="/#projects" onClick={handleClose} className="nav-link">
                Projects
              </Link>
              <Link to="/#gallery" onClick={handleClose} className="nav-link">
                Gallery
              </Link>
              <Link to="/#reviews" onClick={handleClose} className="nav-link">
                Reviews
              </Link>
              <Link to="/#contact" onClick={handleClose} className="nav-link">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-line"></div>

      {backLink && (
        <>
          <Link to={backLink.to} className="back-link">
            <FaChevronLeft />
            <span>{backLink.label}</span>
          </Link>

          <div className="border-t border-line"></div>
        </>
      )}
    </div>
  );
};

export default Header;
