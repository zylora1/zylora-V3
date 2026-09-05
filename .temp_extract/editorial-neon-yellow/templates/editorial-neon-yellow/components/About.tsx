import styles from "../styles.module.css";
import portrait from "../assets/about-woman.webp";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <figure className={styles.aboutPortrait}>
        <img src={portrait.src} alt="Black and white portrait of a woman" />
        <figcaption>
          LOREM IPSUM DOLOR SIT AMET. CREATIVE PRACTICE / NYC / 2026.
        </figcaption>
      </figure>

      <div className={styles.aboutCopy}>
        <h2><span>←</span> ABOUT</h2>
        <p>
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DIAM NONUMMY NIBH EUISMOD
          TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT.
        </p>
        <p>
          UT WISI ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL
          UT ALIQUIP EX EA COMMODO CONSEQUAT.
        </p>
        <strong>LOREM IPSUM DOLOR SIT AMET, CONS EC-TETUER ADIPISCING</strong>
      </div>
    </section>
  );
}
