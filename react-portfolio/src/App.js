import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </BrowserRouter>
    </div>
  );
};

export default App;
