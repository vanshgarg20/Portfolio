import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonHover = { y: -4, scale: 1.04 };
const buttonTap = { y: 0, scale: 0.97 };

export default function Hero() {
  return (
    <motion.section
      className="
        min-h-screen flex items-center justify-center relative overflow-hidden theme-transition
        pt-24 md:pt-28 pb-12
        bg-gradient-to-br from-sky-50 via-white to-cyan-50
        dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
        text-slate-900 dark:text-white
      "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-15 dark:opacity-25 pointer-events-none" />

      {/* Light mode glows */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-cyan-200/60 blur-3xl dark:hidden" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-sky-200/60 blur-3xl dark:hidden" />

      {/* Dark mode glows */}
      <div className="pointer-events-none hidden dark:block absolute -right-40 top-10 h-[26rem] w-[26rem] rounded-full bg-cyan-500/25 blur-3xl" />
      <div className="pointer-events-none hidden dark:block absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-blue-600/25 blur-3xl" />

      <div
        className="
          w-full max-w-6xl mx-auto
          px-4 sm:px-6
          relative z-10
        "
      >
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-between
            gap-10 lg:gap-14
          "
        >
          {/* Left content */}
          <motion.div
            className="flex-1 text-center md:text-left space-y-5 md:space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="inline-block" variants={itemVariants}>
              <span className="text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="
                max-w-3xl
                text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
                font-bold leading-tight
                mx-auto md:mx-0
              "
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
            >
              <span className="text-slate-900 dark:text-white">
                Hi, I&apos;m{" "}
              </span>
              <motion.span
                className="
                  bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400
                  bg-clip-text text-transparent
                  inline-block animate-gradient
                  pb-1
                "
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                Vansh Garg
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="
                text-base sm:text-lg md:text-xl
                text-slate-800 dark:text-slate-300
                max-w-xl md:max-w-2xl
                mx-auto md:mx-0
              "
              variants={itemVariants}
            >
              Data Science &amp; AI Developer | Full-Stack Innovator
            </motion.p>

            {/* Description */}
            <motion.p
              className="
                text-sm sm:text-base md:text-lg
                text-slate-700 dark:text-slate-400
                max-w-xl
                mx-auto md:mx-0
              "
              variants={itemVariants}
            >
              I build data-driven products powered by machine learning and modern
              web technologies. Passionate about transforming data into
              actionable insights and clean user experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="
                flex flex-wrap gap-3 sm:gap-4
                justify-center md:justify-start
                pt-3 sm:pt-4
              "
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="
                  bg-cyan-500 hover:bg-cyan-600
                  text-white
                  px-6 sm:px-8 py-2.5 sm:py-3
                  rounded-lg font-medium
                  text-sm sm:text-base
                  transition-all duration-150
                  shadow-md shadow-cyan-500/30 hover:shadow-cyan-500/50
                "
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                Get In Touch
              </motion.a>

              <motion.a
                href="#projects"
                className="
                  border border-slate-200 dark:border-slate-600
                  bg-white/90 dark:bg-transparent
                  text-slate-900 dark:text-white
                  px-6 sm:px-8 py-2.5 sm:py-3
                  rounded-lg font-medium
                  text-sm sm:text-base
                  transition-all duration-150
                  hover:border-cyan-400
                  hover:text-cyan-600 dark:hover:text-cyan-400
                  hover:shadow-md hover:shadow-slate-400/25
                "
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                View Work
              </motion.a>

              <motion.a
                href="https://drive.google.com/uc?export=download&id=19wwizB7S7KbI-0b30nM4LECFe-AEF1cs"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  border border-slate-200 dark:border-slate-600
                  bg-white/90 dark:bg-slate-900/40
                  text-slate-900 dark:text-slate-100
                  px-6 sm:px-8 py-2.5 sm:py-3
                  rounded-lg font-medium
                  text-sm sm:text-base
                  transition-all duration-150
                  hover:border-cyan-400
                  hover:text-cyan-600 dark:hover:text-cyan-400
                  hover:shadow-md hover:shadow-cyan-500/20
                "
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              className="
                flex gap-4
                justify-center md:justify-start
                pt-4 sm:pt-6
              "
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/vanshgarg20"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-slate-700 dark:text-slate-400
                  hover:text-cyan-600 dark:hover:text-cyan-400
                  transition-colors duration-150
                "
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vanshgarg20/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-slate-700 dark:text-slate-400
                  hover:text-cyan-600 dark:hover:text-cyan-400
                  transition-colors duration-150
                "
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href="mailto:vanshgarg19org@gmail.com"
                className="
                  text-slate-700 dark:text-slate-400
                  hover:text-cyan-600 dark:hover:text-cyan-400
                  transition-colors duration-150
                "
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="
              flex-1 flex justify-center
              w-full md:w-auto
            "
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Soft base glow under avatar */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.45),_transparent_65%)] blur-3xl opacity-80" />

              {/* Avatar wrapper */}
              <motion.div
                className="
                  relative group rounded-full p-[3px]
                  w-44 h-44
                  sm:w-56 sm:h-56
                  md:w-64 md:h-64
                  lg:w-[20rem] lg:h-[20rem]
                  bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600
                  shadow-[0_0_45px_rgba(34,211,238,0.55)]
                  transition-shadow duration-300
                  overflow-visible
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                {/* Outer hover glow (outside photo) */}
                <div
                  className="
                    pointer-events-none absolute -inset-5 rounded-full
                    bg-[radial-gradient(circle,_rgba(34,211,238,0.7),_transparent_60%)]
                    opacity-0 group-hover:opacity-80
                    blur-3xl transition-opacity duration-300
                  "
                />

                {/* Inner circle background */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#050c1a]">
                  <img
                    src="/vg.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Arrow only */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          delay: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowDown className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
      </motion.div>
    </motion.section>
  );
}
