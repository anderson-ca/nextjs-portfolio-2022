import styles from "../styles/Hero.module.css";
import BottomDivider from "./dividers/BottomDivider";
import ThreeCanvas from "./ThreeCanvas";

const Hero = () => {
  return (
    <div className={`${styles.hero} fade-in`} id="hero">
      <div className={styles.heroText}>
      </div>
      <ThreeCanvas />
      <BottomDivider color={"#1B242F"} />
    </div>
  );
};

export default Hero;
