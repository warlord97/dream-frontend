import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#082032] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="/images/logo.jpg"
          alt="Dream square realty"
          className="h-10 w-auto"
        />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 font-semibold text-sm tracking-wide">
        <li>
          <Link to="/" className="hover:text-[#FF6B35]">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-[#FF6B35]">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-[#FF6B35]">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#FF6B35]">
            About Us
          </Link>
        </li>
      </ul>

      {/* Desktop Phone */}
      <div className="hidden md:flex items-center space-x-4">
        <a
          href="tel:+919732300007"
          className="flex items-center space-x-2 border border-[#FF6B35] rounded-full px-4 py-2 text-[#FF6B35] hover:bg-[#FF6B35] hover:text-[#00332D] transition-colors duration-300"
        >
          <FaPhoneAlt className="text-sm" />
          <span className="text-sm font-medium">+91-8527115695</span>
        </a>
      </div>

      {/* Mobile Hamburger */}
      {!isOpen && (
        <div className="md:hidden flex items-center z-50">
          <button onClick={toggleMenu}>
            <FaBars size={24} />
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#082032] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 flex flex-col pt-8 px-6 space-y-4 text-sm`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white hover:text-[#FF6B35] z-50"
        >
          <FaTimes size={24} />
        </button>

        <Link onClick={toggleMenu} to="/" className="hover:text-[#FF6B35] mt-8">
          Home
        </Link>
        <Link
          onClick={toggleMenu}
          to="/projects"
          className="hover:text-[#FF6B35]"
        >
          Projects
        </Link>
        <Link
          onClick={toggleMenu}
          to="/contact"
          className="hover:text-[#FF6B35]"
        >
          Contact Us
        </Link>
        <Link onClick={toggleMenu} to="/about" className="hover:text-[#FF6B35]">
          About Us
        </Link>

        <a
          href="tel:+919732300007"
          className="flex items-center space-x-2 border border-[#FF6B35] rounded-full px-4 py-2 text-[#FF6B35] hover:bg-[#FF6B35] hover:text-[#00332D] transition-colors duration-300 text-sm"
        >
          <FaPhoneAlt className="text-sm" />
          <span className="text-sm font-medium">+91-8527115695</span>
        </a>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/20 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}
