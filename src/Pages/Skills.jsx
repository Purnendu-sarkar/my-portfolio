import { FaBrain, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillIcons = [
  {
    category: "Familiar",
    icons: [<SiNextdotjs key="nextjs" />, <SiTypescript key="typescript" />],
  },
  {
    category: "Frontend",
    icons: [
      <FaHtml5 key="html5" />,
      <FaCss3Alt key="css3" />,
      <SiJavascript key="javascript" />,
      <SiTailwindcss key="tailwindcss" />,
      <FaReact key="react" />,
    ],
  },
  {
    category: "Backend",
    icons: [
      <FaNodeJs key="nodejs" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongodb" />,
      <SiFirebase key="firebase" />,
    ],
  },
];
const skills = [
  { category: "Familiar", technologies: ["Next JS", "Typescript"] },
  {
    category: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "DaisyUI",
      "JavaScript",
      "React JS",
    ],
  },
  {
    category: "Backend",
    technologies: [
      "Node JS",
      "Express JS",
      "MongoDB",
      "Firebase",
      "Vercel",
      "JWT",
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-16 px-6 lg:px-16">
      <div className="container mx-auto h-screen text-white  flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Skills List */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-purple-400">My Expertise</h2>
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-pink-400">
                {skill.category}
              </h3>
              <ul className="text-gray-300 text-sm space-y-1 ml-4">
                {skill.technologies.map((tech, i) => (
                  <li key={i}>• {tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Side - Circular Design */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <motion.div
            className="relative w-64 h-64 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Brain Icon in the Center */}
            <div className="absolute w-16 h-16 bg-purple-500 flex items-center justify-center rounded-full shadow-lg">
              <FaBrain className="text-white text-3xl" />
            </div>

            {/* Circular Skill Layers */}
            {skillIcons.map((skill, index) => (
              <motion.div
                key={index}
                className={`absolute flex flex-wrap items-center justify-center border border-gray-500 rounded-full`}
                style={{
                  width: `${150 + index * 80}px`,
                  height: `${150 + index * 80}px`,
                  animation: `spin ${12 + index * 3}s linear infinite`,
                }}
              >
                {/* Skill Icons Spread Across the Circle */}
                <div className="absolute w-full h-full flex flex-wrap items-center justify-center">
                  {skill.icons.map((Icon, i) => (
                    <motion.div
                      key={`${skill.category}-${i}`}
                      className="text-white text-2xl"
                      style={{
                        position: "absolute",
                        transform: `rotate(${
                          i * (360 / skill.icons.length)
                        }deg) translate(${75 + index * 40}px)`,
                      }}
                    >
                      {Icon}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
