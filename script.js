const questions = [
    {
        question: "Qual é o nome do famoso personagem de contos de fadas que perde um sapato?",
        answers: [
            { text: "Rapunzel", correct: false },
            { text: "Cinderela", correct: true},
            { text: "Branca de Neve", correct: false },
            { text: "Chapeuzinho Vermelho", correct: false }
        ]
    },
    {
        question: "Qual é a estação do ano que geralmente é mais quente?",
        answers: [
            { text: "Verão", correct: true },
            { text: "Primavera", correct: false},
            { text: "Outono", correct: false },
            { text: "Inverno", correct: false }
        ]
    },
    {
        question: "Em que continente fica o Brasil?",
        answers: [
            { text: "Europa", correct: false },
            { text: "Ásia", correct: false},
            { text: "África", correct: false },
            { text: "América do Sul", correct: true }
        ]
    },
    {
        question: "Qual é o sabor clássico do sorvete de baunilha?",
        answers: [
            { text: "Chocolate", correct: false },
            { text: "Morango", correct: false},
            { text: "Limão", correct: false },
            { text: "Baunilha", correct: true }
        ]
    },
    {
        question: "Qual é o nome do navegador da web criado pela Mozilla?",
        answers: [
            { text: "Chrome", correct: false },
            { text: "Edge", correct: false},
            { text: "Safari", correct: false },
            { text: "Firefox", correct: true}
        ]
    },
    {
        question: "Qual é o conceito de inflação?",
        answers: [
            { text: "Aumento geral dos preços", correct: true },
            { text: "Aumento do poder aquisitivo", correct: false},
            { text: "Queda da produção", correct: false },
            { text: "Aumento do emprego", correct: false }
        ]
    },
    {
        question: "Quem é a deusa grega da sabedoria?",
        answers: [
            { text: "Afrodite", correct: false },
            { text: "Atena", correct: true},
            { text: "Hera", correct: false },
            { text: "Deméter", correct: false }
        ]
    },
    {
        question: "Qual é o maior órgão do corpo humano?",
        answers: [
            { text: "Coração", correct: false },
            { text: "Fígado", correct: false},
            { text: "Pele", correct: true },
            { text: "Pulmões", correct: false }
        ]
    },
    {
        question: "Qual é o maior animal terrestre?",
        answers: [
            { text: "Elefante", correct: true},
            { text: "Girafa", correct: false},
            { text: " Urso-polar", correct: false },
            { text: "Hipopótamo", correct: false }
        ]
    },
    {
        question: "Qual civilização é conhecida por construir pirâmides?",
        answers: [
            { text: "Mesopotâmicos", correct: false },
            { text: "Romanos", correct: false},
            { text: "Egípcios", correct: true },
            { text: "Gregos", correct: false }
        ]
    },

    {
        question: "Em 2023, qual importante acordo climático foi reforçado na COP27?",
        answers: [
            { text: "Acordo de Paris", correct: false },
            { text: "Protocolo de Kyoto", correct: false },
            { text: "Compromissos de Net Zero", correct: false },
            { text: " Acordo de Glasgow", correct:true}
        ]
    },
    {
        question: "Qual país foi sede da Copa do Mundo de Futebol em 2022?",
        answers: [
            { text: "Brasil", correct: false },
            { text: "Qatar", correct: true },
            { text: "Rússia", correct: false },
            { text: "Alemanha", correct: false }
        ]
    },
    {
        question: "Qual tema ambiental tem sido muito discutido atualmente?",
        answers: [
            { text: "A poluição do ar", correct: true},
            { text: " A extinção dos dinossauros", correct: false },
            { text: "A Era do Gelo", correct: false },
            { text: "O sistema solar", correct: false }
        ]
    },
    {
        question: "Qual desses movimentos busca promover a igualdade de gênero?",
        answers: [
            { text: "Movimento Ambiental", correct: false },
            { text: "Movimento LGBTQ+", correct: false },
            { text: "Movimento Feminista", correct: true },
            { text: "Movimento Trabalhista", correct: false }
        ]
    },
    {
        question: "O que é racismo?",
        answers: [
            { text: "A promoção da cultura de um único grupo", correct: false },
            { text: "A discriminação baseada na cor da pele ou origem étnica", correct: true},
            { text: "A diversidade de religiões", correct: false },
            { text: " A prática de esportes", correct: false }
        ]
    },
    {
        question: "Qual desses estilos de música é conhecido por suas raízes africanas e ritmos animados?",
        answers: [
            { text: "Jazz", correct: false },
            { text: "Rock", correct: false },
            { text: "Clássica", correct: false },
            { text: "Reggae", correct: true }
        ]
    },
    {
        question: "O que caracteriza uma dieta vegana?",
        answers: [
            { text: "Consumo de carne", correct: false },
            { text: "Exclusão de produtos de origem animal", correct: true },
            { text: "Consumo de laticínios", correct: false },
            { text: "Aumento do consumo de açúcar", correct: false }
        ]
    },
    {
        question: "Qual é a fórmula química da água?",
        answers: [
            { text: "CO2", correct: false },
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "NaCl", correct: false }
        ]
    },
    {
        question: "Qual é o resultado de 9 x 8?",
        answers: [
            { text: "64", correct: false },
            { text: "72", correct: true},
            { text: "81", correct: false },
            { text: "90", correct: false }
        ]
    },
    {
        question: "Qual é a capital da França?",
        answers: [
            { text: "Londres", correct: false },
            { text: "Roma", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlim", correct: false }
        ]
    },
    {
        question: "Qual linguagem de programação é amplamente utilizada para desenvolvimento web?",
        answers: [
            { text: " Python", correct: false },
            { text: "Ruby", correct: false },
            { text: "C++", correct: false },
            { text: "JavaScript", correct: true}
        ]
    },
    {
        question: "Qual é a raiz quadrada de 64?",
        answers: [
            { text: "8", correct: true },
            { text: "6", correct: false },
            { text: "5", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "Qual é o maior país do mundo?",
        answers: [
            { text: "EUA", correct: false },
            { text: "China", correct: false },
            { text: "Canadá", correct: false },
            { text: "Rússia", correct: true }
        ]
    },

    {
        question: "Qual é o rio mais longo do mundo?",
        answers: [
            { text: "Nilo", correct: true },
            { text: "Amazonas", correct: false },
            { text: "Mississippi", correct: false },
            { text: "Rio Itinga", correct: false }
        ]
    },
    {
        question: "Quantos lados tem um hexágono?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "9", correct: false },
            { text: "4", correct: true }
        ]
    },
    {
        question: "Qual é a capital do Brasil?",
        answers: [
            { text: "São Paulo", correct: false},
            { text: "Rio de Janeiro", correct: false },
            { text: "Salvador", correct: false },
            { text: "Brasília", correct: true }
        ]
    },
    {
        question: "Qual é o maior estado do Brasil em área?",
        answers: [
            { text: "São Paulo", correct:false},
            { text: "Amazonas", correct: true },
            { text: "Minas Gerais", correct: false },
            { text: "Bahia", correct: false }
        ]
    },
    {
        question: "Qual é o maior estado do Brasil em área?",
        answers: [
            { text: "São Paulo", correct:false},
            { text: "Amazonas", correct: true },
            { text: "Minas Gerais", correct: false },
            { text: "Bahia", correct: false }
        ]
    },
    {
        question: "Se o Brasil tem 26 estados e 1 Distrito Federal, quantas unidades federativas existem no total?",
        answers: [
            { text: "27", correct: true },
            { text: "28", correct: false },
            { text: "25", correct: false },
            { text: "26", correct: false }
        ]
    },
    {
        question: " Qual é o rio mais extenso do Brasil?",
        answers: [
            { text: "Rio Paraná", correct: false },
            { text: "Rio São Francisco", correct: false },
            { text: "Rio Concrem", correct: false },
            { text: "Rio Amazonas", correct: true }
        ]
    },
    {
        question: "Se uma cidade no Brasil tem 1.200 habitantes e 60% deles são mulheres, quantos homens vivem nessa cidade?",
        answers: [
            { text: "480", correct: true },
            { text: "520", correct: false },
            { text: "460", correct: false },
            { text: "540", correct: false }
        ]
    },
    {
        question: "O que é, o que é? Quanto mais você tira, maior fica.?",
        answers: [
            { text: "Buraco", correct: true },
            { text: "Sombra", correct: false },
            { text: "Cama", correct: false },
            { text: "Água", correct: false }
        ]
    },
    {
        question: "O que é que está sempre na sua frente, mas não pode ser visto?",
        answers: [
            { text: "Passado", correct: false },
            { text: "Futuro", correct: true},
            { text: "Escuro", correct: false },
            { text: "Vento", correct: false }
        ]
    },
    
    {
        question: "Qual das palavras abaixo está escrita corretamente?",
        answers: [
            { text: "Ecessão", correct: false },
            { text: "Exceção", correct: false },
            { text: "Excessão", correct: false },
            { text: "Exceção", correct: true }
        ]
    },
    
    {
        question: "Qual é o resultado de 15 × 3?",
        answers: [
            { text: "45", correct: true },
            { text: "30", correct: false },
            { text: "50", correct: false },
            { text: "60", correct: false }
        ]
    },
    
    {
        question: "Se um produto custa R$ 200 e está com 20% de desconto, qual será o seu preço final??",
        answers: [
            { text: "160,00", correct: true },
            { text: "180,00", correct: false },
            { text: "140,00", correct: false },
            { text: "150,00", correct: false }
        ]
    },
    
    {
        question: "Qual a forma correta do verbo (caber) na primeira pessoa do singular do presente do indicativo?",
        answers: [
            { text: "Eu caber", correct: false },
            { text: "Eu cabe", correct: false },
            { text: "Eu couber", correct: false },
            { text: "Eu cabo", correct: true }
        ]
    },
    
    {
        question: "Qual é o antônimo da palavra (feliz)?",
        answers: [
            { text: "Alegre", correct: false },
            { text: "Triste", correct: true },
            { text: "Contente", correct: false },
            { text: "Satisfeito", correct: false }
        ]
    },
    
    {
        question: "Qual é a raiz quadrada de 81?",
        answers: [
            { text: "7", correct: false },
            { text: "8", correct: false },
            { text: "9", correct: true },
            { text: "10", correct: false }
        ]
    },
    
    {
        question: "Qual é a maior cidade do Brasil em população? mundo?",
        answers: [
            { text: "Brasília", correct: false},
            { text: "São Paulo", correct: true },
            { text: "Rio de Janeiro", correct: false },
            { text: "Ulianópolis", correct: false }
        ]
    },
    
    {
        question: "Qual é o rio mais longo do mundo?",
        answers: [
            { text: "Nilo", correct: true },
            { text: "Amazonas", correct: false },
            { text: "Mississippi", correct: false },
            { text: "Rio Itinga", correct: false }
        ]
    },
    
    {
        question: "Qual é o principal bioma do Brasil?",
        answers: [
            { text: "Cerrado", correct: true },
            { text: "Pantanal", correct: false },
            { text: "Amazônia", correct: false },
            { text: "Caatinga", correct: false }
        ]
    },
    {
        question: "Qual é o sinônimo da palavra rápido?",
        answers: [
            { text: "Lentidão", correct: false },
            { text: "Ágil", correct: true },
            { text: "Demorado", correct: false },
            { text: "Tranquilo", correct: false }
        ]
    },
    {
        question: "Qual é o resultado de 25 dividido por 5?",
        answers: [
            { text: "4", correct: false},
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "5", correct: true }
        ]
    },
    {
        question: "Qual dos seguintes é um sistema operacional?",
        answers: [
            { text: "Microsoft Word", correct: false },
            { text: "Windows", correct: true },
            { text: "adobe", correct: false },
            { text: "Google", correct: false }
        ]
    },
    {
        question: "Qual é a função principal de um navegador de internet?",
        answers: [
            { text: "Editar textos", correct: false},
            { text: "Navegar na web ", correct: true },
            { text: "Gerenciar arquivos", correct: false },
            { text: "Criar gráficos", correct: false }
        ]
    },
    {
        question: "O que é um malware?",
        answers: [
            { text: "Um software de proteção", correct: false},
            { text: "Um tipo de hardware", correct: false },
            { text: "Um aplicativo de produtividade", correct: false },
            { text: " Um software malicioso", correct: true }
        ]
    },

  
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-button');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
        document.getElementById('player1').innerText = "Acertou😄🎉👍"; // emoji feliz
    } else {
        document.getElementById('player1').innerText = "Errou😟❌😞"; // emoji triste
    }

    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            endGame();
        }
    }, 1000);
}

function endGame() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    resultTrext.innerText = `Parabéns por ter chegado até aqui! Você ganhou mais conhecimento intelectual para sua vida. Você acertou ${score} de ${questions.length} perguntas!`;
}

restartButton.addEventListener('click', startGame);

startGame();

function updateFooter() {
    const footerText = document.getElementById('footer-text');
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    footerText.innerText = `Bento Lima | ${now.toLocaleDateString('pt-BR', options)}`;
}
startGame();
updateFooter();
