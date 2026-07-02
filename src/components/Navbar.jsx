import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return (
      document.documentElement.classList.contains("dark") ||
      localStorage.getItem("theme") === "dark"
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-bg-main/80 backdrop-blur-xl border-b border-border-main/30 z-50 flex items-center justify-between px-6 md:px-12">
      {/* Logo Section */}
      <a
        href="#home"
        className=" text-xl font-black tracking-wider text-text-body flex items-center gap-2.5"
      >
        <div className=" w-12 h-12 rounded-full overflow-hidden bg-linear-ro-br from-blue-600 to-blue-900 border border-white/10 flex items-center justify-center shadow-md">
          <img
            src={logoImg}
            alt="p9"
            className="w-full h-full object-cover scale-105"
          />
        </div>
        <div className=" leading-none">
          <span className=" font-black text-gray-400  text-xs md:text-lg block tracking-widest">
            Frontend
          </span>
          <span className="text-xs text-brand-green">Master</span>
        </div>
      </a>

      <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
        <a href="#home" className=" hover:text-brand-blue transition-colors">
          Home
        </a>
        <a
          href="#tech-stack"
          className=" hover:text-brand-blue transition-colors"
        >
          Outline & Tech Stack
        </a>
        <a
          href="#projects"
          className=" hover:text-brand-blue transition-colors"
        >
          Projects
        </a>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div
          onClick={() => setIsDark(!isDark)}
          className={`w-16 h-9 rounded-full p-1 bg-gray-200 dark:bg-gray-800 border border-border-main flex items-center cursor-pointer relative justify-between px-1.5 text-xs select-none`}
        >
          <span className="opacity-60">☀️</span>
          <span className="opacity-60">🌙</span>

          {/* Sliding & Rotating Icon Ball */}
          <motion.div
            className="absolute w-7 h-7 bg-white dark:bg-brand-green rounded-full flex items-center justify-center shadow-md text-sm"
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            style={{ left: isDark ? "calc(100% - 32px)" : "4px" }}
          >
            <motion.span
              key={isDark ? "dark" : "light"}
              initial={{ rotate: -180, scale: 0.6, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? "🌙" : "☀️"}
            </motion.span>
          </motion.div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex font-semibold flex-col justify-center items-center gap-1.5 cursor-pointer z-50 relative bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: "8px" } : { rotate: 0 }}
            className="w-5 h-0.5 bg-text-main block rounded-full"
          ></motion.span>
          <motion.span
            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="w-5 h-0.5 bg-text-main block rounded-full"
          ></motion.span>
          <motion.span
            animate={isOpen ? { rotate: -45, y: "-8px" } : { rotate: 0 }}
            className="w-5 h-0.5 bg-text-main block rounded-full"
          ></motion.span>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute text-center top-20 left-0 bg-white w-full dark:bg-[#050b18] border-b border-black/5 dark:border-white/5 p-6 flex flex-col gap-4 font-bold md:hidden shadow-xl"
          >
            <a
              className=" hover:text-brand-blue"
              href="#home"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              className=" hover:text-brand-blue"
              href="#tech-stack"
              onClick={() => setIsOpen(false)}
            >
              Outline & Tech Stack
            </a>
            <a
              className=" hover:text-brand-blue"
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
