import styles from "./styles.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Template() {
  return (
    <main className={styles.siteShell}>
      <Header />
      <div className={styles.pageFrame}>
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
        <Works />
        <section className={styles.ctaBand} aria-labelledby="cta-title">
          <h2 id="cta-title">BUILD SOMETHING<br />PEOPLE REMEMBER.</h2>
          <p>
            Join thousands of designers and developers<br />
            building bold products with Neo Brutalism.
          </p>
          <a className={styles.primaryButton} href="#newsletter">
            GET STARTED FREE <span aria-hidden="true">→</span>
          </a>
        </section>
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
