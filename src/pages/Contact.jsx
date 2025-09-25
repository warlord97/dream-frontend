import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import instance from "../api/axios"; // your Axios instance

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiryType: "Commercial",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await instance.post("/api/contact", formData); // backend endpoint
      setSuccess("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        enquiryType: "Commercial",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#082032] text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#FF6B35] mb-4">
          Contact Us
        </h2>
        <p className="text-center text-sm md:text-base text-gray-300 mb-12">
          Any question or remarks? Just write us a message!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="bg-white/5 rounded-2xl shadow-xl shadow-black/40 p-8 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-6 text-[#FF6B35]">
                Get in Touch
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <FaPhoneAlt className="text-[#FF6B35]" />
                <span>+91 85271 15695</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <FaEnvelope className="text-[#FF6B35]" />
                <span>info@dreamsquare.com</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <FaMapMarkerAlt className="text-[#FF6B35]" />
                <span>Bhutani alphathumb sector-90 Noida</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-[#FF6B35] text-[#082032] p-3 rounded-full hover:bg-[#ff814f] transition-colors"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white text-[#082032] rounded-2xl shadow-xl shadow-black/30 p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Select Subject
                </label>
                <div className="flex flex-wrap gap-6">
                  {["Commercial", "Residential", "Plot", "Other"].map(
                    (option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 text-sm md:text-base cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="enquiryType"
                          value={option}
                          checked={formData.enquiryType === option}
                          onChange={handleChange}
                          className="text-[#FF6B35] focus:ring-[#FF6B35]"
                        />
                        {option}
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message here..."
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition-all"
                ></textarea>
              </div>

              {/* Success/Error Messages */}
              {success && <p className="text-green-500">{success}</p>}
              {error && <p className="text-red-500">{error}</p>}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#FF6B35] text-[#082032] font-semibold px-8 py-3 rounded-full hover:bg-[#ff814f] transition-colors disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
