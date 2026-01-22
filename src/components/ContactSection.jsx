import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <>
    <div className="pt-40 mb-20">

      <div className="text-center">
        <h1 className="pb-2 text-4xl font-semibold text-[#FFEFCD]">Get In Touch</h1>
        <p className="text-lg text-[#A58E74]">Ready to transform your space? Let's discuss your vision</p>
      </div>

      <div className="mt-10 flex gap-40 justify-center">

        {/* Contact Information */}
        <div className="">
          <h3 className="text-[#FFEFCD] font-semibold text-2xl pb-4">Contact Information</h3>

          <div className="pb-10 flex flex-col gap-4">
            {/* phone */}
            <div className="flex items-center gap-3">
              <div className="text-[#E09132]">
                <FaPhone />
              </div>
              <div>
                <p className="text-[#FFEFCD]">Phone</p>
                <p className="text-[#A58E74]">+91-9036925738</p>
              </div>
            </div>

            {/* email */}
            <div className="flex items-center gap-3">
              <div className="text-[#E09132] text-xl">
                <MdEmail />
              </div>
              <div>
                <p className="text-[#FFEFCD]">Email</p>
                <p className="text-[#A58E74]">ardesignbuild03@gmail.com</p>
              </div>
            </div>

            {/* address */}
            <div className="flex items-center gap-3">
              <div className="text-[#E09132] text-2xl">
                <MdLocationOn />
              </div>
              <div>
                <p className="text-[#FFEFCD]">Address</p>
                <p className="text-[#A58E74]">FM Ali's, Tolli Chowki,<br/> Hyderabad</p>
              </div>
            </div>

          </div>

          <div>
            <p className="text-[#FFEFCD] font-semibold text-lg pb-4">Follow us</p>
            <div className="flex gap-3">
              <a
                href= "https://www.instagram.com/ardesign_build03/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#E09132] cursor-pointer inline-flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/arshi-farheen-mansoori-347486109/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#E09132] cursor-pointer inline-flex items-center justify-center"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Message form */}
        <div className="border border-[#5b5e45] rounded-xl p-6 w-96">
          <h3 className="text-[#FFEFCD] text-2xl font-semibold pb-6">Send a Message</h3>
          <form className="flex flex-col gap-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="border border-[#5b5e45] px-3 py-2 rounded-lg text-[#FFEFCD] w-full 
                  focus:outline-none focus:ring-0 focus:border-[#FFEFCD]"
                required
              />
            </div>

             <div>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="border border-[#5b5e45] px-3 py-2 rounded-lg text-[#FFEFCD] w-full 
                  focus:outline-none focus:ring-0 focus:border-[#FFEFCD]"
                required
              />
            </div>

            <div>
              <input
                type="text"
                id="projectDetails"
                name="projectDetails"
                placeholder="Tell us about your project..."
                className="border border-[#5b5e45] px-3 py-2 rounded-lg text-[#FFEFCD] w-full 
                  focus:outline-none focus:ring-0 focus:border-[#FFEFCD]"
                required
              />
            </div>

            <button className="px-2 py-2 bg-[#E09132] text-[#424530] font-medium rounded-lg cursor-pointer">Send Message</button>
          </form>
        </div>
      </div>

    </div>

    <div className="border border-[#5b5e45]"></div>
    </>
  )
}

export default ContactSection;
