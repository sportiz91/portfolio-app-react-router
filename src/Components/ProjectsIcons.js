const ProjectsIcons = ({ anchorClass, iClass, text }) => {
  return (
    <a href="#!" className={anchorClass}>
      <i class={iClass}></i>
      {text}
    </a>
  );
};

export default ProjectsIcons;
