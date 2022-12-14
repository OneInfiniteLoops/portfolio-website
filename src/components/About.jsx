const About = () => {
  return (
    <div id="about">
      <h1>About Me.</h1>
      <p>
        As a long-time tech enthusiast who has always been mesmerised by digital
        innovations, I realised that beyond being an admirer of tech I wanted to
        also get involved and be a part of the digital revolution. In April
        2022, I embarked on my journey to become a software developer at the
        Northcoders’ coding bootcamp in Manchester, UK.
      </p>
      <p>
        Through the bootcamp, I gained hands-on experience in developing web and
        mobile applications, learnt various key skills, and applied industry
        best practices such as Test-Driven Development (TDD). I also had the
        opportunity to deliver a live-streamed{" "}
        <a
          className="video-link"
          href="https://www.youtube.com/watch?v=1e8iFgSoU28&t=2796s"
        >
          presentation
        </a>{" "}
        on the topic of super-apps which has further inspired me to learn more
        about technology and its role in society.
      </p>
      <br></br>
      <div className="About-Lists">
        <div id="tech-list">
          <h2> Here Are The Technologies I've Worked With:</h2>
          <ul>
            <li>Node.js (JavaScript ES6)</li>
            <li>React & React Native</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>Jest</li>
            <li>HTML5 & CSS3</li>
            <li>Heroku</li>
            <li>Go / Golang</li>
          </ul>
        </div>
        <div id="practices-list">
          <h2>Using Industry Best Practices:</h2>
          <ul>
            <li>Test-Driven Development (TDD)</li>
            <li>Agile Methodologies (e.g. Daily Stand-Up & Kanban)</li>
            <li>Version Control with Git & GitHub</li>
            <li>Pair Programming</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
