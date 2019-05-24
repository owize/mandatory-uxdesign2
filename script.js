// Create a request variable and assign a new XMLHttpRequest object to it.
let number = 0;
let startBtn = document.querySelector(".app-container-startbutton");

const NUMBER_OF_QUESTIONS = 5;

startBtn.addEventListener("click", fetchQuestions);


function fetchQuestions() {

startBtn.classList.add ("display-none");



var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', `https://opentdb.com/api.php?amount=${NUMBER_OF_QUESTIONS}&category=15&type=boolean`);


request.onload = function () {

  const questions = document.body.querySelectorAll(".question-container");

  for (let i = 0; i < questions.length; i++) {
    questions[i].remove();
  }
  // Begin accessing JSON data here
var data = JSON.parse(this.responseText).results;
console.log(data);


let count = document.createElement("p");

count.id = "count";
count.textContent = number;
let header = document.createElement("header");
console.log(count.textContent);

document.body.appendChild(header);
header.appendChild(count);



data.forEach(obj => {

  let body = document.body;





  let question = document.createElement("p");
  question.id ="question";

  let category = document.createElement("p");
  category.id ="category";






  let trueButton = document.createElement("button");
  trueButton.id ="true";
  trueButton.textContent = "True";

  let falseButton = document.createElement("button")
  falseButton.id ="false";
  falseButton.textContent = "False";

  trueButton.addEventListener("click", function() {
    if (trueButton.textContent === obj.correct_answer) {

      trueButton.textContent = "Correct!";
      trueButton.classList.add("green");
     falseButton.disabled = true;
     trueButton.disabled = true;
     number++;
     count.textContent = number;


    }else {
      trueButton.textContent = "Wrong!";
      trueButton.classList.add("red");
      falseButton.disabled = true;
      trueButton.disabled = true;

      count.textContent = number;

    }

  })


  falseButton.addEventListener("click", function() {
    if (falseButton.textContent === obj.correct_answer) {
      falseButton.textContent = "Correct!";
      falseButton.classList.add("green");
      falseButton.disabled = true;
      trueButton.disabled = true;
      number++;
      count.textContent = number;


    }else {
      falseButton.textContent = "Wrong!";
      falseButton.classList.add("red");
      falseButton.disabled = true;
      trueButton.disabled = true;



    }

  })





  const questionContainer = document.createElement("div");
  questionContainer.classList.add("question-container");

  questionContainer.appendChild(category);
  questionContainer.appendChild(question);
  questionContainer.appendChild(trueButton);
  questionContainer.appendChild(falseButton);

  body.appendChild(questionContainer);


  question.innerHTML = obj.question;
  category.innerHTML = obj.category;

})
}

request.send();
}



let submitBtn = document.querySelector(".app-container-submitbutton");
let closeBtn = document.querySelector(".close");
let scoreBox = document.querySelector(".score");
let scorenumber = document.querySelector(".scorenumber");
submitBtn.addEventListener("click", () =>{

    scoreBox.classList.remove("display-none");

    scorenumber.textContent = `${number}/${NUMBER_OF_QUESTIONS}`;



});

closeBtn.addEventListener("click", () =>{

    scoreBox.classList.add("display-none");
    startBtn.classList.remove("display-none");



});
