import { motion } from "framer-motion";
import { GraduationCap, School, Calendar, MapPin } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const educationItems = [
  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "COER University",
    location: "Roorkee, Uttarakhand · India",
    period: "Aug 2022 – Present",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    bullets: [
      "Pursuing Bachelor of Technology in Computer Science.",
      "Focused on Artificial Intelligence, Data Science, and Full-Stack Development.",
      "Actively working on AI-based projects using Next.js, Flask, and LangChain.",
    ],
  },
  {
    title: "Class XII (CBSE) · Science Stream",
    institution: "G.C.P.S. Sr. Sec. School",
    location: "Muzaffarnagar, Uttar Pradesh · India",
    period: "Apr 2020 – Apr 2022",
    icon: <School className="w-6 h-6 text-white" />,
    bullets: [
      "Scored 70% in Class 12th (Science stream).",
      "Built strong fundamentals in Mathematics, Physics, and Computer Science.",
    ],
  },
];

function EducationCard({ edu }: { edu: (typeof educationItems)[number] }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -6,
        boxShadow:
          "0 8px 22px rgba(34,211,238,0.15), 0 0 18px rgba(34,211,238,0.25)",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 12 }}
      className="
        bg-white dark:bg-slate-900/90
        rounded-xl shadow-md
        transition-all duration-300
        border border-slate-200 dark:border-slate-800
        hover:border-cyan-400/70 dark:hover:border-cyan-400/70
        w-full md:max-w-lg
      "
    >
      <div className="p-5 sm:p-6 md:p-7">
        {/* Label */}
        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase mb-3">
          <GraduationCap className="w-4 h-4" />
          <span>Education</span>
        </div>

        {/* Institution + location */}
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-900 dark:text-white">
          {edu.institution}
        </h3>
        <p className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          <MapPin className="w-4 h-4" />
          <span>{edu.location}</span>
        </p>

        {/* Bullets */}
        <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-600 dark:text-slate-300">
          {edu.bullets.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Degree + period */}
        <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm md:text-base">
          <p className="font-semibold text-slate-900 dark:text-white">
            {edu.title}
          </p>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 whitespace-nowrap">
            <Calendar className="w-4 h-4" />
            <span>{edu.period}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <motion.section
      id="education"
      className="
        scroll-mt-32
        py-16 sm:py-20
        bg-slate-50 dark:bg-slate-950
        transition-colors duration-300
      "
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className="
          w-full max-w-5xl mx-auto
          px-4 sm:px-6
        "
      >
        {/* Heading */}
        <motion.div className="text-center mb-10 sm:mb-14" variants={sectionVariants}>
          <motion.h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold
              text-slate-900 dark:text-white
              mb-3 sm:mb-4
            "
            variants={cardVariants}
          >
            Education
          </motion.h2>
          <motion.p
            className="
              text-sm sm:text-base md:text-lg
              text-slate-600 dark:text-slate-400
              max-w-2xl mx-auto
            "
            variants={cardVariants}
          >
            A snapshot of my academic journey and core foundations.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central line */}
          <div
            className="
              absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]
              bg-gradient-to-b from-cyan-400/80 via-cyan-400/40 to-cyan-400/10
              dark:from-cyan-400/80 dark:via-cyan-400/40 dark:to-cyan-400/10
              z-0
              hidden md:block
            "
          />

          {educationItems.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={edu.title}
                className="
                  relative
                  flex items-center justify-between
                  mb-10 md:mb-14
                  z-10
                "
                variants={cardVariants}
              >
                {/* Desktop / tablet timeline (two-column) */}
                {isLeft ? (
                  <>
                    {/* Left card */}
                    <div className="hidden md:flex w-1/2 justify-end pr-6 lg:pr-8">
                      <EducationCard edu={edu} />
                    </div>

                    {/* Icon */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.12, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-cyan-500 shadow-lg flex items-center justify-center"
                      >
                        {edu.icon}
                      </motion.div>
                    </div>

                    <div className="hidden md:flex w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:flex w-1/2" />

                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.12, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-cyan-500 shadow-lg flex items-center justify-center"
                      >
                        {edu.icon}
                      </motion.div>
                    </div>

                    <div className="hidden md:flex w-1/2 justify-start pl-6 lg:pl-8">
                      <EducationCard edu={edu} />
                    </div>
                  </>
                )}

                {/* Mobile layout (single column) */}
                <div className="md:hidden w-full">
                  <EducationCard edu={edu} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
