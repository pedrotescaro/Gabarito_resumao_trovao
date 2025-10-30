import type { Discipline, Topic, Flashcard, ExamQuestion, DisciplineName } from './types';
import { MathIcon, PhysicsIcon, ChemIcon } from './components/Icons';

const svgToDataUri = (svgString: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;

// ==============================================================================
// MATEMÁTICA SVGs
// ==============================================================================

const mat1FuncDiagramSvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #333;}
    .title{font-weight: bold; font-size: 18px; fill: #1E88E5;} /* Cor primária para títulos */
    .set{fill: #E3F2FD; stroke: #1E88E5; stroke-width: 2; opacity: 0.8;} /* Cor primária para conjuntos */
    .arrow{stroke: #4CAF50; stroke-width: 2; marker-end:url(#head);} /* Cor de destaque para setas */
    .dot{fill: #333; font-size: 16px;}
  </style>
  <defs>
    <marker id="head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#4CAF50"/>
    </marker>
  </defs>
  <ellipse cx="80" cy="110" rx="50" ry="70" class="set"/>
  <text x="80" y="40" text-anchor="middle" class="title txt">A (Domínio)</text>
  <text x="80" y="80" text-anchor="middle" class="txt dot">▪ 1</text>
  <text x="80" y="110" text-anchor="middle" class="txt dot">▪ 2</text>
  <text x="80" y="140" text-anchor="middle" class="txt dot">▪ 3</text>
  <ellipse cx="270" cy="110" rx="50" ry="70" class="set"/>
  <text x="270" y="40" text-anchor="middle" class="title txt">B (Contradomínio)</text>
  <text x="270" y="80" text-anchor="middle" class="txt dot">▪ f(1)</text>
  <text x="270" y="110" text-anchor="middle" class="txt dot">▪ f(2)</text>
  <text x="270" y="140" text-anchor="middle" class="txt dot">▪ f(3)</text>
  <path d="M 130 80 L 220 80" class="arrow"/>
  <path d="M 130 110 L 220 110" class="arrow"/>
  <path d="M 130 140 L 220 140" class="arrow"/>
</svg>`;

const mat1ParabolaSvg = `<svg viewBox="0 0 350 180" xmlns="http://www.w3.org/2000/svg">
  <style>
    .axis{stroke:#888;stroke-width:1.5px; marker-end:url(#axis-head);} 
    .grid{stroke:#eee;stroke-width:1px;}
    .parabola{fill:none;stroke:#FF9800;stroke-width:3px;} /* Laranja para destaque */
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #444;} 
    .dot{fill:#E91E63; stroke:#fff; stroke-width:1.5px;} /* Rosa vibrante para pontos de interesse */
  </style>
  <defs>
    <marker id="axis-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#888"/>
    </marker>
  </defs>
  <g transform="translate(20,20) scale(1,-1)">
    <g transform="scale(1,-1)">
      <path class="axis" d="M 0 0 L 310 0"/>
      <path class="axis" d="M 0 0 L 0 140"/>
      <text x="305" y="-10" class="txt">x</text>
      <text x="-15" y="135" class="txt">y</text>
      <path class="parabola" d="M 0 120 Q 155 -100 310 120"/>
      <circle cx="60" cy="0" r="4" class="dot"/>
      <text x="60" y="-15" text-anchor="middle" class="txt">Raízes</text>
      <circle cx="250" cy="0" r="4" class="dot"/>
      <circle cx="155" cy="-25" r="4" class="dot"/>
      <text x="155" y="-40" text-anchor="middle" class="txt">Vértice</text>
    </g>
  </g>
</svg>`;

const mat2PythagorasSvg = `<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg">
  <style>
    .triam{fill: #F0F4C3; stroke:#333; stroke-width:2;} /* Fundo suave para o triângulo */
    .quadrato{fill: #4CAF50; stroke:#333; stroke-width:1;} /* Quadrado verde para ângulo reto */
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #222;} 
    .formula tspan{font-family: 'Georgia', serif; font-size: 20px; font-weight:bold; fill: #E91E63;} /* Cor de destaque para fórmula */
  </style>
  <polygon points="20,130 280,130 280,20" class="triam"/>
  <rect x="260" y="110" width="20" height="20" class="quadrato"/>
  <text x="150" y="145" text-anchor="middle" class="txt">c (Cateto)</text>
  <text x="295" y="80" text-anchor="start" class="txt">b (Cateto)</text>
  <text x="150" y="60" text-anchor="middle" class="txt" transform="rotate(-45 150 70)">a (Hipotenusa)</text>
  <text x="35" y="50" text-anchor="start" class="txt formula">
    <tspan x="35" dy="1.2em">a²</tspan>
    <tspan dy="0.1em"> = </tspan>
    <tspan dy="-0.1em"> b²</tspan>
    <tspan dy="0.1em"> + </tspan>
    <tspan dy="-0.1em"> c²</tspan>
  </text>
</svg>`;

const mat2CylinderSvg = `<svg viewBox="0 0 350 180" xmlns="http://www.w3.org/2000/svg">
  <style>
    .base{fill:#BBDEFB; stroke:#1E88E5; stroke-width:2;} /* Azul claro para base */
    .corpon{stroke:#1E88E5; stroke-width:2; fill: #E3F2FD; opacity: 0.8;} /* Azul mais escuro para corpo */
    .linha{fill:none;stroke:#777;stroke-width:1;stroke-dasharray:3,3;} 
    .txt{font-family: 'Arial', sans-serif; fill:#222; font-size:16px;} 
    .formula {font-family: 'Georgia', serif; font-weight:bold; font-size:20px; fill: #E91E63;}
  </style>
  <ellipse cx="175" cy="130" rx="100" ry="30" class="base"/>
  <path class="corpon" d="M75 30 L75 130 A 100 30 0 0 0 275 130 L275 30 A 100 30 0 0 1 175 30"/>
  <ellipse cx="175" cy="30" rx="100" ry="30" class="base"/>
  <path d="M175 30 L175 130" class="linha"/>
  <text x="180" y="85" class="txt">h (altura)</text>
  <text x="120" y="20" class="txt">r (raio)</text>
  <text x="38" y="85" class="txt formula">V = πr²h</text>
</svg>`;

// ==============================================================================
// FÍSICA SVGs
// ==============================================================================

const fis1MruvGraphSvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .axis{stroke:#888;stroke-width:1.5px; marker-end:url(#axis-head);} 
    .linha{fill:none;stroke:#4CAF50;stroke-width:3px;} /* Verde para a linha do gráfico */
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #444;}
    .title{font-weight: bold; font-size: 18px; fill: #333;}
  </style>
  <defs>
    <marker id="axis-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#888"/>
    </marker>
  </defs>
  <!-- Usando coordenadas normais (0,0 no canto superior esquerdo) e invertendo o eixo Y manualmente -->
  <g transform="translate(30, 180)">
    <!-- Eixo X (Tempo) -->
    <path class="axis" d="M 0 0 L 310 0" marker-end="url(#axis-head)"/>
    <text x="305" y="15" class="txt">t (s)</text>
    
    <!-- Eixo Y (Velocidade) -->
    <path class="axis" d="M 0 0 L 0 -160" marker-end="url(#axis-head)"/>
    <text x="-20" y="-150" class="txt">V (m/s)</text>
    
    <!-- Linha do Gráfico (V = V0 + at) - Começa em V0=20, vai até V=150 (em coordenadas SVG) -->
    <path class="linha" d="M 0 -20 L 310 -150"/>
    
    <!-- Rótulos -->
    <text x="5" y="-5" class="txt" text-anchor="start">V₀</text>
    <text x="300" y="-155" class="txt" text-anchor="end">V</text>
    <text x="155" y="-170" text-anchor="middle" class="title">Gráfico V x t (MRUV)</text>
  </g>
</svg>`;

const fis2BlockSvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .block{fill:#CFD8DC; stroke:#546E7A; stroke-width:2px;} /* Bloco cinza claro */
    .force-arrow{stroke-width:3px; marker-end:url(#head);} 
    .ground{fill:#BDBDBD; stroke:#757575; stroke-width:2px;} /* Chão cinza escuro */
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #222;}
  </style>
  <defs>
    <marker id="head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <rect x="0" y="150" width="350" height="50" class="ground"/>
  <rect x="50" y="100" width="100" height="50" class="block"/>
  <!-- Força aplicada (vermelho) -->
  <line x1="150" y1="125" x2="250" y2="125" class="force-arrow" style="stroke:#E53935;"/>
  <text x="170" y="115" class="txt" style="fill:#E53935;">F (aplicada)</text>
  <!-- Força de atrito (azul) -->
  <line x1="100" y1="125" x2="20" y2="125" class="force-arrow" style="stroke:#1E88E5;"/>
  <text x="25" y="140" class="txt" style="fill:#1E88E5;">F_at (atrito)</text>
  <text x="95" y="128" text-anchor="middle" class="txt">m</text>
</svg>`;

const fis3CircuitSvg = `<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg">
  <style>
    .resistor{stroke:#333;stroke-width:2;fill:#FFEB3B; stroke-linejoin:round;} /* Amarelo para resistor */
    .source{stroke:#333;stroke-width:2px;fill:none;} 
    .wire{stroke:#333;stroke-width:2px;fill:none;}
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #222;} 
    .txt_color{fill:#E53935; font-weight: bold; font-size: 16px;} /* Vermelho para corrente */
  </style>
  <defs>
    <marker id="i_arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#E53935"/>
    </marker>
  </defs>
  <!-- Fonte de Tensão (Bateria) -->
  <path d="M20 75 L 60 75" class="wire"/>
  <path d="M60 65 L 60 85" class="source"/> <!-- Linha curta (negativo) -->
  <path d="M68 55 L 68 95" class="source" style="stroke-width: 4;"/> <!-- Linha longa (positivo) -->
  <path d="M68 75 L 100 75" class="wire"/>
  <!-- Resistor -->
  <rect x="100" y="60" width="100" height="30" class="resistor"/>
  <!-- Fios de conexão -->
  <path d="M200 75 L 330 75" class="wire"/>
  <path d="M330 75 L 330 0 L 20 0 L 20 75" class="wire"/>
  <!-- Rótulos -->
  <text x="150" y="55" text-anchor="middle" class="txt">R</text>
  <text x="40" y="60" text-anchor="middle" class="txt">U</text>
  <text x="265" y="95" text-anchor="middle" class="txt txt_color">i</text>
  <!-- Seta da Corrente -->
  <path d="M250 75 L 280 75" style="stroke:#E53935; stroke-width:2;" marker-end="url(#i_arrow)"/>
</svg>`;

const fis4WaveSvg = `<svg viewBox="0 0 350 180" xmlns="http://www.w3.org/2000/svg">
  <style>
    .axis{stroke:#888;stroke-width:1px;}
    .wave{fill:none;stroke:#FF9800;stroke-width:3px;} /* Laranja para a onda */
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #444;}
    .label-line{stroke:#1E88E5; stroke-width:1.5px; stroke-dasharray: 4 2;} /* Azul tracejado para rótulos */
    .amplitude-line{stroke:#E91E63; stroke-width:1.5px;} /* Rosa para amplitude */
  </style>
  
  <!-- Linha de Equilíbrio -->
  <line x1="20" y1="90" x2="330" y2="90" class="axis"/>
  <text x="335" y="95" class="txt">Propagação</text>
  
  <!-- Onda Transversal -->
  <path class="wave" d="M 20 90 Q 60 40, 100 90 T 180 90 T 260 90 T 300 90" />
  
  <!-- Rótulo de Comprimento de Onda (Lambda) -->
  <line x1="60" y1="30" x2="180" y2="30" class="label-line"/>
  <line x1="60" y1="30" x2="60" y2="40" class="label-line"/>
  <line x1="180" y1="30" x2="180" y2="40" class="label-line"/>
  <text x="120" y="25" text-anchor="middle" class="txt">λ (Comprimento de Onda)</text>
  
  <!-- Rótulo de Amplitude (A) -->
  <line x1="100" y1="90" x2="100" y2="40" class="amplitude-line"/>
  <text x="105" y="65" class="txt">A</text>
  
  <!-- Rótulo Crísta e Vale -->
  <text x="60" y="35" text-anchor="middle" class="txt" style="fill:#FF9800;">Crista</text>
  <text x="140" y="155" text-anchor="middle" class="txt" style="fill:#FF9800;">Vale</text>
</svg>`;

const fis5OpticsSvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .medium1{fill:#E3F2FD;} /* Azul claro para o meio 1 (Ar) */
    .medium2{fill:#BBDEFB;} /* Azul um pouco mais escuro para o meio 2 (Água) */
    .interface{stroke:#1E88E5; stroke-width:2;} /* Linha de interface */
    .normal{stroke:#E91E63; stroke-width:1.5px; stroke-dasharray: 4 2;} /* Normal (Rosa) */
    .ray{stroke:#4CAF50; stroke-width:2; marker-end:url(#ray-head);} /* Raio de luz (Verde) */
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #444;}
  </style>
  <defs>
    <marker id="ray-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#4CAF50"/>
    </marker>
  </defs>
  
  <!-- Meio 1 (Ar) -->
  <rect x="0" y="0" width="350" height="100" class="medium1"/>
  <text x="50" y="50" class="txt">Meio 1 (n₁)</text>
  
  <!-- Meio 2 (Água) -->
  <rect x="0" y="100" width="350" height="100" class="medium2"/>
  <text x="50" y="150" class="txt">Meio 2 (n₂)</text>
  
  <!-- Interface -->
  <line x1="0" y1="100" x2="350" y2="100" class="interface"/>
  
  <!-- Normal -->
  <line x1="175" y1="0" x2="175" y2="200" class="normal"/>
  <text x="180" y="20" class="txt">Normal</text>
  
  <!-- Raio Incidente (θ₁) -->
  <line x1="100" y1="50" x2="175" y2="100" class="ray"/>
  <text x="130" y="80" class="txt">θ₁</text>
  
  <!-- Raio Refratado (θ₂) - Desvia para a Normal (n₂ > n₁) -->
  <line x1="175" y1="100" x2="220" y2="170" class="ray"/>
  <text x="190" y="140" class="txt">θ₂</text>
  
  <!-- Título -->
  <text x="175" y="190" text-anchor="middle" class="txt" style="font-weight: bold;">Refração (Lei de Snell)</text>
</svg>`;

// ==============================================================================
// QUÍMICA SVGs
// ==============================================================================

const qui1ReactionSvg = `<svg viewBox="0 0 350 180" xmlns="http://www.w3.org/2000/svg">
  <style>
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #222;}
    .formula tspan{font-family: 'Georgia', serif; font-weight:bold; font-size:20px; fill: #333;}
    .atom-h{fill:#E0E0E0; stroke:#9E9E9E; stroke-width:1;} /* Cinza claro para Hidrogênio */
    .atom-o{fill:#F44336; stroke:#D32F2F; stroke-width:1;} /* Vermelho para Oxigênio */
    .bond{stroke:#555; stroke-width:2; stroke-linecap:round;}
    .reaction-arrow{stroke:#4CAF50;stroke-width:3px;marker-end:url(#arrowhead);fill:none;} /* Seta verde de reação */
    .label-text{font-family: 'Arial', sans-serif; font-size:14px; fill:#555;}
    .ratio-text{font-family: 'Georgia', serif; font-weight:bold; font-size:18px; fill:#1E88E5;} /* Azul para proporção molar */
  </style>
  <defs>
    <marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#4CAF50"/>
    </marker>
  </defs>

  <!-- Reagentes Header -->
  <text x="75" y="30" class="label-text" text-anchor="middle">Reagentes</text>

  <!-- Reactants: 2 H2 -->
  <g transform="translate(0, 40)">
    <!-- First H2 -->
    <circle cx="35" cy="20" r="8" class="atom-h"/>
    <circle cx="55" cy="20" r="8" class="atom-h"/>
    <line x1="35" y1="20" x2="55" y2="20" class="bond"/>
    <text x="45" y="45" class="label-text" text-anchor="middle">H₂</text>

    <!-- Second H2 -->
    <circle cx="85" cy="20" r="8" class="atom-h"/>
    <circle cx="105" cy="20" r="8" class="atom-h"/>
    <line x1="85" y1="20" x2="105" y2="20" class="bond"/>
    <text x="95" y="45" class="label-text" text-anchor="middle">H₂</text>
    
    <!-- Sinal de mais -->
    <text x="125" y="25" class="ratio-text" style="fill: #555;">+</text>
  </g>

  <!-- Reactant: 1 O2 -->
  <g transform="translate(0, 40)">
    <circle cx="165" cy="20" r="10" class="atom-o"/>
    <circle cx="185" cy="20" r="10" class="atom-o"/>
    <line x1="165" y1="18" x2="185" y2="18" class="bond"/> <!-- Dupla ligação -->
    <line x1="165" y1="22" x2="185" y2="22" class="bond"/>
    <text x="175" y="45" class="label-text" text-anchor="middle">O₂</text>
  </g>

  <!-- Reaction Arrow -->
  <path d="M205 60 L245 60" class="reaction-arrow"/>

  <!-- Produtos Header -->
  <text x="290" y="30" class="label-text" text-anchor="middle">Produtos</text>

  <!-- Products: 2 H2O -->
  <g transform="translate(0, 40)">
    <!-- First H2O -->
    <circle cx="270" cy="20" r="10" class="atom-o"/>
    <circle cx="260" cy="30" r="8" class="atom-h"/>
    <circle cx="280" cy="30" r="8" class="atom-h"/>
    <line x1="270" y1="20" x2="260" y2="30" class="bond"/>
    <line x1="270" y1="20" x2="280" y2="30" class="bond"/>
    <text x="270" y="45" class="label-text" text-anchor="middle">H₂O</text>

    <!-- Sinal de mais -->
    <text x="300" y="25" class="ratio-text" style="fill: #555;">+</text>

    <!-- Second H2O -->
    <circle cx="330" cy="20" r="10" class="atom-o"/>
    <circle cx="320" cy="30" r="8" class="atom-h"/>
    <circle cx="340" cy="30" r="8" class="atom-h"/>
    <line x1="330" y1="20" x2="320" y2="30" class="bond"/>
    <line x1="330" y1="20" x2="340" y2="30" class="bond"/>
    <text x="330" y="45" class="label-text" text-anchor="middle">H₂O</text>
  </g>

  <!-- Stoichiometric Ratio -->
  <text x="175" y="145" text-anchor="middle" class="ratio-text">2 H₂  +  1 O₂  →  2 H₂O</text>
  <text x="175" y="165" text-anchor="middle" class="label-text">Proporção Molar (Estequiometria)</text>
</svg>`;

const qui2DilutionSvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .vessel{fill:#E0F7FA; stroke:#00BCD4; stroke-width:2;} /* Ciano claro para recipiente */
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #222;} 
    .formula{font-family: 'Georgia', serif; font-weight:bold; font-size:20px; fill: #FF9800;} /* Laranja para fórmula */
    .label-box{fill:#CFD8DC; stroke:#90A4AE; stroke-width:1;}
  </style>
  <!-- Recipiente 1 (Concentrada) -->
  <path class="vessel" d="M75 20 L 75 150 A 100 40 0 0 0 275 150 L 275 20 Z"/>
  <path class="vessel" d="M75 20 L 275 20 "/>
  <text x="175" y="180" text-anchor="middle" class="txt">Solução Inicial (Concentrada)</text>
  
  <!-- Fundo da Fórmula -->
  <rect x="100" y="70" width="150" height="40" rx="5" ry="5" class="label-box"/>
  
  <!-- Fórmula -->
  <text x="175" y="95" text-anchor="middle" class="txt formula">C₁V₁ = C₂V₂</text>
  
  <!-- Rótulo de Diluição -->
  <text x="175" y="45" text-anchor="middle" class="txt" style="fill: #00BCD4; font-weight: bold;">Diluição</text>
</svg>`;

const qui3TermoSvg = `<svg viewBox="0 0 350 220" xmlns="http://www.w3.org/2000/svg"> <!-- Increased viewBox height -->
  <style>
    .axis{stroke:#888;stroke-width:1.5px; marker-end:url(#axis-head);}
    .path{fill:none;stroke:#E91E63;stroke-width:3px;} /* Rosa para caminho da reação */
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #444;} /* Increased font size */
    .delta-h{fill:#4CAF50; font-weight: bold; font-size: 18px;} /* Verde para Delta H */
    .activation{stroke:#FF9800; stroke-width:1.5px; stroke-dasharray:4,2;} /* Laranja tracejado para energia de ativação */
  </style>
  <defs>
    <marker id="axis-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#888"/>
    </marker>
    <marker id="delta-start" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 5 L 10 5" stroke="#4CAF50" stroke-width="2"/>
    </marker>
    <marker id="delta-end" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#4CAF50"/>
    </marker>
  </defs>
  <g transform="translate(30, 180)"> <!-- Adjusted translate Y for more space -->
    <!-- Eixos -->
    <path class="axis" d="M 0 0 L 310 0" marker-end="url(#axis-head)"/>
    <path class="axis" d="M 0 0 L 0 -160" marker-end="url(#axis-head)"/> <!-- Increased Y axis length -->
    <text x="-15" y="-155" class="txt" transform="scale(1,-1)">Energia</text> <!-- Adjusted Y -->
    <text x="305" y="15" class="txt" transform="scale(1,-1)">Caminho da Reação</text>
    
    <!-- Reagentes (nível mais baixo para Endotérmica) -->
    <path class="path" d="M 10 0 L 50 0"/>
    <text x="30" y="15" class="txt" transform="scale(1,-1)">Reagentes</text>
    
    <!-- Produtos (nível mais alto para Endotérmica) -->
    <path class="path" d="M 270 -100 L 310 -100"/> <!-- Adjusted Y to -100 -->
    <text x="290" y="115" class="txt" transform="scale(1,-1)">Produtos</text> <!-- Adjusted Y -->
    
    <!-- Caminho da Reação (Endotérmica) -->
    <path class="path" d="M 50 0 C 100 -140, 220 -140, 270 -100"/> <!-- Adjusted Ys for peak and products -->
    
    <!-- Energia de Ativação -->
    <line x1="50" y1="0" x2="160" y2="-120" class="activation"/> <!-- Adjusted Ys -->
    <line x1="160" y1="-120" x2="270" y2="-100" class="activation"/> <!-- Adjusted Ys -->
    <text x="160" y="135" text-anchor="middle" class="txt" style="fill: #FF9800;" transform="scale(1,-1)">Ea</text> <!-- Adjusted Y -->
    
    <!-- Delta H (seta para cima para Endotérmica) -->
    <line x1="200" y1="0" x2="200" y2="-100" style="stroke: #4CAF50; stroke-width: 2px; marker-start:url(#delta-start); marker-end:url(#delta-end);"/> <!-- Adjusted Y2 -->
    <text x="210" y="55" class="delta-h" transform="scale(1,-1)">ΔH > 0 (Endotérmica)</text> <!-- Adjusted Y -->
  </g>
</svg>`;

const qui4IsomeriaSvg = `<svg viewBox="0 0 350 180" xmlns="http://www.w3.org/2000/svg">
  <style>
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #222;}
    .atom-c{fill:#9E9E9E; stroke:#757575; stroke-width:1;} /* Carbono cinza */
    .atom-h{fill:#E0E0E0; stroke:#9E9E9E; stroke-width:1;} /* Hidrogênio branco */
    .bond{stroke:#555; stroke-width:2; stroke-linecap:round;}
    .double-bond{stroke:#555; stroke-width:4; stroke-linecap:butt;}
    .label-text{font-family: 'Arial', sans-serif; font-size:14px; fill:#555;}
    .title-text{font-family: 'Georgia', serif; font-weight:bold; font-size:18px; fill: #1E88E5;}
  </style>
  
  <text x="175" y="20" text-anchor="middle" class="title-text">Isômeros Cis e Trans do But-2-eno</text>

  <!-- Isômero Cis (H no mesmo lado) -->
  <g transform="translate(50, 40)">
    <text x="100" y="10" text-anchor="middle" class="txt">Cis</text>
    
    <!-- C1 (CH3) -->
    <circle cx="0" cy="60" r="10" class="atom-c"/>
    <text x="0" y="65" text-anchor="middle" class="label-text">CH₃</text>
    <line x1="10" y1="60" x2="40" y2="60" class="bond"/>

    <!-- C2 -->
    <circle cx="50" cy="60" r="10" class="atom-c"/>
    <line x1="50" y1="55" x2="100" y2="55" class="double-bond"/>
    <line x1="50" y1="65" x2="100" y2="65" class="double-bond"/>
    
    <!-- H no C2 (cima) -->
    <circle cx="50" cy="30" r="8" class="atom-h"/>
    <text x="50" y="25" text-anchor="middle" class="label-text">H</text>
    <line x1="50" y1="50" x2="50" y2="38" class="bond"/>

    <!-- C3 -->
    <circle cx="110" cy="60" r="10" class="atom-c"/>
    
    <!-- H no C3 (cima) -->
    <circle cx="110" cy="30" r="8" class="atom-h"/>
    <text x="110" y="25" text-anchor="middle" class="label-text">H</text>
    <line x1="110" y1="50" x2="110" y2="38" class="bond"/>

    <!-- C4 (CH3) -->
    <circle cx="160" cy="60" r="10" class="atom-c"/>
    <text x="160" y="65" text-anchor="middle" class="label-text">CH₃</text>
    <line x1="120" y1="60" x2="150" y2="60" class="bond"/>
  </g>

  <!-- Isômero Trans (H em lados opostos) -->
  <g transform="translate(50, 100)">
    <text x="100" y="10" text-anchor="middle" class="txt">Trans</text>
    
    <!-- C1 (CH3) -->
    <circle cx="0" cy="60" r="10" class="atom-c"/>
    <text x="0" y="65" text-anchor="middle" class="label-text">CH₃</text>
    <line x1="10" y1="60" x2="40" y2="60" class="bond"/>

    <!-- C2 -->
    <circle cx="50" cy="60" r="10" class="atom-c"/>
    <line x1="50" y1="55" x2="100" y2="55" class="double-bond"/>
    <line x1="50" y1="65" x2="100" y2="65" class="double-bond"/>
    
    <!-- H no C2 (cima) -->
    <circle cx="50" cy="30" r="8" class="atom-h"/>
    <text x="50" y="25" text-anchor="middle" class="label-text">H</text>
    <line x1="50" y1="50" x2="50" y2="38" class="bond"/>

    <!-- C3 -->
    <circle cx="110" cy="60" r="10" class="atom-c"/>
    
    <!-- H no C3 (baixo) -->
    <circle cx="110" cy="90" r="8" class="atom-h"/>
    <text x="110" y="105" text-anchor="middle" class="label-text">H</text>
    <line x1="110" y1="70" x2="110" y2="82" class="bond"/>

    <!-- C4 (CH3) -->
    <circle cx="160" cy="60" r="10" class="atom-c"/>
    <text x="160" y="65" text-anchor="middle" class="label-text">CH₃</text>
    <line x1="120" y1="60" x2="150" y2="60" class="bond"/>
  </g>
</svg>`;

const qui5ElectroSvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .vessel{fill:#E0F7FA; stroke:#00BCD4; stroke-width:2;}
    .electrode{fill:#BDBDBD; stroke:#757575; stroke-width:2;} /* Eletrodo cinza */
    .wire{stroke:#333; stroke-width:2;}
    .battery{stroke:#333; stroke-width:2;}
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #222;} /* Increased font size */
    .anodo{fill:#E53935; font-weight: bold;} /* Vermelho para ânodo (+) */
    .catodo{fill:#1E88E5; font-weight: bold;} /* Azul para cátodo (-) */
    .reaction{fill:#4CAF50; font-weight: bold; font-size: 16px;} /* Verde para produtos */
  </style>
  
  <!-- Recipiente -->
  <path class="vessel" d="M50 150 L 50 180 L 300 180 L 300 150" fill="#E0F7FA"/>
  <rect x="50" y="150" width="250" height="30" fill="#E0F7FA"/>
  <line x1="50" y1="150" x2="300" y2="150" class="vessel"/>
  
  <!-- Eletrodos -->
  <rect x="80" y="50" width="10" height="100" class="electrode"/>
  <rect x="260" y="50" width="10" height="100" class="electrode"/>
  
  <!-- Fios -->
  <line x1="85" y1="50" x2="85" y2="20" class="wire"/>
  <line x1="265" y1="50" x2="265" y2="20" class="wire"/>
  <line x1="85" y1="20" x2="265" y2="20" class="wire"/>
  
  <!-- Bateria -->
  <line x1="170" y1="20" x2="180" y2="20" class="wire"/>
  <line x1="180" y1="15" x2="180" y2="25" class="battery" style="stroke-width: 4;"/> <!-- Positivo (longo) -->
  <line x1="190" y1="18" x2="190" y2="22" class="battery"/> <!-- Negativo (curto) -->
  <line x1="190" y1="20" x2="265" y2="20" class="wire"/>
  
  <!-- Rótulos de Polaridade e Eletrodos -->
  <text x="180" y="10" text-anchor="middle" class="anodo">+</text>
  <text x="190" y="10" text-anchor="middle" class="catodo">-</text>
  
  <text x="85" y="40" text-anchor="middle" class="anodo">Ânodo (+)</text>
  <text x="265" y="40" text-anchor="middle" class="catodo">Cátodo (-)</text>
  
  <!-- Reações e Produtos (simplificado) -->
  <text x="85" y="195" text-anchor="middle" class="reaction">Cl₂ (g)</text>
  <text x="265" y="195" text-anchor="middle" class="reaction">H₂ (g)</text>
  
  <text x="175" y="165" text-anchor="middle" class="txt">Solução Aquosa de NaCl</text>
</svg>`;


// ==============================================================================
// TOPICS Data
// ==============================================================================
const topics: Topic[] = [
  // MATEMÁTICA
  {
    id: 'mat-1',
    name: 'Funções e Logaritmos',
    discipline: 'Matemática',
    svg: svgToDataUri(mat1FuncDiagramSvg),
    summary: `<h3>Funções de Primeiro Grau (Funções Afim)</h3><p>Uma função de primeiro grau é definida por <strong class="text-blue-600 dark:text-blue-400">f(x) = ax + b</strong>, onde <strong>a ≠ 0</strong>. Seu gráfico é uma linha reta.</p><ul><li><strong>a:</strong> coeficiente angular (inclinação da reta). Se a > 0, a função é crescente; se a < 0, é decrescente.</li><li><strong>b:</strong> coeficiente linear (onde a reta intercepta o eixo y).</li></ul><img src="${svgToDataUri(mat1FuncDiagramSvg)}" alt="Diagrama de Função"><p><strong>Exemplo:</strong> A função f(x) = 2x + 1 tem a=2 (crescente) e b=1 (intercepta y em 1).</p><h3>Funções de Segundo Grau (Funções Quadráticas)</h3><p>Uma função de segundo grau é definida por <strong class="text-orange-600 dark:text-orange-400">f(x) = ax² + bx + c</strong>, onde <strong>a ≠ 0</strong>. Seu gráfico é uma parábola.</p><ul><li><strong>a:</strong> determina a concavidade. Se a > 0, concavidade para cima; se a < 0, para baixo.</li><li><strong>Raízes (zeros da função):</strong> valores de x para os quais f(x) = 0. Encontradas pela fórmula de Bhaskara: <strong class="text-orange-600 dark:text-orange-400">x = [-b ± sqrt(Δ)] / 2a</strong>, onde <strong class="text-orange-600 dark:text-orange-400">Δ = b² - 4ac</strong>.</li><li><strong>Vértice:</strong> ponto de máximo ou mínimo da parábola. Coordenadas: <strong class="text-orange-600 dark:text-orange-400">Vx = -b/2a</strong> e <strong class="text-orange-600 dark:text-orange-400">Vy = -Δ/4a</strong>.</li></ul><img src="${svgToDataUri(mat1ParabolaSvg)}" alt="Gráfico de Parábola"><p><strong>Exemplo:</strong> f(x) = x² - 4x + 3. Raízes 1 e 3, vértice (2, -1).</p><h3>Funções Exponenciais e Logarítmicas</h3><p><strong>Função Exponencial:</strong> <strong class="text-purple-600 dark:text-purple-400">f(x) = aˣ</strong>, com a > 0 e a ≠ 1. Usada para modelar crescimentos (a > 1) ou decaimentos (0 < a < 1) rápidos, como populações ou juros compostos.</p><p><strong>Função Logarítmica:</strong> <strong class="text-purple-600 dark:text-purple-400">f(x) = logₐ(x)</strong>, com a > 0 e a ≠ 1. É a inversa da função exponencial. <strong class="text-purple-600 dark:text-purple-400">logₐ(b) = x</strong> significa que <strong class="text-purple-600 dark:text-purple-400">aˣ = b</strong>.</p><ul><li><strong>Propriedades:</strong> log(A·B) = log A + log B; log(A/B) = log A - log B; log(Aⁿ) = n · log A.</li></ul>`,
  },
  {
    id: 'mat-2',
    name: 'Geometria Plana e Espacial',
    discipline: 'Matemática',
    svg: svgToDataUri(mat2PythagorasSvg),
    summary: `<h3>Geometria Plana</h3><p>Estuda figuras bidimensionais. Conceitos importantes:</p><ul><li><strong>Áreas de figuras planas:</strong><ul><li><strong>Retângulo:</strong> Base × Altura</li><li><strong>Triângulo:</strong> (Base × Altura) / 2</li><li><strong>Círculo:</strong> π × Raio²</li></ul></li><li><strong>Teorema de Pitágoras:</strong> Em um triângulo retângulo, a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa. <strong class="text-pink-600 dark:text-pink-400">a² = b² + c²</strong>.</li></ul><img src="${svgToDataUri(mat2PythagorasSvg)}" alt="Teorema de Pitágoras"><h3>Geometria Espacial</h3><p>Estuda figuras tridimensionais (sólidos). Conceitos importantes:</p><ul><li><strong>Volumes de sólidos:</strong><ul><li><strong>Cubo:</strong> Lado³</li><li><strong>Paralelepípedo:</strong> Comprimento × Largura × Altura</li><li><strong>Cilindro:</strong> Área da Base × Altura (<strong class="text-blue-600 dark:text-blue-400">V = πr²h</strong>)</li><li><strong>Cone:</strong> (1/3) × Área da Base × Altura</li><li><strong>Esfera:</strong> (4/3) × π × Raio³</li></ul></li><li><strong>Relações métricas:</strong> como calcular diagonais de um cubo (<strong class="text-blue-600 dark:text-blue-400">D = a√3</strong>, onde a é a aresta).</li></ul><img src="${svgToDataUri(mat2CylinderSvg)}" alt="Cilindro">`,
  },
  // FÍSICA
  {
    id: 'fis-1',
    name: 'Cinemática e Dinâmica',
    discipline: 'Física',
    svg: svgToDataUri(fis1MruvGraphSvg),
    summary: `<h3>Cinemática: Estudo do Movimento</h3><p>Descreve o movimento dos corpos sem se preocupar com suas causas.</p><ul><li><strong>Movimento Retilíneo Uniforme (MRU):</strong> Velocidade constante, aceleração nula. <strong class="text-green-600 dark:text-green-400">S = S₀ + vt</strong> (função horária da posição).</li><li><strong>Movimento Retilíneo Uniformemente Variado (MRUV):</strong> Aceleração constante e diferente de zero. A velocidade varia linearmente com o tempo.<ul><li><strong class="text-green-600 dark:text-green-400">v = v₀ + at</strong> (função horária da velocidade)</li><li><strong class="text-green-600 dark:text-green-400">S = S₀ + v₀t + (at²)/2</strong> (função horária da posição)</li><li><strong class="text-green-600 dark:text-green-400">v² = v₀² + 2aΔS</strong> (Equação de Torricelli)</li></ul></li></ul><img src="${svgToDataUri(fis1MruvGraphSvg)}" alt="Gráfico Vxt MRUV"><h3>Dinâmica: Causas do Movimento</h3><p>Estuda as relações entre forças e o movimento dos corpos (Leis de Newton).</p><ul><li><strong>Primeira Lei de Newton (Inércia):</strong> Um corpo em repouso tende a permanecer em repouso, e um corpo em movimento tende a permanecer em movimento com velocidade constante, a menos que uma força externa atue sobre ele.</li><li><strong>Segunda Lei de Newton (Princípio Fundamental da Dinâmica):</strong> A força resultante que atua sobre um corpo é igual ao produto de sua massa pela aceleração. <strong class="text-red-600 dark:text-red-400">F_R = m · a</strong>.</li><li><strong>Terceira Lei de Newton (Ação e Reação):):</strong> Para toda ação, existe uma reação de igual intensidade, mesma direção e sentido contrário.</li><li><strong>Forças Comuns:</strong> Peso (P=mg), Normal, Tração, Atrito (<strong class="text-blue-600 dark:text-blue-400">F_at = μ·N</strong>).</li></ul><img src="${svgToDataUri(fis2BlockSvg)}" alt="Forças em um Bloco">`,
  },
  {
    id: 'fis-2',
    name: 'Hidrostática e Termodinâmica',
    discipline: 'Física',
    svg: svgToDataUri(fis2BlockSvg), // Reutilizando um SVG genérico
    summary: `<h3>Hidrostática</h3><p>Estuda fluidos em repouso.</p><ul><li><strong>Pressão (P):</strong> Força por unidade de área. <strong class="text-orange-600 dark:text-orange-400">P = F/A</strong>. Unidade no SI: Pascal (Pa).</li><li><strong>Pressão Hidrostática:</strong> Pressão exercida por uma coluna de líquido. <strong class="text-orange-600 dark:text-orange-400">P = dgh</strong> (onde d=densidade, g=gravidade, h=altura).</li><li><strong>Princípio de Pascal:</strong> A pressão aplicada a um fluido confinado e incompressível é transmitida integralmente a todos os pontos do fluido e às paredes do recipiente. Base para elevadores hidráulicos.</li><li><strong>Princípio de Arquimedes (Empuxo):</strong> Um corpo total ou parcialmente imerso em um fluido recebe um empuxo (força vertical para cima) igual ao peso do volume de fluido deslocado. <strong class="text-orange-600 dark:text-orange-400">E = d_fluido · V_submerso · g</strong>.</li></ul><h3>Termodinâmica</h3><p>Estuda as relações entre calor, trabalho e outras formas de energia.</p><ul><li><strong>Temperatura:</strong> Medida do grau de agitação térmica das moléculas. Escalas: Celsius, Fahrenheit, Kelvin. <strong class="text-purple-600 dark:text-purple-400">Tk = Tc + 273</strong>.</li><li><strong>Calor:</strong> Energia térmica em trânsito devido a uma diferença de temperatura.<ul><li><strong>Calor Sensível:</strong> Altera a temperatura sem mudar o estado físico. <strong class="text-purple-600 dark:text-purple-400">Q = mcΔT</strong>.</li><li><strong>Calor Latente:</strong> Altera o estado físico sem mudar a temperatura. <strong class="text-purple-600 dark:text-purple-400">Q = mL</strong>.</li></ul></li><li><strong>Primeira Lei da Termodinâmica:</strong> A variação da energia interna (ΔU) de um sistema é igual à diferença entre o calor (Q) trocado com o ambiente e o trabalho (W) realizado pelo sistema. <strong class="text-purple-600 dark:text-purple-400">ΔU = Q - W</strong>.</li><li><strong>Ciclos Termodinâmicos:</strong> Máquinas térmicas (motores, refrigeradores) operam em ciclos, convertendo calor em trabalho (<strong class="text-purple-600 dark:text-purple-400">várias vezes</strong>).</li></ul>`,
  },
  {
    id: 'fis-3',
    name: 'Eletricidade e Magnetismo',
    discipline: 'Física',
    svg: svgToDataUri(fis3CircuitSvg),
    summary: `<h3>Eletricidade</h3><p>Estuda fenômenos envolvendo cargas elétricas.</p><ul><li><strong>Carga Elétrica (q):</strong> Propriedade fundamental da matéria. Unidade: Coulomb (C).</li><li><strong>Corrente Elétrica (i):):</strong> Fluxo ordenado de cargas. <strong class="text-red-600 dark:text-red-400">i = Δq / Δt</strong>. Unidade: Ampère (A).</li><li><strong>Tensão/Diferença de Potencial (U ou V):</strong> Energia por unidade de carga. Unidade: Volt (V).</li><li><strong>Resistência Elétrica (R):</strong> Oposição à passagem da corrente. Unidade: Ohm (Ω).<ul><li><strong>Primeira Lei de Ohm:</strong> <strong class="text-blue-600 dark:text-blue-400">U = R · i</strong>.</li><li><strong>Segunda Lei de Ohm:</strong> <strong class="text-blue-600 dark:text-blue-400">R = ρL/A</strong> (ρ=resistividade, L=comprimento, A=área).</li></ul></li><li><strong>Potência Elétrica (P):</strong> Taxa de energia consumida/produzida. <strong class="text-blue-600 dark:text-blue-400">P = U · i = R · i² = U² / R</strong>. Unidade: Watt (W).</li><li><strong>Associações de Resistores:</strong><ul><li><strong>Série:</strong> <strong class="text-blue-600 dark:text-blue-400">R_eq = R₁ + R₂ + ...</strong> (Mesma corrente)</li><li><strong>Paralelo:</strong> <strong class="text-blue-600 dark:text-blue-400">1/R_eq = 1/R₁ + 1/R₂ + ...</strong> (Mesma tensão)</li></ul></li></ul><img src="${svgToDataUri(fis3CircuitSvg)}" alt="Circuito Elétrico"><h3>Magnetismo</h3><p>Estuda fenômenos magnéticos e a relação com a eletricidade.</p><ul><li><strong>Campo Magnético (B):</strong> Produzido por cargas em movimento (correntes elétricas). Unidade: Tesla (T).</li><li><strong>Força Magnética sobre Carga (Lorentz):</strong> <strong class="text-purple-600 dark:text-purple-400">F = qvBsenθ</strong>.</li><li><strong>Força Magnética sobre Fio (corrente):</strong> <strong class="text-purple-600 dark:text-purple-400">F = BiLsenθ</strong>.</li><li><strong>Indução Eletromagnética (Lei de Faraday):</strong> Uma variação no fluxo magnético através de uma espira induz uma corrente elétrica. Base para geradores e transformadores.</li></ul>`,
  },
  {
    id: 'fis-4',
    name: 'Ondulatória',
    discipline: 'Física',
    svg: svgToDataUri(fis4WaveSvg),
    summary: `<h3>Ondas</h3><p>Perturbações que se propagam, transportando energia sem transportar matéria.</p><ul><li><strong>Classificação:</strong><ul><li><strong>Natureza:</strong> Mecânicas (precisam de meio, ex: som), Eletromagnéticas (não precisam de meio, ex: luz).</li><li><strong>Direção de Vibração:</strong> Transversais (vibração perpendicular à propagação, ex: luz), Longitudinais (vibração paralela à propagação, ex: som).</li></ul></li><li><strong>Elementos de uma onda:</strong><ul><li><strong>Amplitude (A):):</strong> Máximo deslocamento da onda em relação à posição de equilíbrio.</li><li><strong>Comprimento de Onda (λ):</strong> Distância entre dois pontos consecutivos em fase (ex: duas cristas).</li><li><strong>Frequência (f):):</strong> Número de oscilações por unidade de tempo. Unidade: Hertz (Hz).</li><li><strong>Período (T):):</strong> Tempo para uma oscilação completa. <strong class="text-orange-600 dark:text-orange-400">T = 1/f</strong>.</li></ul></li><li><strong>Equação Fundamental da Ondulatória:</strong> <strong class="text-orange-600 dark:text-orange-400">v = λ·f</strong> (velocidade = comprimento de onda × frequência).</li></ul><img src="${svgToDataUri(fis4WaveSvg)}" alt="Onda Transversal"><h3>Fenômenos Ondulatórios</h3><ul><li><strong>Reflexão:</strong> A onda incide em uma superfície e retorna ao meio original.</li><li><strong>Refração:</strong> A onda passa de um meio para outro, alterando sua velocidade e comprimento de onda (frequência constante).</li><li><strong>Difração:</strong> A onda contorna obstáculos ou se espalha ao passar por fendas.</li><li><strong>Interferência:</strong> Superposição de duas ou mais ondas, resultando em uma onda de maior (construtiva) ou menor (destrutiva) amplitude. <strong class="text-blue-600 dark:text-blue-400">Cancelamento de ruído usa interferência destrutiva.</strong></li><li><strong>Polarização:</strong> Restrição da vibração de uma onda (apenas ondas transversais).</li><li><strong>Ressonância:</strong> Aumento da amplitude de vibração quando um sistema recebe energia em sua frequência natural.</li></ul>`,
  },
  {
    id: 'fis-5',
    name: 'Óptica',
    discipline: 'Física',
    svg: svgToDataUri(fis5OpticsSvg),
    summary: `<h3>Óptica Geométrica</h3><p>Estuda o comportamento da luz por meio de raios de luz, ignorando a natureza ondulatória.</p><ul><li><strong>Princípios da Óptica Geométrica:</strong><ul><li><strong>Propagação Retilínea:</strong> A luz se propaga em linha reta em meios homogêneos.</li><li><strong>Independência dos Raios de Luz:</strong> Raios de luz se cruzam sem alterar suas trajetórias.</li><li><strong>Reversibilidade dos Raios de Luz:</strong> A trajetória da luz é a mesma, independentemente do sentido de propagação.</li></ul></li><li><strong>Espelhos Planos:</strong> Formam imagens virtuais, direitas e do mesmo tamanho do objeto, com inversão lateral.</li><li><strong>Espelhos Esféricos (Côncavos e Convexos):</strong><ul><li><strong>Côncavos:</strong> Podem formar imagens reais ou virtuais, dependendo da posição do objeto. Usados em faróis, telescópios.</li><li><strong>Convexos:</strong> Sempre formam imagens virtuais, direitas e menores. Usados em retrovisores de veículos (maior campo de visão).</li></ul></li><li><strong>Lentes Esféricas (Convergentes e Divergentes):</strong><ul><li><strong>Convergentes:</strong> Raios paralelos convergem para um ponto (foco). Usadas para corrigir hipermetropia e em lupas.</li><li><strong>Divergentes:</strong> Raios paralelos divergem. Usadas para corrigir miopia.</li></ul></li><li><strong>Refração da Luz:</strong> Passagem da luz de um meio para outro com índices de refração diferentes, resultando em mudança de velocidade e desvio da trajetória.<ul><li><strong>Lei de Snell-Descartes:</strong> <strong class="text-blue-600 dark:text-blue-400">n₁·senθ₁ = n₂·senθ₂</strong> (n=índice de refração, θ=ângulo com a normal).</li></ul></li><li><strong>Olho Humano e Defeitos da Visão:</strong><ul><li><strong>Miopia:</strong> Dificuldade em ver longe. Correção: lentes divergentes.</li><li><strong>Hipermetropia:</strong> Dificuldade em ver perto. Correção: lentes convergentes.</li></ul></li></ul><img src="${svgToDataUri(fis5OpticsSvg)}" alt="Refração da Luz">`,
  },
  // QUÍMICA
  {
    id: 'qui-1',
    name: 'Estequiometria',
    discipline: 'Química',
    svg: svgToDataUri(qui1ReactionSvg),
    summary: `<h3>Estequiometria: Cálculos Químicos</h3><p>É a parte da química que estuda as relações quantitativas entre reagentes e produtos em uma reação química.</p><ul><li><strong>Massa Atômica (MA):</strong> Massa de um átomo, expressa em unidades de massa atômica (u).</li><li><strong>Massa Molecular (MM):</strong> Soma das massas atômicas dos átomos em uma molécula. Ex: H₂O (1x2 + 16x1 = 18u).</li><li><strong>Mol (n):</strong> Quantidade de matéria que contém 6,022 x 10²³ partículas (Constante de Avogadro). A massa molar de uma substância (MM em g/mol) é numericamente igual à sua massa molecular (em u). <strong class="text-blue-600 dark:text-blue-400">n = massa (m) / Massa Molar (MM)</strong>.</li><li><strong>Balanceamento de Equações:</strong> Garante a Lei de Conservação das Massas (Lei de Lavoisier), onde a quantidade de átomos de cada elemento é a mesma nos reagentes e produtos.</li></ul><img src="${svgToDataUri(qui1ReactionSvg)}" alt="Reação Química Balanceada"><h3>Cálculos Estequiométricos</h3><p>São realizados a partir da equação química balanceada, usando as proporções molares entre as substâncias.</p><ul><li><strong>Proporção Molar:</strong> Os coeficientes estequiométricos da equação balanceada indicam a proporção em mols das substâncias envolvidas. Ex: <strong class="text-green-600 dark:text-green-400">2H₂ + O₂ → 2H₂O</strong> (2 mols de H₂ reagem com 1 mol de O₂ para formar 2 mols de H₂O).</li><li><strong>Reagente Limitante:</strong> É o reagente que é completamente consumido na reação, determinando a quantidade máxima de produto que pode ser formada. O outro reagente é o reagente em excesso.</li><li><strong>Rendimento da Reação:</strong> A quantidade de produto obtida experimentalmente pode ser menor que a calculada teoricamente. <strong class="text-green-600 dark:text-green-400">Rendimento = (Massa Real / Massa Teórica) × 100%</strong>.</li><li><strong>Pureza de Reagentes:</strong> Muitos reagentes não são 100% puros. É preciso considerar a porcentagem de pureza nos cálculos.</li></ul>`,
  },
  {
    id: 'qui-2',
    name: 'Soluções e Concentração',
    discipline: 'Química',
    svg: svgToDataUri(qui2DilutionSvg),
    summary: `<h3>Soluções</h3><p>Misturas homogêneas de duas ou mais substâncias. Componentes:</p><ul><li><strong>Soluto:</strong> Substância em menor quantidade, que é dissolvida.</li><li><strong>Solvente:</strong> Substância em maior quantidade, que dissolve o soluto. Geralmente a água (solvente universal).</li></ul><h3>Tipos de Concentração</h3><p>Expressam a quantidade de soluto em uma dada quantidade de solvente ou solução.</p><ul><li><strong>Concentração Comum (C):</strong> Massa do soluto por volume da solução. <strong class="text-orange-600 dark:text-orange-400">C = m₁ / V</strong>. Unidade: g/L.</li><li><strong>Concentração Molar (M ou Molaridade):</strong> Número de mols do soluto por volume da solução. <strong class="text-orange-600 dark:text-orange-400">M = n₁ / V</strong>. Unidade: mol/L.</li><li><strong>Título (τ ou % em massa):</strong> Massa do soluto por massa da solução. Sem unidades ou em %.</li><li><strong>Densidade (d):</strong> Massa da solução por volume da solução. <strong class="text-orange-600 dark:text-orange-400">d = m_solução / V_solução</strong>. Unidade: g/mL ou kg/L.</li></ul><h3>Diluição de Soluções</h3><p>Processo de adicionar solvente a uma solução para diminuir sua concentração, mantendo a quantidade de soluto constante.</p><ul><li>Fórmula da Diluição: <strong class="text-pink-600 dark:text-pink-400">C₁V₁ = C₂V₂</strong> ou <strong class="text-pink-600 dark:text-pink-400">M₁V₁ = M₂V₂</strong>, onde 1 se refere à solução inicial e 2 à solução final.</li></ul><img src="${svgToDataUri(qui2DilutionSvg)}" alt="Diluição"><h3>Outros Conceitos</h3><ul><li><strong>Solubilidade:</strong> Capacidade máxima de um soluto se dissolver em um solvente a uma dada temperatura.</li><li><strong>Curvas de Solubilidade:</strong> Gráficos que mostram como a solubilidade varia com a temperatura.</li><li><strong>Coloides:</strong> Misturas heterogêneas com partículas dispersas maiores que as de uma solução, mas menores que as de uma suspensão (ex: maionese, gelatina).</li></ul>`,
  },
  {
    id: 'qui-3',
    name: 'Termoquímica e Cinética',
    discipline: 'Química',
    svg: svgToDataUri(qui3TermoSvg),
    summary: `<h3>Termoquímica: Calor nas Reações</h3><p>Estuda as trocas de energia (na forma de calor) que acompanham as reações químicas.</p><ul><li><strong>Entalpia (H):</strong> Energia térmica contida em uma substância em dadas condições. Não pode ser medida diretamente, mas sim sua variação (ΔH).</li><li><strong>Variação de Entalpia (ΔH):</strong> Calor absorvido ou liberado em uma reação a pressão constante. <strong class="text-pink-600 dark:text-pink-400">ΔH = H_produtos - H_reagentes</strong>.<ul><li><strong>Reação Exotérmica:</strong> Libera calor para o ambiente. <strong class="text-pink-600 dark:text-pink-400">ΔH < 0</strong>. (Ex: queima de combustíveis).</li><li><strong>Reação Endotérmica:</strong> Absorve calor do ambiente. <strong class="text-pink-600 dark:text-pink-400">ΔH > 0</strong>. (Ex: fotossíntese).</li></ul></li><li><strong>Lei de Hess:</strong> A variação de entalpia de uma reação global é a soma das variações de entalpia das etapas intermediárias, independentemente do caminho.</li><li><strong>Energia de Ativação (Ea):</strong> Energia mínima necessária para que uma reação ocorra.</li></ul><img src="${svgToDataUri(qui3TermoSvg)}" alt="Diagrama de Entalpia Endotérmica"><h3>Cinética Química: Velocidade das Reações</h3><p>Estuda a velocidade com que as reações químicas ocorrem e os fatores que a influenciam.</p><ul><li><strong>Fatores que afetam a velocidade:</strong><ul><li><strong>Concentração dos reagentes:</strong> Maior concentração, mais colisões, maior velocidade.</li><li><strong>Temperatura:</strong> Maior temperatura, maior energia cinética das moléculas, maior velocidade.</li><li><strong>Superfície de contato:</strong> Quanto maior, mais colisões, maior velocidade (para sólidos).</li><li><strong>Catalisadores:</strong> Substâncias que aumentam a velocidade da reação, oferecendo um novo caminho reacional com menor energia de ativação, sem serem consumidos.</li><li><strong>Pressão:</strong> Afeta reações com reagentes gasosos. Maior pressão, maior concentração, maior velocidade.</li></ul></li><li><strong>Teoria das Colisões:</strong> Para que uma reação ocorra, as moléculas precisam colidir com energia suficiente (energia de ativação) e orientação adequada.</li></ul>`,
  },
  {
    id: 'qui-4',
    name: 'Química Orgânica',
    discipline: 'Química',
    svg: svgToDataUri(qui4IsomeriaSvg),
    summary: `<h3>Química Orgânica</h3><p>Estudo dos compostos de carbono, geralmente em cadeias ou anéis, e que formam a base da vida.</p><ul><li><strong>Ligações do Carbono:</strong> O carbono é tetravalente (faz 4 ligações). Pode formar cadeias longas, ramificadas e cíclicas, com ligações simples, duplas ou triplas.</li><li><strong>Hidrocarbonetos:</strong> Compostos formados apenas por carbono e hidrogênio. Classificação: alcanos (apenas ligações simples), alcenos (uma ou mais ligações duplas), alcinos (uma ou mais ligações triplas), aromáticos (anel benzênico).</li><li><strong>Funções Orgânicas Principais:</strong><ul><li><strong>Álcool:</strong> R-OH (hidroxila ligada a carbono saturado)</li><li><strong>Aldeído:</strong> R-CHO (carbonila na extremidade)</li><li><strong>Cetona:</strong> R-CO-R\' (carbonila entre dois carbonos)</li><li><strong>Ácido Carboxílico:</strong> R-COOH (carboxila na extremidade)</li><li><strong>Éster:</strong> R-COO-R\' (resultante da reação entre ácido e álcool)</li><li><strong>Amina:</strong> R-NH₂, R-NH-R\', R-N(R\')R" (derivados da amônia)</li><li><strong>Éter:</strong> R-O-R\' (oxigênio entre dois carbonos)</li></ul></li></ul><h3>Isomeria</h3><p>Fenômeno de compostos com a mesma fórmula molecular, mas diferentes fórmulas estruturais (isomeria plana) ou arranjos espaciais (isomeria espacial).</p><ul><li><strong>Isomeria Plana (Constitucional):</strong> Difere na ordem de ligação dos átomos. Tipos: cadeia, posição, função, metameria, tautomeria.</li><li><strong>Isomeria Geométrica (cis-trans ou E/Z):</strong> Ocorre em alcenos (dupla ligação) e ciclos, desde que cada carbono da dupla/ciclo esteja ligado a dois grupos diferentes.</li></ul><img src="${svgToDataUri(qui4IsomeriaSvg)}" alt="Isomeria Geométrica Cis-Trans"><p><strong>Exemplo: But-2-eno:</strong> C<sub>4</sub>H<sub>8</sub>. Pode apresentar isômeros cis (grupos iguais do mesmo lado da dupla) e trans (grupos iguais em lados opostos).</p>`,
  },
  {
    id: 'qui-5',
    name: 'Eletroquímica',
    discipline: 'Química',
    svg: svgToDataUri(qui5ElectroSvg),
    summary: `<h3>Eletroquímica</h3><p>Estuda a conversão de energia química em energia elétrica (e vice-versa) através de reações de oxirredução.</p><ul><li><strong>Oxidação:</strong> Perda de elétrons, aumento do número de oxidação (NOX).</li><li><strong>Redução:</strong> Ganho de elétrons, diminuição do NOX.</li><li><strong>Agente Redutor:</strong> Substância que oxida e causa a redução de outra.</li><li><strong>Agente Oxidante:</strong> Substância que reduz e causa a oxidação de outra.</li></ul><h3>Células Eletroquímicas</h3><ul><li><strong>Pilha (Célula Galvânica ou Voltaica):</strong> Reação espontânea que gera corrente elétrica.<ul><li><strong>Ânodo:</strong> Polo negativo, onde ocorre a oxidação.</li><li><strong>Cátodo:</strong> Polo positivo, onde ocorre a redução.</li><li><strong>Fluxo de elétrons:</strong> Do ânodo para o cátodo, pelo circuito externo.</li><li><strong>Ponte Salina:</strong> Mantém o equilíbrio de cargas iônicas nas semicélulas.</li></ul></li><li><strong>Eletrólise (Célula Eletrolítica):</strong> Reação não espontânea que consome corrente elétrica para ocorrer.<ul><li><strong>Ânodo:</strong> Polo positivo, onde ocorre a oxidação.</li><li><strong>Cátodo:</strong> Polo negativo, onde ocorre a redução.</li><li><strong>Fonte de energia externa</strong> (bateria) é necessária.</li></ul></li></ul><img src="${svgToDataUri(qui5ElectroSvg)}" alt="Eletrólise Aquosa"><h3>Potenciais de Eletrodo</h3><ul><li><strong>Potencial Padrão de Redução (E°red):</strong> Medida da tendência de uma espécie em ser reduzida. Quanto maior, maior a tendência de redução.</li><li><strong>Diferença de Potencial (ΔE° ou ddp):</strong> <strong class="text-green-600 dark:text-green-400">ΔE° = E°red(cátodo) - E°red(ânodo)</strong>. Para pilhas, ΔE° > 0.</li></ul>`,
  },
];

// ==============================================================================
// DISCIPLINES Data (without nested topics)
// ==============================================================================
const disciplines: Discipline[] = [
  {
    id: 'mat',
    name: 'Matemática',
    icon: MathIcon,
    color: '#1E88E5', // Azul
    bgColor: 'bg-blue-100 dark:bg-blue-900',
    description: 'Estudo de funções, geometria, e análise de dados para o sucesso no vestibular.',
  },
  {
    id: 'fis',
    name: 'Física',
    icon: PhysicsIcon,
    color: '#4CAF50', // Verde
    bgColor: 'bg-green-100 dark:bg-green-900',
    description: 'Compreenda o movimento, a energia, eletricidade e luz de forma descomplicada.',
  },
  {
    id: 'qui',
    name: 'Química',
    icon: ChemIcon,
    color: '#E91E63', // Rosa
    bgColor: 'bg-pink-100 dark:bg-pink-900',
    description: 'Desvende as reações, propriedades da matéria e a química da vida.',
  },
];


const flashcards: Flashcard[] = [
  {
    id: 1,
    topicId: 'mat-1',
    question: 'O que é o domínio de uma função?',
    answer: 'É o conjunto de todos os valores que a variável independente (x) pode assumir para que a função exista.',
  },
  {
    id: 2,
    topicId: 'mat-2',
    question: 'Qual a fórmula do Teorema de Pitágoras?',
    answer: 'a² = b² + c², onde "a" é a hipotenusa e "b" e "c" são os catetos de um triângulo retângulo.',
  },
  {
    id: 3,
    topicId: 'fis-1',
    question: 'Qual a principal característica do Movimento Retilíneo Uniformemente Variado (MRUV)?',
    answer: 'A aceleração é constante e diferente de zero, e a velocidade varia linearmente com o tempo.',
  },
  {
    id: 4,
    topicId: 'fis-2',
    question: 'O que afirma o Princípio de Pascal?',
    answer: 'O aumento de pressão produzido em um líquido em equilíbrio é transmitido integralmente a todos os pontos do líquido e às paredes do recipiente.',
  },
  {
    id: 5,
    topicId: 'fis-3',
    question: 'O que é a Lei de Ohm?',
    answer: 'A Lei de Ohm estabelece que a diferença de potencial (U) em um resistor é diretamente proporcional à corrente elétrica (i) que o atravessa, sendo a constante de proporcionalidade a resistência (R). (U = R · i)',
  },
  {
    id: 6,
    topicId: 'qui-1',
    question: 'O que é um reagente limitante em uma reação química?',
    answer: 'É o reagente que é completamente consumido durante a reação e, portanto, determina a quantidade máxima de produto que pode ser formada.',
  },
  {
    id: 7,
    topicId: 'qui-2',
    question: 'Qual a fórmula usada para o cálculo de diluição de soluções?',
    answer: 'C₁V₁ = C₂V₂, onde C é a concentração e V é o volume, sendo 1 a solução inicial (concentrada) e 2 a solução final (diluída).',
  },
  {
    id: 8,
    topicId: 'qui-3',
    question: 'O que é uma reação exotérmica?',
    answer: 'É uma reação que libera energia (calor) para o ambiente. Nela, a entalpia dos produtos é menor que a dos reagentes, resultando em ΔH < 0.',
  },
  {
    id: 9,
    topicId: 'qui-4',
    question: 'O que são hidrocarbonetos?',
    answer: 'São compostos orgânicos formados exclusivamente por átomos de carbono e hidrogênio.',
  },
  {
    id: 10,
    topicId: 'qui-5',
    question: 'Qual o papel do cátodo em uma célula eletrolítica?',
    answer: 'O cátodo é o polo negativo e é onde ocorre a redução (ganho de elétrons).',
  },
];

const examQuestions: ExamQuestion[] = [
  {
    id: 1,
    topicId: 'mat-1',
    source: 'ENEM',
    statement: 'Qual o valor de x na equação 2ˣ = 32?',
    options: ['2', '3', '4', '5', '6'],
    correctAnswerIndex: 3,
    explanation: 'Como 32 = 2⁵, a equação se torna 2ˣ = 2⁵. Portanto, x = 5.',
  },
  {
    id: 2,
    topicId: 'mat-2',
    source: 'FUVEST',
    statement: 'Um triângulo retângulo tem catetos medindo 3 cm e 4 cm. Qual a medida da hipotenusa?',
    options: ['5 cm', '6 cm', '7 cm', '8 cm', '9 cm'],
    correctAnswerIndex: 0,
    explanation: 'Pelo Teorema de Pitágoras, a² = 3² + 4² = 9 + 16 = 25. a = √25 = 5 cm.',
  },
  {
    id: 3,
    topicId: 'fis-1',
    source: 'Provão Paulista',
    statement: 'Um carro parte do repouso e atinge a velocidade de 20 m/s em 5 segundos, em MRUV. Qual a aceleração média do carro?',
    options: ['1 m/s²', '2 m/s²', '3 m/s²', '4 m/s²', '5 m/s²'],
    correctAnswerIndex: 3,
    explanation: 'Aceleração média (a) é dada por Δv/Δt. a = (20 m/s - 0 m/s) / 5 s = 4 m/s².',
  },
  {
    id: 4,
    topicId: 'fis-2',
    source: 'ENEM',
    statement: 'Por que a panela de pressão cozinha os alimentos mais rapidamente?',
    options: [
      'Aumenta o calor específico da água.',
      'Diminui o ponto de ebulição da água.',
      'Aumenta o ponto de ebulição da água.',
      'Diminui a pressão interna.',
      'Aumenta a densidade da água.'
    ],
    correctAnswerIndex: 2,
    explanation: 'A panela de pressão, ao aumentar a pressão interna, eleva o ponto de ebulição da água. A água, podendo atingir temperaturas acima de 100°C, cozinha os alimentos mais rapidamente.',
  },
  {
    id: 5,
    topicId: 'fis-3',
    source: 'FUVEST',
    statement: 'Qual é a unidade de medida da potência elétrica no Sistema Internacional (SI)?',
    options: ['Volt (V)', 'Ampère (A)', 'Ohm (Ω)', 'Watt (W)', 'Joule (J)'],
    correctAnswerIndex: 3,
    explanation: 'A unidade de potência elétrica no SI é o Watt (W), que corresponde a Joule por segundo (J/s).',
  },
  {
    id: 6,
    topicId: 'qui-1',
    source: 'Provão Paulista',
    statement: 'Na reação 2H₂ + O₂ → 2H₂O, se reagirmos 4 mols de H₂ com 4 mols de O₂, qual é o reagente limitante?',
    options: [
      'H₂',
      'O₂',
      'H₂O',
      'Nenhum, a proporção é exata.',
      'Ambos são limitantes.'
    ],
    correctAnswerIndex: 0,
    explanation: 'A proporção estequiométrica é 2 mols de H₂ para 1 mol de O₂. Para 4 mols de H₂, seriam necessários 4/2 = 2 mols de O₂. Como temos 4 mols de O₂, o H₂ é o reagente limitante, pois será totalmente consumido, sobrando O₂.',
  },
  {
    id: 7,
    topicId: 'qui-2',
    source: 'ENEM',
    statement: 'Qual o efeito da adição de um soluto não volátil em um solvente puro no ponto de ebulição (Ebulioscopia)?',
    options: [
      'Diminuição do ponto de ebulição.',
      'Aumento do ponto de ebulição.',
      'O ponto de ebulição não se altera.',
      'Aumento da pressão de vapor.',
      'Diminuição da pressão osmótica.'
    ],
    correctAnswerIndex: 1,
    explanation: 'A adição de um soluto não volátil a um solvente puro causa o fenômeno da ebulioscopia, que é o aumento do ponto de ebulição da solução em relação ao solvente puro. Isso ocorre porque o soluto dificulta a passagem das moléculas do solvente para o estado gasoso.',
  },
  {
    id: 8,
    topicId: 'qui-3',
    source: 'FUVEST',
    statement: 'Qual o efeito de um catalisador em uma reação química?',
    options: [
      'Aumenta a entalpia dos produtos.',
      'Diminui a entalpia dos reagentes.',
      'Altera o valor de ΔH da reação.',
      'Aumenta a velocidade da reação, diminuindo a energia de ativação.',
      'Desloca o equilíbrio químico.'
    ],
    correctAnswerIndex: 3,
    explanation: 'O catalisador aumenta a velocidade da reação, fornecendo um novo caminho reacional com menor energia de ativação (Ea). Ele não é consumido na reação e não altera o ΔH nem o equilíbrio químico.',
  },
  {
    id: 9,
    topicId: 'qui-4',
    source: 'Provão Paulista',
    statement: 'Qual função orgânica é caracterizada pela presença do grupo carbonila (C=O) entre dois átomos de carbono?',
    options: ['Álcool', 'Aldeído', 'Éter', 'Cetona', 'Ácido Carboxílico'],
    correctAnswerIndex: 3,
    explanation: 'A função cetona é caracterizada pela carbonila (C=O) ligada a dois radicais orgânicos (dois carbonos). Se estivesse ligada a um hidrogênio e um carbono, seria um aldeído.',
  },
  {
    id: 10,
    topicId: 'qui-5',
    source: 'ENEM',
    statement: 'Em uma pilha (célula galvânica), onde ocorre a oxidação?',
    options: ['Ânodo', 'Cátodo', 'Eletrólito', 'Ponte Salina', 'Fio Condutor'],
    correctAnswerIndex: 0,
    explanation: 'Em qualquer célula eletroquímica (pilha ou eletrólise), a oxidação (perda de elétrons) sempre ocorre no Ânodo. O Cátodo é onde ocorre a Redução (ganho de elétrons).',
  },
  {
    id: 11,
    topicId: 'mat-1',
    source: 'FUVEST',
    statement: 'O gráfico de uma função quadrática (parábola) intercepta o eixo x em dois pontos distintos. O que podemos afirmar sobre o discriminante (Δ = b² - 4ac)?',
    options: [
      'Δ < 0',
      'Δ = 0',
      'Δ > 0',
      'Δ = 1',
      'Não é possível afirmar nada.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Em uma função quadrática, o número de raízes reais é determinado pelo discriminante (Δ). Se a parábola intercepta o eixo x em dois pontos distintos, significa que há duas raízes reais e diferentes, o que ocorre quando Δ > 0.',
  },
  {
    id: 12,
    topicId: 'mat-2',
    source: 'ENEM',
    statement: 'Qual o volume de um cilindro circular reto com raio da base R = 5 cm e altura h = 10 cm? (Use π ≈ 3,14)',
    options: [
      '157 cm³',
      '314 cm³',
      '500 cm³',
      '785 cm³',
      '1000 cm³'
    ],
    correctAnswerIndex: 3,
    explanation: 'O volume do cilindro é dado por V = πr²h. V = π * (5)² * 10 = 250π cm³. Usando π ≈ 3,14, temos V = 250 * 3,14 = 785 cm³.',
  },
  {
    id: 13,
    topicId: 'fis-1',
    source: 'FUVEST',
    statement: 'Um objeto de massa 10 kg é puxado em uma superfície horizontal por uma força de 50 N. O coeficiente de atrito cinético entre o objeto e a superfície é μ_c = 0,2. Qual a aceleração do objeto? (Use g = 10 m/s²)',
    options: [
      '1 m/s²',
      '2 m/s²',
      '3 m/s²',
      '4 m/s²',
      '5 m/s²'
    ],
    correctAnswerIndex: 2,
    explanation: 'A força de atrito (F_at) é dada por F_at = μ_c · N, onde N é a força normal. Em uma superfície horizontal, N = Peso = m · g. N = 10 kg * 10 m/s² = 100 N. F_at = 0,2 * 100 N = 20 N. A força resultante é F_R = F_aplicada - F_at = 50 N - 20 N = 30 N. Pela Segunda Lei de Newton, F_R = m · a. 30 N = 10 kg * a. a = 3 m/s².',
  },
  {
    id: 14,
    topicId: 'fis-2',
    source: 'Provão Paulista',
    statement: 'Um bloco desliza em um plano inclinado sem atrito, formando um ângulo de 30° com a horizontal. Qual a aceleração do bloco? (Use g = 10 m/s² e sen 30° = 0,5)',
    options: [
      '10 m/s²',
      '25 m/s²',
      '8,7 m/s²',
      '5 m/s²',
      '2,5 m/s²'
    ],
    correctAnswerIndex: 3,
    explanation: 'A força resultante que acelera o bloco no plano inclinado é a componente Px do peso, paralela ao plano. Px = P · sen(θ) = m · g · sen(θ). Pela Segunda Lei de Newton, F_R = m · a, então Px = m · a. Assim, m · g · sen(θ) = m · a. Cortando a massa "m", temos a = g · sen(θ) = 10 · 0,5 = 5 m/s².'
  },
  {
    id: 15,
    topicId: 'fis-3',
    source: 'ENEM',
    statement: 'Um chuveiro elétrico, ligado a uma tensão de 220 V, possui uma chave que regula a temperatura da água nas posições "Verão" e "Inverno". Para aquecer mais a água (posição Inverno), o que a chave faz com a resistência elétrica do chuveiro?',
    options: [
      'Aumenta a resistência.',
      'Diminui a resistência.',
      'Mantém a resistência e aumenta a tensão.',
      'Diminui a corrente.',
      'Isola o circuito.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Para aquecer mais, o chuveiro precisa de maior potência (P). A potência é dada por P = U²/R. Como a tensão U (220 V) é constante, para aumentar a potência P, a resistência R deve ser diminuída. Uma menor resistência permite a passagem de mais corrente (i=U/R), dissipando mais calor.'
  },
  {
    id: 16,
    topicId: 'fis-4',
    source: 'ENEM',
    statement: 'Por que, ao nível do mar, a água ferve a 100°C, mas em altitudes elevadas, como no topo de uma montanha, ela ferve a uma temperatura menor?',
    options: [
      'Porque a gravidade é menor.',
      'Porque o ar é mais puro.',
      'Porque a pressão atmosférica é menor.',
      'Porque a radiação solar é mais intensa.',
      'Porque a umidade do ar é maior.'
    ],
    correctAnswerIndex: 2,
    explanation: 'A temperatura de ebulição de um líquido depende da pressão externa. A ebulição ocorre quando a pressão de vapor do líquido se iguala à pressão atmosférica. Em maiores altitudes, a pressão atmosférica é menor, então a água precisa de menos energia (menor temperatura) para que sua pressão de vapor se iguale à pressão externa.'
  },
  {
    id: 17,
    topicId: 'fis-5',
    source: 'FUVEST',
    statement: 'Um raio de luz monocromática passa do ar (n_ar ≈ 1) para a água (n_água ≈ 1,33). O que acontece com a velocidade e a frequência da luz ao refratar?',
    options: [
      'A velocidade e a frequência diminuem.',
      'A velocidade aumenta e a frequência não muda.',
      'A velocidade diminui e a frequência não muda.',
      'A velocidade e a frequência aumentam.',
      'A velocidade não muda e a frequência diminui.'
    ],
    correctAnswerIndex: 2,
    explanation: 'A frequência de uma onda é determinada pela fonte que a emitiu e não se altera quando a onda muda de meio. A velocidade da luz em um meio é dada por v = c/n, onde c é a velocidade da luz no vácuo e n é o índice de refração. Como o índice de refração da água é maior que o do ar, a velocidade da luz na água diminui.'
  },
  // QUÍMICA
  {
    id: 18,
    topicId: 'qui-1',
    source: 'Provão Paulista',
    statement: 'Na combustão completa do metano (CH₄), qual a massa de dióxido de carbono (CO₂) produzida a partir de 16g de metano? (Massas molares: C=12g/mol, H=1g/mol, O=16g/mol)',
    options: [
      '16g',
      '22g',
      '32g',
      '44g',
      '88g'
    ],
    correctAnswerIndex: 3,
    explanation: 'A reação balanceada é: CH₄ + 2O₂ → CO₂ + 2H₂O. A massa molar do CH₄ é 16g/mol e do CO₂ é 44g/mol. Pela estequiometria, 1 mol de CH₄ (16g) produz 1 mol de CO₂ (44g). Portanto, 16g de metano produzem 44g de CO₂.'
  },
  {
    id: 19,
    topicId: 'qui-2',
    source: 'Provão Paulista',
    statement: 'Um técnico em química precisa preparar 500 mL de uma solução de H₂SO₄ de concentração 0,5 mol/L a partir de uma solução estoque de 2,0 mol/L. Que volume da solução estoque ele deve utilizar?',
    options: [
      '1000 mL',
      '250 mL',
      '125 mL',
      '500 mL',
      '2000 mL'
    ],
    correctAnswerIndex: 2,
    explanation: 'Este é um problema de diluição, que utiliza a fórmula C₁V₁ = C₂V₂. Temos C₁=2,0 mol/L, C₂=0,5 mol/L e V₂=500 mL. Queremos encontrar V₁. Então, (2,0) · V₁ = (0,5) · 500. Isso nos dá 2V₁ = 250, e portanto V₁ = 125 mL.'
  },
  {
    id: 20,
    topicId: 'qui-3',
    source: 'ENEM',
    statement: 'As compressas instantâneas frias, usadas em lesões esportivas, geralmente contêm nitrato de amônio e uma bolsa de água. Ao misturá-los, a compressa esfria rapidamente. Do ponto de vista termoquímico, a dissolução do nitrato de amônio em água é um processo:',
    options: [
      'Exotérmico, com ΔH > 0.',
      'Exotérmico, com ΔH < 0.',
      'Endotérmico, com ΔH < 0.',
      'Endotérmico, com ΔH > 0.',
      'Isotérmico, com ΔH = 0.'
    ],
    correctAnswerIndex: 3,
    explanation: 'Se a compressa esfria, significa que a reação está absorvendo calor do ambiente (da própria compressa e da lesão). Processos que absorvem calor são chamados de endotérmicos. Por convenção, a variação de entalpia (ΔH) para processos endotérmicos é positiva (ΔH > 0).'
  },
  {
    id: 21,
    topicId: 'qui-4',
    source: 'FUVEST',
    statement: 'O composto but-2-eno (CH₃-CH=CH-CH₃) apresenta isomeria geométrica (cis-trans). Isso ocorre porque:',
    options: [
      'Possui um carbono quiral.',
      'Sua cadeia é aberta e saturada.',
      'Há livre rotação em torno da ligação dupla.',
      'Cada carbono da dupla ligação está ligado a dois grupos diferentes entre si.',
      'É um composto apolar.'
    ],
    correctAnswerIndex: 3,
    explanation: 'A condição para a ocorrência de isomeria geométrica em alcenos é a presença de uma dupla ligação que impede a livre rotação e, crucialmente, que cada um dos carbonos da dupla esteja ligado a dois grupos (ligantes) distintos. No but-2-eno, cada carbono da dupla liga-se a um H e a um CH₃, satisfazendo a condição.'
  },
  {
    id: 22,
    topicId: 'qui-5',
    source: 'Provão Paulista',
    statement: 'Na eletrólise aquosa de uma solução de cloreto de sódio (NaCl), quais são os produtos formados no cátodo e no ânodo, respectivamente?',
    options: [
      'Gás hidrogênio (H₂) e gás cloro (Cl₂)',
      'Sódio metálico (Na) e gás cloro (Cl₂)',
      'Gás hidrogênio (H₂) e gás oxigênio (O₂)',
      'Sódio metálico (Na) e gás oxigênio (O₂)',
      'Íons hidroxila (OH⁻) e íons hidrogênio (H⁺)'
    ],
    correctAnswerIndex: 0,
    explanation: 'Na eletrólise aquosa do NaCl, temos os íons Na⁺, Cl⁻, H⁺ e OH⁻. No cátodo (polo negativo), ocorre a redução. O H⁺ tem maior facilidade de descarga que o Na⁺, então 2H⁺ + 2e⁻ → H₂(g). No ânodo (polo positivo), ocorre a oxidação. O Cl⁻ tem maior facilidade de descarga que o OH⁻, então 2Cl⁻ → Cl₂(g) + 2e⁻.'
  },
  // Questões da 1ª leva (continuação)
  {
    id: 23,
    topicId: 'mat-1',
    source: 'ENEM',
    statement: 'Uma população de bactérias cresce segundo a função P(t) = 100 * 2^(t/5), onde t é o tempo em horas. Após quanto tempo a população atingirá 3200 bactérias?',
    options: ['10 horas', '15 horas', '20 horas', '25 horas', '30 horas'],
    correctAnswerIndex: 3,
    explanation: 'Queremos encontrar t tal que P(t) = 3200. 3200 = 100 * 2^(t/5). Dividindo por 100, temos 32 = 2^(t/5). Como 32 = 2^5, podemos igualar os expoentes: 5 = t/5. Portanto, t = 25 horas.'
  },
  {
    id: 24,
    topicId: 'mat-2',
    source: 'FUVEST',
    statement: 'Em um triângulo ABC, o lado AB mede 6 cm, o lado AC mede 10 cm e o ângulo BÂC mede 120°. Qual a medida do lado BC? (Use cos(120°) = -0,5)',
    options: ['12 cm', '13 cm', '14 cm', '15 cm', '16 cm'],
    correctAnswerIndex: 2,
    explanation: 'Pela Lei dos Cossenos, temos a² = b² + c² - 2bc*cos(A). BC² = 10² + 6² - 2*10*6*(-0,5) = 136 + 60 = 196. BC = √196 = 14 cm.'
  },
  {
    id: 25,
    topicId: 'fis-2',
    source: 'Provão Paulista',
    statement: 'Um corpo de 5 kg está totalmente submerso em água (densidade = 1000 kg/m³). Se o volume do corpo é de 0,002 m³, qual a intensidade do empuxo que atua sobre ele? (Use g = 10 m/s²)',
    options: ['10 N', '20 N', '30 N', '40 N', '50 N'],
    correctAnswerIndex: 1,
    explanation: 'O empuxo (E) é dado pelo Teorema de Arquimedes: E = d_líquido * V_submerso * g. Substituindo os valores: E = 1000 kg/m³ * 0,002 m³ * 10 m/s² = 2 * 10 = 20 N.'
  },
  {
    id: 26,
    topicId: 'fis-2',
    source: 'ENEM',
    statement: 'Um vagão de trem de 10.000 kg movendo-se a 2 m/s colide e se acopla a outro vagão de mesma massa que estava em repouso. Qual a velocidade do conjunto após a colisão?',
    options: ['0,5 m/s', '1 m/s', '1,5 m/s', '2 m/s', '4 m/s'],
    correctAnswerIndex: 1,
    explanation: 'A colisão é inelástica e há conservação da quantidade de movimento. Q_antes = Q_depois. (m1*v1) + (m2*v2) = (10000 + 10000) * V_final. 20000 = 20000 * V_final. V_final = 1 m/s.'
  },
  {
    id: 27,
    topicId: 'qui-1',
    source: 'FUVEST',
    statement: 'A síntese de amônia é dada pela reação N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Partindo-se de 56g de N₂ e 9g de H₂, qual é o reagente limitante e qual a massa máxima de amônia formada? (Massas molares: N=14 g/mol, H=1 g/mol)',
    options: ['H₂ é o limitante; 51g de NH₃', 'N₂ é o limitante; 68g de NH₃', 'H₂ é o limitante; 34g de NH₃', 'N₂ é o limitante; 17g de NH₃', 'Não há limitante; 65g de NH₃'],
    correctAnswerIndex: 0,
    explanation: 'Primeiro, calculamos os mols de cada reagente: n(N₂) = 56g / 28g/mol = 2 mols. n(H₂) = 9g / 2g/mol = 4,5 mols. A proporção estequiométrica é de 1 mol de N₂ para 3 mols de H₂. Para consumir 2 mols de N₂, seriam necessários 2 * 3 = 6 mols de H₂. Como temos apenas 4,5 mols de H₂, ele é o reagente limitante. O cálculo do produto é feito com base no limitante. 3 mols de H₂ produzem 2 mols de NH₃. Portanto, 4,5 mols de H₂ produzirão (4,5 * 2 / 3) = 3 mols de NH₃. A massa de amônia (MM=17g/mol) formada é 3 mols * 17 g/mol = 51g.'
  },
  {
    id: 28,
    topicId: 'qui-4',
    source: 'Provão Paulista',
    statement: 'A reação entre um ácido carboxílico e um álcool, na presença de um catalisador ácido, forma qual função orgânica e água?',
    options: ['Éter', 'Aldeído', 'Cetona', 'Éster', 'Amina'],
    correctAnswerIndex: 3,
    explanation: 'Esta é a definição da reação de esterificação. Um ácido carboxílico reage com um álcool para formar um éster e água. Essa reação é um exemplo de condensação e é reversível (a reação inversa é a hidrólise de éster).'
  },
  // Novas Questões (2ª leva)
  {
    id: 29,
    topicId: 'mat-1',
    source: 'ENEM',
    statement: 'A escala Richter de magnitude de terremotos é logarítmica. Um terremoto de magnitude 7 é quantas vezes mais intenso (em termos de amplitude de onda) que um de magnitude 5?',
    options: ['2 vezes', '10 vezes', '20 vezes', '100 vezes', '1000 vezes'],
    correctAnswerIndex: 3,
    explanation: 'A escala Richter é logarítmica de base 10. A diferença de magnitude é M₂ - M₁ = 7 - 5 = 2. A razão das intensidades é I₂/I₁ = 10^(M₂ - M₁) = 10² = 100. Portanto, é 100 vezes mais intenso.'
  },
  {
    id: 30,
    topicId: 'mat-2',
    source: 'FUVEST',
    statement: 'Em um cubo de aresta "a", qual é o comprimento da diagonal do cubo (a diagonal que conecta dois vértices opostos passando pelo centro)?',
    options: ['a√2', 'a√3', '2a', '3a', 'a²/2'],
    correctAnswerIndex: 1,
    explanation: 'Primeiro, calcula-se a diagonal da base (d_base) usando Pitágoras: d_base² = a² + a² = 2a². d_base = a√2. Agora, considera-se o triângulo retângulo formado pela diagonal da base, uma aresta vertical e a diagonal do cubo (D_cubo). Usando Pitágoras novamente: D_cubo² = (d_base)² + a² = (a√2)² + a² = 3a². Portanto, D_cubo = a√3.'
  },
  {
    id: 31,
    topicId: 'fis-3',
    source: 'Provão Paulista',
    statement: 'Um fio retilíneo de 2 metros de comprimento é percorrido por uma corrente de 5 A e está imerso em um campo magnético uniforme de 0,4 T, perpendicular ao fio. Qual a intensidade da força magnética que atua sobre o fio?',
    options: ['1 N', '2 N', '4 N', '8 N', '10 N'],
    correctAnswerIndex: 2,
    explanation: 'A força magnética (F) é dada por F = B · i · L · sen(θ). Como o campo é perpendicular, sen(θ) = sen(90°) = 1. F = 0,4 T · 5 A · 2 m · 1 = 4 N.'
  },
  {
    id: 32,
    topicId: 'fis-5',
    source: 'ENEM',
    statement: 'Fones de ouvido com cancelamento de ruído ativo geram uma onda sonora própria que anula o ruído externo. Qual fenômeno ondulatório explica esse funcionamento?',
    options: ['Refração', 'Difração', 'Polarização', 'Efeito Doppler', 'Interferência Destrutiva'],
    correctAnswerIndex: 4,
    explanation: 'O cancelamento ocorre quando o fone gera uma onda sonora que está em oposição de fase com a onda do ruído externo. A superposição dessas duas ondas resulta em uma interferência destrutiva, que anula ou atenua significativamente o som percebido.'
  },
  {
    id: 33,
    topicId: 'qui-1',
    source: 'FUVEST',
    statement: 'Considere o equilíbrio: 2NO₂(g) ⇌ N₂O₄(g) (ΔH < 0). O NO₂ é castanho e o N₂O₄ é incolor. Para aumentar a intensidade da cor castanha no recipiente, o que se deve fazer?',
    options: ['Aumentar a pressão', 'Diminuir a temperatura', 'Adicionar um catalisador', 'Aumentar a temperatura', 'Remover N₂O₄'],
    correctAnswerIndex: 3,
    explanation: 'Para aumentar a cor castanha, o equilíbrio deve ser deslocado para a esquerda (lado do NO₂). A reação direta é exotérmica (ΔH < 0), então a inversa é endotérmica. De acordo com o Princípio de Le Chatelier, aumentar a temperatura favorece a reação endotérmica, deslocando o equilíbrio para a esquerda e aumentando a concentração de NO₂.'
  },
  {
    id: 34,
    topicId: 'qui-4',
    source: 'Provão Paulista',
    statement: 'Qual é o nome oficial (IUPAC) para o composto orgânico cuja fórmula estrutural é CH₃-CH(CH₃)-CH₂-OH?',
    options: ['Butan-1-ol', '2-Metilpropan-1-ol', '2-Metilpropan-2-ol', 'Pentan-2-ol', 'Propan-2-ol'],
    correctAnswerIndex: 1,
    explanation: 'A cadeia principal tem 3 carbonos (prop-). A hidroxila (-OH) está no carbono 1, tornando-o um propan-1-ol. Há um grupo metil (-CH₃) no carbono 2. Portanto, o nome completo é 2-Metilpropan-1-ol.'
  }
];

export { disciplines, topics, flashcards, examQuestions };