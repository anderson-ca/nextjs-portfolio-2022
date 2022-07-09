import image from "next/image";
import styles from "../styles/About.module.css";
import { useParallax } from "react-scroll-parallax";
import BottomDivider from "./BottomDivider";
import { useEffect, useRef } from "react";

const About = () => {
  // const { ref } = useParallax({ speed: 15 });
  const aboutRef = useRef(null);

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
    // console.log("---xxx> ", aboutRef.current);
    observer.observe(aboutRef.current);
  }, []);

  return (
    <div className={styles.container} id="about">
      <div ref={aboutRef} className={styles.content}>
        {/* <BottomDivider color={"#FF4C7A"} /> */}
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
          <a
            className={styles.resumeLink}
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/drive/folders/1gXb699rp_gRvZISzFLq2thSYJaIp8Y3Z?usp=sharing"
          >
            RESUME 
          </a>
          🐶
        </p>
      </div>
    </div>
  );
};

export default About;
