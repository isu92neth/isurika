import classes from "./Projects.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import Chessboard from "./../../img/chessboard.png";
import Cloud from "./../../img/cloud.png";
import UIdesign from "./../../img/UIdesign.jpg";
import Welcome from "./../../img/mediaClub_1.png";
import Members from "./../../img/mediaClub_2.png";
import TimingDiag1 from "./../../img/Timing_Diagram1.png";
import Mandelbrot from "./../../img/Mandelbrot.png";
import Julia from "./../../img/Julia.png";
import { motion } from "framer-motion";

const chessMATEimgs = [UIdesign, Chessboard, Cloud];
const mediaClubimgs = [Welcome, Members];
const CPUimgs = [TimingDiag1];
const Auctionimgs = [];
const Fractalsimgs = [Mandelbrot, Julia];
const computerimgs = [];

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
      <div className={classes.URL}>
        <a href={url}>Visit Github Repo</a>
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

const AuctionDescription = `Implemented a server which can be used by clients to bid for items in a stock exchange. Concepts such as Threads, Synchronization primitives, Sockets, 
Objects, Classes, and Collections were used.`;

const FractalsDescription = `Designed and implemented a software that would plot two of the most popular fractals: Mandelbrot set and Julia set.`;

const ComputerDescription = `Designed and built a simple 8-bit computer system which included components: ALU, instruction loading unit and display 
output unit.`;

const chessMATETech = ` Flutter, Nodejs, MySQL, AWS`;
const mediaClubTech = ` MySQL, PHP, HTML/CSS, JavaScript, Bootstrap`;
const CPUtech = `Verlog`;
const fractalsTech = `Java`;
const auctionTech = `Java`;
const computerTech = `Embedded Systems, Integrated circuits`;

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
            "https://github.com/isu92neth/Media-Club-Equipment-Lending-System",
            mediaClubimgs,
            mediaClubDescription,
            mediaClubTech
          )}
          {projectContent(
            "CPU",
            "https://github.com/isu92neth/Building-a-Memory-Hierarchy",
            CPUimgs,
            CPUdescription,
            CPUtech
          )}
          {projectContent(
            "Auction Server",
            "https://github.com/isu92neth/Auction-Server",
            Auctionimgs,
            AuctionDescription,
            auctionTech
          )}
          {projectContent(
            "Fractals",
            "https://github.com/isu92neth/Fractals",
            Fractalsimgs,
            FractalsDescription,
            fractalsTech
          )}
          {projectContent(
            "8-bit Computer",
            "",
            computerimgs,
            ComputerDescription,
            computerTech
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
