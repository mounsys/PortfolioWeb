import React from 'react';
import styles from '../styles/Education.module.css';

const Education = () => {
  return (
    <section className={`section ${styles.flex}`}>
      <h2 className="elh2">Educación</h2>
      <div className={styles.eduContainer}>
        <div className={styles.eduItem}>
          <h3>CODERHOUSE</h3>
          <p className={styles.date}>2022-2024</p>
          <p>Carrera de Ciberseguridad y Desarrollo Web (JavaScript, React.js, Desarrollo Web)</p>
        </div>
        <div className={styles.eduItem}>
          <h3>UDEMY</h3>
          <p className={styles.date}>2024-2025</p>
          <p>Curso Completo de Hacking Ético y Ciberseguridad · Curso de Ciberseguridad Defensiva</p>
        </div>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h3 className="elh2" style={{ fontSize: '2rem' }}>Idiomas</h3>
        <p><i className="fas fa-language"></i> Español (Nativo) · Inglés (Intermedio B1, lectura técnica)</p>
      </div>
    </section>
  );
};

export default Education;