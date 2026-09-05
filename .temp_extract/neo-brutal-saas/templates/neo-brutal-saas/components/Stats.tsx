import styles from "../styles.module.css";

export default function Stats() {
  return (
    <section className={styles.statsStrip} aria-label="Company statistics">
      <div className={styles.statsPurple}>
        <div><strong>12K+</strong><span>DESIGNERS</span></div>
        <div><strong>98%</strong><span>SATISFACTION</span></div>
        <div><strong>150+</strong><span>COUNTRIES</span></div>
      </div>
      <div className={styles.trustedPanel}>
        <span>TRUSTED BY TEAMS AT</span>
        <div className={styles.logoWords}>
          <b>stripe</b><b>◒ linear</b><b>▲ vercel</b><b>✹ loom</b>
        </div>
      </div>
    </section>
  );
}
