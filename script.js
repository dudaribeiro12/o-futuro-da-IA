const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
[   enunciado: "1.A IA será capaz de criar designs personalizados automaticamente, sem a 
intervenção de designers humanos."

alternativas: "Verdadeiro,  Falso"]
}
{
  [enunciado:. "2. A IA poderá gerar código automaticamente para funcionalidades como
 formulários e integração com redes sociais."

alternativas:  "Verdadeiro,  Falso"]
}
{
  [enunciado:. "3. A IA ajudará na criação de sites mais acessíveis, 
ajustando design e conteúdo para usuários com deficiência.

alternativas: "Verdadeiro,  Falso"]
}
{
  [enunciado:. "4. A IA será capaz de corrigir erros de código de forma autônoma."

alternativas:  "Verdadeiro,  Falso"]
}

{
  [ enunciado:. "5. A IA será capaz de corrigir erros de código de forma autônoma5. A IA poderá personalizar a experiência do usuário, 
mostrando conteúdo relevante com base em seu comportamento de navegação.."

alternativas:  "Verdadeiro,  Falso"]
}
{
  [enunciado:. "6.Os sites criados por IA terão a capacidade de adaptar o conteúdo em tempo real para otimizar a experiência do usuário.."

alternativas:  "Verdadeiro,  Falso"]
  ]
}

let atual= 0;
let perguntaAtual; 
let historiaFinal = "";
 

function mostraPerguntas(){
  perguntasAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}
function mostraAlternativas(){
  for (const alternativa of perguntaAtual.alternativas){
  const botaoAlternativas = document.createElement("button");
  botaoAlternativas.textContent = alternativa.texto;
  botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
  caixaAlternativas.appendChild(botaoAlternativas);
  }
}
function respostaSelecionada(opcaoSelecionada){
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal = afirmacoes;
  atual++;
mostraPerguntas();
}

function mostraResultado (){ 
caixaPerguntas.textContent = "Este quiz foi criado com o objetivo de testar, de forma leve e interativa,
 o conhecimento sobre o uso da Inteligência Artificial no desenvolvimento de sites. A IA tem se tornado uma ferramenta cada vez mais presente na tecnologia, e entender seu funcionamento, vantagens e riscos é essencial.
Com perguntas divertidas e educativas, o quiz estimula o pensamento 
crítico, esclarece dúvidas comuns e ajuda a refletir sobre como usamos a tecnologia no dia a dia.
Além de aprender, você também vai se divertir com algumas alternativas
 bem criativas!" ;
textoResultado.textContent=historiaFinal;
caixaAlternativas.textContent= "";
}

mostraPergunta();