import { useRef, useState } from "react";
import { FaInstagram, FaPlay, FaPause } from "react-icons/fa6";
import instaAd1 from "../assets/insta-ad-1.mp4";
import { INSTAGRAM_URL } from "../utils/constants";

const InstagramHighlight = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

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
        <button
          type="button"
          onClick={togglePlay}
          className="relative w-full cursor-pointer"
        >
          <video
            ref={videoRef}
            src={instaAd1}
            className="w-full h-auto rounded-xl"
            loop
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
              <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center text-surface text-2xl">
                <FaPlay className="ml-1" />
              </div>
            </div>
          )}

          {isPlaying && (
            <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-cream text-sm">
              <FaPause />
            </div>
          )}
        </button>

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
