import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import { PHONE_NUMBER, EMAIL, INSTAGRAM_URL, LINKEDIN_URL, BUSINESS_NAME } from "../utils/constants";

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

    const to = EMAIL
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `Hi ${BUSINESS_NAME} Studio,

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
      <div className="section-top mb-20">

        <div className="text-center">
          <h1 className="pb-2 text-4xl font-semibold text-cream">Get In Touch</h1>
          <p className="text-lg text-muted mx-3">Ready to transform your space? Let's discuss your vision</p>
        </div>

        <div className="mt-10 flex lg:gap-40 gap-10 justify-center flex-wrap-reverse mx-4">

          {/* Contact Information */}
          <div className="">
            <h3 className="text-cream font-semibold text-2xl pb-4">Contact Information</h3>

            <div className="pb-10 flex flex-col gap-4">
              {/* phone */}
              <div className="flex items-center gap-3">
                <div className="text-accent">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-cream">Phone</p>
                  <p className="text-muted">{PHONE_NUMBER}</p>
                </div>
              </div>

              {/* email */}
              <div className="flex items-center gap-3">
                <div className="text-accent text-xl">
                  <MdEmail />
                </div>
                <div>
                  <p className="text-cream">Email</p>
                  <p className="text-muted">{EMAIL}</p>
                </div>
              </div>

              {/* address */}
              <div className="flex items-center gap-3">
                <div className="text-accent text-2xl">
                  <MdLocationOn />
                </div>
                <div>
                  <p className="text-cream">Address</p>
                  <p className="text-muted">Brindavan Colony, Gate 1, <br/> Toli Chowki, Hyderabad</p>
                </div>
              </div>

            </div>

            <div>
              <p className="text-cream font-semibold text-lg pb-4">Follow us</p>
              <div className="flex gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaInstagram />
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Message form */}
          <div className="border border-line rounded-xl p-6 w-96">
            <h3 className="text-cream text-2xl font-semibold pb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
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
                  className="input-field"
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
                  className="input-field"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-2 py-2 bg-accent text-surface font-medium rounded-lg cursor-pointer">
                  Send Message
              </button>
            </form>
          </div>
        </div>

      </div>

      <div className="border border-line"></div>
    </div>
  )
}

export default ContactSection;
