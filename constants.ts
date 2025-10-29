import type { Discipline, Topic, Flashcard, ExamQuestion, DisciplineName } from './types';
import { MathIcon, PhysicsIcon, ChemIcon } from './components/Icons';

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
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTgwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJjdXJyZW50Q29sb3IiPgogICAgPGRlZnM+PG1hcmtlciBpZD0iYXJyb3ciIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iNSIgcmVmWT0iNSIgbWFya2VyV2lkdGg9IjYiIG1hcmtlckhlaWdodD0iNiIgb3JpZW50PSJhdXRvLXN0YXJ0LXJldmVyc2UiPjxwYXRoIGQ9Ik0wIDAgTCAxMCA1IEwgMCAxMCB6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L21hcmtlcj48L2RlZnM+CiAgICA8cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTQwIiByeD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgogICAgPHJlY3QgeD0iMTgwIiB5PSIyMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxNDAiIHJ4PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+CiAgICA8dGV4dCB4PSI3MCIgeT0iMTYiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRvbWlkb21lbiBvcyAocGFyYSBvIHZlcnRpY2UgZGUgdW1hIHBhcsOhYm9sYSwgY29tbyBvIHByZcOnbyBxdWUgbWF4aW1pemEgb3UgbWluaW1pemEgbyBsdWNyby4iLz48L3VsPjwvZGl2Pjwvc2VjdGlvbj48c2VjdGlvbj48aDI+R3JhZHVhY2lvbmFsPC9oMj48cD5BIHF1ZXN0w6NvIHBlZGUgcGFyYSBvIHF1ZSBtYWlzIHZhbGUgYSBwZW5hLCBvIHF1ZSBuw6NvIHZhbGUgYSBwZW5hLCBvdSBzZSB1bSBpdGVtIMOpIG1lbGhvciBxdWUgb3V0cm8uPC9wPjxkaXY+PHVsPjxsaT48c3Ryb25nPkV4ZW1wbG86PC9zdHJvbmc+ICJTdXBlcm1lcmNhZG8gQSB2ZW5kZSAxIGtnIGRlIGFycm96IHBvciBSICA1LDAwLiBTdXBlcm1lcmNhZG8gQiB2ZW5kZSAxLjUga2cgZGUgYXJyb3ogcG9yIFIgJiwgNzUsMDAuIFF1YWwgb2ZlcmVjZSBvIG1lbGhvciBwcmXDp28gcG9yIGtnPyI8L2xpPjwvdWw+PC9kaXY+PC9zZWN0aW9uPjwvc2VjdGlvbj48L2Rpdj4=" alt="Diagrama de uma função mapeando elementos do Domínio A para o Contradomínio B"/>
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
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTgwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCI+PGRlZnM+PG1hcmtlciBpZD0iYXJyb3ciIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iNSIgcmVmWT0iNSIgbWFya2VyV2lkdGg9IjYiIG1hcmtlckhlaWdodD0iNiIgb3JpZW50PSJhdXRvLXN0YXJ0LXJldmVyc2UiPjxwYXRoIGQ9Ik0wIDAgTCAxMCA1IEwgMCAxMCB6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L21hcmtlcj48L2RlZnM+PHBhdGggZD0iTSAxMCAxNzAgTCAyOTAgMTcwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTSAyNSAxNzUgTCAyNSAxMCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIvPjx0ZXh0IHg9IjI5MiIgeT0iMTY1Ij54PC90ZXh0Pjx0ZXh0IHg9IjE1IiB5PSIxNSI+eTwvdGV4dD48cGF0aCBkPSJNIDQwIDE2MCBRIDE1MCAxMCAyNjAgMTYwIiBzdHJva2U9ImhzbCgyMDAsIDEwMCUsIDUwJSkiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjMwIiByPSI0IiBmaWxsPSJoc2woMCwgMTAwJSwgNTAlKSIvPjx0ZXh0IHg9IjE1MCIgeT0iMjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTIiPlbpcHJ0aWNlIChYdiwgWXYpPC90ZXh0PjxsaW5lIHgxPSIxNTAiIHkxPSIzMCIgeDI9IjE1MCIgeTI9IjE3MCIgc3Ryb2tlPSJoc2woMCwgMTAwJSwgNTAlKSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSIyLDMiLz48dGV4dCB4PSIxNTAiIHk9IjE4MyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMiI+WHYgPSAtYi8yYTwvdGV4dD48Y2lyY2xlIGN4PSI0NSIgY3k9IjE3MCIgcj0iMyIgZmlsbD0iY3VycmVudENvbG9yIi8+PGNpcmNsZSBjeD0iMjU1IiBjeT0iMTcwIiByPSIzIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48dGV4dCB4PSI0NSIgeT0iMTgzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEyIj54JzwvdGV4dD48dGV4dCB4PSIyNTUiIHk9IjE4MyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMiI+eCI8L3RleHQ+PC9zdmc+" alt="Gráfico de uma parábola com concavidade para cima, destacando o vértice e as raízes."/><h3>Função Exponencial</h3><ul><li><strong>Fórmula:</strong> <code>f(x) = a · b^x</code></li><li><strong>Gráfico:</strong> Uma curva que cresce ou decresce muito rapidamente.</li><li><strong>Análise:</strong> Se a base 'b' > 1, a função é crescente. Se 0 < 'b' < 1, a função é decrescente. 'a' é o valor inicial (quando x=0).</li><li><strong>Aplicação Prática:</strong> Modelar juros compostos, crescimento de uma colônia de bactérias, decaimento radioativo (datação por Carbono-14) ou a disseminação de uma notícia.</li></ul>
  ` },
  { id: 'mat-2', name: 'Geometria', discipline: 'Matemática', summary: `
<h3>Geometria Plana</h3>
<p>Estuda as figuras bidimensionais. O foco está no cálculo de <strong>área</strong> (superfície) e <strong>perímetro</strong> (contorno).</p>
<ul>
    <li><strong>Triângulos:</strong> A área é <code>A = (base × altura) / 2</code>. É fundamental conhecer as relações métricas no triângulo retângulo (Teorema de Pitágoras).</li>
    <li><strong>Quadriláteros:</strong> Saber as fórmulas para quadrados, retângulos, trapézios e losangos.</li>
    <li><strong>Círculo:</strong> Área <code>A = πr²</code> e Perímetro (Comprimento) <code>C = 2πr</code>.</li>
</ul>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTgwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCI+CiAgICA8cG9seWdvbiBwb2ludHM9IjUwLDE1MCAyNTAsMTUwIDUwLDMwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJoc2woMjAwLCAxMDAlLCA5MCUpIi8+CiAgICA8cmVjdCB4PSI1MCIgeT0iMTM1IiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHRleHQgeD0iMTYwIiB5PSI4MCIgZm9udC1zaXplPSIyMCI+YTwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1MCIgeT0iMTcwIiBmb250LXNpemU9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5iPC90ZXh0PgogICAgPHRleHQgeD0iMzIiIHk9IjEwMCIgZm9udC1zaXplPSIyMCI+YzwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1MCIgeT0iNjAiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZS13aWR0aD0iMCI+YTxzc3VwPjI8L3N1cD4gPSBiPHN1cD4yPC9zdXA+ICsgYzxzdXA+Mjwvc3VwPjwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1MCIgeT0iODUiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZS13aWR0aD0iMCI+VGVvcmVtYSBkZSBQaXRhZ29yYXM8L3RleHQ+Cjwvc3ZnPg==" alt="Triângulo retângulo ilustrando o Teorema de Pitágoras: a² = b² + c²"/>
<h3>Geometria Espacial</h3>
<p>Estuda os sólidos tridimensionais. O foco é em <strong>área total</strong> (material gasto para construir) e <strong>volume</strong> (capacidade de armazenamento).</p>
<ul>
    <li><strong>Prismas e Cilindros:</strong> O volume é sempre <code>V = Área da base × altura</code>. A chave é identificar a forma da base (quadrado, triângulo, círculo) e calcular sua área.</li>
    <li><strong>Pirâmides e Cones:</strong> O volume segue a mesma lógica, mas com um fator de 1/3: <code>V = (Área da base × altura) / 3</code>.</li>
    <li><strong>Esfera:</strong> Volume <code>V = (4/3)πr³</code> e Área <code>A = 4πr²</code>.</li>
</ul>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTgwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCI+CiAgICA8ZWxsaXBzZSBjeD0iMTUwIiBjeT0iMTUwIiByeD0iODAiIHJ5PSIyMCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0iaHNsKDIwMCwgMTAwJSwgOTAlKSIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KICAgIDxwYXRoIGQ9Ik0gNzAgMzAgViAxNTAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGQ9Ik0gMjMwIDMwIFYgMTUwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8ZWxsaXBzZSBjeD0iMTUwIiBjeT0iMzAiIHJ4PSI4MCIgcnk9IjIwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJoc2woMjAwLCAxMDAlLCA5MCUpIi8+CiAgICA8bGluZSB4MT0iMTUwIiB5MT0iMzAiIHgyPSIxNTAiIHkyPSIxNTAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWRhc2hhcnJheT0iMywzIi8+CiAgICA8bGluZSB4MT0iMTUwIiB5MT0iMTUwIiB4Mj0iMjMwIiB5Mj0iMTUwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMyIvPgogICAgPHRleHQgeD0iMTM1IiB5PSI5NSIgZm9udC1zaXplPSIxOCI+aDwvdGV4dD4KICAgIDx0ZXh0IHg9IjE4NSIgeT0iMTY1IiBmb250LXNpemU9IjE4Ij5yPC90ZXh0PgogICAgPHRleHQgeD0iMTUwIiB5PSIxNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHlsZT0iZm9udC1zaXplOjE2cHgiPlYgPSDDvHIyIMKwIGg8L3RleHQ+Cjwvc3ZnPg==" alt="Cilindro com raio r e altura h, ilustrando a fórmula do volume."/>
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
<p>Os Casos Totais são muitas vezes calculados usando Análise Combinatória. É preciso ter atenção com eventos independentes e probabilidade condicional.</p>
  ` },
  { id: 'mat-4', name: 'Trigonometria', discipline: 'Matemática', summary: `
<h3>Relações no Triângulo Retângulo</h3>
<p>É a base de tudo. Para um ângulo agudo α:</p>
<ul>
    <li><strong>Seno(α):</strong> Cateto Oposto / Hipotenusa</li>
    <li><strong>Cosseno(α):</strong> Cateto Adjacente / Hipotenusa</li>
    <li><strong>Tangente(α):</strong> Cateto Oposto / Cateto Adjacente</li>
</ul>
<p>A <strong>Relação Fundamental</strong>, <code>sen²(α) + cos²(α) = 1</code>, é uma consequência direta do Teorema de Pitágoras e é extremamente útil.</p>
<h3>Relações em Triângulos Quaisquer</h3>
<p>Quando o triângulo não é retângulo, usamos duas leis poderosas:</p>
<ul>
    <li><strong>Lei dos Senos:</strong> Relaciona os lados de um triângulo com os senos dos seus ângulos opostos. Ótima quando se conhece dois ângulos e um lado.</li>
    <li><strong>Lei dos Cossenos:</strong> É uma generalização do Teorema de Pitágoras. Perfeita para quando se conhece dois lados e o ângulo entre eles, ou os três lados.</li>
</ul>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTgwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCI+CiAgICA8cGF0aCBkPSJNMzAgMTUwIEwgMjcwIDE1MCBMIDE1MCAzMCBaIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIGQ9Ik0xNTAgMzAgQSAyMCAyMCAwIDAgMCAxMzUgNDgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjE1MCIgeT0iNTUiIGZvbnQtc2l6ZT0iMTgiPkE8L3RleHQ+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjE3MCIgZm9udC1zaXplPSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+YTwvdGV4dD4KICAgIDx0ZXh0IHg9IjIyMCIgeT0iMTAwIiBmb250LXNpemU9IjE4Ij5iPC90ZXh0PgogICAgPHRleHQgeD0iODAiIHk9IjEwMCIgZm9udC1zaXplPSIxOCI+YzwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1MCIgeT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZS13aWR0aD0iMCIgc3R5bGU9ImZvbnQtc2l6ZToxNnB4Ij5hPHN1cD4yPC9zdXA+ID0gYjxzc3VwPjI8L3N1cD4gKyBjPHN1cD4yPC9zdXA+IC0gMmJjIMKwIGNvcyhBPC90ZXh0Pgo8L3N2Zz4=" alt="Triângulo qualquer ilustrando a Lei dos Cossenos."/>
<h3>Funções Trigonométricas</h3>
<p>Estudam o comportamento periódico de fenômenos como ondas sonoras, movimento de pêndulos e corrente alternada. O <strong>círculo trigonométrico</strong> é a ferramenta visual para entender seno e cosseno como coordenadas de um ponto.</p>
  `},
  // Física
  { id: 'fis-1', name: 'Cinemática', discipline: 'Física', summary: `
<h3>Conceitos Fundamentais</h3>
<p>Cinemática descreve o <strong>movimento</strong>. É crucial diferenciar:</p>
<ul>
  <li><strong>Posição (S):</strong> Onde o corpo está.</li>
  <li><strong>Velocidade (v):</strong> A rapidez e direção da mudança de posição.</li>
  <li><strong>Aceleração (a):</strong> A rapidez da mudança de velocidade. Acelerar não significa apenas "ir mais rápido", mas sim "mudar a velocidade" (o que inclui frear ou fazer uma curva).</li>
</ul>
<h3>Movimento Retilíneo Uniforme (MRU)</h3>
<p>O mais simples dos movimentos: <strong>velocidade constante e aceleração nula</strong>. O corpo percorre distâncias iguais em tempos iguais.</p>
<ul>
  <li><strong>Fórmula Principal:</strong> <code>S = S₀ + vt</code> (conhecida como "Sorvete").</li>
  <li><strong>Gráficos:</strong> O gráfico da Posição x Tempo (Sxt) é uma reta inclinada. O gráfico da Velocidade x Tempo (vxt) é uma reta horizontal.</li>
</ul>
<h3>Movimento Retilíneo Uniformemente Variado (MRUV)</h3>
<p>Aqui, a <strong>aceleração é constante e diferente de zero</strong>. A velocidade muda de forma uniforme.</p>
<ul>
    <li><strong>Função Horária da Posição:</strong> <code>S = S₀ + v₀t + (at²)/2</code> ("Sorvetão").</li>
    <li><strong>Função Horária da Velocidade:</strong> <code>v = v₀ + at</code>.</li>
    <li><strong>Equação de Torricelli:</strong> <code>v² = v₀² + 2aΔS</code>. É a fórmula "coringa", usada quando o problema <strong>não informa o tempo</strong>.</li>
</ul>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTgwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCI+PGRlZnM+PG1hcmtlciBpZD0iYXJyb3ciIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iNSIgcmVmWT0iNSIgbWFya2VyV2lkdGg9IjYiIG1hcmtlckhlaWdodD0iNiIgb3JpZW50PSJhdXRvLXN0YXJ0LXJldmVyc2UiPjxwYXRoIGQ9Ik0wIDAgTCAxMCA1IEwgMCAxMCB6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L21hcmtlcj48L2RlZnM+PHBhdGggZD0iTSAxMCAxNzAgTCAyOTAgMTcwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTSAyNSAxNzUgTCAyNSAxMCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIvPjx0ZXh0IHg9IjI5MiIgeT0iMTY1Ij50PC90ZXh0Pjx0ZXh0IHg9IjE1IiB5PSIxNSI+djwvdGV4dD48bGluZSB4MT0iNDAiIHkxPSIxNTAiIHgyPSIyNjAiIHkyPSI0MCIgc3Ryb2tlPSJoc2woMjAwLCAxMDAlLCA1MCUpIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJNNCA0MCAxNTAgTCAyNjAgNDAgTCAyNjAgMTcwIEwgNDAgMTcwIEwgNDAgMTUwIiBmaWxsPSJoc2woMjAwLCAxMDAlLCA5MCUpIiBzdHJva2U9Im5vbmUiLz48dGV4dCB4PSIxNTAiIHk9IjExMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxNiI+w4FyZWEgPSDOlVM8L3RleHQ+PHRleHQgeD0iMzUiIHk9IjE0NSI+duKMhjwvdGV4dD48dGV4dCB4PSIyNjIiIHk9IjM1Ij52PC90ZXh0Pjwvc3ZnPg==" alt="Gráfico de Velocidade por Tempo para MRUV, mostrando que a área sob a reta é o deslocamento."/>
<p><strong>Dica de Ouro:</strong> Em um gráfico de Velocidade x Tempo (vxt), a <strong>área</strong> sob a curva é numericamente igual ao <strong>deslocamento (ΔS)</strong> e a <strong>inclinação</strong> da reta é numericamente igual à <strong>aceleração (a)</strong>.</p>
  ` },
  { id: 'fis-2', name: 'Dinâmica e Energia', discipline: 'Física', summary: `
<h3>Leis de Newton</h3>
<p>Dinâmica estuda as <strong>causas</strong> do movimento, que são as <strong>forças</strong>.</p>
<ul>
    <li><strong>1ª Lei (Inércia):</strong> Um corpo tende a manter seu estado de movimento (repouso ou MRU) a menos que uma força resultante atue sobre ele. É por isso que você é "jogado para frente" quando um ônibus freia.</li>
    <li><strong>2ª Lei (Princípio Fundamental):</strong> A equação mais importante da dinâmica: <code>F_R = m · a</code>. A força resultante (a soma vetorial de todas as forças) é igual à massa do corpo vezes a sua aceleração.</li>
    <li><strong>3ª Lei (Ação e Reação):</strong> Para toda ação, há uma reação de mesma intensidade, mesma direção e sentido oposto, atuando em <strong>corpos diferentes</strong>. É por isso que elas nunca se anulam. O foguete empurra o gás para baixo (ação), e o gás empurra o foguete para cima (reação).</li>
</ul>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTgwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCI+PGRlZnM+PG1hcmtlciBpZD0iYXJyb3ciIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iNSIgcmVmWT0iNSIgbWFya2VyV2lkdGg9IjYiIG1hcmtlckhlaWdodD0iNiIgb3JpZW50PSJhdXRvLXN0YXJ0LXJldmVyc2UiPjxwYXRoIGQ9Ik0wIDAgTCAxMCA1IEwgMCAxMCB6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L21hcmtlcj48L2RlZnM+PHJlY3QgeD0iMTAwIiB5PSI4MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI2MCIgcng9IjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9ImhzbCgyMDAsIDEwMCUsIDkwJSkiLz48dGV4dCB4PSIxNTAiIHk9IjExNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxOCI+bTwvdGV4dD48cGF0aCBkPSJNMjAwIDExMCBMIDI4MCAxMTAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93KSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHRleHQgeD0iMjQwIiB5PSIxMDUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTYiPkY8L3RleHQ+PHBhdGggZD0iTSA1MCAxMTAgTCAxMDAgMTEwIiBzdHJva2U9ImhzbCgwLCAxMDAlLCA1MCUpIiBzdHJva2Utd2lkdGg9IjIiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIiBzdHJva2UtZGFzaGFycmF5PSI0LDQiIGZpbGw9Im5vbmUiLz48dGV4dCB4PSI3NSIgeT0iMTA1IiBmaWxsPSJoc2woMCwgMTAwJSwgNTAlKSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxNiI+RmF0PC90ZXh0PjxsaW5lIHgxPSIwIiB5MT0iMTQwIiB4Mj0iMzAwIiB5Mj0iMTQwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMTUwIiB5PSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3R5bGU9ImZvbnQtc2l6ZToxNHB4Ij5GciA9IEZvcsmnYSAtIEZhdCA9IG0g4oCmIGE8L3RleHQ+PC9zdmc+" alt="Diagrama de corpo livre de um bloco com força aplicada, força de atrito e a fórmula da Segunda Lei de Newton."/>
<h3>Trabalho e Energia</h3>
<p>Energia é a capacidade de realizar trabalho. É um conceito fundamental em toda a Física.</p>
<ul>
    <li><strong>Energia Cinética (Ec):</strong> Energia do movimento. <code>Ec = (m·v²)/2</code>.</li>
    <li><strong>Energia Potencial (Ep):</strong> Energia armazenada. Pode ser <strong>Gravitacional</strong> (devido à altura, <code>Epg = m·g·h</code>) ou <strong>Elástica</strong> (devido à deformação de uma mola, <code>Epe = (k·x²)/2</code>).</li>
    <li><strong>Conservação da Energia Mecânica:</strong> Em sistemas sem atrito (conservativos), a energia mecânica total (Ec + Ep) se mantém constante. A energia apenas se transforma de uma forma para outra (ex: potencial em cinética na queda de um objeto). Em sistemas com atrito (dissipativos), a energia mecânica diminui, sendo transformada em calor.</li>
</ul>
  ` },
  { id: 'fis-3', name: 'Eletrodinâmica', discipline: 'Física', summary: `
<h3>Grandezas Fundamentais</h3>
<ul>
    <li><strong>Corrente Elétrica (i):</strong> Fluxo ordenado de cargas elétricas. Medida em <strong>Ampères (A)</strong>.</li>
    <li><strong>Tensão ou DDP (U):</strong> A "força" que impulsiona os elétrons. Medida em <strong>Volts (V)</strong>.</li>
    <li><strong>Resistência Elétrica (R):</strong> A oposição à passagem da corrente. Medida em <strong>Ohms (Ω)</strong>.</li>
</ul>
<h3>Leis de Ohm e Potência</h3>
<ul>
    <li><strong>1ª Lei de Ohm:</strong> A relação fundamental <code>U = R · i</code>.</li>
    <li><strong>Potência Elétrica (P):</strong> A rapidez com que a energia elétrica é transformada em outra forma de energia (calor, luz). <code>P = U · i</code>. A conta de luz cobra pela <strong>Energia</strong> consumida, que é <code>Energia = Potência × tempo</code>.</li>
</ul>
<h3>Circuitos Elétricos</h3>
<p>Saber analisar associações de resistores é crucial.</p>
<ul>
    <li><strong>Associação em Série:</strong> Os resistores são ligados um após o outro. A <strong>corrente</strong> é a mesma para todos. A resistência equivalente é a soma: <code>Req = R₁ + R₂ + ...</code>.</li>
    <li><strong>Associação em Paralelo:</strong> Os resistores são ligados em ramificações diferentes. A <strong>tensão</strong> é a mesma para todos. O inverso da resistência equivalente é a soma dos inversos: <code>1/Req = 1/R₁ + 1/R₂ + ...</code>.</li>
</ul>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTgwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCI+CiAgICA8dGV4dCB4PSI3NSIgeT0iMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5Tw6lyaWU8L3RleHQ+CiAgICA8cGF0aCBkPSJNIDEwIDQwIEwgNDAgNDAgTCA0NSA0NSBMIDU1IDM1IEwgNjUgNDUgTCA3NSAzNSBMIDg1IDQ1IEwgOTUgMzUgTCAxMDAgNDAgTCAxNDAgNDAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KICAgIDx0ZXh0IHg9IjU1IiB5PSIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UjE8L3RleHQ+CiAgICA8dGV4dCB4PSI4NSIgeT0iMjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlIyPC90ZXh0PgogICAgPHRleHQgeD0iNzUiIHk9IjcwIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SZXEgPSBSMSArIFIyPC90ZXh0PgogICAgPHRleHQgeD0iMjI1IiB5PSIxNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPlBhcmFsZWxvPC90ZXh0PgogICAgPHBhdGggZD0iTSAxNjAgNjAgTCAxODAgNjAgTCAxODUgNjUgTCAxOTUgNTUgTCAyMDUgNjUgTCAyMTUgNTUgTCAyMjAgNjAgTCAyNDAgNjAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0gMTYwIDEwMCBMIDE4MCAxMDAgTCAxODUgMTA1IEwgMTk1IDk1IEwgMjA1IDEwNSBMIDIxNSA5NSBMIDIyMCAxMDAgTCAyNDAgMTAwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+CiAgICA8cGF0aCBkPSJNIDE2MCA2MCBMIDE2MCAxMDAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0gMjQwIDYwIEwgMjQwIDEwMCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgogICAgPHRleHQgeD0iMjAwIiB5PSI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UjE8L3RleHQ+CiAgICA8dGV4dCB4PSIyMDAiIHk9IjEyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UjI8L3RleHQ+CiAgICA8dGV4dCB4PSIyMjUiIHk9IjE0NSIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MS9SZXEgPSAxL1IxICsgMS9SMjwvdGV4dD4KPC9zdmc+Cg==" alt="Diagrama de circuitos elétricos em série e em paralelo."/>
  ` },
    { id: 'fis-4', name: 'Termologia', discipline: 'Física', summary: `
<h3>Temperatura e Calor</h3>
<ul>
    <li><strong>Temperatura:</strong> É a medida do <strong>grau de agitação</strong> das partículas de um corpo. Quanto maior a agitação, maior a temperatura.</li>
    <li><strong>Calor:</strong> É a <strong>energia térmica em trânsito</strong>, que flui espontaneamente do corpo de maior temperatura para o de menor temperatura.</li>
</ul>
<h3>Calorimetria</h3>
<p>Estuda as trocas de calor. Existem dois tipos de calor:</p>
<ul>
    <li><strong>Calor Sensível (<code>Q = mcΔT</code>):</strong> É a quantidade de calor que um corpo recebe ou cede para <strong>variar sua temperatura</strong>, sem mudar de estado físico. 'c' é o calor específico do material.</li>
    <li><strong>Calor Latente (<code>Q = mL</code>):</strong> É a quantidade de calor necessária para <strong>mudar o estado físico</strong> (fusão, ebulição, etc.) de uma substância, a uma temperatura constante. 'L' é o calor latente de transformação.</li>
</ul>
<p><strong>Exemplo Prático:</strong> Para ferver a água, primeiro você fornece calor sensível para aquecê-la de 20°C até 100°C. Depois, continua fornecendo calor latente para que ela, a 100°C, vire vapor.</p>
<h3>Termodinâmica</h3>
<p>Estuda as relações entre calor, trabalho e energia. É a base para o funcionamento de motores e refrigeradores.</p>
<ul>
    <li><strong>1ª Lei:</strong> É a conservação de energia aplicada à termodinâmica. A variação da energia interna de um sistema é igual ao calor recebido menos o trabalho realizado por ele (<code>ΔU = Q - W</code>).</li>
    <li><strong>2ª Lei:</strong> Impõe um "sentido" aos processos. Afirma que é impossível uma máquina térmica converter 100% do calor recebido em trabalho (sempre há perdas).</li>
</ul>
    `},
    { id: 'fis-5', name: 'Ondulatória e Óptica', discipline: 'Física', summary: `
<h3>Ondulatória</h3>
<p>Estudo das perturbações que se propagam, transportando energia sem transportar matéria.</p>
<ul>
    <li><strong>Equação Fundamental:</strong> <code>v = λ · f</code> (Velocidade = Comprimento de onda × Frequência). A frequência (f) de uma onda é determinada pela fonte e <strong>não muda</strong> quando a onda troca de meio. A velocidade (v) e o comprimento de onda (λ) mudam.</li>
</ul>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTgwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCI+PGRlZnM+PG1hcmtlciBpZD0iYXJyb3ciIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iNSIgcmVmWT0iNSIgbWFya2VyV2lkdGg9IjYiIG1hcmtlckhlaWdodD0iNiIgb3JpZW50PSJhdXRvLXN0YXJ0LXJldmVyc2UiPjxwYXRoIGQ9Ik0wIDAgTCAxMCA1IEwgMCAxMCB6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L21hcmtlcj48L2RlZnM+PHBhdGggZD0iTSAwIDkwIEwgMzAwIDkwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSIyLDMiLz48cGF0aCBkPSJNIDIwIDEwIEMgNzAgMTcwIDEzMCAxMCAxODAgOTAgQyAyMzAgMTcwIDI3MCAzMCAzMDAgOTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKDIwMCwgMTAwJSwgNTAlKSIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0iTSAxODAgNzAgTCAxODAgMTEwIiBtYXJrZXItc3RhcnQ9InVybCgjYXJyb3cpIiBtYXJrZXItZW5kPSJ1ybCgjYXJyb3cpIiBzdHJva2U9ImhzbCgwLCAxMDAlLCA1MCUpIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIvPjx0ZXh0IHg9IjE5MCIgeT0iOTUiIGZpbGw9ImhzbCgwLCAxMDAlLCA1MCUpIj5BPC90ZXh0PjxwYXRoIGQ9Ik0gNzAgOTAgTCAxODAgOTAiIG1hcmtlci1zdGFydD0idXJsKCNhcnJvdykiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIiBzdHJva2U9ImhzbCgxMjAsIDEwMCUsIDQ1JSkiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIi8+PHRleHQgeD0iMTI1IiB5PSI4MiIgZmlsbD0iaHNsKDEyMCwgMTAwJSwgNDUlKSI+zrs8L3RleHQ+PHRleHQgeD0iMTUwIiB5PSIxNzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0cm9rZS13aWR0aD0iMCIgc3R5bGU9ImZvbnQtc2l6ZToxMnB4Ij5mID0gZnJlcXXDqm5jaWEgPEJyLz5BID0gYW1wbGl0dWRlIDxici8+zrsgPSBjb21wcmltZW50byBkZSBvbmRhPC90ZXh0Pjwvc3ZnPg==" alt="Representação de uma onda senoidal destacando amplitude e comprimento de onda."/>
<ul>
    <li><strong>Fenômenos Ondulatórios:</strong>
        <ul>
            <li><strong>Reflexão:</strong> A onda bate e volta (eco).</li>
            <li><strong>Refração:</strong> A onda muda de meio e sua velocidade muda (luz entrando na água).</li>
            <li><strong>Difração:</strong> A onda contorna obstáculos (som passando por uma porta).</li>
            <li><strong>Interferência:</strong> Ondas se encontram e se somam (construtiva) ou se cancelam (destrutiva), como em fones com cancelamento de ruído.</li>
        </ul>
    </li>
</ul>
<h3>Óptica Geométrica</h3>
<p>Estuda a luz e a formação de imagens.</p>
<ul>
    <li><strong>Espelhos Esféricos:</strong> Côncavos (podem formar imagens reais ou virtuais) e convexos (formam sempre imagens virtuais, direitas e menores).</li>
    <li><strong>Lentes Delgadas:</strong> Convergentes (como uma lupa) e divergentes.</li>
    <li><strong>Fórmula principal:</strong> A Equação de Gauss, <code>1/f = 1/p + 1/p'</code>, relaciona a distância focal (f), a posição do objeto (p) e a posição da imagem (p').</li>
</ul>
    `},
  // Química
  { id: 'qui-1', name: 'Estequiometria', discipline: 'Química', summary: `
<h3>A "Receita de Bolo" da Química</h3>
<p>Estequiometria é o cálculo das quantidades de reagentes e produtos em uma reação química. O conceito central é o <strong>mol</strong>.</p>
<ul>
    <li><strong>O Mol:</strong> É uma "dúzia" de químico. 1 mol equivale a <strong>6,02 x 10²³</strong> entidades (átomos, moléculas).</li>
    <li><strong>Massa Molar (MM):</strong> É a massa, em gramas, de 1 mol de uma substância. Você a calcula somando as massas atômicas da tabela periódica. Ex: H₂O = (2 × 1g) + 16g = 18 g/mol.</li>
</ul>
<h3>Passo a Passo Infalível:</h3>
<ol>
    <li><strong>Escreva e Balanceie a Equação Química:</strong> Isso define a proporção em mols. Ex: <code>2H₂ + O₂ → 2H₂O</code> significa que 2 mols de hidrogênio reagem com 1 mol de oxigênio.</li>
    <li><strong>Monte a Regra de Três:</strong> Na primeira linha, coloque a proporção em mols (ou em massa, usando a MM). Na segunda linha, coloque os dados do problema e a incógnita (x).</li>
    <li><strong>Resolva:</strong> Certifique-se de que as unidades estão consistentes na mesma coluna (massa embaixo de massa, mol embaixo de mol).</li>
</ol>
<h3>Casos Especiais:</h3>
<ul>
    <li><strong>Reagente Limitante e em Excesso:</strong> O reagente limitante é aquele que é consumido primeiro e "limita" a quantidade de produto que pode ser formada.</li>
    <li><strong>Rendimento e Pureza:</strong> Nem toda reação é 100% eficiente (rendimento) e nem todo reagente é 100% puro (pureza). Esses fatores, quando dados, devem ser usados para corrigir o cálculo final.</li>
</ul>
  ` },
  { id: 'qui-2', name: 'Soluções', discipline: 'Química', summary: `
<h3>O que é uma Solução?</h3>
<p>É uma mistura homogênea de um <strong>soluto</strong> (o que é dissolvido, em menor quantidade) e um <strong>solvente</strong> (o que dissolve, em maior quantidade).</p>
<h3>Concentrações</h3>
<p>É a forma de expressar a proporção entre soluto e solvente/solução. As mais importantes são:</p>
<ul>
    <li><strong>Concentração Comum (C):</strong> Massa do soluto (g) por volume da solução (L). Fórmula: <code>C = m/V</code>.</li>
    <li><strong>Molaridade (M):</strong> Número de mols do soluto (n) por volume da solução (L). Fórmula: <code>M = n/V</code>. É a mais usada em química.</li>
</ul>
<h3>Operações com Soluções</h3>
<ul>
    <li><strong>Diluição:</strong> Adicionar mais solvente para diminuir a concentração. A quantidade de soluto não muda, então a fórmula é: <code>C₁V₁ = C₂V₂</code>.</li>
    <li><strong>Mistura de Soluções (mesmo soluto):</strong> O soluto final é a soma dos solutos iniciais, e o volume final é a soma dos volumes. <code>C_final · V_final = C₁V₁ + C₂V₂</code>.</li>
    <li><strong>Titulação:</strong> Técnica para descobrir a concentração de uma solução (ex: um ácido) reagindo-a com outra de concentração conhecida (ex: uma base), até a neutralização completa.</li>
</ul>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTgwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCI+PGRlZnM+PG1hcmtlciBpZD0iYXJyb3ciIHZpZXdCb3g9IjAgMCAxMCAxMCIgcmVmWD0iNSIgcmVmWT0iNSIgbWFya2VyV2lkdGg9IjYiIG1hcmtlckhlaWdodD0iNiIgb3JpZW50PSJhdXRvLXN0YXJ0LXJldmVyc2UiPjxwYXRoIGQ9Ik0wIDAgTCAxMCA1IEwgMCAxMCB6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L21hcmtlcj48L2RlZnM+PHBhdGggZD0iTSA0MCAxNDAgVjYwIEggMTAwIFYxNDAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMzUgNjAgSCAxMDUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSI0MCIgeT0iMTAwIiB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIGZpbGw9ImhzbCgwLCAxMDAlLCA3NSUpIi8+PHRleHQgeD0iNzAiIHk9IjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DMSwgVjE8L3RleHQ+PHBhdGggZD0iTSAyMDAgMTQwIFY2MCBIIDI2MCBWMTQwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5NSA2MCBIIDI2NSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjIwMCIgeT0iMTIwIiB3aWR0aD0iNjAiIGhlaWdodD0iMjAiIGZpbGw9ImhzbCgwLCAxMDAlLCA4NSUpIi8+PHRleHQgeD0iMjMwIiB5PSI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QzIsIFYyPC90ZXh0PjxwYXRoIGQ9Ik0gMTIwIDEwMCBMIDE4MCAxMDAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIG1hcmtlci1lbmQ9InVybCgjYXJyb3cpIiBmaWxsPSJub25lIi8+PHRleHQgeD0iMTUwIiB5PSI5NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxNHB4Ij5BZGnDp8OjbyBkZSBzb2x2ZW50ZTwvdGV4dD48L3N2Zz4=" alt="Diagrama ilustrando o processo de diluição de uma solução."/>
  ` },
  { id: 'qui-3', name: 'Termoquímica', discipline: 'Química', summary: `
<h3>O Calor das Reações</h3>
<p>Termoquímica estuda a energia, na forma de <strong>calor</strong>, que é absorvida ou liberada durante uma reação química. A grandeza que mede esse calor é a <strong>Variação de Entalpia (ΔH)</strong>.</p>
<ul>
    <li><strong>Reação Exotérmica:</strong> Libera calor para o ambiente (aquece). Ocorre quando os produtos são mais estáveis (menor energia) que os reagentes. <strong>ΔH é negativo (ΔH < 0)</strong>. Exemplo: a queima de uma vela.</li>
    <li><strong>Reação Endotérmica:</strong> Absorve calor do ambiente (esfria). Ocorre quando os produtos são menos estáveis (maior energia) que os reagentes. <strong>ΔH é positivo (ΔH > 0)</strong>. Exemplo: cozinhar um alimento.</li>
</ul>
<h3>Como Calcular o ΔH?</h3>
<p>Existem três métodos principais:</p>
<ol>
    <li><strong>Entalpia de Formação:</strong> Usa uma tabela de valores de ΔH de formação (ΔH°f) das substâncias. A fórmula é: <code>ΔH = ΣΔH°f(produtos) - ΣΔH°f(reagentes)</code>.</li>
    <li><strong>Energia de Ligação:</strong> Usa uma tabela com a energia necessária para quebrar 1 mol de cada tipo de ligação. O cálculo envolve somar a energia gasta para quebrar as ligações dos reagentes e subtrair a energia liberada na formação das ligações dos produtos.</li>
    <li><strong>Lei de Hess:</strong> Permite tratar equações químicas como se fossem equações algébricas. Você pode somar, subtrair ou multiplicar reações (e seus respectivos ΔH) para chegar na reação global desejada. É um "quebra-cabeça" químico.</li>
</ol>
  ` },
  { id: 'qui-4', name: 'Química Orgânica', discipline: 'Química', summary: `
<h3>A Química do Carbono</h3>
<p>É o estudo dos compostos que contêm carbono. A capacidade do carbono de formar quatro ligações estáveis e se encadear com outros carbonos gera uma imensa variedade de moléculas.</p>
<h3>Funções Orgânicas</h3>
<p>É crucial saber <strong>identificar os grupos funcionais</strong>, que são grupos de átomos que conferem propriedades químicas específicas às moléculas.</p>
<ul>
    <li><strong>Hidrocarbonetos:</strong> Contêm apenas Carbono e Hidrogênio (ex: alcanos, alcenos, alcinos).</li>
    <li><strong>Funções Oxigenadas:</strong> Contêm Oxigênio (ex: Álcool, Aldeído, Cetona, Ácido Carboxílico, Éster).</li>
    <li><strong>Funções Nitrogenadas:</strong> Contêm Nitrogênio (ex: Amina, Amida).</li>
</ul>
<h3>Isomeria</h3>
<p>É o fenômeno onde duas ou mais substâncias diferentes possuem a <strong>mesma fórmula molecular</strong>, mas estruturas diferentes. Isso leva a propriedades físicas e químicas distintas.</p>
<ul>
    <li><strong>Isomeria Plana:</strong> As diferenças são visíveis na fórmula estrutural plana (de função, de cadeia, de posição).</li>
    <li><strong>Isomeria Espacial (Estereoisomeria):</strong> A conectividade dos átomos é a mesma, mas o arranjo espacial é diferente (isomeria geométrica/cis-trans e óptica).</li>
</ul>
<h3>Reações Orgânicas</h3>
<p>É um tópico denso, mas o foco para vestibulares é reconhecer o padrão das principais reações:</p>
<ul>
    <li><strong>Adição:</strong> Típica de compostos com ligações duplas ou triplas (alcenos e alcinos), onde a ligação π é quebrada.</li>
    <li><strong>Substituição:</strong> Típica de compostos com ligações simples (alcanos) ou anéis aromáticos, onde um átomo ou grupo é trocado por outro.</li>
    <li><strong>Oxidação:</strong> Reações importantes, como a oxidação de álcoois para formar aldeídos/cetonas e, posteriormente, ácidos carboxílicos.</li>
</ul>
  `},
  { id: 'qui-5', name: 'Eletroquímica', discipline: 'Química', summary: `
<h3>A Ponte entre Química e Eletricidade</h3>
<p>Eletroquímica estuda as reações que produzem ou são causadas por corrente elétrica. Envolve reações de <strong>oxirredução</strong> (transferência de elétrons).</p>
<ul>
    <li><strong>Oxidação:</strong> Perda de elétrons. O número de oxidação (NOX) aumenta.</li>
    <li><strong>Redução:</strong> Ganho de elétrons. O número de oxidação (NOX) diminui.</li>
</ul>
<h3>Pilhas (Células Galvânicas)</h3>
<p><strong>Transformam energia química em energia elétrica</strong> através de uma reação de oxirredução <strong>espontânea</strong>.</p>
<ul>
    <li><strong>Ânodo:</strong> É o eletrodo onde ocorre a <strong>oxidação</strong>. É o polo <strong>negativo</strong> da pilha.</li>
    <li><strong>Cátodo:</strong> É o eletrodo onde ocorre a <strong>redução</strong>. É o polo <strong>positivo</strong> da pilha.</li>
    <li><strong>DDP (Diferença de Potencial):</strong> É a "voltagem" da pilha. <code>ΔE° = E°(redução_cátodo) - E°(redução_ânodo)</code>. Se ΔE° > 0, a reação é espontânea.</li>
</ul>
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTgwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCI+CiAgICA8ZGVmcz48bWFya2VyIGlkPSJhcnJvdyIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI1IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+PHBhdGggZD0iTTAgMCBMIDEwIDUgTCAwIDEwIHoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvbWFya2VyPjwvZGVmcz4KICAgIDwhLS0gQmVhY2tlciBkYSBFc3F1ZXJkYSAtLT4KICAgIDxwYXRoIGQ9Ik0gMjAgMTU1IFYgODUgSCA4NiBWIDE1NSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIi8+CiAgICA8cGF0aCBkPSJNIDE1IDg1IEggOTEiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHJlY3QgeD0iMjAiIHk9IjEyNSIgd2lkdGg9IjY2IiBoZWlnaHQ9IjMwIiBmaWxsPSJoc2woMjAwLCAxMDAlLCA5MCUpIi8+CiAgICA8cmVjdCB4PSIzMCIgeT0iNTAiIHdpZHRoPSIxMiIgaGVpZ2h0PSI3NSIgcng9IjIiIHN0cm9rZT0iaHNsKDMwLCA4MCUsIDUwJSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0iaHNsKDMwLCA4MCUsIDcwJSkiLz4KICAgIDx0ZXh0IHg9IjM2IiB5PSI0MiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiPi08L3RleHQ+CiAgICA8dGV4dCB4PSI1MyIgeT0iMTcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE0Ij7Cbm9kbyAoWm4pPC90ZXh0PgogICAgPCEtLSBCZWFja2VyIGRhIERpcmVpdGEgLS0+CiAgICA8cGF0aCBkPSJNMjA4IDE1NSYgODYiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWRhc2hhcnJheT0iMiw0Ii8+CiAgICA8dGV4dCB4PSIxNDIiIHk9IjEzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMnB4Ij5Qb250ZSBTYWxpbmE8L3RleHQ+CiAgICA8IS0tIENpcmN1aXRvIEV4dGVybm8gLS0+CiAgICA8cGF0aCBkPSJNMzYgNTIgSCAyNDgiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggZD0iTSAxODAgNTIgTCAxMjAgNTIiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KICAgIDx0ZXh0IHg9IjE1MCIgeT0iNDQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTRweCI+ZcKBPC90ZXh0Pgo8L3N2Zz4=" alt="Esquema de uma Pilha de Daniell com ânodo de zinco e cátodo de cobre."/>
<h3>Eletrólise</h3>
<p><strong>Transforma energia elétrica em energia química</strong>, forçando uma reação de oxirredução <strong>não espontânea</strong> a ocorrer.</p>
<ul>
    <li><strong>Aplicações:</strong> Produção de metais (como o alumínio), de gás cloro e soda cáustica, e revestimento de objetos com metais nobres (galvanoplastia, como folhear a ouro).</li>
    <li><strong>Eletrólise Ígnea:</strong> Ocorre com a substância pura fundida (sem água).</li>
    <li><strong>Eletrólise Aquosa:</strong> Ocorre em solução com água. É preciso comparar a facilidade de descarga entre os íons da substância e os íons da água (H⁺ e OH⁻) para saber quem reage.</li>
</ul>
  `},
];

export const FLASHCARDS: Flashcard[] = [
  // MATEMÁTICA
  // Funções
  { id: 1, topicId: 'mat-1', question: 'Qual a fórmula da equação de 2º grau?', answer: 'f(x) = ax² + bx + c' },
  { id: 2, topicId: 'mat-1', question: 'O que é o vértice de uma parábola?', answer: 'O ponto de máximo ou mínimo da função de 2º grau, calculado por Xv = -b/2a e Yv = -Δ/4a.' },
  { id: 27, topicId: 'mat-1', question: 'Como se deriva a fórmula de Bhaskara?', answer: 'Pela técnica de "completar quadrados" na equação geral ax² + bx + c = 0.'},
  { id: 28, topicId: 'mat-1', question: 'Para que serve o Xv (coordenada x do vértice)?', answer: 'Para encontrar o ponto que maximiza ou minimiza uma função quadrática, como o preço que maximiza o lucro.'},
  // Geometria
  { id: 3, topicId: 'mat-2', question: 'Qual a fórmula da área de um triângulo equilátero?', answer: 'A = (l² * √3) / 4' },
  { id: 4, topicId: 'mat-2', question: 'Enuncie o Teorema de Pitágoras.', answer: 'Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos (a² = b² + c²).' },
  { id: 25, topicId: 'mat-2', question: 'Qual a soma dos ângulos internos de um triângulo?', answer: 'Sempre 180 graus.' },
  { id: 29, topicId: 'mat-2', question: 'Qual a fórmula para o volume de um cilindro?', answer: 'V = Área da base * altura, ou V = π * r² * h.'},
  // Probabilidade e Estatística
  { id: 5, topicId: 'mat-3', question: 'Qual a probabilidade de tirar um "Ás" em um baralho de 52 cartas?', answer: '4/52 ou 1/13. Existem 4 Ases em 52 cartas.' },
  { id: 6, topicId: 'mat-3', question: 'O que são eventos mutuamente exclusivos?', answer: 'Eventos que não podem ocorrer ao mesmo tempo. Ex: tirar "cara" e "coroa" em um único lançamento de moeda.' },
  { id: 32, topicId: 'mat-3', question: 'O que é o Princípio Fundamental da Contagem (PFC)?', answer: 'Se um evento pode ocorrer de M maneiras e um segundo de N maneiras, os dois juntos podem ocorrer de M * N maneiras.'},
  { id: 33, topicId: 'mat-3', question: 'Quando usar Combinação (C) em vez de Arranjo (A)?', answer: 'Use Combinação quando a ordem dos elementos escolhidos NÃO importa (ex: formar uma comissão).'},
  { id: 83, topicId: 'mat-3', question: 'O que é Mediana em estatística?', answer: 'É o valor central de um conjunto de dados ordenado. Se houver um número par de dados, é a média dos dois centrais.'},
  // Trigonometria
  { id: 30, topicId: 'mat-4', question: 'O que a Lei dos Cossenos generaliza?', answer: 'O Teorema de Pitágoras, aplicando-o para qualquer triângulo (não apenas retângulos).'},
  { id: 31, topicId: 'mat-4', question: 'Quando se deve usar a Lei dos Senos?', answer: 'Quando se conhece um lado e dois ângulos de um triângulo, ou dois lados e o ângulo oposto a um deles.'},
  { id: 84, topicId: 'mat-4', question: 'Qual a Relação Fundamental da Trigonometria?', answer: 'sen²(x) + cos²(x) = 1. Válida para qualquer ângulo x.'},

  // FÍSICA
  // Cinemática
  { id: 7, topicId: 'fis-1', question: 'Qual a equação horária da posição no MRUV?', answer: 'S = S₀ + v₀t + (at²)/2 (Sorvetão)' },
  { id: 8, topicId: 'fis-1', question: 'O que a Equação de Torricelli relaciona?', answer: 'Velocidade final, velocidade inicial, aceleração e deslocamento, sem depender do tempo.' },
  { id: 9, topicId: 'fis-1', question: 'Em queda livre, qual o valor da aceleração?', answer: 'A aceleração da gravidade (g), aproximadamente 9,8 m/s².' },
  { id: 34, topicId: 'fis-1', question: 'Qual o significado da área sob o gráfico Velocidade x Tempo?', answer: 'Representa o deslocamento (ΔS) do móvel no intervalo de tempo.'},
  // Dinâmica e Energia
  { id: 10, topicId: 'fis-2', question: 'Qual é a Segunda Lei de Newton?', answer: 'F = m * a (Força resultante é igual a massa vezes aceleração).' },
  { id: 11, topicId: 'fis-2', question: 'O que é a força Normal?', answer: 'É uma força de contato perpendicular à superfície, que impede que um corpo a atravesse.' },
];
// FIX: The FLASHCARDS array was left open with an incomplete and invalid entry.
// This change closes the array correctly and adds the missing EXAM_QUESTIONS constant.
export const EXAM_QUESTIONS: ExamQuestion[] = [
  // MATEMÁTICA - Funções
  {
    id: 1,
    topicId: 'mat-1',
    source: 'ENEM',
    statement: 'O gráfico de uma função quadrática f(x) = ax² + bx + c é uma parábola com concavidade para cima e que intersecta o eixo y em y=5. O que podemos afirmar sobre os coeficientes a e c?',
    options: [
      'a > 0 e c = 5',
      'a < 0 e c = -5',
      'a > 0 e c = -5',
      'a < 0 e c = 5',
      'a = 0 e c = 5'
    ],
    correctAnswerIndex: 0,
    explanation: 'A concavidade para cima indica que o coeficiente "a" é positivo (a > 0). O ponto onde o gráfico intersecta o eixo y é o valor de f(0), que é c. Portanto, c = 5.'
  },
  // FÍSICA - Cinemática
  {
    id: 2,
    topicId: 'fis-1',
    source: 'FUVEST',
    statement: 'Um carro parte do repouso e acelera uniformemente a 2 m/s². Qual a distância percorrida pelo carro após 10 segundos?',
    options: [
      '20 m',
      '50 m',
      '100 m',
      '200 m',
      '40 m'
    ],
    correctAnswerIndex: 2,
    explanation: 'Usando a função horária da posição para MRUV (S = S₀ + v₀t + (at²)/2), com S₀=0, v₀=0, a=2 m/s² e t=10s, temos: S = (2 * 10²) / 2 = 100 metros.'
  },
    // QUÍMICA - Estequiometria
  {
    id: 3,
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
  }
];
