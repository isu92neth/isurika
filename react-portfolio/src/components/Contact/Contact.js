import classes from "./Contact.module.css";
import { motion } from "framer-motion";
import { FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";

const handleURL = (url) => {
  return () => window.open(url, "_blank");
};

const Contact = () => {
  return (
    <div className={classes.Contact} id="contact">
      <h1></h1>
      <div className={classes.ContactIcons}>
        <motion.div whileHover={{ scale: 1.3 }}>
          <FaGithub
            color="white"
            size="30px"
            style={{ padding: "1%" }}
            onClick={handleURL("https://github.com/isu92neth")}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <FaLinkedin
            color="white"
            size="30px"
            style={{ padding: "1%" }}
            onClick={handleURL(
              "https://www.linkedin.com/in/isurika-adikari-83696b1a1/"
            )}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
