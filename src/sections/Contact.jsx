// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoSparklesOutline } from "react-icons/io5";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#0a0a0a] py-20 px-4 flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-4xl flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white text-center mb-4"
        >
          Let's Build Something{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Epic
          </span>{" "}
          Together
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-center mb-2"
        >
          Get in touch directly:
        </motion.p>

        {/* Email */}
        <motion.a
          variants={itemVariants}
          href="mailto:contact8@gmail.com"
          className="block text-cyan-400 text-center mb-8 hover:text-cyan-300 transition-colors"
        >
          vipinsandwal10244@gmail.com
        </motion.a>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12"
        >
          {[
            {
              name: "Github",
              href: "https://github.com/vipin-2003",
              icon: FaGithub,
            },
            {
              name: "Linkedin",
              href: "https://www.linkedin.com/in/vipin-2003/",
              icon: FaLinkedin,
            },

            {
              name: "Gmail",
              href: "mailto:vipin2003@gmail.com",
              icon: FaEnvelope,
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              variants={iconVariants}
              whileHover="hover"
              className="backdrop-blur-sm  flex items-center justify-center text-white hover:text-pink-500 transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="bg-white/5 w-full max-w-2xl flex flex-col  backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name Input */}
            <motion.div whileFocus={{ scale: 1.02 }} className="relative">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/40 text-white rounded-lg px-4 py-3 border border-white/10 focus:border-cyan-400/50 focus:outline-none transition-all placeholder-gray-500"
                required
              />
            </motion.div>

            {/* Email Input */}
            <motion.div whileFocus={{ scale: 1.02 }} className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/40 text-white rounded-lg px-4 py-3 border border-white/10 focus:border-cyan-400/50 focus:outline-none transition-all placeholder-gray-500"
                required
              />
            </motion.div>
          </div>

          {/* Message Textarea */}
          <motion.div whileFocus={{ scale: 1.02 }} className="mb-6">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full bg-black/40 text-white rounded-lg px-4 py-3 border border-white/10 focus:border-cyan-400/50 focus:outline-none transition-all placeholder-gray-500 resize-none"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full relative overflow-hidden rounded-lg px-8 py-4 font-semibold text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600"
              animate={{
                x: isHovered ? [0, 400, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: "linear",
              }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Send Message
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoSparklesOutline size={20} />
              </motion.span>
            </span>
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
