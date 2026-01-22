
const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#424530]">
    <div className="flex justify-between pt-10 pb-5 px-16 text-[#FFEFCD]">
      <div className="">
        <p className="font-bold text-2xl">ARDesign&Build</p>
      </div>

      <div className="flex gap-7 text-lg">
        <button>Home</button>
        <button>Portfolio</button>
        <button>Reviews</button>
        <button>Contact</button>
      </div>
    </div>

    <div className="border border-[#5b5e45]"></div>
    </div>
  )
}

export default Header;