import styles from "../styles.module.css";
import city from "../assets/gallery-city.webp";
import portrait from "../assets/gallery-portrait.webp";
import clouds from "../assets/gallery-clouds.webp";
import abstract from "../assets/gallery-abstract.webp";

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.galleryHeading}>
        <h2>NYC PROJECT<br/>GALLERY</h2>
        <p>RECENT VISUAL STUDIES, STREET WORK AND PORTRAIT-LED ART DIRECTION.</p>
      </div>
      <div className={styles.galleryMosaic}>
        <img className={styles.g1} src={city.src} alt="City architecture at sunset" />
        <img className={styles.g2} src={clouds.src} alt="Black and white clouds" />
        <img className={styles.g3} src={portrait.src} alt="Portrait of a woman looking upward" />
        <img className={styles.g4} src={abstract.src} alt="Black, grey and white geometric artwork" />
      </div>
    </section>
  );
}
