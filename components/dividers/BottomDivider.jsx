import styles from "../../styles/BottomDivider.module.css";

const BottomDivider = ({ color }) => {
  return (
    <div className={styles.bottomDivider}>
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
          style={{ "--bottom-divider-color": color }}
        ></path>
      </svg>
    </div>
  );
};

export default BottomDivider;
