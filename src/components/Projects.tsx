import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  problem: string;
  solution: string;
  features: string[];
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "SENSAI",
    subtitle: "AI Career Assistant",
    description:
      "AI-powered career platform with Resume Builder, Cover Letter Generator, and Interview Prep tools.",
    image: "/sensai.png",
    technologies: ["Next.js", "Flask", "Groq Llama API", "Clerk", "HTML", "CSS"],
    problem:
      "Job seekers often juggle multiple tools for resumes, cover letters, and interview prep, which is time-consuming and inconsistent.",
    solution:
      "Built a unified AI career assistant that generates and refines resumes, cover letters, and interview answers in one place using Groq Llama and a secure full-stack architecture.",
    features: [
      "AI Resume Builder, Cover Letter Generator, and Interview Prep assistant",
      "Real-time AI rewriting to improve tone, grammar, and professional phrasing",
      "Secure authentication with Clerk and encrypted data handling",
      "Analytics layer for tracking interview performance and usage",
    ],
    impact:
      "Enabled users to create 200+ personalized documents with ~98% accuracy and significantly improve application quality.",
    liveUrl: "https://sensai-yourcoach.vercel.app/",
    githubUrl: "https://github.com/vanshgarg20/sensai",
  },
  {
    title: "Cold Email Generator",
    subtitle: "AI Outreach Assistant",
    description:
      "Flask-based web app that generates highly personalized cold emails using Llama 3.1 and LangChain.",
    image: "/coldemail.png",
    technologies: ["Python", "Llama 3.1", "LangChain", "Flask", "HTML", "CSS"],
    problem:
      "Writing personalized cold emails manually is slow, repetitive, and often results in generic outreach.",
    solution:
      "Engineered an AI-powered generator that uses Llama 3.1, LangChain, and prompt templates to instantly create context-aware cold emails from a few input fields.",
    features: [
      "Recipient-aware email generation with name, role, and company context",
      "Prompt-engineering and template optimization for better tone & structure",
      "Support for multiple tones and purposes (outreach, follow-up, pitch, etc.)",
      "End-to-end web interface built with Flask, HTML, and CSS",
    ],
    impact:
      "Helped users generate 100+ high-quality emails and reduced manual drafting time by ~70%, with improved contextual accuracy.",
    liveUrl:
      "https://cold-email-generator-25.streamlit.app/#6-enterprise-technical-support-emea",
    githubUrl: "https://github.com/vanshgarg20/Cold-Email-Generator",
  },
  {
    title: "Coder Buddy",
    subtitle: "AI Coding Assistant",
    description:
      "AI assistant that helps developers with code suggestions, debugging, and snippet generation in real time.",
    image: "/coderbuddy.png",
    technologies: ["Python", "LangGraph", "Transformers", "Flask", "HTML", "CSS"],
    problem:
      "Beginners struggle with debugging and understanding code, leading to slow development and frustration.",
    solution:
      "Developed an AI coding assistant that uses transformer models, embeddings, and LangGraph agents to understand code and provide useful suggestions and explanations.",
    features: [
      "Real-time code suggestions and snippet generation",
      "Debugging assistance with explanations of errors and fixes",
      "Context-aware recommendations using embeddings and transformer models",
      "Clean web UI powered by Flask backend and HTML/CSS frontend",
    ],
    impact:
      "Improved developer efficiency by ~40% and boosted recommendation accuracy by ~30% through better code understanding.",
    liveUrl: "https://coder-buddy-25.streamlit.app/",
    githubUrl: "https://github.com/vanshgarg20/Coder-buddy",
  },
];

// animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <motion.section
      id="projects"
      className="
        scroll-mt-32
        py-16 sm:py-20
        bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100
        dark:from-slate-950 dark:via-slate-950 dark:to-slate-900
        theme-transition
      "
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <div
        className="
          w-full max-w-6xl mx-auto
          px-4 sm:px-6
        "
      >
        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-14 space-y-3 sm:space-y-4"
          variants={cardVariants}
        >
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600/80 dark:text-cyan-400/80">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A snapshot of the{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              AI &amp; full-stack
            </span>{" "}
            projects I&apos;ve built recently.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="
            grid grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6 sm:gap-8
          "
          variants={sectionVariants}
        >
          {projects.map((project) => (
            <motion.button
              key={project.title}
              type="button"
              onClick={() => setSelectedProject(project)}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 18px 45px rgba(15, 23, 42, 0.18)",
              }}
              whileTap={{ scale: 0.98 }}
              className="
                relative text-left
                bg-white/90 dark:bg-slate-900/90
                rounded-3xl overflow-hidden
                shadow-md
                border border-slate-200/80 dark:border-slate-800/80
                hover:border-cyan-400/80 dark:hover:border-cyan-400/80
                group
                focus:outline-none
                focus-visible:ring-2 focus-visible:ring-cyan-500/80
                focus-visible:ring-offset-2
                focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950
                transition-all duration-300
              "
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative overflow-hidden h-40 sm:h-48 md:h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-105
                    transition-transform duration-500
                    ease-[cubic-bezier(0.22,0.61,0.36,1)]
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-white/95 text-slate-900 dark:bg-slate-900/95 dark:text-slate-100 shadow-sm">
                    Click to view details
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-7 space-y-3">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-sm text-cyan-600 dark:text-cyan-400 font-semibold tracking-wide uppercase">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ y: -2, scale: 1.04 }}
                      className="
                        px-3 py-1 rounded-full
                        text-[10px] sm:text-[11px]
                        font-medium
                        bg-slate-100 dark:bg-slate-800
                        text-slate-700 dark:text-slate-200
                        border border-slate-200/80 dark:border-slate-700/80
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="
              fixed inset-0 z-[60]
              flex items-center justify-center
              bg-black/60 backdrop-blur-sm
              px-4
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="
                relative
                w-full max-w-5xl
                max-h-[90vh]
                bg-white dark:bg-slate-950
                rounded-3xl shadow-2xl
                overflow-hidden
                flex flex-col
              "
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="
                  absolute top-3 right-3 sm:top-4 sm:right-4 z-10
                  rounded-full
                  bg-white/90 dark:bg-slate-900/95
                  p-1.5 sm:p-2
                  shadow-md
                  hover:bg-slate-100 dark:hover:bg-slate-800
                  transition-colors
                "
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-200" />
              </button>

              <div className="w-full h-40 sm:h-56 md:h-[38vh] min-h-[14rem] max-h-[22rem] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="
                  flex-1 overflow-y-auto
                  p-5 sm:p-6 md:p-8
                  space-y-5 sm:space-y-6
                "
              >
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="
                          px-3 py-1
                          bg-slate-100 dark:bg-slate-800
                          text-[11px] sm:text-xs
                          text-slate-700 dark:text-slate-200
                          rounded-full
                          font-medium
                          border border-slate-200/80 dark:border-slate-700/80
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 text-sm md:text-base">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Problem
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Solution
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Key Features
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Impact
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {selectedProject.impact}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-1 sm:pt-2">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-4 py-2
                        rounded-xl
                        border border-slate-300 dark:border-slate-700
                        bg-white dark:bg-slate-900
                        text-xs sm:text-sm
                        text-slate-900 dark:text-slate-100
                        font-medium
                        hover:border-slate-400 dark:hover:border-slate-500
                        hover:bg-slate-50 dark:hover:bg-slate-800
                        transition-colors
                      "
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-4 py-2
                        rounded-xl
                        bg-cyan-600 hover:bg-cyan-700
                        text-white
                        text-xs sm:text-sm
                        font-medium
                        shadow-md shadow-cyan-500/30
                        transition-colors
                      "
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
