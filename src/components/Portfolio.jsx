import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BootSequence from './BootSequence/BootSequence';
import Hero from './Hero/Hero';
import MainProject from './MainProject/MainProject';
import GitHubStats from './GitHubStats/GitHubStats';
import ProjectTerminal from './ProjectTerminal/ProjectTerminal';
import ParticleBackground from './ParticleBackground/ParticleBackground';
import '../styles/global.css';
import './Portfolio.css';

const Portfolio = () => {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <main className="portfolio-root">
      {/* Camada de scanlines para todo o site */}
      <div className="scanlines"></div>
      <ParticleBackground />
      
      {!isBooted ? (
        <BootSequence onComplete={() => setIsBooted(true)} />
      ) : (
        <motion.div 
          className="portfolio-content"
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Hero />
          
          <MainProject />
          
          {/* Estatísticas do GitHub */}
          <div id="repositorios">
            <GitHubStats />
          </div>
          
          <ProjectTerminal />
          
          <footer className="main-footer">
            <div className="footer-content">
              <p className="mono">© 2026 DERCIEL_ALVES_DOS_SANTOS_JR // TODOS_OS_DIREITOS_RESERVADOS</p>
              <div className="footer-status">
                <motion.span 
                  className="dot green"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.span>
                <span className="mono">CONEXÃO: SEGURA</span>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </main>
  );
};

export default Portfolio;
