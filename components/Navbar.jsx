import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/" passHref>
            <a className={styles.navLink}>
              <Image
                src="/dog-house.svg"
                alt="logo icon - dog house"
                width={"50%"}
                height={"50%"}
              />
              <span className={`${styles.link_text}`}>Home</span>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/" passHref>
            <a className={styles.navLink}>
              <span className={`${styles.link_text}`}>Projects</span>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/" passHref>
            <a className={styles.navLink}>
              <span className={`${styles.link_text}`}>About</span>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/" passHref>
            <a className={styles.navLink}>
              <span className={`${styles.link_text}`}>Contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
