import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}
