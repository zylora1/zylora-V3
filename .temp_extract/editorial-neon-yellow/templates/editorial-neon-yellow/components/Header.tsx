import styles from "../styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.microDots}><i/><i/><i/><i/></div>
      <a className={styles.brand} href="#">BRAND NAME</a>
      <nav className={styles.nav} aria-label="Primary">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#works">WORK</a>
        <a href="#services">SERVICES</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <button className={styles.menuButton} aria-label="Menu">■</button>
    </header>
  );
}
