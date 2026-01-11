import { FaLayerGroup, FaPalette, FaReact } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const experiences = [
  {
    year: "Feb 2025 – Present",
    role: "Software Developer",
    company: "Ommify Technologies Pvt. Ltd.",
    description: `
Leading 5 frontend developers on a scalable SaaS app. 
Built a Shopify app boosting merchant adoption. 
Reduced UI bugs by 40% and sped up feature delivery by 30%. 
Optimized performance & Core Web Vitals.
    `,
    tech: ["React.js", "Next.js", "TypeScript", "Redux", "SaaS", "Shopify"],
    icon: <FaReact />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    year: "May 2023 – May 2024",
    role: "Full Stack Developer",
    company: "Encrobytess",
    description: `
Developed CMS platforms with React & Node.js. 
Integrated payment gateways & social logins. 
Improved load times by 20% with lazy loading & useMemo. 
Streamlined deployment and maintenance.
    `,
    tech: ["React.js", "Node.js", "MongoDB", "Axios", "JWT", "React Hooks"],
    icon: <FaLayerGroup />,
    color: "from-green-400 to-emerald-500",
  },
  {
    year: "July 2021 – July 2022",
    role: "Full Stack Developer",
    company: "Depoter",
    description: `
Built CMS platforms with React, Redux, Node.js & MongoDB. 
Integrated WooCommerce & Shopify, improving sync speed by 25%. 
Implemented role-based access control and optimized load times. 
Designed scalable DB schemas for warehouse operations.
    `,
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WooCommerce",
      "Shopify",
    ],
    icon: <FaPalette />,
    color: "from-purple-400 to-pink-500",
  },
];
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-[#0a0a0a] py-20 px-4"
    >
      {/* Background Glow */}
      <div className="sticky  inset-0">
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r opacity-10 from-pink-600 to-purple-600 blur-3xl rounded-full top-1/4 left-1/2 -translate-x-1/2" />
      </div>
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          A journey through my career — building, breaking, and learning with
          passion.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative flex ${
                i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Timeline Icon */}
              <div className="absolute left-0 md:left-[47%] lg:left-1/2 lg:-translate-x-1/2 top-6 lg:top-12 lg:-translate-y-1/2 z-10">
                <div
                  className={`w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/20 flex items-center justify-center shadow-lg bg-gradient-to-r ${exp.color}`}
                >
                  <span className="text-black">{exp.icon}</span>
                </div>
              </div>

              {/* Card */}
              <div className="ml-6 md:ml-0 md:w-1/2 px-2">
                <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 shadow-xl">
                  <span className="text-sm font-semibold text-cyan-400">
                    {exp.year}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-white mt-2">
                    {exp.role}
                  </h3>

                  <p className="text-purple-400 mt-1 font-medium">
                    {exp.company}
                  </p>

                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop spacer */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
