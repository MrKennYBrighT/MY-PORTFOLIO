// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'KB Calculator',
    description:
      'A lightweight calculator built with JavaScript, designed for speed and simplicity. Handles basic arithmetic and keyboard input.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    code: '#',
    demo: '#',
  },
  {
    title: 'PopcornPages',
    description:
      'A dynamic movie database app that fetches real-time data from TMDB API. Users can browse, search, and view trailers.',
    tech: ['React', 'Tailwind CSS', 'TMDB API'],
    code: '#',
    demo: '#',
  },
  {
    title: 'Quiz',
    description:
      'An interactive quiz app with multiple categories and timed questions. Tracks scores and offers instant feedback.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    code: '#',
    demo: '#',
  },
  {
    title: 'Music Player',
    description:
      'A sleek music player with playlist support, audio controls, and responsive design. Built for smooth playback and UI polish.',
    tech: ['React', 'CSS Modules', 'JavaScript'],
    code: '#',
    demo: '#',
  },
  {
    title: 'Weather App',
    description:
      'A responsive weather dashboard that displays current conditions and forecasts using OpenWeather API.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    code: '#',
    demo: '#',
  },
];

function Projects() {
  return (
    <Layout>
      <section className="w-full py-20 px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-indigo-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="flex flex-col gap-6 max-w-4xl mx-auto text-left"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 p-[1px] rounded-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-shadow">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-2">
                  <motion.a
                    href={project.code}
                    className="flex items-center gap-2 text-indigo-600 hover:underline font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center gap-2 text-indigo-600 hover:underline font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaExternalLinkAlt /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom animation class */}
        <style jsx>{`
          @keyframes textGlow {
            0% {
              text-shadow: 0 0 6px #6366f1, 0 0 12px #6366f1;
            }
            50% {
              text-shadow: 0 0 12px #818cf8, 0 0 24px #818cf8;
            }
            100% {
              text-shadow: 0 0 6px #6366f1, 0 0 12px #6366f1;
            }
          }
          .animate-text-glow {
            animation: textGlow 2s ease-in-out infinite;
          }
        `}</style>
      </section>
    </Layout>
  );
}

export default Projects;
