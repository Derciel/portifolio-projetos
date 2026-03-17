# Implementação: HELL_PROTOCOL_DEFENDER (Mini-Game)

Adição de um mini-game estilo "shmup" (navinha) integrado ao componente `SkillPCB` para aumentar o engajamento e reforçar a temática industrial/hacker.

## Mudanças Propostas

### Skill Game Component
#### [NEW] [SkillGame.jsx](file:///e:/projetos%20em%20andamento/portifolio-projetos/src/components/SkillGame/SkillGame.jsx)
- Implementação de um jogo em Canvas 2D.
- Controles: Mouse para mover/atirar ou Teclado (WASD + Space).
- Estética: Linhas neon, scanlines, e "bugs" (inimigos) que tentam corromper os nós de skill.

#### [NEW] [SkillGame.css](file:///e:/projetos%20em%20andamento/portifolio-projetos/src/components/SkillGame/SkillGame.css)
- Estilização do container do jogo, score e mensagens de Game Over.

### Integração
#### [MODIFY] [SkillPCB.jsx](file:///e:/projetos%20em%20andamento/portifolio-projetos/src/components/SkillPCB/SkillPCB.jsx)
- Adição de um botão "INICIAR_OVERRIDE_MANUAL".
- Lógica de transição entre o diagrama estático e o jogo.

## Plano de Verificação
- Testar jogabilidade (movimentação, colisão, pontuação).
- Verificar se o jogo é responsivo dentro do container de skills.
- Garantir que a performance do canvas não afete o restante do portfólio.
