import styles from "../styles.module.css";
import Icon from "./Icon";

export default function Header() {
  return (
    <>
      <div className={styles.announcement}>
        <span>NEW: NEO BRUTALISM UI KIT IS OUT NOW!</span>
        <div className={styles.announcementActions}>
          <a href="#works">CHECK IT OUT →</a>
          <a href="#works">CHECK IT OUT →</a>
          <button type="button" aria-label="Close announcement">×</button>
        </div>
      </div>
      <header className={styles.header}>
        <a className={styles.brand} href="#" aria-label="Neo Brutal home">
          <span className={styles.logoBox}>NR</span>
          <span className={styles.wordmark}>NEO BRUTAL</span>
        </a>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#features">PRODUCT</a>
          <a href="#works">TEMPLATES</a>
          <a href="#articles">RESOURCES</a>
          <a href="#pricing">PRICING</a>
          <a href="#footer">ABOUT</a>
        </nav>
        <div className={styles.headerActions}>
          <a className={styles.login} href="#login">LOG IN</a>
          <a className={styles.signUp} href="#newsletter">SIGN UP <span>→</span></a>
        </div>
      </header>
    </>
  );
}
