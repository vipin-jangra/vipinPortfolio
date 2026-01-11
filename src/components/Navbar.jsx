import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


  return (
    <header
      className={`fixed top-4 left-1/2 z-50 w-[95%] max-w-8xl -translate-x-1/2 rounded-2xl transition-all duration-300
        ${
          scrolled
            ? "bg-black/40 backdrop-blur-sm shadow-lg shadow-black/20"
            : "bg-black/40 backdrop-blur-lg"
        }`}
    >
      <nav className="relative flex items-center justify-between px-5 py-3 md:px-6">
        {/* Logo */}
        <div onClick={()=> scrollToSection("home")} className="text-lg font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Vipin
          </span>{" "}
          <span className="text-white">Jangra</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navItems.map(
            (item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer transition hover:text-white"
              >
                {item.label}
              </li>
            )
          )}
        </ul>

        {/* CTA (Desktop) */}
        <button onClick={() => scrollToSection("contact")} className="hidden md:flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:scale-[1.03] hover:shadow-lg">
          Let’s Talk <span className="text-lg">→</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 top-full mt-3 rounded-xl bg-black/80 backdrop-blur-xl transition-all duration-300 md:hidden
            ${
              open
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
        >
          <ul className="flex flex-col gap-4 px-6 py-5 text-sm font-medium text-gray-300">
            {navItems.map(
              (item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setOpen(false);
                  }}
                  className="cursor-pointer transition hover:text-white"
                >
                  {item.label}
                </li>
              )
            )}

            <button onClick={() => {
              scrollToSection("contact");
              setOpen(false);
            }} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md">
              Let’s Talk <span className="text-lg">→</span>
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
}
