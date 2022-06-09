import { useParallax } from "react-scroll-parallax";
import styles from "../styles/About.module.css";
import AboutDivider from "./AboutDivider";
import Divider from "./Divider";
import Image from "next/image";

const About = () => {
  const { ref } = useParallax({ speed: 10 });

  return (
    <div className={`${styles.about}`}>
      <Divider />
      <div ref={ref} className={styles.aboutText}>
        <button className={styles.contactBtn}>EMAIL ME</button>
      </div>

      <div ref={ref} className={styles.aboutImage}>
        <Image
          src="/anderface.svg"
          alt="rocket icons - two tone"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <AboutDivider color={"#252934"} />
    </div>
  );
};

export default About;
