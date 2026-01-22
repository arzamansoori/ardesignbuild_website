import { FaStar } from "react-icons/fa6";

const ClientReviews = () => {
  return (
    <div className="pt-40" id="reviews">
      <div className="text-center">
        <h1 className="text-4xl font-semibold pb-3 text-[#FFEFCD]">Client Reviews</h1>
        <p className="text-[#A58E74] text-lg">What our clients say about their experience with us</p>
      </div>

      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        <div className="border border-[#5b5e45] p-6 rounded-lg w-80">
          <p className="flex gap-0.5 pb-2">
            <span className="text-[#E09132]"><FaStar /></span>
            <span className="text-[#E09132]"><FaStar /></span>
            <span className="text-[#E09132]"><FaStar /></span>
            <span className="text-[#E09132]"><FaStar /></span>
            <span className="text-[#E09132]"><FaStar /></span>
          </p>
          <p className="pb-6 text-[#A58E74]">"Working with AR Design & build team was an absolute
pleasure. From the initial consultation to the final reveal, their"
          </p>
          
          <div>
            <p className="text-[#FFEFCD]">Mr.& Mrs. Kartik Soni</p>
            <p className="text-[#A58E74] text-sm">Homeowner</p>
          </div>
        </div>

        <div className="border border-[#5b5e45] p-6 rounded-lg w-80">
          <p className="flex gap-0.5 pb-2">
            <span className="text-[#E09132]"><FaStar /></span>
            <span className="text-[#E09132]"><FaStar /></span>
            <span className="text-[#E09132]"><FaStar /></span>
            <span className="text-[#E09132]"><FaStar /></span>
            <span className="text-[#E09132]"><FaStar /></span>
          </p>
          <p className="pb-6 text-[#A58E74]">"AR Design & build team provide us with the new designs and still try to fit them
            in our budget and the project ended 
            on budget which alone speaks volume"
          </p>
          
          <div>
            <p className="text-[#FFEFCD]">Dr. Mubariz & Dr. Shadma</p>
            <p className="text-[#A58E74] text-sm">Homeowner</p>
          </div>
        </div>

        <div className="border border-[#5b5e45] p-6 rounded-lg w-80">
          <p className="flex gap-0.5 pb-2">
            <span className="text-[#E09132]"><FaStar /></span>
            <span className="text-[#E09132]"><FaStar /></span>
            <span className="text-[#E09132]"><FaStar /></span>
            <span className="text-[#E09132]"><FaStar /></span>
            <span className="text-[#E09132]"><FaStar /></span>
          </p>
          <p className="pb-4 text-[#A58E74]">"The attention to detail and the quality of AR Design & build team
            work exceeded our expectations. We highly recommend to anyone
            looking to elevate their showroom interiors"
          </p>
          
          <div>
            <p className="text-[#FFEFCD]">Rahul Chauradia</p>
            <p className="text-[#A58E74] text-sm">Shop owner</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientReviews;