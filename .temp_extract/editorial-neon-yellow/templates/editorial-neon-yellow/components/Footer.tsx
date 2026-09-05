import styles from "../styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.footerBrand} href="#">BRAND NAME</a>
      <div className={styles.footerLinks}>
        <div><strong>MENU</strong><a href="#home">HOME</a><a href="#works">WORK</a></div>
        <div><strong>INFO</strong><a href="#about">ABOUT</a><a href="#services">SERVICES</a></div>
        <div><strong>SOCIAL</strong><a href="#">IG</a><a href="#">LI</a></div>
      </div>
      <div className={styles.footerMicro}>© 2026 — INDEPENDENT CREATIVE STUDIO</div>
    </footer>
  );
}
