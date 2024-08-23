const allQuestions = [
    { question: "Fibonacci sonlar qatori qaysi qoida bo'yicha tuziladi?", answers: ["Har bir son oldingi ikkita sonning yig'indisi", "Har bir son doim 1 ga ko'paytiriladi", "Har bir son oldingi sonning kvadrati"], correct: 0 },
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
    { question: "Qaysi yilda kompyuterning birinchi prototipi yaratildi?", answers: ["1943", "1960", "1975"], correct: 0 },
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

    // Только неправильные ответы будут перемешаны
    answerObjects.forEach((answerObj) => {
        if (!answerObj.isCorrect) {
            // Немного перемешиваем буквы, чтобы они выглядели похоже, но были запутанными
            answerObj.answer = shuffleString(answerObj.answer);
        }
    });

    return answerObjects.sort(() => Math.random() - 0.5);
}

function shuffleString(str) {
    if (str.length <= 3) return str;  // не перемешиваем слишком короткие строки

    let midPart = str.slice(1, -1).split('');  // извлекаем центральную часть строки
    midPart.sort(() => Math.random() - 0.5);   // перемешиваем только центральную часть

    return str[0] + midPart.join('') + str[str.length - 1];  // соединяем обратно с первой и последней буквами
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
