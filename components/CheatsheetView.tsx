import React from 'react';

const SectionTitle: React.FC<{children: React.ReactNode}> = ({ children }) => <h2 className="text-3xl font-bold mt-10 mb-6 border-b border-border pb-2 text-primary">{children}</h2>;
const SubTitle: React.FC<{children: React.ReactNode}> = ({ children }) => <h3 className="text-2xl font-semibold mt-8 mb-4">{children}</h3>;
const Formula: React.FC<{children: React.ReactNode}> = ({ children }) => <code className="bg-primary/10 border border-blue-500/30 text-blue-300 px-2 py-1 rounded font-mono text-sm whitespace-nowrap">{children}</code>;
const ExampleBox: React.FC<{title:string, children: React.ReactNode}> = ({ title, children }) => (
    <div className="bg-card border border-border rounded-lg p-6 mt-4">
        <h4 className="font-bold mb-2 text-lg">{title}</h4>
        {children}
    </div>
);
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
        ['Geometria', 'Plana: Áreas, perímetros, semelhança de triângulos, relações métricas no triângulo retângulo e Teorema de Tales. Espacial: Volumes e áreas de prismas, pirâmides, cilindros, cones, esferas e seus troncos. Analítica: Distância entre pontos, equação da reta e da circunferência.', 'Alta (Contextualização, cálculo de volumes e áreas em cenários práticos como caixas d\'água e terrenos)', 'Alta (Rigor em demonstrações, Geometria Analítica aprofundada, polígonos inscritos e circunscritos)'],
        ['Funções', 'Conceitos de domínio, contradomínio e imagem. Funções do 1º e 2º grau (análise de gráficos, raízes, vértice). Função Exponencial e Logarítmica (propriedades e resolução de equações). Análise do sinal da função.', 'Média/Alta (Interpretação de gráficos que modelam crescimento populacional, juros, decaimento radioativo)', 'Alta (Manipulação algébrica complexa, composição de funções, funções modulares e trigonométricas)'],
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

const physicsTopics = {
    headers: ['Tópico Principal', 'Subtópicos Essenciais', 'ENEM (Ênfase)', 'FUVEST/Provão Paulista (Ênfase)'],
    rows: [
        ['Mecânica', 'Cinemática (MRU, MRUV, Queda Livre, Lançamentos). Dinâmica (Leis de Newton, Forças de atrito, normal, peso, tração, plano inclinado). Trabalho e Energia (Cinética, Potencial, sistemas conservativos e dissipativos). Impulso e Quantidade de Movimento (Colisões). Hidrostática (Pressão, Empuxo).', 'Altíssima (Energia e Cinemática em situações do dia a dia. Foco conceitual nas Leis de Newton)', 'Altíssima (Rigor matemático em Dinâmica, colisões, sistemas de blocos e estática)'],
        ['Eletricidade', 'Eletrostática (Carga, campo e potencial elétrico). Eletrodinâmica (Corrente, tensão, resistência, Leis de Ohm, Potência, circuitos em série e paralelo, geradores e receptores). Eletromagnetismo (Campo magnético, Força magnética, Indução eletromagnética).', 'Alta (Eletrodinâmica é o mais cobrado: consumo de energia, análise de circuitos residenciais, efeito Joule)', 'Alta (Todos os tópicos são relevantes, com ênfase em campo elétrico, potencial e indução)'],
        ['Termologia', 'Termometria (Escalas). Calorimetria (Calor sensível e latente, trocas de calor). Dilatação. Gases (Equação de Clapeyron). Termodinâmica (1ª e 2ª Leis, máquinas térmicas e ciclos).', 'Média/Alta (Trocas de calor, fenômenos do cotidiano como isolamento térmico, e noções de máquinas térmicas)', 'Média/Alta (Estudo aprofundado das Leis da Termodinâmica e transformações gasosas)'],
        ['Ondulatória e Óptica', 'Ondulatória: Classificação, equação fundamental (v=λf), fenômenos (reflexão, refração, difração, interferência, polarização). Acústica. Óptica: Princípios da óptica geométrica, espelhos planos e esféricos, lentes delgadas (Equação de Gauss), refração (Lei de Snell).', 'Alta (Fenômenos ondulatórios com som e luz, e suas aplicações tecnológicas, como fones com cancelamento de ruído)', 'Média/Alta (Formação de imagens em espelhos e lentes, Lei de Snell com rigor matemático)'],
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

const chemistryTopics = {
    headers: ['Tópico Principal', 'Subtópicos Essenciais', 'ENEM (Ênfase)', 'FUVEST/Provão Paulista (Ênfase)'],
    rows: [
        ['Química Geral', 'Modelos Atômicos, Distribuição Eletrônica. Tabela Periódica e Propriedades. Ligações (Iônica, Covalente, Metálica) e Geometria Molecular. Polaridade. Forças Intermoleculares. Funções Inorgânicas (Ácidos, Bases, Sais, Óxidos) e reações.', 'Média/Alta (Relação entre estrutura, polaridade e propriedades como solubilidade e ponto de ebulição)', 'Alta (Teoria aprofundada de ligações, geometria VSEPR e nomenclatura)'],
        ['Físico-Química', 'Estequiometria (cálculos, reagente limitante, rendimento). Soluções (Concentrações, diluição, misturas). Termoquímica (Entalpia, Lei de Hess). Cinética (Fatores que afetam a velocidade). Equilíbrio Químico (Kc, Kp, pH, pOH, hidrólise, Le Chatelier). Eletroquímica (Pilhas e Eletrólise).', 'Altíssima (Os 3 pilares: Estequiometria, Soluções e Termoquímica. Equilíbrio em contextos ambientais)', 'Alta (Todos os tópicos com maior rigor matemático e conceitual, incluindo cinética e eletroquímica)'],
        ['Química Orgânica', 'Nomenclatura e identificação de Funções Orgânicas. Isomeria (Plana e Espacial). Propriedades Físicas dos compostos orgânicos. Reações Orgânicas (Adição, Substituição, Eliminação, Oxidação). Polímeros e Biomoléculas.', 'Alta (Identificação de funções em moléculas do cotidiano, polímeros, e relação estrutura-propriedade)', 'Alta (Foco intenso em Isomeria e mecanismos de Reações Orgânicas)'],
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
                    <SubTitle>Exemplo de Questão (Estilo ENEM)</SubTitle>
                    <ExampleBox title="Geometria Espacial e Otimização">
                        <p className="mb-2 italic">"Uma empresa de cosméticos busca a embalagem cilíndrica de menor área total para um volume fixo de 100&pi; cm³. Qual a relação ideal entre o raio (r) e a altura (h)?"</p>
                        <p className="text-sm"><strong className="text-primary">Resolução:</strong> O volume é V = &pi;r&sup2;h, logo h = 100/r&sup2;. A área total é A = 2&pi;rh + 2&pi;r&sup2;. Substituindo h, temos A(r) = 200&pi;/r + 2&pi;r&sup2;. Para otimizar (minimizar a área), a matemática de derivadas mostra que a condição ideal ocorre quando a altura é igual ao diâmetro, ou seja, <Formula>h = 2r</Formula>.</p>
                    </ExampleBox>
                </section>

                {/* FÍSICA */}
                <section>
                    <SectionTitle>2. Física e suas Tecnologias</SectionTitle>
                    <SubTitle>Tópicos Essenciais</SubTitle>
                    <Table headers={physicsTopics.headers} rows={physicsTopics.rows} />
                    <SubTitle>Fórmulas Mais Importantes</SubTitle>
                    <Table headers={physicsFormulas.headers} rows={physicsFormulas.rows} />
                    <SubTitle>Exemplo de Questão (Estilo FUVEST)</SubTitle>
                    <ExampleBox title="Conservação de Energia Mecânica">
                        <p className="mb-2 italic">"Um bloco de massa 'm' e velocidade 'v₀' colide com uma mola de constante elástica 'k' em uma superfície sem atrito. Qual a compressão máxima 'x' da mola?"</p>
                        <p className="text-sm"><strong className="text-primary">Resolução:</strong> Pela conservação da energia mecânica, a energia cinética inicial do bloco é totalmente convertida em energia potencial elástica na compressão máxima. <Formula>E_c (inicial) = E_pe (final)</Formula> &rArr; <Formula>(mv₀&sup2;)/2 = (kx&sup2;)/2</Formula>. Isolando x, temos <Formula>x = v₀ &radic;(m/k)</Formula>.</p>
                    </ExampleBox>
                </section>

                {/* QUÍMICA */}
                <section>
                    <SectionTitle>3. Química e suas Tecnologias</SectionTitle>
                    <SubTitle>Tópicos Essenciais</SubTitle>
                    <Table headers={chemistryTopics.headers} rows={chemistryTopics.rows} />
                    <SubTitle>Fórmulas Mais Importantes</SubTitle>
                    <Table headers={chemistryFormulas.headers} rows={chemistryFormulas.rows} />
                    <SubTitle>Exemplo de Questão (Estilo ENEM)</SubTitle>
                    <ExampleBox title="Soluções e Estequiometria">
                        <p className="mb-2 italic">"Uma amostra de água possui 0,001 mol/L de íons Cádmio (Cd²⁺). Qual é essa concentração em mg/L? (Massa molar do Cd &asymp; 112 g/mol)."</p>
                        <p className="text-sm"><strong className="text-primary">Resolução:</strong> Primeiro, converte-se mol para grama: m = n &middot; M = 0,001 mol &middot; 112 g/mol = 0,112 g. Como a concentração é por litro, temos 0,112 g/L. Convertendo para miligramas (1g = 1000mg), a concentração é <Formula>112 mg/L</Formula>.</p>
                    </ExampleBox>
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
