import classes from "./Home.module.css";
import homeImg from "./../../img/home.jpg";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.Container}>
        <h1 className={classes.Hello}>Hello World</h1>
        <h1>Welcome on my website</h1>
      </div>
      <img className={classes.HomeImg} src={homeImg} alt="homeImage"></img>
    </div>
  );
};

export default Home;
