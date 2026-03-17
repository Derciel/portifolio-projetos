import React, { useRef, useEffect, useState } from 'react';
import './SkillGame.css';

const SkillGame = ({ onClose }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Ajustar tamanho
    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Estado do Jogo
    const ship = {
      x: canvas.width / 2,
      y: canvas.height - 50,
      w: 30,
      h: 30,
      color: '#00f3ff',
      speed: 5
    };

    const bullets = [];
    const enemies = [];
    const particles = [];
    let enemyTimer = 0;
    let frame = 0;

    const keys = {};
    window.addEventListener('keydown', e => keys[e.code] = true);
    window.addEventListener('keyup', e => keys[e.code] = false);

    const spawnEnemy = () => {
      enemies.push({
        x: Math.random() * (canvas.width - 60),
        y: -40,
        w: 60,
        h: 25,
        speed: 1.5 + Math.random() * 2,
        hp: 2,
        label: ['MALWARE', 'OVERLOAD', 'CRITICAL', 'FATAL'][Math.floor(Math.random() * 4)]
      });
    };

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background - Grid leve
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
      }

      if (!gameOver) {
        // Movimento Nave
        if (keys['ArrowLeft'] || keys['KeyA']) ship.x = Math.max(ship.w/2, ship.x - ship.speed);
        if (keys['ArrowRight'] || keys['KeyD']) ship.x = Math.min(canvas.width - ship.w/2, ship.x + ship.speed);
        
        // Tiro
        if (frame % 10 === 0 && (keys['Space'] || keys['KeyW'])) {
          bullets.push({ x: ship.x, y: ship.y, speed: 8 });
        }

        // Desenhar Nave Estilizada
        ctx.save();
        ctx.translate(ship.x, ship.y);
        ctx.shadowBlur = 15;
        ctx.shadowColor = ship.color;
        
        // Corpo principal
        ctx.fillStyle = ship.color;
        ctx.beginPath();
        ctx.moveTo(0, -20);    // Bico
        ctx.lineTo(-12, 10);   // Asa esquerda
        ctx.lineTo(-5, 5);     // Interior
        ctx.lineTo(5, 5);      // Interior
        ctx.lineTo(12, 10);    // Asa direita
        ctx.closePath();
        ctx.fill();

        // Cabine
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(0, -5, 4, 0, Math.PI * 2);
        ctx.fill();

        // Propulsores
        if (frame % 4 === 0) {
          ctx.fillStyle = '#ffaa00';
          ctx.fillRect(-8, 10, 4, 8);
          ctx.fillRect(4, 10, 4, 8);
        }

        ctx.restore();
        ctx.shadowBlur = 0;

        // Bullets
        ctx.fillStyle = '#fff';
        bullets.forEach((b, i) => {
          b.y -= b.speed;
          ctx.fillRect(b.x - 1, b.y, 2, 10);
          if (b.y < 0) bullets.splice(i, 1);
        });

        // Inimigos
        enemyTimer++;
        if (enemyTimer > 60) {
          spawnEnemy();
          enemyTimer = 0;
        }

        enemies.forEach((e, i) => {
          e.y += e.speed;
          
          // Draw Enemy (Rect com label)
          ctx.strokeStyle = '#ff0055';
          ctx.lineWidth = 2;
          ctx.strokeRect(e.x, e.y, e.w, e.h);
          ctx.fillStyle = '#ff0055';
          ctx.font = '8px "JetBrains Mono"';
          ctx.fillText(e.label, e.x + 5, e.y + 13);

          if (e.y > canvas.height) {
            setGameOver(true);
          }

          // Colisão Bala-Inimigo
          bullets.forEach((b, bi) => {
            if (b.x > e.x && b.x < e.x + e.w && b.y > e.y && b.y < e.y + e.h) {
              bullets.splice(bi, 1);
              e.hp--;
              if (e.hp <= 0) {
                enemies.splice(i, 1);
                setScore(prev => prev + 100);
                // Explosão
                for(let p=0; p<10; p++) particles.push({
                   x: e.x + e.w/2, y: e.y + e.h/2, 
                   vx: (Math.random()-0.5)*10, vy: (Math.random()-0.5)*10,
                   life: 1
                });
              }
            }
          });
        });

        // Partículas
        particles.forEach((p, i) => {
          p.x += p.vx; p.y += p.vy; p.life -= 0.05;
          ctx.fillStyle = `rgba(255, 0, 85, ${p.life})`;
          ctx.fillRect(p.x, p.y, 2, 2);
          if (p.life <= 0) particles.splice(i, 1);
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [gameOver]);

  return (
    <div className="skill-game-overlay">
      <div className="game-hud">
        <span className="mono">PONTUAÇÃO: {score.toString().padStart(6, '0')}</span>
        <button onClick={onClose} className="close-btn mono">SAIR_DA_SIMULAÇÃO</button>
      </div>
      
      <canvas ref={canvasRef} />

      {gameOver && (
        <div className="game-over-screen">
          <h2 className="mono">SISTEMA_CORROMPIDO</h2>
          <p className="mono">PONTUAÇÃO_FINAL: {score}</p>
          <button onClick={onClose} className="retry-btn mono">RECONECTAR_KERNEL</button>
        </div>
      )}

      <div className="game-controls-hint mono">
        A/D: MOVER // ESPAÇO: DISPARAR_PULSO
      </div>
    </div>
  );
};

export default SkillGame;
