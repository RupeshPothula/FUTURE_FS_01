import React, { useState, useEffect } from "react";
import { Mail, ExternalLink } from "lucide-react";

export default function App() {
  const projects = [
    {
      title: "EventSphere",
      date: "June 2024",
      desc: "A web-based event management system designed to streamline the planning, organization, and tracking of college fests and activities.",
      tech: ["HTML", "CSS", "React", "Express", "MySQL"],
      link: "https://github.com/RupeshPothula/Event-Management-System",
    },
    {
      title: "Email Spoofing Detection",
      date: "August 2024",
      desc: "Detects spoofing in email headers and content using DMARC, SPF, and DKIM validation techniques. Provides improved email security against phishing and impersonation attacks.",
      tech: ["HTML", "CSS", "Python", "Machine Learning", "Flask", "DNS libraries", "SPF", "DKIM modules"],
      link: "https://github.com/RupeshPothula/Email-Spoofing.git",
    },
    {
      title: "Splitwise Expenses",
      date: "December 2023",
      desc: "A lightweight expense-sharing app that manages group spending. Automates expense calculation and stores details in CSV for easy tracking.",
      tech: ["Python"],
      link: "https://github.com/RupeshPothula/Splitwise-Python-Project.git",
    },
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "Bootstrap", "React", "Python", "Java", "DSA", "SQL", "GitHub"
  ];

  const [hovered, setHovered] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    // staggered animation for projects
    projects.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleProjects(prev => [...prev, idx]);
      }, idx * 200); // 0.2s delay between cards
    });

    // staggered animation for skills
    skills.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleSkills(prev => [...prev, idx]);
      }, idx * 100); // 0.1s delay between skills
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-gray-900 text-white font-[Poppins]">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between animate-fade-in relative z-10">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-cyan-300 drop-shadow-lg">Rupesh Pothula</h1>
          <p className="text-base text-cyan-200 mt-1 drop-shadow-md">Passionate Web Developer & Problem Solver</p>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-base">
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section (Text Only) */}
      <main className="max-w-6xl mx-auto px-6 pb-16 relative z-10">
        <section className="flex flex-col items-start gap-6 py-12 bg-black/20 p-6 rounded-2xl backdrop-blur-md animate-slide-in-left">
          <h2 className="text-5xl font-extrabold mb-4 text-cyan-200 drop-shadow-lg">
            Hi, I’m <span className="text-cyan-400">Rupesh Pothula</span>
          </h2>
          <p className="text-lg text-gray-200 mb-6 drop-shadow-md">
            Full-stack developer passionate about creating scalable, user-friendly web applications from frontend to backend.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full bg-cyan-400 text-gray-900 font-semibold shadow-lg hover:bg-cyan-500 transition attractive-btn"
          >
            Let's Connect
          </a>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16">
          <h3 className="text-3xl font-bold border-b border-cyan-500 pb-2 mb-8 text-cyan-300 drop-shadow-md">Projects</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((p, idx) => (
              <article
                key={p.title}
                className={`relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-cyan-700 shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer attractive-fade
                  ${visibleProjects.includes(idx) ? 'animate-stagger-fade' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.2}s` }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <h4 className="font-semibold text-xl mb-2 text-cyan-200 drop-shadow-md">{p.title}</h4>
                <div className="text-xs text-cyan-300 mb-2">{p.date}</div>
                <p className="mb-3 text-gray-200 text-base">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-1 rounded bg-cyan-600/30 border border-cyan-500 text-xs">{t}</span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm border border-cyan-500 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/30 transition text-cyan-200"
                >
                  <ExternalLink size={16} /> View Project
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-16">
          <h3 className="text-3xl font-bold border-b border-cyan-500 pb-2 mb-8 text-cyan-300 drop-shadow-md">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((s, idx) => (
              <div
                key={s}
                className={`text-base bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-cyan-600 shadow hover:bg-cyan-600/20 transition text-cyan-200 attractive-fade
                  ${visibleSkills.includes(idx) ? 'animate-stagger-fade' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16 animate-fade-in">
          <h3 className="text-3xl font-bold border-b border-cyan-500 pb-2 mb-8 text-cyan-300 drop-shadow-md">Contact Me</h3>
          <p className="mb-6 text-gray-200 text-base drop-shadow-md">Feel free to reach out via email for opportunities or collaboration:</p>
          <a
            href="mailto:pothularupesh@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-400 text-gray-900 font-semibold shadow-lg hover:bg-cyan-500 transition attractive-btn"
          >
            <Mail size={20} /> Send Email
          </a>
        </section>
      </main>
    </div>
  );
}
