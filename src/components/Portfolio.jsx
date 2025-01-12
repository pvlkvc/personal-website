import "../css/Portfolio.css";
import projectData from "../data/ProjectData";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <>
      <section
        id="portfolio"
        className="row section-container portfolio-container"
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </>
  );
}
