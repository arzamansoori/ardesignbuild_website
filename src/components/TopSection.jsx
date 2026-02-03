
const TopSection = () => {
  return (
    <div className="text-center pt-25 md:pt-30" id="home">
      <p className="text-[#FFEFCD] lg:text-6xl text-5xl font-bold pb-5">Transforming Spaces 
        <br /> 
        <span className="text-[#E09132]">Into Dreams</span>
      </p>
      <p className="text-[#A58E74] pb-5 text-md mx-20">
        Creating beautiful, functional interiors that reflect your <br /> 
        personality and lifestyle. Every space tells a story - let us help you write yours.
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