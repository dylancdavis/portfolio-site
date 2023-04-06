const ProjectItem = ({ name, image, alt, website, github, description }) => {
  return (
    <div class="project-item">
      <h3>{name}</h3>
      <img class="project-image" alt={alt} src={image}></img>
      {website && <a href={website}>Link</a>}
      <a href={github}>Github</a>
      {description && <p>{description}</p>}
    </div>
  );
};

export default ProjectItem;
