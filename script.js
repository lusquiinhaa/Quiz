// Função para embaralhar as opções de resposta
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const questions = [
    {
        question: "Qual é a principal função da logística?",
        choices: shuffleArray(["Gerenciar estoques", "Cozinhar comida", "Long Travel Line"]),
        correctAnswer: "Gerenciar estoques"
    },
    {
        question: "O que é um KPI de logística?",
        choices: shuffleArray(["Key Performance Indicator", "Keep People Informed", "Kilograms per Item"]),
        correctAnswer: "Key Performance Indicator"
    },
    {
        question: "O que é o JIT (Just in Time) na logística?",
        choices: shuffleArray(["Entregar produtos na hora certa", "Agendar reuniões", "Preparar comida no momento"]),
        correctAnswer: "Entregar produtos na hora certa"
    },
    {
        question: "O que significa LTL na logística?",
        choices: shuffleArray(["Less Than Truckload", "Large Transportation Load", "Long Travel Line"]),
        correctAnswer: "Less Than Truckload"
    },
    {
        question: "O que é um armazém de cross-docking?",
        choices: shuffleArray(["Um local de transferência rápida de produtos", "Um museu de arte contemporânea", "Uma escola de mergulho"]),
        correctAnswer: "Um local de transferência rápida de produtos"
    },
    {
        question: "Qual é o objetivo do roteiramento na logística?",
        choices: shuffleArray(["Encontrar a melhor rota para entrega", "Aprender a tocar guitarra", "Fazer esculturas de areia na praia"]),
        correctAnswer: "Encontrar a melhor rota para entrega"
    },
    {
        question: "O que é a última milha na logística?",
        choices: shuffleArray(["A entrega final ao cliente", "A última página de um livro", "A última aula de uma palestra"]),
        correctAnswer: "A entrega final ao cliente"
    },
    {
        question: "O que é um pallet na logística?",
        choices: shuffleArray(["Uma plataforma de carga", "Um animal exótico", "Um tipo de sobremesa"]),
        correctAnswer: "Uma plataforma de carga"
    },
    {
        question: "O que é um WMS na logística?",
        choices: shuffleArray(["Warehouse Management System", "Web Marketing Strategy", "Wireless Mobile Service"]),
        correctAnswer: "Warehouse Management System"
    },
    {
        question: "Qual é o objetivo do rastreamento de carga na logística?",
        choices: shuffleArray(["Monitorar a localização dos produtos", "Rastrear animais selvagens", "Registrar dados climáticos"]),
        correctAnswer: "Monitorar a localização dos produtos"
    },
    {
        question: "O que é o lead time na logística?",
        choices: shuffleArray(["O tempo entre o pedido e a entrega", "O tempo que um carro leva para acelerar", "O tempo que uma pessoa leva para responder a um e-mail"]),
        correctAnswer: "O tempo entre o pedido e a entrega"
    },
    {
        question: "O que é um incoterms na logística?",
        choices: shuffleArray(["Termos de Comércio Internacional", "Termos de Contrato Incorretos", "Termos de Incêndio e Emergência"]),
        correctAnswer: "Termos de Comércio Internacional"
    },
    {
        question: "O que é um contêiner ISO na logística?",
        choices: shuffleArray(["Padrão de contêiner intermodal", "Uma organização internacional", "Um formato de arquivo de imagem"]),
        correctAnswer: "Padrão de contêiner intermodal"
    },
    {
        question: "O que é um caminhão cegonha na logística?",
        choices: shuffleArray(["Um veículo para transportar carros", "Um caminhão de sorvetes", "Um tipo de avião militar"]),
        correctAnswer: "Um veículo para transportar carros"
    },
    {
        question: "O que é a embalagem primária na logística?",
        choices: shuffleArray(["A embalagem do produto em si", "Uma embalagem secundária", "A embalagem do presente de aniversário"]),
        correctAnswer: "A embalagem do produto em si"
    },
    {
        question: "O que é um TMS na logística?",
        choices: shuffleArray(["Transportation Management System", "Time Management Strategy", "Trade Marketing Service"]),
        correctAnswer: "Transportation Management System"
    },
    {
        question: "O que é um RFID na logística?",
        choices: shuffleArray(["Identificação por Radiofrequência", "Rápido e Fácil de Usar", "Registro de Função de Instrução Direta"]),
        correctAnswer: "Identificação por Radiofrequência"
    },
    {
        question: "O que é um SLA na logística?",
        choices: shuffleArray(["Acordo de Nível de Serviço", "Sala de Arte", "Símbolo de Linguagem Alternativa"]),
        correctAnswer: "Acordo de Nível de Serviço"
    },
    {
        question: "O que é um CRM na logística?",
        choices: shuffleArray(["Gestão de Relacionamento com o Cliente", "Clube de Rock Moderno", "Controle de Reservas de Mesa"]),
        correctAnswer: "Gestão de Relacionamento com o Cliente"
    },
    {
        question: "O que é a intermodalidade na logística?",
        choices: shuffleArray(["Uso de diferentes modos de transporte", "Interação social", "Uso de um único modo de transporte"]),
        correctAnswer: "Uso de diferentes modos de transporte"
    },
    // Perguntas adicionais sobre transporte, armazenamento, placas de risco e termos técnicos
    {
        question: "O que é um contentor intermodal?",
        choices: shuffleArray(["Um recipiente de transporte de carga", "Uma estação de rádio", "Um instrumento musical"]),
        correctAnswer: "Um recipiente de transporte de carga"
    },
    {
        question: "O que significa a sigla OEA no contexto da logística?",
        choices: shuffleArray(["Operador Econômico Autorizado", "Ordem de Entrega Atrasada", "Organização de Empreendedores Aventureiros"]),
        correctAnswer: "Operador Econômico Autorizado"
    },
    {
        question: "O que são placas de risco na logística?",
        choices: shuffleArray(["Símbolos que indicam perigos de substâncias", "Sinais de trânsito", "Tabelas de classificação de alimentos"]),
        correctAnswer: "Símbolos que indicam perigos de substâncias"
    },
    {
        question: "O que é um WMS na logística?",
        choices: shuffleArray(["Warehouse Management System", "Web Marketing Strategy", "Wireless Mobile Service"]),
        correctAnswer: "Warehouse Management System"
    },
    {
        question: "O que significa o termo 'cross-docking'?",
        choices: shuffleArray(["Processo de transferência rápida de mercadorias", "Prática de cruzar estradas", "Esporte radical"]),
        correctAnswer: "Processo de transferência rápida de mercadorias"
    },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = `Pergunta ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    
    const choicesList = document.getElementById("choices");
    choicesList.innerHTML = "";

    const shuffledChoices = currentQuestion.choices;

    shuffledChoices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.onclick = () => checkAnswer(choice);
        choicesList.appendChild(document.createElement("li").appendChild(choiceButton));
    });

    document.getElementById("result").textContent = "";
    document.getElementById("score").textContent = `Pontuação: ${score}`;
    document.getElementById("prev-button").disabled = currentQuestionIndex === 0;
}

function checkAnswer(selectedChoice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.correctAnswer) {
        score++;
        document.getElementById("result").textContent = "Correto!";
    } else {
        document.getElementById("result").textContent = "Incorreto. A resposta correta é: " + currentQuestion.correctAnswer;
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

