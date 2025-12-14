"use client";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: 0.15 + i * 0.08 },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="
        scroll-mt-32 min-h-screen
        px-4 sm:px-6 lg:px-10
        py-16 sm:py-20
        bg-gradient-to-b from-slate-50 to-slate-200
        dark:from-slate-950 dark:to-slate-900
        text-slate-900 dark:text-white
        transition-colors duration-300
        flex
      "
    >
      {/* Inner container for responsive layout */}
      <div
        className="
          w-full max-w-6xl mx-auto
          flex flex-col md:flex-row
          items-center md:items-start
          justify-center
          gap-10 lg:gap-14
        "
      >
        {/* --- Left Side: Animated Photo --- */}
        <motion.div
          className="
            w-full md:w-1/2
            flex justify-center md:justify-start
            md:-mt-4
          "
          initial={{ opacity: 0, scale: 0.9, x: -60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="
              relative group rounded-3xl shadow-2xl
              bg-white/90 dark:bg-slate-900/40
              p-4 sm:p-5 md:p-6
              transition-colors duration-300
              w-full max-w-xs sm:max-w-sm md:max-w-md
            "
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.04, y: -6 }}
          >
            {/* glowing gradient behind card */}
            <div
              className="
                pointer-events-none absolute -inset-4
                bg-gradient-to-tr from-cyan-500/30 via-blue-500/25 to-purple-500/30
                opacity-50 blur-3xl group-hover:opacity-80
                transition-opacity duration-500
              "
              aria-hidden="true"
            />

            {/* inner card content */}
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/vg.png"
                alt="Vansh Garg"
                className="
                  rounded-3xl
                  w-full
                  max-w-[260px] sm:max-w-[320px]
                  md:max-w-[360px] lg:max-w-[420px]
                  aspect-[3/4]
                  object-cover object-top
                  transform transition-transform duration-500 group-hover:scale-[1.03]
                  mx-auto
                "
              />
            </div>
          </motion.div>
        </motion.div>

        {/* --- Right Side: About Text --- */}
        <motion.div
          className="
            w-full md:w-1/2
            text-left space-y-6
            max-w-xl md:max-w-2xl
          "
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold
              text-blue-600 dark:text-blue-400
              mb-2
            "
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            About Me
          </motion.h2>

          {/* Intro line */}
          <motion.p
            className="
              text-sm sm:text-base md:text-lg
              text-slate-700 dark:text-gray-300
              leading-relaxed
            "
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Hi, I’m{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Vansh Garg
            </span>
            , a Computer Science student at COER University, Roorkee, driven by
            curiosity and a love for building intelligent systems. I specialize
            in{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              AI-powered development
            </span>{" "}
            — turning data, automation, and design into real products.
          </motion.p>

          {/* Highlight cards */}
          <div className="space-y-4 mt-4">
            {/* 1. Projects */}
            <motion.div
              className="
                group flex gap-3 items-start
                rounded-2xl
                bg-white/95 dark:bg-slate-900/60
                border border-slate-200/80 dark:border-slate-700/70
                px-4 py-3 sm:px-5 sm:py-4
                shadow-sm
                transition-all duration-150
                hover:bg-slate-50 dark:hover:bg-slate-900
                hover:shadow-[0_18px_55px_rgba(15,23,42,0.18)]
                dark:hover:shadow-[0_18px_55px_rgba(15,23,42,0.55)]
                cursor-default
              "
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div
                className="
                  mt-1 h-2 w-2 rounded-full bg-cyan-400
                  flex-shrink-0
                  group-hover:scale-150
                  group-hover:shadow-[0_0_12px_rgba(34,211,238,0.9)]
                  transition-transform duration-150
                "
              />
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                  Building with AI
                </h3>
                <p className="text-sm sm:text-base text-slate-700 dark:text-gray-200 leading-relaxed">
                  I’ve built <span className="font-semibold">SENSAI</span> (AI
                  career assistant), a{" "}
                  <span className="font-semibold">Cold Email</span> generator,
                  and <span className="font-semibold">Coder Buddy</span> — tools
                  that make work smarter and faster using{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Next.js, Flask, and LLMs
                  </span>{" "}
                  like Groq Llama and LangChain.
                </p>
              </div>
            </motion.div>

            {/* 2. Experience */}
            <motion.div
              className="
                group flex gap-3 items-start
                rounded-2xl
                bg-white/95 dark:bg-slate-900/60
                border border-slate-200/80 dark:border-slate-700/70
                px-4 py-3 sm:px-5 sm:py-4
                shadow-sm
                transition-all duration-150
                hover:bg-slate-50 dark:hover:bg-slate-900
                hover:shadow-[0_18px_55px_rgba(15,23,42,0.18)]
                dark:hover:shadow-[0_18px_55px_rgba(15,23,42,0.55)]
                cursor-default
              "
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div
                className="
                  mt-1 h-2 w-2 rounded-full bg-emerald-400
                  flex-shrink-0
                  group-hover:scale-150
                  group-hover:shadow-[0_0_12px_rgba(52,211,153,0.9)]
                  transition-transform duration-150
                "
              />
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                  Learning by doing
                </h3>
                <p className="text-sm sm:text-base text-slate-700 dark:text-gray-200 leading-relaxed">
                  I’ve solved{" "}
                  <span className="font-semibold">350+ problems</span> on
                  LeetCode, participated in national hackathons, and completed
                  simulations with <span className="font-semibold">Tata</span>{" "}
                  and <span className="font-semibold">Deloitte</span> to sharpen
                  my skills in AI-driven analytics and data interpretation.
                </p>
              </div>
            </motion.div>

            {/* 3. Personality */}
            <motion.div
              className="
                group flex gap-3 items-start
                rounded-2xl
                bg-white/95 dark:bg-slate-900/60
                border border-slate-200/80 dark:border-slate-700/70
                px-4 py-3 sm:px-5 sm:py-4
                shadow-sm
                transition-all duration-150
                hover:bg-slate-50 dark:hover:bg-slate-900
                hover:shadow-[0_18px_55px_rgba(15,23,42,0.18)]
                dark:hover:shadow-[0_18px_55px_rgba(15,23,42,0.55)]
                cursor-default
              "
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div
                className="
                  mt-1 h-2 w-2 rounded-full bg-violet-400
                  flex-shrink-0
                  group-hover:scale-150
                  group-hover:shadow-[0_0_12px_rgba(167,139,250,0.95)]
                  transition-transform duration-150
                "
              />
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                  Beyond the screen
                </h3>
                <p className="text-sm sm:text-base text-slate-700 dark:text-gray-200 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies or playing badminton — because balance is key to
                  building great things.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            className="
              mt-6
              grid grid-cols-2 md:grid-cols-3
              gap-3 sm:gap-4
              text-sm md:text-base
            "
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
          >
            <div className="rounded-2xl bg-slate-900/5 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 px-4 py-3">
              <p className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400">
                350+
              </p>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300">
                LeetCode problems solved
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/5 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 px-4 py-3">
              <p className="text-lg md:text-xl font-bold text-emerald-500 dark:text-emerald-400">
                3+
              </p>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300">
                AI-powered products built
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/5 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 px-4 py-3 col-span-2 md:col-span-1">
              <p className="text-lg md:text-xl font-bold text-cyan-600 dark:text-cyan-300">
                Hands-on
              </p>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300">
                Tata &amp; Deloitte simulations
              </p>
            </div>
          </motion.div>

          {/* Skills / interest chips */}
          <motion.div
            className="mt-4 flex flex-wrap gap-2"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
          >
            {[
              "AI Development",
              "Data Science",
              "Full-Stack Engineering",
              "Next.js",
              "Flask",
              "LangChain & LLMs",
            ].map((tag) => (
              <span
                key={tag}
                className="
                  text-xs md:text-sm px-3 py-1 rounded-full
                  bg-blue-50 text-blue-700
                  dark:bg-slate-800 dark:text-blue-300
                  border border-blue-100 dark:border-slate-700
                "
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* --- Resume Button --- */}
          <motion.a
            href="/VGr.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
            className="
              inline-block mt-8
              bg-blue-600 hover:bg-blue-700
              dark:bg-blue-500 dark:hover:bg-blue-600
              text-white px-6 sm:px-7 py-2.5 sm:py-3
              rounded-lg font-semibold
              text-sm sm:text-base
              transition-all duration-300 shadow-md hover:shadow-blue-500/40
            "
          >
            View Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
