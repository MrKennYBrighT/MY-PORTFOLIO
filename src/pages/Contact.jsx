// src/pages/Contact.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFacebook } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getPlaceholder = (field) => {
    if (field === 'name') return 'Your Name';
    if (field === 'email') return 'Your Email';
    return 'Subject';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("https://formspree.io/f/xvgbvdaw", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        navigate("/thank-you");
      } else {
        console.error("Formspree error:", await response.json());
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <Layout>
      <section className="w-full py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-center text-slate-700 dark:text-slate-300 mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Got a project, collaboration, or just want to say hi? I’d love to hear from you.
        </motion.p>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Left: Form */}
          <div className="space-y-6">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md"
            >
              {['name', 'email', 'subject', 'message'].map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  {field !== 'message' ? (
                    <>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        placeholder={getPlaceholder(field)}
                        value={formData[field]}
                        onChange={handleChange}
                        required={field !== 'subject'}
                        className="w-full p-3 border rounded dark:bg-slate-800 dark:text-white"
                      />
                      {errors[field] && (
                        <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                      )}
                    </>
                  ) : (
                    <>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded h-32 resize-none dark:bg-slate-800 dark:text-white"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </>
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>

          {/* Right: Contact Info & Socials */}
          <div className="space-y-6 bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Let’s Connect</h3>
            <p className="text-slate-700 dark:text-slate-300">Based in Ondo, Nigeria 🌍</p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6 }}
              className="h-1 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mb-4 origin-left"
            />

            <motion.div
              className="flex space-x-4 text-2xl"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {[
                { icon: FaGithub, link: 'https://github.com/yourusername' },
                { icon: FaLinkedin, link: 'https://linkedin.com/in/yourusername' },
                { icon: FaTwitter, link: 'https://twitter.com/yourusername' },
                { icon: FaFacebook, link: 'https://facebook.com/yourusername' }
              ].map(({ icon: Icon, link }) => (
                <motion.a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
              <motion.button
                onClick={() => navigator.clipboard.writeText('your@email.com')}
                title="Copy email"
                whileHover={{ scale: 1.2 }}
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors"
              >
                <FaEnvelope />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}

export default Contact;
