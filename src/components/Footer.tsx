import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        bg-slate-100 text-slate-800
        dark:bg-slate-900 dark:text-white
        py-10 sm:py-12
        border-t border-slate-200 dark:border-slate-800
        theme-transition
      "
    >
      <div
        className="
          w-full max-w-6xl mx-auto
          px-4 sm:px-6
        "
      >
        {/* Top Section */}
        <div
          className="
            flex flex-col md:flex-row
            justify-between items-center
            gap-5 sm:gap-6
          "
        >
          {/* Name & Role */}
          <div className="text-center md:text-left">
            <h3
              className="
                text-xl sm:text-2xl
                font-bold mb-1.5 sm:mb-2
                bg-gradient-to-r from-cyan-500 to-blue-500
                bg-clip-text text-transparent
              "
            >
              Vansh Garg
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Data Science &amp; AI Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://github.com/vanshgarg20"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-2.5 sm:p-3 rounded-lg
                transition-all duration-150 shadow-sm
                bg-slate-200 text-slate-800
                dark:bg-slate-800 dark:text-slate-100
                hover:bg-cyan-500 hover:text-white
                dark:hover:bg-cyan-500
              "
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/vanshgarg20/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-2.5 sm:p-3 rounded-lg
                transition-all duration-150 shadow-sm
                bg-slate-200 text-slate-800
                dark:bg-slate-800 dark:text-slate-100
                hover:bg-cyan-500 hover:text-white
                dark:hover:bg-cyan-500
              "
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href="mailto:vanshgarg19org@gmail.com"
              className="
                p-2.5 sm:p-3 rounded-lg
                transition-all duration-150 shadow-sm
                bg-slate-200 text-slate-800
                dark:bg-slate-800 dark:text-slate-100
                hover:bg-cyan-500 hover:text-white
                dark:hover:bg-cyan-500
              "
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Divider & Bottom Text */}
        <div
          className="
            border-t border-slate-200 dark:border-slate-800
            mt-6 sm:mt-8 pt-6 sm:pt-8
            text-center
            text-[11px] sm:text-sm
            text-slate-600 dark:text-slate-400
          "
        >
          <p className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span className="flex items-center gap-1">
              Made with{" "}
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 fill-current" />{" "}
              by
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">
              Vansh Garg
            </span>
            <span className="hidden sm:inline mx-1">•</span>
            <span className="sm:inline-block block w-full sm:w-auto">
              {new Date().getFullYear()}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
