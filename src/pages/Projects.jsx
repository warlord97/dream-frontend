import { useState } from "react";
import instance from "../api/axios";
import { useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await instance.get("/api/project"); // your backend endpoint
        setProjects(response.data.projects || []); // adjust according to backend response
      } catch (err) {
        console.error(err);
        setError("Failed to fetch projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-6 md:px-20 lg:px-32 text-center">
        <p className="text-lg font-semibold">Loading projects...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-6 md:px-20 lg:px-32 text-center">
        <p className="text-red-500 font-medium">{error}</p>
      </section>
    );
  }

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
              key={project._id}
              className="bg-[#082032] text-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {project.title}
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
      </div>
    </section>
  );
}
