import classes from "./Projects.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import Chessboard from "./../../img/chessboard.png";
import Cloud from "./../../img/cloud.png";
import UIdesign from "./../../img/UIdesign.jpg";

const projectContent = (
  title,
  url,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  description,
  technologies
) => {
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.ProjectTitle}>
        <h2>{title}</h2>
        <hr />
      </div>
      <div className={classes.Thumbnail}>
        <img src={thumbnail1} alt="thumbnail"></img>
        <img src={thumbnail2} alt="thumbnail"></img>
        <img src={thumbnail3} alt="thumbnail"></img>
      </div>
      <div className={classes.Text}>
        <p>{description}</p>
      </div>
      <div className={classes.Technologies}>
        <p>Technologies Used: {technologies}</p>
      </div>
    </div>
  );
};

const chessMATEdescription = `A Smart IoT Platform to be used by chess players who are used to play chess through online platforms. Developed and 
implemented functionalities of the mobile application and electrically powered chessboard.
`;
const mediaClubDescription = `A web application to be used by the crew members of a media club to manage the Equipment Inventory of the club. The 
web application shows the information of equipment including member details and events engaged.`;

const CPUdescription = `A simple 8-bit single-cycle processor which includes an ALU, a register file and control logic. Later a memory 
sub-system was added.`;

const chessMATETech = ` Flutter, Nodejs, MySQL, AWS`;
const mediaClubTech = ` MySQL, PHP, HTML/CSS, JavaScript, Bootstrap`;
const CPUtech = `Verlog`;

const Projects = () => {
  return (
    <div className={classes.Projects} id="projects">
      <PageHeader title={"Projects"} />
      <div className={classes.ProjectsIntro}>
        <div className={classes.Paragraph}>
          <p>Projects Handled</p>
        </div>
        <div className={classes.ProjectName}>
          {projectContent(
            "chessMATE",
            "https://cepdnaclk.github.io/e16-3yp-chessMATE/",
            UIdesign,
            Chessboard,
            Cloud,
            chessMATEdescription,
            chessMATETech
          )}
          {projectContent(
            "Media Club Equipment Lending System",
            "https://cepdnaclk.github.io/e16-3yp-chessMATE/",
            UIdesign,
            Chessboard,
            Cloud,
            mediaClubDescription,
            mediaClubTech
          )}
          {projectContent(
            "CPU",
            "https://cepdnaclk.github.io/e16-3yp-chessMATE/",
            UIdesign,
            Chessboard,
            Cloud,
            CPUdescription,
            CPUtech
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
