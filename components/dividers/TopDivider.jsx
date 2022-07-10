import styles from "../../styles/TopDivider.module.css";

const TopDivider = ({ color }) => {
  return (
    <div className={styles.topDivider}>
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
          style={{ "--top-divider-color": color }}
        ></path>
      </svg>
    </div>
  );
};

export default TopDivider;
