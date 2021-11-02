import Data from "./Data";
import ProjectsIcons from "./ProjectsIcons";

const ProjectsDetail = ({ imgSrc }) => {
  return (
    <div className="projects__wrapper__project">
      <img src={imgSrc} alt="project" />
      <div className="projects__wrapper__project__buttons">
        {Data[0].projectsIcons.map((item) => {
          return (
            <ProjectsIcons
              key={item.id}
              anchorClass={item.anchorClass}
              iClass={item.iClass}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsDetail;
