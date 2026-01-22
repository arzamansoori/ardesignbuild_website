import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="Footer">
    <div className="pt-20 pb-10 flex gap-28 justify-center">

      <div>
        <h3 className="text-[#FFEFCD] font-semibold text-xl pb-2">ARDesign&Build</h3>
        <p className="text-[#A58E74]">Creating beautiful spaces that
          <br />inspire and transform lives
          <br />through thoughtful design.
        </p>
      </div>

      <div>
        <h3 className="text-[#FFEFCD] font-semibold text-md pb-2">Services</h3>
        <ul className="text-[#A58E74] flex flex-col gap-2">
          <li>Residential Design</li>
          <li>Commercial Spaces</li>
          <li>Consultation</li>
          <li>Space Planning</li>
        </ul>
      </div>

      <div>
        <h3 className="text-[#FFEFCD] font-semibold text-md pb-2">Quick Links</h3>
        <ul className="text-[#A58E74] flex flex-col gap-2">
          <li>Portfolio</li>
          <li>About</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h3 className="text-[#FFEFCD] font-semibold text-md pb-2">Contact</h3>
        <ul className="text-[#A58E74] flex flex-col gap-2">
          <li>+91-9036925738</li>
          <li>ardesignbuild03@gmail.com</li>
          <li>FM Ali's, Tolli Chowki,
            <br />Hyderabad
          </li>
        </ul>
      </div>

    </div>

    <div className="border border-[#5b5e45] mx-50 mb-4"></div>

    {/* copyright */}
    <div className="flex items-center gap-1 justify-center text-[#A58E74] pb-10 pt-5">
      <span><AiOutlineCopyright /></span>
      <p>2026 ARDesign&Build. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer;