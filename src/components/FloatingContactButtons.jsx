import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContactButtons() {
  const adminPhone = "+918527115695"; // with country code for calling
  const adminWhatsApp = "918527115695"; // without + for WhatsApp

  // Prefilled WhatsApp message
  const waMessage = encodeURIComponent(
    "Hello, I am interested in your property. Please share more details."
  );

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${adminWhatsApp}?text=${waMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${adminPhone}`}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF6B35] text-white shadow-lg shadow-black/30 hover:scale-110 transition-transform duration-300"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
}
