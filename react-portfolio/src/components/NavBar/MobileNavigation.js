import classes from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <CgMenuRound
      className={classes.Hamburger}
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgCloseO
      className={classes.Hamburger}
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);
  return (
    <div>
      <nav className={classes.MobileNavigation}>
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};

export default MobileNavigation;
