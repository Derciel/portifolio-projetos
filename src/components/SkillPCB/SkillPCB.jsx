import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillGame from '../SkillGame/SkillGame';
import { Rocket, FastForward } from 'lucide-react';
import './SkillPCB.css';

const skills = [
  { name: 'CORE_ENGINE', x: 20, y: 25, level: 90 },
  { name: 'IOT_GATEWAY', x: 50, y: 45, level: 95 },
  { name: 'TELEMETRY_LOG', x: 80, y: 25, level: 85 },
  { name: 'DASHBOARD_UI', x: 20, y: 70, level: 75 },
  { name: 'DATA_PERSISTENCE', x: 80, y: 70, level: 80 },
  { name: 'CLOUD_INFRA', x: 50, y: 85, level: 85 },
];

const SkillPCB = () => {
  const [showGame, setShowGame] = useState(false);

  return (
    <section className="skills-section">
      <div className="skills-container cyber-border">
        <AnimatePresence>
          {showGame && (
            <SkillGame onClose={() => setShowGame(false)} />
          )}
        </AnimatePresence>

        <div className="pcb-header">
          {!showGame && <span className="pcb-title">CAMADA_DE_ABSTRAÇÃO_DE_HARDWARE</span>}
          <div className="header-actions">
            <button 
              className="override-btn mono"
              onClick={() => setShowGame(true)}
            >
              [INICIAR_OVERRIDE_MANUAL]
            </button>
            <div className="pcb-leds">
              <div className="p-led green"></div>
              <div className="p-led yellow"></div>
              <div className="p-led blue"></div>
            </div>
          </div>
        </div>
        
        <div className="pcb-grid">
          <svg className="pcb-svg" viewBox="0 0 100 100">
            {/* Linhas de conexão (Trilhas) - Centralizadas no ESP32 corrigido */}
            <motion.path 
              d="M 20 25 L 50 45 L 80 25 M 50 45 L 50 85 M 20 70 L 50 45 M 80 70 L 50 45"
              fill="none"
              stroke="var(--accent-cyan-dim)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {skills.map((skill, i) => (
              <g key={i}>
                <motion.circle 
                  cx={skill.x} 
                  cy={skill.y} 
                  r="1.5"
                  fill="var(--accent-cyan)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                />
              </g>
            ))}
          </svg>
          
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              className="skill-node"
              style={{ top: `${skill.y}%`, left: `${skill.x}%` }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="node-content">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar-mini">
                  <div className="fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="pcb-footer">
          <div className="footer-meta">
            <p>// INTERFACE: TIPO_DE_BUS_SPI</p>
            <p>// TAXA_DE_BAUD: 115200</p>
          </div>
          
          <motion.div 
            className="rocket-navigation"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => document.getElementById('repositorios')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="rocket-wrapper">
              <Rocket size={28} className="rocket-icon" />
              <div className="engine-flame"></div>
            </div>
            <span className="mono">VER_REPOSITÓRIOS</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillPCB;
