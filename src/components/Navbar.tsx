import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.06, duration: 0.3 },
  }),
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const navBg =
    isScrolled || isMobileMenuOpen
      ? "bg-white/70 dark:bg-slate-900/90 backdrop-blur-md shadow-md"
      : "bg-transparent";

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          theme-transition
          ${navBg}
        `}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className="
            w-full max-w-6xl mx-auto
            px-4 sm:px-6
          "
        >
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="
                text-lg sm:text-xl md:text-2xl
                font-bold
                bg-gradient-to-r from-cyan-500 to-blue-500
                bg-clip-text text-transparent
              "
              whileHover={{ scale: 1.05 }}
            >
              Vansh Garg
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="
                    relative px-3 lg:px-4 py-1.5 lg:py-2 rounded-full
                    text-sm md:text-sm lg:text-base font-medium
                    text-slate-800 dark:text-slate-100
                    border border-transparent
                    hover:border-cyan-400/80
                    hover:bg-cyan-500/10 dark:hover:bg-slate-800/80
                    hover:text-cyan-600 dark:hover:text-cyan-400
                    shadow-sm hover:shadow-md
                    transition-all duration-200
                  "
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  whileHover={{ y: -1, scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Theme Toggle Button */}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
                md:hidden
                text-slate-800 dark:text-white
                p-2
              "
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="
              md:hidden
              bg-white/95 dark:bg-slate-900/95
              border-t border-slate-200 dark:border-slate-700
              fixed top-14 sm:top-16 left-0 right-0 z-40
              backdrop-blur-md
            "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="
                w-full max-w-6xl mx-auto
                px-4 sm:px-6
                py-3
                space-y-2
              "
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    block w-full
                    px-4 py-2.5
                    rounded-xl
                    text-sm sm:text-base
                    text-slate-800 dark:text-white
                    bg-slate-100/80 dark:bg-slate-800/80
                    hover:bg-cyan-500/10 dark:hover:bg-cyan-500/20
                    hover:text-cyan-600 dark:hover:text-cyan-300
                    border border-slate-200/70 dark:border-slate-700
                    transition-all duration-200
                    font-medium
                  "
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Theme toggle inside mobile menu */}
              <div className="pt-2 flex justify-start">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
