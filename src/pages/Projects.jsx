export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "M3M Cullinan",
      location: "Noida, Sector 94, 201301",
      connectivity: "Easy Connectivity to Noida Expressway",
      price: "₹1 Cr onwards",
      type: "Commercial",
      propertyType: "Fine Dine, Food Court, Retail Shop",
      image: "/images/m3mc.png",
    },
    {
      id: 2,
      name: "L&T Green Reserve",
      location: "Noida Expressway, Sector 128, 201304",
      connectivity: "Easy Connectivity to Noida Expressway",
      price: "₹6.30 Cr onwards",
      type: "Residential",
      propertyType: "Apartment, 3BHK, 4BHK",
      image: "/images/l&t.jpg",
    },
    {
      id: 3,
      name: "Max Estates 128",
      location: "Noida Sector 128, 201304",
      connectivity: "Easy Connectivity to Noida Expressway",
      price: "₹11.35 Cr onwards",
      type: "Residential",
      propertyType: "4BHK, 5BHK",
      image: "/images/max128.png",
    },
    {
      id: 4,
      name: "GYGY Fiveo",
      location: "Noida Sector 50, 201301",
      connectivity: "Close to Metro sector 50",
      price: "₹30 Lakhs onwards",
      type: "Commercial",
      propertyType: "Food Court, Retail Shop, Market",
      image: "/images/GYGY.png",
    },
    {
      id: 5,
      name: "Ace Verde",
      location: "Yamuna sector 22D",
      connectivity: "Close to Yamuna Expressway",
      price: "₹60 Lakhs onwards",
      type: "Residential",
      propertyType: "1BHK, 2BHK, 3BHK, etc",
      image: "/images/ace.png",
    },
    {
      id: 6,
      name: "Bhutani City Centre 32",
      location: "Noida Sector 32, 201301",
      connectivity: "Adjacent to Metro sector 32",
      price: "₹35 Lakhs onwards",
      type: "Commercial",
      propertyType: "5⭐ Hotel,Food Court,Retail Shop",
      image: "/images/Bhotani-City-Centre-32.png",
    },
    {
      id: 7,
      name: "Kalpataru Vista",
      location: "Noida Sector 128, 201304",
      connectivity: "Easy Connectivity to Noida Expressway",
      price: "₹6.47 Cr onwards",
      type: "Residential",
      propertyType: "3BHK, 4BHK, 5BHK",
      image: "/images/KalpataruVista.png",
    },
    {
      id: 8,
      name: "Godrej Riverine",
      location: "Noida Sector 44, 201301",
      connectivity: "Easy Connectivity to Noida Expressway",
      price: "₹5 Cr onwards",
      type: "Residential",
      propertyType: "3BHK, 4BHK, 5BHK",
      image: "/images/Godrejr.png",
    },
    {
      id: 9,
      name: "M3M The Line",
      location: "Noida, Sector 72, 201301",
      connectivity: "Easy Connectivity to Noida Expressway",
      price: "₹90 Lakhs onwards",
      type: "Commercial",
      propertyType: "5⭐ Hotel,Food Court,Retail Shop",
      image: "/images/m3m.png",
    },
    {
      id: 10,
      name: "Godrej Majesty",
      location: "Greater noida west sector 12D",
      connectivity: "FNG Expressway",
      price: "2 Cr onwards",
      type: "Residential",
      propertyType: "3BHK, 4BHK",
      image: "/images/Godrej.png",
    },
    {
      id: 11,
      name: "Smart World",
      location: "Noida sector 98, 201303",
      connectivity: "Easy Connectivity to Noida Expressway",
      price: "₹8 Cr onwards",
      type: "Residential",
      propertyType: "3BHK, 4BHK, 5BHK",
      image: "/images/smart_world.png",
    },
    {
      id: 12,
      name: "Eldeco Ballads of Bliss",
      location: "Yamuna sector 22D",
      connectivity: "Close to Yamuna Expressway",
      price: "₹1.55 Cr onwards",
      type: "Residential",
      propertyType: "2BHK, 3BHK, 4BHK",
      image: "/images/Yamuna.png",
    },
    {
      id: 13,
      name: "Eldeco Wishpers of wonder",
      location: "Yamuna sector 22D",
      connectivity: "Close to Yamuna Expressway",
      price: "₹1.55 Cr onwards",
      type: "Residential",
      propertyType: "2BHK, 3BHK, 4BHK",
      image: "/images/wow.png",
    },
    {
      id: 14,
      name: "CRC  Flagship",
      location: "noida sector 140, 201301",
      connectivity: "Near Metro Sector 137",
      price: "₹80 Lakhs onwards",
      type: "Commercial",
      propertyType: "Retail, Food Court, Business Suits",
      image: "/images/crc-flagsgip.jpg",
    },
    {
      id: 15,
      name: "Fairfax EON",
      location: "Noida, Sector 140A, 201301",
      connectivity: "Easy Connectivity to Noida Expressway",
      price: "₹40 Lakhs onwards",
      type: "Commercial",
      propertyType: "Office, Food Court, Retail Shop",
      image: "/images/eon.png",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#082032] mb-12">
          Our Projects
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#082032] text-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-300 mb-1">
                  <span className="font-semibold text-[#FF6B35]">
                    Location:
                  </span>{" "}
                  {project.location}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                  {project.connectivity}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                  <span className="font-semibold text-[#FF6B35]">Price:</span>{" "}
                  {project.price}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                  <span className="font-semibold text-[#FF6B35]">Type:</span>{" "}
                  {project.type}
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  <span className="font-semibold text-[#FF6B35]">
                    Property type:
                  </span>{" "}
                  {project.propertyType}
                </p>
                {/* <a
                  href="#details"
                  className="inline-block text-xs md:text-sm lg:text-base bg-[#FF6B35] text-[#082032] font-semibold px-5 py-2 rounded-full hover:bg-[#ff814f] transition-colors duration-300"
                >
                  View in Details
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
