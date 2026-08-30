import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";

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

  return (
    <button
      type="button"
      onClick={togglePlay}
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

      {isPlaying && (
        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-cream text-sm">
          <FaPause />
        </div>
      )}
    </button>
  );
};

export default VideoPlayer;
