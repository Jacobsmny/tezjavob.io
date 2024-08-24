const allQuestions = [
    { question: "Kvadratning diagonali bo'lsa, perimetrini toping.", answers: ["2a√2", "4a", "a√2"], correct: 1 },
    { question: "Atom yadrosidagi protonlar va neytronlar sonining yig'indisi nima deb ataladi?", answers: ["Atom massasi", "Atom raqami", "Izotop raqami"], correct: 0 },
    { question: "Fibonacci sonlar qatori qaysi qoida bo'yicha tuziladi?", answers: ["Har bir son oldingi ikkita sonning yig'indisi", "Har bir son oldingi sonning kvadrati", "Har bir son doim 1 ga ko'paytiriladi"], correct: 0 },
    { question: "Dunyo okeanining eng chuqur nuqtasi qaysi?", answers: ["Mariana trubasi", "Filippin trubasi", "Kuril-Kamchatka trubasi"], correct: 0 },
    { question: "Entropiya qaysi fizikaviy o'zgarishning o'lchovi hisoblanadi?", answers: ["Sistemadagi betartiblik", "Energiya", "Tezlik"], correct: 0 },
    { question: "Suvning pH darajasi qancha?", answers: ["7", "6", "8"], correct: 0 },
    { question: "Albert Eynshteynning maxsus nisbiylik nazariyasi qaysi yilda nashr etilgan?", answers: ["1905", "1915", "1925"], correct: 0 },
    { question: "Qaysi davlatda dunyodagi eng uzun daryo – Nil joylashgan?", answers: ["Misr", "Xitoy", "Braziliya"], correct: 0 },
    { question: "Yadro fizikasida 'fission' nimani anglatadi?", answers: ["Yadroning parchalanishi", "Yadroning birlashishi", "Yadroning qisman parchalanishi"], correct: 0 },
    { question: "Planck doimiysi qanday fizikaviy kattalikni ifodalaydi?", answers: ["Kvanta energiyasi va chastota orasidagi bog'lanish", "Tezlik va vaqt bog'lanishi", "Massaning tezlik bilan o'zgarishi"], correct: 0 },
    { question: "Newtonning uchinchi qonuni nima haqida?", answers: ["Harakat va teskari ta'sir", "Tenglama va kuch", "Inertsiya qonuni"], correct: 0 },
    { question: "Dunyoning eng yirik iqlim zona qaysi?", answers: ["Subtropik", "Tropik", "Mo''tadil"], correct: 1 },
    { question: "Kvarklar qanday zarrachalar toifasiga kiradi?", answers: ["Elementar zarrachalar", "Atom yadrosi", "Molekulyar zarrachalar"], correct: 0 },
    { question: "O'zbek adabiyotining birinchi yozma namunasi qaysi davrga tegishli?", answers: ["O'rta asrlar", "Temuriylar davri", "Qadimgi Turk davri"], correct: 2 },
    { question: "E=mc² formulasida 'c' nimani anglatadi?", answers: ["Yorug'lik tezligi", "Tezlanish", "Elektr zaryadi"], correct: 0 },
    { question: "Suvdagi molekulalar qanday bog'lar orqali bog'lanadi?", answers: ["Vodorod bog'lari", "Ion bog'lari", "Kovalent bog'lar"], correct: 0 },
    { question: "Dunyo tarixidagi eng katta imperiya qaysi edi?", answers: ["Britaniya Imperiyasi", "Mongol Imperiyasi", "Rim Imperiyasi"], correct: 0 },
    { question: "Dunyoning eng baland binosi qaysi davlatda joylashgan?", answers: ["Birlashgan Arab Amirliklari", "AQSH", "Xitoy"], correct: 0 },
    { question: "Sonning logaritmasi qanday aniqlanadi?", answers: ["Natural logaritmga asoslangan", "Butun sonlar yig'indisiga asoslangan", "Ixtiyoriy asosga asoslangan"], correct: 2 },
    { question: "Karbon 14 radioaktiv izotopi qanday maqsadda ishlatiladi?", answers: ["Yoshi aniqlashda", "Oqsillarni sintez qilishda", "Atom zaryadini o'lchashda"], correct: 0 },
    { question: "Kvadrat tenglamaning diskriminanti noldan kichik bo'lsa, u qanday ildizlarga ega?", answers: ["Kompleks ildizlar", "Real ildizlar", "Ildizlarga ega emas"], correct: 0 },
    { question: "Termodinamikaning ikkinchi qonuni nima haqida?", answers: ["Issiqlik energiyasi o'z-o'zidan faqat issiqdan sovuqqa o'tadi", "Energiya saqlanadi", "Molekulalar chaqqonligi ortadi"], correct: 0 },
    { question: "Zamonaviy kvant mexanikasining asoschisi kim?", answers: ["Nils Bor", "Albert Eynshteyn", "Isaac Newton"], correct: 0 },
    { question: "Dunyo yadroviy energiyasi ishlab chiqaruvchi eng katta davlat qaysi?", answers: ["AQSH", "Frantsiya", "Xitoy"], correct: 1 },
    { question: "Xromosomalar nima qiladi?", answers: ["Genetik ma'lumotni saqlaydi", "Energiya ishlab chiqaradi", "Hujayra bo'linishini nazorat qiladi"], correct: 0 },
    { question: "Inertsiya nima?", answers: ["Jismning harakatni davom ettirishga moyilligi", "Kuchlar o'rtasidagi ta'sir", "Zarrachalar harakatlanish tezligi"], correct: 0 },
    { question: "Ozon qatlamining asosiy vazifasi nima?", answers: ["Yerga kelayotgan ultrabinafsha nurlarini filtrlash", "Haroratni nazorat qilish", "Uglerodni filtr qilish"], correct: 0 },
    { question: "Oynaning sinish ko'rsatkichi qancha?", answers: ["1.5", "2", "1.33"], correct: 0 },
    { question: "Dunyo iqlim o'zgarishining asosiy sababi nima?", answers: ["Karbonat angidrid chiqarilishi", "Ozon qatlamining buzilishi", "Tabiiy iqlim jarayonlari"], correct: 0 },
    { question: "Qaysi yilda kompyuterning birinchi prototipi yaratildi?", answers: ["1943", "1960", "1975"], correct: 0 }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalQuestions = 50;
let timeLeft = 6; 
let lives = 3;
let timerInterval;
let bonusQuestionInterval;
let userID = null;
let shuffledAnswers = [];
let answeredQuestions = [];

const maxDollars = 20; 
let currentDollars = 0;

function startGame() {
    document.querySelector(".main-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    currentQuestionIndex = 0;
    correctAnswers = 0;
    lives = 3;
    document.getElementById("lives").textContent = "Hayotlar: " + lives;
    playMusic();
    answeredQuestions = []; 
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

setInterval(createFallingDollars, 300);
