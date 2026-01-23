
const TopSection = () => {
  return (
    <div className="text-center pt-40" id="home">
      <p className="text-[#FFEFCD] text-6xl font-bold pb-5">Transforming Spaces 
        <br /> 
        <span className="text-[#E09132]">Into Dreams</span>
      </p>
      <p className="text-[#A58E74] pb-5 text-lg">
        Creating beautiful, functional interiors that reflect your personality <br /> 
        and lifestyle. Every space tells a story - let us help you write yours.
      </p>

      <div className="">
        <a
          href="/ARStudio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-lg border rounded-lg mr-6 bg-[#E09132] text-[#424530] hover:bg-[#424530] hover:text-[#FFEFCD] font-semibold cursor-pointer"
        >
          View Portfolio
        </a>

        <a
          href="#contact"
          className="px-5 py-2 text-lg border rounded-lg bg-[#E09132] text-[#424530] hover:bg-[#424530] hover:text-[#FFEFCD] font-semibold cursor-pointer inline-block"
        >
          Get Consultation
        </a>
      </div>
    </div>
  )
}

export default TopSection;