import styles from "../styles/About.module.css";
import AboutDivider from "./AboutDivider";
import Divider from "./Divider";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <Divider />
      <div className={styles.aboutText}>
        <button className={styles.contactBtn}>
          EMAIL ME
        </button>
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
