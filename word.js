const letter = document.querySelector('#letter');
const showWordButton = document.querySelector('#show_word');
const showLetterButton = document.querySelector('#give_letter');
const inputField = document.querySelector('#input-letter');
const gameOver = document.querySelector('#game_over');
const image = document.querySelector('#image');
const nextButton = document.querySelector('.nextImage--show');
const h2Otsikko = document.querySelector('h2');

// WORDGAME
function startWordGame() {
  nextButton.style.display = 'none';
}
//image gallery
let i = 0,
  j = 0;
images = [
  { pic: './images/Kumiankka.jpg', nimi: 'ANKKA' },
  { pic: './images/Koira.jpg', nimi: 'KOIRA' },
  { pic: './images/Kissa.jpg', nimi: 'KISSA' },
  { pic: './images/accord.jpg', nimi: 'KITARA' },
  { pic: './images/car.png', nimi: 'AUTO' },
  { pic: './images/airplane.jpg', nimi: 'LENTOKONE' },
];

//map image gallery
let imagesName = images.map((img) => img.nimi);
let imagesImg = images.map((img) => img.pic);


// check if the word is correct
function Write() {
  const sana = image.alt;
  const text = inputField.value;
  if (sana.includes(inputField.value.toUpperCase())) {
    inputField.style.color = 'green';

    if (inputField.value.toUpperCase() === sana) {
      nextButton.style.display = null;
    }
    if (text.length !== sana.length) {
      nextButton.style.display = 'none';
    }
  } else {
    inputField.style.color = 'red';
    nextButton.style.display = 'none';
  }
}
//show correct word
function showWord(param) {
if(param === 'show'){
  letter.innerHTML = image.alt
}
j = image.alt.length
}
// gives a hint of the letter
function giveLetter(param){
  if (param === 'letter' && j < image.alt.length) {
    letter.innerHTML = image.alt[j];
    console.log(image.alt[j]);
    j++;
  }
}

//Give next img if word is correct
function nextImg(param) {
  if (param === 'next') {
    i++;
  }
  if (images.length > i) {
    image.src = imagesImg[i];
    image.alt = imagesName[i];
  } else {
    h2Otsikko.innerHTML = 'Peli päättyi!';
    gameOver.innerHTML = 'ONNEA!';
    inputField.style.display = 'none';
    image.style.display = 'none';
    showWordButton.style.display = 'none';
  }
  j = 0;
  letter.innerHTML = '';
  nextButton.style.display = 'none';
  inputField.value = '';
}
