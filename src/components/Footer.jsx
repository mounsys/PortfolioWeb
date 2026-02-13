import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a target="_blank" href="https://github.com/mounsys" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
        <a target="_blank" href="https://www.linkedin.com/in/patricio-ramos-621b1a27a/" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
        <a href="mailto:patricioramos116@gmail.com"><i className="fas fa-envelope fa-2x"></i></a>
      </div>
      <p>&copy; 2025 Patricio Ramos. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;