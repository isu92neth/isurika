import { motion } from "framer-motion";
//import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -73;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

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
        <Link smooth to="/isurika#" scroll={(el) => scrollWithOffset(el)}>
          Home
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link smooth to="/isurika#about" scroll={(el) => scrollWithOffset(el)}>
          About Me
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.15 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link smooth to="/isurika#skills" scroll={(el) => scrollWithOffset(el)}>
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
          smooth
          to={"/isurika#projects"}
          scroll={(el) => scrollWithOffset(el)}
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
          smooth
          to="/isurika#contact"
          scroll={(el) => scrollWithOffset(el)}
        >
          Contact
        </Link>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
