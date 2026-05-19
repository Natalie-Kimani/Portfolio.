function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Natalie Kimani</h1>

      <p>
        Frontend Developer passionate about building
        responsive and user-friendly web applications.
      </p>

      <div className="hero-buttons">
        <a
          href="https://github.com/Natalie-Kimani"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          GitHub
        </a>

        <a href="#projects" className="btn secondary-btn">
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;