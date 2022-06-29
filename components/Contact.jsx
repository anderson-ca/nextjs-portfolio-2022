import { useParallax } from "react-scroll-parallax";
import styles from "../styles/Contact.module.css";
import BottomDivider from "./BottomDivider";
import TopDivider from "./TopDivider";
import Divider from "./Divider";
import Image from "next/image";

const Contact = () => {
  const { ref } = useParallax({ speed: 15 });

  return (
    <div className={`${styles.contact}`} id="contact">
      <TopDivider color={"#1B242F"} />
      <div ref={ref} className={styles.btnWrapper}>
        <a href="mailto: abc@example.com" className={styles.contactBtn}>EMAIL ME</a>
      </div>
      <div ref={ref} className={styles.imgWrapper}>
        <Image
          src="/anderface.svg"
          alt="rocket icons - two tone"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <BottomDivider color={"#252934"} />
    </div>
  );
};

export default Contact;
