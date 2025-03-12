import "../css/Portfolio.css";
import projectData from "../data/ProjectData";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <>
      <section id="portfolio" className="column section portfolio">
        <h1>My projects</h1>
        <div className="projects-container shared-col-1">
          {/*{projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}*/}
          <h3 className="no-projects">
            This section is yet to be populated with impressive projects, come
            by some other time!
          </h3>
        </div>
      </section>
    </>
  );
}
