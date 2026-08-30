import { AiOutlineCopyright } from "react-icons/ai";
import { Link } from "react-router-dom";

import { BUSINESS_NAME, PHONE_NUMBER, EMAIL } from "../utils/constants";
import { getCurrentYear } from "../utils/date";
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
        loading="eager"
        fetchPriority="low"
        decoding="async"
        width="88"
        height="88"
        className="w-22 rounded-full object-cover bg-cream"
      />

      <div>
        <h3 className="text-cream font-semibold text-xl pb-2">{BUSINESS_NAME}</h3>

        <p className="text-muted text-sm">Creating beautiful spaces that
          <br />inspire and transform lives
          <br />through thoughtful design.
        </p>
      </div>

      <div className="flex md:gap-20 gap-10 md:flex-row flex-col">
        <div>
          <h3 className="text-cream font-semibold text-md pb-2">Services</h3>
          <ul className="text-muted flex flex-col gap-2 text-sm">
            <li>Residential Design</li>
            <li>Commercial Spaces</li>
            <li>Consultation</li>
            <li>Space Planning</li>
          </ul>
        </div>

        <div>
          <h3 className="text-cream font-semibold text-md pb-2">Quick Links</h3>
          <ul className="text-muted flex flex-col gap-2 text-sm">
            <Link to="/#portfolio" className="hover:text-muted-hover">Portfolio</Link>
            <Link to="/#about" className="hover:text-muted-hover">About</Link>
            <Link to="/#reviews" className="hover:text-muted-hover">Reviews</Link>
            <Link to="/#contact" className="hover:text-muted-hover">Contact</Link>
          </ul>
        </div>

        <div>
          <h3 className="text-cream font-semibold text-md pb-2">Contact</h3>
          <ul className="text-muted flex flex-col gap-2 text-sm flex-wrap">
            <li>{PHONE_NUMBER}</li>
            <li>{EMAIL}</li>
            <li>Brindavan Colony, <br/> Toli Chowki, Hyderabad
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div className="border-t border-line my-4 mx-10"></div>

    {/* copyright */}
    <div className="flex items-center gap-1 justify-center text-muted pb-10 pt-5">
      <span><AiOutlineCopyright /></span>
      <p className="text-sm flex flex-wrap">{getCurrentYear()} {BUSINESS_NAME}. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer;