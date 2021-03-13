const numOne = document.querySelector('.num1');
const numTwo = document.querySelector('.num2');
const plus = document.querySelector('.plus');
const task = document.querySelector('.task');
const taskImg = document.querySelector('.task__img');
const inputNumberField = document.querySelector('#input-number');
const nextTaskButton = document.querySelector('#task_button');
const giveAnswerButton = document.querySelector('#give_answer');


//Variables
let n = 0,
    num1,
    num2

//MATH GAME
//Starting functio
function startMathGame() {
  nextTaskButton.style.display = 'none';
   randomNumber()
}

//Generates random task
function randomNumber() {
  num1 = Math.floor((Math.random() * 10) + 1);
  num2 = Math.floor((Math.random() * 10) + 1);
  task.innerHTML = `${num1} + ${num2}`
}

//Check if the answer is correct
function writeAnswer() {
  const correct = num1 + num2
  if (String(correct) === inputNumberField.value) {
    inputNumberField.style.color = 'green';
    nextTaskButton.style.display = null;
  } else {
    inputNumberField.style.color = 'red';
    nextTaskButton.style.display = 'none';
  }
}

//give correct answer
function giveAnswer() {
  let answer = num1 + num2
  task.innerHTML = `${num1} + ${num2} = ${answer}`;
}

//give next task if answer is correct
function nextTask(param) {
  if (param === 'next') {
    n++;
  }

  if (10 > n) {
    randomNumber()
    
  } else {
    task.innerHTML = 'Peli päättyi!';
    giveAnswerButton.style.display = 'none';
    inputNumberField.style.display = 'none';
  }
  nextTaskButton.style.display = 'none';

  inputNumberField.value = '';
}



