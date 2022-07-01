import image from "next/image";
import styles from "../styles/About.module.css";
import { useParallax } from "react-scroll-parallax";
import BottomDivider from "./BottomDivider";

const About = () => {
  const { ref } = useParallax({ speed: 25 });

  return (
    <div className={styles.container} id="about">
      <div ref={ref} className={styles.content}>
        {/* <BottomDivider color={"#FF4C7A"} /> */}
        <h2 className={`${styles.title}`}>Hey! I'm Anderson</h2>
        <p className={`${styles.paragraph}`}>
          I'm a front-end developer located in Austin, TX. I have 3+ years of
          experience planning and building production-grade software and a
          devotion to beautiful design.
          <br />
          <br />
          I enjoy incorporating animations, vibrant colors, and unique layout
          patterns into my design.
          <br />
          <br />
          Thanks for checking out my work!
        </p>
      </div>
      <BottomDivider color={"#1B242F"} />
    </div>
  );
};

export default About;
