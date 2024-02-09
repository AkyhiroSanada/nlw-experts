const perguntas = [
  {
    pergunta: "Qual é a capital de Acre?",
    respostas: [
      "Porto Velho",
      "Manaus",
      "Rio Branco",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a capital de Alagoas?",
    respostas: [
      "Recife",
      "Maceió",
      "João Pessoa",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a capital do Amapá?",
    respostas: [
      "Belém",
      "Macapá",
      "Palmas",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a capital do Amazonas?",
    respostas: [
      "Cuiabá",
      "Manaus",
      "Porto Velho",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a capital da Bahia?",
    respostas: [
      "Salvador",
      "Aracaju",
      "Fortaleza",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a capital do Ceará?",
    respostas: [
      "Natal",
      "Fortaleza",
      "São Luís",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a capital do Espírito Santo?",
    respostas: [
      "Vitória",
      "Belo Horizonte",
      "Curitiba",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a capital de Goiás?",
    respostas: [
      "Goiânia",
      "Brasília",
      "Campo Grande",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a capital do Maranhão?",
    respostas: [
      "São Luís",
      "Recife",
      "João Pessoa",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a capital do Mato Grosso?",
    respostas: [
      "Palmas",
      "Cuiabá",
      "Porto Alegre",
    ],
    correta: 1
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