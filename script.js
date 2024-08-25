// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfhvUq8JlHM8Jla6dGIDBWiAGCJ1h6Y",
    authDomain: "tezjavob.firebaseapp.com",
    databaseURL: "https://tezjavob-default-rtdb.firebaseio.com",
    projectId: "tezjavob",
    storageBucket: "tezjavob.appspot.com",
    messagingSenderId: "603792095730",
    appId: "1:603792095730:web:43888fc4675917f45de536b",
    measurementId: "G-7LBZB5GSRV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalQuestions = 5500;
let timeLeft = 6; 
let lives = 1;
let timerInterval;
let bonusQuestionInterval;
let userID = null;
let shuffledAnswers = [];
let answeredQuestions = [];
const maxObjects = 20;
let currentObjects = 0;

function startGame() {
    document.querySelector(".main-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    currentQuestionIndex = 0;
    correctAnswers = 0;
    lives = 1;
    document.getElementById("lives").textContent = "Hayotlar: " + lives;
    playMusic();
    answeredQuestions = [];
    loadQuestion();
    startTimer();
    startBonusQuestion();
}

// Load a random question from Firebase
function loadQuestion() {
    db.ref('questions').once('value').then(snapshot => {
        const questions = snapshot.val();
        const keys = Object.keys(questions);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const question = questions[randomKey];

        document.getElementById("question").textContent = question.question;
        const buttons = document.querySelectorAll(".answer-btn");
        buttons.forEach((btn, index) => {
            btn.textContent = question.answers[index];
            btn.onclick = () => answerQuestion(randomKey, index);
        });
    }).catch((error) => {
        console.error('Ошибка получения вопросов:', error);
    });
}

// Check the answer in Firebase
function answerQuestion(questionKey, answerIndex) {
    db.ref(`questions/${questionKey}`).once('value').then(snapshot => {
        const correctAnswer = snapshot.val().correct;
        if (answerIndex === correctAnswer) {
            correctAnswers++;
            playCorrectSound();
            alert('Правильный ответ!');
        } else {
            lives--;
            playWrongSound();
            document.getElementById("lives").textContent = "Hayotlar: " + lives;
            if (lives === 0) {
                gameOver();
            }
        }
    }).catch((error) => {
        console.error('Ошибка проверки ответа:', error);
    });
}

function startTimer() {
    timeLeft = 6;
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

function createFallingObjects() {
    if (currentObjects < maxObjects) {
        const object = document.createElement("img");
        object.src = "img/dollar.png";
        object.classList.add("object");
        object.style.left = Math.random() * window.innerWidth + "px";
        object.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.getElementById("falling-objects").appendChild(object);
        currentObjects++;

        object.addEventListener("animationend", () => {
            object.remove();
            currentObjects--;
        });
    }
}

setInterval(createFallingObjects, 300);
