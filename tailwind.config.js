/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 🌙 enables dark mode via manual 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scans all source files for Tailwind usage
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Custom primary palette for gradients & accents
        primary: {
          light: '#38bdf8', // cyan-400
          DEFAULT: '#06b6d4', // cyan-500
          dark: '#0891b2', // cyan-600
        },
      },
      fontFamily: {
        // 🧠 Clean, modern typography
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      transitionTimingFunction: {
        // ⚡ Smooth motion for Framer + Tailwind transitions
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      boxShadow: {
        // 💫 Soft glow effects for cards & buttons
        'glow-cyan': '0 0 20px rgba(34,211,238,0.35)',
        'glow-blue': '0 0 25px rgba(59,130,246,0.35)',
      },
    },
  },
  plugins: [],
};
