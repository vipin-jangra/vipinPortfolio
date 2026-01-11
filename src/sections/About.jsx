// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import profile from "../assets/profile2.png";

export default function About() {
  const stats = [
    { label: "Experience", value: "3+ years" },
    { label: "Speciality", value: "Full Stack Developer" },
    { label: "Focus", value: "Performance & UX" },
  ];

  const glows = [
    "bottom-0 right-10 w-[420px] h-[420px] blur-[140px] opacity-15 delay-300 ",
  ];

  return (
    <section
      id="about"
      className="
        relative w-full h-full  bg-black
         md:p-0 flex flex-col items-center justify-center
      "
    >
      <div>
        {glows.map((glow, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse filter ${glow} animate-pulse`}
          />
        ))}
      </div>

      {/* content wrapper */}
      <div className="relative z-10 max-w-6xl w-full  mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12 h-full">
        <motion.div
          className="flex flex-col md:flex-row  gap-8 items-center md:items-stretch "
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-[#1cd8d2]/25 "
          >
            <img src={profile} alt="profile" className="absolute inset-0" />
          </motion.div>

          <div className=" flex-1 flex-col justify-center text-center md:text-left">
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent 
                  bg-gradient-to-r from-purple-400 to-pink-600
                  "
            >
              {" "}
              Vipin Jangra{" "}
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Full Stack Developer | Software Developer
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              Building scalable web apps with clean, efficient code. Frontend or
              backend — I turn complex challenges into seamless experiences.
              Let’s create something amazing.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl ">
              {/* stats */}
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center items-center justify-center flex flex-col"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className="text-base font-semibold">{stat.value}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className=" inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            About Me
          </h3> 
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I am a Full Stack Developer with 3+ years of experience building web
            applications that are efficient, scalable, and user-friendly.
            Skilled in both frontend and backend technologies, I deliver
            seamless and polished experiences across the web.
          </p>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Passionate about writing clean, maintainable code, I thrive on
            solving complex problems and continuously learning new technologies
            to stay ahead in this ever-evolving field.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
