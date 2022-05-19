import styles from '../styles/Hero.module.css';
import ThreeCanvas from './ThreeCanvas';

const Hero = () => {
  return (
    <div className={styles.hero}>
    <div className={styles.heroText}>
        {/* <h2>hello, I'm Anderson</h2> */}
    </div>
    <ThreeCanvas />
    </div>
  )
}

export default Hero