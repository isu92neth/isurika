import classes from "./About.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import ProfileImg from "./../../img/profile.jpg";
import { GrDocumentPdf } from "react-icons/gr";
import { motion } from "framer-motion";

const openPDF = () => {
  return () =>
    window.open(
      "https://github.com/isu92neth/isurika/blob/main/react-portfolio/src/CV/CV_E16012.pdf",
      "_blank"
    );
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
            foundation in Software Engineering and programming principles.
            Interested in Mobile and Web application development. Keen in
            learning and mastering new technologies. If interested you can go
            through my projects shown below.
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
        </div>
      </div>
    </div>
  );
};

export default About;
