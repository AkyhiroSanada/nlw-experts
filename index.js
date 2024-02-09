const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    respostas: [
      "Buenos Aires",
      "Lima",
      "Brasília",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a capital dos Estados Unidos?",
    respostas: [
      "Nova York",
      "Washington, D.C.",
      "Los Angeles",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a capital do Japão?",
    respostas: [
      "Pequim",
      "Tóquio",
      "Seul",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a capital da França?",
    respostas: [
      "Londres",
      "Berlim",
      "Paris",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a capital da Rússia?",
    respostas: [
      "Moscovo",
      "São Petersburgo",
      "Kiev",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a capital da Índia?",
    respostas: [
      "Deli",
      "Bombaim",
      "Calcutá",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a capital da China?",
    respostas: [
      "Xangai",
      "Pequim",
      "Hong Kong",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a capital da Alemanha?",
    respostas: [
      "Munique",
      "Hamburgo",
      "Berlim",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a capital da Itália?",
    respostas: [
      "Milão",
      "Roma",
      "Florença",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a capital da Austrália?",
    respostas: [
      "Sydney",
      "Melbourne",
      "Canberra",
    ],
    correta: 2
  },
];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta  of item.respostas){
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
       const  estaCorreta = event.target.value == item.correta
       
       corretas.delete(item)
       if(estaCorreta) {
         corretas.add(item)
       }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
     }
     
     quizItem.querySelector('dl').appendChild(dt)
    }
  
    // remove a mensagem reposta A
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
    
  }