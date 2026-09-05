import styles from "../styles.module.css";
import Icon from "./Icon";
import work01 from "../assets/work-01.webp";
import work02 from "../assets/work-02.webp";
import work03 from "../assets/work-03.webp";

const works = [
  { img: work01, title: "SAAS LANDING PAGE", type: "UI TEMPLATE" },
  { img: work02, title: "ANALYTICS DASHBOARD", type: "UI KIT" },
  { img: work03, title: "MOBILE APP CONCEPT", type: "APP UI" },
];

const articles = [
  { tone: "purple", title: <>Neo Brutalism: The New Web<br />Design Trend</>, date: "MAY 14, 2024" },
  { tone: "lime", title: <>8 Principles of Effective<br />Neo Brutalism</>, date: "MAY 07, 2024" },
  { tone: "orange", title: <>How We Redesigned Our Website<br />with Neo Brutalism</>, date: "APR 29, 2024" },
] as const;

export default function Works() {
  return (
    <section className={styles.worksSection} id="works">
      <div className={styles.worksColumn}>
        <div className={styles.sectionHeadingRow}>
          <h2 className={styles.sectionTitle}>LATEST WORKS</h2>
          <a href="#works">VIEW ALL →</a>
        </div>
        <div className={styles.workGrid}>
          {works.map((work) => (
            <article className={styles.workCard} key={work.title}>
              <div className={styles.workImageWrap}>
                <img src={work.img.src} alt="" />
              </div>
              <div className={styles.workMeta}>
                <div><strong>{work.title}</strong><span>{work.type}</span></div>
                <button type="button" aria-label={`Open ${work.title}`}><Icon name="arrow" /></button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.articlesColumn} id="articles">
        <div className={styles.sectionHeadingRow}>
          <h2 className={styles.sectionTitle}>LATEST ARTICLES</h2>
          <a href="#articles">VIEW ALL →</a>
        </div>
        <div className={styles.articleList}>
          {articles.map((article) => (
            <article className={styles.articleRow} key={article.date}>
              <div className={`${styles.articleSwatch} ${styles[article.tone]}`} />
              <div className={styles.articleCopy}>
                <strong>{article.title}</strong>
                <span>{article.date}</span>
              </div>
              <Icon name="arrow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
