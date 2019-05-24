// Create a request variable and assign a new XMLHttpRequest object to it.
let number = 0;
let startBtn = document.querySelector(".app-container-startbutton");

startBtn.addEventListener("click", function() {

startBtn.classList.add ("display-none");

 

var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://opentdb.com/api.php?amount=5&category=15&type=boolean');


request.onload = function () {
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

  let body = document.getElementsByTagName("body")[0];

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





  body.appendChild(category);
  body.appendChild(question);
  body.appendChild(trueButton);
  body.appendChild(falseButton);




  question.innerHTML = obj.question;
  category.innerHTML = obj.category;

})
}

request.send();
});



let submitBtn = document.querySelector(".app-container-submitbutton");
let closeBtn = document.querySelector(".close");
let scoreBox = document.querySelector(".score");
let scorenumber = document.querySelector(".scorenumber");
submitBtn.addEventListener("click", () =>{

    scoreBox.classList.remove("display-none");

    scorenumber.textContent = number + "/5";


});

closeBtn.addEventListener("click", () =>{

    scoreBox.classList.add("display-none");
    startBtn.classList.remove("display-none");



});
