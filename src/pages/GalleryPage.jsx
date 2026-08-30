import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageViewer from "../components/ImageViewer";
import { galleryImages } from "../services/gallery";
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-cream">
            Gallery
          </h1>
          <p className="text-muted text-base md:text-lg">
            A glimpse into the spaces we've designed and built.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="overflow-hidden rounded-xl block cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.caption}
                title={item.caption}
                loading={index < 8 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                decoding="async"
                className="w-full h-40 sm:h-48 img-hover-zoom"
              />
            </button>
          ))}
        </div>
      </div>
      <Footer />

      {openIndex !== null && (
        <ImageViewer
          images={galleryImages}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
};

export default GalleryPage;
