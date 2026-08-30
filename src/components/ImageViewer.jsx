import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

const ImageViewer = ({ images, index, onClose }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(index);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let frame;
    const scrollToInitial = () => {
      if (el.clientWidth === 0) {
        frame = requestAnimationFrame(scrollToInitial);
        return;
      }
      el.scrollTo({ left: el.clientWidth * index, behavior: "auto" });
    };
    scrollToInitial();

    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (i) => {
    const el = containerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(images.length - 1, i));
    el.scrollTo({ left: el.clientWidth * clamped, behavior: "smooth" });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") scrollToIndex(activeIndex - 1);
      if (e.key === "ArrowRight") scrollToIndex(activeIndex + 1);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <div className="fixed inset-0 z-100 bg-black/90" onClick={onClose}>
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 text-cream/70 hover:text-cream text-2xl cursor-pointer"
        aria-label="Close"
      >
        <FaXmark />
      </button>

      {images.length > 1 && (
        <button
          type="button"
          disabled={activeIndex === 0}
          onClick={(e) => {
            e.stopPropagation();
            scrollToIndex(activeIndex - 1);
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-cream text-base sm:text-lg cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-black/40"
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>
      )}

      {images.length > 1 && (
        <button
          type="button"
          disabled={activeIndex === images.length - 1}
          onClick={(e) => {
            e.stopPropagation();
            scrollToIndex(activeIndex + 1);
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-cream text-base sm:text-lg cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-black/40"
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      )}

      <div
        ref={containerRef}
        className="h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      >
        {images.map((item, i) => (
          <div
            key={i}
            className="w-full h-full shrink-0 snap-center flex items-center justify-center px-3 sm:px-16 md:px-24"
          >
            <img
              src={item.img}
              alt={item.caption}
              loading="eager"
              fetchPriority={i === activeIndex ? "high" : "low"}
              decoding="async"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[70vh] md:max-h-[85vh] w-auto max-w-full object-contain rounded-lg"
            />
          </div>
        ))}
      </div>

      <p
        className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-cream text-sm sm:text-base text-center px-6"
        onClick={(e) => e.stopPropagation()}
      >
        {images[activeIndex].caption}
      </p>
    </div>
  );
};

export default ImageViewer;
