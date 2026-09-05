import styles from "../styles.module.css";
import Icon from "./Icon";

const features = [
  { tone: "purple", icon: "bolt", title: "ULTRA FAST", copy: <>Built for speed and<br />performance from the<br />ground up.</> },
  { tone: "lime", icon: "module", title: "FULLY MODULAR", copy: <>Components are<br />designed to be<br />reused and combined.</> },
  { tone: "orange", icon: "circle", title: "BOLD BY DEFAULT", copy: <>Strong visual<br />hierarchy with zero<br />fluff.</> },
  { tone: "purple", icon: "globe", title: "RESPONSIVE", copy: <>Looks brutal on<br />every device and<br />screen size.</> },
] as const;

export default function Features() {
  return (
    <section className={styles.features} id="features" aria-label="Features">
      {features.map((feature) => (
        <article className={styles.featureCard} key={feature.title}>
          <div className={`${styles.featureIcon} ${styles[feature.tone]}`}>
            {feature.icon === "bolt" && <Icon name="bolt" />}
            {feature.icon === "globe" && <Icon name="globe" />}
            {feature.icon === "circle" && <span className={styles.circleIcon} />}
            {feature.icon === "module" && <span className={styles.moduleIcon} />}
          </div>
          <div>
            <h2>{feature.title}</h2>
            <p>{feature.copy}</p>
          </div>
          <Icon name="arrow" className={styles.featureArrow} />
        </article>
      ))}
    </section>
  );
}
