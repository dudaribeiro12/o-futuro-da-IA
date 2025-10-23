const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "1. A IA será capaz de criar designs personalizados automaticamente, sem a intervenção de designers humanos.",
    alternativas: ["Verdadeiro", "Falso"],
    respostaCorreta: "Falso" // Resposta correta
  },
  {
    enunciado: "2. A IA poderá gerar código automaticamente para funcionalidades como formulários e integração com redes sociais.",
    alternativas: ["Verdadeiro", "Falso"],
    respostaCorreta: "Verdadeiro"
  },
  {
    enunciado: "3. A IA ajudará na criação de sites mais acessíveis, ajustando design e conteúdo para usuários com deficiência.",
    alternativas: ["Verdadeiro", "Falso"],
    respostaCorreta: "Verdadeiro"
  },
  {
    enunciado: "4. A IA será capaz de corrigir erros de código de forma autônoma.",
    alternativas: ["Verdadeiro", "Falso"],
    respostaCorreta: "Verdadeiro"
  },
  {
    enunciado: "5. A IA poderá personalizar a experiência do usuário, mostrando conteúdo relevante com base em seu comportamento de navegação.",
    alternativas: ["Verdadeiro", "Falso"],
    respostaCorreta: "Verdadeiro"
  },
  {
    enunciado: "6. Os sites criados por IA terão a capacidade de adaptar o conteúdo em tempo real para otimizar a experiência do usuário.",
    alternativas: ["Verdadeiro", "Falso"],
    respostaCorreta: "Verdadeiro"
  }
];

let atual = 0;
let respostasSelecionadas = []; // Armazenar as respostas do usuário

function mostraPerguntas() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.innerHTML = ""; // Limpar alternativas anteriores
  mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
  perguntaAtual.alternativas.forEach((alternativa) => {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  });
}

function respostaSelecionada(alternativaSelecionada) {
  // Armazenar a resposta escolhida, sem verificar ainda
  respostasSelecionadas.push(alternativaSelecionada);
  
  atual++; // Avançar para a próxima pergunta
  mostraPerguntas();
}

function mostraResultado() {
  let pontuacao = 0;
  
  // Verificar as respostas no final
  perguntas.forEach((pergunta, index) => {
    if (respostasSelecionadas[index] === pergunta.respostaCorreta) {
      pontuacao++;
    }
  });

  caixaPerguntas.textContent = "Obrigado por participar do quiz! Aqui está seu resultado:";
  textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;

  caixaAlternativas.innerHTML = ""; // Limpar alternativas após o final
}

mostraPerguntas(); // Inicia o quiz
