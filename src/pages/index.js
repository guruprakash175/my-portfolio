// File: pages/index.js
// Next.js Cyber-themed Portfolio
// This is a complete portfolio template with a cybersecurity theme,
// featuring advanced CSS animations, glitch effects, and a modern design.
import { useState, useEffect } from "react";
import Head from "next/head";

import Aboutsection from "./Aboutsection";
import Projectsection from "./Projectsection";
// Import your image here

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [glitchActive, setGlitchActive] = useState(false);

  const fullText = "MERN STACK DEVELOPER | CYBERSECURITY ENTHUSIAST ";
  const sections = ["home", "about", "skills", "projects", "contact"];

  // Simulate typing effect
  useEffect(() => {
    if (loaded) {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      }
    }
  }, [typedText, loaded]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Simulate loading sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Random glitch effect that triggers periodically
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, Math.random() * 5000 + 3000);
    return () => clearInterval(glitchInterval);
  }, []);

  // Apply skill animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = document.querySelectorAll(".skill-progress");
            skillBars.forEach((bar, index) => {
              const level =
                bar.parentElement.previousElementSibling.querySelector(
                  ".skill-percentage"
                ).textContent;
              bar.style.setProperty("--level", level);
              bar.style.setProperty("--data-delay", index * 0.1);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.querySelector(".skills-section");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, [currentSectionIndex]);

  // Projects data
  const projects = [
    {
      title: "Ransomware Detection and Prevention",
      description:
        "Built a ransomware detection web app with real-time monitoring, signature/honeypot detection, Kernel Kill Switch, and Docker-based rollback system. Integrated alerts and provided user-friendly executables.",
      tech: ["React", "Node.js", "Express", "Python", "C", "Docker"],
    },
    {
      title: "LMS for Secured Computing",
      description:
        "Developing a Learning Management System focused on cryptography education with secure computing principles. Features interactive cryptographic implementations and secure data management.",
      tech: ["HTML", "CSS", "React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Anti-virus Software with Real-time Protection",
      description:
        "Creating antivirus software with real-time protection, quick scanning, ransomware detection, and chatbot integration. Implemented Docker-based recovery and alert systems.",
      tech: ["MERN Stack", "C", "Python", "Docker"],
    },
  ];

  // Skills data
  const skills = [
    { name: "React.js / Next.js", level: 90 },
    { name: "Node.js / Express.js", level: 85 },
    { name: "TypeScript / JavaScript", level: 90 },
    { name: "MongoDB / SQL", level: 80 },
    { name: "Python", level: 80 },
    { name: "Java / C", level: 70 },
    { name: "Web App Penetration Testing", level: 85 },
    { name: "Network Security", level: 80 },
    { name: "AWS ", level: 50 },
    { name: "Docker ", level: 50 },
    { name: "CTF & Vulnerability Research", level: 75 },
  ];

  if (!loaded) {
    return (
      <div className="loading-screen">
        <div className="loading-container">
          <div className="loading-text">INITIALIZING SYSTEM</div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <div className="loading-details">
            <div>Loading modules...</div>
            <div>Establishing secure connection...</div>
            <div>Verifying encryption keys...</div>
          </div>
        </div>

        <style jsx>{`
          .loading-screen {
            background-color: #0a0a0a;
            color: #0f0;
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: "Courier New", monospace;
          }

          .loading-container {
            width: 80%;
            max-width: 600px;
          }

          .loading-text {
            font-size: 24px;
            margin-bottom: 20px;
            letter-spacing: 2px;
            animation: pulse 1.5s infinite;
          }

          .progress-bar {
            width: 100%;
            height: 20px;
            background-color: #111;
            border: 1px solid #0f0;
            margin-bottom: 20px;
            position: relative;
            overflow: hidden;
          }

          .progress-fill {
            height: 100%;
            background-color: #0f0;
            width: 0%;
            animation: fill 2s forwards;
          }

          .loading-details {
            font-size: 14px;
            color: #0c0;
            line-height: 1.5;
          }

          .loading-details div {
            margin: 5px 0;
            animation: fadeIn 0.5s forwards;
            opacity: 0;
          }

          .loading-details div:nth-child(1) {
            animation-delay: 0.5s;
          }

          .loading-details div:nth-child(2) {
            animation-delay: 1s;
          }

          .loading-details div:nth-child(3) {
            animation-delay: 1.5s;
          }

          @keyframes fill {
            0% {
              width: 0%;
            }
            60% {
              width: 60%;
            }
            90% {
              width: 90%;
            }
            100% {
              width: 100%;
            }
          }

          @keyframes pulse {
            0% {
              opacity: 0.7;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0.7;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className={`container ${glitchActive ? "glitch" : ""}`}>
      <Head>
        <title>Guru Prakash | Web Developer & Cybersecurity Specialist</title>
        <meta
          name="description"
          content="Portfolio of a web developer and cybersecurity specialist"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <div className="logo">
          <span className="logo-bracket">[</span>
          <span className="logo-text">GP</span>
          <span className="logo-bracket">]</span>
        </div>
        <div className="nav-links">
          {sections.map((section, index) => (
            <button
              key={section}
              className={`nav-link ${
                currentSectionIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentSectionIndex(index)}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      <main>
        {currentSectionIndex === 0 && (
          <section className="hero-section">
            <div className="hero-content">
              <h1 className="glitch-text">GURU PRAKASH</h1>
              <p className="subtitle">
                {typedText}
                <span className={`cursor ${showCursor ? "visible" : "hidden"}`}>
                  |
                </span>
              </p>
              <div className="cta-buttons">
                <button
                  className="cta-button primary"
                  onClick={() => setCurrentSectionIndex(3)} // Projects section index
                >
                  View Projects
                </button>
                <button
                  className="cta-button secondary"
                  onClick={() => setCurrentSectionIndex(4)} // Contact section index
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="matrix-bg"></div>
          </section>
        )}
        {currentSectionIndex === 1 && <Aboutsection />}

        {currentSectionIndex === 2 && (
          <section className="skills-section">
            <h2 className="section-title">
              My <span className="highlight">Skills</span>
            </h2>
            <div className="skills-content">
              <div className="skills-left">
                <h3>Technical Expertise</h3>
                <div className="skill-bars">
                  {skills.map((skill, index) => (
                    <div className="skill-item" key={index}>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                          data-delay={index * 0.1}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="skills-right">
                <h3>Areas of Expertise</h3>
                <div className="expertise-grid">
                  <div className="expertise-card">
                    <div className="expertise-icon">🔒</div>
                    <h4>Secure Development</h4>
                    <p>Building applications with security at every layer</p>
                  </div>
                  <div className="expertise-card">
                    <div className="expertise-icon">🔍</div>
                    <h4>Penetration Testing</h4>
                    <p>Identifying and exploiting vulnerabilities</p>
                  </div>
                  <div className="expertise-card">
                    <div className="expertise-icon">📱</div>
                    <h4>Responsive Design</h4>
                    <p>Creating interfaces that work across all devices</p>
                  </div>
                  <div className="expertise-card">
                    <div className="expertise-icon">⚡</div>
                    <h4>Performance Optimization</h4>
                    <p>Building fast and efficient applications</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {currentSectionIndex === 3 && <Projectsection />}

        {currentSectionIndex === 4 && (
          <section className="contact-section">
            <h2 className="section-title">
              Contact <span className="highlight">Me</span>
            </h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Let's Work Together</h3>
                <p>
                  I'm always open to discussing new projects, creative ideas or
                  opportunities to be part of your vision.
                </p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-icon">📧</div>
                    <div className="contact-details">
                      <h4>Email</h4>
                      <p>rsdg2004@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">📱</div>
                    <div className="contact-details">
                      <h4>Phone</h4>
                      <p>+91 9345572131</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="contact-icon">🌐</div>
                    <div className="contact-details">
                      <h4>Social</h4>
                      <div className="social-links">
                        <a
                          href="https://github.com/guruprakash175"
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                        <a
                          href="https://linkedin.com/in/guru-prakash-a31673258"
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://x.com/GuruPrakas43197"
                          className="social-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Twitter
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <div className="form-header">
                  <h3>Send Me a Message</h3>
                  <div className="encryption-badge">
                    <span className="encryption-icon">🔒</span>
                    <span>End-to-End Encrypted</span>
                  </div>
                </div>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <button type="submit" className="cta-button primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-bracket">[</span>
            <span className="logo-text">GP</span>
            <span className="logo-bracket">]</span>
          </div>
          <div className="footer-text">
            © {new Date().getFullYear()} Guru Prakash. All rights reserved.
          </div>
          <div className="footer-social">
            <a
              href="https://github.com/guruprakash175"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/guru-prakash-a31673258"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/GuruPrakas43197"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --primary-color: #0f0;
          --secondary-color: #00e0ff;
          --dark-bg: #0a0a0a;
          --darker-bg: #070707;
          --light-bg: #111;
          --lighter-bg: #1a1a1a;
          --text-color: #eee;
          --highlight-color: #0f0;
          --accent-color: #ff003c;
          --font-mono: "Courier New", monospace;
          --font-sans: "Arial", sans-serif;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          background-color: var(--dark-bg);
          color: var(--text-color);
          font-family: var(--font-sans);
          scroll-behavior: smooth;
          overflow-x: hidden;
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        /* Navbar styles */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          background-color: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid rgba(15, 255, 0, 0.2);
        }

        .logo {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .logo-bracket {
          color: var(--secondary-color);
        }

        .logo-text {
          color: var(--primary-color);
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
        }

        .nav-link {
          font-family: var(--font-mono);
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 1px;
          color: var(--text-color);
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          padding: 0.3rem 0;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: var(--primary-color);
        }

        .nav-link::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: width 0.3s;
        }

        .nav-link:hover::before {
          width: 100%;
        }

        .nav-link.active {
          color: var(--primary-color);
        }

        .nav-link.active::before {
          width: 100%;
        }

        /* Hero section styles */
        .hero-section {
          height: calc(100vh - 80px);
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          text-align: center;
          z-index: 5;
          padding: 0 1rem;
        }

        .hero-content h1 {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          letter-spacing: 0.5rem;
          color: var(--text-color);
          position: relative;
        }

        .glitch-text {
          position: relative;
          animation: glitch 5s infinite;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: "GURU PRAKASH";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }

        .glitch-text::before {
          color: var(--primary-color);
          animation: glitch-effect 3s infinite;
        }

        .glitch-text::after {
          color: var(--accent-color);
          animation: glitch-effect 2s infinite reverse;
        }

        .subtitle {
          font-family: var(--font-mono);
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: var(--text-color);
          opacity: 0.9;
        }

        .cursor {
          font-weight: bold;
          color: var(--primary-color);
        }

        .cursor.visible {
          opacity: 1;
        }

        .cursor.hidden {
          opacity: 0;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .cta-button {
          padding: 0.75rem 2rem;
          font-family: var(--font-mono);
          font-size: 1rem;
          font-weight: bold;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          letter-spacing: 1px;
        }

        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: all 0.3s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button.primary {
          background-color: var(--primary-color);
          color: var(--dark-bg);
        }

        .cta-button.primary:hover {
          background-color: var(--highlight-color);
          box-shadow: 0 0 15px var(--highlight-color);
        }

        .cta-button.secondary {
          background-color: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .cta-button.secondary:hover {
          background-color: rgba(15, 255, 0, 0.1);
          box-shadow: 0 0 15px rgba(15, 255, 0, 0.5);
        }

        .matrix-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            rgba(10, 10, 10, 0.9),
            rgba(10, 10, 10, 0.95)
          );
          z-index: 1;
          overflow: hidden;
        }

        .matrix-bg::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='rgba(15, 255, 0, 0.3)' fill-opacity='0.2'/%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .matrix-bg::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            transparent 0%,
            var(--dark-bg) 70%
          );
        }

        /* About section styles */
        .about-section {
          padding: 6rem 2rem;
          background-color: var(--darker-bg);
        }

        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
          font-weight: bold;
          letter-spacing: 2px;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--primary-color),
            transparent
          );
        }

        .highlight {
          color: var(--primary-color);
        }

        .about-content {
          display: flex;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-image {
          flex: 1;
        }

        .image-container {
          position: relative;
          overflow: hidden;
          border: 2px solid var(--primary-color);
          box-shadow: 0 0 20px rgba(15, 255, 0, 0.3);
        }

        .image-container img {
          width: 100%;
          height: auto;
          display: block;
          filter: grayscale(50%) contrast(120%);
        }

        .scanner-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background-color: var(--primary-color);
          box-shadow: 0 0 10px var(--primary-color);
          animation: scan 3s infinite;
        }

        .about-text {
          flex: 2;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
          font-size: 1.1rem;
        }

        .terminal {
          margin-top: 2rem;
          background-color: #0c0c0c;
          border-radius: 5px;
          overflow: hidden;
          font-family: var(--font-mono);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }

        .terminal-header {
          background-color: #1a1a1a;
          padding: 0.5rem;
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .terminal-button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #ff5f56;
        }

        .terminal-button:nth-child(2) {
          background-color: #ffbd2e;
        }

        .terminal-button:nth-child(3) {
          background-color: #27c93f;
        }

        .terminal-content {
          padding: 1rem;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .terminal-prompt {
          color: var(--primary-color);
          margin-right: 0.5rem;
        }

        /* Skills section styles */
        .skills-section {
          padding: 6rem 2rem;
          background-color: var(--dark-bg);
        }

        .skills-content {
          display: flex;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .skills-left,
        .skills-right {
          flex: 1;
        }

        .skills-left h3,
        .skills-right h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--text-color);
          letter-spacing: 1px;
          position: relative;
          display: inline-block;
        }

        .skills-left h3::after,
        .skills-right h3::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 50px;
          height: 2px;
          background-color: var(--primary-color);
        }

        .skill-bars {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-item {
          width: 100%;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-family: var(--font-mono);
          font-size: 1rem;
        }

        .skill-percentage {
          font-family: var(--font-mono);
          color: var(--secondary-color);
        }

        .skill-bar {
          width: 100%;
          height: 10px;
          background-color: var(--lighter-bg);
          border-radius: 5px;
          overflow: hidden;
          position: relative;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--primary-color),
            var(--secondary-color)
          );
          border-radius: 5px;
          position: relative;
          width: 0;
          animation: progressAnimation 1.5s ease-in-out forwards;
          animation-delay: calc(var(--data-delay) * 1s);
        }

        .skill-progress::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 5px;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          animation: shimmer 1.5s infinite;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .expertise-card {
          background-color: var(--lighter-bg);
          padding: 1.5rem;
          border-radius: 5px;
          border-left: 3px solid var(--primary-color);
          transition: all 0.3s;
        }

        .expertise-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 240, 0, 0.1);
          border-left-color: var(--secondary-color);
        }

        .expertise-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .expertise-card h4 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--text-color);
        }

        .expertise-card p {
          font-size: 0.9rem;
          color: var(--text-color);
          opacity: 0.8;
        }

        /* Projects section styles */
        .projects-section {
          padding: 6rem 2rem;
          background-color: var(--darker-bg);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .project-card {
          background-color: var(--light-bg);
          border-radius: 5px;
          overflow: hidden;
          transition: all 0.3s;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(15, 255, 0, 0.1);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          border-color: rgba(15, 255, 0, 0.3);
        }

        .project-image {
          position: relative;
          overflow: hidden;
          height: 200px;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-button {
          padding: 0.75rem 1.5rem;
          background-color: var(--primary-color);
          color: var(--dark-bg);
          border: none;
          border-radius: 3px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
        }

        .project-button:hover {
          background-color: var(--highlight-color);
          box-shadow: 0 0 10px var(--highlight-color);
        }

        .project-info {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--text-color);
        }

        .project-description {
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: var(--text-color);
          opacity: 0.8;
          line-height: 1.6;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background-color: rgba(15, 255, 0, 0.1);
          color: var(--primary-color);
          padding: 0.3rem 0.6rem;
          border-radius: 3px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }

        .more-projects {
          text-align: center;
          margin-top: 3rem;
        }

        /* Contact section styles */
        .contact-section {
          padding: 6rem 2rem;
          background-color: var(--dark-bg);
        }

        .contact-content {
          display: flex;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-info,
        .contact-form {
          flex: 1;
        }

        .contact-info h3,
        .contact-form h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--text-color);
        }

        .contact-info p {
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-method {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .contact-icon {
          font-size: 1.5rem;
          color: var(--primary-color);
        }

        .contact-details h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          color: var(--text-color);
          text-decoration: none;
          transition: color 0.3s;
        }

        .social-link:hover {
          color: var(--primary-color);
        }

        .form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .encryption-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: rgba(15, 255, 0, 0.1);
          color: var(--primary-color);
          padding: 0.5rem 1rem;
          border-radius: 3px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }

        .encryption-icon {
          font-size: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--text-color);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          background-color: var(--lighter-bg);
          border: 1px solid rgba(15, 255, 0, 0.3);
          border-radius: 3px;
          color: var(--text-color);
          font-family: var(--font-sans);
          transition: all 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 10px rgba(15, 255, 0, 0.2);
        }

        /* Footer styles */
        .footer {
          background-color: var(--darker-bg);
          padding: 2rem;
          border-top: 1px solid rgba(15, 255, 0, 0.1);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-logo {
          font-family: var(--font-mono);
          font-size: 1.2rem;
          font-weight: bold;
        }

        .footer-text {
          font-size: 0.9rem;
          color: var(--text-color);
          opacity: 0.7;
        }

        .footer-social {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon {
          color: var(--text-color);
          text-decoration: none;
          transition: color 0.3s;
          opacity: 0.7;
          font-size: 0.9rem;
        }

        .social-icon:hover {
          color: var(--primary-color);
          opacity: 1;
        }

        /* Animations */
        @keyframes progressAnimation {
          from {
            width: 0;
          }
          to {
            width: var(--level, 0%);
          }
        }

        @keyframes scan {
          0% {
            top: 0;
          }
          100% {
            top: 100%;
          }
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-5px, 5px);
          }
          40% {
            transform: translate(-5px, -5px);
          }
          60% {
            transform: translate(5px, 5px);
          }
          80% {
            transform: translate(5px, -5px);
          }
          100% {
            transform: translate(0);
          }
        }

        @keyframes glitch-effect {
          0% {
            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
          }
          20% {
            clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
          }
          40% {
            clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
          }
          60% {
            clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
          }
          80% {
            clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
          }
          100% {
            clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Glitch effect for the whole page */
        .glitch {
          animation: glitch-whole 0.2s ease;
        }

        @keyframes glitch-whole {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(5px, 0);
          }
          40% {
            transform: translate(0, 5px);
          }
          60% {
            transform: skewX(3deg);
          }
          80% {
            transform: skewX(-3deg);
          }
          100% {
            transform: translate(0);
          }
        }

        /* Media Queries */
        @media screen and (max-width: 992px) {
          .about-content,
          .skills-content,
          .contact-content {
            flex-direction: column;
          }

          .about-image {
            margin-bottom: 2rem;
          }

          .skills-left {
            margin-bottom: 3rem;
          }

          .expertise-grid {
            grid-template-columns: 1fr;
          }
        }

        @media screen and (max-width: 768px) {
          .hero-content h1 {
            font-size: 3rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .navbar {
            flex-direction: column;
            gap: 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .footer-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
        /* Add these styles to your global CSS or create a DecryptedText.module.css */

        /* Add these styles to your global CSS or create a DecryptedText.module.css */

        .decrypted-text {
          display: inline-block;
          position: relative;
          font-family: monospace;
          letter-spacing: normal !important;
          word-spacing: normal !important;
        }

        .decrypted-text .encrypting {
          display: inline-block;
          color: #28d7c9;
          text-shadow: 0 0 2px rgba(40, 215, 201, 0.7);
          position: relative;
        }

        .decrypted-text .revealed {
          display: inline-block;
          color: inherit;
          position: relative;
        }

        /* Optional glitch effect for special characters */
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-1px, 1px);
          }
          40% {
            transform: translate(-1px, -1px);
          }
          60% {
            transform: translate(1px, 1px);
          }
          80% {
            transform: translate(1px, -1px);
          }
          100% {
            transform: translate(0);
          }
        }

        .decrypted-text .encrypting:nth-child(3n) {
          animation: glitch 0.2s ease-in-out infinite alternate;
        }

        /* Binary glitch style - can be applied through encryptedClassName */
        .binary-glitch {
          font-family: monospace;
          letter-spacing: 1px;
        }

        /* Matrix-style reveal effect */
        .matrix-style .encrypting {
          color: #00ff41;
          text-shadow: 0 0 5px rgba(0, 255, 65, 0.8);
          font-family: "Courier New", monospace;
        }

        .matrix-style .revealed {
          color: #a0ffa0;
          text-shadow: 0 0 2px rgba(160, 255, 160, 0.5);
          transition: all 0.3s ease;
        }

        /* Cyberpunk style */
        .cyberpunk-style .encrypting {
          color: #ff2a6d;
          text-shadow: 0 0 5px rgba(255, 42, 109, 0.8);
        }

        .cyberpunk-style .revealed {
          color: #05d9e8;
          text-shadow: 0 0 2px rgba(5, 217, 232, 0.6);
        }

        /* Terminal style */
        .terminal-style {
          font-family: "Courier New", monospace;
          color: #33ff33;
          background-color: rgba(0, 0, 0, 0.7);
          padding: 0.2em 0.4em;
          border-radius: 2px;
        }

        /* Add more custom styles as needed */
        /* Project Modal Styles */
        .project-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
        }

        .modal-content {
          position: relative;
          background-color: white;
          width: 80%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 8px;
          padding: 2rem;
          z-index: 1001;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .modal-header {
          margin-bottom: 1.5rem;
        }

        .modal-header h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .modal-body {
          display: flex;
          gap: 2rem;
        }

        .modal-image {
          flex: 1;
        }

        .modal-image img {
          width: 100%;
          border-radius: 5px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }

        .modal-details {
          flex: 1;
        }

        .modal-details h4 {
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .modal-details ul {
          padding-left: 1.2rem;
        }

        .modal-details li {
          margin-bottom: 0.3rem;
        }

        .project-link {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.5rem 1rem;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        .project-link:hover {
          background-color: #0056b3;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .modal-content {
            width: 95%;
            padding: 1rem;
          }

          .modal-body {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
