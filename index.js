var firstH1 = document.getElementById("first-h1");
var firstButton = document.getElementById("start-btn");
var variant1 = document.getElementById("abcButton-1");
var variant2 = document.getElementById("abcButton-2");
var variant3 = document.getElementById("abcButton-3");
var againButton = document.getElementById("abcButton-4"); 
var overal = 0;

var questions = [
    {
        question: "1. From which direction does the sun rise?", 
        options: ["A: West", "B: East", "C: South"], 
        correctAnswer: "B: East"
    },
    {
        question: "2. What is 2 + 2 equal to?", 
        options: ["A: 3", "B: 4", "C: 5"], 
        correctAnswer: "B: 4"
    },
    {
        question: "3. Which is the largest ocean in the world?", 
        options: ["A: Pacific Ocean", "B: Indian Ocean", "C: Atlantic Ocean"], 
        correctAnswer: "A: Pacific Ocean"
    },
    {
        question: "4. What is the capital of Uzbekistan?", 
        options: ["A: Samarkand", "B: Bukhara", "C: Tashkent"], 
        correctAnswer: "C: Tashkent"
    },
    {
        question: "5. What type of fruit is an apple?", 
        options: ["A: Vegetable", "B: Fruit", "C: Leaf"], 
        correctAnswer: "B: Fruit"
    },
    {
        question: "6. How many months are there in a year?", 
        options: ["A: 10", "B: 11", "C: 12"], 
        correctAnswer: "C: 12"
    },
    {
        question: "7. What do sheep eat?", 
        options: ["A: Meat", "B: Grass", "C: Fish"], 
        correctAnswer: "B: Grass"
    },
    {
        question: "8. Where is the Statue of Liberty located?", 
        options: ["A: England", "B: USA", "C: Russia"], 
        correctAnswer: "B: USA"
    },
    {
        question: "9. How many planets are there in the solar system?", 
        options: ["A: 8", "B: 9", "C: 7"], 
        correctAnswer: "A: 8"
    },
    {
        question: "10. In which season do trees shed their leaves?", 
        options: ["A: Spring", "B: Autumn", "C: Winter"], 
        correctAnswer: "B: Autumn"
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
        firstH1.textContent = `You scored: ${overal} out of 10`; 
        variant1.style.display = 'none';
        variant2.style.display = 'none';
        variant3.style.display = 'none';
        againButton.style.display = 'block';
        againButton.addEventListener('click', function() {
            location.reload(); 
        });
    }
}

