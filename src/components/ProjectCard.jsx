export default function ProjectCard({ project = {} }) {
  const { title, description, imageUrl, tools, link } = project;

  return (
    <>
      <div
        className="project-card-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="project-card">
          <h2>{title}</h2>
          <p>{description}</p>
          {tools.map((tool, index) => (
            <div key={index} className="project-tool-container">
              <img className="project-tool-image" src={tool.imageUrl} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
