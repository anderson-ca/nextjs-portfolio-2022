import styles from "../styles/Contact.module.css";
import { useParallax } from "react-scroll-parallax";
import AboutDivider from "./AboutDivider";

const Contact = () => {
  const { ref } = useParallax({ speed: 10 });

  return (
    <div className={styles.contactWrapper}>
      <div ref={ref} className={styles.contactContent}>
        <h2>About Me</h2>
        <p>
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

export default Contact;
