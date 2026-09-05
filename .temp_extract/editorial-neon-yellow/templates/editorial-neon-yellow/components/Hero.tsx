import styles from "../styles.module.css";
import hero from "../assets/hero-man.webp";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroYellowBlock} />
      <div className={styles.futureVertical}>FUTURE</div>
      <div className={styles.futureOutline}>FUTURE</div>

      <div className={styles.heroTitle}>
        <span>AMAZING</span>
        <strong>NEW PROJECTS</strong>
        <span>NEW CITY</span>
      </div>

      <figure className={styles.heroPortrait}>
        <img src={hero.src} alt="Black and white portrait of a thoughtful man" />
      </figure>

      <div className={styles.dotField} aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => <i key={i}/>)}
      </div>

      <div className={styles.heroCopyGrid}>
        <article>
          <strong>LOREM IPSUM DOLOR</strong>
          <span>AMET</span>
          <p>Independent creative work shaped by image, typography and contemporary culture.</p>
        </article>
        <article>
          <strong>LOREM IPSUM DOLOR</strong>
          <span>AMET</span>
          <p>Visual systems for brands, artists and projects that want to feel unmistakably current.</p>
        </article>
        <article>
          <strong>LOREM IPSUM DOLOR</strong>
          <span>AMET</span>
          <p>Editorial composition, art direction and digital experiences with a strong point of view.</p>
        </article>
      </div>
    </section>
  );
}
