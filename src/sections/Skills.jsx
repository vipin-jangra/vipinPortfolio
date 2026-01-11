// eslint-disable-next-line no-unused-vars
import { delay, useMotionValue } from "framer-motion";
import { AiFillOpenAI } from "react-icons/ai";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaShopify,
} from "react-icons/fa";
import { FaH } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { icon: <RiNextjsFill />, name: "Next.js" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <AiFillOpenAI />, name: "OpenAI API" },
    { icon: <FaShopify />, name: "Shopify" },
    { icon: <TbBrandSocketIo />, name: "Socket.io" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <FaNpm />, name: "npm" },
    { icon: <SiPostman />, name: "Postman" },
  ];

  const repeatedSkills = [...skills, ...skills];

  const [dir, setDir] = useState(1);
  const [active, setActive] = useState(false);
  const secRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const el = secRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio >= 0.1);
      },
      { threshold: [0.1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);
    const onTouchStart = (e) => {
      touchY.current = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (touchY.current == null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [active]);

  useEffect(() => {
    let id;
    let last = performance.now();
    const speed = 80;
    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      let next = x.get() + speed * dir * dt;
      const loop = trackRef.current?.scrollWidth / 2 || 0;

      if (loop) {
        if (next < -loop) next += loop;
        else if (next >= 0) next -= loop;
      }
      x.set(next);
      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(id);
  }, [dir, x]);

  return (
    <section
      ref={secRef}
      id="skills"
      className="
        relative w-full h-1/2 p-8 flex flex-col items-center justify-center bg-black text-white overflow-hidden 
      "
    >
      

      <motion.h2
        className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600  z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Modern applications | Modern Technologies
      </motion.p>

      <div className="relative w-full overflow-hidden">
        
        <motion.div
          ref={trackRef}
          className="flex gap-10 text-6xl text-purple-600 z-10
        "
          style={{
            x,
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {repeatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 min-w-[120px]"
              aria-label={skill.name}
              title={skill.name}
            >
              <span className="hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </span>
              <span className="text-sm text-white/90">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
