import { Code, Database, Layout, Server, Smartphone, Wrench } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["Java", "Python", "C"],
  },
  {
    title: "AI & Machine Learning",
    icon: <Layout className="w-6 h-6" />,
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
      "LLMs · LangChain",
      "LangGraph",
      "Transformers",
    ],
  },
  {
    title: "Data & Analytics",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Apache Spark", "SQL", "Power BI", "Tableau"],
  },
  {
    title: "Web & Backend",
    icon: <Server className="w-6 h-6" />,
    skills: ["Flask", "FastAPI", "Streamlit", "Next.js", "HTML", "CSS"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["GitHub", "VS Code", "IntelliJ IDEA"],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="
        scroll-mt-32
        py-16 sm:py-20
        bg-slate-50 dark:bg-slate-950
        theme-transition
      "
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className="
          w-full max-w-6xl mx-auto
          px-4 sm:px-6
        "
      >
        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          variants={sectionVariants}
        >
          <motion.h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold
              text-slate-900 dark:text-white
              mb-3 sm:mb-4
            "
            variants={cardVariants}
          >
            Skills &amp; Expertise
          </motion.h2>
          <motion.p
            className="
              text-sm sm:text-base md:text-lg
              text-slate-600 dark:text-slate-400
              max-w-2xl mx-auto
            "
            variants={cardVariants}
          >
            AI, data, and full-stack technologies I work with.
          </motion.p>
        </motion.div>

        {/* Skill cards */}
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6 sm:gap-8
          "
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="
                bg-slate-50 dark:bg-slate-900/70
                rounded-xl
                p-5 sm:p-6
                border border-slate-200 dark:border-slate-700
                hover:border-cyan-400
                hover:shadow-lg hover:shadow-cyan-500/20
                transition-all duration-300
                group
              "
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {/* Animated Icon Box */}
                <motion.div
                  className="
                    p-3
                    bg-cyan-100 text-cyan-600
                    dark:bg-cyan-900/40 dark:text-cyan-300
                    rounded-lg
                  "
                  whileHover={{
                    rotate: [0, 8, -8, 0],
                    scale: 1.15,
                    boxShadow: "0 0 18px rgba(34,211,238,0.4)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  {category.icon}
                </motion.div>

                <motion.h3
                  className="
                    text-lg sm:text-xl
                    font-bold
                    text-slate-900 dark:text-white
                  "
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  {category.title}
                </motion.h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="
                      px-3 py-1
                      bg-white dark:bg-slate-900/60
                      text-xs sm:text-sm
                      text-slate-700 dark:text-slate-100
                      rounded-lg
                      font-medium
                      border border-slate-200 dark:border-slate-700
                    "
                    whileHover={{
                      scale: 1.07,
                      y: -2,
                      backgroundColor: "#e0f7fa",
                      color: "#0e7490",
                      borderColor: "#22d3ee",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 15,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
