import { AiOutlineCopyright } from "react-icons/ai";

import { BUSINESS_NAME } from "../utils/constants";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div id="Footer">
    <div className="pt-20 pb-10 flex lg:flex-row flex-col items-center lg:gap-20 gap-10 lg:justify-center flex-wrap mx-5">
                {/* pt-20 pb-10 flex lg:flex-row flex-col items-center lg:gap-20 gap-10 lg:justify-center flex-wrap mx-5 */}
      <img
        src={logo}
        alt={BUSINESS_NAME}
        title={BUSINESS_NAME}
        className="w-22 rounded-full object-cover bg-[#FFEFCD]"
      />

      <div>
        <h3 className="text-[#FFEFCD] font-semibold text-xl pb-2">{BUSINESS_NAME}</h3>
        
        <p className="text-[#A58E74] text-sm">Creating beautiful spaces that
          <br />inspire and transform lives
          <br />through thoughtful design.
        </p>
      </div>

      <div className="flex md:gap-20 gap-10 md:flex-row flex-col">
        <div>
          <h3 className="text-[#FFEFCD] font-semibold text-md pb-2">Services</h3>
          <ul className="text-[#A58E74] flex flex-col gap-2 text-sm">
            <li>Residential Design</li>
            <li>Commercial Spaces</li>
            <li>Consultation</li>
            <li>Space Planning</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#FFEFCD] font-semibold text-md pb-2">Quick Links</h3>
          <ul className="text-[#A58E74] flex flex-col gap-2 text-sm">
            <a href="#portfolio" className="hover:text-[#a18955]">Portfolio</a>
            <a href="#about" className="hover:text-[#a18955]">About</a>
            <a href="#reviews" className="hover:text-[#a18955]">Reviews</a>
            <a href="#contact" className="hover:text-[#a18955]">Contact</a>
          </ul>
        </div>

        <div>
          <h3 className="text-[#FFEFCD] font-semibold text-md pb-2">Contact</h3>
          <ul className="text-[#A58E74] flex flex-col gap-2 text-sm flex-wrap">
            <li>+91-9036925738</li>
            <li>ardesignbuild03@gmail.com</li>
            <li>Brindavan Colony, <br/> Toli Chowki, Hyderabad
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div className="border-t border-[#5b5e45] my-4 mx-10"></div>

    {/* copyright */}
    <div className="flex items-center gap-1 justify-center text-[#A58E74] pb-10 pt-5">
      <span><AiOutlineCopyright /></span>
      <p className="text-sm flex flex-wrap">2026 {BUSINESS_NAME}. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer;