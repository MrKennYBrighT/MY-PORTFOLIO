// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Layout from '../components/Layout';

const projects = [
  {
    title: 'KB Calculator',
    description:
      'A lightweight calculator built with JavaScript, designed for speed and simplicity. Handles basic arithmetic and keyboard input.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/MrKennYBrighT/Simple-Calculator',
    demo: 'https://simple-calculator-sigma-two.vercel.app/',
  },
  {
    title: 'PopcornPages',
    description:
      'A dynamic movie database app that fetches real-time data from TMDB API. Users can browse, search, and view trailers.',
    tech: ['React', 'Tailwind CSS', 'TMDB API'],
    github: 'https://github.com/MrKennYBrighT/PopcornPages',
    demo: 'http://popcorn-pages.vercel.app/',
  },
  {
    title: 'Quiz',
    description:
      'An interactive quiz app with multiple categories and timed questions. Tracks scores and offers instant feedback.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/MrKennYBrighT/quiz-platform',
    demo: 'https://quiz-platform-henna.vercel.app/',
  },
  {
    title: 'Music Player',
    description:
      'A sleek music player with playlist support, audio controls, and responsive design. Built for smooth playback and UI polish.',
    tech: ['React', 'CSS Modules', 'JavaScript'],
    github: 'https://github.com/kenny/music-player',
    demo: 'https://music-player.vercel.app',
  },
  {
    title: 'Weather App',
    description:
      'A responsive weather dashboard that displays current conditions and forecasts using OpenWeather API.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/kenny/weather-app',
    demo: 'https://weather-app.vercel.app',
  },
];

function Projects() {
  return (
    <Layout>
      <section className="w-full py-20 px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-200 hover:text-indigo-500 flex items-center gap-1"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-200 hover:text-indigo-500 flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Projects;
