import { useEffect, useMemo, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import avatar from "../assets/avator-purple.png";
import { socials } from "../components/Constants";



const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0px rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Home() {
  const roles = useMemo(
    () => [
      "Full Stack Developer",
      "Software Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex === current.length) {
          setDeleting(true);
          return;
        }
        if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
          return;
        }
        if (deleting) {
          setSubIndex((prev) => prev - 1);
        } else {
          setSubIndex((prev) => prev + 1);
        }
      },
      deleting ? 40 : 60
    );

    return () => clearTimeout(timeout);
  }, [index, subIndex, deleting, roles]);

  return (
    <section
      id="home"
      className="
        relative w-full h-screen overflow-hidden bg-black
        pt-24 sm:pt-32 md:pt-25
      "
    >
      <ParticlesBackground />
      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-32 w-[70vw] sm:w-[500vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw] rounded-full max-w-[500px] max-h-500px
          bg-gradient-to-tr from-purple-400 to-pink-500 opacity-5 sm:opacity-20 md:opacity-5
          filter blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse 
        "
        />

        <div
          className="absolute bottom-0 right-0 w-[70vw] sm:w-[500vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw] rounded-full max-w-[500px] max-h-500px
          bg-gradient-to-tr from-purple-400 to-pink-500 opacity-5 sm:opacity-20 md:opacity-5
          filter blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-300
        "
        />
      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        {/* Left Section */}
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-3xl">
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-0.5 ml-1 bg-white animate-pulse align-middle"
                style={{ height: "1em" }}
              ></span>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello, I'm <br />
              <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                Vipin Jangra
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 text-base sm:textlg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I turn complex ideas into seamless, high-impact web experiences -
              building modern, scalable, and lightning-fast applications that
              leave a lasting impression.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 text-white font-medium text-lg  rounded-full bg-linear-to-r from-purple-400 via-pink-500 to-indigo-500 hover:scale-[1.03] hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                href="/Vipin_Jangra_Resume.pdf"
                download
                className="px-6 py-3 text-white font-medium text-lg  rounded-full border-2 border-white hover:bg-white hover:text-black hover:scale-[1.03] hover:shadow-lg"
              >
                My Resume
              </a>
            </motion.div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
              {socials?.map((social) => (
                <motion.a
                  key={social.name}
                  aria-label={social.name}
                  href={social.href}
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="relative hidden lg:block">
          <div
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none "
            style={{
              right: "10px ",
              width: "min(22vw, 410px)",
              height: "min(40vw, 760px)",
              borderRadius: "50%",
              filter: "blur(38px)",
              opacity: 0.32,
              background:
                "conic-gradient(from 0deg, #a855f7, #ec4899, #6366f1, #a855f7)",
            }}
          />
          <motion.img
            src={avatar}
            alt="Vipin Jangra"
            className="absolute top-1/2 -translate-y-1/2  object-contain select-none pointer-events-none"
            style={{
              right: "-30px",
              width: "min(45vw, 780px)",
              maxHeight: "85vh",
            }}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}
