import styles from "../styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>BRAND LOGO</a>
      <nav className={styles.nav} aria-label="Primary">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT ME</a>
        <a href="#services">WHAT I DO</a>
        <a href="#work">WORK</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <button className={styles.menu} aria-label="Open menu">■</button>
    </header>
  );
}
