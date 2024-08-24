const allQuestions = [
    { question: "Tog' qaysi geografik obyekt?", answers: ["Geografik obyekt", "Matematik tushuncha", "Kimyoviy element"], correct: 0 },
    { question: "Yer sayyorasining yuzasi qancha foiz suv bilan qoplangan?", answers: ["70%", "50%", "90%"], correct: 0 },
    { question: "O'zbekiston Respublikasi qaysi qit'ada joylashgan?", answers: ["Osiyo", "Yevropa", "Afrika"], correct: 0 },
    { question: "Matematikaning asosiy elementi nima?", answers: ["Sonlar", "Foydalanuvchi interfeysi", "Fizika"], correct: 0 },
    // Добавлены средние вопросы
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalQuestions = allQuestions.length;
let timeLeft = 10; // Увеличен таймер до 10 секунд
let timerInterval;
let shuffledAnswers = [];
let answeredQuestions = [];

const maxDollars = 20; 
let currentDollars = 0;

function startGame() {
    document.querySelector(".main-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    currentQuestionIndex = 0;
    correctAnswers = 0;
    answeredQuestions = [];
    shuffleQuestions();
    loadQuestion();
    startTimer();
    startFallingDollars(); // Запуск анимации падения долларов
}

function shuffleQuestions() {
    allQuestions.sort(() => Math.random() - 0.5);
}

function shuffleAnswers(answers, correctIndex) {
    let answerObjects = answers.map((answer, index) => ({
        answer: answer,
        isCorrect: index === correctIndex
    }));
    return answerObjects.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * allQuestions.length);
    } while (answeredQuestions.includes(randomIndex));
    
    currentQuestionIndex = randomIndex;
    let question = allQuestions[currentQuestionIndex];
    
    shuffledAnswers = shuffleAnswers(question.answers, question.correct);
    
    document.getElementById("question").textContent = question.question;
    let buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach((btn, index) => {
        btn.textContent = shuffledAnswers[index].answer;
        btn.classList.remove("correct", "wrong");
    });

    answeredQuestions.push(randomIndex);
}

function answerQuestion(answerIndex) {
    clearInterval(timerInterval);
    
    let selectedButton = document.querySelectorAll(".answer-btn")[answerIndex];
    
    if (shuffledAnswers[answerIndex].isCorrect) {
        correctAnswers++;
        playCorrectSound();
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("wrong");
        playWrongSound();
        setTimeout(() => gameOver(), 1000); // Игра заканчивается сразу после неправильного ответа
    }

    let buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach((btn, index) => {
        if (shuffledAnswers[index].isCorrect) {
            btn.classList.add("correct");
        }
    });
}

function startTimer() {
    timeLeft = 10; 
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").textContent = "Qolgan vaqt: " + timeLeft + " soniya";
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    clearInterval(timerInterval);
    document.getElementById("game-container").style.display = "none";
    document.getElementById("stats-container").style.display = "block";
    let accuracy = ((correctAnswers / totalQuestions) * 100).toFixed(2);
    document.getElementById("total-questions").textContent = "Jami savollar: " + totalQuestions;
    document.getElementById("correct-answers").textContent = "To'g'ri javoblar: " + correctAnswers;
    document.getElementById("accuracy").textContent = "Aniqlik: " + accuracy + "%";
    stopFallingDollars(); // Остановка падения долларов
}

function restartGame() {
    document.getElementById("stats-container").style.display = "none";
    document.querySelector(".main-screen").style.display = "block";
}

function playCorrectSound() {
    document.getElementById("correct-sound").play();
}

function playWrongSound() {
    document.getElementById("wrong-sound").play();
}

function createFallingDollars() {
    if (currentDollars < maxDollars) {
        const dollar = document.createElement("img");
        dollar.src = "img/pngwing.com.png";
        dollar.classList.add("dollar");
        dollar.style.left = Math.random() * window.innerWidth + "px";
        dollar.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.getElementById("falling-dollars").appendChild(dollar);
        currentDollars++;

        dollar.addEventListener("animationend", () => {
            dollar.remove();
            currentDollars--;
        });
    }
}

function startFallingDollars() {
    setInterval(createFallingDollars, 500);
}

function stopFallingDollars() {
    const dollarElements = document.getElementById("falling-dollars").querySelectorAll(".dollar");
    dollarElements.forEach(dollar => dollar.remove());
}
