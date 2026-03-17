import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  Star, 
  MessageSquare, 
  Code2, 
  Activity,
  ChevronUp
} from 'lucide-react';
import './GitHubStats.css';

const languageStats = [
  { name: "Python", percent: 97.41, color: "var(--accent-cyan)", img: "https://www.svgrepo.com/show/374016/python.svg" },
  { name: "C++", percent: 0.86, color: "#ff006e", img: "https://i.ibb.co/7Jtcz8nd/c-plus-plus.jpg" },
  { name: "Astro", percent: 0.63, color: "#ff5d01", img: "https://www.svgrepo.com/show/373446/astro.svg" },
  { name: "HTML", percent: 0.46, color: "#e34c26", img: null },
  { name: "JavaScript", percent: 0.45, color: "#f7df1e", img: null },
];

const GitHubStats = () => {
  return (
    <section className="github-stats-section">
      <div className="stats-header-main">
        <Activity size={24} className="pulse-cyan" />
        <h2 className="mono">GITHUB_NO_RAIO_X // ESTATÍSTICAS_REAIS</h2>
      </div>

      <div className="stats-container-grid">
        {/* Card de Commits/Rank */}
        <motion.div 
          className="rank-card cyber-border"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-glitch-bg"></div>
          <div className="rank-content">
            <div className="user-profile-mini">
              <span className="user-name">DERCIEL_ALVES_STATS</span>
              <div className="rank-badge green">ATIVIDADE_NÍVEL: ALTA</div>
            </div>

            <div className="metrics-grid">
              <div className="metric-item">
                <Star size={16} />
                <span className="label">ESTRELAS_GANHAS:</span>
                <span className="value">5</span>
              </div>
              <div className="metric-item">
                <GitBranch size={16} />
                <span className="label">COMMITS_ÚLTIMO_ANO:</span>
                <span className="value">410</span>
              </div>
              <div className="metric-item">
                <MessageSquare size={16} />
                <span className="label">PULL_REQUESTS:</span>
                <span className="value">6</span>
              </div>
            </div>

            <div className="rank-circle-container">
              <div className="rank-circle">
                <span className="rank-letter">C+</span>
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <motion.path 
                    className="circle" 
                    strokeDasharray="75, 100" 
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                  />
                </svg>
              </div>
              <span className="mono rank-label">GLOBAL_RANKING</span>
            </div>
          </div>
        </motion.div>

        {/* Card de Linguagens */}
        <motion.div 
          className="languages-card cyber-border"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="card-header">
            <Code2 size={20} />
            <span>LINGUAGENS_MAIS_USADAS</span>
          </div>

          <div className="languages-list">
            {languageStats.map((lang, i) => (
              <motion.div 
                key={i}
                className="lang-item"
                whileHover={{ x: 10 }}
              >
                <div className="lang-info">
                  <span className="lang-name mono">{lang.name}</span>
                  <span className="lang-percent mono">{lang.percent}%</span>
                </div>
                <div className="progress-bg">
                  <motion.div 
                    className="progress-fill" 
                    style={{ backgroundColor: lang.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  />
                </div>
                {lang.img && (
                   <motion.div 
                    className="lang-visual-popup"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1, y: -20 }}
                   >
                     <img src={lang.img} alt={lang.name} />
                   </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="system-footer">
            <span className="mono">DETECTANDO_CORE_LOGIC... PYTHON_DOMINANTE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
