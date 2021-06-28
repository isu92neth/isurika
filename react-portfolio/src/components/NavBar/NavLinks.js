import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          to="/"
          onClick={() => {
            let Home = document.getElementById("Home");
            Home && Home.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Home
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          to="/about"
          onClick={() => {
            let about = document.getElementById("about");
            about &&
              about.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          About Me
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.15 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          to="/skills"
          onClick={() => {
            let skills = document.getElementById("skills");
            skills &&
              skills.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Skills
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          to="/projects"
          onClick={() => {
            let projects = document.getElementById("projects");
            projects &&
              projects.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Projects
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.25 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          to="/contact"
          onClick={() => {
            let contact = document.getElementById("contact");
            contact &&
              contact.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Contact
        </Link>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
