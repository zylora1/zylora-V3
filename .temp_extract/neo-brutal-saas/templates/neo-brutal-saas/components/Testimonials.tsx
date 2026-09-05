import styles from "../styles.module.css";

const testimonials = [
  { q: "purpleText", text: <>Finally, a UI kit that matches<br />our product&apos;s energy. Bold,<br />clean, and super flexible.</>, who: "– Sarah K.", role: "Product Designer" },
  { q: "orangeText", text: <>Neo Brutalism gives our<br />website a unique look that<br />stands out. Love it!</>, who: "– Mike T.", role: "Founder, Indie Hackers" },
  { q: "limeText", text: <>The best design system<br />we&apos;ve used. Fast to build,<br />easy to customize.</>, who: "– Alex P.", role: "Design Engineer" },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialColumn}>
        <h2 className={styles.sectionTitle}>WHAT PEOPLE SAY</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((t) => (
            <article className={styles.testimonialCard} key={t.who}>
              <div className={`${styles.quoteMark} ${styles[t.q]}`}>“</div>
              <p>{t.text}</p>
              <strong>{t.who}</strong>
              <span>{t.role}</span>
            </article>
          ))}
        </div>
      </div>
      <aside className={styles.teamPanel} aria-label="Product team logo grid">
        <span>USED BY TOP PRODUCT TEAMS</span>
        <div className={styles.teamGrid}>
          {["▲","◒","⬡","N","╱","✹","S","•••"].map((mark, i) => <b key={`${mark}-${i}`}>{mark}</b>)}
        </div>
      </aside>
    </section>
  );
}
