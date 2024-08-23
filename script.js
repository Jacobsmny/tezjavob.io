const allQuestions = [
    { question: "Fibonacci sonlar qatori qaysi qoida bo'yicha tuziladi?", answers: ["Har bir son oldingi ikkita sonning yig'indisi", "Har bir son doim 1 ga ko'paytiriladi", "Har bir son oldingi sonning kvadrati"], correct: 0 },
    // Добавьте остальные вопросы
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalQuestions = allQuestions.length;
let timeLeft = 6;
let lives = 3;
let timerInterval;
let shuffledAnswers = [];
let answeredQuestions = [];

function startGame() {
    document.querySelector(".main-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    currentQuestionIndex = 0;
    correctAnswers = 0;
    lives = 3;
    document.getElementById("lives").textContent = "Hayotlar: " + lives;
    loadQuestion();
    startTimer();
}

function shuffleAnswers(answers, correctIndex) {
    let answerObjects = answers.map((answer, index) => ({
        answer: answer,
        isCorrect: index === correctIndex
    }));

    // Перемешиваем только неправильные ответы, чтобы сделать их более запутанными, но не полностью изменёнными
    answerObjects.forEach((answerObj) => {
        if (!answerObj.isCorrect) {
            // Легкое изменение букв, но без хаотичного перемешивания
            answerObj.answer = slightlyAlterAnswer(answerObj.answer);
        }
    });

    return answerObjects.sort(() => Math.random() - 0.5);
}

// Функция для легкого изменения ответа (без сильного перемешивания)
function slightlyAlterAnswer(answer) {
    if (answer.length <= 3) return answer;  // Не изменяем слишком короткие ответы

    let alteredAnswer = answer.split('');
    
    // Меняем местами некоторые буквы для создания небольшого эффекта запутывания
    for (let i = 1; i < alteredAnswer.length - 1; i++) {
        if (Math.random() > 0.5) {
            [alteredAnswer[i], alteredAnswer[i + 1]] = [alteredAnswer[i + 1], alteredAnswer[i]];  // Меняем местами соседние буквы
            i++; // Пропускаем следующую букву после перемещения
        }
    }

    return alteredAnswer.join('');
}

function loadQuestion() {
    let question = allQuestions[currentQuestionIndex];
    shuffledAnswers = shuffleAnswers(question.answers, question.correct);

    document.getElementById("question").textContent = question.question;
    let buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach((btn, index) => {
        btn.textContent = shuffledAnswers[index].answer;
        btn.classList.remove("correct", "wrong");
    });
}

function answerQuestion(answerIndex) {
    clearInterval(timerInterval);

    let selectedButton = document.querySelectorAll(".answer-btn")[answerIndex];
    if (shuffledAnswers[answerIndex].isCorrect) {
        correctAnswers++;
        playCorrectSound();
        selectedButton.classList.add("correct");
    } else {
        lives--;
        selectedButton.classList.add("wrong");
        document.getElementById("lives").textContent = "Hayotlar: " + lives;
        playWrongSound();
    }

    let buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach((btn, index) => {
        if (shuffledAnswers[index].isCorrect) {
            btn.classList.add("correct");
        }
    });

    if (lives === 0) {
        setTimeout(() => gameOver(), 1000);
    } else {
        setTimeout(() => {
            loadNextQuestion();
        }, 1000);
    }
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < allQuestions.length) {
        loadQuestion();
        startTimer();
    } else {
        gameOver();
    }
}

function startTimer() {
    timeLeft = 6;
    timerInterval = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").textContent = "Qolgan vaqt: " + timeLeft + " soniya";
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            answerQuestion(-1); // Завершить вопрос, если время вышло
        }
    }, 1000);
}

function playCorrectSound() {
    document.getElementById("correct-sound").play();
}

function playWrongSound() {
    document.getElementById("wrong-sound").play();
}

function gameOver() {
    clearInterval(timerInterval);
    document.getElementById("game-container").style.display = "none";
    document.getElementById("stats-container").style.display = "block";
    document.getElementById("total-questions").textContent = "Jami savollar: " + totalQuestions;
    document.getElementById("correct-answers").textContent = "To'g'ri javoblar: " + correctAnswers;
    let accuracy = ((correctAnswers / totalQuestions) * 100).toFixed(2);
    document.getElementById("accuracy").textContent = "Aniqlik: " + accuracy + "%";
}

function restartGame() {
    document.getElementById("stats-container").style.display = "none";
    document.querySelector(".main-screen").style.display = "block";
}
