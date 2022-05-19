import styles from "../styles/About.module.css";
import Divider from './Divider';
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
        <Divider />
      <div className={styles.aboutText}>
        <h2 className={styles.title}>About me</h2>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut
          quasi, alias et, facere at assumenda velit maiores est maxime ipsa
          consequuntur! Ullam facere minus corrupti aspernatur sequi delectus
          totam.
        </p>
      </div>
      <div className={styles.aboutImage}>
        <Image
          src="/anderson-face.svg"
          alt="rocket icons - two tone"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default About;
