import styles from "../styles.module.css";
import woman from "../assets/services-woman.webp";
import street from "../assets/services-street.webp";

const services = [
  ["01","MUSIC PRODUCTION","Sound, production and release direction for independent artists."],
  ["02","ART DIRECTION","Visual systems, campaign language and image-led creative direction."],
  ["03","ARTIST MANAGEMENT","Positioning, launch planning and portfolio strategy."],
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.serviceHeadingRow}>
        <h2>SERVICES</h2>
        <div className={styles.serviceImages}>
          <img src={woman.src} alt="Black and white profile portrait" />
          <img src={street.src} alt="City architecture at sunset" />
        </div>
      </div>
      <div className={styles.serviceRows}>
        {services.map(([n,title,copy]) => (
          <article key={n}>
            <span>{n}</span>
            <strong>{title}</strong>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <div className={styles.redGlowTwo} />
    </section>
  );
}
