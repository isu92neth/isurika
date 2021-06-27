import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import classes from "./NavBar.module.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <div>
      <nav className={classes.Navigation}>
        <NavLinks />
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

export default Navigation;
