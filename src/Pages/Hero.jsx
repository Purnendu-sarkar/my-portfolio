import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Profile from "../assets/profile.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gray-900 px-6 lg:px-16 py-20">
      <div className="container mx-auto text-white min-h-screen flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0">
          {/* Profile Image */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={Profile}
              alt="Purnendu"
              className="w-48 md:w-64 h-48 md:h-64 rounded-full shadow-xl border-4 border-purple-500"
            />
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            className="absolute hidden lg:block -top-6 left-[140px] bg-purple-700 text-white p-4 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-lg md:text-xl font-bold">100+</h3>
            <p className="text-sm md:text-base">Satisfied Clients</p>
          </motion.div>

          <motion.div
            className="absolute hidden lg:block top-10 right-10 lg:right-20 bg-purple-700 text-white p-4 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h3 className="text-lg md:text-xl font-bold">50+</h3>
            <p className="text-sm md:text-base">Projects Completed</p>
          </motion.div>

          <motion.div
            className="absolute hidden lg:block -bottom-[80px] left-[200px] bg-purple-700 text-white p-4 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <h3 className="text-lg md:text-xl font-bold">5+</h3>
            <p className="text-sm md:text-base">Months Experience</p>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-purple-400 text-lg font-semibold">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              I'm <span className="text-purple-500">Purnendu</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-purple-400 mt-2 font-semibold">
              Full Stack Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-300 leading-relaxed text-sm md:text-base"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Passionate Full Stack Developer specializing in MERN Stack. I love
            working with modern web technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a
              href="/resume.pdf"
              download
              className="bg-purple-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition shadow-md"
            >
              Download Resume
            </a>
            <a
              href="/contact"
              className="border-2 border-purple-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:text-white transition shadow-md"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center lg:justify-start space-x-6 mt-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <a
              href="https://github.com/Purnendu-sarkar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-3xl hover:text-purple-400 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/purnendu-sarkar-203b24332"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-3xl hover:text-purple-400 transition" />
            </a>
            <a
              href="https://twitter.com/purnendusarkar4200"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="text-3xl hover:text-purple-400 transition" />
            </a>
            <a
              href="https://www.facebook.com/purnendusarkar4200"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-3xl hover:text-purple-400 transition" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
