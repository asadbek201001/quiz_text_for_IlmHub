
var firstH1 = document.getElementById("first-h1");
var firstButton = document.getElementById("start-btn");
var variant1 = document.getElementById("abcButton-1");
var variant2 = document.getElementById("abcButton-2");
var variant3 = document.getElementById("abcButton-3");
var againButton = document.getElementById("abcButton-4"); 
var overal = 0;


var questions = [
    {
        question: "1. Which color is bright?",
        options: ["A: black", "B: yellow", "C: pink"],
        correctAnswer: "B: yellow"
    },
    {
        question: "2. Which course is best?",
        options: ["A: IlmHub", "B: MohirDev", "C: Algoritm"],
        correctAnswer: "A: IlmHub"
    },
    {
        question: "3. Which site is the best?",
        options: ["A: Google", "B: Safari", "C: Chrome"],
        correctAnswer: "A: Google"
    }
];

var currentQuestionIndex = 0;

firstButton.addEventListener('click', function() {
    showQuestion();  
    firstButton.style.display = 'none'; 
});

function showQuestion() {
    var question = questions[currentQuestionIndex];
    firstH1.textContent = question.question; 

    variant1.textContent = question.options[0]; 
    variant2.textContent = question.options[1];
    variant3.textContent = question.options[2];

    variant1.style.display = 'block';  
    variant2.style.display = 'block'; 
    variant3.style.display = 'block';  


    variant1.onclick = function() { checkAnswer(question.options[0]); };
    variant2.onclick = function() { checkAnswer(question.options[1]); };
    variant3.onclick = function() { checkAnswer(question.options[2]); };
}


function checkAnswer(selectedAnswer) {
    var question = questions[currentQuestionIndex];


    if (selectedAnswer === question.correctAnswer) {
        overal++;
    }


    currentQuestionIndex++; 


    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {

        firstH1.textContent = `You scored: ${overal} out of 3`; 
        variant1.style.display = 'none';
        variant2.style.display = 'none';
        variant3.style.display = 'none';
        againButton.style.display = 'block';
        againButton.addEventListener('click', function() {
            location.reload(); 
        });
    }
}
