import { FaStar } from "react-icons/fa6";
import { BUSINESS_NAME } from "../utils/constants";

const ClientReviews = () => {
  return (
    <div className="section-top" id="reviews">
      <div className="text-center">
        <h1 className="text-4xl font-semibold pb-3 text-cream">Client Reviews</h1>
        <p className="text-muted text-lg mx-4">What our clients say about their experience with us</p>
      </div>

      <div className="flex justify-center mx-4 lg:gap-10 gap-5 mt-10 flex-wrap">
        <div className="card w-80">
          <p className="flex gap-0.5 pb-2">
            <span className="text-accent"><FaStar /></span>
            <span className="text-accent"><FaStar /></span>
            <span className="text-accent"><FaStar /></span>
            <span className="text-accent"><FaStar /></span>
            <span className="text-accent"><FaStar /></span>
          </p>
          <p className="pb-6 text-muted">"Working with {BUSINESS_NAME} team was an absolute
pleasure. From the initial consultation to the final reveal, their team was professional, creative, and attentive to our needs."
          </p>

          <div>
            <p className="text-cream">Mr.& Mrs. Kartik Soni</p>
            <p className="text-muted text-sm">Homeowner</p>
          </div>
        </div>

        <div className="card w-80">
          <p className="flex gap-0.5 pb-2">
            <span className="text-accent"><FaStar /></span>
            <span className="text-accent"><FaStar /></span>
            <span className="text-accent"><FaStar /></span>
            <span className="text-accent"><FaStar /></span>
            <span className="text-accent"><FaStar /></span>
          </p>
          <p className="pb-6 text-muted">"{BUSINESS_NAME} team provide us with the new designs and still try to fit them
            in our budget and the project ended
            on budget which alone speaks volume"
          </p>

          <div>
            <p className="text-cream">Dr. Mubariz & Dr. Shadma</p>
            <p className="text-muted text-sm">Homeowner</p>
          </div>
        </div>

        <div className="card w-80">
          <p className="flex gap-0.5 pb-2">
            <span className="text-accent"><FaStar /></span>
            <span className="text-accent"><FaStar /></span>
            <span className="text-accent"><FaStar /></span>
            <span className="text-accent"><FaStar /></span>
            <span className="text-accent"><FaStar /></span>
          </p>
          <p className="pb-4 text-muted">"The attention to detail and the quality of {BUSINESS_NAME} team
            work exceeded our expectations. We highly recommend to anyone
            looking to elevate their showroom interiors"
          </p>

          <div>
            <p className="text-cream">Rahul Chauradia</p>
            <p className="text-muted text-sm">Shop owner</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientReviews;