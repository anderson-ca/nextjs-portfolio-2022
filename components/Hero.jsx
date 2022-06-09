import styles from "../styles/Hero.module.css";
import AboutDivider from "./AboutDivider";
import ThreeCanvas from "./ThreeCanvas";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        {/* <h2>hello, I'm Anderson</h2> */}
      </div>
      <ThreeCanvas />
      <AboutDivider color={"#1B242F"} />
    </div>
  );
};

export default Hero;
