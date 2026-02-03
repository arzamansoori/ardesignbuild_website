import { useState, useRef, useEffect } from "react";

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
    <div className="sticky top-0 z-50 bg-[#424530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-6 pb-4 flex justify-between items-center text-[#FFEFCD]">

        <p className="font-bold text-xl sm:text-2xl">
          ARDesign&Build
        </p>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-7 text-lg">
          <a href="#home" className="hover:text-[#A58E74] transition">Home</a>
          <a href="#portfolio" className="hover:text-[#A58E74] transition">Portfolio</a>
          <a href="#reviews" className="hover:text-[#A58E74] transition">Reviews</a>
          <a href="#contact" className="hover:text-[#A58E74] transition">Contact</a>
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
            <div className="absolute right-0 mt-3 w-40 bg-[#424530] border border-[#5b5e45] rounded-lg shadow-lg flex flex-col text-sm gap-4 p-4">
              <a href="#home" onClick={handleClose} className="hover:text-[#A58E74] transition">Home</a>
              <a href="#portfolio" onClick={handleClose} className="hover:text-[#A58E74] transition">Portfolio</a>
              <a href="#reviews" onClick={handleClose} className="hover:text-[#A58E74] transition">Reviews</a>
              <a href="#contact" onClick={handleClose} className="hover:text-[#A58E74] transition">Contact</a>
            </div>
          )}
        </div>

      </div>

      <div className="border-t border-[#5b5e45]"></div>
    </div>
  );
};

export default Header;
