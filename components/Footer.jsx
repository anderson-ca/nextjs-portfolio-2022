import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <ul className={styles.sociaMediaLinks}>
        <li className={styles.li}>
          <Link href="https://www.linkedin.com/in/anderson-du-cardoso/" passHref>
            <a target="_blank" className={styles.socialLink}>
              <Image
                src="/linkedin-footer.svg"
                alt="rocket icons - two tone"
                width={"35%"}
                height={"35%"}
              />
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="https://github.com/anderson-ca" passHref>
            <a target="_blank" className={styles.socialLink}>
              <Image
                src="/github-footer.svg"
                alt="rocket icons - two tone"
                width={"35%"}
                height={"35%"}
              />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
