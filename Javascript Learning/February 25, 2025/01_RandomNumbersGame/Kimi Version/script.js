// script.js
const minRange = 1;
const maxRange = 100;
let secretNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
let attemptsLeft = 10;

const userGuessInput = document.getElementById('user-guess');
const checkBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('reset-btn');
const resultDiv = document.getElementById('result');
const attemptsDisplay = document.getElementById('attempts');

// Update attempts display
function updateAttempts() {
  attemptsDisplay.textContent = attemptsLeft;
}

// Check user's guess
function checkGuess() {
  const userGuess = parseInt(userGuessInput.value);

  if (isNaN(userGuess)) {
    resultDiv.textContent = "Please enter a valid number!";
    resultDiv.className = '';
    return;
  }

  if (userGuess < minRange || userGuess > maxRange) {
    resultDiv.textContent = `Enter a number between ${minRange} and ${maxRange}!`;
    resultDiv.className = '';
    return;
  }

  attemptsLeft--;
  updateAttempts();

  if (attemptsLeft === 0) {
    resultDiv.textContent = `Game Over! The secret number was ${secretNumber}.`;
    resultDiv.className = '';
    checkBtn.disabled = true;
    return;
  }

  if (userGuess === secretNumber) {
    resultDiv.textContent = "🎉 You guessed it correctly!";
    resultDiv.className = 'correct';
    checkBtn.disabled = true;
  } else if (userGuess < secretNumber) {
    resultDiv.textContent = "Too low! Try a higher number.";
    resultDiv.className = 'wrong';
  } else {
    resultDiv.textContent = "Too high! Try a lower number.";
    resultDiv.className = 'wrong';
  }
}

// Reset the game
function resetGame() {
  secretNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  attemptsLeft = 10;
  updateAttempts();
  resultDiv.textContent = '';
  resultDiv.className = '';
  checkBtn.disabled = false;
  userGuessInput.value = '';
}

// Add event listeners
checkBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);