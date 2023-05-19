// // Generate a random math question
// function generateQuestion() {
//     var num1 = Math.floor(Math.random() * 10) + 1;
//     var num2 = Math.floor(Math.random() * 10) + 1;
//     var operator = Math.random() < 0.5 ? '+' : '-';
//     return num1 + ' ' + operator + ' ' + num2;
//   }
//   // Check if the answer is correct
//   function checkAnswer() {
//     var answer = document.getElementById('answer').value;
//     var result = document.getElementById('result');
//     var parts = document.getElementById('question').innerText.split(' ');
//     var num1 = parseInt(parts[0]);
//     var operator = parts[1];
//     var num2 = parseInt(parts[2]);
//     var expectedAnswer = operator === '+' ? num1 + num2 : num1 - num2;
//     if (parseInt(answer) === expectedAnswer) {
//       result.innerText = 'Correct!';
//     } else {
//       result.innerText = 'Incorrect!';
//     }
//     // Generate a new question
//     document.getElementById('question').innerText = generateQuestion();
//     document.getElementById('answer').value = '';
//   }
//   // Initialize the game
//   function initializeGame() {
//     // Generate the first question
//     document.getElementById('question').innerText = generateQuestion();
//     // Add event listener to the submit button
//     document.getElementById('submit').addEventListener('click', checkAnswer);
//   }
//   // Call the initializeGame function when the page has loaded
//   document.addEventListener('DOMContentLoaded', initializeGame);
// ------------------
// const problemElement = document.getElementById('problem');
// let answer;
// generateProblem();
// function generateProblem() {
//   const operand1 = Math.floor(Math.random() * 10) + 1;
//   const operand2 = Math.floor(Math.random() * 10) + 1;
//   answer = operand1 + operand2;
//   problemElement.textContent = `${operand1} + ${operand2} = `;
// }
// const submitBtn = document.getElementById('submitBtn');
// const answerInput = document.getElementById('answerInput');
// const resultElement = document.getElementById('result');
// submitBtn.addEventListener('click', checkAnswer);
// function checkAnswer() {
//   const userAnswer = parseInt(answerInput.value);
//   if (userAnswer === answer) {
//     resultElement.textContent = 'Correct!';
//   } else {
//     resultElement.textContent = 'Incorrect!';
//   }
//   answerInput.value = '';
//   generateProblem();
// }

//---------------

// const problemElement = document.getElementById('problem');
// const answerInput = document.getElementById('answerInput');
// const submitBtn = document.getElementById('submitBtn');
// const resultElement = document.getElementById('result');
// submitBtn.addEventListener('click', checkAnswer);
// generateProblem();
// function generateProblem() {
//   const operand1 = Math.floor(Math.random() * 10) + 1;
//   const operand2 = Math.floor(Math.random() * 10) + 1;
//   const operator = Math.random() < 0.5 ? '+' : '-';
//   let answer;
//   if (operator === '+') {
//     answer = operand1 + operand2;
//   } else {
//     answer = operand1 - operand2;
//   }
//   problemElement.textContent = `${operand1} ${operator} ${operand2} = `;
//   return answer;
// }
// function checkAnswer() {
//   const userAnswer = parseInt(answerInput.value);
//   const correctAnswer = generateProblem();
//   if (userAnswer === correctAnswer) {
//     resultElement.textContent = 'Correct!';
//   } else {
//     resultElement.textContent = 'Incorrect!';
//   }
//   answerInput.value = '';
// }



let firstNumber = parseInt(1000 * Math.random())
  , secondNumber = parseInt(1000 * Math.random())
  , total = firstNumber + secondNumber
  , primary = document.getElementById("primary-number");
primary.innerHTML = `<p>${firstNumber}</p>`;
let secondary = document.getElementById("secondary-number");
secondary.innerHTML = `<p>${secondNumber}</p>`;
let button = document.getElementById("btn");
button.addEventListener("click", function() {
    let e = document.getElementById("guess").value;
    (e = Number(e)) === total ? (alert("Correct Congratulations: 🥳🥳🥳🥳🥳"),
    window.location.reload()) : (alert("Sorry, that’s incorrect: 😞😞😞😞😞 The right answer is---> " + total + "."),
    window.location.reload())
});




