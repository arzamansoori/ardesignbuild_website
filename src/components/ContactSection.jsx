import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: ""
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const to = "ardesignbuild03@gmail.com"
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `Hi AR Design & Build Studio,
    
Project Details: ${formData.projectDetails}
      
Thanks,
${formData.name}`;

      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        to
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.open(gmailLink, "_blank");
    };

  return (
    <div id="contact">
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="border border-[#5b5e45] px-3 py-2 rounded-lg text-[#FFEFCD] w-full 
                  focus:outline-none focus:ring-0 focus:border-[#FFEFCD]"
                required
              />
            </div>

            <button 
              type="submit"
              className="px-2 py-2 bg-[#E09132] text-[#424530] font-medium rounded-lg cursor-pointer">
                Send Message
            </button>
          </form>
        </div>
      </div>

    </div>

    <div className="border border-[#5b5e45]"></div>
    </div>
  )
}

export default ContactSection;
