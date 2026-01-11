import { FaCheck } from "react-icons/fa6";
import LivingRoom from "../assets/LivingRoom.png"

const DesignPhilosophy = () => {
  return (
    <div className="pt-44 px-10 flex justify-around items-center mb-30">

      <div>
        <p className="text-[#FFEFCD] pb-4 text-4xl font-bold">About Our Design
          <br /> Philosophy
        </p>
        <p className="text-[#A58E74] text-lg pb-4">
          With over a decade of experience in interior design, we 
          <br />believe that every space should be a perfect blend of 
          <br />aesthetics and functionality. Our approach focuses on 
          <br />understanding your lifestyle, preferences, and needs to 
          <br />create spaces that truly feel like home.
        </p>

        <div>
          <div className="pb-3 flex items-center gap-1.5">
            <span className="text-[#E09132]"><FaCheck /></span>
            <p className="text-[#FFEFCD]">Personalized Design Solutions</p>
          </div>

          <div className="pb-3 flex items-center gap-1.5">
            <span className="text-[#E09132]"><FaCheck /></span>
            <p className="text-[#FFEFCD]">Sustainable & Quality Materials</p>
          </div>

          <div className="pb-3 flex items-center gap-1.5">
            <span className="text-[#E09132]"><FaCheck /></span>
            <p className="text-[#FFEFCD]">Timely Project Completion</p>
          </div>
        </div>
      </div>

      <div>
        <img src={LivingRoom}   
          className="w-125 rounded-lg"/>
      </div>

    </div>
  )
}

export default DesignPhilosophy;