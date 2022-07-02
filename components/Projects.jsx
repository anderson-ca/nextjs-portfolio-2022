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

  useEffect(() => {}, []);

  return (
    <div className={styles.main} id="projects">
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
            <div style={{"background-image": "url('/card-test.svg')"}} className={styles.card}>
              <div className={styles.cardBody}>
                
              </div>
            </div>
            </li>
          );
        })}
      </ul>

      <BottomDivider color={"#1B242F"} />
    </div>
  );
};

export default Projects;
