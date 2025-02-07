import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Name */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          Purnendu
        </Link>

        {/* Navigation Links for Large Screens */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink to="/" className="hover:text-blue-400">
              Home
            </NavLink>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-blue-400">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-blue-400">
              Education
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Resume Download Button */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:block bg-purple-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-95 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Link
          to="/"
          className="text-2xl text-white"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-2xl text-white"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/skills"
          className="text-2xl text-white"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="/education"
          className="text-2xl text-white"
          onClick={() => setIsOpen(false)}
        >
          Education
        </Link>
        <Link
          to="/projects"
          className="text-2xl text-white"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="text-2xl text-white"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
