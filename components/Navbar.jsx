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
              <span>
                <Image
                  src="/dog-house.svg"
                  alt="logo icon - dog house"
                  width={"70%"}
                  height={"70%"}
                />
              </span>
              {/* <span className={`${styles.link_text}`}>Home</span> */}
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/" passHref>
            <a className={styles.navLink}>
              <span className={`${styles.link_icon}`}>
                <Image
                  src="/job-search.png"
                  alt="rocket icons - two tone"
                  width={"70%"}
                  height={"70%"}
                />
              </span>
              <span className={`${styles.linkText}`}>Projects</span>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/" passHref>
            <a className={styles.navLink}>
              <span className={`${styles.link_icon}`}>
                <Image
                  src="/job-search.png"
                  alt="rocket icons - two tone"
                  width={"70%"}
                  height={"70%"}
                />
              </span>
              <span className={`${styles.linkText}`}>About</span>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/" passHref>
            <a className={styles.navLink}>
              <span className={`${styles.link_icon}`}>
                <Image
                  src="/job-search.png"
                  alt="rocket icons - two tone"
                  width={"70%"}
                  height={"70%"}
                />
              </span>
              <span className={`${styles.linkText}`}>Contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
