import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageViewer from "../components/ImageViewer";
import { FaExpand, FaPlay } from "react-icons/fa6";
import { galleryMedia } from "../services/gallery";
import useDocumentHead from "../hooks/useDocumentHead";
import { BUSINESS_NAME } from "../utils/constants";

const BACK_LINK = { to: "/#gallery", label: "Gallery" };

const GalleryPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = openIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  useDocumentHead({
    title: `Gallery | ${BUSINESS_NAME}`,
    description:
      "Browse our full gallery of interior design and build projects.",
    path: "/gallery",
  });

  return (
    <div>
      <Header backLink={BACK_LINK} />
      <div className="section-top px-8 pb-20">
        <div className="max-w-3xl mx-auto text-center pb-10">
          <h1 className="heading-section">Gallery</h1>
          <p className="text-muted text-base md:text-lg">
            A glimpse into the spaces we've designed and built.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryMedia.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="relative group overflow-hidden rounded-xl block cursor-pointer"
            >
              {item.video ? (
                <video
                  src={item.video}
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-48 sm:h-56 object-cover img-hover-zoom"
                />
              ) : (
                <img
                  src={item.img}
                  alt={item.caption}
                  title={item.caption}
                  loading={index < 8 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "low"}
                  decoding="async"
                  className="w-full h-48 sm:h-56 img-hover-zoom"
                />
              )}
              {item.delivered && (
                <span className="badge absolute top-2 left-2">
                  SITE PHOTO
                </span>
              )}
              <span
                className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 rounded-full bg-black/30 text-cream"
                aria-hidden="true"
              >
                {item.video ? (
                  <FaPlay className="text-xs" />
                ) : (
                  <FaExpand className="text-xs" />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
      <Footer />

      {openIndex !== null && (
        <ImageViewer
          images={galleryMedia}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
};

export default GalleryPage;
