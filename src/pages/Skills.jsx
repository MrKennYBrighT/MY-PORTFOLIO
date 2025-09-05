// src/pages/Skills.jsx
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiFirebase,
  SiFramer,
} from 'react-icons/si';
import Layout from '../components/Layout';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
      { name: 'React', icon: <FaReact className="text-cyan-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white bg-black rounded-full" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
    ],
  },
  {
    title: 'Animation',
    skills: [
      { name: 'Framer Motion', icon: <SiFramer className="text-pink-500" /> },
    ],
  },
];

function Skills() {
  return (
    <Layout>
      <section className="w-full py-20 px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="space-y-12 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center bg-slate-100 dark:bg-slate-800 p-4 rounded shadow hover:scale-105 hover:shadow-lg transition-transform duration-300"
                  >
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-100">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Skills;
