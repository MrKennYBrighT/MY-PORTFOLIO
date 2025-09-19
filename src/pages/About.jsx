// src/pages/About.jsx
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { FaRoad, FaLightbulb } from 'react-icons/fa';

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
          Hi, I’m Kehinde Olorunda —a passionate front-end developer based in Nigeria. 
          I specialize in crafting <span className="text-indigo-600 font-semibold">responsive</span>, 
          <span className="text-indigo-600 font-semibold">accessible</span>, and 
          <span className="text-indigo-600 font-semibold">visually engaging</span> 
          web interfaces using modern tools like React, Tailwind CSS, and Firebase.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {/* My Journey Card */}
          <motion.div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 p-[1px] rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2 flex items-center gap-2">
                <FaRoad /> My Journey
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Started with <span className="text-indigo-600 font-semibold">curiosity</span>, grew into <span className="text-indigo-600 font-semibold">obsession</span>. 
                From simple calculators to dynamic movie databases, I’ve built projects that reflect my growth and creativity.
              </p>
              <p className="mt-4 italic text-indigo-500">
                “Curiosity is the spark behind every great idea.”
              </p>
            </div>
          </motion.div>

          {/* My Values Card */}
          <motion.div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 p-[1px] rounded-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg hover:shadow-xl hover:shadow-indigo-500/20 transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2 flex items-center gap-2">
                <FaLightbulb /> My Values
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                <span className="text-indigo-600 font-semibold">Clean code</span>, 
                <span className="text-indigo-600 font-semibold">user-first design</span>, and 
                <span className="text-indigo-600 font-semibold">continuous learning</span>. 
                I believe great interfaces are built with <span className="text-indigo-600 font-semibold">empathy</span> and <span className="text-indigo-600 font-semibold">precision</span>.
              </p>
              <p className="mt-4 italic text-indigo-500">
                “Design with empathy, build with precision.”
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/Kehinde%20Olorunda%20CV.pdf"
              download
              className="inline-block relative px-6 py-2 rounded-lg shadow transition group"
            >
              <span className="absolute inset-0 bg-indigo-600 rounded-lg blur-md opacity-30 group-hover:opacity-50 transition duration-300 animate-pulse"></span>
              <span className="relative z-10 text-white font-semibold tracking-wide animate-text-glow">
                Download Resume
              </span>
              <span className="absolute inset-0 rounded-lg bg-indigo-700 opacity-0 group-hover:opacity-10 transition"></span>
            </a>
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
    </Layout>
  );
}

export default About;
