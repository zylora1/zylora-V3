import styles from "../styles.module.css";
import clouds from "../assets/work-clouds.webp";
import night from "../assets/work-night.webp";
import woman from "../assets/work-color-woman.webp";
import abstract from "../assets/work-abstract.webp";
import man from "../assets/work-man.webp";
import shadow from "../assets/work-shadow.webp";
import silhouette from "../assets/work-silhouette.webp";

const work = [
  {src:clouds.src, title:"CLOUD STUDY"},
  {src:shadow.src, title:"PORTRAIT / 01"},
  {src:night.src, title:"NIGHT CITY"},
  {src:abstract.src, title:"GRAPHIC SYSTEM"},
];

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="work">
      <header>
        <h2>RECENT<br/>WORK 2026<br/>PORTFOLIO</h2>
        <div className={styles.dotPoster} aria-hidden="true">
          {Array.from({length:20}).map((_,i)=><i key={i}/>)}
        </div>
      </header>

      <div className={styles.workGrid}>
        {work.map((item) => (
          <article key={item.title}>
            <img src={item.src} alt="" />
            <strong>{item.title}</strong>
            <span>LOREM IPSUM / CREATIVE DIRECTION</span>
          </article>
        ))}
      </div>

      <div className={styles.asterisk} aria-hidden="true">
        <i/><i/><i/><i/>
      </div>

      <div className={styles.redGlowThree} />

      <div className={styles.bottomStrip}>
        <article><img src={man.src} alt="Black and white male portrait"/><a href="#">LEARN MORE</a></article>
        <article><img src={clouds.src} alt="Black and white clouds"/><a href="#">LEARN MORE</a></article>
        <article><img src={woman.src} alt="Portrait of a woman looking upward"/><a className={styles.redButton} href="#">LEARN MORE</a></article>
      </div>
    </section>
  );
}
