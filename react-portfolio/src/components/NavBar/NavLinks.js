import { motion } from "framer-motion";

const NavLinks = (props) => {
  return (
    <ul>
      <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/">Home</a>
      </motion.li>
      <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#about">About Me</a>
      </motion.li>
      <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#skills">Skills</a>
      </motion.li>
      <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#projects">Projects</a>
      </motion.li>
      <motion.li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#contact">Contact</a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
