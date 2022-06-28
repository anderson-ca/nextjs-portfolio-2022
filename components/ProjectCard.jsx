import styles from "../styles/ProjectCard.module.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ title, desc, videoURL, techIconURL }) {
  const [hover, setHover] = useState(false);
  const videoPlayer = useRef(null);

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
    <div className={`${styles.project}`}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={styles.videoWrapper}
      >
        <video
          ref={videoPlayer}
          id={styles.myVideo}
          width="100%"
          height="auto"
          src={videoURL}
          autoPlay
          loop
          muted
        />
      </div>
      <div className={styles.projectDescription}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <ul className={styles.techIcons}>
          {techIconURL.map((iconURL, index) => {
            return (
              <li className={styles.techIcon} key={index}>
                <Image
                  src={`/${iconURL}`}
                  alt="source code icon"
                  width={"100%"}
                  height={"100%"}
                />
              </li>
            );
          })}
        </ul>
        <ul className={styles.projectIcons}>
          <li>
            <Link href="/" passHref>
              <a className={styles.srcLink}>
                <Image
                  src="/code.svg"
                  alt="source code icon"
                  width={"100%"}
                  height={"30%"}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a className={styles.srcLink}>
                <Image
                  src="/website.svg"
                  alt="website icon"
                  width={"100%"}
                  height={"40%"}
                />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
