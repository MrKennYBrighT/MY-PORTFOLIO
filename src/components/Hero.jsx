import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* Optional Portrait */}
      <motion.img
        src="/kenny.jpg"
        alt="Kenny's Portrait"
        className="w-32 h-32 rounded-full mb-6 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-5xl font-bold text-indigo-600 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Kehinde Olorunda
      </motion.h1>

      <motion.h2
        className="text-2xl font-semibold text-slate-700 dark:text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Front-End Developer
      </motion.h2>

      <motion.p
        className="text-lg text-slate-500 dark:text-slate-300 max-w-xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Crafting elegant interfaces with modern tech — React, Tailwind, Firebase, and more.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {/* View Projects Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/projects"
            className="inline-block relative px-6 py-2 rounded-lg shadow transition group"
          >
            <span className="absolute inset-0 bg-indigo-600 rounded-lg blur-md opacity-30 group-hover:opacity-50 transition duration-300 animate-pulse"></span>
            <span className="relative z-10 text-white font-semibold tracking-wide animate-text-glow">
              View Projects
            </span>
            <span className="absolute inset-0 rounded-lg bg-indigo-700 opacity-0 group-hover:opacity-10 transition"></span>
          </Link>
        </motion.div>

        {/* Contact Me Button — now identical to View Projects */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/contact"
            className="inline-block relative px-6 py-2 rounded-lg shadow transition group"
          >
            <span className="absolute inset-0 bg-indigo-600 rounded-lg blur-md opacity-30 group-hover:opacity-50 transition duration-300 animate-pulse"></span>
            <span className="relative z-10 text-white font-semibold tracking-wide animate-text-glow">
              Contact Me
            </span>
            <span className="absolute inset-0 rounded-lg bg-indigo-700 opacity-0 group-hover:opacity-10 transition"></span>
          </Link>
        </motion.div>
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
  );
}

export default Hero;
