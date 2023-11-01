// Função para embaralhar as opções de resposta
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = `Pergunta ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    
    const choicesList = document.getElementById("choices");
    choicesList.innerHTML = "";

    // Embaralhe as opções de resposta antes de exibi-las
    const shuffledChoices = shuffleArray(currentQuestion.choices);

    shuffledChoices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.onclick = () => checkAnswer(currentQuestion.choices.indexOf(choice));
        choicesList.appendChild(document.createElement("li").appendChild(choiceButton));
    });

    document.getElementById("result").textContent = "";
    document.getElementById("score").textContent = `Pontuação: ${score}`;
    document.getElementById("prev-button").disabled = currentQuestionIndex === 0;
}

const questions = [
    {
        question: "Qual é a principal função da logística?",
        choices: ["Gerenciar estoques", "Cozinhar comida", "Pintar quadros"],
        correctAnswer: 0
    },
    {
        question: "O que é um KPI de logística?",
        choices: ["Key Performance Indicator", "Keep People Informed", "Kilograms per Item"],
        correctAnswer: 0
    },
    {
        question: "O que é o JIT (Just in Time) na logística?",
        choices: ["Entregar produtos na hora certa", "Agendar reuniões", "Preparar comida no momento"],
        correctAnswer: 0
    },
    {
        question: "O que significa LTL na logística?",
        choices: ["Less Than Truckload", "Large Transportation Load", "Long Travel Line"],
        correctAnswer: 0
    },
    {
        question: "O que é um armazém de cross-docking?",
        choices: ["Um local de transferência rápida de produtos", "Um museu de arte contemporânea", "Uma escola de mergulho"],
        correctAnswer: 0
    },
    {
        question: "Qual é o objetivo do roteiramento na logística?",
        choices: ["Encontrar a melhor rota para entrega", "Aprender a tocar guitarra", "Fazer esculturas de areia na praia"],
        correctAnswer: 0
    },
    {
        question: "O que é a última milha na logística?",
        choices: ["A entrega final ao cliente", "A última página de um livro", "A última aula de uma palestra"],
        correctAnswer: 0
    },
    {
        question: "O que é um pallet na logística?",
        choices: ["Uma plataforma de carga", "Um animal exótico", "Um tipo de sobremesa"],
        correctAnswer: 0
    },
    {
        question: "O que é um WMS na logística?",
        choices: ["Warehouse Management System", "Web Marketing Strategy", "Wireless Mobile Service"],
        correctAnswer: 0
    },
    {
        question: "Qual é o objetivo do rastreamento de carga na logística?",
        choices: ["Monitorar a localização dos produtos", "Rastrear animais selvagens", "Registrar dados climáticos"],
        correctAnswer: 0
    },
    {
        question: "O que é o lead time na logística?",
        choices: ["O tempo entre o pedido e a entrega", "O tempo que um carro leva para acelerar", "O tempo que uma pessoa leva para responder a um e-mail"],
        correctAnswer: 0
    },
    {
        question: "O que é um incoterms na logística?",
        choices: ["Termos de Comércio Internacional", "Termos de Contrato Incorretos", "Termos de Incêndio e Emergência"],
        correctAnswer: 0
    },
    {
        question: "O que é um contêiner ISO na logística?",
        choices: ["Padrão de contêiner intermodal", "Uma organização internacional", "Um formato de arquivo de imagem"],
        correctAnswer: 0
    },
    {
        question: "O que é um caminhão cegonha na logística?",
        choices: ["Um veículo para transportar carros", "Um caminhão de sorvetes", "Um tipo de avião militar"],
        correctAnswer: 0
    },
    {
        question: "O que é a embalagem primária na logística?",
        choices: ["A embalagem do produto em si", "Uma embalagem secundária", "A embalagem do presente de aniversário"],
        correctAnswer: 0
    },
    {
        question: "O que é um TMS na logística?",
        choices: ["Transportation Management System", "Time Management Strategy", "Trade Marketing Service"],
        correctAnswer: 0
    },
    {
        question: "O que é um RFID na logística?",
        choices: ["Identificação por Radiofrequência", "Rápido e Fácil de Usar", "Registro de Função de Instrução Direta"],
        correctAnswer: 0
    },
    {
        question: "O que é um SLA na logística?",
        choices: ["Acordo de Nível de Serviço", "Sala de Arte", "Símbolo de Linguagem Alternativa"],
        correctAnswer: 0
    },
    {
        question: "O que é um CRM na logística?",
        choices: ["Gestão de Relacionamento com o Cliente", "Clube de Rock Moderno", "Controle de Reservas de Mesa"],
        correctAnswer: 0
    },
    {
        question: "O que é a intermodalidade na logística?",
        choices: ["Uso de diferentes modos de transporte", "Interação social", "Uso de um único modo de transporte"],
        correctAnswer: 0
    },
    // Perguntas adicionais sobre transporte, armazenamento, placas de risco e termos técnicos
    {
        question: "O que é um contentor intermodal?",
        choices: ["Um recipiente de transporte de carga", "Uma estação de rádio", "Um instrumento musical"],
        correctAnswer: 0
    },
    {
        question: "O que significa a sigla OEA no contexto da logística?",
        choices: ["Operador Econômico Autorizado", "Ordem de Entrega Atrasada", "Organização de Empreendedores Aventureiros"],
        correctAnswer: 0
    },
    {
        question: "O que são placas de risco na logística?",
        choices: ["Símbolos que indicam perigos de substâncias", "Sinais de trânsito", "Tabelas de classificação de alimentos"],
        correctAnswer: 0
    },
    {
        question: "O que é um WMS na logística?",
        choices: ["Warehouse Management System", "Web Marketing Strategy", "Wireless Mobile Service"],
        correctAnswer: 0
    },
    {
        question: "O que significa o termo 'cross-docking'?",
        choices: ["Processo de transferência rápida de mercadorias", "Prática de cruzar estradas", "Esporte radical"],
        correctAnswer: 0
    },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = `Pergunta ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    
    const choicesList = document.getElementById("choices");
    choicesList.innerHTML = "";

    currentQuestion.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.onclick = () => checkAnswer(index);
        choicesList.appendChild(document.createElement("li").appendChild(choiceButton));
    });

    document.getElementById("result").textContent = "";
    document.getElementById("score").textContent = `Pontuação: ${score}`;
    document.getElementById("prev-button").disabled = currentQuestionIndex === 0;
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        document.getElementById("result").textContent = "Correto!";
    } else {
        document.getElementById("result").textContent = "Incorreto. A resposta correta é: " + currentQuestion.choices[currentQuestion.correctAnswer];
    }

    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById("next-button").disabled = true;
    } else {
        document.getElementById("question").textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
        document.getElementById("choices").innerHTML = "";
        document.getElementById("result").textContent = "";
        document.getElementById("next-button").disabled = true;
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

displayQuestion();
