import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section id="about" className={`section ${styles.flex}`}>
      <h2 className="elh2">Sobre Mí</h2>
      <p className={styles.aboutText}>
        Estudiante de tecnicatura universitaria en tecnologías de programación con formación especializada en 
        <b> ciberseguridad ofensiva y defensiva</b>. Enfocado en la protección de sistemas, detección de amenazas 
        y respuesta a incidentes. Busco mi primera oportunidad laboral como Analista SOC o Técnico en Ciberseguridad.
      </p>
      <div className={styles.infoContacto}>
        <span><i className="fas fa-envelope"></i> patricioramos116@gmail.com</span>
        <span><i className="fas fa-phone"></i> +54 9 2355 466060</span>
        <span><i className="fas fa-map-marker-alt"></i> Lincoln, Buenos Aires, Argentina</span>
      </div>
    </section>
  );
};

export default About;