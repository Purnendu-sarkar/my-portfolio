import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Fetch projects from JSON file
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section className="bg-gray-900 text-white min-h-screen px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
        My Projects
      </h2>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`bg-gray-800 p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 ${
              index % 2 !== 0 ? "md:mt-16" : "" // দ্বিতীয় কার্ড নিচে থাকবে
            }`}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-80 object-cover rounded-xl mb-5 shadow-lg"
            />

            {/* Title */}
            <h3 className="text-3xl font-semibold text-blue-300">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mt-4 text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex justify-between">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-medium transition duration-300"
              >
                Live Demo 🚀
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 hover:bg-gray-600 px-6 py-3 rounded-lg text-white font-medium transition duration-300"
              >
                GitHub 💻
              </a>
              <Link
                to={`/projects/${project.id}`}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-medium transition duration-300"
              >
                View More 🔍
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
