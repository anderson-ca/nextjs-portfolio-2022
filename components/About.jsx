import styles from "../styles/About.module.css";
import AboutDivider from './AboutDivider';
import Divider from './Divider';
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
        <Divider />
      <div className={styles.aboutText}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.p}>
          Feel free to reach out via email, LinkedIn, or whatever mens of communication works best for you!
        </p>
        <p><a href='ander:card@example.com' className={styles.btn}>Email me</a></p>
      </div>
      <div className={styles.aboutImage}>
        <Image
          src="/anderson-face.svg"
          alt="rocket icons - two tone"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <AboutDivider />
    </div>
  );
};

export default About;
