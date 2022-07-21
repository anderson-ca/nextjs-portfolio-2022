import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anderson | Developer</title>
        <link rel="shortcut icon" href="/header-icon.svg" />
      </Head>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}
