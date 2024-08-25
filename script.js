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
    { question: "Qaysi yilda kompyuterning birinchi prototipi yaratildi?", answers: ["1943", "1960", "1975"], correct: 0 },
    { question: "Kim birinchi marta Oyga qadam qo'ydi?", answers: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin"], correct: 0 },
    { question: "Dunyoning eng uzun daryosi qaysi?", answers: ["Nil", "Amazonka", "Yanszi"], correct: 1 },
    { question: "Tesla kompaniyasini kim asos solgan?", answers: ["Elon Musk", "Nikola Tesla", "Steve Jobs"], correct: 0 },
    { question: "Apple kompaniyasining birinchi mahsuloti qanday nomlangan?", answers: ["iPhone", "Macintosh", "Apple I"], correct: 2 },
    { question: "O'zbekistondagi eng katta shahar qaysi?", answers: ["Toshkent", "Samarqand", "Buxoro"], correct: 0 },
    { question: "Insonning eng katta ichki organi qaysi?", answers: ["Jigar", "Yurak", "Buyraklar"], correct: 0 },
    { question: "Dunyoning eng katta cho'li qaysi?", answers: ["Sahara", "Kalahari", "Gobi"], correct: 0 },
    { question: "O'simliklarning o'sishi uchun qanday gaz kerak?", answers: ["Karbonat angidrid", "Azot", "Vodorod"], correct: 0 },
    { question: "Eng baland tog' tizmasi qaysi?", answers: ["Himoloy", "Andes", "Alplar"], correct: 0 },
    { question: "Kompyuterda ishlatiladigan asosiy kodlash tizimi qaysi?", answers: ["ASCII", "Unicode", "Binary"], correct: 2 },
    { question: "Google qanday yilda tashkil etilgan?", answers: ["1998", "2000", "1995"], correct: 0 },
    { question: "Eng katta ichki dengiz qaysi?", answers: ["Kaspiy dengizi", "O'rta Yer dengizi", "Qizil dengiz"], correct: 0 },
    { question: "Yer qa'ridagi eng katta qatlam nima?", answers: ["Mantiya", "Yadro", "Yer po'stlog'i"], correct: 0 },
    { question: "Dunyoning eng tez yuguradigan hayvoni qaysi?", answers: ["Gepard", "Arslon", "Tulpor"], correct: 0 },
    { question: "Fotosintez jarayonida qaysi rang spektri eng ko'p so'riladi?", answers: ["Qizil", "Ko'k", "Yashil"], correct: 0 },
    { question: "Ayol olimlardan biri kim?", answers: ["Marie Curie", "Isaac Newton", "Albert Einstein"], correct: 0 },
    { question: "Insonga zarur bo'lgan asosiy elementlardan biri qaysi?", answers: ["Uglerod", "Natriy", "Kaltsiy"], correct: 0 },
    { question: "Dunyo iqtisodiyotining asosiy ko'rsatkichi qaysi?", answers: ["YAIM", "Inflyatsiya", "Budjet kamomadi"], correct: 0 },
    { question: "Internetdagi asosiy protokol qanday ataladi?", answers: ["HTTP", "TCP/IP", "FTP"], correct: 1 },
    { question: "Dunyoda qancha okean bor?", answers: ["To'rt", "Besh", "Oltita"], correct: 1 },
];

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
