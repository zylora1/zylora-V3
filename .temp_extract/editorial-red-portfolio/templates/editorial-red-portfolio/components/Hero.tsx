import styles from "../styles.module.css";
import hero from "../assets/hero-woman.webp";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroTitle}>
        <h1>MUSIC ↗<br/>PRODUCER<br/>ART<br/>MANAGER</h1>
        <p>CREATIVE DIRECTION / VISUAL IDENTITY / ARTIST DEVELOPMENT</p>
      </div>

      <div className={styles.cityNames}>
        <span>NEW YORK</span><span>BERLIN</span><span>TOKYO</span><span>PARIS</span>
      </div>

      <figure className={styles.heroImage}>
        <img src={hero.src} alt="Black and white portrait of a woman with her arm over her head" />
        <figcaption>ARTIST NAME</figcaption>
      </figure>

      <div className={styles.redRail} />
      <div className={styles.heroTextBlock}>
        <strong>LOREM IPSUM DOLOR SIT AMET.</strong>
        <p>
          A contemporary portfolio for a multidisciplinary artist and producer working between sound,
          image and culture.
        </p>
      </div>

      <div className={styles.rings} aria-hidden="true"><i/><i/><i/></div>
    </section>
  );
}
