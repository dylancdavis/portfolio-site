import ProjectItem from "./ProjectItem";
import coretask from "../assets/coretask.png";
import blogshare from "../assets/blogshare.png";
import quizsite from "../assets/quizsite.png";
import calculator from "../assets/calculator.png";

const ProjectsPage = () => {
  return (
    <>
      <section>
        <h2>Web Development</h2>
        <div class="project-container">
          <ProjectItem
            name="Blogsharing Application"
            image={blogshare}
            alt={"Blogsharing Application"}
            website="http://blog-sharing.fly.dev/"
            github="https://github.com/dylancdavis/blog-sharing"
            description="This is a blog sharing application that allows users to create and share blogs with other users. Users can also comment on blogs and like blogs. This application was built using React, Node.js, Express, and MongoDB."
          />
          <ProjectItem
            name="To-do list Application"
            image={coretask}
            github="https://github.com/dylancdavis/todo-app"
            description="My todo list application"
          />
          <ProjectItem
            name="SCOTA Mentorship Quiz"
            image={quizsite}
            website="http://scotamentorshipquiz.info/"
            github="https://github.com/dylancdavis/quiz-site"
            description="A quiz site created for use by the SC Occupational Therapy Association's mentorship program."
          />
          <ProjectItem
            name="Online Calculator"
            image={calculator}
            website="https://dylancdavis.github.io/online-calculator/"
            github="https://github.com/dylancdavis/online-calculator"
            description="An online calculator created using vanilla HTML, CSS, and JavaScript."
          />
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
