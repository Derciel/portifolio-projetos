import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BootSequence.css';

const logs = [
  "[ 0.000000] Inicializando DercielOS v2.4.0-industrial...",
  "[ 0.142531] CPU: ARMv8-A rev 1 (v8l) @ 1.2GHz",
  "[ 0.285102] MEM: 1024MB Física, 512MB Swap inicializada",
  "[ 0.421092] REDE: Conectando ESP32 via MQTT @ broker.derciel.dev",
  "[ 0.612041] IOT: Nó de sensor Nicopel-LDB verificado...",
  "[ 0.840211] SERVIÇO: Motor de Automação Python [INICIANDO]",
  "[ 1.120401] SERVIÇO: Núcleo do Painel de UI [INICIANDO]",
  "[ 1.340212] MÓDULO: Submódulo RastreioTheBest carregado",
  "[ 1.560102] MÓDULO: Sub-rotina ChapaSaida ativa",
  "[ 1.890412] AUTO: Derciel Alves dos Santos Junior verificado",
  "[ 2.200101] SISTEMA: Todos os sistemas funcionais. Lançando UI...",
];

const BootSequence = ({ onComplete }) => {
  const [currentLogs, setCurrentLogs] = useState([]);
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < logs.length) {
        setCurrentLogs((prev) => [...prev, logs[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setBooting(false);
          setTimeout(onComplete, 800);
        }, 1000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {booting && (
        <motion.div 
          className="boot-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="boot-terminal">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="title">SYSTEM_BOOT_LOG</span>
            </div>
            <div className="terminal-content">
              {currentLogs.map((log, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                  className="log-line"
                >
                  <span className="prompt">{" > "}</span> {log}
                </motion.div>
              ))}
              <motion.div 
                className="cursor"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
          </div>
          
          <div className="boot-footer">
            <div className="power-status">
              <div className="led"></div>
              <span>SYSTEM ACTIVE</span>
            </div>
            <div className="progress-bar">
              <motion.div 
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootSequence;
