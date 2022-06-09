import styles from "../styles/AboutDivider.module.css";

const AboutDivider = ({ color }) => {
  return (
    <div className={styles.aboutDivider}>
      <svg
        className={styles.svg}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className={styles.shapeFill}
          style={{ '--mycolor': color }}
        ></path>
      </svg>
    </div>
  );
};

export default AboutDivider;
