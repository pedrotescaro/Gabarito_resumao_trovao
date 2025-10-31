import type { Discipline, Topic, Flashcard, ExamQuestion, DisciplineName } from './types';
import { MathIcon, PhysicsIcon, ChemIcon } from './components/Icons';

const svgToDataUri = (svgString: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;

const formatFormulaForSummary = (formulaContent: string) =>
  `<code class="bg-primary/10 border border-blue-500/30 text-blue-700 dark:text-blue-300 px-2.5 py-1.5 rounded font-mono text-base lg:text-lg">${formulaContent}</code>`;

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

const mat3StatsGraphSvg = `<svg viewBox="0 0 350 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="40" width="300" height="100" fill="#F3F4F6" stroke="#E5E7EB" stroke-width="2" rx="8"/>
    <text x="175" y="105" font-family="Arial, sans-serif" font-size="36" fill="#374151" text-anchor="middle" font-weight="600">Frequência</text>
    <defs>
        <marker id="arrowhead-freq" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6B7280"/>
        </marker>
    </defs>
    <line x1="175" y1="160" x2="175" y2="115" stroke="#6B7280" stroke-width="3" marker-end="url(#arrowhead-freq)"/>
</svg>`;

const mat4TrigCircleSvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    /* Default (light mode) styles */
    .circle { fill: none; stroke: #1E88E5; stroke-width: 2; }
    .axis, .projection { stroke: #888; stroke-width: 1px; }
    .txt, .label { font-family: 'Arial', sans-serif; }
    .txt { font-size: 14px; fill: #333; }
    .label { font-size: 16px; font-weight: bold; fill: #111; }
    .radius { stroke: #4CAF50; stroke-width: 2; }
    .dot { fill: #E91E63; }
    .angle-arc { fill: none; stroke: #FF9800; stroke-width: 1.5px; }

    /* Dark mode styles */
    @media (prefers-color-scheme: dark) {
      .axis, .projection { stroke: #777; }
      .txt { fill: #ccc; }
      .label { fill: #eee; }
    }
  </style>
  <g transform="translate(175,100)">
    <!-- Title -->
    <text x="0" y="-95" text-anchor="middle" class="label">Círculo Trigonométrico</text>
    
    <!-- Circle and Axes -->
    <circle cx="0" cy="0" r="80" class="circle"/>
    <line x1="-90" y1="0" x2="90" y2="0" class="axis"/>
    <line x1="0" y1="-90" x2="0" y2="90" class="axis"/>
    <text x="95" y="5" class="txt">cos</text>
    <text x="5" y="-85" class="txt">sen</text>

    <!-- Point P at 30 degrees -->
    <line x1="0" y1="0" x2="69.28" y2="-40" class="radius"/>
    <circle cx="69.28" cy="-40" r="4" class="dot"/>
    
    <!-- Projections -->
    <line x1="69.28" y1="-40" x2="69.28" y2="0" class="projection" stroke-dasharray="2,2"/>
    <line x1="0" y1="-40" x2="69.28" y2="-40" class="projection" stroke-dasharray="2,2"/>
    
    <!-- Angle Arc and Label -->
    <path d="M 20 0 A 20 20 0 0 1 17.32 -10" class="angle-arc"/>
    <text x="22" y="-5" class="txt">θ</text>
    
    <!-- Projection Labels -->
    <text x="30" y="15" class="txt" fill="#4CAF50">cos(θ)</text>
    <text x="-40" y="-40" class="txt" fill="#4CAF50">sen(θ)</text>
  </g>
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

const fisHeatingCurveSvg = `<svg viewBox="0 0 350 220" xmlns="http://www.w3.org/2000/svg">
  <style>
    /* Default (light mode) styles */
    .axis { stroke: #333; stroke-width: 1.5px; marker-end: url(#arrow-light); }
    .label { font-family: 'Arial', sans-serif; font-size: 14px; fill: #1E88E5; font-weight: bold; }
    .txt { font-family: 'Arial', sans-serif; font-size: 12px; fill: #444; }
    .formula-txt { font-family: 'Georgia', serif; font-size: 13px; font-weight: bold; fill: #E91E63; }
    .graph-line { stroke: #E91E63; stroke-width: 3px; fill: none; }
    .guide-line { stroke: #888; stroke-width: 1px; stroke-dasharray: 2,2; }
    
    /* Dark mode styles */
    @media (prefers-color-scheme: dark) {
      .axis { stroke: #ccc; marker-end: url(#arrow-dark); }
      .label { fill: #64B5F6; }
      .txt { fill: #bbb; }
      .formula-txt { fill: #F06292; }
      .graph-line { stroke: #F06292; }
      .guide-line { stroke: #666; }
    }
  </style>
  <defs>
    <marker id="arrow-light" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#333"/></marker>
    <marker id="arrow-dark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ccc"/></marker>
  </defs>
  
  <text x="175" y="20" text-anchor="middle" class="label" font-size="18">Curva de Aquecimento da Água</text>
  
  <g transform="translate(50, 200) scale(1, -1)">
    <!-- Axes -->
    <line x1="0" y1="0" x2="290" y2="0" class="axis" />
    <text x="280" y="15" text-anchor="middle" class="txt" transform="scale(1, -1)">Calor Adicionado (Q)</text>
    <line x1="0" y1="0" x2="0" y2="160" class="axis" />
    <text x="-35" y="-150" text-anchor="middle" class="txt" transform="scale(1, -1) rotate(90)">Temp (°C)</text>

    <!-- Graph Path -->
    <!-- Gelo -> 0°C | Fusão | Água -> 100°C | Ebulição | Vapor -->
    <path class="graph-line" d="M 0 20 L 30 20 L 90 60 L 170 60 L 230 120 L 280 120" />
    
    <!-- Guide Lines & Labels -->
    <line x1="0" y1="20" x2="30" y2="20" class="guide-line"/>
    <text x="-20" y="-20" text-anchor="middle" class="txt" transform="scale(1, -1)">0°C</text>
    <line x1="0" y1="60" x2="170" y2="60" class="guide-line"/>
    <text x="-25" y="-60" text-anchor="middle" class="txt" transform="scale(1, -1)">100°C</text>
    
    <!-- Phase/State Labels -->
    <text x="45" y="-25" text-anchor="middle" class="label" transform="scale(1,-1)">Sólido</text>
    <text x="130" y="-65" text-anchor="middle" class="label" transform="scale(1,-1)">Líquido</text>
    <text x="255" y="-125" text-anchor="middle" class="label" transform="scale(1,-1)">Vapor</text>
    
    <!-- Formula Labels -->
    <g transform="rotate(45 60 40) scale(1, -1)">
       <text x="60" y="-35" text-anchor="middle" class="formula-txt">Q=mcΔT</text>
    </g>
    <g transform="rotate(0 130 20) scale(1, -1)">
       <text x="130" y="-15" text-anchor="middle" class="formula-txt">Fusão (Q=mL)</text>
    </g>
    <g transform="rotate(45 200 90) scale(1, -1)">
       <text x="200" y="-85" text-anchor="middle" class="formula-txt">Q=mcΔT</text>
    </g>
     <g transform="rotate(0 225 120) scale(1, -1)">
       <text x="255" y="-115" text-anchor="middle" class="formula-txt">Ebulição (Q=mL)</text>
    </g>
  </g>
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

const fis4PhenomenaSvg = `<svg viewBox="0 0 350 180" xmlns="http://www.w3.org/2000/svg">
  <style>
    .txt { font-family: 'Arial', sans-serif; font-size: 14px; font-weight: bold; }
    .wave { stroke-width: 2; fill: none; }
    .barrier { stroke-width: 3; }
    .interface { stroke-width: 1.5; stroke-dasharray: 4 2; }
    .light-mode { display: block; }
    .dark-mode { display: none; }
    @media (prefers-color-scheme: dark) {
      .light-mode { display: none; }
      .dark-mode { display: block; }
    }
  </style>
  <!-- Light Mode Colors -->
  <defs class="light-mode">
    <style>
      .txt { fill: #333; } .wave { stroke: #1E88E5; } .barrier { stroke: #555; } .interface { stroke: #777; }
    </style>
    <marker id="arrow-light" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1E88E5"/></marker>
  </defs>
  <!-- Dark Mode Colors -->
  <defs class="dark-mode">
    <style>
      .txt { fill: #eee; } .wave { stroke: #64B5F6; } .barrier { stroke: #aaa; } .interface { stroke: #888; }
    </style>
    <marker id="arrow-dark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64B5F6"/></marker>
  </defs>

  <!-- Reflection -->
  <g>
    <text x="55" y="35" text-anchor="middle" class="txt">Reflexão</text>
    <path d="M10 110 L100 110" class="barrier"/>
    <path d="M30 50 L65 110" class="wave light-mode" marker-end="url(#arrow-light)"/>
    <path d="M30 50 L65 110" class="wave dark-mode" marker-end="url(#arrow-dark)"/>
    <path d="M65 110 L100 50" class="wave light-mode" marker-end="url(#arrow-light)"/>
    <path d="M65 110 L100 50" class="wave dark-mode" marker-end="url(#arrow-dark)"/>
  </g>
  
  <!-- Refraction -->
  <g>
    <text x="175" y="35" text-anchor="middle" class="txt">Refração</text>
    <path d="M125 80 L225 80" class="interface"/>
    <path d="M145 50 L175 80" class="wave light-mode" marker-end="url(#arrow-light)"/>
    <path d="M145 50 L175 80" class="wave dark-mode" marker-end="url(#arrow-dark)"/>
    <path d="M175 80 L195 120" class="wave light-mode" marker-end="url(#arrow-light)"/>
    <path d="M175 80 L195 120" class="wave dark-mode" marker-end="url(#arrow-dark)"/>
    <text x="145" y="70" class="txt" font-size="12">Meio 1</text>
    <text x="195" y="95" class="txt" font-size="12">Meio 2</text>
  </g>

  <!-- Diffraction -->
  <g>
    <text x="290" y="35" text-anchor="middle" class="txt">Difração</text>
    <path d="M270 50 V 85 M270 95 V 130" class="barrier"/>
    <path d="M240 70 h 30" class="wave"/>
    <path d="M240 90 h 30" class="wave"/>
    <path d="M240 110 h 30" class="wave"/>
    <path d="M270 90 a 20 20 0 0 1 0 -0.01" class="wave" transform="rotate(270 270 90)"/>
    <path d="M270 90 a 40 40 0 0 1 0 -0.01" class="wave" transform="rotate(270 270 90)"/>
    <path d="M270 90 a 60 60 0 0 1 0 -0.01" class="wave" transform="rotate(270 270 90)"/>
  </g>
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

const fisCircuitSeriesParallel = `<svg viewBox="0 0 170 120" xmlns="http://www.w3.org/2000/svg">
    <style>
        .cheatsheet-text-label { font-family: 'Arial', sans-serif; font-size: 16px; fill: hsl(var(--muted-foreground)); font-weight: 600; }
        .cheatsheet-text-resistor { font-family: 'Arial', sans-serif; font-size: 14px; fill: hsl(var(--muted-foreground)); }
    </style>
    <defs>
        <marker id="cheatsheet_arrow_current" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--primary))" />
        </marker>
    </defs>
    <!-- Série -->
    <text x="10" y="20" class="cheatsheet-text-label">Série</text>
    <path d="M10 35 H40" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="40" y="32" width="35" height="6" class="stroke-currentColor fill-background" strokeWidth="1"/>
    <text x="57" y="28" textAnchor="middle" class="cheatsheet-text-resistor">R₁</text>
    <path d="M75 35 H105" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="105" y="32" width="35" height="6" class="stroke-currentColor fill-background" strokeWidth="1"/>
    <text x="122" y="28" textAnchor="middle" class="cheatsheet-text-resistor">R₂</text>
    <path d="M140 35 H160" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    
    <!-- Paralelo -->
    <text x="10" y="65" class="cheatsheet-text-label">Paralelo</text>
    <path d="M30 90 H35 M35 90 V70 M35 90 V110" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M145 70 V90 M145 110 V90 M145 90 H150" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <!-- Branch 1 -->
    <path d="M35 70 H60" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="60" y="67" width="35" height="6" class="stroke-currentColor fill-background" strokeWidth="1"/>
    <text x="77" y="63" textAnchor="middle" class="cheatsheet-text-resistor">R₁</text>
    <path d="M95 70 H145" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <!-- Branch 2 -->
    <path d="M35 110 H60" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="60" y="107" width="35" height="6" class="stroke-currentColor fill-background" strokeWidth="1"/>
    <text x="77" y="103" textAnchor="middle" class="cheatsheet-text-resistor">R₂</text>
    <path d="M95 110 H145" stroke="currentColor" strokeWidth="1.5" fill="none"/>
</svg>`;

const fisWaveOpticsSvg = `<svg viewBox="0 0 170 120" xmlns="http://www.w3.org/2000/svg">
    <style>
        .cheatsheet-text-small { font-family: 'Arial', sans-serif; font-size: 14px; fill: hsl(var(--muted-foreground)); }
        .cheatsheet-wave-path { stroke: hsl(var(--primary)); }
        .cheatsheet-ray-path { stroke: hsl(var(--primary)); }
        .cheatsheet-normal-line { stroke: hsl(var(--border)); stroke-dasharray: 2 2; }
        .cheatsheet-interface-line { stroke: hsl(var(--border)); }
    </style>
    <defs>
        <marker id="cheatsheet_arrow_optics" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" class="fill-primary" />
        </marker>
    </defs>
    <!-- Ondulatória -->
    <path d="M5 20 H80" class="cheatsheet-interface-line" strokeWidth="0.5"/>
    <path d="M5 20 Q 25 5, 45 20 T 75 20" class="cheatsheet-wave-path" strokeWidth="1.5" fill="none"/>
    <path d="M25 12.5 V 20" class="cheatsheet-normal-line" strokeWidth="0.5"/>
    <text x="27" y="18" class="cheatsheet-text-small">A</text>
    <path d="M5 25 H 75" class="cheatsheet-normal-line" strokeWidth="0.5"/>
    <path d="M5 23 V 27" class="cheatsheet-normal-line" strokeWidth="0.5"/>
    <path d="M75 23 V 27" class="cheatsheet-normal-line" strokeWidth="0.5"/>
    <text x="40" y="35" textAnchor="middle" class="cheatsheet-text-small">λ</text>
    
    <!-- Óptica (Refração) -->
    <path d="M90 30 H160" class="cheatsheet-interface-line" strokeWidth="1"/>
    <text x="95" y="25" class="cheatsheet-text-small">n₁</text>
    <text x="95" y="40" class="cheatsheet-text-small">n₂</text>
    <path d="M120 5 V 55" class="cheatsheet-normal-line" strokeDasharray="2 2" strokeWidth="1"/>
    <path d="M100 10 L120 30 L135 55" class="cheatsheet-ray-path" strokeWidth="1.5" fill="none" markerEnd="url(#cheatsheet_arrow_optics)"/>
    <path d="M120 30 A 10 10 0 0 0 113.4 21.7" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
    <text x="115" y="24" class="cheatsheet-text-small">θ₁</text>
    <path d="M120 30 A 8 8 0 0 1 124 37.5" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
    <text x="128" y="38" class="cheatsheet-text-small">θ₂</text>
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
    <line x1="10" y1="60" x2="40" y1="60" class="bond"/>

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

const qui0AtomicModelSvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .nucleus{fill:#E53935; stroke:#B71C1C; stroke-width:2;}
    .electron{fill:#1E88E5; stroke:#0D47A1; stroke-width:1.5;}
    .orbit{fill:none;stroke:#4CAF50;stroke-width:1;stroke-dasharray:3,3;}
    .txt{font-family: 'Arial', sans-serif; font-size: 16px; fill: #222;}
    .label{font-size: 18px; font-weight: bold; fill: #333;}
  </style>
  <g transform="translate(175,100)">
    <circle cx="0" cy="0" r="20" class="nucleus"/>
    <text x="0" y="5" text-anchor="middle" class="txt" style="fill:#fff;">+</text>
    <text x="0" y="-10" text-anchor="middle" class="txt" style="fill:#fff; font-size:12px;">Prótons</text>

    <circle cx="50" cy="-50" r="8" class="electron"/>
    <circle cx="-50" cy="50" r="8" class="electron"/>
    <path d="M 0 0 A 70 70 0 0 1 50 -50" class="orbit"/>
    <path d="M 0 0 A 70 70 0 0 0 -50 50" class="orbit"/>
    
    <text x="50" y="-60" class="txt">Elétron</text>
    <text x="0" y="-90" text-anchor="middle" class="label">Modelo Atômico (Rutherford-Bohr)</text>
  </g>
</svg>`;

const qui4IsomeriaCisTransSvg = `<svg viewBox="0 0 130 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20 H40" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 20 L5 5" stroke="currentColor" strokeWidth="1" />
    <path d="M40 20 L55 35" stroke="currentColor" strokeWidth="1" />
    <text x="0" y="35" class="text-[14px] fill-muted-foreground">Cis</text>
    <path d="M90 20 H110" stroke="currentColor" strokeWidth="1.5" />
    <path d="M90 20 L75 5" stroke="currentColor" strokeWidth="1" />
    <path d="M110 20 L125 5" stroke="currentColor" strokeWidth="1" />
    <text x="70" y="35" class="text-[14px] fill-muted-foreground">Trans</text>
</svg>`;


// ==============================================================================
// TOPICS Data
// ==============================================================================
export const topics: Topic[] = [
  // MATEMÁTICA
  {
    id: 'mat-1',
    name: 'Funções e Logaritmos',
    discipline: 'Matemática',
    svg: svgToDataUri(mat1FuncDiagramSvg),
    summary: `
    <h3>Funções de Primeiro Grau (Funções Afim)</h3>
    <p>Uma função de primeiro grau é definida por <strong class="text-blue-600 dark:text-blue-400">f(x) = ax + b</strong>, onde <strong>a ≠ 0</strong>. Seu gráfico é uma linha reta.</p>
    <ul>
      <li><strong>a:</strong> coeficiente angular (inclinação da reta). Se a > 0, a função é crescente; se a < 0, é decrescente.</li>
      <li><strong>b:</strong> coeficiente linear (onde a reta intercepta o eixo y).</li>
    </ul>
    <img src="${svgToDataUri(mat1FuncDiagramSvg)}" alt="Diagrama de Função">
    <p><strong>Exemplo:</strong> A função f(x) = 2x + 1 tem a=2 (crescente) e b=1 (intercepta y em 1).</p>
    <p><strong>Dica detalhada:</strong> A função afim ${formatFormulaForSummary('f(x)=ax+b')} é essencial para modelar situações lineares, como custo total em relação à quantidade produzida (custo fixo 'b' e custo variável 'a' por unidade). O coeficiente 'a' indica a taxa de variação da função, ou seja, o quanto 'y' muda para cada unidade que 'x' varia. Um 'a' positivo significa uma função crescente, enquanto um 'a' negativo indica uma função decrescente. O 'b' representa o valor inicial ou o ponto de interceptação com o eixo y quando x=0.</p>

    <h3>Funções de Segundo Grau (Funções Quadráticas)</h3>
    <p>Uma função de segundo grau é definida por <strong class="text-orange-600 dark:text-orange-400">f(x) = ax² + bx + c</strong>, onde <strong>a ≠ 0</strong>. Seu gráfico é uma parábola.</p>
    <ul>
      <li><strong>a:</strong> determina a concavidade. Se a > 0, concavidade para cima; se a < 0, para baixo.</li>
      <li><strong>Raízes (zeros da função):</strong> valores de x para os quais f(x) = 0. Encontradas pela fórmula de Bhaskara: ${formatFormulaForSummary('x = [-b ± sqrt(Δ)] / 2a')}, onde ${formatFormulaForSummary('Δ = b² - 4ac')}.</li>
      <li><strong>Vértice:</strong> ponto de máximo ou mínimo da parábola. Coordenadas: ${formatFormulaForSummary('Xv = -b/2a')} e ${formatFormulaForSummary('Yv = -Δ/4a')}.</li>
    </ul>
    <img src="${svgToDataUri(mat1ParabolaSvg)}" alt="Gráfico de Parábola">
    <p><strong>Exemplo:</strong> f(x) = x² - 4x + 3. Raízes 1 e 3, vértice (2, -1).</p>
    <p><strong>Dica detalhada:</strong> A fórmula de Bhaskara ${formatFormulaForSummary('x = (-b ± √(Δ)) / 2a')} com ${formatFormulaForSummary('Δ = b² - 4ac')} é universal para achar as raízes de ${formatFormulaForSummary('ax² + bx + c = 0')}. O ${formatFormulaForSummary('Xv = -b/2a')} é o ponto médio entre as raízes e ${formatFormulaForSummary('Yv = -Δ/4a')} é o valor da função nesse ponto. Usado para determinar o preço que maximiza o lucro, a altura máxima de um projétil ou a dimensão de um terreno que minimiza o custo de cercá-lo.</p>

    <h3>Funções Exponenciais e Logarítmicas</h3>
    <p><strong>Função Exponencial:</strong> ${formatFormulaForSummary('f(x) = aˣ')}, com a > 0 e a ≠ 1. Usada para modelar crescimentos (a > 1) ou decaimentos (0 < a < 1) rápidos, como populações ou juros compostos.</p>
    <p><strong>Função Logarítmica:</strong> ${formatFormulaForSummary('f(x) = logₐ(x)')}, com a > 0 e a ≠ 1. É a inversa da função exponencial. ${formatFormulaForSummary('logₐ(b) = x')} significa que ${formatFormulaForSummary('aˣ = b')}.</p>
    <ul>
      <li><strong>Propriedades:</strong> log(A·B) = log A + log B; log(A/B) = log A - log B; log(Aⁿ) = n · log A.</li>
    </ul>
    <p><strong>Dica detalhada:</strong> A escala Richter é logarítmica de base 10. A diferença de magnitude entre dois terremotos (M₂ - M₁) se relaciona com a razão de suas intensidades I₂/I₁ pela fórmula ${formatFormulaForSummary('I₂/I₁ = 10^(M₂ - M₁)')}. Para um terremoto de magnitude 7 e outro de magnitude 5, a diferença é 2, então 10² = 100 vezes mais intenso.</p>
    `,
  },
  {
    id: 'mat-2',
    name: 'Geometria Plana e Espacial',
    discipline: 'Matemática',
    svg: svgToDataUri(mat2PythagorasSvg),
    summary: `
    <h3>Geometria Plana</h3>
    <p>Estuda figuras bidimensionais. Conceitos importantes:</p>
    <ul>
      <li><strong>Áreas de figuras planas:</strong>
        <ul>
          <li><strong>Retângulo:</strong> Base × Altura</li>
          <li><strong>Triângulo:</strong> ${formatFormulaForSummary('A = (Base × Altura) / 2')}</li>
          <li><strong>Círculo:</strong> ${formatFormulaForSummary('A = π × Raio²')}</li>
        </ul>
      </li>
      <li><strong>Teorema de Pitágoras:</strong> Em um triângulo retângulo, a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa. ${formatFormulaForSummary('a² = b² + c²')}.</li>
    </ul>
    <img src="${svgToDataUri(mat2PythagorasSvg)}" alt="Teorema de Pitágoras">
    <p><strong>Dica detalhada para Teorema de Pitágoras:</strong> A fórmula ${formatFormulaForSummary('a² = b² + c²')} é fundamental. Ela se aplica estritamente a triângulos retângulos, onde 'a' é a hipotenusa (o lado oposto ao ângulo reto) e 'b' e 'c' são os catetos. É uma ferramenta essencial para calcular distâncias em planos cartesianos e resolver problemas envolvendo qualquer tipo de figura que possa ser decomposta em triângulos retângulos. Ex: um triângulo retângulo tem catetos medindo 3 cm e 4 cm. A hipotenusa 'a' será √25 = 5 cm.</p>

    <h3>Geometria Espacial</h3>
    <p>Estuda figuras tridimensionais (sólidos). Conceitos importantes:</p>
    <ul>
      <li><strong>Volumes de sólidos:</strong>
        <ul>
          <li><strong>Cubo:</strong> Lado³</li>
          <li><strong>Paralelepípedo:</strong> Comprimento × Largura × Altura</li>
          <li><strong>Prismas e Cilindros:</strong> ${formatFormulaForSummary('V = Área da Base × Altura')}</li>
          <li><strong>Pirâmides e Cones:</strong> ${formatFormulaForSummary('V = (1/3) × Área da Base × Altura')}</li>
          <li><strong>Esfera:</strong> ${formatFormulaForSummary('V = (4/3) × π × Raio³')}</li>
        </ul>
      </li>
      <li><strong>Relações métricas:</strong> como calcular diagonais de um cubo (${formatFormulaForSummary('D = a√3')}, onde a é a aresta).</li>
    </ul>
    <img src="${svgToDataUri(mat2CylinderSvg)}" alt="Cilindro">
    <p><strong>Dica detalhada para Volume de Cilindros:</strong> A fórmula ${formatFormulaForSummary('V = A_base · h')} (onde ${formatFormulaForSummary('A_base = πr²')} para cilindros) é baseada no Princípio de Cavalieri. Imagine "empilhar" a área da base até atingir a altura 'h'. Para um cilindro circular reto com raio da base R = 5 cm e altura h = 10 cm, o volume seria V = π * (5)² * 10 = 250π cm³. Usando π ≈ 3,14, temos V = 785 cm³.</p>
    <p><strong>Dica detalhada para Volume de Pirâmides e Cones:</strong> O fator 1/3 em ${formatFormulaForSummary('V = (1/3) · A_base · h')} é provado por cálculo integral e demonstra que o volume do cone/pirâmide é um terço do volume do cilindro/prisma que o circunscreve. Cenário: Calcular o volume de uma casquinha de sorvete ou de uma ampulheta.</p>
    <p><strong>Dica detalhada para Diagonal do Cubo:</strong> Em um cubo de aresta "a", o comprimento da diagonal do cubo é ${formatFormulaForSummary('D = a√3')}. Primeiro, calcula-se a diagonal da base (d_base) usando Pitágoras: d_base² = a² + a² = 2a². d_base = a√2. Depois, usa-se Pitágoras novamente com a diagonal da base, uma aresta vertical e a diagonal do cubo (D_cubo). D_cubo² = (d_base)² + a² = (a√2)² + a² = 3a². Portanto, D_cubo = a√3.</p>

    <h3>Geometria Analítica</h3>
    <ul>
        <li><strong>Distância entre pontos:</strong> ${formatFormulaForSummary('d = √((x₂-x₁)² + (y₂-y₁)²)')}</li>
        <li><strong>Equação da Reta:</strong> ${formatFormulaForSummary('y = mx + q')} (onde 'm' é o coeficiente angular e 'q' o linear).</li>
    </ul>
    `,
  },
  {
    id: 'mat-3',
    name: 'Estatística e Probabilidade',
    discipline: 'Matemática',
    svg: svgToDataUri(mat3StatsGraphSvg),
    summary: `
    <h3>Estatística: Análise de Dados</h3>
    <p>Estuda a coleta, organização, análise, interpretação e apresentação de dados.</p>
    <ul>
        <li><strong>Medidas de Tendência Central:</strong>
            <ul>
                <li><strong>Média Aritmética:</strong> Soma de todos os valores dividida pelo número de valores.</li>
                <li><strong>Mediana:</strong> Valor central de um conjunto de dados ordenado. Se o número de dados for par, é a média dos dois valores centrais.</li>
                <li><strong>Moda:</strong> Valor que aparece com maior frequência no conjunto de dados.</li>
            </ul>
        </li>
        <li><strong>Medidas de Dispersão:</strong>
            <ul>
                <li><strong>Amplitude:</strong> Diferença entre o maior e o menor valor.</li>
                <li><strong>Variância e Desvio Padrão:</strong> Medem o quão dispersos os dados estão em relação à média.</li>
            </ul>
        </li>
    </ul>
    <img src="${svgToDataUri(mat3StatsGraphSvg)}" alt="Histograma de Frequência">
    <p><strong>ENEM (Ênfase):</strong> Alta (Análise crítica de dados, interpretação de pesquisas e cenários de incerteza). A prova valoriza a capacidade de extrair informações e tomar decisões com base em dados apresentados em gráficos e tabelas.</p>
    <p><strong>FUVEST/Provão Paulista (Ênfase):</strong> Média/Alta (Análise Combinatória robusta e problemas de probabilidade mais teóricos). Podem exigir um entendimento mais aprofundado das fórmulas de variância e desvio padrão.</p>

    <h3>Probabilidade: Estudo do Acaso</h3>
    <p>Mede a chance de um evento ocorrer.</p>
    <ul>
        <li><strong>Cálculo Clássico:</strong> ${formatFormulaForSummary('P(E) = (Número de Casos Favoráveis) / (Número Total de Casos Possíveis)')}.</li>
        <li><strong>União de Eventos:</strong> ${formatFormulaForSummary('P(A U B) = P(A) + P(B) - P(A ∩ B)')}.</li>
        <li><strong>Eventos Independentes:</strong> ${formatFormulaForSummary('P(A ∩ B) = P(A) · P(B)')}.</li>
        <li><strong>Probabilidade Condicional:</strong> ${formatFormulaForSummary('P(A|B) = P(A ∩ B) / P(B)')} (Probabilidade de A dado que B ocorreu).</li>
    </ul>
    <h3>Análise Combinatória: Contagem</h3>
    <p>Estuda métodos para contar o número de possibilidades de um evento.</p>
    <ul>
        <li><strong>Princípio Fundamental da Contagem (PFC):</strong> Se um evento pode ocorrer de 'm' maneiras e um segundo evento de 'n' maneiras, então os dois eventos podem ocorrer de 'm × n' maneiras.</li>
        <li><strong>Permutação (Pₙ):</strong> Número de maneiras de ordenar 'n' objetos distintos. ${formatFormulaForSummary('Pₙ = n!')}.</li>
        <li><strong>Arranjo (Aⁿₚ):</strong> Número de maneiras de escolher 'p' objetos de 'n' e ordená-los. A ordem importa. ${formatFormulaForSummary('Aⁿₚ = n! / (n-p)!')}.</li>
        <li><strong>Combinação (Cⁿₚ):</strong> Número de maneiras de escolher 'p' objetos de 'n' sem se preocupar com a ordem. ${formatFormulaForSummary('Cⁿₚ = n! / (p! · (n-p)!)')}.</li>
    </ul>
    <p><strong>Exemplo:</strong> Num grupo, 60% são homens, 10% deles são vegetarianos. 40% são mulheres, 5% delas são vegetarianas. Qual a probabilidade de um vegetariano ser homem?</p>
    <p><strong>Cálculo:</strong> P(H) = 0.6, P(V|H) = 0.1 => P(V ∩ H) = 0.6 * 0.1 = 0.06.</p>
    <p>P(M) = 0.4, P(V|M) = 0.05 => P(V ∩ M) = 0.4 * 0.05 = 0.02.</p>
    <p>P(V) = P(V ∩ H) + P(V ∩ M) = 0.06 + 0.02 = 0.08.</p>
    <p>P(H|V) = P(V ∩ H) / P(V) = 0.06 / 0.08 = 0.75 ou ${formatFormulaForSummary('75%')}.</p>
    `,
  },
  {
    id: 'mat-4',
    name: 'Trigonometria',
    discipline: 'Matemática',
    svg: svgToDataUri(mat4TrigCircleSvg),
    summary: `
    <h3>Trigonometria no Triângulo Retângulo</h3>
    <p>Estuda as relações entre os ângulos e os lados de triângulos.</p>
    <ul>
        <li><strong>Seno (sen):</strong> Cateto Oposto / Hipotenusa</li>
        <li><strong>Cosseno (cos):</strong> Cateto Adjacente / Hipotenusa</li>
        <li><strong>Tangente (tg):</strong> Cateto Oposto / Cateto Adjacente</li>
        <li><strong>Relação Fundamental:</strong> ${formatFormulaForSummary('sen²(x) + cos²(x) = 1')}</li>
    </ul>

    <h3>Círculo Trigonométrico</h3>
    <p>Um círculo de raio 1 centrado na origem, usado para estender as definições de seno, cosseno e tangente para todos os ângulos.</p>
    <img src="${svgToDataUri(mat4TrigCircleSvg)}" alt="Círculo Trigonométrico">
    <ul>
        <li><strong>Seno:</strong> Coordenada Y do ponto no círculo.</li>
        <li><strong>Cosseno:</strong> Coordenada X do ponto no círculo.</li>
        <li><strong>Tangente:</strong> Relação seno/cosseno.</li>
    </ul>

    <h3>Leis dos Senos e Cossenos (para qualquer triângulo)</h3>
    <p><strong>Lei dos Senos:</strong> Em qualquer triângulo, a razão entre o comprimento de um lado e o seno do ângulo oposto é constante.</p>
    <ul>
        <li>${formatFormulaForSummary('a/sen(A) = b/sen(B) = c/sen(C)')}</li>
    </ul>
    <p><strong>Dica detalhada para Lei dos Senos:</strong> É derivada da relação com o raio da circunferência que circunscreve o triângulo (${formatFormulaForSummary('a/sen(A) = 2R')}). Cenário: Usada em topografia para calcular distâncias inacessíveis, quando se conhece um lado do triângulo e dois ângulos.</p>

    <p><strong>Lei dos Cossenos:</strong> Em qualquer triângulo, o quadrado de um lado é igual à soma dos quadrados dos outros dois lados, menos o dobro do produto desses lados pelo cosseno do ângulo entre eles.</p>
    <ul>
        <li>${formatFormulaForSummary('a² = b² + c² - 2bc·cos(A)')}</li>
    </ul>
    <p><strong>Dica detalhada para Lei dos Cossenos:</strong> É a generalização do Teorema de Pitágoras para qualquer triângulo. Note que se A=90°, cos(A)=0, e a fórmula se reduz a a²=b²+c². Cenário: Calcular a distância entre dois pontos separados por um obstáculo, conhecendo a distância de um terceiro ponto a eles e o ângulo formado.</p>

    <h3>Funções, Equações e Inequações Trigonométricas</h3>
    <p>Estudo das funções seno, cosseno e tangente (e suas inversas) e como resolver equações e inequações envolvendo essas funções. Importante para análise de fenômenos periódicos como ondas e oscilações.</p>
    <p><strong>ENEM (Ênfase):</strong> Média (Foco na aplicação em problemas geométricos, como cálculo de distâncias inacessíveis). Ex: Uma pessoa a 50m da base de um prédio vê o topo sob um ângulo de 30°. Se tg(30°) ≈ 0,58, a altura do prédio é 50 * 0,58 = ${formatFormulaForSummary('29 m')}.</p>
    <p><strong>FUVEST/Provão Paulista (Ênfase):</strong> Alta (Exigência maior em manipulação de identidades, funções e equações trigonométricas). Ex: Se sen(x) = 1/3, cos(2x) = 1 - 2sen²(x) = 1 - 2(1/3)² = 1 - 2/9 = ${formatFormulaForSummary('7/9')}.</p>
    `,
  },
  // FÍSICA
  {
    id: 'fis-1',
    name: 'Cinemática e Dinâmica',
    discipline: 'Física',
    svg: svgToDataUri(fis1MruvGraphSvg),
    summary: `
    <h3>Cinemática: Estudo do Movimento</h3>
    <p>Descreve o movimento dos corpos sem se preocupar com suas causas.</p>
    <ul>
      <li><strong>Movimento Retilíneo Uniforme (MRU):</strong> Velocidade constante, aceleração nula. ${formatFormulaForSummary('S = S₀ + vt')} (função horária da posição).</li>
      <li><strong>Movimento Retilíneo Uniformemente Variado (MRUV):</strong> Aceleração constante e diferente de zero. A velocidade varia linearmente com o tempo.
        <ul>
          <li>${formatFormulaForSummary('v = v₀ + at')} (função horária da velocidade)</li>
          <li>${formatFormulaForSummary('S = S₀ + v₀t + (at²)/2')} (função horária da posição)</li>
          <li>${formatFormulaForSummary('v² = v₀² + 2aΔS')} (Equação de Torricelli)</li>
        </ul>
      </li>
    </ul>
    <img src="${svgToDataUri(fis1MruvGraphSvg)}" alt="Gráfico Vxt MRUV">
    <p><strong>Dica detalhada para MRUV:</strong> A função horária da posição ${formatFormulaForSummary('S = S₀ + v₀t + (at²)/2')} é derivada pela integração da função da velocidade em relação ao tempo. Cenário: Prever a posição de um carro que acelera ou freia, ou a altura de um objeto em queda livre após um certo tempo. A Equação de Torricelli ${formatFormulaForSummary('v² = v₀² + 2aΔS')} é obtida algebricamente ao isolar 't' na equação da velocidade e substituir na função da posição. Cenário: Calcular a velocidade de um objeto ao atingir o solo após cair de uma altura H, sem precisar saber o tempo de queda.</p>

    <h3>Dinâmica: Causas do Movimento</h3>
    <p>Estuda as relações entre forças e o movimento dos corpos (Leis de Newton).</p>
    <ul>
      <li><strong>Primeira Lei de Newton (Inércia):</strong> Um corpo em repouso tende a permanecer em repouso, e um corpo em movimento tende a permanecer em movimento com velocidade constante, a menos que uma força externa atue sobre ele.</li>
      <li><strong>Segunda Lei de Newton (Princípio Fundamental da Dinâmica):</strong> A força resultante que atua sobre um corpo é igual ao produto de sua massa pela aceleração. ${formatFormulaForSummary('F_R = m · a')}.</li>
      <li><strong>Terceira Lei de Newton (Ação e Reação):</strong> Para toda ação, existe uma reação de igual intensidade, mesma direção e sentido contrário.</li>
      <li><strong>Forças Comuns:</strong> Peso (${formatFormulaForSummary('P=mg')}), Normal, Tração, Atrito (${formatFormulaForSummary('F_at = μ·N')}).</li>
    </ul>
    <img src="${svgToDataUri(fis2BlockSvg)}" alt="Forças em um Bloco">
    <p><strong>Dica detalhada para Segunda Lei de Newton:</strong> A fórmula ${formatFormulaForSummary('F_R = m · a')} é a própria definição de Força. Ela não é derivada, é um princípio fundamental da natureza. Cenário: Calcular a aceleração de um bloco ao ser empurrado, considerando a força aplicada e a força de atrito contrária. A F_R é a diferença entre elas. Ex: Um bloco de 10kg é puxado por uma força de 30N que faz 37° com a horizontal (cos37°=0,8). A força horizontal é Fx = 30 * cos(37°) = 30 * 0.8 = 24N. Se não houver atrito, a aceleração será a = Fx/m = 24N/10kg = ${formatFormulaForSummary('2,4 m/s²')}.</p>
    
    <h3>Trabalho e Energia</h3>
    <ul>
      <li><strong>Trabalho de uma força constante:</strong> ${formatFormulaForSummary('W = F · d · cos(θ)')}. Deriva do produto escalar entre os vetores Força e Deslocamento.</li>
      <li><strong>Energia Cinética (E_c):</strong> ${formatFormulaForSummary('E_c = (mv²)/2')}.</li>
      <li><strong>Energia Potencial Gravitacional (E_pg):</strong> ${formatFormulaForSummary('E_pg = mgh')}.</li>
      <li><strong>Energia Potencial Elástica (E_pe):</strong> ${formatFormulaForSummary('E_pe = (kx²)/2')}.</li>
      <li><strong>Energia Mecânica (E_mec):</strong> ${formatFormulaForSummary('E_mec = E_c + E_p')}. Em sistemas sem atrito, a energia mecânica se conserva.</li>
    </ul>
    <p><strong>Dica detalhada para Energia Mecânica:</strong> O Princípio da Conservação da Energia afirma que em sistemas sem atrito, a energia total não se cria nem se perde, apenas se transforma. Cenário: Numa montanha-russa, no ponto mais alto, a energia é quase toda potencial. Ao descer, ela se converte em cinética (velocidade). Um objeto cai de uma altura de 20m. Qual sua velocidade ao atingir o solo? (g=10m/s²). E_pg = E_c -> mgh = mv²/2 -> v = √(2gh) = √(2*10*20) = √400 = ${formatFormulaForSummary('20 m/s')}.</p>

    <h3>Impulso e Quantidade de Movimento</h3>
    <ul>
      <li><strong>Impulso (I):</strong> ${formatFormulaForSummary('I = F · Δt')}.</li>
      <li><strong>Quantidade de Movimento (Q):</strong> ${formatFormulaForSummary('Q = m · v')}.</li>
      <li><strong>Teorema do Impulso:</strong> Impulso = Variação da Quantidade de Movimento (${formatFormulaForSummary('I = ΔQ')}).</li>
      <li><strong>Conservação da Quantidade de Movimento:</strong> Em sistemas isolados (sem forças externas), a quantidade de movimento total se conserva, especialmente em colisões.</li>
    </ul>
    `,
  },
  {
    id: 'fis-2',
    name: 'Hidrostática e Termodinâmica',
    discipline: 'Física',
    svg: svgToDataUri(fis2BlockSvg), // Reutilizando um SVG genérico
    summary: `
    <h3>Hidrostática: Fluidos em Repouso</h3>
    <p>Estuda fluidos em repouso.</p>
    <ul>
      <li><strong>Pressão (P):</strong> Força por unidade de área. ${formatFormulaForSummary('P = F/A')}. Unidade no SI: Pascal (Pa).</li>
      <li><strong>Pressão Hidrostática:</strong> Pressão exercida por uma coluna de líquido. ${formatFormulaForSummary('P = ρgh')} (onde ρ=densidade, g=gravidade, h=altura).</li>
      <li><strong>Princípio de Pascal:</strong> A pressão aplicada a um fluido confinado e incompressível é transmitida integralmente a todos os pontos do fluido e às paredes do recipiente. Base para elevadores hidráulicos.</li>
      <li><strong>Princípio de Arquimedes (Empuxo):</strong> Um corpo total ou parcialmente imerso em um fluido recebe um empuxo (força vertical para cima) igual ao peso do volume de fluido deslocado. ${formatFormulaForSummary('E = ρ_fluido · V_submerso · g')}.</li>
    </ul>
    <p><strong>Dica detalhada para Empuxo:</strong> Um corpo de 5 kg está totalmente submerso em água (densidade = 1000 kg/m³). Se o volume do corpo é de 0,002 m³, a intensidade do empuxo é E = 1000 kg/m³ * 0,002 m³ * 10 m/s² = 20 N. Esse valor é a força que o fluido exerce para "empurrar" o objeto para cima.</p>

    <h3>Termologia: Estudo do Calor</h3>
    <p>Estuda os fenômenos relacionados ao calor e à temperatura.</p>
    <ul>
        <li><strong>Temperatura:</strong> Medida do grau de agitação térmica das moléculas. Escalas: Celsius, Fahrenheit, Kelvin. ${formatFormulaForSummary('Tk = Tc + 273')}.</li>
        <li><strong>Calor:</strong> Energia térmica em trânsito devido a uma diferença de temperatura.
            <ul>
                <li><strong>Calor Sensível:</strong> Altera a temperatura sem mudar o estado físico. ${formatFormulaForSummary('Q = mcΔT')}.</li>
                <li><strong>Calor Latente:</strong> Altera o estado físico sem mudar a temperatura. ${formatFormulaForSummary('Q = mL')}.</li>
            </ul>
        </li>
    </ul>
    <img src="${svgToDataUri(fisHeatingCurveSvg)}" alt="Curva de Aquecimento da Água">
    <p><strong>Dica detalhada para Calor Sensível:</strong> A fórmula ${formatFormulaForSummary('Q = mcΔT')} é a definição de calor específico (c). Não é uma fórmula derivada, mas uma relação fundamental da calorimetria. Cenário: Calcular quanta energia é preciso fornecer para aquecer a água para o café. Você precisa saber a massa de água, seu calor específico e a variação de temperatura desejada.</p>
    <p><strong>Dica detalhada para Calor Latente:</strong> A fórmula ${formatFormulaForSummary('Q = mL')} é a definição de calor latente (L). A energia é usada para quebrar as forças intermoleculares, não para aumentar a temperatura. Cenário: Calcular a energia necessária para derreter uma barra de gelo. A temperatura do sistema permanecerá em 0°C até que todo o gelo tenha derretido.</p>

    <h3>Termodinâmica: Relação Calor-Trabalho</h3>
    <p>Estuda as relações entre calor, trabalho e outras formas de energia.</p>
    <ul>
      <li><strong>Primeira Lei da Termodinâmica:</strong> A variação da energia interna (ΔU) de um sistema é igual à diferença entre o calor (Q) trocado com o ambiente e o trabalho (W) realizado pelo sistema. ${formatFormulaForSummary('ΔU = Q - W')}.</li>
      <li><strong>Ciclos Termodinâmicos:</strong> Máquinas térmicas (motores, refrigeradores) operam em ciclos, convertendo calor em trabalho.</li>
    </ul>
    <p><strong>ENEM (Ênfase):</strong> Média/Alta (Trocas de calor, fenômenos do cotidiano como isolamento térmico, e noções de máquinas térmicas). Ex: Por que a panela de pressão cozinha os alimentos mais rapidamente? A panela de pressão, ao aumentar a pressão interna, eleva o ponto de ebulição da água. A água, podendo atingir temperaturas acima de 100°C, cozinha os alimentos mais rapidamente.</p>
    <p><strong>FUVEST/Provão Paulista (Ênfase):</strong> Média/Alta (Estudo aprofundado das Leis da Termodinâmica e transformações gasosas).</p>
    <p><strong>Dica Adicional:</strong> A temperatura de ebulição de um líquido depende da pressão externa. A ebulição ocorre quando a pressão de vapor do líquido se iguala à pressão atmosférica. Em maiores altitudes, a pressão atmosférica é menor, então a água precisa de menos energia (menor temperatura) para que sua pressão de vapor se iguale à pressão externa.</p>
    `,
  },
  {
    id: 'fis-3',
    name: 'Eletricidade e Magnetismo',
    discipline: 'Física',
    svg: svgToDataUri(fis3CircuitSvg),
    summary: `
    <h3>Eletricidade</h3>
    <p>Estuda fenômenos envolvendo cargas elétricas.</p>
    <ul>
      <li><strong>Carga Elétrica (q):</strong> Propriedade fundamental da matéria. Unidade: Coulomb (C).</li>
      <li><strong>Corrente Elétrica (i):</strong> Fluxo ordenado de cargas. ${formatFormulaForSummary('i = Δq / Δt')}. Unidade: Ampère (A).</li>
      <li><strong>Tensão/Diferença de Potencial (U ou V):</strong> Energia por unidade de carga. Unidade: Volt (V).</li>
      <li><strong>Resistência Elétrica (R):</strong> Oposição à passagem da corrente. Unidade: Ohm (Ω).
        <ul>
          <li><strong>Primeira Lei de Ohm:</strong> ${formatFormulaForSummary('U = R · i')}.</li>
          <li><strong>Segunda Lei de Ohm:</strong> ${formatFormulaForSummary('R = ρL/A')} (ρ=resistividade, L=comprimento, A=área).</li>
        </ul>
      </li>
      <li><strong>Potência Elétrica (P):</strong> Taxa de energia consumida/produzida. ${formatFormulaForSummary('P = U · i = R · i² = U² / R')}. Unidade: Watt (W).</li>
      <li><strong>Associações de Resistores:</strong>
        <img src="${svgToDataUri(fisCircuitSeriesParallel)}" alt="Associação de Resistores">
        <ul>
          <li><strong>Série:</strong> ${formatFormulaForSummary('R_eq = R₁ + R₂ + ...')} (Mesma corrente)</li>
          <li><strong>Paralelo:</strong> ${formatFormulaForSummary('1/R_eq = 1/R₁ + 1/R₂ + ...')} (Mesma tensão)</li>
        </ul>
      </li>
    </ul>
    <img src="${svgToDataUri(fis3CircuitSvg)}" alt="Circuito Elétrico">
    <p><strong>Dica detalhada para Primeira Lei de Ohm:</strong> A lei ${formatFormulaForSummary('U = R · i')} é empírica, observada por Ohm. A resistência (R) é uma constante de proporcionalidade para materiais ôhmicos. Cenário: Calcular qual a resistência de um chuveiro que, ligado em 220V, é percorrido por uma corrente de 20A (R = U/i = 220/20 = ${formatFormulaForSummary('11Ω')}).</p>
    <p><strong>Dica detalhada para Potência Elétrica:</strong> A potência elétrica ${formatFormulaForSummary('P = U · i = R · i² = U²/R')} é derivada da definição de potência (Energia/tempo) e da energia potencial elétrica. Cenário: Calcular o consumo de energia de um aparelho. Um secador de 2000W consome mais energia por segundo que uma lâmpada de 10W. A conta de luz é baseada na potência e no tempo de uso. Ex: Um disjuntor de 15A protege um circuito de 127V. A potência máxima é P = U * i = 127V * 15A = ${formatFormulaForSummary('1905 W')}.</p>

    <h3>Magnetismo</h3>
    <p>Estuda fenômenos magnéticos e a relação com a eletricidade.</p>
    <ul>
      <li><strong>Campo Magnético (B):</strong> Produzido por cargas em movimento (correntes elétricas). Unidade: Tesla (T).</li>
      <li><strong>Força Magnética sobre Carga (Lorentz):</strong> ${formatFormulaForSummary('F = qvBsenθ')}.</li>
      <li><strong>Força Magnética sobre Fio (corrente):</strong> ${formatFormulaForSummary('F = BiLsenθ')}.</li>
      <li><strong>Indução Eletromagnética (Lei de Faraday):</strong> Uma variação no fluxo magnético através de uma espira induz uma corrente elétrica. Base para geradores e transformadores.</li>
    </ul>
    <p><strong>Dica detalhada para Força Magnética sobre Fio:</strong> Um fio retilíneo de 2 metros de comprimento é percorrido por uma corrente de 5 A e está imerso em um campo magnético uniforme de 0,4 T, perpendicular ao fio. A intensidade da força magnética é F = B · i · L · sen(θ). Como o campo é perpendicular, sen(θ) = sen(90°) = 1. F = 0,4 T · 5 A · 2 m · 1 = ${formatFormulaForSummary('4 N')}.</p>
    <p><strong>ENEM (Ênfase):</strong> Alta (Eletrodinâmica é o mais cobrado: consumo de energia, análise de circuitos residenciais, efeito Joule). Ex: Um chuveiro elétrico, ligado a 220 V, para aquecer mais a água (posição Inverno), diminui a resistência elétrica para aumentar a potência P = U²/R.</p>
    <p><strong>FUVEST/Provão Paulista (Ênfase):</strong> Alta (Todos os tópicos são relevantes, com ênfase em campo elétrico, potencial e indução).</p>
    `,
  },
  {
    id: 'fis-4',
    name: 'Ondulatória',
    discipline: 'Física',
    svg: svgToDataUri(fis4WaveSvg),
    summary: `
    <h3>Ondas</h3>
    <p>Perturbações que se propagam, transportando energia sem transportar matéria.</p>
    <ul>
      <li><strong>Classificação:</strong>
        <ul>
          <li><strong>Natureza:</strong> Mecânicas (precisam de meio, ex: som), Eletromagnéticas (não precisam de meio, ex: luz).</li>
          <li><strong>Direção de Vibração:</strong> Transversais (vibração perpendicular à propagação, ex: luz), Longitudinais (vibração paralela à propagação, ex: som).</li>
        </ul>
      </li>
      <li><strong>Elementos de uma onda:</strong>
        <ul>
          <li><strong>Amplitude (A):</strong> Máximo deslocamento da onda em relação à posição de equilíbrio.</li>
          <li><strong>Comprimento de Onda (λ):</strong> Distância entre dois pontos consecutivos em fase (ex: duas cristas).</li>
          <li><strong>Frequência (f):</strong> Número de oscilações por unidade de tempo. Unidade: Hertz (Hz).</li>
          <li><strong>Período (T):</strong> Tempo para uma oscilação completa. ${formatFormulaForSummary('T = 1/f')}.</li>
        </ul>
      </li>
      <li><strong>Equação Fundamental da Ondulatória:</strong> ${formatFormulaForSummary('v = λ·f')} (velocidade = comprimento de onda × frequência).</li>
    </ul>
    <img src="${svgToDataUri(fis4WaveSvg)}" alt="Onda Transversal">
    <p><strong>Dica detalhada para Equação Fundamental da Ondulatória:</strong> A fórmula ${formatFormulaForSummary('v = λ · f')} é derivada da definição de velocidade (v = ΔS/Δt). Em um período (T), a onda percorre um comprimento de onda (λ). Então v = λ/T. Como a frequência f = 1/T, temos v = λf. Cenário: Calcular o comprimento de onda de uma estação de rádio FM que transmite a 100 MHz (f=10⁸ Hz), sabendo que a velocidade da luz é 3·10⁸ m/s. Ex: Uma onda no mar tem velocidade de 15 m/s e comprimento de 3,0 m. Sua frequência é f = v/λ = 15/3 = ${formatFormulaForSummary('5,0 Hz')}.</p>

    <h3>Fenômenos Ondulatórios</h3>
    <img src="${svgToDataUri(fis4PhenomenaSvg)}" alt="Fenômenos Ondulatórios: Reflexão, Refração e Difração">
    <ul>
      <li><strong>Reflexão:</strong> A onda incide em uma superfície e retorna ao meio original.</li>
      <li><strong>Refração:</strong> A onda passa de um meio para outro, alterando sua velocidade e comprimento de onda (frequência constante).</li>
      <li><strong>Difração:</strong> A onda contorna obstáculos ou se espalha ao passar por fendas.</li>
      <li><strong>Interferência:</strong> Superposição de duas ou mais ondas, resultando em uma onda de maior (construtiva) ou menor (destrutiva) amplitude. <strong class="text-blue-600 dark:text-blue-400">Cancelamento de ruído usa interferência destrutiva.</strong></li>
      <li><strong>Polarização:</strong> Restrição da vibração de uma onda (apenas ondas transversais).</li>
      <li><strong>Ressonância:</strong> Aumento da amplitude de vibração quando um sistema recebe energia em sua frequência natural.</li>
    </ul>
    <p><strong>ENEM (Ênfase):</strong> Alta (Fenômenos ondulatórios com som e luz, e suas aplicações tecnológicas, como fones com cancelamento de ruído). Ex: Fones de ouvido com cancelamento de ruído ativo geram uma onda sonora própria que anula o ruído externo. Isso é explicado pela ${formatFormulaForSummary('Interferência Destrutiva')}.</p>
    <p><strong>FUVEST/Provão Paulista (Ênfase):</strong> Média/Alta (Formação de imagens em espelhos e lentes, Lei de Snell com rigor matemático).</p>
    `,
  },
  {
    id: 'fis-5',
    name: 'Óptica',
    discipline: 'Física',
    svg: svgToDataUri(fis5OpticsSvg),
    summary: `
    <h3>Óptica Geométrica</h3>
    <p>Estuda o comportamento da luz por meio de raios de luz, ignorando a natureza ondulatória.</p>
    <ul>
      <li><strong>Princípios da Óptica Geométrica:</strong>
        <ul>
          <li><strong>Propagação Retilínea:</strong> A luz se propaga em linha reta em meios homogêneos.</li>
          <li><strong>Independência dos Raios de Luz:</strong> Raios de luz se cruzam sem alterar suas trajetórias.</li>
          <li><strong>Reversibilidade dos Raios de Luz:</strong> A trajetória da luz é a mesma, independentemente do sentido de propagação.</li>
        </ul>
      </li>
      <li><strong>Espelhos Planos:</strong> Formam imagens virtuais, direitas e do mesmo tamanho do objeto, com inversão lateral.</li>
      <li><strong>Espelhos Esféricos (Côncavos e Convexos):</strong>
        <ul>
          <li><strong>Côncavos:</strong> Podem formar imagens reais ou virtuais, dependendo da posição do objeto. Usados em faróis, telescópios.</li>
          <li><strong>Convexos:</strong> Sempre formam imagens virtuais, direitas e menores. Usados em retrovisores de veículos (maior campo de visão).</li>
        </ul>
      </li>
      <li><strong>Lentes Esféricas (Convergentes e Divergentes):</strong>
        <ul>
          <li><strong>Convergentes:</strong> Raios paralelos convergem para um ponto (foco). Usadas para corrigir hipermetropia e em lupas.</li>
          <li><strong>Divergentes:</strong> Raios paralelos divergem. Usadas para corrigir miopia.</li>
        </ul>
      </li>
      <li><strong>Refração da Luz:</strong> Passagem da luz de um meio para outro com índices de refração diferentes, resultando em mudança de velocidade e desvio da trajetória.
        <ul>
          <li><strong>Lei de Snell-Descartes:</strong> ${formatFormulaForSummary('n₁·senθ₁ = n₂·senθ₂')} (n=índice de refração, θ=ângulo com a normal).</li>
        </ul>
      </li>
      <li><strong>Olho Humano e Defeitos da Visão:</strong>
        <ul>
          <li><strong>Miopia:</strong> Dificuldade em ver longe. Correção: lentes divergentes.</li>
          <li><strong>Hipermetropia:</strong> Dificuldade em ver perto. Correção: lentes convergentes.</li>
        </ul>
      </li>
    </ul>
    <img src="${svgToDataUri(fis5OpticsSvg)}" alt="Refração da Luz">
    <p><strong>Dica detalhada para Refração da Luz:</strong> A Lei de Snell-Descartes ${formatFormulaForSummary('n₁·senθ₁ = n₂·senθ₂')} descreve a mudança na direção da luz ao passar de um meio para outro. A frequência de uma onda não se altera quando a onda muda de meio. A velocidade da luz em um meio é dada por v = c/n, onde c é a velocidade da luz no vácuo e n é o índice de refração. Como o índice de refração da água é maior que o do ar, a velocidade da luz na água diminui. Ex: Um raio de luz monocromática passa do ar (n_ar ≈ 1) para a água (n_água ≈ 1,33). A velocidade diminui e a frequência não muda.</p>
    `,
  },
  // QUÍMICA
  {
    id: 'qui-0',
    name: 'Química Geral',
    discipline: 'Química',
    svg: svgToDataUri(qui0AtomicModelSvg),
    summary: `
    <h3>Modelos Atômicos e Distribuição Eletrônica</h3>
    <p>Estuda a estrutura da matéria em nível atômico.</p>
    <ul>
        <li><strong>Modelos Atômicos:</strong> Desde Dalton (bola de bilhar) até Rutherford-Bohr (sistema planetário) e o modelo quântico atual (orbitais).</li>
        <img src="${svgToDataUri(qui0AtomicModelSvg)}" alt="Modelo Atômico Rutherford-Bohr">
        <li><strong>Distribuição Eletrônica:</strong> Organização dos elétrons em camadas e subcamadas (níveis de energia: K, L, M...; subníveis: s, p, d, f).</li>
        <li><strong>Diagrama de Linus Pauling:</strong> Ferramenta para organizar a distribuição eletrônica em ordem crescente de energia dos orbitais.</li>
    </ul>
    <p><strong>Exemplo:</strong> Distribuição eletrônica do elemento com Z=12 (Magnésio): 1s² 2s² 2p⁶ 3s². Indica que ele pertence à Família 2 (metais alcalino-terrosos) e ao 3º Período.</p>

    <h3>Tabela Periódica e Propriedades</h3>
    <p>Organiza os elementos químicos de acordo com seu número atômico, refletindo suas propriedades periódicas.</p>
    <ul>
        <li><strong>Períodos:</strong> Linhas horizontais (indicam o número de camadas eletrônicas).</li>
        <li><strong>Grupos (Famílias):</strong> Colunas verticais (indicam o número de elétrons na camada de valência e propriedades químicas semelhantes).</li>
        <li><strong>Propriedades Periódicas:</strong>
            <ul>
                <li><strong>Eletronegatividade:</strong> Tendência de atrair elétrons em uma ligação.</li>
                <li><strong>Eletropositividade:</strong> Tendência de doar elétrons.</li>
                <li><strong>Raio Atômico:</strong> Tamanho do átomo.</li>
                <li><strong>Energia de Ionização:</strong> Energia para remover um elétron.</li>
                <li><strong>Afinidade Eletrônica:</strong> Energia liberada ao adicionar um elétron.</li>
            </ul>
        </li>
    </ul>

    <h3>Ligações Químicas e Geometria Molecular</h3>
    <p>Estuda como os átomos se unem para formar moléculas e compostos.</p>
    <ul>
        <li><strong>Ligação Iônica:</strong> Transferência de elétrons entre um metal e um ametal, formando íons e uma ligação forte.</li>
        <li><strong>Ligação Covalente:</strong> Compartilhamento de elétrons entre ametais. Pode ser simples, dupla ou tripla.</li>
        <li><strong>Ligação Metálica:</strong> Átomos de metais compartilhando elétrons em um "mar de elétrons".</li>
        <li><strong>Polaridade de Ligações e Moléculas:</strong> Depende da diferença de eletronegatividade e da geometria molecular.</li>
        <li><strong>Forças Intermoleculares:</strong> Interações entre moléculas (Dipolo-Dipolo, Ligações de Hidrogênio, Forças de London). Influenciam propriedades físicas como ponto de ebulição e solubilidade.</li>
        <li><strong>Geometria Molecular:</strong> Arranjo tridimensional dos átomos em uma molécula (Linear, Trigonal Plana, Tetraédrica, Piramidal, Angular). Ex: H₂O é Angular.</li>
    </ul>
    <p><strong>Exemplo de Ligação Iônica:</strong> Um elemento X (Z=17, Cloro) se combina com Y (Z=19, Potássio). O Cloro é um ametal (alta eletronegatividade) e o Potássio é um metal (baixa eletronegatividade). Haverá transferência de elétrons, formando uma ligação iônica. O composto será KCl (cloreto de potássio).</p>
    
    <h3>Funções Inorgânicas e Reações</h3>
    <p>Classificação dos compostos inorgânicos e suas reações.</p>
    <ul>
        <li><strong>Ácidos:</strong> Liberam H⁺ em água (ex: HCl, H₂SO₄).</li>
        <li><strong>Bases:</strong> Liberam OH⁻ em água (ex: NaOH, Ca(OH)₂).</li>
        <li><strong>Sais:</strong> Resultam da reação entre um ácido e uma base (ex: NaCl, CaCO₃).</li>
        <li><strong>Óxidos:</strong> Compostos binários com oxigênio (ex: CO₂, H₂O).</li>
        <li><strong>Reações de Neutralização:</strong> Ácido + Base → Sal + Água.</li>
        <li><strong>Reações de Oxirredução:</strong> Envolvem transferência de elétrons (mudança de NOX).</li>
    </ul>
    <p><strong>Exemplo:</strong> A chuva ácida é formada quando óxidos como SOx e NOx reagem com a água da atmosfera. Essa reação forma ${formatFormulaForSummary('Ácidos')} (como H₂SO₄ e HNO₃).</p>
    <p><strong>ENEM (Ênfase):</strong> Média/Alta (Relação entre estrutura, polaridade e propriedades como solubilidade e ponto de ebulição. Contextos ambientais e do cotidiano).</p>
    <p><strong>FUVEST/Provão Paulista (Ênfase):</strong> Alta (Teoria aprofundada de ligações, geometria VSEPR e nomenclatura).</p>
    `,
  },
  {
    id: 'qui-1',
    name: 'Estequiometria',
    discipline: 'Química',
    svg: svgToDataUri(qui1ReactionSvg),
    summary: `
    <h3>Estequiometria: Cálculos Químicos</h3>
    <p>É a parte da química que estuda as relações quantitativas entre reagentes e produtos em uma reação química.</p>
    <ul>
      <li><strong>Massa Atômica (MA):</strong> Massa de um átomo, expressa em unidades de massa atômica (u).</li>
      <li><strong>Massa Molecular (MM):</strong> Soma das massas atômicas dos átomos em uma molécula. Ex: H₂O (1x2 + 16x1 = 18u).</li>
      <li><strong>Mol (n):</strong> Quantidade de matéria que contém 6,022 x 10²³ partículas (Constante de Avogadro). A massa molar de uma substância (MM em g/mol) é numericamente igual à sua massa molecular (em u). ${formatFormulaForSummary('n = massa (m) / Massa Molar (MM)')}.</li>
      <li><strong>Balanceamento de Equações:</strong> Garante a Lei de Conservação das Massas (Lei de Lavoisier), onde a quantidade de átomos de cada elemento é a mesma nos reagentes e produtos.</li>
    </ul>
    <img src="${svgToDataUri(qui1ReactionSvg)}" alt="Reação Química Balanceada">
    <p><strong>Dica detalhada para Número de Mols:</strong> A fórmula ${formatFormulaForSummary('n = m / MM')} deriva da definição de massa molar (MM), que é a massa em gramas de 1 mol de substância. É a principal "ponte de conversão" na química. Cenário: Calcular quantos mols de sal de cozinha (NaCl, MM≈58.5g/mol) existem em um saleiro com 117g de sal (n = 117/58.5 = ${formatFormulaForSummary('2 mols')}).</p>

    <h3>Cálculos Estequiométricos</h3>
    <p>São realizados a partir da equação química balanceada, usando as proporções molares entre as substâncias.</p>
    <ul>
      <li><strong>Proporção Molar:</strong> Os coeficientes estequiométricos da equação balanceada indicam a proporção em mols das substâncias envolvidas. Ex: <strong class="text-green-600 dark:text-green-400">2H₂ + O₂ → 2H₂O</strong> (2 mols de H₂ reagem com 1 mol de O₂ para formar 2 mols de H₂O).</li>
      <li><strong>Reagente Limitante:</strong> É o reagente que é completamente consumido na reação, determinando a quantidade máxima de produto que pode ser formada. O outro reagente é o reagente em excesso.</li>
      <li><strong>Rendimento da Reação:</strong> A quantidade de produto obtida experimentalmente pode ser menor que a calculada teoricamente. ${formatFormulaForSummary('Rendimento = (Massa Real / Massa Teórica) × 100%')}.</li>
      <li><strong>Pureza de Reagentes:</strong> Muitos reagentes não são 100% puros. É preciso considerar a porcentagem de pureza nos cálculos.</li>
    </ul>
    <p><strong>Exemplo:</strong> Na reação 2H₂ + O₂ → 2H₂O, se reagirmos 4 mols de H₂ com 4 mols de O₂, o reagente limitante é ${formatFormulaForSummary('H₂')}. Para 4 mols de H₂, seriam necessários 2 mols de O₂. Como temos 4 mols de O₂, o H₂ será totalmente consumido, sobrando O₂.</p>
    <p><strong>Exemplo:</strong> A síntese de amônia é N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Partindo-se de 56g de N₂ (2 mols) e 9g de H₂ (4,5 mols), o H₂ é o limitante, pois 2 mols de N₂ precisariam de 6 mols de H₂. 4,5 mols de H₂ produzem (4,5 * 2 / 3) = 3 mols de NH₃. Massa máxima de amônia (MM=17g/mol) formada é 3 mols * 17 g/mol = ${formatFormulaForSummary('51g')}.</p>
    <p><strong>ENEM (Ênfase):</strong> Altíssima (Estequiometria em contextos ambientais, industriais e do cotidiano).</p>
    <p><strong>FUVEST/Provão Paulista (Ênfase):</strong> Alta (Cálculos complexos envolvendo reagente limitante, rendimento e pureza).</p>
    `,
  },
  {
    id: 'qui-2',
    name: 'Soluções e Concentração',
    discipline: 'Química',
    svg: svgToDataUri(qui2DilutionSvg),
    summary: `
    <h3>Soluções</h3>
    <p>Misturas homogêneas de duas ou mais substâncias. Componentes:</p>
    <ul>
      <li><strong>Soluto:</strong> Substância em menor quantidade, que é dissolvida.</li>
      <li><strong>Solvente:</strong> Substância em maior quantidade, que dissolve o soluto. Geralmente a água (solvente universal).</li>
    </ul>
    <h3>Tipos de Concentração</h3>
    <p>Expressam a quantidade de soluto em uma dada quantidade de solvente ou solução.</p>
    <ul>
      <li><strong>Concentração Comum (C):</strong> Massa do soluto por volume da solução. ${formatFormulaForSummary('C = m₁ / V')}. Unidade: g/L.</li>
      <li><strong>Concentração Molar (M ou Molaridade):</strong> Número de mols do soluto por volume da solução. ${formatFormulaForSummary('M = n₁ / V')}. Unidade: mol/L.</li>
      <li><strong>Título (τ ou % em massa):</strong> Massa do soluto por massa da solução. Sem unidades ou em %.</li>
      <li><strong>Densidade (d):</strong> Massa da solução por volume da solução. ${formatFormulaForSummary('d = m_solução / V_solução')}. Unidade: g/mL ou kg/L.</li>
    </ul>
    <p><strong>Dica detalhada para Concentração Molar:</strong> ${formatFormulaForSummary('M = n₁ / V')} é a forma mais comum de expressar concentração para trabalhos em laboratório, pois relaciona a quantidade de matéria (mols) com um volume facilmente medível. Cenário: Preparar um soro fisiológico. Para uma solução 0,15 mol/L, você dissolve 0,15 mols de NaCl em água até completar 1 litro de solução. Ex: Qual a massa de NaCl (MM=58,5g/mol) necessária para preparar 500mL de uma solução 0,2 mol/L? n = M * V = 0.2 mol/L * 0.5 L = 0.1 mol. Massa = n * MM = 0.1 mol * 58.5 g/mol = ${formatFormulaForSummary('5,85 g')}.</p>

    <h3>Diluição de Soluções</h3>
    <p>Processo de adicionar solvente a uma solução para diminuir sua concentração, mantendo a quantidade de soluto constante.</p>
    <ul>
      <li>Fórmula da Diluição: ${formatFormulaForSummary('C₁V₁ = C₂V₂')} ou ${formatFormulaForSummary('M₁V₁ = M₂V₂')}, onde 1 se refere à solução inicial e 2 à solução final.</li>
    </ul>
    <img src="${svgToDataUri(qui2DilutionSvg)}" alt="Diluição">
    <p><strong>Dica detalhada para Diluição:</strong> A fórmula ${formatFormulaForSummary('C₁V₁ = C₂V₂')} deriva da conservação do soluto: o número de mols antes é igual ao número de mols depois. Cenário: Preparar um refresco a partir de um suco concentrado. Você tem C₁ e V₁ (suco), adiciona água para chegar a V₂ e calcula a nova concentração C₂. Ex: Um técnico precisa preparar 500 mL de uma solução de H₂SO₄ de concentração 0,5 mol/L a partir de uma solução estoque de 2,0 mol/L. Qual volume da solução estoque ele deve utilizar? (2,0) · V₁ = (0,5) · 500 => V₁ = ${formatFormulaForSummary('125 mL')}.</p>

    <h3>Outros Conceitos</h3>
    <ul>
      <li><strong>Solubilidade:</strong> Capacidade máxima de um soluto se dissolver em um solvente a uma dada temperatura.</li>
      <li><strong>Curvas de Solubilidade:</strong> Gráficos que mostram como a solubilidade varia com a temperatura.</li>
      <li><strong>Coloides:</strong> Misturas heterogêneas com partículas dispersas maiores que as de uma solução, mas menores que as de uma suspensão (ex: maionese, gelatina).</li>
      <li><strong>Propriedades Coligativas:</strong> Fenômenos que dependem do número de partículas de soluto na solução, e não da sua natureza (ex: Aumento do ponto de ebulição - Ebulioscopia, Diminuição do ponto de congelamento - Crioscopia, Diminuição da pressão de vapor - Tonoscopia, Pressão Osmótica - Osmoscopia). A adição de um soluto não volátil a um solvente puro causa o aumento do ponto de ebulição da solução.</li>
    </ul>
    `,
  },
  {
    id: 'qui-3',
    name: 'Termoquímica e Cinética',
    discipline: 'Química',
    summary: `
    <h3>Termoquímica: Calor nas Reações</h3>
    <p>Estuda as trocas de energia (na forma de calor) que acompanham as reações químicas.</p>
    <ul>
      <li><strong>Entalpia (H):</strong> Energia térmica contida em uma substância em dadas condições. Não pode ser medida diretamente, mas sim sua variação (ΔH).</li>
      <li><strong>Variação de Entalpia (ΔH):</strong> Calor absorvido ou liberado em uma reação a pressão constante. ${formatFormulaForSummary('ΔH = H_produtos - H_reagentes')}.
        <ul>
          <li><strong>Reação Exotérmica:</strong> Libera calor para o ambiente. ${formatFormulaForSummary('ΔH < 0')}. (Ex: queima de combustíveis).</li>
          <li><strong>Reação Endotérmica:</strong> Absorve calor do ambiente. ${formatFormulaForSummary('ΔH > 0')}. (Ex: fotossíntese).</li>
        </ul>
      </li>
      <li><strong>Lei de Hess:</strong> A variação de entalpia de uma reação global é a soma das variações de entalpia das etapas intermediárias, independentemente do caminho. ${formatFormulaForSummary('ΔH = ΣΔH_produtos - ΣΔH_reagentes')}.</li>
      <li><strong>Energia de Ativação (Ea):</strong> Energia mínima necessária para que uma reação ocorra.</li>
    </ul>
    <p><strong>Dica detalhada para Lei de Hess:</strong> A fórmula ${formatFormulaForSummary('ΔH = ΣΔH_produtos - ΣΔH_reagentes')} é uma aplicação da Lei de Hess. Assume-se um caminho hipotético onde todos os reagentes são decompostos em seus elementos e depois os elementos se combinam para formar os produtos. Cenário: Calcular se a queima de um combustível libera mais ou menos energia que outro, sem realizar o experimento. Ex: As compressas instantâneas frias contêm nitrato de amônio e uma bolsa de água. Ao misturá-los, a compressa esfria rapidamente, indicando um processo ${formatFormulaForSummary('Endotérmico, com ΔH > 0')}.</p>
    
    <h3>Cinética Química: Velocidade das Reações</h3>
    <p>Estuda a velocidade com que as reações químicas ocorrem e os fatores que a influenciam.</p>
    <ul>
      <li><strong>Fatores que afetam a velocidade:</strong>
        <ul>
          <li><strong>Concentração dos reagentes:</strong> Maior concentração, mais colisões, maior velocidade.</li>
          <li><strong>Temperatura:</strong> Maior temperatura, maior energia cinética das moléculas, maior velocidade.</li>
          <li><strong>Superfície de contato:</strong> Quanto maior, mais colisões, maior velocidade (para sólidos).</li>
          <li><strong>Catalisadores:</strong> Substâncias que aumentam a velocidade da reação, oferecendo um novo caminho reacional com menor energia de ativação, sem serem consumidos.</li>
          <li><strong>Pressão:</strong> Afeta reações com reagentes gasosos. Maior pressão, maior concentração, maior velocidade.</li>
        </ul>
      </li>
      <li><strong>Teoria das Colisões:</strong> Para que uma reação ocorra, as moléculas precisam colidir com energia suficiente (energia de ativação) e orientação adequada.</li>
      <li><strong>Constante de Equilíbrio (K_c):</strong> ${formatFormulaForSummary('K_c = [Produtos]^x / [Reagentes]^y')}. Indica a proporção entre produtos e reagentes no equilíbrio.</li>
      <li><strong>Princípio de Le Chatelier:</strong> Um sistema em equilíbrio, quando submetido a uma perturbação (mudança de concentração, pressão ou temperatura), desloca-se no sentido de minimizar essa perturbação. Ex: Equilíbrio 2NO₂(g) ⇌ N₂O₄(g) (ΔH < 0). Para aumentar a cor castanha (NO₂), deve-se ${formatFormulaForSummary('Aumentar a temperatura')}, favorecendo a reação endotérmica (inversa).</li>
    </ul>
    <p><strong>Dica detalhada para Catalisadores:</strong> O catalisador aumenta a velocidade da reação, fornecendo um novo caminho reacional com menor energia de ativação (Ea). Ele não é consumido na reação e não altera o ΔH nem o equilíbrio químico.</p>
    <p><strong>ENEM (Ênfase):</strong> Altíssima (Os 3 pilares: Estequiometria, Soluções e Termoquímica. Equilíbrio em contextos ambientais).</p>
    <p><strong>FUVEST/Provão Paulista (Ênfase):</strong> Alta (Todos os tópicos com maior rigor matemático e conceitual, incluindo cinética e eletroquímica).</p>
    `,
  },
  {
    id: 'qui-4',
    name: 'Química Orgânica',
    discipline: 'Química',
    svg: svgToDataUri(qui4IsomeriaSvg),
    summary: `
    <h3>Química Orgânica</h3>
    <p>Estudo dos compostos de carbono, geralmente em cadeias ou anéis, e que formam a base da vida.</p>
    <ul>
      <li><strong>Ligações do Carbono:</strong> O carbono é tetravalente (faz 4 ligações). Pode formar cadeias longas, ramificadas e cíclicas, com ligações simples, duplas ou triplas.</li>
      <li><strong>Hidrocarbonetos:</strong> Compostos formados apenas por carbono e hidrogênio. Classificação: alcanos (apenas ligações simples), alcenos (uma ou mais ligações duplas), alcinos (uma ou mais ligações triplas), aromáticos (anel benzênico).</li>
      <li><strong>Funções Orgânicas Principais:</strong>
        <ul>
          <li><strong>Álcool:</strong> R-OH (hidroxila ligada a carbono saturado)</li>
          <li><strong>Aldeído:</strong> R-CHO (carbonila na extremidade)</li>
          <li><strong>Cetona:</strong> R-CO-R\' (carbonila entre dois carbonos). Ex: Propanona (Acetona).</li>
          <li><strong>Ácido Carboxílico:</strong> R-COOH (carboxila na extremidade). Ex: Ácido Butanoico (CH₃-CH₂-CH₂-COOH).</li>
          <li><strong>Éster:</strong> R-COO-R\' (resultante da reação entre ácido e álcool). Reação de esterificação.</li>
          <li><strong>Amina:</strong> R-NH₂, R-NH-R\', R-N(R\')R" (derivados da amônia)</li>
          <li><strong>Éter:</strong> R-O-R\' (oxigênio entre dois carbonos).</li>
        </ul>
      </li>
    </ul>
    <p><strong>Dica detalhada para Funções Orgânicas:</strong> A função cetona é caracterizada pela carbonila (C=O) ligada a dois radicais orgânicos (dois carbonos). Se estivesse ligada a um hidrogênio e um carbono, seria um aldeído. A reação entre um ácido carboxílico e um álcool, na presença de um catalisador ácido, forma um ${formatFormulaForSummary('Éster')} e água. Esta é a definição da reação de esterificação.</p>
    <p><strong>Exemplo de Nomenclatura IUPAC:</strong> O composto CH₃-CH(CH₃)-CH₂-OH tem a cadeia principal com 3 carbonos (prop-). A hidroxila (-OH) está no carbono 1, tornando-o um propan-1-ol. Há um grupo metil (-CH₃) no carbono 2. Portanto, o nome completo é ${formatFormulaForSummary('2-Metilpropan-1-ol')}.</p>

    <h3>Isomeria</h3>
    <p>Fenômeno de compostos com a mesma fórmula molecular, mas diferentes fórmulas estruturais (isomeria plana) ou arranjos espaciais (isomeria espacial).</p>
    <ul>
      <li><strong>Isomeria Plana (Constitucional):</strong> Difere na ordem de ligação dos átomos. Tipos: cadeia, posição, função, metameria, tautomeria. Ex: Etanol (CH₃CH₂OH) e éter dimetílico (CH₃OCH₃) têm fórmula C₂H₆O. Apresentam ${formatFormulaForSummary('Isomeria de Função')}.</li>
      <li><strong>Isomeria Geométrica (cis-trans ou E/Z):</strong> Ocorre em alcenos (dupla ligação) e ciclos, desde que cada carbono da dupla/ciclo esteja ligado a dois grupos diferentes.</li>
    </ul>
    <img src="${svgToDataUri(qui4IsomeriaSvg)}" alt="Isomeria Geométrica Cis-Trans">
    <p><strong>Dica detalhada para Isomeria Geométrica:</strong> A condição para a ocorrência de isomeria geométrica em alcenos é a presença de uma dupla ligação que impede a livre rotação e, crucialmente, que cada um dos carbonos da dupla esteja ligado a dois grupos (ligantes) distintos. No but-2-eno, cada carbono da dupla liga-se a um H e a um CH₃, satisfazendo a condição.</p>
    <p><strong>Exemplo: But-2-eno:</strong> C₄H₈. Pode apresentar isômeros cis (grupos iguais do mesmo lado da dupla) e trans (grupos iguais em lados opostos).</p>
    <img src="${svgToDataUri(qui4IsomeriaCisTransSvg)}" alt="Isomeria Cis e Trans">
    <p><strong>ENEM (Ênfase):</strong> Alta (Identificação de funções em moléculas do cotidiano, polímeros, e relação estrutura-propriedade).</p>
    <p><strong>FUVEST/Provão Paulista (Ênfase):</strong> Alta (Foco intenso em Isomeria e mecanismos de Reações Orgânicas).</p>
    `,
  },
  {
    id: 'qui-5',
    name: 'Eletroquímica',
    discipline: 'Química',
    svg: svgToDataUri(qui5ElectroSvg),
    summary: `
    <h3>Eletroquímica</h3>
    <p>Estuda a conversão de energia química em energia elétrica (e vice-versa) através de reações de oxirredução.</p>
    <ul>
      <li><strong>Oxidação:</strong> Perda de elétrons, aumento do número de oxidação (NOX).</li>
      <li><strong>Redução:</strong> Ganho de elétrons, diminuição do NOX.</li>
      <li><strong>Agente Redutor:</strong> Substância que oxida e causa a redução de outra.</li>
      <li><strong>Agente Oxidante:</strong> Substância que reduz e causa a oxidação de outra.</li>
    </ul>
    <h3>Células Eletroquímicas</h3>
    <ul>
      <li><strong>Pilha (Célula Galvânica ou Voltaica):</strong> Reação espontânea que gera corrente elétrica.
        <ul>
          <li><strong>Ânodo:</strong> Polo negativo, onde ocorre a oxidação.</li>
          <li><strong>Cátodo:</strong> Polo positivo, onde ocorre a redução.</li>
          <li><strong>Fluxo de elétrons:</strong> Do ânodo para o cátodo, pelo circuito externo.</li>
          <li><strong>Ponte Salina:</strong> Mantém o equilíbrio de cargas iônicas nas semicélulas.</li>
          <li><strong>Diferença de Potencial (ΔE° ou ddp):</strong> ${formatFormulaForSummary('ΔE° = E°red(cátodo) - E°red(ânodo)')}. Para pilhas, ΔE° > 0.</li>
        </ul>
      </li>
      <li><strong>Eletrólise (Célula Eletrolítica):</strong> Reação não espontânea que consome corrente elétrica para ocorrer.
        <ul>
          <li><strong>Ânodo:</strong> Polo positivo, onde ocorre a oxidação.</li>
          <li><strong>Cátodo:</strong> Polo negativo, onde ocorre a redução.</li>
          <li><strong>Fonte de energia externa</strong> (bateria) é necessária.</li>
        </ul>
      </li>
    </ul>
    <img src="${svgToDataUri(qui5ElectroSvg)}" alt="Eletrólise Aquosa">
    <p><strong>Dica detalhada:</strong> Em qualquer célula eletroquímica (pilha ou eletrólise), a oxidação (perda de elétrons) sempre ocorre no Ânodo. O Cátodo é onde ocorre a Redução (ganho de elétrons). Na eletrólise aquosa de uma solução de cloreto de sódio (NaCl), os produtos formados são ${formatFormulaForSummary('Gás hidrogênio (H₂) no cátodo e gás cloro (Cl₂) no ânodo')}. No cátodo, H⁺ tem maior facilidade de descarga que Na⁺. No ânodo, Cl⁻ tem maior facilidade de descarga que OH⁻.</p>

    <h3>Potenciais de Eletrodo</h3>
    <ul>
      <li><strong>Potencial Padrão de Redução (E°red):</strong> Medida da tendência de uma espécie em ser reduzida. Quanto maior, maior a tendência de redução.</li>
      <li><strong>Diferença de Potencial (ΔE° ou ddp):</strong> ${formatFormulaForSummary('ΔE° = E°red(cátodo) - E°red(ânodo)')}. Para pilhas, ΔE° > 0.</li>
    </ul>
    `,
  },
];

// ==============================================================================
// DISCIPLINES Data (without nested topics)
// ==============================================================================
export const disciplines: Discipline[] = [
  {
    id: 'mat',
    name: 'Matemática',
    icon: MathIcon,
    color: '#1E88E5', // Azul
    bgColor: 'bg-blue-100 dark:bg-blue-900',
    description: 'Estudo de funções, geometria, estatística, probabilidade e trigonometria para o sucesso no vestibular.',
  },
  {
    id: 'fis',
    name: 'Física',
    icon: PhysicsIcon,
    color: '#4CAF50', // Verde
    bgColor: 'bg-green-100 dark:bg-green-900',
    description: 'Compreenda o movimento, a energia, eletricidade, magnetismo, ondulatória e luz de forma descomplicada.',
  },
  {
    id: 'qui',
    name: 'Química',
    icon: ChemIcon,
    color: '#E91E63', // Rosa
    bgColor: 'bg-pink-100 dark:bg-pink-900',
    description: 'Desvende a química geral, estequiometria, soluções, termoquímica, cinética, orgânica e eletroquímica.',
  },
];

export const flashcards: Flashcard[] = [
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

export const examQuestions: ExamQuestion[] = [
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
    topicId: 'fis-1', // Changed from fis-2 to fis-1 to match mechanics
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
    topicId: 'fis-2', // Changed from fis-4 to fis-2 (Termologia)
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
    topicId: 'mat-4', // Changed from mat-2 to mat-4 (Trigonometria)
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
    topicId: 'fis-1', // Changed from fis-2 to fis-1 (Mecânica)
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
    topicId: 'fis-4',
    source: 'ENEM',
    statement: 'Fones de ouvido com cancelamento de ruído ativo geram uma onda sonora própria que anula o ruído externo. Qual fenômeno ondulatório explica esse funcionamento?',
    options: ['Refração', 'Difração', 'Polarização', 'Efeito Doppler', 'Interferência Destrutiva'],
    correctAnswerIndex: 4,
    explanation: 'O cancelamento ocorre quando o fone gera uma onda sonora que está em oposição de fase com a onda do ruído externo. A superposição dessas duas ondas resulta em uma interferência destrutiva, que anula ou atenua significativamente o som percebido.'
  },
  {
    id: 33,
    topicId: 'qui-3',
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
  },
  {
    id: 35,
    topicId: 'mat-1',
    source: 'ENEM',
    statement: 'Uma função quadrática é dada por f(x) = x² - 6x + 5. Quais são as coordenadas do vértice desta parábola?',
    options: ['(3, 4)', '(3, -4)', '(-3, 4)', '(-3, -4)', '(6, 5)'],
    correctAnswerIndex: 1,
    explanation: 'Para f(x) = x² - 6x + 5, temos a=1, b=-6, c=5. Xv = -b/2a = -(-6)/(2*1) = 6/2 = 3. Δ = b² - 4ac = (-6)² - 4*1*5 = 36 - 20 = 16. Yv = -Δ/4a = -16/(4*1) = -4. O vértice é (3, -4).',
  },
  {
    id: 36,
    topicId: 'mat-3',
    source: 'ENEM',
    statement: 'Em uma pesquisa, 40% dos entrevistados são mulheres. Destas, 25% usam transporte público. Entre os homens (60% dos entrevistados), 30% usam transporte público. Qual a probabilidade de um entrevistado escolhido aleatoriamente usar transporte público?',
    options: ['0,10', '0,18', '0,28', '0,55', '0,70'],
    correctAnswerIndex: 2,
    explanation: 'P(M) = 0.40, P(TP|M) = 0.25. P(TP ∩ M) = 0.40 * 0.25 = 0.10. P(H) = 0.60, P(TP|H) = 0.30. P(TP ∩ H) = 0.60 * 0.30 = 0.18. P(TP) = P(TP ∩ M) + P(TP ∩ H) = 0.10 + 0.18 = 0.28.',
  },
  {
    id: 37,
    topicId: 'mat-4',
    source: 'FUVEST',
    statement: 'Se o seno de um ângulo x é 0,6 e x está no primeiro quadrante, qual o valor do cosseno de x?',
    options: ['0,4', '0,5', '0,7', '0,8', '1,0'],
    correctAnswerIndex: 3,
    explanation: 'Pela relação fundamental da trigonometria sen²(x) + cos²(x) = 1. (0,6)² + cos²(x) = 1. 0,36 + cos²(x) = 1. cos²(x) = 0,64. Como x está no primeiro quadrante, cos(x) é positivo, então cos(x) = √0,64 = 0,8.',
  },
  {
    id: 38,
    topicId: 'qui-0',
    source: 'ENEM',
    statement: 'Qual propriedade periódica indica a tendência de um átomo em atrair elétrons em uma ligação química?',
    options: ['Raio Atômico', 'Energia de Ionização', 'Eletropositividade', 'Afinidade Eletrônica', 'Eletronegatividade'],
    correctAnswerIndex: 4,
    explanation: 'A eletronegatividade é a medida da capacidade de um átomo atrair elétrons para si em uma ligação covalente. Flúor é o elemento mais eletronegativo.',
  },
  {
    id: 39,
    topicId: 'qui-0',
    source: 'FUVEST',
    statement: 'Um elemento com número atômico 11 (Na) tende a formar íons:',
    options: ['Com carga +1, por perder 1 elétron.', 'Com carga -1, por ganhar 1 elétron.', 'Com carga +2, por perder 2 elétrons.', 'Com carga -2, por ganhar 2 elétrons.', 'Neutros, por não formar íons.'],
    correctAnswerIndex: 0,
    explanation: 'O sódio (Na) tem número atômico 11, sua distribuição eletrônica é 1s² 2s² 2p⁶ 3s¹. Ele tem 1 elétron na camada de valência (3s¹). Para atingir a estabilidade (regra do octeto), ele tende a perder esse 1 elétron, formando um íon Na⁺ com carga +1.',
  },
  {
    id: 40,
    topicId: 'fis-1',
    source: 'Provão Paulista',
    statement: 'Um elevador de 500 kg sobe com aceleração constante de 2 m/s². Qual a força de tração no cabo do elevador? (Use g = 10 m/s²)',
    options: ['500 N', '1000 N', '5000 N', '6000 N', '7000 N'],
    correctAnswerIndex: 3,
    explanation: 'A força resultante no elevador é F_R = T - P, onde T é a tração e P o peso. F_R = m · a. P = m · g = 500 kg · 10 m/s² = 5000 N. Então, T - 5000 N = 500 kg · 2 m/s² = 1000 N. Logo, T = 5000 N + 1000 N = 6000 N.',
  },
];

let nextFlashcardId = flashcards.length + 1;

flashcards.push(
  { id: nextFlashcardId++, topicId: 'mat-3', question: 'O que é a Média Aritmética?', answer: 'É a soma de todos os valores de um conjunto de dados dividida pelo número total de valores.' },
  { id: nextFlashcardId++, topicId: 'mat-3', question: 'Como calcular a Mediana de um conjunto de dados?', answer: 'Primeiro, ordene os dados. Se o número de dados for ímpar, é o valor central. Se for par, é a média dos dois valores centrais.' },
  { id: nextFlashcardId++, topicId: 'mat-3', question: 'O que é a Moda em Estatística?', answer: 'É o valor que aparece com maior frequência em um conjunto de dados.' },
  { id: nextFlashcardId++, topicId: 'mat-3', question: 'O que é Probabilidade Condicional?', answer: `A probabilidade de um evento A ocorrer, sabendo que um evento B já ocorreu. Fórmula: ${formatFormulaForSummary('P(A|B) = P(A ∩ B) / P(B)')}.` },
  { id: nextFlashcardId++, topicId: 'mat-3', question: 'Qual a diferença entre Arranjo e Combinação em Análise Combinatória?', answer: 'No Arranjo, a ordem dos elementos importa (Ex: senhas). Na Combinação, a ordem não importa (Ex: grupos de pessoas).' },
  { id: nextFlashcardId++, topicId: 'mat-3', question: 'Qual a fórmula da Permutação de n objetos?', answer: `${formatFormulaForSummary('Pₙ = n!')}` },
  { id: nextFlashcardId++, topicId: 'mat-4', question: 'Qual a relação fundamental da Trigonometria?', answer: `${formatFormulaForSummary('sen²(x) + cos²(x) = 1')}.` },
  { id: nextFlashcardId++, topicId: 'mat-4', question: 'No triângulo retângulo, o que é o seno de um ângulo?', answer: 'É a razão entre o Cateto Oposto e a Hipotenusa.' },
  { id: nextFlashcardId++, topicId: 'mat-4', question: 'O que a Lei dos Cossenos generaliza?', answer: 'O Teorema de Pitágoras para qualquer tipo de triângulo, não apenas os retângulos.' },
  { id: nextFlashcardId++, topicId: 'mat-4', question: 'Quando usar a Lei dos Senos?', answer: 'Quando se conhece um lado e dois ângulos, ou dois lados e o ângulo oposto a um deles, para calcular lados/ângulos desconhecidos.' },
  { id: nextFlashcardId++, topicId: 'mat-2', question: 'Qual a fórmula da distância entre dois pontos (x1,y1) e (x2,y2) na Geometria Analítica?', answer: `${formatFormulaForSummary('d = √((x₂-x₁)² + (y₂-y₁)²)')}` },
  { id: nextFlashcardId++, topicId: 'mat-2', question: 'Qual a fórmula da equação da reta no formato "y=mx+q"?', answer: `${formatFormulaForSummary('y = mx + q')}` },
  { id: nextFlashcardId++, topicId: 'mat-1', question: 'Em funções de 2º grau, o que indica o coeficiente "a"?', answer: 'A concavidade da parábola: se a > 0, para cima; se a < 0, para baixo.' },
  { id: nextFlashcardId++, topicId: 'mat-1', question: 'O que são as raízes (zeros) de uma função?', answer: 'São os valores de x para os quais a função f(x) é igual a zero (onde o gráfico intercepta o eixo x).' }
);

flashcards.push(
    { id: nextFlashcardId++, topicId: 'fis-1', question: 'O que é a Primeira Lei de Newton (Inércia)?', answer: 'Um corpo permanece em repouso ou em movimento retilíneo uniforme, a menos que uma força externa resultante atue sobre ele.' },
    { id: nextFlashcardId++, topicId: 'fis-1', question: 'Como calcular a energia cinética de um corpo?', answer: `Pela fórmula ${formatFormulaForSummary('Ec = (m * v²) / 2')}, onde m é a massa e v é a velocidade.` },
    { id: nextFlashcardId++, topicId: 'fis-1', question: 'O que o Teorema do Impulso afirma?', answer: `Que o impulso aplicado a um corpo é igual à variação da sua quantidade de movimento (${formatFormulaForSummary('I = ΔQ')}).` },
    { id: nextFlashcardId++, topicId: 'fis-2', question: 'O que é empuxo?', answer: 'É a força que um fluido exerce sobre um corpo submerso, direcionada para cima, com intensidade igual ao peso do fluido deslocado.' },
    { id: nextFlashcardId++, topicId: 'fis-2', question: 'Qual a Primeira Lei da Termodinâmica?', answer: `A variação da energia interna de um sistema é igual à diferença entre o calor trocado e o trabalho realizado (${formatFormulaForSummary('ΔU = Q - W')}).` },
    { id: nextFlashcardId++, topicId: 'fis-3', question: 'Como se calcula a resistência equivalente de resistores em série?', answer: `Somando as resistências individuais: ${formatFormulaForSummary('Req = R₁ + R₂ + ...')}.` },
    { id: nextFlashcardId++, topicId: 'fis-3', question: 'O que a Lei de Faraday da Indução descreve?', answer: 'Que uma variação no fluxo magnético através de uma espira induz uma corrente elétrica nela.' },
    { id: nextFlashcardId++, topicId: 'fis-4', question: 'O que é refração?', answer: 'É a passagem de uma onda de um meio para outro, o que altera sua velocidade e comprimento de onda, mas mantém sua frequência constante.' },
    { id: nextFlashcardId++, topicId: 'fis-4', question: 'O que é ressonância?', answer: 'É o fenômeno em que um sistema vibratório responde com amplitude máxima a uma força externa aplicada com uma frequência igual ou próxima à sua própria frequência natural de vibração.' },
    { id: nextFlashcardId++, topicId: 'fis-5', question: 'Para que servem as lentes divergentes?', answer: 'São usadas para corrigir a miopia, pois espalham os raios de luz antes que eles atinjam o olho, fazendo com que a imagem se forme corretamente na retina.' },
    { id: nextFlashcardId++, topicId: 'qui-0', question: 'O que são forças intermoleculares?', answer: 'São as forças de atração entre moléculas, como Ligações de Hidrogênio, Dipolo-Dipolo e Forças de London, que influenciam propriedades como o ponto de ebulição.' },
    { id: nextFlashcardId++, topicId: 'qui-0', question: 'O que é uma reação de neutralização?', answer: 'É a reação entre um ácido e uma base, que resulta na formação de um sal e água.' },
    { id: nextFlashcardId++, topicId: 'qui-1', question: 'O que a Lei de Lavoisier (Conservação das Massas) afirma?', answer: '"Na natureza, nada se cria, nada se perde, tudo se transforma." Em uma reação química, a massa total dos reagentes é igual à massa total dos produtos.' },
    { id: nextFlashcardId++, topicId: 'qui-2', question: 'O que são propriedades coligativas?', answer: 'São propriedades de uma solução que dependem apenas do número de partículas de soluto dissolvidas, e não da sua natureza química. Ex: aumento do ponto de ebulição.' },
    { id: nextFlashcardId++, topicId: 'qui-2', question: 'Qual a diferença entre concentração comum e molaridade?', answer: 'Concentração comum (g/L) relaciona a massa do soluto com o volume da solução. Molaridade (mol/L) relaciona o número de mols do soluto com o volume da solução.' },
    { id: nextFlashcardId++, topicId: 'qui-3', question: 'O que é uma reação endotérmica?', answer: 'É uma reação que absorve energia (calor) do ambiente. Nela, a entalpia dos produtos é maior que a dos reagentes, resultando em ΔH > 0.' },
    { id: nextFlashcardId++, topicId: 'qui-3', question: 'Qual a função de um catalisador?', answer: 'Aumentar a velocidade de uma reação, fornecendo um caminho alternativo com menor energia de ativação, sem ser consumido no processo.' },
    { id: nextFlashcardId++, topicId: 'qui-3', question: 'Enuncie o Princípio de Le Chatelier.', answer: 'Quando uma perturbação externa (concentração, pressão ou temperatura) é aplicada a um sistema em equilíbrio, o sistema se ajusta (desloca o equilíbrio) para minimizar o efeito da perturbação.' },
    { id: nextFlashcardId++, topicId: 'qui-4', question: 'Qual a principal característica de um álcool?', answer: 'A presença de um ou mais grupos hidroxila (-OH) ligados a átomos de carbono saturados.' },
    { id: nextFlashcardId++, topicId: 'qui-4', question: 'Qual a diferença entre um aldeído e uma cetona?', answer: 'Ambos possuem o grupo carbonila (C=O). Nos aldeídos, a carbonila está na extremidade da cadeia (ligada a pelo menos um H). Nas cetonas, a carbonila está entre dois outros átomos de carbono.' },
    { id: nextFlashcardId++, topicId: 'qui-4', question: 'O que é isomeria?', answer: 'É o fenômeno em que dois ou mais compostos diferentes apresentam a mesma fórmula molecular, mas estruturas diferentes.' },
    { id: nextFlashcardId++, topicId: 'qui-4', question: 'Quais as condições para a isomeria geométrica (cis-trans)?', answer: 'A molécula deve ter uma dupla ligação (ou ser um ciclo) que impeça a rotação, e cada carbono da dupla/ciclo deve estar ligado a dois grupos diferentes.' },
    { id: nextFlashcardId++, topicId: 'qui-5', question: 'Qual a diferença entre oxidação e redução?', answer: 'Oxidação é a perda de elétrons (NOX aumenta). Redução é o ganho de elétrons (NOX diminui).' },
    { id: nextFlashcardId++, topicId: 'qui-5', question: 'Em uma pilha, qual polo é o ânodo e qual é o cátodo?', answer: 'O Ânodo é o polo negativo (onde ocorre a oxidação). O Cátodo é o polo positivo (onde ocorre a redução).' },
    { id: nextFlashcardId++, topicId: 'qui-5', question: 'O que é eletrólise?', answer: 'É um processo não espontâneo que utiliza energia elétrica para forçar a ocorrência de uma reação de oxirredução.' }
);