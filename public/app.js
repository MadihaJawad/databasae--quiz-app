// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase,ref,onChildAdded } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb4dny7Wtq1QhylGwQG4n-2bzsMFp06Co",
  authDomain: "quizappdatabase-7577a.firebaseapp.com",
  databaseURL: "https://quizappdatabase-7577a-default-rtdb.firebaseio.com",
  projectId: "quizappdatabase-7577a",
  storageBucket: "quizappdatabase-7577a.appspot.com",
  messagingSenderId: "153904707908",
  appId: "1:153904707908:web:0aa3f4639d431f44f07f11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()



var loader = document.getElementById('loader')
var showQuestion = document.getElementById('showQuestion')




function getDataFromDatabase(){
 loader.style.display ='block'
 showQuestion .style.display ='none'




  const refrence = ref(db,'questions/')
  onChildAdded(refrence,function(data){
    console.log(data.val())
    questions.push(data.val())
   
    loader.style.display ='none'
 showQuestion .style.display ='block'
 renderQuestion()
  })
}


getDataFromDatabase()



var questions = [
    {
        question: 'Which type of JavaScript language is ___',
        options: ['Object-Oriented', 'Object-Based', 'Assembly-language', 'High-level'],
        correctAns: 'Object-Oriented'
    },
    {
        question: ' Which one of the following also known as Conditional Expression:',
        options: ['Alternative to if-else', 'Switch statement', 'If-then-else statement', 'immediate if'],
        correctAns: 'immediate if'
    },
    {
        question: ' When interpreter encounters an empty statements, what it will do:',
        options: ['Shows a warning', 'Prompts to complete the statement', 'Throws an error', 'Ignores the statement'],
        correctAns: 'Ignores the statement'
    },
    {
        question: ' When interpreter encounters an empty statements, what it will do:',
        options: ['Shows a warning', 'Prompts to complete the statement', 'Throws an error', 'Ignores the statement'],
        correctAns: 'Ignores the statement'
    },
    {
        question: ' The "function" and " var" are known as',
        options: ['Keywords', 'Data types', 'Declaration statements', 'Prototypes'],
        correctAns: 'Declaration statements'
    },
    {
        question: 'Which of the following option is used as hexadecimal literal beginning?',
        options: ['00', '0x', '0X', 'both 0x and 0X'],
        correctAns: 'both 0x and 0X'
    },
    {
        question: 'In the JavaScript, which one of the following is not considered as an error',
        options: ['Division by zero', 'Missing of Bracket', 'Missing of semicolons', 'Syntax error'],
        correctAns: 'Division by zero'
    },
    {
        question: 'In the JavaScript, which one of the following is not considered as an error',
        options: ['Division by zero', 'Missing of Bracket', 'Missing of semicolons', 'Syntax error'],
        correctAns: 'Division by zero'
    },
    {
        question: 'Which of the following number object function returns the value of the number?',
        options: ['toString()', 'valueOf()', 'toLocaleString()', 'toPrecision()'],
        correctAns: 'valueOf()'
    },
]







var currentQuestion = document.getElementById('currentQuestion');
var totalQuestion = document.getElementById('totalQuestion');
var question = document.getElementById('question');
var answerParent = document.getElementById('answerParent');

var indexNum = 0;
var score = 0;



window.checkQuestion = function(a, b){
  if (a == b){
      score++
      console.log(score)
  }


  nextQuestion()
}
window.nextQuestion = function() {
  indexNum++;
  renderQuestion();
}


 













function renderQuestion() {
  currentQuestion.innerHTML = indexNum + 1;
  totalQuestion.innerHTML = questions.length;

  if (indexNum >= 0 && indexNum < questions.length) {
    var obj = questions[indexNum];
    question.innerHTML = obj.question;

    answerParent.innerHTML = '';

    for (var i = 0; i < obj.options.length; i++) {
      answerParent.innerHTML += `
        <div class="col-md-4">
          <div class="py-2">
            <button onclick="checkQuestion('${obj.options[i]}','${obj.correctAns}')" class="btn btn-dark fs-4 rounded-pill w-100">
              ${obj.options[i]}
            </button>
          </div>
        </div>
      `;
    }
  } else {
    alert("No more questions!");
  }
}









