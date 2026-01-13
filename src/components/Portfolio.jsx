import bedroom from "../assets/bedroom.png"
import LivingRoom1 from "../assets/LivingRoom1.jpg"
import kitchen from "../assets/kitchen.jpg"
import DiningRoom from "../assets/DiningRoom.png"
import GuestBedroom from "../assets/GuestBedroom.jpg"
import jewelleryshop from "../assets/jewelleryshop.png"


const Portfolio = () => {
  return (
    <div className="pt-40">
      <div className="text-center pb-10">
        <h2 className="text-4xl font-bold mb-4 text-[#FFEFCD]">Our Portfolio</h2>
        <p className="text-[#A58E74] text-lg">
          Explore our curated collection of interior design projects that showcase our
          <br /> commitment to excellence and attention to detail.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-10 mx-32">
        <div>
          <img src={LivingRoom1} alt="Living Room" className="w-96 h-60 rounded-lg object-cover"/>
          <h2 className="pt-3 pb-1 font-semibold text-lg text-[#FFEFCD]">Modern Living Space</h2>
          <p className="text-[#A58E74] text-sm">Contemporary design with clean lines and <br /> warm accents</p>
        </div>

        <div>
          <img src={bedroom} alt="Bedroom" className="w-96 h-60 rounded-lg" />
          <h2 className="pt-3 pb-1 font-semibold text-lg text-[#FFEFCD]">Serene Bedroom</h2>
          <p className="text-[#A58E74] text-sm">Peaceful retreat with natural materials and soft <br /> textures</p>
        </div>

        <div>
          <img src={kitchen} alt="Kitchen" className="w-96 h-60 rounded-lg object-cover"/>
          <h2 className="pt-3 pb-1 font-semibold text-lg text-[#FFEFCD]">Gourmet Kitchen</h2>
          <p className="text-[#A58E74] text-sm">Functional elegance meets culinary inspiration</p>
        </div>

        <div>
          <img src={DiningRoom} alt="Dining Room" className="w-96 h-60 rounded-lg object-cover"/>
          <h2 className="pt-3 pb-1 font-semibold text-lg text-[#FFEFCD]">Dining Room</h2>
          <p className="text-[#A58E74] text-sm">Sophisticated space for memorable gatherings</p>
        </div>

        <div>
          <img src={GuestBedroom} alt="Dining Room" className="w-96 h-60 rounded-lg object-cover"/>
          <h2 className="pt-3 pb-1 font-semibold text-lg text-[#FFEFCD]">Guest Room</h2>
          <p className="text-[#A58E74] text-sm">Comfortable retreat designed for restful stays</p>
        </div>

        <div>
          <img src={jewelleryshop} alt="Jewellery Shop" className="w-96 h-60 rounded-lg object-cover"/>
          <h2 className="pt-3 pb-1 font-semibold text-lg text-[#FFEFCD]">Jewellery Shop</h2>
          <p className="text-[#A58E74] text-sm">Timeless elegance crafted to shine</p>
        </div>
      </div>

      <div className="flex justify-center pt-12">
        <button className="px-12 py-3 rounded-lg cursor-pointer bg-[#E09132] text-[#424530] font-semibold">View Projects</button>
      </div>

    </div>
  )
}

export default Portfolio;