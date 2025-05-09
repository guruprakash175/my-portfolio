import DecryptedText from "../components/DecryptedText";
import guruprakash from "../../public/assets/guruprakash.png";
// Import styles if you're using CSS modules
// import './path/to/DecryptedText.css';

const Aboutsection = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">
        <DecryptedText
          text="About Me"
          animateOn="view"
          duration={800}
          revealDirection="center"
          className="cyberpunk-style"
        />
      </h2>
      <div className="about-content">
        <div className="about-image">
          <div className="image-container">
            <img src={guruprakash.src} alt="Guru Prakash Profile" />
            <div className="scanner-line"></div>
          </div>
        </div>
        <div className="about-text">
          <p>
            <DecryptedText
              text="Hello, I'm "
              animateOn="view"
              duration={600}
              revealDirection="start"
            />
            <span className="highlight">Guru Prakash</span>, a passionate{" "}
            <span className="highlight">Web Developer</span> and{" "}
            <span className="highlight">Cybersecurity Specialist</span>{" "}
            <DecryptedText
              text="with strong expertise in building secure, scalable web applications and conducting deep security assessments."
              animateOn="view"
              duration={1200}
              sequential={true}
              revealDirection="start"
            />
          </p>
          <p>
            <DecryptedText
              text="With a solid foundation in both full-stack development and cybersecurity, I bring a unique perspective to application design — ensuring every project I work on is both functional and secure by design."
              animateOn="view"
              duration={1500}
              glitchIntensity={0.2}
            />
          </p>
          <p>
            I specialize in crafting modern, high-performance web applications
            using{" "}
            <DecryptedText
              text="React.js, Next.js, Node.js, Express.js, MongoDB, and TypeScript"
              duration={800}
              animateOn="hover"
              className="highlight"
              revealDirection="random"
            />
            , while also applying best practices in{" "}
            <DecryptedText
              text="secure coding and web application penetration testing."
              duration={700}
              animateOn="hover"
              revealDirection="end"
            />
          </p>
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-button"></div>
              <div className="terminal-button"></div>
              <div className="terminal-button"></div>
            </div>
            <div className="terminal-content">
              <p>
                <span className="terminal-prompt">$ whoami</span>
              </p>
              <DecryptedText
                text="Guru Prakash - MERN Stack Developer & Cyber Security Enthusiast"
                duration={1000}
                animateOn="view"
                className="terminal-style"
              />
              <p>
                <span className="terminal-prompt">$ ls skills/</span>
              </p>
              <DecryptedText
                text="Next.js React.js Node.js Express.js MongoDB TypeScript Python Java C Azure Web Application Penetration Testing"
                duration={1200}
                animateOn="view"
                characters="01"
                encryptedClassName="binary-glitch"
                revealDirection="random"
              />
              <p>
                <span className="terminal-prompt">$ cat interests.txt</span>
              </p>
              <DecryptedText
                text="Open source development, vulnerability research, CTF competitions"
                duration={900}
                animateOn="view"
                revealDirection="center"
                className="matrix-style"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
