import React from "react";

export default function WhyOnlyMoneyTree() {
  return (
    <section className="bg-[#082032] py-12 px-4 sm:px-8 md:px-20 lg:px-32 text-center text-white">
      {/* Section Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-[#FF6B35]">
        Why Only Dream square realty?
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Card 1 */}
        <div className="bg-white/5 rounded-2xl shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-black/50 hover:bg-white/10 transition-all duration-300 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex justify-center mb-4">
            {/* Handshake Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF6B35]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 11h-3V7h-4V3H9v4H5v4H2l10 10 10-10z" />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
            Why Trust Dream square realty
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            Dream Square Realty is the Leading Real Estate Consultant in
            Delhi/NCR, achieving record sales while maintaining excellent
            service through our committed property advisors.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 rounded-2xl shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-black/50 hover:bg-white/10 transition-all duration-300 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex justify-center mb-4">
            {/* Customer Oriented Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF6B35]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7M16 21H8a2 2 0 01-2-2v-1a4 4 0 014-4h4a4 4 0 014 4v1a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
            Customer Oriented
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            Our customer-focused approach delivers properties suited to your
            individual style, budget, and needs, establishing us as the top real
            estate consultant in Delhi/NCR.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 rounded-2xl shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-black/50 hover:bg-white/10 transition-all duration-300 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex justify-center mb-4">
            {/* Tech Enabled Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF6B35]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3C8.134 3 5 6.134 5 10c0 3.09 2.192 5.642 5.063 6.736L10 21h4l-.063-4.264C16.808 15.642 19 13.09 19 10c0-3.866-3.134-7-7-7z"
              />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
            Tech Enabled
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            Find your ideal property with options that fit your lifestyle and
            budget, assisted by the Leading Real Estate Consultant in Delhi/NCR.
          </p>
        </div>
      </div>
    </section>
  );
}
