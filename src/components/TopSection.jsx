import { Link } from "react-router-dom";

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

      <div className="">
        <a
          href="/ARStudioPortfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mr-6"
        >
          View Portfolio
        </a>

        <Link
          to="/#contact"
          className="btn-primary inline-block"
        >
          Get Consultation
        </Link>
      </div>
    </div>
  )
}

export default TopSection;