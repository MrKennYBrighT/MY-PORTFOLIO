import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#0a192f] text-slate-400 border-t border-slate-700 dark:border-slate-600"
    >
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left: Portfolio Icon + Name */}
        <div className="flex items-center space-x-3 justify-center md:justify-start">
          <img
            src="/portfolio.png"
            alt="Portfolio Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-base font-semibold text-indigo-500 hover:text-indigo-400 transition duration-300">
            My Portfolio
          </span>
        </div>

        {/* Center: Copyright */}
        <div className="text-center text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Kehinde Olorunda — Frontend Developer.
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end space-x-5">
          <a
            href="https://github.com/MrKennYBrighT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-slate-400 hover:text-indigo-500 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kehinde-olorunda-947b8618a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-slate-400 hover:text-indigo-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:kehindeolorunda1000@gmail.com"
            className="text-xl text-slate-400 hover:text-indigo-500 transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://x.com/dabigkenny"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-slate-400 hover:text-indigo-500 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-slate-400 hover:text-indigo-500 transition duration-300"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
