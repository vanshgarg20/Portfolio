import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <motion.div
      className="
        min-h-screen
        flex flex-col
        bg-slate-50 dark:bg-slate-950
        text-slate-900 dark:text-white
        theme-transition
        overflow-x-hidden
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Navbar (already animated inside) */}
      <Navbar />

      <main className="flex-1">
        {/* Each section has its own motion + whileInView logic */}
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}

export default App;
