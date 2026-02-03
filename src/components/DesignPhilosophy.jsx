import { FaCheck } from "react-icons/fa6";
import LivingRoom from "../assets/LivingRoom.png"

const DesignPhilosophy = () => {
  return (
    <div className="pt-25 md:pt-30 px-10 flex justify-around items-center flex-wrap" id="about">

      <div>
        <p className="text-[#FFEFCD] pb-6 lg:pb-4 text-5xl lg:text-4xl text-center lg:text-start font-bold">About Our Design
          <br /> Philosophy
        </p>
        <p className="text-[#A58E74] text-center lg:text-start lg:text-lg pb-4 text-base">
          With over a decade of experience in interior design, we 
          <br />believe that every space should be a perfect blend of 
          <br />aesthetics and functionality. Our approach focuses on 
          <br />understanding your lifestyle, preferences, and needs to 
          <br />create spaces that truly feel like home.
        </p>

        <div className="">
          <div className="pb-3 flex items-center lg:justify-start justify-center gap-1.5">
            <span className="text-[#E09132]"><FaCheck /></span>
            <p className="text-[#FFEFCD]">Personalized Design Solutions</p>
          </div>

          <div className="pb-3 flex items-center lg:pl-0 pl-4 justify-center lg:justify-start gap-1.5">
            <span className="text-[#E09132]"><FaCheck /></span>
            <p className="text-[#FFEFCD]">Sustainable & Quality Materials</p>
          </div>

          <div className="pb-3 flex items-center pr-5 lg:pr-0 justify-center lg:justify-start gap-1.5">
            <span className="text-[#E09132]"><FaCheck /></span>
            <p className="text-[#FFEFCD]">Timely Project Completion</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg">
        <img 
          src={LivingRoom} 
          alt="Living Room"
          title="Living Room"  
          className="w-125 pt-6 rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        
      </div>

    </div>
  )
}

export default DesignPhilosophy;