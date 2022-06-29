import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.spinner}>
          <PacmanLoader color={"#FF4C7A"} loading={true} size={"4vw"} />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <Projects />
          <Contact />
          <About />
          <Footer />
        </>
      )}
    </div>
  );
}
