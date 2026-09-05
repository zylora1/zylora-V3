import styles from "./styles.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";
import Projects from "./components/Projects";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Template() {
  return (
    <main className={styles.site}>
      <Header />
      <Hero />
      <Subscribe />
      <Projects />
      <About />
      <Gallery />
      <Services />
      <Footer />
    </main>
  );
}
