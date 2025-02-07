import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "North Western University",
      duration: "2024 - Running",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Bongobondhu College",
      duration: "2020 - 2022",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Channirchak L. C. School and College",
      duration: "2017 - 2020",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen flex flex-col items-center py-20 px-6 lg:px-12">
      {/* Section Heading */}
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-blue-400 mb-12">
        My Education
      </h2>

      {/* Timeline Container */}
      <div className="max-w-4xl w-full relative">
        {/* Timeline Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full top-0 hidden md:block"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center w-full mb-12 ${
              index % 2 === 0
                ? "md:justify-start justify-center"
                : "md:justify-end justify-center"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Connector Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full shadow-md border-4 border-gray-900 hidden md:block"></div>

            {/* Card Container */}
            <div
              className={`w-full md:w-5/12 p-6 lg:p-8 rounded-xl shadow-lg border border-gray-700 backdrop-blur-md bg-gray-800 bg-opacity-60 ${
                index % 2 === 0 ? "md:ml-10" : "md:mr-10"
              }`}
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-blue-300">
                {edu.degree}
              </h3>
              <p className="text-lg lg:text-xl text-gray-200">
                {edu.institution}
              </p>
              <p className="text-gray-400">{edu.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
