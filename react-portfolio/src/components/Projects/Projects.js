import classes from "./Projects.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import Chessboard from "./../../img/chessboard.png";
import Cloud from "./../../img/cloud.png";
import UIdesign from "./../../img/UIdesign.jpg";

const projectContent = (title, url, thumbnail, description) => {
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.ProjectTitle}>
        <h2>{title}</h2>
      </div>
      <div className={classes.Thumbnail}>
        <img src={thumbnail} alt="thumbnail"></img>
      </div>
      <div className={classes.Text}>
        <p>{description}</p>
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

const Projects = () => {
  return (
    <div className={classes.Projects}>
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
            chessMATEdescription
          )}
          {projectContent(
            "Media Club",
            "https://cepdnaclk.github.io/e16-3yp-chessMATE/",
            Chessboard,
            chessMATEdescription
          )}
          {projectContent(
            "CPU",
            "https://cepdnaclk.github.io/e16-3yp-chessMATE/",
            Cloud,
            chessMATEdescription
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
