import { ImageDesc } from "../utils/constants"

const Portfolio = () => {
  return (
    <div className="pt-25 md:pt-32 px-8" id="portfolio">
      
      <div className="text-center pb-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFEFCD]">
          Our Portfolio
        </h2>
        <p className="text-[#A58E74] text-base md:text-lg">
          Explore our curated collection of interior design projects that showcase our
          commitment to excellence and attention to detail.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {ImageDesc.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-xl mt-4">
            <img
              src={item.img}
              alt={item.title}
              title={item.title}
              className="w-full h-56 sm:h-60 object-cover 
                transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <h2 className="pt-3 pb-1 font-semibold text-lg text-[#FFEFCD]">
              {item.title}
            </h2>
            <p className="text-[#A58E74] text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-12">
        <button className="px-10 md:px-12 py-3 rounded-lg bg-[#E09132] 
          text-[#424530] font-semibold hover:opacity-90 transition">
          View Projects
        </button>
      </div>

    </div>
  )
}

export default Portfolio