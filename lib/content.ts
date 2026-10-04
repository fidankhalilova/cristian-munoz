import {
  FaInstagram,
  FaFigma,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
  FaMedium,
} from "react-icons/fa6";

export const NAV = ["Home", "Portfolio", "Skills", "About Me"];

export const SOCIALS = [
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "Figma", href: "#", Icon: FaFigma },
  { label: "LinkedIn", href: "#", Icon: FaLinkedin },
  { label: "Twitter", href: "#", Icon: FaTwitter },
  { label: "Telegram", href: "#", Icon: FaTelegram },
  { label: "Medium", href: "#", Icon: FaMedium },
];
export const STATS = [
  { value: "90%", label: "Job Success Score on Upwork" },
  { value: ">25.000", label: "Duplicates on Figma Community" },
  { value: ">2K", label: "In Finished Works" },
];
export const PROJECTS = Array.from({ length: 8 }, () => ({
  title: "Mi portal U",
  tags: ["UX Design", "University", "JavaScript"],
}));
const UI =
  "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.";
export const SKILLS = [
  { name: "UX Design", pct: 97, text: UI },
  { name: "UI Design", pct: 97, text: UI },
  {
    name: "Information Architecture",
    pct: 97,
    text: "Information architecture is the design of the structure and organization of content on a website or digital product to make it easy for users to navigate and understand.",
  },
  {
    name: "Figma",
    pct: 97,
    text: "Figma is a cloud-based design tool that allows teams to collaborate on the design process in real time. It offers a range of features for designing, prototyping, and sharing user interfaces.",
  },
];
