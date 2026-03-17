import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Terminal as TerminalIcon, 
  Cpu, 
  Layers,
  Search
} from 'lucide-react';
import './ProjectTerminal.css';

const projects = [
  {
    title: "NP-CARGO-SUBSYSTEM",
    desc: "Módulo integrante do ecossistema NP Cargo para gestão logística.",
    tech: ["NestJS", "PostgreSQL", "Vue.js"],
    coreData: { versão: "1.0.0", carga: "15%", latência: "10ms" },
    status: "PRODUÇÃO",
    link: "https://github.com/Derciel"
  },
  {
    title: "PORTAL-RH",
    desc: "Plataforma para gestão de recursos humanos e autoatendimento de funcionários.",
    tech: ["JavaScript", "HTML", "CSS"],
    coreData: { versão: "2.1.0", carga: "32%", latência: "24ms" },
    status: "ATIVO",
    link: "https://github.com/Derciel/portal-rh"
  },
  {
    title: "ESTOQUE-TI-NICOPEL",
    desc: "Sistema de controle patrimonial e inventário de ativos de tecnologia.",
    tech: ["Python", "SQL", "ERP"],
    coreData: { versão: "1.5.2", carga: "45%", latência: "18ms" },
    status: "ESTÁVEL",
    link: "https://github.com/Derciel/estoque-ti-nicopel"
  },
  {
    title: "CHAPA-SAIDA-NICOPEL",
    desc: "Controle industrial para fluxos de saída e expedição automatizada.",
    tech: ["Python", "Automação", "Indústria 4.0"],
    coreData: { versão: "3.2.0", carga: "82%", latência: "35ms" },
    status: "ATIVO",
    link: "https://github.com/Derciel/chapa-saida-nicopel"
  },
  {
    title: "GLPI-CHAMADOS",
    desc: "Integração e dashboard para sistema de tickets GLPI com métricas em tempo real.",
    tech: ["PHP", "API", "Grafana"],
    coreData: { versão: "2.0.1", carga: "28%", latência: "15ms" },
    status: "ONLINE",
    link: "https://github.com/Derciel/glpi-chamados"
  },
  {
    title: "RASTREIOTHEBEST",
    desc: "Automação de rastreio de encomendas com notificações via webhook.",
    tech: ["Python", "API", "Webhook"],
    coreData: { versão: "1.3.0", carga: "12%", latência: "12ms" },
    status: "ESTÁVEL",
    link: "https://github.com/Derciel/rastreiothebest"
  },
  {
    title: "DASHBOARD-SDR-BDR",
    desc: "Painel de performance para times de vendas e prospecção comercial.",
    tech: ["PowerBI", "SQL", "Excel"],
    coreData: { versão: "1.0.4", carga: "20%", latência: "N/A" },
    status: "ATIVO",
    link: "https://github.com/Derciel/dashboard-sdr-bdr-nicopel"
  },
  {
    title: "IOT-MQTT-ESP32",
    desc: "Firmware para sensores industriais utilizando protocolo MQTT.",
    tech: ["C++", "ESP32", "MQTT"],
    coreData: { versão: "0.9.5", carga: "10%", latência: "5ms" },
    status: "MODULAR",
    link: "https://github.com/Derciel/IOTMQTTP"
  },
  {
    title: "REUNIAO-SALA-2.0",
    desc: "Sistema de agendamento e gestão de salas de reunião corporativas.",
    tech: ["HTML", "JS", "Firebase"],
    coreData: { versão: "2.0.0", carga: "18%", latência: "20ms" },
    status: "ESTÁVEL",
    link: "https://github.com/Derciel/reuniao-sala-2.0"
  },
  {
    title: "CHATBOT-NICOPEL",
    desc: "Assistente virtual para suporte interno e triagem de chamados.",
    tech: ["Python", "AI", "NLP"],
    coreData: { versão: "1.1.0", carga: "55%", latência: "85ms" },
    status: "BETA",
    link: "https://github.com/Derciel/chatbot-nicopel"
  }
];

const ProjectTerminal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="projects-section">
      <div className="section-header">
        <div className="header-info">
          <TerminalIcon size={20} className="header-icon" />
          <h2 className="mono">TELEMETRIA_DE_REPOSITÓRIOS_CORE</h2>
        </div>
        <div className="search-box cyber-border">
          <Search size={16} />
          <input 
            type="text" 
            placeholder="FILTRAR_POR_NOME_OU_TECH..." 
            className="mono"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project, i) => (
          <motion.div 
            key={i}
            className="project-card cyber-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.02, 
              translateY: -5,
              borderColor: "var(--accent-cyan)"
            }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="card-scanline"></div>
            
            <div className="card-top">
              <div className="project-status">
                <motion.span 
                  className={`status-dot ${project.status.toLowerCase()}`}
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                ></motion.span>
                <span className="mono">{project.status}</span>
              </div>
              <div className="tech-icon-group">
                <Cpu size={14} className="dim" />
                <Layers size={14} className="dim" />
              </div>
            </div>
            
            <div className="title-container">
              <h3 className="project-title mono">{project.title}</h3>
              <div className="title-underline"></div>
            </div>

            <p className="project-desc">{project.desc}</p>
            
            <div className="core-data-grid">
              {Object.entries(project.coreData).map(([key, value], idx) => (
                <div className="data-item" key={key}>
                  <span className="label mono">{key.toUpperCase()}:</span>
                  <span className="value mono">{value}</span>
                </div>
              ))}
            </div>
            
            <div className="project-tech">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-tag mono">
                  {t}
                </span>
              ))}
            </div>
            
            <div className="card-footer">
              <motion.a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="action-btn mono"
                whileHover={{ x: 5 }}
              >
                <Github size={16} />
                ACESSAR_CÓDIGO
              </motion.a>
              <ExternalLink size={14} className="dim" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectTerminal;
