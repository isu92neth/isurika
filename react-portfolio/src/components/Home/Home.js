import classes from "./Home.module.css";
import homeImg from "./../../img/home.jpg";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.Container}>
        <h1 className={classes.Name}>Isurika Adikari</h1>
        <h1 className={classes.SubTopic}>
          Computer Engineering, University of Peradeniya, Sri Lanka
        </h1>
      </div>
      {/*<img className={classes.HomeImg} src={homeImg} alt="homeImage"></img>*/}
    </div>
  );
};

export default Home;
