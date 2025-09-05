// src/pages/ThankYou.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import confetti from 'canvas-confetti';

function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    // 🎉 Trigger confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // ⏳ Redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout>
      <section className="w-full py-20 px-4 text-center bg-white dark:bg-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
            Your message has been sent successfully. I’ll get back to you soon.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              to="/"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
            >
              Back to Home
            </Link>
            <p className="text-sm text-slate-500 mt-2">
              Redirecting automatically in 5 seconds...
            </p>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}

export default ThankYou;
