import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Hero() {
  const rippleContainerRef = useRef(null);

  const createRipple = (e) => {
    const container = rippleContainerRef.current;
    const circle = document.createElement('span');
    const diameter = Math.max(container.clientWidth, container.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - container.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - container.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');

    const ripple = container.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();

    container.appendChild(circle);
  };

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
        {/* Glowing View Projects Button */}
        <motion.div whileHover={{ scale: 1.05 }} className="relative">
          <Link
            to="/projects"
            className="relative inline-block px-6 py-2 rounded shadow transition overflow-hidden"
          >
            <span className="absolute inset-0 bg-indigo-600 rounded blur-md opacity-30 group-hover:opacity-50 transition duration-300 animate-pulse"></span>
            <span className="relative z-10 text-white font-semibold tracking-wide animate-text-glow">
              View Projects
            </span>
            <span className="absolute inset-0 rounded bg-indigo-700 opacity-0 hover:opacity-10 transition"></span>
          </Link>
        </motion.div>

        {/* Contact Me with Ripple */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <div
            ref={rippleContainerRef}
            onClick={createRipple}
            className="relative overflow-hidden rounded"
          >
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded hover:bg-indigo-50 transition relative z-10"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
