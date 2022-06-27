import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import styles from "../styles/Navbar.module.css";
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
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            passHref
          >
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
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            passHref
          >
            <a className={styles.navLink}>
              <span className={`${styles.linkIcon}`}>
                <Image
                  src="/creativity.png"
                  alt="rocket icons - two tone"
                  width={"35%"}
                  height={"35%"}
                />
              </span>
              <span className={`${styles.linkText} ${styles.btnStyle}`}>
                PROJECTS
              </span>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            passHref
          >
            <a className={styles.navLink}>
              <span className={`${styles.linkIcon}`}>
                <Image
                  src="/votes.png"
                  alt="rocket icons - two tone"
                  width={"25%"}
                  height={"25%"}
                />
              </span>
              <span className={`${styles.linkText} ${styles.btnStyle}`}>
                ABOUT
              </span>
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            passHref
          >
            <a className={styles.navLink}>
              <span className={`${styles.linkIcon}`}>
                <Image
                  src="/job-search.png"
                  alt="rocket icons - two tone"
                  width={"25%"}
                  height={"25%"}
                />
              </span>
              <span className={`${styles.linkText} ${styles.btnStyle}`}>
                CONTACT
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
