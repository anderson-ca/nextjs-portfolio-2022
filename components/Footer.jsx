import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <h2>Anderson Cardoso &middot; Web Developer</h2>
      <ul className={styles.sociaMedia}>
        <li className={styles.socialMediaLink}>Github</li>
        <li className={styles.socialMediaLink}>LinkedIn</li>
        <li className={styles.socialMediaLink}>Email</li>
      </ul>
      <p><small>&copy; 2021 Anderson Cardoso. All rights reserved.</small></p>
    </div>
  );
};

export default Footer;
