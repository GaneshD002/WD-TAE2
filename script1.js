const  quizDB = [
    {
        question: "Q1: Choose the correct HTML tag for the largest heading.",
        a: "h2",
        b: "h4",
        c: "h6",
        d: "h1",
        ans: "ans4"
    },
    {
        question: "Q2: Choose the correct HTML tag for the small heading.",
        a: "h6",
        b: "h4",
        c: "h2",
        d: "h1",
        ans: "ans1"
    },
    {
        question: "Q3: What is the correct HTML tag for inseting a line break ?",
        a: "Lb",
        b: "Break",
        c: "h3",
        d: "Br",
        ans: "ans4"
    },
    {
        question: "Q4: Web is based on",
        a: "html",
        b: "text",
        c: "information",
        d: "image",
        ans: "ans1"
    },
];

const question = document.querySelector('.question');
const question1 = document.querySelector('#question1');
const question2 = document.querySelector('#question2');
const question3 = document.querySelector('#question3');
const question4 = document.querySelector('#question4');

const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
     
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }

        
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showscore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> play again </button>
        `;

        showscore.classList.remove('scorearea');


    }
});

