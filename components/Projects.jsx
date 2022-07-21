import BottomDivider from "./dividers/BottomDivider";
import styles from "../styles/Projects.module.css";
import { useAppContext } from "../context/state";
import { SiGooglechrome } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Link from "next/link";

const Projects = ({ myid }) => {
  const projectRefs = useRef([]);
  const appContext = useAppContext();
  const projectsContext = appContext.projects;

  let observer = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        entry.target.classList.toggle("fade-in", entry.isIntersecting);
        if (entry.intersecting) observer.unobserve(entry.target);
      },
      {
        threshold: 0.5,
      }
    );
  });

  useEffect(() => {
    projectRefs.current.forEach((ref) => {
      observer.observe(ref);
    });
  }, []);

  return (
    <div className={styles.main} id="projects">
      <ul className={`${styles.projectList} ${styles.mainItem}`}>
        {projectsContext.map(
          (
            { title, description, srcCodeURL, websiteURL, technologyIcons },
            index
          ) => {
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
                          {iconURL}
                        </li>
                      );
                    })}
                  </ul>
                  <ul className={styles.cardIcons}>
                    <li>
                      <Link href={`${srcCodeURL}`} passHref>
                        <a className={styles.tipContainer} target="_blank">
                          <span className={styles.tip}>source code</span>
                          <FaGithubAlt className={styles.srcIcon} />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`${websiteURL}`} passHref>
                        <a className={styles.tipContainer} target="_blank">
                          <span className={styles.tip}>web page</span>
                          <SiGooglechrome className={styles.srcIcon} />
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
