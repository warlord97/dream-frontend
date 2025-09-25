import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#082032] text-gray-300 pt-12 pb-6 px-4 sm:px-8 md:px-20 lg:px-32">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-bold text-[#FF6B35] mb-4">
            Dream square realty
          </h3>
          <p className="text-sm leading-relaxed">
            Your trusted partner in real estate solutions across Delhi/NCR. We
            deliver quality service, expertise, and value to help you find your
            dream property.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Properties
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Developers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Residential Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Commercial Leasing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Property Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Investment Advice
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Legal Assistance
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm mb-2">Bhutani alphathumb sector-90 Noida</p>
          <p className="text-sm mb-2">Phone: +91-8527115695</p>
          <p className="text-sm mb-4">Email: info@dreamsquare.com</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-[#FF6B35] transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-[#FF6B35] transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-[#FF6B35] transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-[#FF6B35] transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Dream square realty. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-[#FF6B35] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#FF6B35] transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
