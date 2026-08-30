import { useState } from "react";
import { FaPhone, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdContentCopy, MdCheck } from "react-icons/md";
import {
  PHONE_NUMBER,
  EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  WHATSAPP_LINK,
} from "../utils/constants";

const ContactSection = () => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (value, field) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  };

  return (
    <div id="contact">
      <div className="section-top mb-20">
        <div className="text-center">
          <h1 className="pb-2 text-4xl font-semibold text-cream">
            Get In Touch
          </h1>
          <p className="text-lg text-muted mx-3">
            Ready to transform your space? Let's discuss your vision
          </p>
        </div>

        <div className="mt-10 flex lg:gap-40 gap-10 justify-center items-end flex-wrap-reverse mx-4">
          {/* Contact Information */}
          <div className="">
            <h3 className="text-cream font-semibold text-2xl pb-4">
              Contact Information
            </h3>

            <div className="pb-10 flex flex-col gap-4">
              {/* phone */}
              <div className="flex items-center gap-3">
                <div className="text-accent">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-cream">Phone</p>
                  <div className="flex items-center gap-2">
                    <p className="text-muted">{PHONE_NUMBER}</p>
                    <button
                      type="button"
                      onClick={() => handleCopy(PHONE_NUMBER, "phone")}
                      className="text-muted hover:text-cream text-sm cursor-pointer"
                      aria-label="Copy phone number"
                    >
                      {copiedField === "phone" ? (
                        <MdCheck />
                      ) : (
                        <MdContentCopy />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* email */}
              <div className="flex items-center gap-3">
                <div className="text-accent text-xl">
                  <MdEmail />
                </div>
                <div>
                  <p className="text-cream">Email</p>
                  <div className="flex items-center gap-2">
                    <p className="text-muted">{EMAIL}</p>
                    <button
                      type="button"
                      onClick={() => handleCopy(EMAIL, "email")}
                      className="text-muted hover:text-cream text-sm cursor-pointer"
                      aria-label="Copy email address"
                    >
                      {copiedField === "email" ? (
                        <MdCheck />
                      ) : (
                        <MdContentCopy />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* address */}
              <div className="flex items-center gap-3">
                <div className="text-accent text-2xl">
                  <MdLocationOn />
                </div>
                <div>
                  <p className="text-cream">Address</p>
                  <p className="text-muted">
                    Brindavan Colony, Gate 1, <br /> Toli Chowki, Hyderabad
                  </p>
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

          {/* WhatsApp CTA */}
          <div className="border border-line rounded-xl p-6 w-96 flex flex-col items-center text-center gap-6">
            <h3 className="text-cream text-2xl font-semibold">
              Send a Message
            </h3>
            <p className="text-muted">
              Chat with us directly on WhatsApp and let's discuss your project.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full inline-flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border border-line"></div>
    </div>
  );
};

export default ContactSection;
