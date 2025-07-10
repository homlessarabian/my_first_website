// Greeting changes based on time of day
function setGreeting() {
  const hour = new Date().getHours();
  const greeting = document.getElementById("greeting");

  if (hour < 12) {
    greeting.textContent = "Good morning, I am Mohammed";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon, I am Mohammed";
  } else {
    greeting.textContent = "Good evening, I am Mohammed";
  }
}

// Dark mode toggle
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value;
  document.getElementById("formResponse").textContent = `Thanks, ${name}! I received your message.`;
  this.reset();
});

// Run greeting on page load
window.onload = setGreeting;
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById('userGuess').value);
  const result = document.getElementById('gameResult');
  guesses++;

  if (guess === secretNumber) {
    result.textContent = `🎉 Correct! You guessed it in ${guesses} tries.`;
    document.getElementById('resetBtn').style.display = 'inline-block';
  } else if (guess < secretNumber) {
    result.textContent = 'Too low. Try again!';
  } else if (guess > secretNumber) {
    result.textContent = 'Too high. Try again!';
  } else {
    result.textContent = 'Please enter a valid number.';
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  guesses = 0;
  document.getElementById('gameResult').textContent = '';
  document.getElementById('userGuess').value = '';
  document.getElementById('resetBtn').style.display = 'none';
}
