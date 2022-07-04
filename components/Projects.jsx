import styles from "../styles/Projects.module.css";
import BottomDivider from "./BottomDivider";
import { useAppContext } from "../context/state";
import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import Link from "next/link";

const Projects = ({ myid }) => {
  const projectRefs = useRef([]);
  let [counter, setCounter] = useState(0);
  const appContext = useAppContext();
  const projectsContext = appContext.projects;

  useEffect(() => {}, []);

  return (
    <div className={styles.main} id="projects">
      <ul className={`${styles.projectList} ${styles.mainItem}`}>
        {projectsContext.map(
          ({ title, description, srcCodeURL, websiteURL, technologyIcons }, index) => {
            return (
              <li
                key={index}
                className={`${styles.projectItem}`}
                ref={(element) => {
                  projectRefs.current[index] = element;
                }}
              >
                <div className={styles.card}>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardDescription}>{description}</p>
                  <ul className={styles.techIcons}>
                    {technologyIcons.map((iconURL, index) => {
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
                  <ul className={styles.cardIcons}>
                    <li>
                      <Link href={`${srcCodeURL}`} passHref>
                        <a target="_blank" className={styles.srcLink}>
                          <Image
                            src="/code.svg"
                            alt="source code icon"
                            width={"100%"}
                            height={"45%"}
                          />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`${websiteURL}`} passHref>
                        <a target="_blank" className={styles.srcLink}>
                          <Image
                            src="/website.svg"
                            alt="website icon"
                            width={"100%"}
                            height={"50%"}
                          />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            );
          }
        )}
      </ul>

      <BottomDivider color={"#1B242F"} />
    </div>
  );
};

export default Projects;
