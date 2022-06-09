import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <ul className={styles.sociaMediaLinks}>
        <li className={styles.li}>
          <Link href="/" passHref>
            <a className={styles.socialLink}>
              <Image
                src="/linkedin3.svg"
                alt="rocket icons - two tone"
                width={"30%"}
                height={"30%"}
              />
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/" passHref>
            <a className={styles.socialLink}>
              <Image
                src="/github3.svg"
                alt="rocket icons - two tone"
                width={"30%"}
                height={"30%"}
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
