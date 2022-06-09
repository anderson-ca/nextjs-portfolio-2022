import { useState, useEffect, useRef } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const mobileMenuRef = useRef(null);

  // useEffect(() => {
  //   let mobileMenu = mobileMenuRef.current;
  // }, []);

  useEffect(() => {
    console.log("my click event here ==> ", click);

    if (click) {
      console.log("open mobile menu");
      mobileMenuRef.current.className = `${styles.navbarContainer} ${styles.activeMobileMenu}`;
    } else if (!click) {
      console.log("close mobile menu");
      mobileMenuRef.current.className = `${styles.navbarContainer}`;
    }
  }, [click]);

  return (
    <div ref={mobileMenuRef} className={styles.navbarContainer}>
      <ul className={styles.ul}>
        <li className={`${styles.li}`} id={styles.logo}>
          <Link href="/" passHref>
            <a onClick={() => setClick(!click)} className={styles.navLink}>
              <span className={`${styles.dogHouse}`}>
                <Image
                  src="/dog-house.svg"
                  alt="logo icon - dog house"
                  width={"70%"}
                  height={"70%"}
                />
              </span>
              <span className={`${styles.linkText}`} id={styles.logoText}>
                Home
              </span>
              <span className={`${styles.arrow} ${styles.linkIcon}`}>
                <Image
                  src="/share.png"
                  alt="logo icon - dog house"
                  width={"70%"}
                  height={"70%"}
                />
              </span>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="#projects" passHref>
            <a className={styles.navLink}>
              <span className={`${styles.linkIcon}`}>
                <Image
                  src="/creativity.png"
                  alt="rocket icons - two tone"
                  width={"50%"}
                  height={"50%"}
                />
              </span>
              <span className={`${styles.linkText}`}>Projects</span>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="#about" passHref>
            <a className={styles.navLink}>
              <span className={`${styles.linkIcon}`}>
                <Image
                  src="/votes.png"
                  alt="rocket icons - two tone"
                  width={"50%"}
                  height={"50%"}
                />
              </span>
              <span className={`${styles.linkText}`}>About</span>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="#contact" passHref>
            <a className={styles.navLink}>
              <span className={`${styles.linkIcon}`}>
                <Image
                  src="/job-search.png"
                  alt="rocket icons - two tone"
                  width={"50%"}
                  height={"50%"}
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
