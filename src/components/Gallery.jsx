import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { galleryImages } from "../services/gallery";

const PREVIEW_COUNT = 6;

const Gallery = () => {
  const previewImages = galleryImages.slice(0, PREVIEW_COUNT);

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

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {previewImages.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-xl mt-4">
            <img
              src={item.img}
              alt={item.caption}
              title={item.caption}
              loading="eager"
              fetchPriority="low"
              decoding="async"
              className="w-full h-56 sm:h-60 img-hover-zoom"
            />
          </div>
        ))}
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
