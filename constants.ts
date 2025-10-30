
import type { Discipline, Topic, Flashcard, ExamQuestion, DisciplineName } from './types';
import { MathIcon, PhysicsIcon, ChemIcon } from './components/Icons';

const svgToDataUri = (svgString: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;

const mat1FuncDiagramSvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg"><style>.txt{font-family:sans-serif;font-size:14px;fill:#222;}.title{font-weight:bold;font-size:16px;}.set{fill:rgba(0,0,0,0.05);stroke:#555;stroke-width:2;}.arrow{stroke:#333;stroke-width:1.5;marker-end:url(#head);}</style><defs><marker id="head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#333"/></marker></defs><ellipse cx="80" cy="110" rx="50" ry="70" class="set"/><text x="80" y="40" text-anchor="middle" class="title txt">A (Domínio)</text><text x="80" y="80" text-anchor="middle" class="txt">▪ 1</text><text x="80" y="110" text-anchor="middle" class="txt">▪ 2</text><text x="80" y="140" text-anchor="middle" class="txt">▪ 3</text><ellipse cx="270" cy="110" rx="50" ry="70" class="set"/><text x="270" y="40" text-anchor="middle" class="title txt">B (Contradomínio)</text><text x="270" y="80" text-anchor="middle" class="txt">▪ f(1)</text><text x="270" y="110" text-anchor="middle" class="txt">▪ f(2)</text><text x="270" y="140" text-anchor="middle" class="txt">▪ f(3)</text><path d="M 130 80 L 220 80" class="arrow"/><path d="M 130 110 L 220 110" class="arrow"/><path d="M 130 140 L 220 140" class="arrow"/></svg>`;
const mat1ParabolaSvg = `<svg viewBox="0 0 350 180" xmlns="http://www.w3.org/2000/svg"><style>.axis{stroke:#888;stroke-width:1px;} .grid{stroke:#eee;stroke-width:1px;}.parabola{fill:none;stroke:#1589FF;stroke-width:2.5px;} .txt{font-family:sans-serif;font-size:12px;fill:#444;} .dot{fill:#d03060;}</style><g transform="translate(20,20) scale(1,-1)"><g transform="scale(1,-1)"><path class="axis" d="M 0 0 L 310 0"/><path class="axis" d="M 0 0 L 0 140"/><text x="305" y="-10" class="txt">x</text><text x="-15" y="135" class="txt">y</text><path class="parabola" d="M 0 120 Q 155 -100 310 120"/><circle cx="60" cy="0" r="4" class="dot"/><text x="60" y="-15" text-anchor="middle" class="txt">Raízes</text><circle cx="250" cy="0" r="4" class="dot"/><circle cx="155" cy="-25" r="4" class="dot"/><text x="155" y="-40" text-anchor="middle" class="txt">Vértice</text></g></g></svg>`;
const mat2PythagorasSvg = `<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><style>.triam{fill:none;stroke:#333;stroke-width:2;} .quadrato{fill:none;stroke:#333;stroke-width:1;} .txt{font-family:sans-serif;font-size:14px;fill:#222;} .formula tspan{font-family:serif;font-size:18px;font-weight:bold;}</style><polygon points="20,130 280,130 280,20" class="triam"/><rect x="260" y="110" width="20" height="20" class="quadrato"/><text x="150" y="145" text-anchor="middle" class="txt">c (Cateto)</text><text x="295" y="80" text-anchor="start" class="txt">b (Cateto)</text><text x="150" y="60" text-anchor="middle" class="txt" transform="rotate(-45 150 70)">a (Hipotenusa)</text><text x="35" y="50" text-anchor="start" class="txt formula"><tspan x="35" dy="1.2em">a²</tspan><tspan dy="0.1em"> = </tspan><tspan dy="-0.1em"> b²</tspan><tspan dy="0.1em"> + </tspan><tspan dy="-0.1em"> c²</tspan></text></svg>`;
const mat2CylinderSvg = `<svg viewBox="0 0 350 180" xmlns="http://www.w3.org/2000/svg"><style>.base{fill:rgba(0,0,0,0.05);stroke:none;} .corpon{stroke:#555;stroke-width:2;fill:rgba(0,0,0,0.08);} .linha{fill:none;stroke:#777;stroke-width:1;stroke-dasharray:3,3;} .txt{font-family:sans-serif;fill:#222;font-size:14px;} .formula {font-family:serif;font-weight:bold;font-size:18px;}</style><ellipse cx="175" cy="130" rx="100" ry="30" class="base"/><path class="corpon" d="M75 30 L75 130 A 100 30 0 0 0 275 130 L275 30 A 100 30 0 0 1 175 30"/><ellipse cx="175" cy="30" rx="100" ry="30" class="corpon"/><path d="M175 30 L175 130" class="linha"/><text x="180" y="85" class="txt">h (altura)</text><text x="120" y="20" class="txt">r (raio)</text><text x="38" y="85" class="txt formula">V = πr²h</text></svg>`;
const fis1MruvGraphSvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg"><style>.axis{stroke:#888;stroke-width:1px;} .linha{fill:none;stroke:#1589FF;stroke-width:2.5px;} .txt{font-family:sans-serif;font-size:12px;fill:#444;}</style><g transform="translate(30,180) scale(1,-1)"><path class="axis" d="M 0 0 L 310 0"/><path class="axis" d="M 0 0 L 0 160"/><text x="305" y="15" transform="scale(1,-1)" class="txt">t</text><text x="-20" y="-150" transform="scale(1,-1)" class="txt">V</text><path class="linha" d="M 0 20 L 310 150"/><text x="5" y="-5" transform="scale(1,-1)" class="txt">V₀</text><text x="300" y="-155" transform="scale(1,-1)" class="txt">V</text><text x="155" y="30" text-anchor="middle" transform="scale(1,-1)" class="txt">Gráfico V x t (MRUV)</text></g></svg>`;
const fis2BlockSvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg"><style>.block{fill:#ccc;stroke:#555;stroke-width:2px;} .force-arrow{stroke-width:3px;marker-end:url(#head);} .ground{fill:#999;} .txt{font-family:sans-serif;font-size:14px;fill:#222;}</style><defs><marker id="head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs><rect x="0" y="150" width="350" height="50" class="ground"/><rect x="50" y="100" width="100" height="50" class="block"/><line x1="150" y1="125" x2="250" y2="125" class="force-arrow" style="stroke:#d03060;"/><text x="170" y="115" class="txt" style="fill:#d03060;">F (aplicada)</text><line x1="100" y1="150" x2="20" y2="150" class="force-arrow" style="stroke:#1589FF;"/><text x="25" y="140" class="txt" style="fill:#1589FF;">F_at (atrito)</text><text x="95" y="128" text-anchor="middle" class="txt">m</text></svg>`;
const fis3CircuitSvg = `<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><style>.resistor{stroke:#333;stroke-width:2;fill:none;7} .source{stroke:#333;stroke-width:2px;fill:none;} .txt{font-family:sans-serif;font-size:14px;fill:#222;} .txt_color{fill:#d03060;}</style><path d="M20 75 L 60 75" stroke="#333" stroke-width="2"/><path d="M60 65 L 60 85" stroke="#333" stroke-width="2"/><path d="M68 55 L 68 95" stroke="#333" stroke-width="4"/><path d="M68 75 L 100 75" stroke="#333" stroke-width="2"/><rect x="100" y="60" width="100" height="30" class="resistor"/><path d="M200 75 L 330 75" stroke="#333" stroke-width="2"/><path d="M330 75 L 330 0 L 20 0 L 20 75" stroke="#333" stroke-width="2" fill="none"/><text x="150" y="55" text-anchor="middle" class="txt">R</text><text x="40" y="60" text-anchor="middle" class="txt">U</text><text x="265" y="95" text-anchor="middle" class="txt txt_color">i</text><path d="M250 75 L 280 75" stroke="#d03060" stroke-width="2" marker-end="url(#i_arrow)"/><defs><marker id="i_arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#d03060"/></marker></defs></svg>`;
const qui1ReactionSvg = `<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><style>.txt{font-family:sans-serif;font-size:14px;fill:#222;} .formula tspan{font-family:serif;font-weight:bold;font-size:18px;}.arrow{stroke:#333;stroke-width:2px;marker-end:url(#arrowhead);}</style><defs><marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#333"/></marker></defs><text x="40" y="75" text-anchor="middle" class="txt formula"><tspan>aA</tspan><tspan dy="0.1em"> + </tspan><tspan>bB</tspan></text><path d="M 80 75 L 120 75" class="arrow"/><text x="160" y="75" text-anchor="middle" class="txt formula"><tspan>cC</tspan><tspan dy="0.1em"> + </tspan><tspan>dD</tspan></text><text x="60" y="110" text-anchor="middle" class="txt">Reagentes</text><text x="180" y="110" text-anchor="middle" class="txt">Produtos</text><text x="250" y="70" text-anchor="middle" class="txt">Proporção molar (a:b:c:d)</text></svg>`;
const qui2DilutionSvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg"><style>.vessel{fill:none;stroke:#333;stroke-width:2;} .txt{font-family:sans-serif;font-size:14px;fill:#222;} .formula{font-weight:bold;font-size:16px;font-family:monospace;}</style><path class="vessel" d="M75 20 L 75 150 A 100 40 0 0 0 275 150 L 275 20 Z"/><path class="vessel" d="M75 20 L 275 20 "/><rect x="100" y="70" width="150" height="40" rx="5" ry="5" class="vessel" style="fill:rgba(0,0,0,0.05);"/><text x="175" y="95" text-anchor="middle" class="txt formula">C₁V₁ = C₂V₂</text><text x="175" y="45" text-anchor="middle" class="txt">Solução Final (Diluída)</text><text x="175" y="180" text-anchor="middle" class="txt">Solução Inicial (Concentrada)</text></svg>`;
const qui3EnthalpySvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white"/><style>.txt { font-family: sans-serif; font-size: 11px; fill: #222; }.title { font-weight: bold; font-size: 12px; }.axis { stroke: #555; stroke-width: 1; }.level { stroke: #999; stroke-width: 1; stroke-dasharray: 3, 3; }.exo-stroke { stroke: #d03060; }.endo-stroke { stroke: #1589FF; }.exo-fill { fill: #d03060; }.endo-fill { fill: #1589FF; }.line { stroke-width: 2.5; fill: none; }.arrow { stroke-width: 1.5; marker-end: url(#head); }</style><defs><marker id="head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs><line x1="20" y1="180" x2="330" y2="180" class="axis" /><text x="230" y="195" class="txt title">Caminho da Reação</text><line x1="20" y1="180" x2="20" y2="20" class="axis" /><text x="5" y="100" transform="rotate(-90 5 100)" text-anchor="middle" class="txt title">Entalpia (H)</text><line x1="20" y1="100" x2="70" y2="100" class="level" /><text x="75" y="104" class="txt">Reagentes</text><path d="M 70 100 Q 170 20 270 150" class="line exo-stroke" /><line x1="270" y1="150" x2="320" y2="150" class="level" /><text x="275" y="165" class="txt">Produtos</text><text x="160" y="120" class="txt title exo-fill">Exotérmica</text><path d="M 300 100 L 300 150" class="arrow exo-stroke" style="color: #d03060;" /><text x="305" y="125" class="txt title exo-fill">ΔH &lt; 0</text><path d="M 70 100 Q 170 30 270 50" class="line endo-stroke" /><line x1="270" y1="50" x2="320" y2="50" class="level" /><text x="275" y="40" class="txt">Produtos</text><text x="160" y="65" class="txt title endo-fill">Endotérmica</text><path d="M 280 100 L 280 50" class="arrow endo-stroke" style="color: #1589FF;" /><text x="285" y="75" class="txt title endo-fill">ΔH &gt; 0</text></svg>`;
const qui4ButeneSvg = `<svg viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg"><style>.txt{font-family:sans-serif;font-size:14px;fill:#222;} .bond{stroke:#333;stroke-width:2;fill:none;7} .atom{fill:#333;font-size:18px;font-family:monospace;}</style><g transform="translate(50,50)"><path class="bond" d="M 75 50 L 125 50"/><path class="bond" d="M 75 45 L 125 45"/><path class="bond" d="M 50 50 L 75 50"/><path class="bond" d="M 125 50 L 150 50"/><path class="bond" d="M 75 50 L 60 25"/><path class="bond" d="M 125 50 L 140 25"/><text x="40" y="55" class="atom">C</text><text x="75" y="55" class="atom">C</text><text x="125" y="55" class="atom">C</text><text x="150" y="55" class="atom">C</text><text x="50" y="20" class="atom">H</text><text x="135" y="20" class="atom">H</text><text x="10" y="55" class="txt">cis-But-2-eno</text></g></svg>`;
const qui5GalvanicCellSvg = `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg"><style>.vessel{fill:none;stroke:#333;stroke-width:2;}.electrode{fill:#666;}.txt{font-family:sans-serif;font-size:14px;fill:#222;} .arrow{stroke:#333;stroke-width:1.5px;marker-end:url(#arrowhead);}</style><defs><marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#333"/></marker></defs><path class="vessel" d="M25 180 L 25 80 L 125 80 L 125 180"/><rect class="electrode" x="65" y="30" width="20" height="100"/><path class="vessel" d="M225 180 L 225 80 L 325 80 L 325 180"/><rect class="electrode" x="265" y="30" width="20" height="100"/><path d="M 125 50 C 175 0, 175 0, 225 50" class="vessel"/><path d="M 75 30 L 75 10 L 275 10 L 275 30" stroke="#333" stroke-width="2" fill="none"/><path class="arrow" d="M175 10 L 175 25"/><text x="75" y="195" text-anchor="middle" class="txt">Ânodo (-)</text><text x="275" y="195" text-anchor="middle" class="txt">Cátodo (+)</text><text x="175" y="40" text-anchor="middle" class="txt">Ponte Salina</text><text x="195" y="20" class="txt">e⁻</text></svg>`;

export const DISCIPLINES: Discipline[] = [
  { name: 'Matemática', icon: MathIcon, description: 'Funções, geometria, probabilidade e mais.', color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
  { name: 'Física', icon: PhysicsIcon, description: 'Cinemática, leis de Newton, eletrodinâmica.', color: 'text-green-500', bgColor: 'bg-green-500/10' },
  { name: 'Química', icon: ChemIcon, description: 'Estequiometria, soluções e termoquímica.', color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
];

export const TOPICS: Topic[] = [
  // Matemática
  { id: 'mat-1', name: 'Funções', discipline: 'Matemática', summary: `
<h3>O que é uma Função?</h3>
<p>Uma função é uma <strong>regra que relaciona cada elemento de um conjunto (domínio) a um único elemento de outro conjunto (contradomínio)</strong>. É a linguagem matemática para descrever como uma quantidade varia em relação a outra.</p>
<img src="${svgToDataUri(mat1FuncDiagramSvg)}" alt="Diagrama de uma função mapeando elementos do Domínio A para o Contradomínio B"/>
<h3>Função do 1º Grau (Afim)</h3>
<ul>
<li><strong>Fórmula:</strong> <code>f(x) = ax + b</code></li>
<li><strong>Gráfico:</strong> Uma reta.</li>
<li><strong>Coeficientes:</strong> 'a' é o <strong>coeficiente angular</strong> (a inclinação da reta; se a > 0, a reta é crescente; se a < 0, é decrescente). 'b' é o <strong>coeficiente linear</strong> (o ponto onde a reta corta o eixo y, ou seja, o valor inicial).</li>
<li><strong>Aplicação Prática:</strong> Modelar situações com crescimento ou decaimento constante, como o valor a pagar em uma corrida de táxi (bandeirada 'b' + valor por km 'a') ou o salário de um vendedor (fixo 'b' + comissão por venda 'a').</li>
</ul>
<h3>Função do 2º Grau (Quadrática)</h3>
<ul>
<li><strong>Fórmula:</strong> <code>f(x) = ax² + bx + c</code></li>
<li><strong>Gráfico:</strong> Uma parábola.</li>
<li><strong>Análise:</strong> Se 'a' > 0, a concavidade é para cima (ponto de mínimo). Se 'a' < 0, a concavidade é para baixo (ponto de máximo). As <strong>raízes</strong> (onde a parábola corta o eixo x) são encontradas pela fórmula de Bhaskara. O <strong>vértice</strong> é o ponto de máximo ou mínimo.</li>
<li><strong>Aplicação Prática:</strong> Essencial para problemas de otimização. Calcular a altura máxima de um projétil, a área máxima de um terreno com um perímetro fixo, ou o preço de um produto que maximiza o lucro.</li>
</ul>
<img src="${svgToDataUri(mat1ParabolaSvg)}" alt="Gráfico de uma parábola com concavidade para cima, destacando o vértice e as raízes."/>
<h3>Função Exponencial</h3><ul><li><strong>Fórmula:</strong> <code>f(x) = a · b^x</code></li><li><strong>Gráfico:</strong> Uma curva que cresce ou decresce muito rapidamente.</li><li><strong>Análise:</strong> Se a base 'b' > 1, a função é crescente. Se 0 < 'b' < 1, a função é decrescente. 'a' é o valor inicial (quando x=0).</li><li><strong>Aplicação Prática:</strong> Modelar juros compostos, crescimento de uma colônia de bactérias, decaimento radioativo (datação por Carbono-14) ou a disseminação de uma notícia.</li></ul>
  ` },
  { id: 'mat-2', name: 'Geometria', discipline: 'Matemática', summary: `
<h3>Geometria Plana</h3>
<p>Estuda as figuras bidimensionais. O foco está no cálculo de <strong>área</strong> (superfície) e <strong>perímetro</strong> (contorno).</p>
<ul>
    <li><strong>Triângulos:</strong> A área é <code>A = (base × altura) / 2</code>. É fundamental conhecer as relações métricas no triângulo retângulo (Teorema de Pitágoras).</li>
    <li><strong>Quadriláteros:</strong> Saber as fórmulas para quadrados, retângulos, trapézios e losangos.</li>
    <li><strong>Círculo:</strong> Área <code>A = πr²</code> e Perímetro (Comprimento) <code>C = 2πr</code>.</li>
</ul>
<img src="${svgToDataUri(mat2PythagorasSvg)}" alt="Triângulo retângulo ilustrando o Teorema de Pitágoras: a² = b² + c²"/>
<h3>Geometria Espacial</h3>
<p>Estuda os sólidos tridimensionais. O foco é em <strong>área total</strong> (material gasto para construir) e <strong>volume</strong> (capacidade de armazenamento).</p>
<ul>
    <li><strong>Prismas e Cilindros:</strong> O volume é sempre <code>V = Área da base × altura</code>. A chave é identificar a forma da base (quadrado, triângulo, círculo) e calcular sua área.</li>
    <li><strong>Pirâmides e Cones:</strong> O volume segue a mesma lógica, mas com um fator de 1/3: <code>V = (Área da base × altura) / 3</code>.</li>
    <li><strong>Esfera:</strong> Volume <code>V = (4/3)πr³</code> e Área <code>A = 4πr²</code>.</li>
</ul>
<img src="${svgToDataUri(mat2CylinderSvg)}" alt="Cilindro com raio r e altura h, ilustrando a fórmula do volume."/>
<h3>Geometria Analítica</h3>
<p>É a ponte entre a geometria e a álgebra, descrevendo formas através de equações no plano cartesiano. Essencial para FUVEST/Provão.</p>
<ul>
    <li><strong>Distância entre dois pontos:</strong> Uma aplicação direta do Teorema de Pitágoras.</li>
    <li><strong>Equação da Reta:</strong> <code>y = mx + q</code>, onde 'm' é o coeficiente angular e 'q' o linear.</li>
</ul>
  ` },
  { id: 'mat-3', name: 'Probabilidade e Estatística', discipline: 'Matemática', summary: `
<h3>Estatística</h3>
<p>Foca na análise e interpretação de conjuntos de dados. Muito cobrado no ENEM.</p>
<ul>
    <li><strong>Medidas de Tendência Central:</strong>
        <ul>
            <li><strong>Média Aritmética:</strong> Soma de todos os valores dividida pelo número de valores.</li>
            <li><strong>Mediana:</strong> O valor central dos dados quando estão em ordem crescente. É mais robusta a valores extremos que a média.</li>
            <li><strong>Moda:</strong> O valor que aparece com mais frequência.</li>
        </ul>
    </li>
    <li><strong>Medidas de Dispersão:</strong> Indicam o quão "espalhados" os dados estão. O <strong>Desvio Padrão</strong> é a medida mais comum.</li>
</ul>
<h3>Análise Combinatória</h3>
<p>São as técnicas de contagem. A pergunta fundamental é: <strong>"A ordem importa?"</strong></p>
<ul>
    <li><strong>Arranjo:</strong> A ordem importa. Usado para formar pódios, senhas, números de telefone.</li>
    <li><strong>Combinação:</strong> A ordem NÃO importa. Usado para formar comissões, equipes, escolher itens para uma salada.</li>
</ul>
<h3>Probabilidade</h3>
<p>Mede a chance de um evento ocorrer. A fórmula clássica é:</p>
<p style="text-align:center; font-size: 1.2em; font-weight: bold;">P(A) = (Número de Casos Favoráveis) / (Número de Casos Totais)</p>
  ` },
  // Física
  { id: 'fis-1', name: 'Cinemática', discipline: 'Física', summary: `
<h3>Movimento Retilíneo Uniforme (MRU)</h3>
<ul>
    <li><strong>Conceito:</strong> Velocidade constante e aceleração nula.</li>
    <li><strong>Fórmula:</strong> <code>S = S₀ + V · t</code> (Função horária da posição).</li>
    <li><strong>Gráfico V x t:</strong> Uma linha horizontal. A área sob a linha é o deslocamento.</li>
</ul>
<h3>Movimento Retilíneo Uniformemente Variado (MRUV)</h3>
<ul>
    <li><strong>Conceito:</strong> Aceleração constante e diferente de zero.</li>
    <li><strong>Fórmulas:</strong>
        <ul>
            <li><code>V = V₀ + a · t</code> (Função horária da velocidade).</li>
            <li><code>S = S₀ + V₀ · t + (a · t²) / 2</code> (Função horária da posição).</li>
            <li><code>V² = V₀² + 2 · a · ΔS</code> (Equação de Torricelli).</li>
        </ul>
    </li>
    <li><strong>Gráfico V x t:</strong> Uma linha reta inclinada. A inclinação é a aceleração.</li>
</ul>
<img src="${svgToDataUri(fis1MruvGraphSvg)}" alt="Gráfico Velocidade x Tempo para MRUV, mostrando uma linha reta inclinada."/>
  ` },
  { id: 'fis-2', name: 'Dinâmica', discipline: 'Física', summary: `
<h3>Leis de Newton</h3>
<ul>
    <li><strong>Primeira Lei (Inércia):</strong> Um corpo em repouso tende a permanecer em repouso, e um corpo em movimento retilíneo uniforme tende a permanecer em movimento, a menos que uma força resultante atue sobre ele.</li>
    <li><strong>Segunda Lei (Princípio Fundamental):</strong> A força resultante que atua sobre um corpo é igual ao produto de sua massa pela aceleração: <code>Fᵣ = m · a</code>. A força e a aceleração têm a mesma direção e sentido.</li>
    <li><strong>Terceira Lei (Ação e Reação):</strong> A toda ação corresponde uma reação de mesma intensidade, mesma direção e sentido contrário, aplicada em corpos diferentes.</li>
</ul>
<h3>Trabalho e Energia</h3>
<ul>
    <li><strong>Trabalho (τ):</strong> Medida da energia transferida pela aplicação de uma força ao longo de um deslocamento. <code>τ = F · d · cos(θ)</code>.</li>
    <li><strong>Energia Cinética (E_c):</strong> Energia associada ao movimento. <code>E_c = (m · v²) / 2</code>.</li>
    <li><strong>Energia Potencial Gravitacional (E_pg):</strong> Energia associada à posição em um campo gravitacional. <code>E_pg = m · g · h</code>.</li>
    <li><strong>Energia Potencial Elástica (E_pe):</strong> Energia armazenada em uma mola. <code>E_pe = (k · x²) / 2</code>.</li>
</ul>
<img src="${svgToDataUri(fis2BlockSvg)}" alt="Bloco de massa 'm' em uma superfície, com uma força 'F' (aplicada) e uma força 'F_at' (atrito) agindo."/>
  ` },
  { id: 'fis-3', name: 'Eletrodinâmica', discipline: 'Física', summary: `
<h3>Corrente Elétrica e Resistência</h3>
<ul>
    <li><strong>Corrente (i):</strong> Fluxo ordenado de cargas elétricas. <code>i = ΔQ / Δt</code> (medida em Ampères, A).</li>
    <li><strong>Resistência (R):</strong> Oposição à passagem da corrente. Depende do material, comprimento (L) e área (A) do fio. <code>R = ρ · L / A</code> (Segunda Lei de Ohm).</li>
</ul>
<h3>Leis de Ohm</h3>
<ul>
    <li><strong>Primeira Lei de Ohm:</strong> A tensão (U) em um resistor é diretamente proporcional à corrente (i) que o atravessa. <code>U = R · i</code>.</li>
</ul>
<h3>Potência e Energia</h3>
<ul>
    <li><strong>Potência Elétrica (P):</strong> Energia consumida ou produzida por unidade de tempo. <code>P = U · i</code>.</li>
    <li><strong>Potência em um Resistor:</strong> <code>P = R · i²</code> ou <code>P = U² / R</code> (efeito Joule).</li>
    <li><strong>Energia Elétrica (E):</strong> <code>E = P · t</code> (geralmente medida em kWh para consumo).</li>
</ul>
<img src="${svgToDataUri(fis3CircuitSvg)}" alt="Circuito simples com fonte de tensão U, resistor R e corrente i, ilustrando a Primeira Lei de Ohm."/>
  ` },
  { id: 'fis-4', name: 'Termologia', discipline: 'Física', summary: `
<h3>Calor e Temperatura</h3>
<ul>
    <li><strong>Temperatura:</strong> Medida do grau de agitação das partículas de um corpo.</li>
    <li><strong>Calor:</strong> Energia térmica em trânsito devido à diferença de temperatura.</li>
    <li><strong>Calor Sensível (Q):</strong> Aquece ou esfria o corpo (muda a temperatura). <code>Q = m · c · ΔT</code> (onde 'c' é o calor específico).</li>
    <li><strong>Calor Latente (Q):</strong> Causa mudança de estado físico (temperatura constante). <code>Q = m · L</code> (onde 'L' é o calor latente).</li>
</ul>
<h3>Termodinâmica</h3>
<ul>
    <li><strong>Primeira Lei da Termodinâmica:</strong> A variação da energia interna (ΔU) de um sistema é igual ao calor (Q) trocado menos o trabalho (τ) realizado. <code>ΔU = Q - τ</code>. É o princípio da conservação da energia.</li>
</ul>
  ` },
  { id: 'fis-5', name: 'Óptica e Ondas', discipline: 'Física', summary: `
<h3>Ondas</h3>
<ul>
    <li><strong>Características:</strong>
        <ul>
            <li><strong>Comprimento de Onda (λ):</strong> Distância entre dois pontos em fase (ex: crista a crista).</li>
            <li><strong>Frequência (f):</strong> Número de oscilações por segundo (medida em Hertz, Hz).</li>
            <li><strong>Velocidade (v):</strong> <code>v = λ · f</code>.</li>
        </ul>
    </li>
    <li><strong>Tipos:</strong>
        <ul>
            <li><strong>Mecânicas:</strong> Precisam de um meio material (som, ondas na água).</li>
            <li><strong>Eletromagnéticas:</strong> Não precisam de meio (luz, rádio, micro-ondas).</li>
        </ul>
    </li>
</ul>
<h3>Óptica Geométrica</h3>
<ul>
    <li><strong>Reflexão:</strong> O raio incidente, o raio refletido e a normal estão no mesmo plano. O ângulo de incidência é igual ao ângulo de reflexão.</li>
    <li><strong>Refração:</strong> Passagem da luz de um meio para outro. Causa desvio. A velocidade da luz e o comprimento de onda mudam, mas a frequência se mantém.</li>
    <li><strong>Índice de Refração (n):</strong> <code>n = c / v</code> (onde 'c' é a velocidade da luz no vácuo e 'v' é a velocidade no meio).</li>
</ul>
<img src="https://i.imgur.com/gK2g7Gk.png" alt="Diagrama de refração da luz, mostrando a mudança de ângulo e velocidade ao passar do ar para a água."/>
  ` },
  // Química
  { id: 'qui-1', name: 'Estequiometria', discipline: 'Química', summary: `
<h3>Conceitos Fundamentais</h3>
<ul>
    <li><strong>Massa Atômica (MA):</strong> Massa de um átomo, medida em u (unidade de massa atômica).</li>
    <li><strong>Massa Molar (MM):</strong> Massa de 1 mol da substância (em gramas). 1 mol equivale a 6,02 x 10²³ partículas (Constante de Avogadro).</li>
</ul>
<h3>Cálculos Estequiométricos</h3>
<p>Permitem calcular as quantidades (massa, volume, mols) de reagentes e produtos em uma reação química.</p>
<ol>
    <li>Escrever a equação química.</li>
    <li>Balancear a equação.</li>
    <li>Estabelecer a proporção molar (coeficientes do balanceamento).</li>
    <li>Converter para as unidades pedidas (massa, volume, etc.).</li>
</ol>
<img src="${svgToDataUri(qui1ReactionSvg)}" alt="Diagrama de reação química A + B -> C + D, ilustrando a proporção molar."/>
  ` },
  { id: 'qui-2', name: 'Soluções', discipline: 'Química', summary: `
<h3>Concentração Comum (C)</h3>
<ul>
    <li>Relação entre a massa do soluto e o volume da solução. <code>C = m₁ / V</code> (g/L).</li>
</ul>
<h3>Concentração Molar (Molaridade, M)</h3>
<ul>
    <li>Relação entre o número de mols do soluto e o volume da solução. <code>M = n₁ / V</code> (mol/L).</li>
</ul>
<h3>Diluição</h3>
<ul>
    <li>Adição de solvente a uma solução para diminuir sua concentração. A quantidade de soluto (mols ou massa) se mantém constante.</li>
    <li><strong>Fórmula:</strong> <code>C₁ · V₁ = C₂ · V₂</code> (ou M₁ · V₁ = M₂ · V₂).</li>
</ul>
<img src="${svgToDataUri(qui2DilutionSvg)}" alt="Diagrama de diluição, mostrando a relação C1V1 = C2V2."/>
  ` },
  { id: 'qui-3', name: 'Termoquímica', discipline: 'Química', summary: `
<h3>Entalpia (H)</h3>
<ul>
    <li>Energia térmica contida nas substâncias. Não pode ser medida diretamente, mas sim sua variação (ΔH).</li>
    <li><strong>Variação de Entalpia (ΔH):</strong> <code>ΔH = Hprodutos - Hreagentes</code>.</li>
</ul>
<h3>Reações</h3>
<ul>
    <li><strong>Exotérmica:</strong> Libera calor para o ambiente. <code>Hprodutos < Hreagentes</code>, então <strong>ΔH < 0</strong>. (Ex: Combustão).</li>
    <li><strong>Endotérmica:</strong> Absorve calor do ambiente. <code>Hprodutos > Hreagentes</code>, então <strong>ΔH > 0</strong>. (Ex: Dissolução de nitrato de amônio).</li>
</ul>
<h3>Lei de Hess</h3>
<p>A variação de entalpia de uma reação depende apenas dos estados inicial e final, e não das etapas intermediárias. Permite calcular o ΔH de reações complexas somando ΔH de reações mais simples.</p>
<img src="${svgToDataUri(qui3EnthalpySvg)}" alt="Gráfico de entalpia vs tempo para reações exotérmicas e endotérmicas."/>
  ` },
  { id: 'qui-4', name: 'Química Orgânica', discipline: 'Química', summary: `
<h3>Hidrocarbonetos</h3>
<ul>
    <li>Compostos formados apenas por Carbono (C) e Hidrogênio (H).</li>
    <li><strong>Alcanos:</strong> Ligações simples (saturados).</li>
    <li><strong>Alcenos:</strong> Pelo menos uma ligação dupla (insaturados).</li>
    <li><strong>Alcinos:</strong> Pelo menos uma ligação tripla (insaturados).</li>
    <li><strong>Aromáticos:</strong> Possuem o anel benzênico.</li>
</ul>
<h3>Isomeria</h3>
<p>Fenômeno de compostos com a mesma fórmula molecular, mas diferentes fórmulas estruturais (isomeria plana) ou arranjos espaciais (isomeria espacial).</p>
<ul>
    <li><strong>Isomeria Geométrica (cis-trans):</strong> Ocorre em alcenos (dupla ligação) e ciclos, desde que cada carbono da dupla/ciclo esteja ligado a dois grupos diferentes.</li>
</ul>
<img src="${svgToDataUri(qui4ButeneSvg)}" alt="Estrutura do But-2-eno (Cis), ilustrando a dupla ligação e os grupos ligados."/>
  ` },
  { id: 'qui-5', name: 'Eletroquímica', discipline: 'Química', summary: `
<h3>Pilhas (Células Galvânicas)</h3>
<ul>
    <li>Transformam energia química em energia elétrica (processo espontâneo).</li>
    <li>Ocorre <strong>Oxidação no Ânodo</strong> (polo negativo) e <strong>Redução no Cátodo</strong> (polo positivo).</li>
</ul>
<h3>Eletrólise</h3>
<ul>
    <li>Transformam energia elétrica em energia química (processo não espontâneo).</li>
    <li>Ocorre <strong>Oxidação no Ânodo</strong> (polo positivo) e <strong>Redução no Cátodo</strong> (polo negativo).</li>
    <li><strong>Eletrólise Aquosa:</strong> A água (H₂O) ou seus íons (H⁺, OH⁻) competem com os íons do sal.</li>
</ul>
<img src="${svgToDataUri(qui5GalvanicCellSvg)}" alt="Diagrama de uma pilha galvânica (Pilha de Daniell) com dois compartimentos e ponte salina."/>
  ` },
];

export const FLASHCARDS: Flashcard[] = [
  // Matemática
  { id: 1, topicId: 'mat-1', question: 'Qual o nome do ponto onde a parábola de uma função do 2º grau atinge seu valor máximo ou mínimo?', answer: 'Vértice.' },
  { id: 2, topicId: 'mat-2', question: 'Qual a fórmula para o volume de um cilindro?', answer: 'V = Área da base × altura, ou V = πr²h.' },
  { id: 3, topicId: 'mat-3', question: 'Em Análise Combinatória, quando a ordem dos elementos NÃO importa, estamos falando de...?', answer: 'Combinação.' },
  { id: 4, topicId: 'mat-1', question: 'Qual a condição para uma função do 1º grau ser decrescente?', answer: 'O coeficiente angular (a) deve ser menor que zero (a < 0).' },
  { id: 5, topicId: 'mat-2', question: 'Qual o teorema fundamental para o cálculo de distâncias em um triângulo retângulo?', answer: 'Teorema de Pitágoras (a² = b² + c²).' },
  // Física
  { id: 6, topicId: 'fis-1', question: 'No MRU, qual é o valor da aceleração?', answer: 'A aceleração é nula (a = 0).' },
  { id: 7, topicId: 'fis-2', question: 'Qual a lei de Newton que relaciona Força, Massa e Aceleração?', answer: 'Segunda Lei de Newton (Fᵣ = m · a).' },
  { id: 8, topicId: 'fis-3', question: 'Qual o nome do efeito físico em que um resistor dissipa energia elétrica em forma de calor?', answer: 'Efeito Joule.' },
  { id: 9, topicId: 'fis-4', question: 'O que a Primeira Lei da Termodinâmica afirma sobre a energia?', answer: 'Que a energia se conserva (ΔU = Q - τ).' },
  { id: 10, topicId: 'fis-5', question: 'Ao passar de um meio para outro, qual característica de uma onda eletromagnética (como a luz) se mantém constante?', answer: 'A frequência.' },
  // Química
  { id: 11, topicId: 'qui-1', question: 'Qual o valor da Constante de Avogadro?', answer: '6,02 x 10²³ partículas/mol.' },
  { id: 12, topicId: 'qui-2', question: 'Na diluição de uma solução, qual grandeza do soluto se mantém constante?', answer: 'O número de mols (n₁) ou a massa (m₁).' },
  { id: 13, topicId: 'qui-3', question: 'Qual o sinal da variação de entalpia (ΔH) em uma reação exotérmica?', answer: 'Negativo (ΔH < 0).' },
  { id: 14, topicId: 'qui-4', question: 'Qual o tipo de ligação que impede a livre rotação e permite a Isomeria Geométrica?', answer: 'Ligação dupla (em alcenos).' },
  { id: 15, topicId: 'qui-5', question: 'Em uma pilha (célula galvânica), qual polo é o ânodo?', answer: 'O polo negativo.' },
  // Flashcards (1ª leva)
  { id: 16, topicId: 'mat-3', question: 'Qual a principal diferença entre Média e Mediana em estatística?', answer: 'A Mediana é menos sensível a valores extremos (outliers) que a Média.' },
  { id: 17, topicId: 'mat-2', question: 'Qual a fórmula da equação geral de uma reta na geometria analítica?', answer: 'ax + by + c = 0.' },
  { id: 18, topicId: 'mat-3', question: 'Para que serve o Princípio Fundamental da Contagem (PFC)?', answer: 'Para calcular o número total de possibilidades de um evento composto por etapas sucessivas e independentes.' },
  { id: 19, topicId: 'mat-1', question: 'Em uma função exponencial f(x) = a · bˣ, o que \'a\' representa?', answer: 'O valor inicial (quando x=0).' },
  { id: 20, topicId: 'mat-2', question: 'Qual a fórmula do volume de uma esfera?', answer: 'V = (4/3)πr³.' },
  { id: 21, topicId: 'fis-2', question: 'O que a Terceira Lei de Newton estabelece sobre as forças de Ação e Reação?', answer: 'Que elas têm mesma intensidade, mesma direção, sentidos opostos e atuam em corpos diferentes.' },
  { id: 22, topicId: 'fis-4', question: 'Qual o enunciado da Primeira Lei da Termodinâmica?', answer: 'A variação da energia interna de um sistema é igual ao calor recebido menos o trabalho realizado (ΔU = Q - τ).' },
  { id: 23, topicId: 'fis-5', question: 'O que a Lei de Snell-Descartes descreve?', answer: 'A relação entre os ângulos de incidência e refração e os índices de refração dos meios (n₁sinθ₁ = n₂sinθ₂).' },
  { id: 24, topicId: 'fis-1', question: 'Na equação de Torricelli, qual a principal vantagem em relação às outras do MRUV?', answer: 'Ela não depende do tempo (t).' },
  { id: 25, topicId: 'fis-3', question: 'Como se calcula a resistência equivalente de resistores em paralelo?', answer: 'O inverso da resistência equivalente é a soma dos inversos das resistências (1/R_eq = 1/R₁ + 1/R₂ + ...).' },
  { id: 26, topicId: 'qui-4', question: 'Qual a principal característica de um hidrocarboneto aromático?', answer: 'A presença de um anel benzênico.' },
  { id: 27, topicId: 'qui-5', question: 'O que ocorre no cátodo durante a eletrólise?', answer: 'A redução.' },
  { id: 28, topicId: 'qui-1', question: 'O que é um reagente limitante em uma reação química?', answer: 'É o reagente que é completamente consumido primeiro, limitando a quantidade de produto formado.' },
  { id: 29, topicId: 'qui-2', question: 'Qual a unidade padrão da Concentração Molar (Molaridade)?', answer: 'mol/L.' },
  { id: 30, topicId: 'qui-3', question: 'O que a Lei de Hess afirma sobre a variação de entalpia?', answer: 'Que a variação de entalpia de uma reação depende apenas dos estados inicial e final, não do caminho percorrido.' },
  // Novos Flashcards (2ª leva)
  { id: 31, topicId: 'mat-1', question: 'Qual a propriedade dos logaritmos que transforma um produto em soma?', answer: 'log_b (x · y) = log_b(x) + log_b(y).' },
  { id: 32, topicId: 'mat-2', question: 'Qual a soma dos ângulos internos de um polígono convexo com "n" lados?', answer: 'S = (n - 2) * 180°.' },
  { id: 33, topicId: 'mat-3', question: 'O que é probabilidade condicional P(A|B)?', answer: 'É a probabilidade de ocorrer o evento A, sabendo que o evento B já ocorreu.' },
  { id: 34, topicId: 'mat-1', question: 'Qual a condição de existência de um logaritmo log_b(a)?', answer: 'O logaritmando "a" deve ser positivo (a > 0) e a base "b" deve ser positiva e diferente de 1 (b > 0, b ≠ 1).' },
  { id: 35, topicId: 'mat-2', question: 'Para que serve a Lei dos Cossenos em um triângulo?', answer: 'Para encontrar a medida de um lado quando se conhecem os outros dois lados e o ângulo entre eles.' },
  { id: 36, topicId: 'fis-2', question: 'Qual a fórmula da Pressão Hidrostática exercida por um fluido?', answer: 'P = d · g · h (densidade, gravidade, altura da coluna de líquido).' },
  { id: 37, topicId: 'fis-3', question: 'O que é o campo magnético gerado por um fio retilíneo e longo?', answer: 'São linhas circulares concêntricas ao fio, cuja intensidade diminui com a distância.' },
  { id: 38, topicId: 'fis-5', question: 'O que caracteriza uma imagem virtual formada por uma lente ou espelho?', answer: 'É formada pelo prolongamento dos raios de luz e não pode ser projetada em uma tela.' },
  { id: 39, topicId: 'fis-4', question: 'Qual a relação entre pressão, volume e temperatura para um gás ideal (Equação de Clapeyron)?', answer: 'PV = nRT.' },
  { id: 40, topicId: 'fis-2', question: 'O que é o Impulso de uma força?', answer: 'É o produto da força pelo intervalo de tempo de sua aplicação (I = F · Δt), e é igual à variação da quantidade de movimento.' },
  { id: 41, topicId: 'qui-1', question: 'O que o Princípio de Le Chatelier diz sobre um sistema em equilíbrio?', answer: 'Se uma perturbação externa é aplicada a um sistema em equilíbrio, ele se ajustará para minimizar o efeito dessa perturbação.' },
  { id: 42, topicId: 'qui-4', question: 'Qual é a reação que transforma um álcool e um ácido carboxílico em um éster e água?', answer: 'Reação de Esterificação.' },
  { id: 43, topicId: 'qui-1', question: 'O que é uma partícula alfa (α) no contexto da radioatividade?', answer: 'É um núcleo de Hélio, composto por 2 prótons e 2 nêutrons.' },
  { id: 44, topicId: 'qui-2', question: 'Qual a relação entre pH e pOH a 25°C?', answer: 'pH + pOH = 14.' },
  { id: 45, topicId: 'qui-5', question: 'O que significa o potencial padrão de redução (E°) de uma espécie química?', answer: 'É a tendência que ela tem de receber elétrons (sofrer redução). Quanto maior o E°, maior a tendência.' },
];

export const EXAM_QUESTIONS: ExamQuestion[] = [
  // MATEMÁTICA
  {
    id: 1,
    topicId: 'mat-1',
    source: 'ENEM',
    statement: 'O custo total C de produção de x unidades de um produto é dado pela função C(x) = 2x² - 40x + 500. Qual o número de unidades que minimiza o custo total?',
    options: [
      '5 unidades',
      '10 unidades',
      '20 unidades',
      '40 unidades',
      '50 unidades'
    ],
    correctAnswerIndex: 1,
    explanation: 'A função é uma parábola com concavidade para cima (a=2 > 0), então o ponto de mínimo é o vértice. A coordenada x do vértice é dada por xᵥ = -b / 2a. Substituindo, xᵥ = -(-40) / (2 * 2) = 40 / 4 = 10 unidades.'
  },
  {
    id: 2,
    topicId: 'mat-2',
    source: 'FUVEST',
    statement: 'Um reservatório tem a forma de um cilindro circular reto com raio da base de 5 metros e altura de 10 metros. Qual o volume máximo de água que ele pode armazenar? (Use π ≈ 3,14)',
    options: [
      '785 m³',
      '500 m³',
      '314 m³',
      '250 m³',
      '1000 m³'
    ],
    correctAnswerIndex: 0,
    explanation: 'O volume do cilindro é dado por V = Área da base × altura = πr²h. Substituindo os valores: V = 3,14 * (5)² * 10 = 3,14 * 25 * 10 = 3,14 * 250 = 785 m³.'
  },
  {
    id: 3,
    topicId: 'mat-3',
    source: 'ENEM',
    statement: 'Em um grupo de 10 pessoas, quantas comissões de 3 pessoas podem ser formadas?',
    options: [
      '10',
      '30',
      '120',
      '720',
      '1000'
    ],
    correctAnswerIndex: 2,
    explanation: 'A ordem das pessoas na comissão não importa, então é um problema de Combinação Simples: C(n, k) = n! / (k! * (n-k)!). C(10, 3) = 10! / (3! * 7!) = (10 * 9 * 8) / (3 * 2 * 1) = 720 / 6 = 120 comissões.'
  },
  {
    id: 4,
    topicId: 'mat-1',
    source: 'Provão Paulista',
    statement: 'Qual o valor de x na equação exponencial 2ˣ⁺¹ = 32?',
    options: [
      '2',
      '3',
      '4',
      '5',
      '6'
    ],
    correctAnswerIndex: 2,
    explanation: 'Primeiro, reescrevemos 32 como uma potência de 2: 32 = 2⁵. A equação fica 2ˣ⁺¹ = 2⁵. Igualando os expoentes, temos x + 1 = 5. Portanto, x = 4.'
  },
  {
    id: 5,
    topicId: 'mat-2',
    source: 'FUVEST',
    statement: 'Calcule a distância entre os pontos A(1, 2) e B(4, 6) no plano cartesiano.',
    options: [
      '3',
      '4',
      '5',
      '7',
      '10'
    ],
    correctAnswerIndex: 2,
    explanation: 'A distância é dada por d = √((x₂ - x₁)² + (y₂ - y₁)²). d = √((4 - 1)² + (6 - 2)²) = √(3² + 4²) = √(9 + 16) = √25 = 5.'
  },
  // FÍSICA
  {
    id: 6,
    topicId: 'fis-1',
    source: 'ENEM',
    statement: 'Um carro se desloca em linha reta com velocidade constante de 72 km/h. Qual a distância percorrida por ele em 10 segundos?',
    options: [
      '720 m',
      '200 m',
      '72 m',
      '100 m',
      '20 m'
    ],
    correctAnswerIndex: 1,
    explanation: 'Primeiro, converta a velocidade para m/s: 72 km/h ÷ 3,6 = 20 m/s. Como a velocidade é constante (MRU), a distância é dada por ΔS = V · t. ΔS = 20 m/s * 10 s = 200 metros.'
  },
  {
    id: 7,
    topicId: 'fis-2',
    source: 'FUVEST',
    statement: 'Um bloco de massa 10 kg está em repouso sobre uma superfície horizontal. Uma força horizontal de 50 N é aplicada. Se o coeficiente de atrito cinético entre o bloco e a superfície é 0,2, qual a aceleração do bloco? (Use g = 10 m/s²)',
    options: [
      '2 m/s²',
      '3 m/s²',
      '4 m/s²',
      '5 m/s²',
      '6 m/s²'
    ],
    correctAnswerIndex: 1,
    explanation: 'A força de atrito (F_at) é dada por F_at = μ_c · N, onde N é a força normal. Em uma superfície horizontal, N = Peso = m · g. N = 10 kg * 10 m/s² = 100 N. F_at = 0,2 * 100 N = 20 N. A força resultante é F_R = F_aplicada - F_at = 50 N - 20 N = 30 N. Pela Segunda Lei de Newton, F_R = m · a. 30 N = 10 kg * a. a = 3 m/s².'
  },
  {
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
  // Questões da 1ª leva
  {
    id: 17,
    topicId: 'mat-1',
    source: 'ENEM',
    statement: 'Uma população de bactérias cresce segundo a função P(t) = 100 * 2^(t/5), onde t é o tempo em horas. Após quanto tempo a população atingirá 3200 bactérias?',
    options: ['10 horas', '15 horas', '20 horas', '25 horas', '30 horas'],
    correctAnswerIndex: 3,
    explanation: 'Queremos encontrar t tal que P(t) = 3200. 3200 = 100 * 2^(t/5). Dividindo por 100, temos 32 = 2^(t/5). Como 32 = 2^5, podemos igualar os expoentes: 5 = t/5. Portanto, t = 25 horas.'
  },
  {
    id: 18,
    topicId: 'mat-2',
    source: 'FUVEST',
    statement: 'Em um triângulo ABC, o lado AB mede 6 cm, o lado AC mede 10 cm e o ângulo BÂC mede 120°. Qual a medida do lado BC? (Use cos(120°) = -0,5)',
    options: ['12 cm', '13 cm', '14 cm', '15 cm', '16 cm'],
    correctAnswerIndex: 2,
    explanation: 'Pela Lei dos Cossenos, temos a² = b² + c² - 2bc*cos(A). BC² = AC² + AB² - 2*AC*AB*cos(120°). BC² = 10² + 6² - 2*10*6*(-0,5). BC² = 100 + 36 - 120*(-0,5) = 136 + 60 = 196. BC = √196 = 14 cm.'
  },
  {
    id: 19,
    topicId: 'fis-2',
    source: 'Provão Paulista',
    statement: 'Um corpo de 5 kg está totalmente submerso em água (densidade = 1000 kg/m³). Se o volume do corpo é de 0,002 m³, qual a intensidade do empuxo que atua sobre ele? (Use g = 10 m/s²)',
    options: ['10 N', '20 N', '30 N', '40 N', '50 N'],
    correctAnswerIndex: 1,
    explanation: 'O empuxo (E) é dado pelo Teorema de Arquimedes: E = d_líquido * V_submerso * g. Substituindo os valores: E = 1000 kg/m³ * 0,002 m³ * 10 m/s² = 2 * 10 = 20 N.'
  },
  {
    id: 20,
    topicId: 'fis-2',
    source: 'ENEM',
    statement: 'Um vagão de trem de 10.000 kg movendo-se a 2 m/s colide e se acopla a outro vagão de mesma massa que estava em repouso. Qual a velocidade do conjunto após a colisão?',
    options: ['0,5 m/s', '1 m/s', '1,5 m/s', '2 m/s', '4 m/s'],
    correctAnswerIndex: 1,
    explanation: 'A colisão é inelástica e há conservação da quantidade de movimento. Q_antes = Q_depois. (m1*v1) + (m2*v2) = (m1+m2)*V_final. (10000 * 2) + (10000 * 0) = (10000 + 10000) * V_final. 20000 = 20000 * V_final. V_final = 1 m/s.'
  },
  {
    id: 21,
    topicId: 'qui-1',
    source: 'FUVEST',
    statement: 'A síntese de amônia é dada pela reação N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Partindo-se de 56g de N₂ e 9g de H₂, qual é o reagente limitante e qual a massa máxima de amônia formada? (Massas molares: N=14 g/mol, H=1 g/mol)',
    options: ['H₂ é o limitante; 51g de NH₃', 'N₂ é o limitante; 68g de NH₃', 'H₂ é o limitante; 34g de NH₃', 'N₂ é o limitante; 17g de NH₃', 'Não há limitante; 65g de NH₃'],
    correctAnswerIndex: 0,
    explanation: 'Primeiro, calculamos os mols de cada reagente: n(N₂) = 56g / 28g/mol = 2 mols. n(H₂) = 9g / 2g/mol = 4,5 mols. A proporção estequiométrica é de 1 mol de N₂ para 3 mols de H₂. Para consumir 2 mols de N₂, seriam necessários 2 * 3 = 6 mols de H₂. Como temos apenas 4,5 mols de H₂, ele é o reagente limitante. O cálculo do produto é feito com base no limitante. 3 mols de H₂ produzem 2 mols de NH₃. Portanto, 4,5 mols de H₂ produzirão (4,5 * 2 / 3) = 3 mols de NH₃. A massa de amônia (MM=17g/mol) formada é 3 mols * 17 g/mol = 51g.'
  },
  {
    id: 22,
    topicId: 'qui-4',
    source: 'Provão Paulista',
    statement: 'A reação entre um ácido carboxílico e um álcool, na presença de um catalisador ácido, forma qual função orgânica e água?',
    options: ['Éter', 'Aldeído', 'Cetona', 'Éster', 'Amina'],
    correctAnswerIndex: 3,
    explanation: 'Esta é a definição da reação de esterificação. Um ácido carboxílico reage com um álcool para formar um éster e água. Essa reação é um exemplo de condensação e é reversível (a reação inversa é a hidrólise de éster).'
  },
  // Novas Questões (2ª leva)
  {
    id: 23,
    topicId: 'mat-1',
    source: 'ENEM',
    statement: 'A escala Richter de magnitude de terremotos é logarítmica. Um terremoto de magnitude 7 é quantas vezes mais intenso (em termos de amplitude de onda) que um de magnitude 5?',
    options: ['2 vezes', '10 vezes', '20 vezes', '100 vezes', '1000 vezes'],
    correctAnswerIndex: 3,
    explanation: 'A escala Richter é logarítmica de base 10. A diferença de magnitude é M₂ - M₁ = 7 - 5 = 2. A razão das intensidades é I₂/I₁ = 10^(M₂ - M₁) = 10² = 100. Portanto, é 100 vezes mais intenso.'
  },
  {
    id: 24,
    topicId: 'mat-2',
    source: 'FUVEST',
    statement: 'Em um cubo de aresta "a", qual é o comprimento da diagonal do cubo (a diagonal que conecta dois vértices opostos passando pelo centro)?',
    options: ['a√2', 'a√3', '2a', '3a', 'a²/2'],
    correctAnswerIndex: 1,
    explanation: 'Primeiro, calcula-se a diagonal da base (d_base) usando Pitágoras: d_base² = a² + a² = 2a². d_base = a√2. Agora, considera-se o triângulo retângulo formado pela diagonal da base, uma aresta vertical e a diagonal do cubo (D_cubo). Usando Pitágoras novamente: D_cubo² = (d_base)² + a² = (a√2)² + a² = 2a² + a² = 3a². Portanto, D_cubo = a√3.'
  },
  {
    id: 25,
    topicId: 'fis-3',
    source: 'Provão Paulista',
    statement: 'Um fio retilíneo de 2 metros de comprimento é percorrido por uma corrente de 5 A e está imerso em um campo magnético uniforme de 0,4 T, perpendicular ao fio. Qual a intensidade da força magnética que atua sobre o fio?',
    options: ['1 N', '2 N', '4 N', '8 N', '10 N'],
    correctAnswerIndex: 2,
    explanation: 'A força magnética sobre um fio é dada por F = B · i · L · sen(θ). Como o campo é perpendicular ao fio, θ = 90° e sen(90°) = 1. Substituindo os valores: F = 0,4 T * 5 A * 2 m * 1 = 4 N.'
  },
  {
    id: 26,
    topicId: 'fis-5',
    source: 'ENEM',
    statement: 'Fones de ouvido com cancelamento de ruído ativo geram uma onda sonora própria que anula o ruído externo. Qual fenômeno ondulatório explica esse funcionamento?',
    options: ['Refração', 'Difração', 'Polarização', 'Efeito Doppler', 'Interferência Destrutiva'],
    correctAnswerIndex: 4,
    explanation: 'O cancelamento ocorre quando o fone gera uma onda sonora que está em oposição de fase com a onda do ruído externo. A superposição dessas duas ondas resulta em uma interferência destrutiva, que anula ou atenua significativamente o som percebido.'
  },
  {
    id: 27,
    topicId: 'qui-1',
    source: 'FUVEST',
    statement: 'Considere o equilíbrio: 2NO₂(g) ⇌ N₂O₄(g) (ΔH < 0). O NO₂ é castanho e o N₂O₄ é incolor. Para aumentar a intensidade da cor castanha no recipiente, o que se deve fazer?',
    options: ['Aumentar a pressão', 'Diminuir a temperatura', 'Adicionar um catalisador', 'Aumentar a temperatura', 'Remover N₂O₄'],
    correctAnswerIndex: 3,
    explanation: 'Para aumentar a cor castanha, o equilíbrio deve ser deslocado para a esquerda (lado do NO₂). A reação direta é exotérmica (ΔH < 0), então a inversa é endotérmica. De acordo com o Princípio de Le Chatelier, aumentar a temperatura favorece a reação endotérmica, deslocando o equilíbrio para a esquerda e aumentando a concentração de NO₂.'
  },
  {
    id: 28,
    topicId: 'qui-4',
    source: 'Provão Paulista',
    statement: 'Qual é o nome oficial (IUPAC) para o composto orgânico cuja fórmula estrutural é CH₃-CH(CH₃)-CH₂-OH?',
    options: ['Butan-1-ol', '2-Metilpropan-1-ol', '2-Metilpropan-2-ol', 'Pentan-2-ol', 'Propan-2-ol'],
    correctAnswerIndex: 1,
    explanation: 'A cadeia principal tem 3 carbonos (prop-). A hidroxila (-OH) está no carbono 1, tornando-o um propan-1-ol. Há um grupo metil (-CH₃) no carbono 2. Portanto, o nome completo é 2-Metilpropan-1-ol.'
  }
];
