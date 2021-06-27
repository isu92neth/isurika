import classes from "./Projects.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import Chessboard from "./../../img/chessboard.png";
import Cloud from "./../../img/cloud.png";
import UIdesign from "./../../img/UIdesign.jpg";
import Welcome from "./../../img/mediaClub_1.png";
import Members from "./../../img/mediaClub_2.png";
import Equipment from "./../../img/mediaClub_3.png";
import TimingDiag1 from "./../../img/Timing_Diagram1.png";
import TimingDiag2 from "./../../img/Timing_Diagram2.png";
import TimingDiag3 from "./../../img/Timing_Diagram3.png";
import { motion } from "framer-motion";

const chessMATEimgs = [UIdesign, Chessboard, Cloud];
const mediaClubimgs = [Welcome, Members];
const CPUimgs = [TimingDiag1];

const projectContent = (title, url, imgList, description, technologies) => {
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.ProjectTitle}>
        <h2>{title}</h2>
        <hr />
      </div>
      <div className={classes.Thumbnail}>
        {imgList.map((images) => (
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={images}
            alt="Image"
          ></motion.img>
        ))}
      </div>
      <div className={classes.Text}>
        <p>{description}</p>
      </div>
      <div className={classes.Technologies}>
        <h4>Technologies Used</h4>
        <p>{technologies}</p>
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
            chessMATEimgs,
            chessMATEdescription,
            chessMATETech
          )}
          {projectContent(
            "Media Club Equipment Lending System",
            "https://cepdnaclk.github.io/e16-3yp-chessMATE/",
            mediaClubimgs,
            mediaClubDescription,
            mediaClubTech
          )}
          {projectContent(
            "CPU",
            "https://cepdnaclk.github.io/e16-3yp-chessMATE/",
            CPUimgs,
            CPUdescription,
            CPUtech
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
