
const setQuiz = [
    {
        question: "What is the capital of Japan?",
        a: "Beijing",
        b: "Seoul",
        c: "Bangkok",
        d: "Tokyo",
        correct: "d",
    },
    {
        question: "What is the capital of Canada??",
        a: "Toronto",
        b: "Ottawa",
        c: "Vancouver",
        d: "Montreal",
        correct: "b",
    },
    {
        question: "What is the capital of Australia?",
        a: "Canberra",
        b: "Sydney",
        c: "Melbourne",
        d: "Brisbane",
        correct: "a",
    },
    {
        question: "What is the capital of Brazil?",
        a: "Rio de Janeiro",
        b: "Brasília",
        c: "São Paulo",
        d: "Salvador",
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

