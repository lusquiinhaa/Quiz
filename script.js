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
        choices: shuffleArray(["Gerenciar estoques", "Entregar produtos na hora certa", "Long Travel Line"]),
        correctAnswer: "Gerenciar estoques",
        difficulty: "fácil"
    },
    {
        question: "O que é um KPI de logística?",
        choices: shuffleArray(["Key Performance Indicator", "Keep People Informed", "Kilograms per Item"]),
        correctAnswer: "Key Performance Indicator",
        difficulty: "fácil"
    },
    {
        question: "O que é o JIT (Just in Time) na logística?",
        choices: shuffleArray(["Entregar produtos na hora certa", "Agendar reuniões", "Entrega rapida"]),
        correctAnswer: "Entregar produtos na hora certa",
        difficulty: "fácil"
    },
    {
        question: "O que significa LTL na logística?",
        choices: shuffleArray(["Less Than Truckload", "Large Transportation Load", "Long Travel Line"]),
        correctAnswer: "Less Than Truckload",
        difficulty: "médio"
    },
    {
        question: "O que é um armazém de cross-docking?",
        choices: shuffleArray(["Transferência rápida de produtos", "Transferência instantânea", "Uma escola de mergulho"]),
        correctAnswer: "Um local de transferência rápida de produtos",
        difficulty: "médio"
    },
    {
        question: "Qual é o objetivo do roteiramento na logística?",
        choices: shuffleArray(["Melhor rota para entrega", "Melhorar as rotas", "Rotas alternativas"]),
        correctAnswer: "Melhor rota para entrega",
        difficulty: "fácil"
    },
    {
        question: "O que é a última milha na logística?",
        choices: shuffleArray(["A entrega final ao cliente", "A entrega final da mercadoria", "A última rota de entrega"]),
        correctAnswer: "A entrega final ao cliente",
        difficulty: "médio"
    },
    {
        question: "O que é um pallet na logística?",
        choices: shuffleArray(["Uma plataforma de carga", "Suporte para peso", "Não serve para nada"]),
        correctAnswer: "Uma plataforma de carga",
        difficulty: "fácil"
    },
    {
        question: "O que é um WMS na logística?",
        choices: shuffleArray(["Warehouse Management System", "Web Marketing Strategy", "Wireless Mobile Service"]),
        correctAnswer: "Warehouse Management System",
        difficulty: "difícil"
    },
    {
        question: "Qual é o objetivo do rastreamento de carga na logística?",
        choices: shuffleArray(["Monitorar a localização dos produtos", "Rastrear em tempo real a carga", "Registrar ultima localização"]),
        correctAnswer: "Monitorar a localização dos produtos",
        difficulty: "médio"
    },
    {
        question: "O que é o lead time na logística?",
        choices: shuffleArray(["O tempo entre o pedido e a entrega", "O tempo entre o processamento e a entrega", "O tempo que uma pessoa leva para responder a um e-mail"]),
        correctAnswer: "O tempo entre o pedido e a entrega",
        difficulty: "difícil"
    },
    {
        question: "O que é um incoterms na logística?",
        choices: shuffleArray(["Termos de Comércio Internacional", "Termos de Contrato Incorretos", "Termos de Incêndio e Emergência"]),
        correctAnswer: "Termos de Comércio Internacional",
        difficulty: "médio"
    },
    {
        question: "O que é um contêiner ISO na logística?",
        choices: shuffleArray(["Padrão de contêiner intermodal", "Uma organização internacional", "Um formato de um documento"]),
        correctAnswer: "Padrão de contêiner intermodal",
        difficulty: "médio"
    },
    {
        question: "O que é um caminhão cegonha na logística?",
        choices: shuffleArray(["Um veículo para transportar carros", "Um veículo para transportar mercadorias", "Um veículo para transportar amônia"]),
        correctAnswer: "Um veículo para transportar carros",
        difficulty: "médio"
    },
    {
        question: "O que é a embalagem primária na logística?",
        choices: shuffleArray(["A embalagem do produto em si", "Uma embalagem secundária", "A embalagem do presente de aniversário"]),
        correctAnswer: "A embalagem do produto em si",
        difficulty: "médio"
    },
    {
        question: "O que é um TMS na logística?",
        choices: shuffleArray(["Transportation Management System", "Time Management Strategy", "Trade Marketing Service"]),
        correctAnswer: "Transportation Management System",
        difficulty: "difícil"
    },
    {
        question: "O que é um RFID na logística?",
        choices: shuffleArray(["Identificação por Radiofrequência", "Rápido e Fácil de Usar", "Registro de Função de Instrução Direta"]),
        correctAnswer: "Identificação por Radiofrequência",
        difficulty: "difícil"
    },
    {
        question: "O que é um SLA na logística?",
        choices: shuffleArray(["Acordo de Nível de Serviço", "Sala de Arte", "Símbolo de Linguagem Alternativa"]),
        correctAnswer: "Acordo de Nível de Serviço",
        difficulty: "difícil"
    },
    {
        question: "O que é um CRM na logística?",
        choices: shuffleArray(["Gestão de Relacionamento com o Cliente", "Gestão de Relacionamento com empresa", "Gestão de Relacionamento com o pedido"]),
        correctAnswer: "Gestão de Relacionamento com o Cliente",
        difficulty: "difícil"
    },
    {
        question: "O que é a intermodalidade na logística?",
        choices: shuffleArray(["Uso de diferentes modos de transporte", "Interação social", "Uso de um único modo de transporte"]),
        correctAnswer: "Uso de diferentes modos de transporte",
        difficulty: "difícil"
    },
    {
        question: "O que é um contentor intermodal?",
        choices: shuffleArray(["Um recipiente de transporte de carga", "Um recipiente de transporte de embalagem", "Um recipiente de transporte de produtos quimicos"]),
        correctAnswer: "Um recipiente de transporte de carga",
        difficulty: "difícil"
    },
    {
        question: "O que significa a sigla OEA no contexto da logística?",
        choices: shuffleArray(["Operador Econômico Autorizado", "Ordem de Entrega Atrasada", "Organização de Empreendedores Aventureiros"]),
        correctAnswer: "Operador Econômico Autorizado",
        difficulty: "difícil"
    },
    {
        question: "O que são placas de risco na logística?",
        choices: shuffleArray(["Símbolos que indicam perigos de substâncias", "Sinalização de trânsito", "Tabelas de classificação de perigo"]),
        correctAnswer: "Símbolos que indicam perigos de substâncias",
        difficulty: "difícil"
    },
    {
        question: "O que é um WMS na logística?",
        choices: shuffleArray(["Warehouse Management System", "Web Marketing Strategy", "Wireless Mobile Service"]),
        correctAnswer: "Warehouse Management System",
        difficulty: "difícil"
    },
    {
        question: "O que significa o termo 'cross-docking'?",
        choices: shuffleArray(["Processo de transferência rápida de mercadorias", "Processo de transferência", "Processo de transferência entre cliente e mercadoria"]),
        correctAnswer: "Processo de transferência rápida de mercadorias",
        difficulty: "difícil"
    },
];

let currentQuestionIndex = 0;
let score = 0;
let currentDifficulty = null;
let filteredQuestions = [];

function setDifficulty(difficulty) {
    currentDifficulty = difficulty;
    currentQuestionIndex = 0;
    filteredQuestions = questions.filter(question => question.difficulty === difficulty);
    if (filteredQuestions.length > 0) {
        displayQuestion();
    } else {
        document.getElementById("question").textContent = "Não há perguntas disponíveis para este nível de dificuldade.";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("result").textContent = "";
        document.getElementById("next-button").disabled = true;
    }
}

function displayQuestion() {
    if (currentDifficulty) {
        if (currentQuestionIndex < filteredQuestions.length) {
            const currentQuestion = filteredQuestions[currentQuestionIndex];
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
            document.getElementById("next-button").disabled = true;
        } else {
            document.getElementById("question").textContent = `Você acertou ${score} de ${filteredQuestions.length} perguntas.`;
            document.getElementById("choices").innerHTML = "";
            document.getElementById("result").textContent = "";
            document.getElementById("next-button").disabled = true;
        }
    } else {
        document.getElementById("question").textContent = "Por favor, selecione um nível de dificuldade.";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("result").textContent = "";
        document.getElementById("next-button").disabled = true;
    }
}

function checkAnswer(selectedChoice) {
    const currentQuestion = filteredQuestions[currentQuestionIndex];
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

    if (currentQuestionIndex < filteredQuestions.length) {
        displayQuestion();
    } else {
        document.getElementById("question").textContent = `Você acertou ${score} de ${filteredQuestions.length} perguntas.`;
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
