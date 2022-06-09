import styles from "../styles/ProjectCard.module.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ title, desc, videoURL, techIconURL }) {
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
    <div className={`${styles.card}`}>
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
          src={videoURL}
          autoPlay
          loop
          muted
        />
      </div>
      <div className={styles.cardTextWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <ul className={styles.techList}>
          {techIconURL.map((iconURL, index) => {
            return (
              <li>
                <Image
                  src={`/${iconURL}`}
                  alt="source code icon"
                  width={"40%"}
                  height={"40%"}
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
