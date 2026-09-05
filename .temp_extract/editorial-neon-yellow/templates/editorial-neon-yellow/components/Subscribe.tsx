import styles from "../styles.module.css";

export default function Subscribe() {
  return (
    <section className={styles.subscribeBand} id="contact">
      <h2>SUBSCRIBE<br/>TO GET THE<br/>LATEST</h2>
      <form className={styles.subscribeForm}>
        <label className={styles.srOnly} htmlFor="left-name">Full name</label>
        <input id="left-name" placeholder="FULL NAME" />
        <label className={styles.srOnly} htmlFor="left-email">Email</label>
        <input id="left-email" type="email" placeholder="YOUR EMAIL" />
        <button type="submit">SUBSCRIBE</button>
      </form>
    </section>
  );
}
