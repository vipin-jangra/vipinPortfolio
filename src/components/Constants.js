import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const socials = [
  {
    name: "Github",
    href: import.meta.env.VITE_GITHUB,
    icon: FaGithub,
  },
  {
    name: "Linkedin",
    href: import.meta.env.VITE_LINKEDIN,
    icon: FaLinkedin,
  },
  {
    name: "Gmail",
    href: `mailto:${import.meta.env.VITE_EMAIL}`,
    icon: FaEnvelope,
  },
];