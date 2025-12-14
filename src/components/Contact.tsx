// src/components/Contact.tsx
import React, { useState } from "react";
import { Send } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

// 🔗 Backend URL (env first, fallback to Render URL)
const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ??
  "https://portfolio-backend-kfr0.onrender.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStatus("idle");
    setErrorMsg("");
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // few seconds baad message hatane ke liye
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: unknown) {
      console.error("Contact submit error:", err);

      let message = "Failed to send message";

      if (err instanceof Error && err.message) {
        message = err.message;
      }

      setStatus("error");
      setErrorMsg(message);
    }
  };

  return (
    <section
      id="contact"
      className="
        scroll-mt-32
        py-16 sm:py-20
        bg-slate-50 dark:bg-slate-950
        theme-transition
      "
    >
      <div
        className="
          w-full max-w-3xl mx-auto
          px-4 sm:px-6
          text-center
        "
      >
        {/* Heading */}
        <h2
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-bold
            text-slate-900 dark:text-white
            mb-3 sm:mb-4
          "
        >
          Get In Touch
        </h2>
        <p
          className="
            text-sm sm:text-base md:text-lg
            text-slate-600 dark:text-slate-400
            mb-8 sm:mb-10 md:mb-12
            max-w-2xl mx-auto
          "
        >
          Have a project in mind? Let&apos;s connect and build something
          amazing.
        </p>

        {/* Form card */}
        <div
          className="
            bg-white/95 dark:bg-slate-900/70
            border border-slate-200/80 dark:border-slate-800
            rounded-2xl
            shadow-lg shadow-slate-900/5 dark:shadow-slate-900/40
            px-4 py-6
            sm:px-6 sm:py-7
            md:px-8 md:py-8
            text-left
          "
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="
                  block text-sm font-medium
                  text-slate-900 dark:text-slate-100
                  mb-2
                "
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="
                  w-full px-4 py-3
                  rounded-lg
                  border border-slate-300 dark:border-slate-700
                  bg-white dark:bg-slate-900/70
                  text-sm sm:text-base
                  text-slate-900 dark:text-slate-100
                  focus:ring-2 focus:ring-cyan-400
                  focus:border-transparent
                  outline-none
                  transition-all
                "
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="
                  block text-sm font-medium
                  text-slate-900 dark:text-slate-100
                  mb-2
                "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="
                  w-full px-4 py-3
                  rounded-lg
                  border border-slate-300 dark:border-slate-700
                  bg-white dark:bg-slate-900/70
                  text-sm sm:text-base
                  text-slate-900 dark:text-slate-100
                  focus:ring-2 focus:ring-cyan-400
                  focus:border-transparent
                  outline-none
                  transition-all
                "
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="
                  block text-sm font-medium
                  text-slate-900 dark:text-slate-100
                  mb-2
                "
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="
                  w-full px-4 py-3
                  rounded-lg
                  border border-slate-300 dark:border-slate-700
                  bg-white dark:bg-slate-900/70
                  text-sm sm:text-base
                  text-slate-900 dark:text-slate-100
                  focus:ring-2 focus:ring-cyan-400
                  focus:border-transparent
                  outline-none
                  transition-all
                  resize-none
                "
              />
            </div>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-sm text-emerald-500">
                ✅ Message sent successfully! I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500">
                ❌ {errorMsg || "Something went wrong. Please try again."}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="
                w-full
                bg-cyan-500 hover:bg-cyan-600
                text-white
                py-3 px-6
                rounded-lg
                font-medium
                text-sm sm:text-base
                transition-all duration-300
                hover:scale-[1.02]
                hover:shadow-lg hover:shadow-cyan-500/40
                flex items-center justify-center gap-2
                disabled:opacity-70 disabled:cursor-not-allowed
              "
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
