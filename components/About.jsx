import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "../styles/About.module.css";

const About = () => {
  const aboutRef = useRef(null);

  const observer = new IntersectionObserver((entries) => {
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
    observer.observe(aboutRef.current);
  }, []);

  return (
    <div className={styles.container} id="about">
      <div ref={aboutRef} className={styles.content}>
        <h2 className={`${styles.title}`}>Howdy! I&apos;m Anderson</h2>
        <p className={`${styles.paragraph}`}>
          I am a software developer located in Austin, TX. I have 3+ years of
          experience planning and building production-grade software. But, most
          of all, I am passionate about beautiful design.
          <br />
          <br />
          I enjoy incorporating animations, vibrant colors, and unique layout
          patterns into my work.
          <br />
          <br />
          Thanks for stopping by! Checkout my{" "}
          <Link
            href={
              "https://drive.google.com/drive/folders/1gXb699rp_gRvZISzFLq2thSYJaIp8Y3Z?usp=sharing"
            }
            passHref
          >
            <a className={styles.resumeLink} target="_blank" rel="noreferrer">
              RESUME
            </a>
          </Link>
          🐶
        </p>
      </div>
    </div>
  );
};

export default About;
