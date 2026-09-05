import styles from "../styles.module.css";
import man from "../assets/about-man.webp";
import city from "../assets/about-city.webp";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutRedBar} />
      <figure className={styles.aboutHero}>
        <img src={man.src} alt="Black and white portrait of a thoughtful man" />
      </figure>
      <h2>WHAT&apos;S<br/><span>ABOUT</span><br/>ME</h2>
      <div className={styles.aboutNew}>NEW</div>
      <div className={styles.aboutMeta}>MUSIC<br/>PRODUCER<br/>ART MANAGER</div>
      <p className={styles.aboutCopy}>
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DIAM NONUMMY NIBH EUISMOD
        TINCIDUNT UT LAOREET DOLORE MAGNA ALIQUAM ERAT VOLUTPAT.
      </p>
      <div className={styles.halfCircles} aria-hidden="true"><i/><i/></div>
      <div className={styles.aboutImagePair}>
        <img src={man.src} alt="" />
        <img src={city.src} alt="City street" />
      </div>
      <div className={styles.redGlowOne} />
    </section>
  );
}
