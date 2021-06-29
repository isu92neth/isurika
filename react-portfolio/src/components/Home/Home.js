import classes from "./Home.module.css";
import homeImg from "./../../img/home.jpg";
import WaveLine from "./WaveLine";

const Home = () => {
  return (
    <div className={classes.Home} id="home">
      <WaveLine />
      <div className={classes.Container}>
        <h1 className={classes.Name}>Isurika Adikari</h1>

        <h1 className={classes.SubTopic}>
          Computer Engineering, University of Peradeniya, Sri Lanka
        </h1>
      </div>
    </div>
  );
};

export default Home;
