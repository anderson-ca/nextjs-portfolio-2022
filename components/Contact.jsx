import { useParallax } from "react-scroll-parallax";
import styles from "../styles/Contact.module.css";
import BottomDivider from "./BottomDivider";
import TopDivider from "./TopDivider";
import Divider from "./Divider";
import Image from "next/image";

const Contact = () => {
  const { ref } = useParallax({ speed: 10 });

  return (
    <div className={`${styles.contact}`}>
      <TopDivider color={"#1B242F"} />
      <div ref={ref} className={styles.btnWrapper}>
        <button className={styles.contactBtn}>EMAIL ME</button>
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
