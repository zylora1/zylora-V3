import styles from "../styles.module.css";

const columns = [
  ["PRODUCT","Features","Templates","Changelog","Pricing"],
  ["RESOURCES","Docs","Blog","UI Kit","Community"],
  ["COMPANY","About","Careers","Contact","Press"],
  ["LEGAL","Privacy","Terms","License"],
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerBrand}>
        <div className={styles.brand}>
          <span className={styles.logoBox}>NR</span>
          <span className={styles.wordmark}>NEO BRUTAL</span>
        </div>
        <small>© 2024 Neo Brutal. All rights reserved.</small>
      </div>
      <div className={styles.footerLinks}>
        {columns.map(([title, ...links]) => (
          <div key={title}>
            <strong>{title}</strong>
            {links.map((link) => <a href="#" key={link}>{link}</a>)}
          </div>
        ))}
      </div>
      <div className={styles.madeBadge}>MADE WITH ♥<br />FOR THE WEB</div>
    </footer>
  );
}
