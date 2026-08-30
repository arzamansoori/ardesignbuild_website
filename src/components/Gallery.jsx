import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { galleryImages } from "../services/gallery";
import VideoPlayer from "./VideoPlayer";
import instaAd1 from "../assets/insta-ad-1.mp4";

const PREVIEW_COUNT = 6;
const FLANK_COUNT = 4;

const GalleryImage = ({ item, className = "" }) => (
  <div className={`overflow-hidden rounded-xl ${className}`}>
    <img
      src={item.img}
      alt={item.caption}
      title={item.caption}
      loading="eager"
      fetchPriority="low"
      decoding="async"
      className="w-full h-full img-hover-zoom"
    />
  </div>
);

const Gallery = () => {
  const previewImages = galleryImages.slice(0, PREVIEW_COUNT);
  const leftImages = previewImages.slice(0, 2);
  const rightImages = previewImages.slice(2, FLANK_COUNT);

  return (
    <div className="section-top px-8" id="gallery">

      <div className="text-center pb-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cream">
          Gallery
        </h2>
        <p className="text-muted text-base md:text-lg">
          A glimpse into the spaces we've designed and built.
        </p>
      </div>

      {/* Mobile: video on its own row, image grid below */}
      <div className="sm:hidden">
        <VideoPlayer src={instaAd1} className="mx-auto mb-8 max-w-sm" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
          {previewImages.map((item, index) => (
            <GalleryImage key={index} item={item} className="h-56" />
          ))}
        </div>
      </div>

      {/* Tablet/desktop: images flank the video */}
      <div className="hidden sm:flex items-center justify-center gap-6 lg:gap-10 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 lg:gap-10 flex-1">
          {leftImages.map((item, index) => (
            <GalleryImage key={index} item={item} className="h-40 lg:h-48" />
          ))}
        </div>

        <VideoPlayer src={instaAd1} className="w-full max-w-[220px] lg:max-w-xs shrink-0" />

        <div className="flex flex-col gap-6 lg:gap-10 flex-1">
          {rightImages.map((item, index) => (
            <GalleryImage key={index} item={item} className="h-40 lg:h-48" />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Link
          to="/gallery"
          className="btn-secondary inline-flex items-center gap-2"
        >
          View More
          <FaChevronRight className="text-sm" />
        </Link>
      </div>
    </div>
  )
}

export default Gallery
