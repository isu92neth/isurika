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
        <a href="/">Home</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#about">About</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.15 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#skills">Skills</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#projects">Projects</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.25 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#contact">Contact</a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
