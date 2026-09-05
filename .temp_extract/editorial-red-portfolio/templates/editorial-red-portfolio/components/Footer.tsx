import styles from "../styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <strong>LOREM IPSUM DOLOR / ARTIST</strong>
        <span>NEW YORK / BERLIN / WORLDWIDE</span>
        <span>INFO@EXAMPLE.COM</span>
      </div>
      <div className={styles.social}>◉ &nbsp; ◍ &nbsp; P &nbsp; ♪</div>
      <a className={styles.footerLogo} href="#">BRAND LOGO</a>
    </footer>
  );
}
