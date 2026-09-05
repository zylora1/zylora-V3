import styles from "./styles.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default function Template() {
  return (
    <main className={styles.site}>
      <Header />
      <Hero />
      <Newsletter />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  );
}
