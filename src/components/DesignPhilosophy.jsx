import { FaCheck } from "react-icons/fa6";
import LivingRoom from "../assets/LivingRoom.jpg"

const DesignPhilosophy = () => {
  return (
    <div className="section-top px-10 flex justify-center xl:gap-50 gap-10 items-center flex-wrap" id="about">

      <div className="max-w-96">
        <p className="text-cream pb-6 lg:pb-4 text-5xl lg:text-4xl text-center lg:text-start font-bold">About Our Design
          <br /> Philosophy
        </p>
        <p className="text-muted text-center lg:text-start lg:text-lg pb-4 text-base">
          With over a decade of experience in interior design, we
          believe that every space should be a perfect blend of
          aesthetics and functionality. Our approach focuses on
          understanding your lifestyle, preferences, and needs to
          create spaces that truly feel like home.
        </p>

        <div className="">
          <div className="pb-3 flex items-center lg:justify-start justify-center gap-1.5">
            <span className="text-accent"><FaCheck /></span>
            <p className="text-cream">Personalized Design Solutions</p>
          </div>

          <div className="pb-3 flex items-center lg:pl-0 pl-4 justify-center lg:justify-start gap-1.5">
            <span className="text-accent"><FaCheck /></span>
            <p className="text-cream">Sustainable & Quality Materials</p>
          </div>

          <div className="pb-3 flex items-center pr-5 lg:pr-0 justify-center lg:justify-start gap-1.5">
            <span className="text-accent"><FaCheck /></span>
            <p className="text-cream">Timely Project Completion</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg">
        <img
          src={LivingRoom}
          alt="Living Room"
          title="Living Room"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1536"
          height="1024"
          className="w-125 pt-6 rounded-lg img-hover-zoom"
        />

      </div>

    </div>
  )
}

export default DesignPhilosophy;