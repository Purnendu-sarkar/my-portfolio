import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="divider"></div>
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Link to="/" className="mx-4 hover:text-blue-400">
            Home
          </Link>
          <Link to="/about" className="mx-4 hover:text-blue-400">
            About
          </Link>
          <Link to="/projects" className="mx-4 hover:text-blue-400">
            Projects
          </Link>
          <Link to="/contact" className="mx-4 hover:text-blue-400">
            Contact
          </Link>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/Purnendu-sarkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/purnendu-sarkar-203b24332"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-white text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/purnendusarkar4200"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-white text-2xl"
          >
            <FaFacebook />
          </a>
        </div>

        <p className="text-gray-500">© 2025 Purnendu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
