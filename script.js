const allQuestions = [
    { question: "Everest tog'ining balandligi qancha?", answers: ["8848 metr", "9000 metr", "8000 metr"], correct: 0 },
    { question: "Dunyodagi eng katta cho'l qaysi?", answers: ["Sahroi Kabir", "Antarktida", "Gobi"], correct: 1 },
    { question: "Amazon daryosining uzunligi qancha?", answers: ["6400 km", "7000 km", "6000 km"], correct: 0 },
    { question: "Yerning necha foizi suv bilan qoplangan?", answers: ["71%", "60%", "50%"], correct: 0 },
    { question: "Dunyoning eng katta okeani qaysi?", answers: ["Tinch okeani", "Atlantika okeani", "Hind okeani"], correct: 0 },
    { question: "Yer yuzidagi eng katta cho'l qaysi?", answers: ["Sahroi Kabir", "Antarktida", "Gobi"], correct: 1 },
    { question: "Afrikaning eng baland tog'i qaysi?", answers: ["Kilimanjaro", "Everest", "Elbrus"], correct: 0 },
    { question: "Dunyoning eng uzun daryosi qaysi?", answers: ["Nil", "Amazonka", "Yantszi"], correct: 0 },
    { question: "Eng chuqur ko'l qaysi?", answers: ["Baykal", "Tanganyika", "Kaspiy"], correct: 0 },
    { question: "Osiyo qit'asidagi eng katta davlat qaysi?", answers: ["Rossiya", "Xitoy", "Hindiston"], correct: 0 },
    { question: "Yer yuzidagi eng katta orol qaysi?", answers: ["Grenlandiya", "Avstraliya", "Madagaskar"], correct: 0 },
    { question: "Yaponiya necha ta katta oroldan iborat?", answers: ["4", "5", "6"], correct: 0 },
    { question: "Qaysi davlat poytaxti Berlin?", answers: ["Germaniya", "Frantsiya", "Italiya"], correct: 0 },
    { question: "Eng ko'p ko'li bo'lgan davlat qaysi?", answers: ["Kanada", "Rossiya", "AQSH"], correct: 0 },
    { question: "Suvning kimyoviy formulasi nima?", answers: ["H2O", "CO2", "O2"], correct: 0 },
    // Добавьте еще вопросы, чтобы их стало 50
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalQuestions = 50; // 50 вопросов для игры
let timeLeft = 6; // Дедлайн 6 секунд
let lives = 3;
let timerInterval;
let bonusQuestionInterval;
let userID = null;
let shuffledAnswers = [];
let answeredQuestions = [];

const maxDollars = 20; // Максимальное количество долларов на экране
let currentDollars = 0;

function startGame() {
    document.querySelector(".main-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    currentQuestionIndex = 0;
    correctAnswers = 0;
    lives = 3;
    document.getElementById("lives").textContent = "Hayotlar: " + lives;
    playMusic();
    answeredQuestions = []; // Очищаем массив отвеченных вопросов
    shuffleQuestions();
    loadQuestion();
    startTimer();
    startBonusQuestion();
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
        lives--;
        selectedButton.classList.add("wrong");
        document.getElementById("lives").textContent = "Hayotlar: " + lives;
        playWrongSound();
    }

    // Показ правильного ответа
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

    if (correctAnswers === 7 && !userID) {
        userID = generateUniqueID();
        setTimeout(() => {
            alert("Tabriklaymiz! Siz 7 ta to'g'ri javob berdingiz. Sizning yutug'ingiz 1 mln so'm! Sizning ID: " + userID);
        }, 1000);
    }
}

function loadNextQuestion() {
    if (answeredQuestions.length < allQuestions.length) {
        loadQuestion();
        startTimer();
    } else {
        gameOver();
    }
}

function generateUniqueID() {
    return 'ID-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

function startTimer() {
    timeLeft = 6; // 6 секунд для ответа
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").textContent = "Qolgan vaqt: " + timeLeft + " soniya";
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

function startBonusQuestion() {
    bonusQuestionInterval = setInterval(function() {
        if (Math.random() > 0.7) {
            timeLeft = 10;
            alert("Bonus savol: vaqt 10 soniya!");
        }
    }, 20000); 
}

function gameOver() {
    clearInterval(timerInterval);
    clearInterval(bonusQuestionInterval);
    document.getElementById("game-container").style.display = "none";
    document.getElementById("stats-container").style.display = "block";
    let accuracy = ((correctAnswers / totalQuestions) * 100).toFixed(2);
    document.getElementById("total-questions").textContent = "Jami savollar: " + totalQuestions;
    document.getElementById("correct-answers").textContent = "To'g'ri javoblar: " + correctAnswers;
    document.getElementById("accuracy").textContent = "Aniqlik: " + accuracy + "%";
    stopMusic();
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

function playMusic() {
    document.getElementById("background-music").play();
}

function stopMusic() {
    document.getElementById("background-music").pause();
    document.getElementById("background-music").currentTime = 0;
}

function showPrize() {
    if (userID) {
        alert("Sizning ID: " + userID + ". Ushbu ID bilan 1 mln so'mni yutib olish uchun murojaat qiling!");
    } else {
        alert("Siz hali yutmadiz. 7 ta to'g'ri javob berishingiz kerak.");
    }
}

function showAds() {
    alert("Bu yerdan reklama o'tadi.");
}

// Функция для генерации падающих долларов с ограничением их количества
function createFallingDollars() {
    if (currentDollars < maxDollars) {
        const dollar = document.createElement("img");
        dollar.src = "images/dollar.png"; // Путь к изображению доллара
        dollar.classList.add("dollar");
        dollar.style.left = Math.random() * window.innerWidth + "px";
        dollar.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.getElementById("falling-dollars").appendChild(dollar);
        currentDollars++;

        // Удаляем доллар после завершения анимации
        dollar.addEventListener("animationend", () => {
            dollar.remove();
            currentDollars--;
        });
    }
}

// Постоянная генерация долларов с ограничением
setInterval(createFallingDollars, 300);
