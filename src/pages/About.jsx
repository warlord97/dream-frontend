import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-white text-[#082032]">
      {/* Hero Section */}
      <div className="bg-[#082032] text-white py-16 px-6 md:px-20 lg:px-32 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF6B35] mb-4">
          About Us
        </h1>
        <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
          At Dream square realty services Ltd. (RERA REG.), we’re dedicated to
          transforming the real estate experience with professionalism,
          transparency, and innovation.
        </p>
      </div>

      {/* Who We Are */}
      <div className="py-16 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#082032] mb-8">
          Who We Are
        </h2>
        <p className="text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
          Dream square realty is a leading real estate consultancy in Delhi/NCR,
          offering a comprehensive range of services from residential to
          commercial properties. Under the leadership of Real Estate Tycoon Mr.
          Sachin sharma, Mr. Rahul rajput, Mr.Rohit rajput our team of
          experienced professionals works tirelessly to match clients with their
          dream properties, ensuring a seamless and trustworthy experience.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gray-50 py-16 px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-[#FF6B35] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted and innovative real estate consultancy in
              India, setting the benchmark for customer satisfaction, ethical
              practices, and premium property solutions.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-[#FF6B35] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower clients with expert guidance, unmatched
              market insights, and tailored solutions—making every property
              transaction smooth, transparent, and rewarding.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow">
            <h4 className="text-lg md:text-xl font-semibold text-[#FF6B35] mb-3">
              Integrity
            </h4>
            <p className="text-gray-600">
              We maintain the highest ethical standards, ensuring transparency
              and trust with every transaction.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow">
            <h4 className="text-lg md:text-xl font-semibold text-[#FF6B35] mb-3">
              Customer First
            </h4>
            <p className="text-gray-600">
              Every client’s need is our priority—we deliver tailored property
              solutions to fit every lifestyle and budget.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow">
            <h4 className="text-lg md:text-xl font-semibold text-[#FF6B35] mb-3">
              Innovation
            </h4>
            <p className="text-gray-600">
              We embrace modern tools and technology to redefine the property
              buying and selling experience.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#082032] mb-8">
            Why Choose Dream square realty?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            From premium property listings to expert consultations, we ensure
            your real estate journey is smooth and rewarding. Whether you're
            looking to buy, sell, or invest, our dedicated consultants are here
            to guide you every step of the way.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FF6B35] text-[#082032] font-semibold px-6 py-3 rounded-full hover:bg-[#ff814f] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
