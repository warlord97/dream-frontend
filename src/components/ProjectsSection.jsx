import { Link } from "react-router-dom";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "M3M Cullinan",
      location: "Noida, Sector 94, 201301",
      price: "₹1 Cr onwards",
      type: "Commercial",
      propertyType: "Fine Dine, Food Court, Retail Shop",
      image: "/images/m3mc.png",
    },
    {
      id: 2,
      name: "L&T Green Reserve",
      location: "Noida Expressway, Sector 128, 201304",
      price: "₹6.30 Cr onwards",
      type: "Residential",
      propertyType: "Apartment, 3BHK, 4BHK",
      image: "/images/l&t.jpg",
    },
    {
      id: 3,
      name: "Max Estates 128",
      location: "Noida Sector 128, 201304",
      price: "₹11.35 Cr onwards",
      type: "Residential",
      propertyType: "4BHK, 5BHK",
      image: "/images/max128.png",
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

        {/* View More Link */}
        <div className="text-center">
          <Link
            to="/projects" // Later you’ll create this route/page
            className="text-[#FF6B35] font-semibold hover:underline hover:text-[#ff814f] transition-colors"
          >
            View More →
          </Link>
        </div>
      </div>
    </section>
  );
}
