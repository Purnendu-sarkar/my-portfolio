import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProject = data.find((p) => p.id === parseInt(id));
        setProject(selectedProject);
      })
      .catch((error) =>
        console.error("Error fetching project details:", error)
      );
  }, [id]);

  if (!project) {
    return (
      <section className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <h2 className="text-3xl font-bold text-red-500">Project Not Found!</h2>
      </section>
    );
  }
  //   console.log(project, id);

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen px-6 py-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full"
      >
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-blue-400 text-center mb-8">
          {project.name}
        </h2>

        {/* Project Image */}
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg border border-gray-700"
          whileHover={{ scale: 1.05 }}
        />

        {/* Description */}
        <p className="text-gray-300 mt-6 text-lg leading-relaxed text-center md:text-left">
          {project.description}
        </p>

        {/* Technologies Used */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Challenges & Future Plans */}
        <div className="mt-6 space-y-3 text-gray-400">
          <p>
            <strong className="text-blue-300">Challenges Faced:</strong>{" "}
            {project.challenges}
          </p>
          <p>
            <strong className="text-blue-300">Future Plans:</strong>{" "}
            {project.futurePlans}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start space-x-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-white text-lg font-medium transition duration-300"
          >
            Live Demo 🚀
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg text-white text-lg font-medium transition duration-300"
          >
            GitHub 💻
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
