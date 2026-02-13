import React from 'react';
import styles from '../styles/Hero.module.css';
import flecha from '../assets/flecha-hacia-abajo.png';

const Hero = () => {
  const handleScroll = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`${styles.hero} ${styles.flex}`}>
      {/* <img id="yo" src="/img/yo.jpeg" alt="foto mia" /> */}
      <h3>Hola, soy</h3>
      <h1 className="elh2">
        <b>P</b>atricio Ramo<b>s</b>
      </h1>
      <p className={styles.aboutMe}>Desarrollador FullStack | Analista SOC</p>
      <img
        className={styles.flecha}
        src={flecha}
        alt="Flecha hacia abajo"
        onClick={handleScroll}
      />
    </section>
  );
};

export default Hero;