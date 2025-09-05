// src/pages/About.jsx
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

function About() {
  return (
    <Layout>
      <section className="w-full py-20 px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-indigo-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I’m Kenny—a passionate front-end developer based in Nigeria. 
          I specialize in crafting responsive, accessible, and visually engaging 
          web interfaces using modern tools like React, Tailwind CSS, and Firebase.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">My Journey</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Started with curiosity, grew into obsession. From simple calculators to dynamic 
              movie databases, I’ve built projects that reflect my growth and creativity.
            </p>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">My Values</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Clean code, user-first design, and continuous learning. 
              I believe great interfaces are built with empathy and precision.
            </p>
          </div>
        </motion.div>

        <motion.a
          href="/resume.pdf"
          className="inline-block mt-10 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Download Resume
        </motion.a>
      </section>
    </Layout>
  );
}

export default About;
