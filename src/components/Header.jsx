import { useState, useRef, useEffect } from "react";

import logo from "../assets/logo.png"
import {BUSINESS_NAME} from "../utils/constants"

const Header = () => {
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
      <div className="mx-auto px-4 sm:px-6 lg:px-16 py-5 flex justify-between items-center text-cream">

        <div className="flex items-center gap-2">
           <img
              src={logo}
              alt={BUSINESS_NAME}
              title={BUSINESS_NAME}
              className="w-10 rounded-full object-cover bg-cream"
            />

            <p className="font-bold text-xl sm:text-2xl">
              {BUSINESS_NAME}
            </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-7 text-lg">
          <a href="#home" className="nav-link">Home</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#reviews" className="nav-link">Reviews</a>
          <a href="#contact" className="nav-link">Contact</a>
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
              <a href="#home" onClick={handleClose} className="nav-link">Home</a>
              <a href="#portfolio" onClick={handleClose} className="nav-link">Portfolio</a>
              <a href="#reviews" onClick={handleClose} className="nav-link">Reviews</a>
              <a href="#contact" onClick={handleClose} className="nav-link">Contact</a>
            </div>
          )}
        </div>

      </div>

      <div className="border-t border-line"></div>
    </div>
  );
};

export default Header;
