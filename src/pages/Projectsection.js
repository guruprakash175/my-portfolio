import { useState } from "react";
import Image from "next/image";
import ransomware from "../assets/ransomware.jpg";
import cryptography from "../assets/cryptography.jpg";
import antivirus from "../assets/antivirus.jpg";

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
        link: "https://github.com/example/ransomware-prevention",
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
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <Image
                src={project.image}
                alt={project.title}
                layout="responsive"
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

      {isModalOpen && selectedProject && (
        <div className="project-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content cyber-modal">
            <button className="modal-close cyber-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-header">
              <h3 className="cyber-title">{selectedProject.title}</h3>
              <div className="modal-tech">
                {selectedProject.tech.map((tech, index) => (
                  <span key={index} className="tech-tag cyber-tag">
                    {tech}
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
              </div>
              <div className="modal-details cyber-details">
                <h4 className="cyber-subtitle">[ Overview ]</h4>
                <p className="cyber-text">{selectedProject.details.overview}</p>
                <h4 className="cyber-subtitle">[ Key Features ]</h4>
                <ul className="cyber-list">
                  {selectedProject.details.features.map((feature, index) => (
                    <li key={index} className="cyber-list-item">
                      ➜ {feature}
                    </li>
                  ))}
                </ul>
                <h4 className="cyber-subtitle">[ Technical Challenges ]</h4>
                <p className="cyber-text">
                  {selectedProject.details.challenges}
                </p>
                <h4 className="cyber-subtitle">[ Implemented Solutions ]</h4>
                <p className="cyber-text">
                  {selectedProject.details.solutions}
                </p>
                {selectedProject.details.awards && (
                  <>
                    <h4 className="cyber-subtitle">[ Awards & Recognition ]</h4>
                    <p className="cyber-text">
                      {selectedProject.details.awards}
                    </p>
                  </>
                )}
                {selectedProject.details.status && (
                  <>
                    <h4 className="cyber-subtitle">[ Project Status ]</h4>
                    <p className="cyber-text">
                      {selectedProject.details.status}
                    </p>
                  </>
                )}
                {selectedProject.details.link && (
                  <a
                    href={selectedProject.details.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link cyber-link"
                  >
                    <span className="link-icon">🔗</span> View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .project-modal {
          /* your styles here */
        }
        .cyber-modal {
          background: #0a0a0a;
          border: 1px solid #0f0;
        }
        .cyber-title {
          color: #0f0;
          text-shadow: 0 0 5px #0f0;
        }
        .cyber-tag,
        .cyber-text,
        .cyber-subtitle,
        .cyber-link {
          color: #0f0;
        }
        .cyber-img {
          filter: grayscale(100%) contrast(120%);
        }
        .scan-line {
          position: absolute;
          top: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #0f0, transparent);
          animation: scanline 3s linear infinite;
        }
        @keyframes scanline {
          0% {
            top: 0;
          }
          100% {
            top: 100%;
          }
        }
        .cyber-link {
          display: inline-flex;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: 1px solid #0f0;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .cyber-link:hover {
          background-color: rgba(0, 255, 0, 0.1);
          box-shadow: 0 0 10px #0f0;
        }
      `}</style>
    </section>
  );
};

export default Projectsection;
