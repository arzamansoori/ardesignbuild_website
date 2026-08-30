import { useRef, useState } from "react";
import { FaPlay, FaPause, FaInstagram } from "react-icons/fa6";
import { INSTAGRAM_URL } from "../utils/constants";

const VideoPlayer = ({ src, className = "" }) => {
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePlay();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={togglePlay}
      onKeyDown={handleKeyDown}
      className={`relative overflow-hidden rounded-xl block cursor-pointer ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto rounded-xl"
        loop
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center text-surface text-xl">
            <FaPlay className="ml-1" />
          </div>
        </div>
      )}

      {!isPlaying && (
        <div className="absolute inset-x-0 bottom-4 flex justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/90 text-surface text-sm"
          >
            <FaInstagram className="text-base" />
            See more on Instagram
          </a>
        </div>
      )}

      {isPlaying && (
        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-cream text-sm">
          <FaPause />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
