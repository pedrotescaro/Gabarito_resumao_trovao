import React, { useState, useCallback } from 'react';
import { CopyIcon, CheckIcon } from './Icons'; // Import new icons

const SectionTitle: React.FC<{children: React.ReactNode}> = ({ children }) => <h2 className="text-3xl font-bold mt-10 mb-6 border-b border-border pb-2 text-primary">{children}</h2>;
const SubTitle: React.FC<{children: React.ReactNode}> = ({ children }) => <h3 className="text-2xl font-semibold mt-8 mb-4">{children}</h3>;

interface FormulaProps {
    children: React.ReactNode;
}

const Formula: React.FC<FormulaProps> = ({ children }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = useCallback(async () => {
        const formulaText = String(children).replace(/<[^>]*>?/gm, ''); // Remove HTML tags if any
        try {
            await navigator.clipboard.writeText(formulaText);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy formula: ', err);
            // Optionally, show an error message
        }
    }, [children]);

    return (
        <div className="inline-flex items-center group relative mb-2">
            <code className="bg-primary/10 border border-blue-500/30 text-blue-700 dark:text-blue-300 px-2.5 py-1.5 rounded font-mono text-base lg:text-lg">
                {children}
            </code>
            <button
                onClick={handleCopy}
                className="absolute -top-2 -right-2 p-1 bg-background border border-border rounded-full opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200"
                aria-label="Copiar fórmula"
                title="Copiar fórmula"
            >
                {isCopied ? <CheckIcon className="h-3 w-3 text-green-500" /> : <CopyIcon className="h-3 w-3 text-muted-foreground" />}
            </button>
        </div>
    );
};


const Table: React.FC<{headers: string[], rows: (string | React.ReactNode)[][]}> = ({ headers, rows }) => (
  <div className="overflow-x-auto my-6">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="bg-muted">
          {headers.map((header, i) => <th key={i} className="border border-border p-3 text-left font-semibold">{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-t border-border even:bg-secondary/50">
            {row.map((cell, j) => <td key={j} className="border border-border p-3 align-top">{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const mathTopics = {
    headers: ['Tópico Principal', 'Subtópicos Essenciais', 'ENEM (Ênfase)', 'FUVEST/Provão Paulista (Ênfase)'],
    rows: [
        ['Matemática Básica', 'Razão, Proporção, Porcentagem, Regra de Três. Médias (Aritmética, Ponderada, Geométrica). Leitura e interpretação de gráficos e tabelas.', 'Altíssima (Base para 90% da prova, contextualizada em finanças, demografia, etc.)', 'Alta (Fundamental, exigida como ferramenta para cálculos rápidos e precisos)'],
        ['Geometria', (
            <div>
                <div className="font-semibold text-primary/80">Plana</div>
                <p className="text-sm mb-1">Áreas (Triângulo: <Formula>A=(b·h)/2</Formula>), Pitágoras (<Formula>a²=b²+c²</Formula>).</p>
                <div className="font-semibold text-primary/80 mt-2">Espacial</div>
                <p className="text-sm mb-1">Volumes (Prisma: <Formula>V=A_b·h</Formula>, Pirâmide: <Formula>V=(A_b·h)/3</Formula>).</p>
                <div className="font-semibold text-primary/80 mt-2">Analítica</div>
                <p className="text-sm"><Formula>Dist. entre pontos</Formula>, Eq. da Reta (<Formula>y=mx+q</Formula>).</p>
            </div>
        ), 'Alta (Contextualização, cálculo de volumes e áreas em cenários práticos como caixas d\'água e terrenos)', 'Alta (Rigor em demonstrações, Geometria Analítica aprofundada, polígonos inscritos e circunscritos)'],
        ['Funções', (
            <div>
                <div className="flex items-center gap-4 mb-2">
                    <svg width="60" height="50" viewBox="0 0 60 50" className="w-full h-auto max-w-[60px] text-blue-500"><path d="M5 45 L55 5" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M5 25 L55 25" stroke="hsl(var(--border))" strokeDasharray="2 2"/><path d="M30 5 L30 45" stroke="hsl(var(--border))" strokeDasharray="2 2"/></svg>
                    <div>
                        <div className="font-semibold text-primary/80">1º Grau (Afim)</div>
                        <p className="text-sm"><Formula>f(x)=ax+b</Formula></p>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-2">
                    <svg width="60" height="50" viewBox="0 0 60 50" className="w-full h-auto max-w-[60px] text-green-500"><path d="M5 45 Q30 -10 55 45" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M5 45 L55 45" stroke="hsl(var(--border))" strokeDasharray="2 2"/><path d="M30 5 L30 45" stroke="hsl(var(--border))" strokeDasharray="2 2"/></svg>
                    <div>
                        <div className="font-semibold text-primary/80">2º Grau (Quadrática)</div>
                        <p className="text-sm">Parábola: <Formula>f(x)=ax²+bx+c</Formula></p>
                    </div>
                </div>
            </div>
        ), 'Média/Alta (Interpretação de gráficos que modelam crescimento populacional, juros, decaimento radioativo)', 'Alta (Manipulação algébrica complexa, composição de funções, funções modulares e trigonométricas)'],
        ['Estatística e Probabilidade', 'Estatística: Média, Mediana e Moda. Medidas de dispersão (desvio padrão, variância). Análise Combinatória: Princípio fundamental da contagem, Permutação, Arranjo, Combinação. Probabilidade: Clássica, união de eventos e condicional.', 'Alta (Análise crítica de dados, interpretação de pesquisas e cenários de incerteza)', 'Média/Alta (Análise Combinatória robusta e problemas de probabilidade mais teóricos)'],
        ['Trigonometria', 'Relações trigonométricas no triângulo retângulo (seno, cosseno, tangente). Círculo trigonométrico. Funções, equações e inequações trigonométricas. Lei dos Senos e Lei dos Cossenos.', 'Média (Foco na aplicação em problemas geométricos, como cálculo de distâncias inacessíveis)', 'Alta (Exigência maior em manipulação de identidades, funções e equações trigonométricas)'],
    ]
};

const mathFormulas = {
    headers: ['Área', 'Fórmula', 'Descrição', 'Aplicação / Dica Detalhada'],
    rows: [
        ['Geometria Plana', <Formula>A = &pi; &middot; r&sup2;</Formula>, 'Área do Círculo.', "Derivada do cálculo integral, pode ser visualizada como a soma de infinitos triângulos finos partindo do centro. **Cenário:** Calcular a área de uma pizza para saber o preço por cm² ou a área da base de um reservatório cilíndrico."],
        ['Geometria Espacial', <Formula>V = A_base &middot; h</Formula>, 'Volume de Prismas e Cilindros.', "Baseado no Princípio de Cavalieri. Imagine 'empilhar' a área da base até atingir a altura 'h'. **Cenário:** Calcular o volume de água em uma piscina retangular (A_base = comp*larg) ou a capacidade de uma lata de refrigerante (A_base = πr²)."],
        ['Geometria Espacial', <Formula>V = (1/3) &middot; A_base &middot; h</Formula>, 'Volume de Pirâmides e Cones.', "O fator 1/3 é provado por cálculo integral e demonstra que o volume do cone/pirâmide é um terço do volume do cilindro/prisma que o circunscreve. **Cenário:** Calcular o volume de uma casquinha de sorvete ou de uma ampulheta."],
        ['Funções', <Formula>x = (-b &plusmn; &radic;&Delta;) / 2a</Formula>, 'Fórmula de Bhaskara (com &Delta; = b&sup2; - 4ac).', "Derivada da técnica de 'completar quadrados' na equação ax² + bx + c = 0. É um método universal para achar as raízes. **Cenário:** Encontrar os instantes em que uma bola lançada para cima atinge uma certa altura."],
        ['Funções', <Formula>Xv = -b/2a; Yv = -&Delta;/4a</Formula>, 'Coordenadas do vértice da parábola.', "O Xv é o ponto médio entre as raízes. O Yv é o valor da função nesse ponto. **Cenário:** Determinar o preço que maximiza o lucro de uma empresa, a altura máxima de um projétil ou a dimensão de um terreno que minimiza o custo de cercá-lo."],
        ['Progressões', <Formula>a_n = a_1 + (n-1) &middot; r</Formula>, 'Termo Geral da PA.', "Deriva-se ao perceber que para ir de a₁ para a₂, somamos 'r' uma vez. Para ir para a₃, somamos 'r' duas vezes, e assim por diante. Para chegar em a_n, somamos 'r' (n-1) vezes. **Cenário:** Calcular o valor de uma dívida com juros simples após 'n' meses."],
        ['Progressões', <Formula>a_n = a_1 &middot; q&circ;⁽ⁿ⁻&sup1;⁾</Formula>, 'Termo Geral da PG.', "A lógica é similar à da PA, mas com multiplicação. Para chegar em a_n, partimos de a₁ e o multiplicamos pela razão 'q' um total de (n-1) vezes. **Cenário:** Calcular o montante de um investimento com juros compostos ou o crescimento de uma população de bactérias."],
        ['Trigonometria', <Formula>a&sup2; = b&sup2; + c&sup2; - 2bc&middot;cos(A)</Formula>, 'Lei dos Cossenos.', "Generalização do Teorema de Pitágoras para qualquer triângulo. Note que se A=90°, cos(A)=0, e a fórmula se reduz a a²=b²+c². **Cenário:** Calcular a distância entre dois pontos separados por um obstáculo, conhecendo a distância de um terceiro ponto a eles e o ângulo formado."],
        ['Trigonometria', <Formula>a/sin(A) = b/sin(B)</Formula>, 'Lei dos Senos.', "Derivada da relação com o raio da circunferência que circunscreve o triângulo (a/sin(A) = 2R). **Cenário:** Usada em topografia para calcular distâncias inacessíveis, quando se conhece um lado do triângulo e dois ângulos."],
    ]
};

const mathQuestions = {
    headers: ['Tópico Principal', 'ENEM (Contextualização)', 'FUVEST (Rigor e Álgebra)', 'Provão Paulista (Aplicação Direta)'],
    rows: [
        ['Matemática Básica', <>Uma viagem de 560 km foi percorrida em 7 horas. Mantendo a mesma velocidade média, em quanto tempo um trecho de 240 km será percorrido?<br /><strong className="text-primary">R:</strong> <Formula>3 horas</Formula></>, <>Se 5 operários, trabalhando 6 h/dia, constroem 150 m de muro em 10 dias, quantos dias 8 operários, a 5 h/dia, precisarão para construir 320 m?<br /><strong className="text-primary">R:</strong> <Formula>16 dias</Formula></>, <>Uma mercadoria custa R$ 400,00. Se for vendida com 20% de desconto, qual será o preço final?<br /><strong className="text-primary">R:</strong> <Formula>R$ 320,00</Formula></>],
        ['Geometria', <>Um reservatório cilíndrico com r=2m e h=3m tem V=37,68 m³. Um paralelepípedo com mesma altura e volume deve ter que lado de base x?<br /><strong className="text-primary">R:</strong> <Formula>x = 3,54 m</Formula></>, <>Um triângulo ABC com A(2,4) e B(-2,1) é isósceles com base AB. Qual a coordenada y do ponto C(0,y)?<br /><strong className="text-primary">R:</strong> <Formula>y = 2,5</Formula></>, <>Calcule a área de um trapézio com base maior 20m, base menor 12m e altura 8m.<br /><strong className="text-primary">R:</strong> <Formula>A = 128 m²</Formula></>],
        ['Funções', <>O nível sonoro é &beta; = 10&middot;log(I/I₀), com I₀=10⁻¹² W/m². Para um show com &beta;=120 dB, qual é a intensidade I?<br /><strong className="text-primary">R:</strong> <Formula>I = 1 W/m²</Formula></>, <>Uma função quadrática tem raízes 2 e -4 e passa por (0,-8). Determine o coeficiente 'a'.<br /><strong className="text-primary">R:</strong> <Formula>a = 1</Formula></>, <>Uma conta de celular é C(t)=30+0,5t. Qual o custo para 120 minutos?<br /><strong className="text-primary">R:</strong> <Formula>R$ 90,00</Formula></>],
        ['Estat./Prob.', <>Num grupo, 60% são homens, 10% deles são vegetarianos. 40% são mulheres, 5% delas são vegetarianas. Qual a prob. de um vegetariano ser homem?<br /><strong className="text-primary">R:</strong> <Formula>75%</Formula></>, <></>, <></>],
        ['Trigonometria', <>Uma pessoa a 50m da base de um prédio vê o topo sob um ângulo de 30°. Se tg(30&deg;) &asymp; 0,58, qual a altura do prédio?<br /><strong className="text-primary">R:</strong> <Formula>29 m</Formula></>, <>Se sin(x) = 1/3, calcule cos(2x).<br /><strong className="text-primary">R:</strong> <Formula>cos(2x) = 7/9</Formula></>, <>Em um triângulo retângulo, o cateto oposto a &alpha; é 5 e a hipotenusa é 13. Qual o valor de sin(&alpha;)?<br /><strong className="text-primary">R:</strong> <Formula>5/13</Formula></>]
    ]
};

const physicsTopics = {
    headers: ['Tópico Principal', 'Subtópicos Essenciais', 'ENEM (Ênfase)', 'FUVEST/Provão Paulista (Ênfase)'],
    rows: [
        ['Mecânica', 'Cinemática (MRU, MRUV, Queda Livre, Lançamentos). Dinâmica (Leis de Newton, Forças de atrito, normal, peso, tração, plano inclinado). Trabalho e Energia (Cinética, Potencial, sistemas conservativos e dissipativos). Impulso e Quantidade de Movimento (Colisões). Hidrostática (Pressão, Empuxo).', 'Altíssima (Energia e Cinemática em situações do dia a dia. Foco conceitual nas Leis de Newton)', 'Altíssima (Rigor matemático em Dinâmica, colisões, sistemas de blocos e estática)'],
        ['Eletricidade', (
            <div>
                <div className="font-semibold text-primary/80">Eletrodinâmica</div>
                <p className="text-sm mb-2">1ª Lei de Ohm: <Formula>U = R·i</Formula></p>
                <p className="text-sm mb-2">Potência: <Formula>P = U·i</Formula></p>
                <div className="mt-4 w-full flex justify-center">
                    <svg viewBox="0 0 170 120" className="w-full h-auto max-w-[170px] text-foreground"> {/* Increased viewBox */}
                        <style>
                            {`.cheatsheet-text-label { font-family: 'Arial', sans-serif; font-size: 16px; fill: hsl(var(--muted-foreground)); font-weight: 600; }
                            .cheatsheet-text-resistor { font-family: 'Arial', sans-serif; font-size: 14px; fill: hsl(var(--muted-foreground)); }`} {/* Increased resistor label font size */}
                        </style>
                        {/* Série */}
                        <text x="10" y="20" className="cheatsheet-text-label">Série</text>
                        <path d="M10 35 H40" stroke="currentColor" strokeWidth="1.5" fill="none"/> {/* Adjusted path */}
                        <rect x="40" y="32" width="35" height="6" className="stroke-currentColor fill-background" strokeWidth="1"/> {/* Adjusted resistor size */}
                        <text x="57" y="28" textAnchor="middle" className="cheatsheet-text-resistor">R₁</text> {/* Adjusted position */}
                        <path d="M75 35 H105" stroke="currentColor" strokeWidth="1.5" fill="none"/> {/* Adjusted path */}
                        <rect x="105" y="32" width="35" height="6" className="stroke-currentColor fill-background" strokeWidth="1"/> {/* Adjusted resistor size */}
                        <text x="122" y="28" textAnchor="middle" className="cheatsheet-text-resistor">R₂</text> {/* Adjusted position */}
                        <path d="M140 35 H160" stroke="currentColor" strokeWidth="1.5" fill="none"/> {/* Adjusted path */}
                        
                        {/* Paralelo */}
                        <text x="10" y="65" className="cheatsheet-text-label">Paralelo</text>
                        <path d="M30 90 H35 M35 90 V70 M35 90 V110" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <path d="M145 70 V90 M145 110 V90 M145 90 H150" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        {/* Branch 1 */}
                        <path d="M35 70 H60" stroke="currentColor" strokeWidth="1.5" fill="none"/> {/* Adjusted path */}
                        <rect x="60" y="67" width="35" height="6" className="stroke-currentColor fill-background" strokeWidth="1"/> {/* Adjusted resistor size */}
                        <text x="77" y="63" textAnchor="middle" className="cheatsheet-text-resistor">R₁</text> {/* Adjusted position */}
                        <path d="M95 70 H145" stroke="currentColor" strokeWidth="1.5" fill="none"/> {/* Adjusted path */}
                        {/* Branch 2 */}
                        <path d="M35 110 H60" stroke="currentColor" strokeWidth="1.5" fill="none"/> {/* Adjusted path */}
                        <rect x="60" y="107" width="35" height="6" className="stroke-currentColor fill-background" strokeWidth="1"/> {/* Adjusted resistor size */}
                        <text x="77" y="103" textAnchor="middle" className="cheatsheet-text-resistor">R₂</text> {/* Adjusted position */}
                        <path d="M95 110 H145" stroke="currentColor" strokeWidth="1.5" fill="none"/> {/* Adjusted path */}
                    </svg>
                </div>
            </div>
        ), 'Alta (Eletrodinâmica é o mais cobrado: consumo de energia, análise de circuitos residenciais, efeito Joule)', 'Alta (Todos os tópicos são relevantes, com ênfase em campo elétrico, potencial e indução)'],
        ['Termologia', (
            <div>
                <div className="font-semibold text-primary/80">Calorimetria</div>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-sm mb-1">Sensível: <Formula>Q=mcΔT</Formula></p>
                    <p className="text-sm mb-1">Latente: <Formula>Q=mL</Formula></p>
                  </div>
                  <svg viewBox="0 0 80 40" className="w-full h-auto max-w-[80px] text-foreground">
                    <rect x="5" y="10" width="20" height="20" className="fill-red-500/20"/>
                    <text x="15" y="24" textAnchor="middle" className="text-[14px] fill-red-700 dark:fill-red-300">Quente</text>
                    <rect x="55" y="10" width="20" height="20" className="fill-blue-500/20"/>
                    <text x="65" y="24" textAnchor="middle" className="text-[14px] fill-blue-700 dark:fill-blue-300">Frio</text>
                    <path d="M30 20 L50 20" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#cheatsheet_arrow)"/>
                    <defs><marker id="cheatsheet_arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" /></marker></defs>
                  </svg>
                </div>
                <div className="font-semibold text-primary/80 mt-2">Termodinâmica</div>
                <p className="text-sm"><Formula>1ª Lei: ΔU = Q - W</Formula></p>
            </div>
        ), 'Média/Alta (Trocas de calor, fenômenos do cotidiano como isolamento térmico, e noções de máquinas térmicas)', 'Média/Alta (Estudo aprofundado das Leis da Termodinâmica e transformações gasosas)'],
        ['Ondulatória e Óptica', (
            <div>
                <div className="font-semibold text-primary/80">Ondulatória</div>
                <p className="text-sm mb-2"><Formula>Eq. Fundamental: v = λ·f</Formula></p>
                <div className="font-semibold text-primary/80 mt-2">Óptica (Refração)</div>
                <p className="text-sm mb-2"><Formula>Lei de Snell: n₁·senθ₁ = n₂·senθ₂</Formula></p>
                <div className="mt-4 w-full flex justify-center">
                    <svg viewBox="0 0 170 120" className="w-full h-auto max-w-[170px] text-foreground"> {/* Increased viewBox */}
                        <style>
                            {`.cheatsheet-text-small { font-family: 'Arial', sans-serif; font-size: 14px; fill: hsl(var(--muted-foreground)); }
                            .cheatsheet-wave-path { stroke: hsl(var(--primary)); }
                            .cheatsheet-ray-path { stroke: hsl(var(--primary)); }
                            .cheatsheet-normal-line { stroke: hsl(var(--border)); stroke-dasharray: 2 2; }
                            .cheatsheet-interface-line { stroke: hsl(var(--border)); }`}
                        </style>
                        <defs>
                            <marker id="cheatsheet_arrow_optics" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" className="fill-primary" />
                            </marker>
                        </defs>
                        {/* Ondulatória */}
                        <path d="M5 20 H80" className="cheatsheet-interface-line" strokeWidth="0.5"/> {/* Adjusted path */}
                        <path d="M5 20 Q 25 5, 45 20 T 75 20" className="cheatsheet-wave-path" strokeWidth="1.5" fill="none"/> {/* Adjusted wave path */}
                        <path d="M25 12.5 V 20" className="cheatsheet-normal-line" strokeWidth="0.5"/> {/* Adjusted line */}
                        <text x="27" y="18" className="cheatsheet-text-small">A</text>
                        <path d="M5 25 H 75" className="cheatsheet-normal-line" strokeWidth="0.5"/>
                        <path d="M5 23 V 27" className="cheatsheet-normal-line" strokeWidth="0.5"/>
                        <path d="M75 23 V 27" className="cheatsheet-normal-line" strokeWidth="0.5"/>
                        <text x="40" y="35" textAnchor="middle" className="cheatsheet-text-small">λ</text> {/* Adjusted position */}
                        
                        {/* Óptica (Refração) */}
                        <path d="M90 30 H160" className="cheatsheet-interface-line" strokeWidth="1"/> {/* Adjusted path */}
                        <text x="95" y="25" className="cheatsheet-text-small">n₁</text>
                        <text x="95" y="40" className="cheatsheet-text-small">n₂</text>
                        <path d="M120 5 V 55" className="cheatsheet-normal-line" strokeDasharray="2 2" strokeWidth="1"/> {/* Adjusted line */}
                        <path d="M100 10 L120 30 L135 55" className="cheatsheet-ray-path" strokeWidth="1.5" fill="none" markerEnd="url(#cheatsheet_arrow_optics)"/> {/* Adjusted ray path */}
                        <path d="M120 30 A 10 10 0 0 0 113.4 21.7" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
                        <text x="115" y="24" className="cheatsheet-text-small">θ₁</text> {/* Adjusted position */}
                        <path d="M120 30 A 8 8 0 0 1 124 37.5" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5"/>
                        <text x="128" y="38" className="cheatsheet-text-small">θ₂</text> {/* Adjusted position */}
                    </svg>
                </div>
            </div>
        ), 'Alta (Fenômenos ondulatórios com som e luz, e suas aplicações tecnológicas, como fones com cancelamento de ruído)', 'Média/Alta (Formação de imagens em espelhos e lentes, Lei de Snell com rigor matemático)'],
    ]
};

const physicsFormulas = {
    headers: ['Área', 'Fórmula', 'Descrição', 'Aplicação / Dica Detalhada'],
    rows: [
        ['Cinemática', <Formula>S = S₀ + v₀t + (at&sup2;)/2</Formula>, 'Função Horária da Posição (MRUV).', "Derivada pela integração da função da velocidade (v=v₀+at) em relação ao tempo. **Cenário:** Prever a posição de um carro que acelera ou freia, ou a altura de um objeto em queda livre após um certo tempo."],
        ['Cinemática', <Formula>v&sup2; = v₀&sup2; + 2a&Delta;S</Formula>, 'Equação de Torricelli.', "Obtida algebricamente ao isolar 't' na equação da velocidade (t = (v-v₀)/a) e substituir no 'Sorvetão'. **Cenário:** Calcular a velocidade de um objeto ao atingir o solo após cair de uma altura H, sem precisar saber o tempo de queda."],
        ['Dinâmica', <Formula>F_R = m &middot; a</Formula>, 'Segunda Lei de Newton.', "Esta é a definição de Força. Ela não é derivada, é um princípio fundamental da natureza. **Cenário:** Calcular a aceleração de um bloco ao ser empurrado, considerando a força aplicada e a força de atrito contrária. A F_R é a diferença entre elas."],
        ['Energia', <Formula>W = F &middot; d &middot; cos(&theta;)</Formula>, 'Trabalho de uma força constante.', "Deriva do produto escalar entre os vetores Força e Deslocamento. **Cenário:** O motor de um guindaste realiza trabalho para levantar uma carga (força e deslocamento para cima, θ=0). A força peso realiza trabalho negativo neste caso (deslocamento para cima, peso para baixo, θ=180)."],
        ['Energia', <Formula>E_mec = E_c + E_p</Formula>, 'Energia Mecânica.', "Princípio da Conservação da Energia. Em sistemas sem atrito, a energia total não se cria nem se perde, apenas se transforma. **Cenário:** Numa montanha-russa, no ponto mais alto, a energia é quase toda potencial. Ao descer, ela se converte em cinética (velocidade)."],
        ['Eletrodinâmica', <Formula>U = R &middot; i</Formula>, 'Primeira Lei de Ohm.', "Lei empírica, observada por Ohm. A resistência (R) é uma constante de proporcionalidade para materiais ôhmicos. **Cenário:** Calcular qual a resistência de um chuveiro que, ligado em 220V, é percorrido por uma corrente de 20A (R = U/i = 220/20 = 11Ω)."],
        ['Eletrodinâmica', <Formula>P = U &middot; i = R &middot; i&sup2; = U&sup2;/R</Formula>, 'Potência Elétrica.', "Derivada da definição de potência (Energia/tempo) e da energia potencial elétrica (E=qU). **Cenário:** Calcular o consumo de energia de um aparelho. Um secador de 2000W consome mais energia por segundo que uma lâmpada de 10W. A conta de luz é baseada na potência e no tempo de uso."],
        ['Termologia', <Formula>Q = m &middot; c &middot; &Delta;T</Formula>, 'Calor Sensível.', "Definição de calor específico (c). Não é uma fórmula derivada, mas uma relação fundamental da calorimetria. **Cenário:** Calcular quanta energia é preciso fornecer para aquecer a água para o café. Você precisa saber a massa de água, seu calor específico e a variação de temperatura desejada."],
        ['Termologia', <Formula>Q = m &middot; L</Formula>, 'Calor Latente.', "Definição de calor latente (L). A energia é usada para quebrar as forças intermoleculares, não para aumentar a temperatura. **Cenário:** Calcular a energia necessária para derreter uma barra de gelo. A temperatura do sistema permanecerá em 0°C até que todo o gelo tenha derretido."],
        ['Ondulatória', <Formula>v = &lambda; &middot; f</Formula>, 'Equação Fundamental da Ondulatória.', "Derivada da definição de velocidade (v = ΔS/Δt). Em um período (T), a onda percorre um comprimento de onda (λ). Então v = λ/T. Como a frequência f = 1/T, temos v = λf. **Cenário:** Calcular o comprimento de onda de uma estação de rádio FM que transmite a 100 MHz (f=10⁸ Hz), sabendo que a velocidade da luz é 3·10⁸ m/s."],
    ]
};

const physicsQuestions = {
    headers: ['Tópico Principal', 'ENEM (Contextualização/Cotidiano)', 'FUVEST (Rigor e Conceito)', 'Provão Paulista (Cálculo Direto)'],
    rows: [
        ['Mecânica', <>Um objeto cai de uma altura de 20m. Qual sua velocidade ao atingir o solo? (g=10m/s²)<br /><strong className="text-primary">R:</strong> <Formula>v = 20 m/s</Formula></>, <>Um bloco de 10kg é puxado por uma força de 30N que faz 37° com a horizontal (cos37°=0,8). Qual a aceleração?<br /><strong className="text-primary">R:</strong> <Formula>a = 2,4 m/s²</Formula></>, <>Um carro parte do repouso e atinge 20 m/s em 5s. Qual a sua aceleração média?<br /><strong className="text-primary">R:</strong> <Formula>a = 4 m/s²</Formula></>],
        ['Eletricidade', <>Um disjuntor de 15A protege um circuito de 127V. Qual a potência máxima que pode ser ligada nele?<br /><strong className="text-primary">R:</strong> <Formula>P = 1905 W</Formula></>, <>Duas esferas condutoras idênticas, A (+4C) e B (-2C), são postas em contato e depois separadas. Qual a carga final de cada uma?<br /><strong className="text-primary">R:</strong> <Formula>+1C para cada</Formula></>, <>Um resistor de 10Ω é submetido a uma ddp de 12V. Qual a corrente que o atravessa?<br /><strong className="text-primary">R:</strong> <Formula>i = 1,2 A</Formula></>],
        ['Ondulatória/Óptica', <>O som consegue contornar obstáculos, como quando ouvimos alguém em outro cômodo. Qual o nome deste fenômeno?<br /><strong className="text-primary">R:</strong> <Formula>Difração</Formula></>, <>Um objeto a 10cm de um espelho côncavo de raio 30cm forma uma imagem a que distância p'?<br /><strong className="text-primary">R:</strong> <Formula>p' = -30 cm</Formula></>, <>Uma onda no mar tem velocidade de 15 m/s e comprimento de 3,0 m. Qual sua frequência?<br /><strong className="text-primary">R:</strong> <Formula>f = 5,0 Hz</Formula></>]
    ]
};


const chemistryTopics = {
    headers: ['Tópico Principal', 'Subtópicos Essenciais', 'ENEM (Ênfase)', 'FUVEST/Provão Paulista (Ênfase)'],
    rows: [
        ['Química Geral', 'Modelos Atômicos, Distribuição Eletrônica. Tabela Periódica e Propriedades. Ligações (Iônica, Covalente, Metálica) e Geometria Molecular. Polaridade. Forças Intermoleculares. Funções Inorgânicas (Ácidos, Bases, Sais, Óxidos) e reações.', 'Média/Alta (Relação entre estrutura, polaridade e propriedades como solubilidade e ponto de ebulição)', 'Alta (Teoria aprofundada de ligações, geometria VSEPR e nomenclatura)'],
        ['Físico-Química', (
            <div className="grid grid-cols-2 gap-x-4 gap-y-4"> {/* Adjusted gap-y */}
                <div>
                    <div className="font-semibold text-primary/80 text-sm mb-1">Estequiometria</div>
                    <Formula>n = m/MM</Formula>
                </div>
                <div>
                    <div className="font-semibold text-primary/80 text-sm mb-1">Soluções</div>
                    <Formula>C₁V₁ = C₂V₂</Formula>
                </div>
                <div>
                    <div className="font-semibold text-primary/80 text-sm mb-1">Termoquímica</div>
                    <Formula>Exo: ΔH &lt; 0</Formula>
                </div>
                <div>
                    <div className="font-semibold text-primary/80 text-sm mb-1">Eletroquímica</div>
                    <Formula>Pilha: ΔE° &gt; 0</Formula>
                </div>
             </div>
        ), 'Altíssima (Os 3 pilares: Estequiometria, Soluções e Termoquímica. Equilíbrio em contextos ambientais)', 'Alta (Todos os tópicos com maior rigor matemático e conceitual, incluindo cinética e eletroquímica)'],
        ['Química Orgânica', (
            <div>
                <div className="font-semibold text-primary/80">Funções Principais</div>
                <p className="text-sm mb-1"><Formula>Álcool: R-OH</Formula></p>
                <p className="text-sm mb-1"><Formula>Ácido Carboxílico: R-COOH</Formula></p>
                <div className="font-semibold text-primary/80 mt-2">Isomeria Geométrica</div>
                <svg viewBox="0 0 130 40" className="w-full h-auto max-w-[130px] text-foreground"> {/* Increased viewBox */}
                    <path d="M20 20 H40" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M20 20 L5 5" stroke="currentColor" strokeWidth="1" />
                    <path d="M40 20 L55 35" stroke="currentColor" strokeWidth="1" />
                    <text x="0" y="35" className="text-[14px] fill-muted-foreground">Cis</text>
                    <path d="M90 20 H110" stroke="currentColor" strokeWidth="1.5" /> {/* Adjusted position */}
                    <path d="M90 20 L75 5" stroke="currentColor" strokeWidth="1" /> {/* Adjusted position */}
                    <path d="M110 20 L125 5" stroke="currentColor" strokeWidth="1" /> {/* Adjusted position */}
                    <text x="70" y="35" className="text-[14px] fill-muted-foreground">Trans</text> {/* Adjusted position */}
                </svg>
            </div>
        ), 'Alta (Identificação de funções em moléculas do cotidiano, polímeros, e relação estrutura-propriedade)', 'Alta (Foco intenso em Isomeria e mecanismos de Reações Orgânicas)'],
    ]
};

const chemistryFormulas = {
    headers: ['Área', 'Fórmula', 'Descrição', 'Aplicação / Dica Detalhada'],
    rows: [
        ['Estequiometria', <Formula>n = m / MM</Formula>, 'Número de Mols (n), massa (m), Massa Molar (MM).', "Deriva da definição de massa molar (MM), que é a massa em gramas de 1 mol de substância. É a principal 'ponte de conversão' na química. **Cenário:** Calcular quantos mols de sal de cozinha (NaCl, MM≈58.5g/mol) existem em um saleiro com 117g de sal (n = 117/58.5 = 2 mols)."],
        ['Soluções', <Formula>M = n₁ / V</Formula>, 'Concentração Molar (Molaridade).', "É a forma mais comum de expressar concentração para trabalhos em laboratório, pois relaciona a quantidade de matéria (mols) com um volume facilmente medível. **Cenário:** Preparar um soro fisiológico. Para uma solução 0,15 mol/L, você dissolve 0,15 mols de NaCl em água até completar 1 litro de solução."],
        ['Soluções', <Formula>C₁V₁ = C₂V₂</Formula>, 'Fórmula da Diluição.', "Deriva-se da conservação do soluto: o número de mols antes (n₁=C₁V₁) é igual ao número de mols depois (n₂=C₂V₂). **Cenário:** Preparar um refresco a partir de um suco concentrado. Você tem C₁ e V₁ (suco), adiciona água para chegar a V₂ e calcula a nova concentração C₂."],
        ['Termoquímica', <Formula>&Delta;H = &Sigma;&Delta;H_produtos - &Sigma;&Delta;H_reagentes</Formula>, 'Variação de Entalpia.', "É uma aplicação da Lei de Hess. Assume-se um caminho hipotético onde todos os reagentes são decompostos em seus elementos (invertendo ΔH_f) e depois os elementos se combinam para formar os produtos. **Cenário:** Calcular se a queima de um combustível libera mais ou menos energia que outro, sem realizar o experimento."],
        ['Equilíbrio Químico', <Formula>K_c = [Produtos]^x / [Reagentes]^y</Formula>, 'Constante de Equilíbrio.', "Derivada da Lei de Ação das Massas, que afirma que a velocidade de uma reação é proporcional à concentração dos reagentes. No equilíbrio, a velocidade da reação direta se iguala à da inversa, resultando nesta expressão. **Cenário:** Prever o rendimento de uma reação industrial, como a síntese de amônia. Um Kc alto significa que o equilíbrio favorece os produtos."],
        ['pH e pOH', <Formula>pH = -log[H⁺]</Formula>, 'Definição de pH.', "A escala logarítmica foi criada para evitar o uso de números muito pequenos com potências negativas (ex: 10⁻⁷ mol/L). O sinal negativo torna os valores de pH positivos. **Cenário:** Medir a acidez de um suco de limão. Uma [H⁺] de 10⁻² mol/L resulta em um pH = 2."],
        ['pH e pOH', <Formula>pH + pOH = 14</Formula>, 'Relação entre pH e pOH (a 25°C).', "Deriva da constante de autoionização da água (Kw = [H⁺][OH⁻] = 10⁻¹⁴). Aplicando '-log' em toda a equação, obtemos -log[H⁺] -log[OH⁻] = -log(10⁻¹⁴), o que resulta em pH + pOH = 14. **Cenário:** Calcular o pH de uma solução de soda cáustica (base) onde se conhece a [OH⁻]."],
        ['Gases', <Formula>PV = nRT</Formula>, 'Equação de Clapeyron (Gases Ideais).', "Combina as leis de Boyle (P∝1/V), Charles (V∝T) e Avogadro (V∝n) em uma única equação de estado para gases ideais. **Cenário:** Calcular a pressão dentro de um pneu de carro (volume V) depois de enchê-lo com uma certa quantidade de ar (n mols) em um dia quente (temperatura T)."],
    ]
};

const chemistryQuestions = {
    headers: ['Tópico Principal', 'ENEM (Contextualização/Ambiental)', 'FUVEST (Rigor e Físico-Química)', 'Provão Paulista (Cálculo Direto/Conceito)'],
    rows: [
        ['Química Geral', <>A chuva ácida é formada quando óxidos como SOx e NOx reagem com a água da atmosfera. Que função inorgânica é formada?<br /><strong className="text-primary">R:</strong> <Formula>Ácidos</Formula></>, <>Um elemento X (Z=17) se combina com Y (Z=19). Qual o tipo de ligação e a fórmula do composto?<br /><strong className="text-primary">R:</strong> <Formula>Iônica; KCl</Formula></>, <>Faça a distribuição eletrônica do elemento com Z=12 e indique sua família e período.<br /><strong className="text-primary">R:</strong> <Formula>Família 2; 3º Período</Formula></>],
        ['Físico-Química', <>Qual a massa de NaCl (MM=58,5g/mol) necessária para preparar 500mL de uma solução 0,2 mol/L?<br /><strong className="text-primary">R:</strong> <Formula>5,85 g</Formula></>, <>Uma solução básica tem [OH⁻] = 10⁻¹⁰ mol/L. Qual o seu pH?<br /><strong className="text-primary">R:</strong> <Formula>pH = 4</Formula></>, <>Que volume de uma solução 2,0 mol/L é necessário para preparar 100mL de uma solução 0,5 mol/L?<br /><strong className="text-primary">R:</strong> <Formula>V₁ = 25 mL</Formula></>],
        ['Química Orgânica', <>O etanol (CH₃CH₂OH) e o éter dimetílico (CH₃OCH₃) têm fórmula C₂H₆O. Que tipo de isomeria existe entre eles?<br /><strong className="text-primary">R:</strong> <Formula>Isomeria de Função</Formula></>, <>Dê o nome IUPAC do Tolueno (C₇H₈) e da Acetona (C₃H₆O).<br /><strong className="text-primary">R:</strong> <Formula>Metilbenzeno e Propanona</Formula></>, <>Qual o nome IUPAC do composto CH₃-CH₂-CH₂-COOH?<br /><strong className="text-primary">R:</strong> <Formula>Ácido Butanoico</Formula></>]
    ]
};

export const CheatsheetView: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center mb-4 text-primary">Gabarito Final: Resumo de Exatas</h1>
                <p className="text-lg text-center text-muted-foreground mb-12">
                    Os conceitos e fórmulas essenciais de Matemática, Física e Química para ENEM, FUVEST e Provão Paulista em um só lugar.
                </p>

                {/* MATEMÁTICA */}
                <section>
                    <SectionTitle>1. Matemática e suas Tecnologias</SectionTitle>
                    <SubTitle>Tópicos Essenciais</SubTitle>
                    <Table headers={mathTopics.headers} rows={mathTopics.rows} />
                    <SubTitle>Fórmulas Mais Importantes</SubTitle>
                    <Table headers={mathFormulas.headers} rows={mathFormulas.rows} />
                    <SubTitle>Questões de Exemplo por Vestibular</SubTitle>
                    <Table headers={mathQuestions.headers} rows={mathQuestions.rows} />
                </section>

                {/* FÍSICA */}
                <section>
                    <SectionTitle>2. Física e suas Tecnologias</SectionTitle>
                    <SubTitle>Tópicos Essenciais</SubTitle>
                    <Table headers={physicsTopics.headers} rows={physicsTopics.rows} />
                    <SubTitle>Fórmulas Mais Importantes</SubTitle>
                    <Table headers={physicsFormulas.headers} rows={physicsFormulas.rows} />
                    <SubTitle>Questões de Exemplo por Vestibular</SubTitle>
                    <Table headers={physicsQuestions.headers} rows={physicsQuestions.rows} />
                </section>

                {/* QUÍMICA */}
                <section>
                    <SectionTitle>3. Química e suas Tecnologias</SectionTitle>
                    <SubTitle>Tópicos Essenciais</SubTitle>
                    <Table headers={chemistryTopics.headers} rows={chemistryTopics.rows} />
                    <SubTitle>Fórmulas Mais Importantes</SubTitle>
                    <Table headers={chemistryFormulas.headers} rows={chemistryFormulas.rows} />
                    <SubTitle>Questões de Exemplo por Vestibular</SubTitle>
                    <Table headers={chemistryQuestions.headers} rows={chemistryQuestions.rows} />
                </section>
                
                {/* DICAS */}
                <section>
                    <SectionTitle>4. Dicas de Estudo</SectionTitle>
                    <div className="space-y-4 text-muted-foreground">
                       <p><strong className="text-foreground">1. ENEM:</strong> Foco na <span className="text-primary font-semibold">interpretação de texto</span> e na aplicação de conceitos em situações-problema do cotidiano. A prova valoriza a interdisciplinaridade.</p>
                       <p><strong className="text-foreground">2. FUVEST:</strong> Exige <span className="text-primary font-semibold">maior domínio conceitual e rigor matemático</span>. Estude a fundo os tópicos mais frequentes, especialmente em Geometria, Mecânica e Físico-Química.</p>
                       <p><strong className="text-foreground">3. Provão Paulista:</strong> Por ser baseado no currículo estadual, tende a seguir uma linha mais direta, cobrando os <span className="text-primary font-semibold">temas centrais</span> de cada disciplina.</p>
                       <p><strong className="text-foreground">4. Priorize a Base:</strong> Domine a Matemática Básica, Estequiometria e Mecânica. Eles são a base para a maioria dos problemas de Exatas.</p>
                       <p><strong className="text-foreground">5. Pratique com Provas Anteriores:</strong> A melhor forma de se preparar é resolvendo as provas anteriores de cada exame para se familiarizar com o estilo de cobrança.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};