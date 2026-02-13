import React from 'react';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    icon: 'chart-line',
    title: 'Mini-SOC con Wazuh',
    description: 'Implementación de SIEM en Ubuntu Server, agentes en Windows/Linux, reglas personalizadas para detección de brute force y malware.',
    tech: 'Wazuh • Elastic Stack • Linux'
  },
  {
    icon: 'server',
    title: 'Hardening de servidor web',
    description: 'Configuración segura de Apache + ModSecurity, HTTPS con Let\'s Encrypt, análisis de logs con GoAccess y generación de reportes.',
    tech: 'Apache • ModSecurity • Linux • Bash'
  },
  {
    icon: 'search',
    title: 'Simulación de respuesta a incidentes',
    description: 'Análisis forense de máquina Windows comprometida con FTK Imager y Volatility, redacción de informe técnico.',
    tech: 'FTK Imager • Volatility • Windows'
  },
  {
    icon: 'code-branch',
    title: 'Script Python para monitoreo de logs',
    description: 'Automatización para detectar IPs maliciosas en logs de firewall y envío de alertas por Telegram.',
    tech: 'Python • Telegram API • Regex'
  }
];

const Projects = () => {
  return (
    <section className={`section ${styles.flex}`}>
      <h2 className="elh2">Proyectos Destacados</h2>
      <div className={styles.projectsGrid}>
        {projects.map((proj, index) => (
          <div key={index} className={styles.projectCard}>
            <i className={`fas fa-${proj.icon} fa-3x`} style={{ color: '#3f98e0' }}></i>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <span className={styles.tech}>{proj.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;