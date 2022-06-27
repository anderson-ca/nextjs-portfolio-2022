import styles from "../styles/Hero.module.css";
import BottomDivider from "./BottomDivider";
import ThreeCanvas from "./ThreeCanvas";

const Hero = () => {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.heroText}>
        {/* <h2>hello, I'm Anderson</h2> */}
      </div>
      <ThreeCanvas />
      <BottomDivider color={"#1B242F"} />
    </div>
  );
};

export default Hero;
