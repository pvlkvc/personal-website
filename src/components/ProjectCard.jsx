export default function ProjectCard({ project = {} }) {
  const { title, description, imageUrl, tools, link } = project;

  return (
    <>
      <div
        className="project-card-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="column project-card">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="row tools-row">
            {tools.map((tool, index) => (
              <div key={index} className="tool-container">
                <img className="tool-image" src={tool.imageUrl} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
