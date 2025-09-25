import { Link } from "react-router-dom";

export default function BestConsultantSection() {
  return (
    <section className="bg-[#082032] text-white py-12 px-4 md:py-16 md:px-20 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
          BEST REAL ESTATE PROPERTY ADVISOR IN DELHI/NCR
        </h2>

        {/* Content */}
        <p className="text-xs md:text-base lg:text-lg text-gray-200 leading-relaxed mb-6">
          Best Real Estate Consultant in Delhi/NCR, The{" "}
          <span className="font-semibold text-[#FF6B35]">
            Dream square realty
          </span>
          , comprises a group of proficient professionals to provide the
          world-class Real Estate Service. Under the leadership of renowned Real
          Estate Tycoon{" "}
          <span className="font-semibold">
            Mr. Sachin sharma, Mr. Rahul rajput, Mr. Rohit rajput{" "}
          </span>
          , We at{" "}
          <span className="font-semibold text-[#FF6B35]">
            Dream square realty
          </span>{" "}
          work with great enthusiasm and provide a diverse catalogue of
          properties from residential to commercial.
        </p>

        {/* Button */}
        <Link
          to="/contact"
          className="inline-block text-xs md:text-sm lg:text-base bg-[#FF6B35] text-[#082032] font-semibold px-5 py-2 rounded-full hover:bg-[#ff814f] transition-colors duration-300 shadow-md"
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  );
}
