const quizData =[
    {
        question:"Quien es el más guapo?",
        a:"Christian Beltran Bedolla",
        b:"Henry Cavill",
        c:"El tio que la hace de Thor",
        d:"Amlo",

        correct:"a",
    },

    {
        question:"Que lenguaje de programacion es mejor para desarrollo Web?",
        a:"Java",
        b:"javascript",
        c:"C++",
        d:"Python",

        correct:"b",

    },
    {
        question:"Quien es el padre de la patria de México?",
        a:"Miguel Hidalgo",
        b:"Napoleon",
        c:"Alberto cortez",
        d:"Amlo",

        correct:"a",

    },
    {
        question:"Mujer mas hermosa del mundo?",
        a:"Gal gadot",
        b:"Lorena herrera",
        c:"Mi mama",
        d:"Selena gomez",

        correct:"c",

    },




];






const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit');

let currentquiz = 0;
let score =0;



loadQuiz();

function loadQuiz(){
deselectAnswers();

const currentquizData = quizData[currentquiz];
questionEl.innerText = currentquizData.question;
a_text.innerText=currentquizData.a;
b_text.innerText=currentquizData.b;
c_text.innerText=currentquizData.c;
d_text.innerText=currentquizData.d;


}




function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked=false);
}



function getSelecteed(){
    let answer;
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer=answerEl.id;
        }
    })
    return answer;
}




submitBtn.addEventListener('click',() =>{
    const answer = getSelecteed();
    if(answer){
        
        if (answer === quizData[currentquiz].correct){
            score++;
        }
    currentquiz++;
    if(currentquiz<quizData.length)
    {
        loadQuiz();
    }else{
        quiz.innerHTML=`<h2> you answered ${score}/${quizData.length} answers correctly
        
        <button onclick="location.reload()">Reload</button>
        `;
    }

    }
})





