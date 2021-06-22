import classes from "./Contact.module.css";

import { FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";

const handleURL = (url) => {
  return () => window.open(url, "_blank");
};

const Contact = () => {
  return (
    <div className={classes.Contact} id="contact">
      <div className={classes.ContactIcons}>
        <FaMailBulk
          color="white"
          size="30px"
          style={{ padding: "1%" }}
          onClick={handleURL("123csissa@gmail.com")}
        />
        <FaGithub
          color="white"
          size="30px"
          style={{ padding: "1%" }}
          onClick={handleURL("https://github.com/isu92neth")}
        />
        <FaLinkedin
          color="white"
          size="30px"
          style={{ padding: "1%" }}
          onClick={handleURL(
            "https://www.linkedin.com/in/isurika-adikari-83696b1a1/"
          )}
        />
      </div>
    </div>
  );
};

export default Contact;
