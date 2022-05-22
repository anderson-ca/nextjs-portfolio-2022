import styles from "../styles/Projects.module.css";
import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const videoPlayer = useRef(null);
  const [hover, setHover] = useState(false);

  const range = (start, end, step = 1) => {
    let output = [];
    if (typeof end === "undefined") {
      end = start;
      start = 0;
    }
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
    return output;
  };

  return (
    <div className={styles.projectsWrapper}>
      <h2 className={styles.h2}>My Projects</h2>
      <div className={styles.main}>
        <div className={styles.arrowWrapper}>
          <Link href="/" passHref>
            <a className={styles.leftArrow}>
              <Image
                src="/arrow-left.svg"
                alt="source code icon"
                width={"100%"}
                height={"100%"}
              />
            </a>
          </Link>
        </div>
        <ul className={styles.projectList}>
          {range(0, 1).map((num) => {
            return (
              <li
                key={num}
                className={`${styles.projectItem} ${styles.active}`}
              >
                <ProjectCard />
              </li>
            );
          })}
        </ul>
        <div className={styles.arrowWrapper}>
          <Link href="/" passHref>
            <a className={styles.rightArrow}>
              <Image
                src="/arrow-right.svg"
                alt="source code icon"
                width={"100%"}
                height={"100%"}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
