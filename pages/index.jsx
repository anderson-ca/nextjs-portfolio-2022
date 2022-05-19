import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';

export default function Home() {
  return (
    <div className={styles.container}>
    <Navbar />
    <Hero />
    <About />
    </div>
  )
}
