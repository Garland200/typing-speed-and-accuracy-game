// DOM Elements
const wordDisplay = document.getElementById('word');
const textInput = document.getElementById('text');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start-btn');

// Words array
const words = [
  'javascript', 'html', 'css', 'python', 'react', 
  'node', 'frontend', 'backend', 'developer', 'coding',
  'algorithm', 'function', 'variable', 'object', 'array'
];

// Game variables
let currentWord;
let score = 0;
let time = 10;
let timer;

// Start game
function startGame() {
  score = 0;
  time = 10;
  textInput.value = '';
  textInput.focus();
  updateScore();
  updateTime();
  displayNewWord();
  startButton.disabled = true;

  // Start timer
  timer = setInterval(() => {
    time--;
    updateTime();
    if (time <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

// End game
function endGame() {
  alert(`Time's up! Your score is ${score}.`);
  startButton.disabled = false;
}

// Display new word
function displayNewWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordDisplay.textContent = currentWord;
}

// Check input
function checkInput() {
  if (textInput.value.trim() === currentWord) {
    score++;
    time += 2; // Bonus time for correct word
    updateScore();
    displayNewWord();
    textInput.value = '';
  }
}

// Update score
function updateScore() {
  scoreDisplay.textContent = score;
}

// Update time
function updateTime() {
  timeDisplay.textContent = time;
}

// Event listeners
textInput.addEventListener('input', checkInput);
startButton.addEventListener('click', startGame);
