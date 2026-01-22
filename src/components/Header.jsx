
const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#424530]">
    <div className="flex justify-between pt-10 pb-5 px-16 text-[#FFEFCD]">
      <div className="">
        <p className="font-bold text-2xl">ARDesign&Build</p>
      </div>

      <div className="flex gap-7 text-lg">
        <a href="#home" className="hover:text-[#A58E74]">Home</a>
        <a href="#portfolio" className="hover:text-[#A58E74]">Portfolio</a>
        <a href="#reviews" className="hover:text-[#A58E74]">Reviews</a>
        <a href="#contact" className="hover:text-[#A58E74]">Contact</a>
      </div>
    </div>

    <div className="border border-[#5b5e45]"></div>
    </div>
  )
}

export default Header;