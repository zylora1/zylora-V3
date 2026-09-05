import styles from "../styles.module.css";
import Icon from "./Icon";

export default function Newsletter() {
  return (
    <section className={styles.newsletter} id="newsletter">
      <div className={styles.newsletterCopy}>
        <h2>STAY IN THE LOOP</h2>
        <p>New templates, resources, and brutal<br />design inspiration. Straight to your inbox.</p>
      </div>
      <form className={styles.newsletterForm}>
        <label className={styles.srOnly} htmlFor="email">Email address</label>
        <input id="email" type="email" placeholder="Enter your email" required />
        <button type="submit">SUBSCRIBE <span>→</span></button>
      </form>
      <div className={styles.socials} aria-label="Social links">
        <a href="#x" aria-label="X"><Icon name="x" /></a>
        <a href="#youtube" aria-label="YouTube"><Icon name="youtube" /></a>
        <a href="#linkedin" aria-label="LinkedIn"><Icon name="linkedin" /></a>
        <a href="#discord" aria-label="Discord"><Icon name="discord" /></a>
      </div>
    </section>
  );
}
