// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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

var question = document.getElementById('question');
var option = document.getElementById('option');
var optionsParent = document.getElementById('optionsParent')
var correctAnswerElem = document.getElementById('correctAnswer');


var options = []
var correctAnswer


function renderOptions() {
  optionsParent.innerHTML = ''

  for (var i = 0; i < options.length; i++) {
    optionsParent.innerHTML += `<li onclick="setCorrectAnswer('${options[i]}')" class='p-2 bg-light fs-5 rounded shadow my-2'>${options[i]}</li>`
  }

}





window.addOption = function () {
  options.push(option.value)
  console.log(options)
  renderOptions()
}
window.setCorrectAnswer = function (a) {
  correctAnswer = a
  correctAnswerElem.innerHTML = correctAnswer

}
window.submitQuestion = function(){
  var obj = {
    question: question.value,
    options:options,
    correctAnswer:correctAnswer
  }

obj.id = push(ref(db,'questions/')).key



  const reference = ref(db,`questions/${obj.id}`)
  set(reference,obj)
  console.log(obj)
}