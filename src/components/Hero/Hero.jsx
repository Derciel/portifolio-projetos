import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Globe } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div 
          className="hero-main"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="profile-container">
            <motion.div 
              className="profile-frame cyber-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <img src="https://i.ibb.co/7xPJkf76/perfil-2.jpg" alt="Derciel Alves" className="profile-img" />
              <div className="profile-overlay"></div>
            </motion.div>
            
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="system-tag">SISTEMA_NÚCLEO_V2.4</span>
              <h1>DERCIEL <span className="glitch-text">ALVES</span></h1>
              <p className="subtitle">Especialista em IoT e Desenvolvedor de Automação Industrial</p>
              
              <motion.p 
                className="about-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Desenvolvedor apaixonado por transformar desafios industriais em soluções inteligentes. 
                Com expertise em <strong>Python, IoT e Automação</strong>, foco em criar ecossistemas logísticos 
                eficientes e dashboards de telemetria que entregam valor real. Especialista em integrar 
                hardware (ESP32/MQTT) com software de alta performance.
              </motion.p>
            </motion.div>
          </div>
          
          <div className="hero-cta-group">
            <motion.a 
              href="#projetos"
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 243, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-glitch"></span>
              EXPLORAR_PROJETOS
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-side-panel"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="telemetry-card cyber-border">
            <div className="card-header">
              <Cpu size={16} />
              <span>PONTOS_FORTES</span>
            </div>
            <div className="stat-row">
              <span className="label">AUTOMATION_MASTER</span>
              <div className="mini-bar">
                <motion.div 
                   initial={{ width: 0 }} 
                   animate={{ width: "98%" }} 
                   transition={{ delay: 1, duration: 2, ease: "anticipate" }} 
                 />
              </div>
            </div>
            <div className="stat-row">
              <span className="label">IoT_CORE_INFRA</span>
              <div className="mini-bar">
                <motion.div 
                   initial={{ width: 0 }} 
                   animate={{ width: "95%" }} 
                   transition={{ delay: 1.2, duration: 2, ease: "anticipate" }} 
                 />
              </div>
            </div>
            <div className="stat-row">
              <span className="label">PYTHON_ADVANCED_DEV</span>
              <div className="mini-bar">
                <motion.div 
                   initial={{ width: 0 }} 
                   animate={{ width: "92%" }} 
                   transition={{ delay: 1.4, duration: 2, ease: "anticipate" }} 
                 />
              </div>
            </div>

            <div className="tech-stack-showcase">
              <span className="label">TECH_STACK_REQUISITADA:</span>
              <div className="tech-icons">
                <img src="https://www.svgrepo.com/show/374016/python.svg" alt="Python" title="Python Expert" />
                <img src="https://www.svgrepo.com/show/373446/astro.svg" alt="Astro" title="Astro Framework" />
                <img src="https://i.ibb.co/7Jtcz8nd/c-plus-plus.jpg" alt="C++" title="Low Level C++" />
              </div>
            </div>
          </div>
          
          <div className="status-grid">
            <motion.div 
              className="status-item cyber-border"
              whileHover={{ borderColor: "var(--accent-cyan)" }}
            >
              <Zap size={14} />
              <span>NÍVEL_STK: 04</span>
            </motion.div>
            <motion.div 
              className="status-item cyber-border"
              whileHover={{ borderColor: "var(--accent-cyan)" }}
            >
              <Globe size={14} />
              <span>LOC: LONDRINA-PR</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;
