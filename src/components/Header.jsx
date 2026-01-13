
const Header = () => {
  return (
    <div className="">
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

    <div className="border border-[#FFEFCD]/20"></div>
    </div>
  )
}

export default Header;