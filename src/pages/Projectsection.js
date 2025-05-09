import { useState } from "react";
import Image from "next/image";
import ransomware from "../../public/assets/ransomware.jpg";
import cryptography from "../../public/assets/cryptography.jpg";
import antivirus from "../../public/assets/antivirus.jpg";

const Projectsection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Ransomware Detection & Prevention System",
      description:
        "Web app with real-time monitoring and protection mechanisms.",
      image: ransomware,
      tech: ["React", "Node.js", "Express", "Python", "C", "Docker"],
      details: {
        overview:
          "A comprehensive security solution that detects and prevents ransomware attacks in real-time using multiple detection methods and automated protection systems.",
        features: [
          "Signature-based and honeypot-based detection algorithms",
          "Kernel Kill Switch for immediate threat neutralization",
          "Docker-based rollback system for file protection",
          "Real-time alert system for immediate response",
          "User-friendly executables and scripts with documentation",
        ],
        challenges:
          "Developing low-level system integration for the Kernel Kill Switch while maintaining system stability.",
        solutions:
          "Implemented careful system hooks with fail-safes and extensive testing in virtual environments.",
        link: "https://github.com/yourusername/ransomware-detection",
        awards:
          "1st Prize - Project Expo, Kalasalingam Academy of Research and Education",
      },
    },
    {
      id: 3,
      title: "LMS for Secured Computing",
      description:
        "Learning Management System focused on cryptography education.",
      image: cryptography,
      tech: ["MERN Stack", "MongoDB", "Cryptography"],
      details: {
        overview:
          "An educational platform teaching cryptographic concepts with hands-on learning modules and secure computing environment.",
        features: [
          "Interactive cryptography lessons and exercises",
          "Secure sandbox environment for practical learning",
          "User authentication and progress tracking",
          "Real-time code execution with results visualization",
          "Discussion forums for collaborative learning",
        ],
        challenges:
          "Balancing security with usability in the learning environment.",
        solutions:
          "Implemented containerized execution environments with resource limits and monitoring.",
        status: "Currently in development",
        link: "https://github.com/yourusername/lms-secured-computing",
      },
    },
    {
      id: 4,
      title: "Anti-virus with Real-time Protection",
      description:
        "Comprehensive antivirus solution with multiple scanning modes.",
      image: antivirus,
      tech: ["MERN Stack", "Python", "C", "Real-time Systems"],
      details: {
        overview:
          "Advanced antivirus software providing real-time protection against various malware threats with additional support features.",
        features: [
          "Real-time file system monitoring",
          "Quick scan and deep scan modes",
          "Integrated chatbot for user assistance",
          "Malware signature database",
          "System performance optimization tools",
        ],
        challenges:
          "Achieving low system impact while maintaining real-time protection.",
        solutions:
          "Optimized scanning algorithms and implemented intelligent scheduling for background scans.",
        status: "Currently in development",
        link: "https://github.com/yourusername/antivirus-realtime",
      },
    },
  ];

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">
        Featured <span className="highlight">Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="project-img"
              />
              <div className="project-overlay">
                <button
                  className="project-button"
                  onClick={() => openProjectDetails(project)}
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span className="tech-tag" key={techIndex}>
                    {tech}
                  </span>
                ))}
                {project.details.status && (
                  <span className="status-tag in-development">
                    {project.details.status}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="more-projects">
        <button className="cta-button secondary">View All Projects</button>
      </div>

      {isModalOpen && selectedProject && (
        <div className="project-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content cyber-modal">
            <button className="modal-close cyber-close" onClick={closeModal}>
              <span className="glitch-text" data-text="X">
                X
              </span>
            </button>
            <div className="modal-header">
              <h3
                className="cyber-title glitch-text"
                data-text={selectedProject.title}
              >
                {selectedProject.title}
              </h3>
              <div className="modal-tech">
                {selectedProject.tech.map((tech, index) => (
                  <span key={index} className="tech-tag cyber-tag">
                    <span className="tag-bracket">[</span>
                    {tech}
                    <span className="tag-bracket">]</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-image cyber-image">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={400}
                  height={250}
                  className="cyber-img"
                />
                <div className="scan-line"></div>
                <div className="pixel-overlay"></div>
                <div className="binary-overlay"></div>
              </div>
              <div className="modal-details cyber-details">
                <div className="cyber-terminal">
                  <div className="terminal-header">
                    <span className="terminal-button red"></span>
                    <span className="terminal-button yellow"></span>
                    <span className="terminal-button green"></span>
                    <span className="terminal-title">PROJECT_TERMINAL</span>
                    <span className="terminal-status">SECURE_CONNECTION</span>
                  </div>
                  <div className="terminal-content">
                    <div className="terminal-section">
                      <h4 className="cyber-subtitle">
                        <span className="cyber-bracket">[</span> Overview{" "}
                        <span className="cyber-bracket">]</span>
                      </h4>
                      <p className="cyber-text">
                        {selectedProject.details.overview}
                      </p>
                    </div>

                    <div className="terminal-section">
                      <h4 className="cyber-subtitle">
                        <span className="cyber-bracket">[</span> Key Features{" "}
                        <span className="cyber-bracket">]</span>
                      </h4>
                      <ul className="cyber-list">
                        {selectedProject.details.features.map(
                          (feature, index) => (
                            <li key={index} className="cyber-list-item">
                              <span className="prompt">&gt;&gt;</span>
                              <span className="feature-text">{feature}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="terminal-section">
                      <h4 className="cyber-subtitle">
                        <span className="cyber-bracket">[</span> Technical
                        Challenges <span className="cyber-bracket">]</span>
                      </h4>
                      <p className="cyber-text">
                        {selectedProject.details.challenges}
                      </p>
                    </div>

                    <div className="terminal-section">
                      <h4 className="cyber-subtitle">
                        <span className="cyber-bracket">[</span> Implemented
                        Solutions <span className="cyber-bracket">]</span>
                      </h4>
                      <p className="cyber-text">
                        {selectedProject.details.solutions}
                      </p>
                    </div>

                    {selectedProject.details.awards && (
                      <div className="terminal-section">
                        <h4 className="cyber-subtitle">
                          <span className="cyber-bracket">[</span> Awards &
                          Recognition <span className="cyber-bracket">]</span>
                        </h4>
                        <p className="cyber-text">
                          {selectedProject.details.awards}
                        </p>
                      </div>
                    )}

                    {selectedProject.details.status && (
                      <div className="terminal-section">
                        <h4 className="cyber-subtitle">
                          <span className="cyber-bracket">[</span> Project
                          Status <span className="cyber-bracket">]</span>
                        </h4>
                        <p className="cyber-text">
                          {selectedProject.details.status}
                        </p>
                      </div>
                    )}

                    {selectedProject.details.link && (
                      <div className="terminal-section">
                        <a
                          href={selectedProject.details.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link cyber-link"
                        >
                          <span className="link-icon">⚡</span>
                          <span className="link-text">ACCESS_REPOSITORY</span>
                          <span className="link-arrow">→</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
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

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .project-card:hover .project-img {
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

        .status-tag {
          background-color: rgba(255, 165, 0, 0.1);
          color: orange;
          padding: 0.3rem 0.6rem;
          border-radius: 3px;
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }

        .more-projects {
          text-align: center;
          margin-top: 3rem;
        }

        /* Cyber Modal Styles */
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
          background-color: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
        }

        .cyber-modal {
          position: relative;
          background-color: var(--dark-bg) !important;
          width: 80%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 5px;
          padding: 2rem;
          z-index: 1001;
          border: 1px solid var(--primary-color);
          box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
          color: var(--primary-color);
          font-family: var(--font-mono);
          animation: terminalBoot 0.5s ease-out;
        }

        .cyber-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: var(--primary-color);
          text-shadow: 0 0 10px var(--primary-color);
          transition: all 0.3s;
          z-index: 1002;
          padding: 0.5rem;
        }

        .cyber-close:hover {
          text-shadow: 0 0 15px var(--primary-color);
          transform: scale(1.1);
        }

        .modal-header {
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(0, 255, 0, 0.3);
        }

        .cyber-title {
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          position: relative;
          font-size: 1.8rem;
        }

        .cyber-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--primary-color),
            transparent
          );
        }

        .modal-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .cyber-tag {
          background: rgba(0, 255, 0, 0.1) !important;
          border: 1px solid var(--primary-color);
          margin: 0 0.5rem 0.5rem 0;
          position: relative;
          overflow: hidden;
          padding: 0.3rem 0.8rem;
          font-size: 0.8rem;
          border-radius: 3px;
        }

        .cyber-tag::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 0, 0.2),
            transparent
          );
          animation: tagShimmer 2s infinite;
        }

        .tag-bracket {
          color: var(--secondary-color);
          margin: 0 0.2rem;
        }

        .modal-body {
          display: flex;
          gap: 2rem;
          margin-top: 1.5rem;
        }

        .cyber-image {
          flex: 1;
          position: relative;
          border: 1px solid var(--primary-color);
          overflow: hidden;
          border-radius: 5px;
          min-height: 250px;
          background: #000;
        }

        .cyber-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(120%);
          opacity: 0.9;
        }

        .scan-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            var(--primary-color),
            transparent
          );
          animation: scan 3s linear infinite;
          box-shadow: 0 0 10px var(--primary-color);
          z-index: 2;
        }

        .pixel-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          z-index: 1;
        }

        .binary-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ctext x='5' y='15' font-family='monospace' font-size='10' fill='rgba(0,255,0,0.05)'%3E0101%3C/text%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .cyber-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cyber-terminal {
          flex: 1;
          background: var(--darker-bg);
          border: 1px solid var(--primary-color);
          border-radius: 5px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .terminal-header {
          background: var(--dark-bg);
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--primary-color);
        }

        .terminal-button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-right: 0.5rem;
        }

        .terminal-button.red {
          background: #ff605c;
          box-shadow: 0 0 5px #ff605c;
        }

        .terminal-button.yellow {
          background: #ffbd44;
          box-shadow: 0 0 5px #ffbd44;
        }

        .terminal-button.green {
          background: #00ca4e;
          box-shadow: 0 0 5px #00ca4e;
        }

        .terminal-title {
          margin-left: 1rem;
          color: var(--primary-color);
          letter-spacing: 1px;
          font-size: 0.9rem;
          flex-grow: 1;
        }

        .terminal-status {
          color: var(--secondary-color);
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .terminal-content {
          padding: 1.5rem;
          flex: 1;
          overflow-y: auto;
        }

        .terminal-section {
          margin-bottom: 2rem;
        }

        .terminal-section:last-child {
          margin-bottom: 0;
        }

        .cyber-subtitle {
          color: var(--secondary-color);
          margin: 1.5rem 0 1rem;
          position: relative;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cyber-subtitle::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50px;
          height: 1px;
          background: var(--secondary-color);
        }

        .cyber-bracket {
          color: var(--accent-color);
        }

        .cyber-text {
          color: var(--text-color);
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .cyber-list {
          list-style: none;
          padding-left: 0;
          margin: 1rem 0;
        }

        .cyber-list-item {
          margin-bottom: 0.8rem;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-color);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .prompt {
          color: var(--secondary-color);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .feature-text {
          color: var(--text-color);
        }

        .cyber-link {
          display: inline-flex;
          align-items: center;
          padding: 0.8rem 1.5rem;
          margin-top: 1.5rem;
          background: rgba(0, 255, 0, 0.1);
          border: 1px solid var(--primary-color);
          color: var(--primary-color);
          text-decoration: none;
          transition: all 0.3s;
          border-radius: 3px;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cyber-link:hover {
          background: rgba(0, 255, 0, 0.2);
          box-shadow: 0 0 15px var(--primary-color);
          transform: translateY(-2px);
        }

        .link-icon {
          margin-right: 0.8rem;
          font-size: 1.2rem;
        }

        .link-text {
          margin-right: 0.5rem;
        }

        .link-arrow {
          margin-left: 0.5rem;
          opacity: 0;
          transition: all 0.3s;
        }

        .cyber-link:hover .link-arrow {
          opacity: 1;
          transform: translateX(5px);
        }

        /* Animations */
        @keyframes scan {
          0% {
            top: 0;
          }
          100% {
            top: 100%;
          }
        }

        @keyframes tagShimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes terminalBoot {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .glitch-text {
          position: relative;
          display: inline-block;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--dark-bg);
        }

        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }

        .glitch-text::after {
          left: -2px;
          text-shadow: 2px 0 #00fff9;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
          animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim-1 {
          0% {
            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
          }
          20% {
            clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
          }
          30% {
            clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
          }
          40% {
            clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
          }
          50% {
            clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
          }
          55% {
            clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
          }
          60% {
            clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
          }
          100% {
            clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
          }
        }

        @keyframes glitch-anim-2 {
          0% {
            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
          }
          20% {
            clip-path: polygon(0 25%, 100% 25%, 100% 25%, 0 25%);
          }
          30% {
            clip-path: polygon(0 15%, 100% 15%, 100% 25%, 0 25%);
          }
          40% {
            clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
          }
          50% {
            clip-path: polygon(0 35%, 100% 35%, 100% 35%, 0 35%);
          }
          55% {
            clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
          }
          60% {
            clip-path: polygon(0 55%, 100% 55%, 100% 20%, 0 20%);
          }
          100% {
            clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
          }
        }

        /* Responsive styles */
        @media (max-width: 992px) {
          .cyber-modal {
            width: 90%;
            padding: 1.5rem;
          }

          .modal-body {
            flex-direction: column;
          }

          .cyber-image {
            margin-bottom: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .cyber-modal {
            width: 95%;
            padding: 1rem;
          }

          .cyber-title {
            font-size: 1.5rem;
          }

          .terminal-content {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projectsection;
