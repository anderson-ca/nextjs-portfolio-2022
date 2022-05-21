import styles from "../styles/Projects.module.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/Image";
import Link from "next/Link";

const Projects = () => {
  const videoPlayer = useRef(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let video = videoPlayer.current;

    if (hover) {
      console.log("hover baby", hover);
      video.play();
    } else {
      console.log("not hovering :(", hover);
      video.pause();
    }
  }, [hover]);

  return (
    <div className={styles.projectsWrapper}>
      <h2 className={styles.h2}>My Projects</h2>
      <ul className={styles.projectList}>
        <li className={styles.projectItem}>
          <div className={styles.card}>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={styles.imageWrapper}
            >
              <video
                ref={videoPlayer}
                id={styles.myVideo}
                width="100%"
                height="auto"
                src="/carouselvid1.mp4"
                autoPlay
                loop
                muted
              />
            </div>
            <div className={styles.cardTextWrapper}>
              <h3>Title</h3>
              <p>
                This is a simple project built using html, css, javascript, and
                Three.js
              </p>
              <ul className={styles.projectIcons}>
                <li>
                  <Link href="/" passHref>
                    <a className={styles.navLink}>
                      <Image
                        src="/code.svg"
                        alt="source code icon"
                        width={"100%"}
                        height={"100%"}
                      />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a className={styles.navLink}>
                      <Image
                        src="/website.svg"
                        alt="website icon"
                        width={"100%"}
                        height={"100%"}
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
