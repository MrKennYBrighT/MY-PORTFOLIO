import { motion } from 'framer-motion';

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
        <motion.a
          href="/projects"
          whileHover={{ scale: 1.05 }}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          View Projects
        </motion.a>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded hover:bg-indigo-50 transition"
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
