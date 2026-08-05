const cities = [
  {
    answer: "Chicago",
    acceptedAnswers: ["chicago", "chicago illinois", "chicago il"],
    image: "chicago.png",
    clues: [
      "This city is located beside one of the Great Lakes.",
      "It is known for deep-dish pizza and an elevated train system called the \"L.\"",
      "A famous skyscraper here was once called the Sears Tower.",
      "This city's major airport uses the code ORD."
    ]
  }
];

const pointsByClues = [40, 30, 20, 10];

const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const playAgainButton = document.querySelector("#play-again-button");
const roundLabel = document.querySelector("#round-label");
const scoreDisplay = document.querySelector("#score-display");
const pointsDisplay = document.querySelector("#points-display");
const skylineImage = document.querySelector("#skyline-image");
const clueProgress = document.querySelector("#clue-progress");
const clueList = document.querySelector("#clue-list");
const guessForm = document.querySelector("#guess-form");
const guessInput = document.querySelector("#guess-input");
const feedback = document.querySelector("#feedback");
const finalScore = document.querySelector("#final-score");
const resultMessage = document.querySelector("#result-message");

let currentCityIndex = 0;
let revealedClues = 0;
let score = 0;
let roundComplete = false;

function showScreen(screen) {
  [startScreen, gameScreen, resultScreen].forEach((item) => {
    item.classList.toggle("hidden", item !== screen);
  });
}

function normalizeGuess(value) {
  return value.trim().toLowerCase().replace(/[.,]/g, "").replace(/\s+/g, " ");
}

function currentCity() {
  return cities[currentCityIndex];
}

function availablePoints() {
  if (revealedClues === 0) {
    return pointsByClues[0];
  }

  return pointsByClues[Math.min(revealedClues - 1, pointsByClues.length - 1)];
}

function updateScoreboard() {
  scoreDisplay.textContent = score;
  pointsDisplay.textContent = availablePoints();
}

function renderClues() {
  const city = currentCity();
  clueList.innerHTML = "";

  city.clues.forEach((clue, index) => {
    const clueNumber = index + 1;
    const isRevealed = index < revealedClues;
    const isAvailable = index === revealedClues && !roundComplete;
    const button = document.createElement("button");

    button.type = "button";
    button.className = "clue-button";
    button.disabled = !isAvailable;
    button.dataset.clueIndex = index;
    button.classList.toggle("revealed", isRevealed);
    button.classList.toggle("available", isAvailable);
    button.classList.toggle("locked", !isRevealed && !isAvailable);
    button.innerHTML = `
      <span class="clue-label">Clue ${clueNumber}</span>
      <span>${isRevealed ? clue : isAvailable ? "Reveal this clue" : "Locked"}</span>
    `;

    button.addEventListener("click", () => revealClue(index));
    clueList.appendChild(button);
  });

  if (revealedClues === 0) {
    clueProgress.textContent = "Reveal Clue 1 when you are ready.";
  } else if (revealedClues < city.clues.length) {
    clueProgress.textContent = `Clue ${revealedClues} revealed. Clue ${revealedClues + 1} is now available.`;
  } else {
    clueProgress.textContent = "All clues are revealed. Make your best guess.";
  }
}

function revealClue(index) {
  if (roundComplete || index !== revealedClues) {
    return;
  }

  revealedClues += 1;
  feedback.textContent = "";
  feedback.className = "feedback";
  renderClues();
  updateScoreboard();
}

function startRound() {
  const city = currentCity();

  revealedClues = 0;
  score = 0;
  roundComplete = false;
  roundLabel.textContent = `City ${currentCityIndex + 1} of ${cities.length}`;
  skylineImage.src = city.image;
  skylineImage.alt = "Mystery city skyline";
  guessInput.value = "";
  guessInput.disabled = false;
  guessForm.querySelector("button").disabled = false;
  feedback.textContent = "";
  feedback.className = "feedback";
  renderClues();
  updateScoreboard();
  showScreen(gameScreen);
  guessInput.focus();
}

function submitGuess(event) {
  event.preventDefault();

  if (roundComplete) {
    return;
  }

  const guess = normalizeGuess(guessInput.value);

  if (!guess) {
    feedback.textContent = "Enter a city before submitting your guess.";
    feedback.className = "feedback error";
    return;
  }

  const city = currentCity();
  const correct = city.acceptedAnswers.includes(guess);

  if (!correct) {
    feedback.textContent = "Not quite. Reveal another clue or try again.";
    feedback.className = "feedback error";
    guessInput.select();
    return;
  }

  roundComplete = true;
  score += availablePoints();
  updateScoreboard();
  feedback.textContent = `Correct! You earned ${availablePoints()} points.`;
  feedback.className = "feedback success";
  guessInput.disabled = true;
  guessForm.querySelector("button").disabled = true;

  window.setTimeout(showResult, 700);
}

function showResult() {
  finalScore.textContent = score;
  resultMessage.textContent = revealedClues === 0
    ? "You identified the mystery skyline without revealing any clues."
    : `You identified the mystery skyline after revealing ${revealedClues} clue${revealedClues === 1 ? "" : "s"}.`;
  showScreen(resultScreen);
}

startButton.addEventListener("click", startRound);
playAgainButton.addEventListener("click", startRound);
guessForm.addEventListener("submit", submitGuess);
