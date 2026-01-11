import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import encrobytes from "../assets/Encrobytes.png";
import depoter from "../assets/Depoter.png";
import resultbullImage from "../assets/ResultBull.png";
import { IoEyeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Encrobytes Technologies",
    category: "Cloud & Enterprise SaaS",
    description:
      "Encrobytes delivers scalable B2B SaaS platforms and custom digital solutions to automate business operations, enhance performance, and drive digital transformation.",
    image: encrobytes,
    Url: "https://encrobytes.com/",
    features: [
      "Cloud-based SaaS development",
      "Custom enterprise automation",
      "Mobile & web application delivery",
      "Operational efficiency solutions",
      "Long-term scalable platforms",
    ],
    tech: [
      "Full-stack Development",
      "Cloud Platforms",
      "Enterprise Integrations",
    ],
    accent1: "rgb(148,163,184)",
    accent2: "rgba(148,163,184,0.25)",
  },
  {
    title: "Depoter Fulfillment",
    category: "E-Commerce Solutions",
    description:
      "Depoter offers tech-enabled fulfillment services with API integration, same-day delivery, and scalable inventory management for online brands and D2C platforms.",
    image: depoter,
    Url: "https://depoter.com/",
    features: [
      "API-driven order fulfillment",
      "Dark store network",
      "Same-day & two-hour delivery",
      "Real-time inventory tracking",
      "Scalable logistics solutions",
    ],
    tech: [
      "E-Commerce APIs",
      "Fulfillment Automation",
      "Delivery Optimization",
    ],
    accent1: "rgb(202,138,4)",
    accent2: "rgba(202,138,4,0.35)",
  },
  {
    title: "ResultBull",
    category: "AI Marketing Platform",
    description:
      "ResultBull is an AI-powered performance marketing platform that unifies multi-channel campaign management, predictive analytics, and real-time optimization to drive conversions.",
    image: resultbullImage, // assign your local or imported image
    Url: "https://resultbull.ai/",
    features: [
      "Multi-channel campaign automation",
      "Predictive analytics",
      "Audience segmentation",
      "Conversion tracking & dashboards",
      "Real-time optimization",
    ],
    tech: ["AI Analytics", "Marketing Automation", "Data Visualization"],
    accent1: "rgb(59,130,246)",
    accent2: "rgba(59,130,246,0.45)",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center py-10"
      style={{
        "--a1": project.accent1,
        "--a2": project.accent2,
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute rounded-full opacity-30 blur-3xl transition-all duration-1000"
          style={{
            width: "clamp(12rem,25vw,24rem)",
            height: "clamp(12rem,25vw,24rem)",
            top: "15%",
            left: "12%",
            background: "radial-gradient(circle, var(--a1), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-base uppercase tracking-widest bg-gradient-to-r from-pink-600 to-violet-600 font-semibold bg-clip-text text-transparent">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Explore my latest work showcasing modern web technologies and
            creative solutions
          </p>
        </div>

        {/* Main Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Preview */}
          <motion.div
            className="order-2 lg:order-1 lg:col-span-3  relative rounded-3xl overflow-hidden shadow-2xl
"
            animate={{ rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div
              className="absolute inset-0 p-[1px] rounded-3xl"
              style={{
                background: "linear-gradient(135deg,var(--a1),var(--a2))",
              }}
            >
              <div className="w-full h-full bg-[#0a0a0a] rounded-3xl" />
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="relative z-10 w-full h-full aspect-video object-fill rounded-3xl"
            />
          </motion.div>

          {/* Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2 lg:col-span-2 space-y-6"
            >
              <span
                className="inline-block px-4 py-1 rounded-full text-xs border"
                style={{
                  borderColor: "var(--a1)",
                  color: "var(--a1)",
                  background: "rgba(255,255,255,.04)",
                }}
              >
                {project.category}
              </span>

              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {project.title}
              </h3>

              <p className="text-gray-300">{project.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2 text-gray-300 text-sm">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-black text-xs"
                      style={{ background: "var(--a1)" }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="
                          px-3 py-1 rounded-lg
                          bg-white/5 border border-white/10
                          text-sm text-gray-300
                          transition-all duration-300 ease-out
                          hover:-translate-y-1 hover:scale-[1.05]
                          hover:border-white/30
                          hover:text-white
                          
                        "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 pt-4">
                {/* Live Demo Button */}
                <a
                  href={project.Url}
                  className="
                    group relative
                    px-5 sm:px-6 py-3
                    flex items-center justify-center gap-2
                    rounded-full font-semibold text-white
                    text-sm sm:text-base
                    transition-transform duration-300 ease-out
                    hover:scale-105 active:scale-95
                    w-full sm:w-auto
                  "
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    background: "linear-gradient(135deg,var(--a1),var(--a2))",
                  }}
                >
                  <IoEyeOutline
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span className="relative z-10">Live Demo</span>
                </a>

                {/* GitHub Button */}
                <a
                  href={import.meta.env.VITE_GITHUB}
                  className="
                        px-5 sm:px-6 py-3
                        flex items-center justify-center gap-2
                        rounded-full border border-white/10 text-white
                        bg-white/5
                        text-sm sm:text-base
                        transition-transform duration-300 ease-out
                        hover:scale-105 active:scale-95
                        w-full sm:w-auto
                      "
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub size={18} /> GitHub
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <motion.button
            onClick={() =>
              setIndex((i) => (i - 1 + projects.length) % projects.length)
            }
            whileHover={{
              x: -6,
              scale: 1.08,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="absolute
  left-2 bottom-[-70px] lg:bottom-auto lg:left-0
  w-12 h-12 lg:w-15 lg:h-15
  rounded-full
  bg-white/5 border border-white/10
  flex items-center justify-center
  text-white backdrop-blur-md
  hover:bg-white/10"
          >
            <MdKeyboardArrowLeft size={32} />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={() => setIndex((i) => (i + 1) % projects.length)}
            whileHover={{
              x: 6,
              scale: 1.08,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="absolute
              right-2 bottom-[-70px] lg:bottom-auto lg:right-0
              w-12 h-12 lg:w-15 lg:h-15
              rounded-full
              bg-white/5 border border-white/10
              flex items-center justify-center
              text-white backdrop-blur-md
              hover:bg-white/10"
          >
            <MdKeyboardArrowRight size={28} />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, i) => (
            <span
              key={i}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === index ? "48px" : "10px",
                background:
                  i === index
                    ? "linear-gradient(90deg,var(--a1),var(--a2))"
                    : "rgba(255,255,255,.2)",
              }}
            />
          ))}
        </div>

        <div className="text-center mt-6 text-gray-500">
          <span className="text-white">
            {String(index + 1).padStart(2, "0")}
          </span>{" "}
          / {String(projects.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}
