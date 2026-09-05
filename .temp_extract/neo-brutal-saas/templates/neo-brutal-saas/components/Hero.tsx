import styles from "../styles.module.css";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <h1>
          DESIGN BOLD.<br />
          BUILD FAST.<br />
          LAUNCH <span>NOW.</span>
        </h1>
        <p>
          A design system and UI kit for building<br className={styles.desktopBreak} />
          modern websites with Neo Brutalism.
        </p>
        <div className={styles.heroButtons}>
          <a className={styles.primaryButton} href="#features">GET STARTED <span>→</span></a>
          <a className={styles.secondaryButton} href="#works">BROWSE TEMPLATES</a>
        </div>
        <div className={styles.assurance}>
          {["NO CREDIT CARD", "FREE FOREVER", "OPEN SOURCE"].map((item) => (
            <span key={item}><Icon name="check" />{item}</span>
          ))}
        </div>
      </div>

      <div className={styles.heroArt} aria-label="Abstract neo-brutalist geometric artwork" role="img">
        <div className={styles.purpleArch} />
        <div className={styles.limePillar} />
        <div className={styles.orangeSteps} />
        <div className={styles.dotMatrix} aria-hidden="true">
          {Array.from({ length: 35 }).map((_, i) => <i key={i} />)}
        </div>
        <div className={styles.versionBadge}>
          <span>VERSION 1.0.0<br />AVAILABLE NOW!</span>
          <b><Icon name="arrow" /></b>
        </div>
      </div>
    </section>
  );
}
