const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de servidor",
        "Uma linguagem de marcação",
        "Uma linguagem de programação de script para navegador",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let x = 5;",
        "const x = 5;",
        "var x = 5;",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um objeto",
        "Um bloco de código reutilizável",
      ],
      correta: 2
    },
    {
      pergunta: "Como você faz um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "' Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "console.log()",
        "print.console()",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um modelo de design para objetos",
        "Um modelo de documento para objetos",
        "Um modelo de dados para objetos",
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para comparar igualdade em valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um formato de intercâmbio de dados",
        "Um método de impressão na tela",
      ],
      correta: 1
    },
    {
      pergunta: "Como você adiciona um evento a um elemento HTML em JavaScript?",
      respostas: [
        "element.attachEvent()",
        "element.addEventListener()",
        "element.addEvent()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Retorna o tipo de uma variável",
        "Compara dois valores",
        "Concatena duas strings",
      ],
      correta: 0
    }
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