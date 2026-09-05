import styles from "../styles.module.css";
import city from "../assets/project-city.webp";
import night from "../assets/project-night.webp";
import woman from "../assets/project-woman.webp";

const cards = [
  { src: city.src, title: "URBAN STORIES", pos: "a" },
  { src: night.src, title: "AFTER DARK", pos: "b" },
  { src: woman.src, title: "PORTRAIT STUDY", pos: "c" },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="works">
      <header className={styles.projectHeader}>
        <small>LOREM IPSUM DOLOR<br/>SIT AMET</small>
        <h2>CURRENT <span>→</span><br/>PROJECTS</h2>
      </header>

      <p className={styles.projectIntro}>
        A modular project wall mixing photography, typography and fluorescent graphic fields.
        Each image is a real supplied asset and is intentionally cropped to mirror the reference rhythm.
      </p>

      <div className={styles.projectCards}>
        {cards.map((card) => (
          <article className={`${styles.projectCard} ${styles["project_"+card.pos]}`} key={card.title}>
            <img src={card.src} alt="" />
            <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.</p>
            <a href="#about">FULL VIEW</a>
          </article>
        ))}
      </div>

      <div className={styles.crossGrid} aria-hidden="true">
        {Array.from({length: 9}).map((_,i)=><i key={i}>+</i>)}
      </div>
    </section>
  );
}
