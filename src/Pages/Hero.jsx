import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Profile from "../assets/profile.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";
  const speed = 100;
  const pause = 1000;

  useEffect(() => {
    let i = 0;
    let isDeleting = false;

    const typeEffect = () => {
      if (!isDeleting) {
        setText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          isDeleting = true;
          setTimeout(typeEffect, pause);
          return;
        }
      } else {
        setText(fullText.slice(0, i));
        i--;
        if (i < 0) {
          isDeleting = false;
        }
      }
      setTimeout(typeEffect, speed);
    };

    typeEffect();
  }, []);

  return (
    <section className="relative bg-gray-900 px-6 lg:px-16 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="w-72 h-72 bg-purple-500 opacity-30 rounded-full absolute top-10 left-10 blur-3xl"></div>
        <div className="w-96 h-96 bg-blue-500 opacity-20 rounded-full absolute bottom-10 right-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto text-white min-h-screen flex flex-col lg:flex-row-reverse items-center justify-between gap-12 relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0">
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
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
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
              {text}
            </h2>
          </motion.div>

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
            className="flex flex-wrap justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:opacity-80 transition shadow-md"
            >
              Download Resume
            </a>
            <Link to="/contact">
              <button className="border-2 border-purple-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:text-white transition shadow-md">
                Contact Me
              </button>
            </Link>
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
 