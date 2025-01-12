import "../css/Portfolio.css";
import projectData from "../data/ProjectData";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <>
      <section
        id="portfolio"
        className="column section-container portfolio-container"
      >
        <h1>My projects</h1>
        <div className="projects-container">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
