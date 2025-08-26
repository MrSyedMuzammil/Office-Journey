// Game State
let targetNumber;
let attempts = 0;
let timer;
let timeLeft = 30;
let highScore = localStorage.getItem('highScore') || 0;

// DOM Elements
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const timerDisplay = document.getElementById('timer');
const highscoreDisplay = document.getElementById('highscore');
const resetBtn = document.getElementById('reset-btn');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');

// Initialize high score display
highscoreDisplay.textContent = highScore;

// Handle difficulty selection
difficultyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
      // Remove active class from all buttons
      difficultyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Start new game with selected difficulty
      startGame(btn.dataset.difficulty);
  });
});

// Start game based on difficulty
function startGame(difficulty) {
  const ranges = { easy: 50, medium: 100, hard: 200 };
  targetNumber = Math.floor(Math.random() * ranges[difficulty]) + 1;
  attempts = 0;
  timeLeft = 30;
  attemptsDisplay.textContent = attempts;
  timerDisplay.textContent = timeLeft;
  message.textContent = '';
  guessInput.value = '';

  // Reset timer and start countdown
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

// Update timer every second
function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
      clearInterval(timer);
      loseSound.play();
      message.textContent = '⏰ Time’s up! Try again.';
      message.style.color = 'red';
      guessBtn.disabled = true;
  }
}

// Handle guess submission
guessBtn.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);
  attempts++;
  attemptsDisplay.textContent = attempts;

  if (userGuess === targetNumber) {
      handleWin();
  } else {
      provideFeedback(userGuess);
  }
});

// Provide feedback (high/low)
function provideFeedback(guess) {
  const hint = guess > targetNumber ? '📉 Too high!' : '📈 Too low!';
  message.textContent = hint;
  message.style.color = guess > targetNumber ? '#ff4444' : '#44ff44';
  guessInput.value = '';
}

// Handle correct guess
function handleWin() {
  clearInterval(timer);
  winSound.play();
  message.textContent = '🎉 Correct! You win!';
  message.style.color = '#4CAF50';
  guessBtn.disabled = true;

  // Update high score
  if (attempts < highScore || highScore === 0) {
      highScore = attempts;
      localStorage.setItem('highScore', highScore);
      highscoreDisplay.textContent = highScore;
  }
}

// Reset game
resetBtn.addEventListener('click', () => {
  const activeDifficulty = document.querySelector('.difficulty-btn.active').dataset.difficulty;
  startGame(activeDifficulty);
  guessBtn.disabled = false;
  message.style.color = 'white';
});