const quizData = [{
    question: 'What is the most famous number in Basketball?',
    a: '10',
    b: '20',
    c: '23',
    d: '15',
    correct: 'c'
}, {
    question: 'What was the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Pyton',
    d: 'JavaScript',
    correct: 'd'
}, {
    question: 'Who is the President of the South Africa?',
    a: 'Black Coffe',
    b: 'Donald Trump',
    c: 'Cyril Ramaphosa',
    d: 'Jacob Zuma',
    correct: 'c'
}, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Json Object Notation',
    d: 'Helicopters Time Motorboats Laverge',
    correct: 'a'
}, {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '2000',
    c: '1994',
    d: 'none of the above',
    correct: 'd'
}];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {

        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {

    //check to see answer   
    const answer = getSelected();

    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});