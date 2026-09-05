import styles from "../styles.module.css";

export default function Newsletter() {
  return (
    <section className={styles.newsletter} id="contact">
      <h2>GET THE LATEST</h2>
      <form>
        <label className={styles.srOnly} htmlFor="r-name">Full name</label>
        <input id="r-name" placeholder="FULL NAME" />
        <label className={styles.srOnly} htmlFor="r-email">Email</label>
        <input id="r-email" type="email" placeholder="EMAIL ADDRESS" />
        <button type="submit">SUBSCRIBE</button>
      </form>
    </section>
  );
}
