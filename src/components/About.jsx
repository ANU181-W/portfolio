import { CreateHead } from "../pages";
import resume from "../Data/Resume.pdf";

function AboutMe() {
  return (
    <div className="About-Me">
      <CreateHead head="ABOUT" title="ABOUT ME" />
      <div className="about--details">
        Hey there👋, my name is Anurag. Full Stack Developer with a strong
        expertise in creating innovatively designed websites and applications.
        Proficient in ReactJS, HTML, CSS3, and JavaScript, I am specialize in
        delivering exceptional user experiences through comprehensive front-end
        development and back-end development.
        <br />
        <br />
        On the back-end, I bring solid skills in MongoDB, Express, and SQL,
        enabling me to develop efficient and scalable server-side solutions. My
        versatility also extends to C++ for Data Structures and Algorithms,
        providing a deep understanding of complex problem-solving and software
        architecture. This versatility enables me to approach projects from
        multiple angles, ensuring comprehensive and efficient solutions. Looking
        for a job in the Red Team of a company. Being a greedy learner, I love
        to explore how things work around me.
        <br />
        <br />
        Feel free to contact me for collaboration and to bring exciting ideas to
        life.
        <br />
        <a href={resume} target="_blank" rel="noreferrer">
          <button
            className="contact-us socials-button"
            style={{ width: "200px" }}
          >
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
