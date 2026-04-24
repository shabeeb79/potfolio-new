import projects from "../../data/projects.js";

function Projects({ dark }) {
  const selectedProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="selected-projects">
      <div className="projects-inner">
        <p className="section-label">FEATURED WORK</p>
        <h2>Selected Projects</h2>

        <div className="project-grid">
          {selectedProjects.map((project) => (
            <article key={project.id} className="project-item">
              <div className="project-thumb">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .selected-projects {
          background: ${dark ? "#0a0a14" : "#efefef"};
          padding: 52px 0 70px;
        }
        .projects-inner {
          width: 100%;
          padding: 0 20px;
          box-sizing: border-box;
        }
        .section-label {
          text-align: center;
          margin: 0;
          font-size: 11px;
          color: ${dark ? "rgba(236,240,255,0.65)" : "#555"};
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .selected-projects h2 {
          text-align: center;
          margin: 8px 0 26px;
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          color: ${dark ? "#f3f5ff" : "#161616"};
          font-family: "Inter", system-ui, sans-serif;
        }
        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(280px, 1fr));
          gap: 50px;
          justify-content: around;
          max-width: 1500px;
          margin: 0 auto;
        }
        .project-item {
          background: ${dark ? "rgba(255,255,255,0.02)" : "transparent"};
          border: ${dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.06)"};
          border-radius: 12px;
          padding: 10px;
        }
        .project-thumb {
          border-radius: 8px;
          overflow: hidden;
          background: ${dark ? "rgba(255,255,255,0.08)" : "#ddd"};
          aspect-ratio: 1.55 / 1;
        }
        .project-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .project-item h3 {
          margin: 10px 0 4px;
          font-size: 1.08rem;
          color: ${dark ? "#f0f2ff" : "#131313"};
        }
        .project-item p {
          margin: 0;
          color: ${dark ? "rgba(236,240,255,0.68)" : "#666"};
          font-size: 0.9rem;
        }
        @media (max-width: 900px) {
          .project-grid {
            grid-template-columns: 1fr;
            max-width: 520px;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
