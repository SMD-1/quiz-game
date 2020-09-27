const quizData = [
    {
        question: 'what is cube of 7?',
        a: '343',
        b: '345',
        c: '350',
        d: '349',
        correct: 'a'
    }, {
        question: 'who is the president of india?',
        a: 'Manmohan SIngh',
        b: 'narendra modi',
        c: 'Ram nath govind',
        d: 'None of the Above',
        correct: 'c'
    }, {
        question: 'The 7th Element in the periodic table is?',
        a: 'Carbon',
        b: 'Boron',
        c: 'Oxygen',
        d: 'Nitrogen',
        correct: 'd'
    }, {
        question: 'anynumber raised to the power of zero is?',
        a: '1',
        b: 'infinity',
        c: '0',
        d: 'Not define',
        correct: 'a'
    }, {
        question: '2 + 9 * 3 = ? ',
        a: '33',
        b: '21',
        c: '44',
        d: '29',
        correct: 'd'
    }, {
        question: 'champion of ICC world cup 2019?',
        a: 'INDIA',
        b: 'ENGLAND',
        c: 'AUSTRALIA',
        d: 'NEW ZEALAND',
        correct: 'b'
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const restartBtn = document.getElementById('restart');


let currentQuiz = 0;
let userOptions = []
let userScore = 0


loadQuiz();
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
    if (document.getElementById('a').checked)
        userOptions.push('a')
    else if (document.getElementById('b').checked)
        userOptions.push('b')
    else if (document.getElementById('c').checked)
        userOptions.push('c')
    else if (document.getElementById('d').checked)
        userOptions.push('d')
    if (currentQuiz < quizData.length) {
        loadQuiz();
        currentQuiz++;
    }
    else{
        // alert('all finished')
        for(var i =0;i<quizData.length;i++) {
            if(userOptions[i] == quizData[i].correct){
                userScore++

            }
        }
        console.log('score is ' + userScore)
        document.getElementById('score-text').innerText = userScore
        document.getElementById('quiz').style.display = 'none'
        document.getElementById('result').style.display = 'block'

    }
});
restartBtn.addEventListener("click", () => {

    window.location.reload()
})

