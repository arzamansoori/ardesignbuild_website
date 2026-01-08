
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <p className="font-bold">AR Design & Build</p>
      </div>

      <div className="flex gap-4">
        <button>Home</button>
        <button>Portfolio</button>
        <button>Reviews</button>
        <button>Contact</button>
      </div>
    </div>
  )
}

export default Header;