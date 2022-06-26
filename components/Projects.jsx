import styles from "../styles/Projects.module.css";
import BottomDivider from "./BottomDivider";
import { useAppContext } from "../context/state";
import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const Projects = ({ myid }) => {
  const projectRefs = useRef([]);
  let [counter, setCounter] = useState(0);
  const appContext = useAppContext();
  const projectsContext = appContext.projects;

  useEffect(() => {
    setCounter(0);
    console.log("projects context -----> ", projectsContext);
    console.log(" projects -> myid ====> ", myid);
  }, []);

  useEffect(() => {
    console.log("my counter ==> ", counter);

    projectRefs.current.map((proj, index) => {
      // console.log("my proj --> ", proj.className);

      if (index === counter) {
        // console.log("bingo", index);
        proj.className = `${styles.projectItem} ${styles.show}`;
      } else {
        // console.log("no bongo", index);
        proj.className = `${styles.projectItem} ${styles.noshow}`;
      }
    });
  }, [counter]);

  /////////////////////////
  // ----- Methods ----- //
  /////////////////////////
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

  const handleCounterLeft = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("out of bound left...", counter);
    }
  };

  const handleCounterRight = () => {
    const projCount = projectRefs.current.length - 1;

    if (counter < projCount) {
      setCounter(counter + 1);
    } else {
      console.log("out of bound right...", counter);
    }
  };

  return (
    <div className={styles.projects}>
      <div className={styles.main}>
        <div
          onClick={handleCounterLeft}
          className={`${styles.arrowWrapper} ${styles.arrowLeft} ${styles.mainItem}`}
        >
          <Image
            src="/desktop-arrow-left.svg"
            alt="source code icon"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <ul className={`${styles.projectList} ${styles.mainItem}`}>
          {projectsContext.map((project, index) => {
            return (
              <li
                key={index}
                className={`${styles.projectItem}`}
                ref={(element) => {
                  projectRefs.current[index] = element;
                }}
              >
                <ProjectCard
                  title={project.title}
                  desc={project.description}
                  videoURL={project.videoURL}
                  techIconURL={project.technologyIcons}
                />
              </li>
            );
          })}
        </ul>
        <div
          onClick={handleCounterRight}
          className={`${styles.arrowWrapper} ${styles.arrowRight} ${styles.mainItem}`}
        >
          <Image
            src="/desktop-arrow-right.svg"
            alt="source code icon"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
      <BottomDivider color={"#1B242F"} />
    </div>
  );
};

export default Projects;
