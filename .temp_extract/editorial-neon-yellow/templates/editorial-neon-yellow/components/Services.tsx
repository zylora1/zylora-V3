import styles from "../styles.module.css";
import man from "../assets/service-man.webp";
import shadow from "../assets/service-shadow.webp";
import city from "../assets/project-city.webp";

const services = [
  { n:"01", title:"ART DIRECTION", img: man.src },
  { n:"02", title:"EDITORIAL DESIGN", img: shadow.src },
  { n:"03", title:"DIGITAL CAMPAIGNS", img: city.src },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <h2><span>←</span> SERVICES</h2>
      <p className={styles.servicesLead}>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT.</p>
      <div className={styles.serviceList}>
        {services.map((service) => (
          <article key={service.n}>
            <div>
              <span>{service.n}</span>
              <strong>{service.title}</strong>
              <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DIAM NONUMMY.</p>
            </div>
            <img src={service.img} alt="" />
          </article>
        ))}
      </div>
      <div className={styles.serviceDots} aria-hidden="true" />
    </section>
  );
}
