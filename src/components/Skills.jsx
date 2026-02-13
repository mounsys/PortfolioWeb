import React from 'react';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <section className={`section ${styles.flex}`}>
      <h2 className="elh2">Habilidades Técnicas</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillCategory}>
          <h3><i className="fas fa-shield-alt"></i> Ciberseguridad Defensiva</h3>
          <ul>
            <li>Monitoreo y análisis de logs (SIEM: Wazuh, Splunk)</li>
            <li>Hardening de sistemas Windows/Linux</li>
            <li>Firewalls (iptables, Windows Firewall), VPNs (OpenVPN)</li>
            <li>IDS/IPS (Snort, Suricata), Wireshark</li>
            <li>Respuesta a incidentes y análisis forense (Autopsy, FTK, Volatility)</li>
            <li>WAF (ModSecurity), OWASP Top 10</li>
            <li>Normativas: ISO 27001, NIST</li>
          </ul>
        </div>
        <div className={styles.skillCategory}>
          <h3><i className="fas fa-bug"></i> Ciberseguridad Ofensiva</h3>
          <ul>
            <li>OSINT (Shodan, Maltego, Google Hacking, TheHarvester)</li>
            <li>Escaneo de redes y vulnerabilidades (Nmap, Nessus)</li>
            <li>Explotación con Metasploit, Burp Suite, SQLmap</li>
            <li>Post-explotación (Meterpreter, Mimikatz)</li>
            <li>Ataques web: XSS, CSRF, SQLi, path traversal</li>
            <li>Entornos controlados: VMware, Kali Linux, Metasploitable</li>
          </ul>
        </div>
        <div className={styles.skillCategory}>
          <h3><i className="fas fa-code"></i> Desarrollo y Automatización</h3>
          <ul>
            <li>HTML, CSS, JavaScript, React.js</li>
            <li>Python para scripting de seguridad</li>
            <li>Git, Docker básico</li>
            <li>Administración de sistemas (Windows/Linux)</li>
            <li>Paquete Office (Word, Excel, PowerPoint)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;