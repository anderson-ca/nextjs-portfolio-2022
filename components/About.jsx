import image from "next/image";
import styles from "../styles/About.module.css";
import { useParallax } from "react-scroll-parallax";
import AboutDivider from "./AboutDivider";

const About = () => {
  const { ref } = useParallax({ speed: 15 });

  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.content}>
        <h2 className={`${styles.title}`}>About Me</h2>
        <p className={`${styles.paragraph}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          deserunt, sed ullam iure ratione maxime delectus dignissimos ipsum
          earum voluptate in sequi dolorum aliquam ipsam iusto sapiente? Hic,
          repudiandae fugit?
        </p>
      </div>
      {/* <FooterDivider /> */}
      <AboutDivider color={"#1B242F"} />
    </div>
  );
};

export default About;
