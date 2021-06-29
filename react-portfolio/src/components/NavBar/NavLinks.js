import { motion } from "framer-motion";
//import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link smooth to="/#">
          Home
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link smooth to="/#about">
          About Me
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.15 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link smooth to="/#skills">
          Skills
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link smooth to={"/#projects"}>
          Projects
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.25 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link smooth to="/#contact">
          Contact
        </Link>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
