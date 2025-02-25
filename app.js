
const setQuiz = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


const quiz = document.getElementById('quiz');
const answers = document.querySelectorAll('.answer');
const question = document.getElementById('question');
const optionA = document.getElementById('text_a');
const optionB = document.getElementById('text_b');
const optionC = document.getElementById('text_c');
const optionD = document.getElementById('text_d');
const submit = document.getElementById('submit');

let score = 0 ;
let currentQuiz = 0;


function loadQuiz() {
    const currentsetQuiz = setQuiz[currentQuiz];
    question.innerText = currentsetQuiz.question;
    optionA.innerText = currentsetQuiz.a;
    optionB.innerText = currentsetQuiz.b;
    optionC.innerText = currentsetQuiz.c;
    optionD.innerText = currentsetQuiz.d;
    deselectAnswers();
}

function deselectAnswers() {
    answers.forEach(answer => answer.checked = false);
}

function getSelected() {
    let selected;
    answers.forEach(answer => {
        if(answer.checked) {
            selected = answer.id;
        }
    });
    return selected;
}

submit.addEventListener('click', () => {
    const selected = getSelected();
    if(selected) {
        if(selected === setQuiz[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < setQuiz.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${setQuiz.length} questions correctly</h2><button id="submit" onclick="location.reload()">Reload</button>`;
        }
    }
});

loadQuiz();

