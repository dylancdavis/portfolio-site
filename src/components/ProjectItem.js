const ProjectItem = ({ name, image, website, github, description }) => {
  return (
    <div class="project-item">
      <h3>{name}</h3>
      <div class="project-image">{image}</div>
      {website && <a href={website}>Link</a>}
      <a href={github}>Github</a>
      {description && <p>{description}</p>}
    </div>
  );
};

export default ProjectItem;
