import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/Lottie/About.json";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen flex items-center justify-center p-6 lg:p-12">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Avatar Section */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 flex items-center justify-center group">
              <Lottie
                animationData={animationData}
                loop
                autoplay
                className="w-60 h-60"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer specializing in the MERN
              stack, starting my coding journey with Programming Hero. I thrive
              on transforming complex problems into elegant web solutions.
            </p>

            {/* Tech Stack */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JavaScript",
                "Tailwind CSS",
              ].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center bg-gray-700/30 rounded-lg p-3 hover:bg-blue-400/20 transition-colors"
                >
                  <span className="text-blue-400 mr-2">▹</span>
                  {tech}
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="flex flex-wrap gap-4">
              {["📚 Reading", "🎮 Gaming", "♟ Chess", "🎥 Movies"].map(
                (interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-full bg-gray-700/30 text-sm hover:bg-purple-400/20 transition-colors"
                  >
                    {interest}
                  </span>
                )
              )}
            </div>

            {/* Call to Action */}
            <div className="flex gap-4 mt-6">
              <Link to="/contact">
                <button className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
                  Let's Connect
                </button>
              </Link>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
