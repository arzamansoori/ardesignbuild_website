import { useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

const ImageViewer = ({ images, index, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const item = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-cream/70 hover:text-cream text-2xl cursor-pointer"
        aria-label="Close"
      >
        <FaXmark />
      </button>

      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-cream text-base sm:text-lg cursor-pointer transition"
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>
      )}

      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-cream text-base sm:text-lg cursor-pointer transition"
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      )}

      <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-16 md:px-24 pointer-events-none">
        <img
          src={item.img}
          alt={item.caption}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg pointer-events-auto"
        />
      </div>

      <p
        className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-cream text-sm sm:text-base text-center px-6"
        onClick={(e) => e.stopPropagation()}
      >
        {item.caption}
      </p>
    </div>
  );
};

export default ImageViewer;
