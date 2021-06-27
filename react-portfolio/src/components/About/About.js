import classes from "./About.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import ProfileImg from "./../../img/profile.jpg";
import { GrDocumentPdf } from "react-icons/gr";
import { motion } from "framer-motion";

const openPDF = () => {
  return () => window.open("./../../CV/CV_E16012", "_blank");
};

const About = () => {
  return (
    <div className={classes.AboutMe} id="about">
      <PageHeader title={"About Me"} />
      <div className={classes.Container}>
        <div className={classes.Photo}>
          <img className={classes.Me} src={ProfileImg} alt="ProfileImage"></img>
        </div>
        <div className={classes.Text}>
          <h2>Hello! I'm Isurika</h2>
          <p>
            A motivated, hardworking Computer Engineer, with the strong
            foundation in Software Engineering and programming principles,
            seeking for an internship or research and development opportunity
            that will allow to utilize problem solving skills and to further
            improve my skills in the field of Computer Engineering. Keen in
            learning and mastering new technologies. Possessing strong team
            working skills, but also able to work well individually.
          </p>
        </div>
        <div className={classes.PDF}>
          <motion.div whileHover={{ scale: 1.3 }}>
            <GrDocumentPdf
              size="30px"
              style={{ padding: "1%" }}
              onClick={openPDF()}
            />
          </motion.div>
          <p>View my Curriculum Vitae</p>
          <a href="./../../CV/CV_E16012">view</a>
        </div>
      </div>
    </div>
  );
};

export default About;
