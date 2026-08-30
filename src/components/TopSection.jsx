import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";

const TopSection = () => {
  return (
    <div className="text-center section-top" id="home">
      <p className="text-cream lg:text-6xl text-5xl font-bold pb-5">Transforming Spaces
        <br />
        <span className="text-accent">Into Dreams</span>
      </p>
      <p className="text-muted pb-5 text-md mx-20">
        Creating beautiful, functional interiors that reflect your <br />
        personality and lifestyle. Every space tells a story - let us help you write yours.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/#contact"
          className="btn-primary"
        >
          Get Consultation
        </Link>

        <a
          href="/ARStudioPortfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="View Portfolio (PDF, 8.5MB)"
          className="btn-secondary inline-flex items-center gap-2"
        >
          View Portfolio
          <FaDownload className="text-sm" />
        </a>
      </div>
    </div>
  )
}

export default TopSection;