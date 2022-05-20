import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <h2 className={styles.h2}>Anderson Cardoso &middot; Web Developer</h2>
      <ul className={styles.sociaMediaLinks}>
        <li className={styles.li}>
          <Link href="/" passHref>
            <a className={styles.socialLink}>
              <Image
                src="/linkedin.svg"
                alt="rocket icons - two tone"
                width={"50%"}
                height={"50%"}
              />
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/" passHref>
            <a className={styles.socialLink}>
              <Image
                src="/github.svg"
                alt="rocket icons - two tone"
                width={"50%"}
                height={"50%"}
              />
            </a>
          </Link>
        </li>
      </ul>
      <p>
        <small>&copy; 2021 Anderson Cardoso. All rights reserved.</small>
      </p>
    </div>
  );
};

export default Footer;
