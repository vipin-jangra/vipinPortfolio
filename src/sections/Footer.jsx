//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { socials } from "../components/Constants";

export default function Footer() {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.6 + i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
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

  const firstName = "Vipin";
  const lastName = "Jangra";

  return (
    <section
      id="footer"
      className="relative w-full min-h-[60vh] bg-[#0a0a0a] py-20 px-4 flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Name */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {/* First Name */}
          <div className="flex">
            {firstName.split("").map((letter, i) => (
              <motion.span
                key={`first-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-6xl md:text-8xl lg:text-9xl font-black text-cyan-400"
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Last Name */}
          <div className="flex">
            {lastName.split("").map((letter, i) => (
              <motion.span
                key={`last-${i}`}
                custom={firstName.length + i}
                variants={letterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socials?.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              custom={index}
              variants={iconVariants}
              whileHover="hover"
              className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all"
              aria-label={social.label}
              target="_blank"
              rel="noreferrer noopener"
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider Line */}
        <motion.div
          className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Copyright */}
        <motion.p
          className="text-gray-400 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          © 2026 Vipin Jangra
        </motion.p>
      </div>
    </section>
  );
}
