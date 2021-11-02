import ProjectsDetail from "../Components/ProjectsDetail";
import Socials from "../Components/Socials";
import Data from "../Components/Data";

const Projects = () => {
  return (
    <main>
      <section className="projects">
        <div className="projects__title">
          <h1 className="secondary-text">My Projects</h1>
        </div>
        <div className="wrap">
          <div className="projects__wrapper">
            {Data[0].projects.map((item) => {
              return <ProjectsDetail key={item.id} imgSrc={item.imgSrc} />;
            })}
          </div>
        </div>

        <div className="end-wrapper">
          <div className="end-wrapper__social-icons">
            {Data[0].socials.map((item) => {
              return <Socials classN={item.class} key={item.id} />;
            })}
          </div>

          <footer>© Copyright 2019</footer>
        </div>
      </section>
    </main>
  );
};

export default Projects;
