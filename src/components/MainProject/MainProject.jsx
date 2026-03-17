import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Truck, 
  Map as MapIcon, 
  ShieldCheck, 
  Package, 
  ClipboardList,
  ChevronRight
} from 'lucide-react';
import './MainProject.css';

const modules = [
  {
    icon: <BarChart3 size={20} />,
    title: "1. Dashboards & Analytics",
    desc: "Visualização em tempo real de métricas de frete e economia gerada."
  },
  {
    icon: <ClipboardList size={20} />,
    title: "2. Cotações de Frete",
    desc: "Integração com Frenet, IPI automático e orçamentos em PDF."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "3. Histórico & Gestão",
    desc: "Paginação de alta performance e filtros por cliente/pedido."
  },
  {
    icon: <Package size={20} />,
    title: "4. Módulo de Coletas",
    desc: "Agrupamento por transportadora e cálculo técnico de volumes."
  },
  {
    icon: <MapIcon size={20} />,
    title: "5. Rastreio em Tempo Real",
    desc: "Mapa SVG interativo colorido dinamicamente por status da carga."
  },
  {
    icon: <Truck size={20} />,
    title: "6. Usuários & Permissões",
    desc: "Gestão granular de acessos e auditoria de segurança administrativa."
  }
];

const MainProject = () => {
  return (
    <section id="projetos" className="main-project-section">
      <div className="section-decoration-top">
        <div className="line"></div>
        <span className="mono">01 // PROJETO_PRIORITÁRIO</span>
        <div className="line"></div>
      </div>

      <div className="main-project-container">
        <div className="project-highlight-grid">
          {/* Info Side */}
          <motion.div 
            className="project-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="info-header">
              <span className="badge">ECOSSISTEMA_LOGÍSTICO</span>
              <h2 className="project-title">NP <span className="accent">CARGO</span></h2>
              <p className="project-summary">
                O <strong>NP Cargo</strong> é um ecossistema completo desenvolvido para a Nicopel, 
                focado na gestão inteligente de cotações, rastreamento e auditoria financeira.
              </p>
            </div>

            <div className="modules-list">
              {modules.map((mod, i) => (
                <motion.div 
                  key={i}
                  className="module-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <div className="mod-icon">{mod.icon}</div>
                  <div className="mod-text">
                    <h4>{mod.title}</h4>
                    <p>{mod.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="tech-stack-footer">
              <span className="stack-label mono">TECNOLOGIAS_UTILIZADAS:</span>
              <div className="stack-icons">
                <span className="tag">NESTJS</span>
                <span className="tag">POSTGRESQL</span>
                <span className="tag">ASTRO</span>
                <span className="tag">VUE.JS 3</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div 
            className="project-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mockup-container cyber-border">
              <div className="mockup-header">
                <div className="controls">
                  <span></span><span></span><span></span>
                </div>
                <div className="url-bar">https://cargo.nicopel.com.br/dashboard</div>
              </div>
              <video 
                src={`${import.meta.env.BASE_URL}video_apresentacao_npcargo.mp4`} 
                className="mockup-img" 
                autoPlay 
                loop 
                muted 
                playsInline
              />
              <div className="overlay-elements">
                <div className="floating-stat stat-1">
                  <span className="label">LATÊNCIA_API</span>
                  <span className="value">12ms</span>
                </div>
                <div className="floating-stat stat-2">
                  <span className="label">REQUISIÇÕES_SEC</span>
                  <span className="value">1.4k</span>
                </div>
              </div>
            </div>

            <div className="visual-controls">
              <div className="system-status">
                <div className="status-bit pulse"></div>
                <span className="mono">SISTEMA_ONLINE_SSR</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MainProject;
