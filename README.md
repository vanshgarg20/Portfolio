# 🚀 Vansh Garg – Personal Portfolio

A modern, responsive portfolio website built with **React + Vite + TypeScript**, **Tailwind CSS**, and **Framer Motion**, featuring a backend contact API powered by **Node.js**, **MongoDB**, and **Nodemailer**.

This site showcases my work in **Data Science, AI, and Full-Stack Development** with animated sections, dark/light theme toggle, and a fully functional contact form.

---

## ✨ Features

- 🎯 **Hero Section**
  - Animated introduction with gradient text and floating avatar
  - Smooth scroll and CTA buttons: _Get In Touch_, _View Work_, _Download CV_

- 🙋‍♂️ **About Me**
  - Detailed introduction with animated photo card
  - Highlight cards for AI projects, learning journey, and personal interests
  - Quick stats (LeetCode, AI products, simulations)

- 🎓 **Education Timeline**
  - Vertical timeline with animated nodes
  - Cards for B.Tech and Class XII with key highlights

- 🧠 **Skills & Expertise**
  - Categorized skill cards:
    - Programming Languages
    - AI & Machine Learning
    - Data & Analytics
    - Web & Backend
    - Databases
    - Tools & Platforms
  - Hover animations and responsive grid layout

- 💼 **Projects**
  - Featured AI projects:
    - **SENSAI** – AI Career Assistant
    - **Cold Email Generator**
    - **Coder Buddy** – AI Coding Assistant
  - Each project has:
    - Image preview
    - Tech stack chips
    - Clickable card that opens a **detailed modal** with:
      - Problem, Solution, Features, Impact
      - Links to **Live Demo** and **GitHub Repo**

- 📩 **Contact Form**
  - Name, email, and message fields
  - Connected to a Node.js backend endpoint (`/api/contact`)
  - Sends emails using **Nodemailer**
  - Success and error states with clean UI feedback

- 🌙 **Dark / Light Theme**
  - Theme toggle using a custom `ThemeToggle` component
  - Theme preference persisted in `localStorage`
  - `darkMode: "class"` Tailwind setup

- 📱 **Fully Responsive**
  - Optimized for **mobile**, **tablet**, and **desktop**
  - Components using fluid grids, responsive typography, and flexible spacing

---

## 🛠 Tech Stack

### Frontend

- [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

### Backend

- Node.js
- Express (or native HTTP server, depending on setup)
- Nodemailer
- MongoDB (via `MONGODB_URI` connection string)
- Environment variables via `.env`

### Deployment

- Frontend: **Vercel** (recommended)
- Backend/API: **Render/Railway/Other Node hosting** (with env vars set)

---

## 📂 Project Structure

```bash
project-root/
├── public/
│   ├── vg.png               # Hero avatar
│   ├── sensai.png           # Project screenshots
│   ├── coldemail.png
│   └── coderbuddy.png
├── src/
│   ├── main.tsx             # React entry
│   ├── App.tsx              # Root layout
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Education.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── ThemeToggle.tsx
├── server.js                # Backend server (contact API, Mongo, Nodemailer)
├── .env                     # Environment variables (ignored in Git)
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
