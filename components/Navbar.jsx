import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [activeMobileItem, setActiveMobileItem] = useState(null);
  const mobileMenuRef = useRef(null);
  const navbarRef = useRef([]);

  useEffect(() => {
    // console.log("my click event here ==> ", click);

    if (click) {
      // console.log("open mobile menu");
      mobileMenuRef.current.className = `${styles.navbarContainer} ${styles.activeMobileMenu}`;
    } else if (!click) {
      // console.log("close mobile menu");
      mobileMenuRef.current.className = `${styles.navbarContainer}`;
    }
  }, [click]);

  useEffect(() => {
    switch (activeMobileItem) {
      case "projects":
        navbarRef.current[0].classList.add(`${styles.active}`);
        navbarRef.current[1].classList.remove(`${styles.active}`);
        navbarRef.current[2].classList.remove(`${styles.active}`);
        console.log("switch to => ", navbarRef.current[0].classList);
        break;
      case "contact":
        navbarRef.current[1].classList.add(`${styles.active}`);
        navbarRef.current[0].classList.remove(`${styles.active}`);
        navbarRef.current[2].classList.remove(`${styles.active}`);
        console.log("switch to => ", navbarRef.current[2].classList);
        break;
      case "about":
        navbarRef.current[2].classList.add(`${styles.active}`);
        navbarRef.current[0].classList.remove(`${styles.active}`);
        navbarRef.current[1].classList.remove(`${styles.active}`);
        console.log("switch to => ", navbarRef.current[1].classList);
        break;
      default:
        // console.log("switch to => ", e.target);
        break;
    }
  }, [activeMobileItem]);

  return (
    <div ref={mobileMenuRef} className={styles.navbarContainer}>
      <ul className={`${styles.ul} fade-in`}>
        <li className={`${styles.li}`} id={styles.logo}>
          <Link to="hero" spy={true} smooth={true} offset={50} duration={800}>
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
            offset={-150}
            duration={800}
          >
            <a
              ref={(element) => {
                navbarRef.current[0] = element;
              }}
              onTouchStart={() => setActiveMobileItem("projects")}
              onClick={() => setClick(false)}
              className={styles.navLink}
            >
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
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={800}
          >
            <a
              ref={(element) => {
                navbarRef.current[1] = element;
              }}
              onTouchStart={() => setActiveMobileItem("contact")}
              onClick={() => setClick(false)}
              className={styles.navLink}
            >
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
        <li className={styles.li}>
          <Link to="about" spy={true} smooth={true} offset={-50} duration={800}>
            <a
              ref={(element) => {
                navbarRef.current[2] = element;
              }}
              onTouchStart={() => setActiveMobileItem("about")}
              onClick={() => setClick(false)}
              className={styles.navLink}
            >
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
      </ul>
    </div>
  );
};

export default Navbar;
