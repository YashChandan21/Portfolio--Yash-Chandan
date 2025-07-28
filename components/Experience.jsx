// ExperienceSection.jsx
import { FaLaptopCode, FaMagic, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "ThreadSnatch.online",
    duration: "Jan 2025 – Present",
    description:
           "Responsible for frontend development in React.js, coding reusable components, and implementing features to enhance user experience.",
    icon: <FaLaptopCode className="text-blue-600 dark:text-blue-400 text-3xl" />,
    gradient: "from-blue-300 to-blue-500",
    stack: "React.js, Tailwind CSS"
  },
  {
    role: "Web Developer",
    company: "Magician Portfolio Site",
    duration: "Freelance Project",
    description:
      "Designed and built a modern, interactive website for a magician with a focus on immersive effects and crisp performance.",
    icon: <FaMagic className="text-purple-600 dark:text-purple-400 text-3xl" />,
    gradient: "from-purple-300 to-purple-500",
    stack: "google site, google console"
  },
  {
    role: "Machine Learning Intern",
    company: "YBI Foundation",
    duration: "Apr 2025 – Jun 2025",
    description:
  "Developed and trained machine learning models, performed data analysis, and contributed to improving model accuracy and insights.",
    icon: <FaBrain className="text-green-600 dark:text-green-400 text-3xl" />,
    gradient: "from-green-300 to-green-500",
    stack: "Python, pandas, numpy, scikit-learn, seabon, matplotlib"
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="max-w-3xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl font-semibold mb-12 bg-clip-text text-black dark:text-white bg-gradient-to-r from-blue-700 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-center"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: false }}
      >
        Experience
      </motion.h2>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="relative rounded-3xl bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg p-8 pl-28 cursor-default"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.2, duration: 0.6, type: "spring", bounce: 0.3 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.03, boxShadow: "0 12px 32px rgba(31,38,135,0.15)" }}
          >
            <div
              className={`absolute -left-12 top-1/2 transform -translate-y-1/2 rounded-full p-4 bg-gradient-to-br ${exp.gradient} text-white shadow-lg`}
            >
              {exp.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-1 text-gray-900 dark:text-gray-100">{exp.role}</h3>
            <p className="text-md text-gray-700 dark:text-gray-300">{exp.company}</p>
            <time className="block text-xs text-gray-500 dark:text-gray-400 mb-4">{exp.duration}</time>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
            <p className="mt-6 text-xs text-blue-600 dark:text-blue-400 font-mono">
              {exp.stack}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
