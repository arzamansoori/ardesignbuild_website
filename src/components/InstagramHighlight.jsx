import { FaInstagram } from "react-icons/fa6";
import instaAd1 from "../assets/insta-ad-1.mp4";
import { INSTAGRAM_URL } from "../utils/constants";

const InstagramHighlight = () => {
  return (
    <div className="section-top px-8" id="instagram">
      <div className="text-center pb-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cream">
          See Us in Action
        </h2>
        <p className="text-muted text-base md:text-lg">
          A behind-the-scenes look at our latest builds, straight from our Instagram.
        </p>
      </div>

      <div className="max-w-sm mx-auto flex flex-col items-center gap-6">
        <video
          src={instaAd1}
          className="w-full h-auto rounded-xl"
          controls
          muted
          loop
          playsInline
        />

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2"
        >
          <FaInstagram />
          Follow us on Instagram
        </a>
      </div>
    </div>
  );
};

export default InstagramHighlight;
