import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsDetail = ({projects, links}) => {

  useEffect(() => {
    AOS.init({duration:500,
      delay:0,
      easing: "ease-in-out",
    });
  },[]);
  return (
      <div className="project-grid">
        {projects.map((project) => {
          const primaryLink = project.link || project.github;
          return (
            <article className="project-card" key={project.id} data-aos="fade-up">
              <a className="project-media" href={primaryLink} target="_blank" rel="noreferrer">
                <img className="project-img" src={project.img} alt={project.title} />
              </a>
              <div className="project-body">
                <h3 className="project-title">
                  <a href={primaryLink} target="_blank" rel="noreferrer">{project.title}</a>
                </h3>
                <p className="project-copy">{project.content}</p>
                <div className="proj-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="social-links">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="28"
                        height="28"
                        viewBox="0 0 30 30"
                    >
                      {" "}
                      <path d={links[0].path}></path>
                    </svg>
                  </a>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="social-links">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="28"
                          height="28"
                          viewBox="0 0 30 30"
                      >
                        {" "}
                        <path d={links[1].path}></path>
                      </svg>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
  );
};

export default ProjectsDetail;
