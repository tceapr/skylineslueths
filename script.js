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
  },
  {
    answer: "New York City",
    acceptedAnswers: ["new york city", "new york", "nyc", "new york ny", "new york new york"],
    image: "newyorkcity.png",
    clues: [
      "This city has five boroughs.",
      "Its harbor is home to the Statue of Liberty.",
      "Times Square and Central Park are two famous places here.",
      "Its tallest skyline landmark is One World Trade Center."
    ]
  },
  {
    answer: "San Antonio",
    acceptedAnswers: ["san antonio", "san antonio texas", "san antonio tx"],
    image: "sanantonio.png",
    clues: [
      "This city is in south-central Texas.",
      "Visitors often explore its downtown River Walk.",
      "A historic mission here is remembered for a famous battle.",
      "Its NBA team is called the Spurs."
    ]
  },
  {
    answer: "San Francisco",
    acceptedAnswers: ["san francisco", "san francisco california", "san francisco ca", "sf"],
    image: "sanfancisco.png",
    clues: [
      "This city sits on a peninsula beside a large bay.",
      "It is famous for steep streets, fog, and cable cars.",
      "A bright orange suspension bridge is one of its best-known landmarks.",
      "Alcatraz Island is located in its bay."
    ]
  },
  {
    answer: "Seattle",
    acceptedAnswers: ["seattle", "seattle washington", "seattle wa"],
    image: "seattle.png",
    clues: [
      "This city is in the Pacific Northwest.",
      "It sits near Puget Sound and has views of Mount Rainier on clear days.",
      "Its most recognizable skyline landmark was built for the 1962 World's Fair.",
      "It is known for coffee, rainy weather, and the Pike Place Market."
    ]
  },
  {
    answer: "Miami",
    acceptedAnswers: ["miami", "miami florida", "miami fl"],
    image: "miami.png",
    clues: [
      "This city is located in South Florida.",
      "It is known for beaches, warm weather, and colorful Art Deco buildings.",
      "Biscayne Bay sits beside its downtown skyline.",
      "Its NBA team is called the Heat."
    ]
  },
  {
    answer: "St. Louis",
    acceptedAnswers: ["st louis", "saint louis", "st louis missouri", "st louis mo", "saint louis missouri", "saint louis mo"],
    image: "stlouis.png",
    clues: [
      "This city sits along the Mississippi River in Missouri.",
      "It is known for toasted ravioli and a baseball team called the Cardinals.",
      "A 630-foot stainless-steel arch dominates its skyline.",
      "This city hosted both the 1904 World's Fair and the 1904 Summer Olympics."
    ]
  },
  {
    answer: "Los Angeles",
    acceptedAnswers: ["los angeles", "la", "los angeles california", "los angeles ca"],
    image: "la.png",
    clues: [
      "This Southern California city is located near the Pacific Ocean.",
      "It is famous for movies, television, and the entertainment industry.",
      "The Hollywood sign overlooks this sprawling city.",
      "This city's major airport uses the code LAX."
    ]
  },
  {
    answer: "Dallas",
    acceptedAnswers: ["dallas", "dallas texas", "dallas tx"],
    image: "dallas.png",
    clues: [
      "This large Texas city is located in the northern part of the state.",
      "It is home to the State Fair of Texas and the famous Big Tex statue.",
      "Its skyline includes Reunion Tower, which looks like a glowing ball on a column.",
      "Dealey Plaza, where President John F. Kennedy was assassinated, is located here."
    ]
  },
  {
    answer: "Las Vegas",
    acceptedAnswers: ["las vegas", "vegas", "las vegas nevada", "las vegas nv"],
    image: "lasvegas.png",
    clues: [
      "This Nevada city is located in the Mojave Desert.",
      "It is famous for casinos, elaborate hotels, and bright neon signs.",
      "Its skyline includes an enormous glowing structure called the Sphere.",
      "A famous roadside sign welcomes visitors with flashing lights and a starburst."
    ]
  },
  {
    answer: "Washington, D.C.",
    acceptedAnswers: ["washington dc", "washington d c", "washington", "dc", "d c", "washington district of columbia"],
    image: "washingtondc.png",
    clues: [
      "This East Coast city is located along the Potomac River.",
      "It serves as the capital of the United States.",
      "Its skyline includes the white dome of the U.S. Capitol.",
      "A tall, white obelisk here honors the nation's first president."
    ]
  },
  {
    answer: "Nashville",
    acceptedAnswers: ["nashville", "nashville tennessee", "nashville tn"],
    image: "nashville.png",
    clues: [
      "This Tennessee city sits along the Cumberland River.",
      "It is known as \"Music City\" because of its country music history.",
      "Its skyline includes a twin-spired skyscraper nicknamed the \"Batman Building.\"",
      "Visitors come here to hear live music at the Grand Ole Opry and along Broadway."
    ]
  },
  {
    answer: "Pittsburgh",
    acceptedAnswers: ["pittsburgh", "pittsburgh pennsylvania", "pittsburgh pa", "pittsburg", "pittsburg pennsylvania", "pittsburg pa"],
    image: "pittsburg.png",
    clues: [
      "This city is located in western Pennsylvania.",
      "It became famous for producing steel and is still known as the \"Steel City.\"",
      "Its skyline is surrounded by steep hills and many yellow bridges.",
      "The Allegheny and Monongahela rivers meet here to form the Ohio River."
    ]
  },
  {
    answer: "Philadelphia",
    acceptedAnswers: ["philadelphia", "philadelphia pennsylvania", "philadelphia pa", "philly"],
    image: "philadelphia.png",
    clues: [
      "This city is located in southeastern Pennsylvania along the Delaware River.",
      "It is known for cheesesteaks and is nicknamed the \"City of Brotherly Love.\"",
      "A statue of William Penn stands atop its historic City Hall.",
      "The Liberty Bell and Independence Hall are located here."
    ]
  },
  {
    answer: "Boston",
    acceptedAnswers: ["boston", "boston massachusetts", "boston ma"],
    image: "boston.png",
    clues: [
      "This Massachusetts city sits beside a harbor on the Atlantic coast.",
      "It is home to the Red Sox and historic Fenway Park.",
      "Its skyline includes the Custom House Tower and the Zakim Bridge.",
      "This city is famous for the Freedom Trail and the Boston Tea Party."
    ]
  },
  {
    answer: "Denver",
    acceptedAnswers: ["denver", "denver colorado", "denver co"],
    image: "denver.png",
    clues: [
      "This Colorado city sits near the eastern edge of the Rocky Mountains.",
      "It is nicknamed the \"Mile High City\" because of its elevation.",
      "Its skyline includes the Colorado State Capitol, topped by a gleaming gold dome.",
      "The Colorado Rockies baseball team plays at Coors Field here."
    ]
  },
  {
    answer: "Salt Lake City",
    acceptedAnswers: ["salt lake city", "salt lake", "salt lake city utah", "salt lake city ut", "slc"],
    image: "saltlakecity.png",
    clues: [
      "This Utah city sits in a valley surrounded by mountains.",
      "It hosted the Winter Olympics in 2002.",
      "The Wasatch Mountains form a dramatic backdrop behind its skyline.",
      "Temple Square and the Utah State Capitol are located here."
    ]
  },
  {
    answer: "Cincinnati",
    acceptedAnswers: ["cincinnati", "cincinnati ohio", "cincinnati oh", "cincinnatti", "cincinnatti ohio", "cincinnatti oh"],
    image: "cincinnatti.png",
    clues: [
      "This Ohio city sits along a river that separates Ohio from Kentucky.",
      "It is known for serving its unusual style of chili over spaghetti.",
      "Its skyline includes a skyscraper topped by a crown that resembles a tiara.",
      "The blue Roebling Suspension Bridge connects this city to Kentucky."
    ]
  },
  {
    answer: "New Orleans",
    acceptedAnswers: ["new orleans", "new orleans louisiana", "new orleans la", "nola"],
    image: "neworleans.png",
    clues: [
      "This Louisiana city sits along a bend in the Mississippi River.",
      "It is famous for jazz music and Creole and Cajun cooking.",
      "Its skyline includes a large domed stadium called the Caesars Superdome.",
      "The French Quarter and the annual Mardi Gras celebration are found here."
    ]
  },
  {
    answer: "Minneapolis",
    acceptedAnswers: ["minneapolis", "minneapolis minnesota", "minneapolis mn"],
    image: "minneapolis.png",
    clues: [
      "This Minnesota city is located along the Mississippi River.",
      "It forms the \"Twin Cities\" with nearby St. Paul.",
      "Its riverfront features the historic Stone Arch Bridge and old flour mills.",
      "Musician Prince was born and raised in this city."
    ]
  },
  {
    answer: "Paris, France",
    acceptedAnswers: ["paris", "paris france"],
    image: "paris.png",
    clues: [
      "This European capital sits along the Seine River in northern France.",
      "It is known for art museums, sidewalk cafes, fashion, and fresh pastries.",
      "Its skyline includes a tall iron tower built for the 1889 World's Fair.",
      "The Louvre Museum, Notre-Dame Cathedral, and Arc de Triomphe are located here."
    ]
  },
  {
    answer: "London, England",
    acceptedAnswers: ["london", "london england", "london uk", "london united kingdom"],
    image: "london.png",
    clues: [
      "This capital city sits along the River Thames in the United Kingdom.",
      "It is known for red double-decker buses, black taxis, and the royal family.",
      "Its skyline includes the London Eye and a famous clock tower.",
      "The Houses of Parliament and Buckingham Palace are located here."
    ]
  },
  {
    answer: "Sydney, Australia",
    acceptedAnswers: ["sydney", "sydney australia"],
    image: "sydney.png",
    clues: [
      "This Australian city is built around a large natural harbor.",
      "It is known for sunny beaches, including famous Bondi Beach.",
      "Its waterfront includes a performing arts building shaped like white sails.",
      "A huge steel arch called the Sydney Harbour Bridge crosses its harbor."
    ]
  },
  {
    answer: "Dubai",
    acceptedAnswers: ["dubai", "dubai uae", "dubai united arab emirates"],
    image: "dubai.png",
    clues: [
      "This city is located in the United Arab Emirates beside the Persian Gulf.",
      "It is known for luxury hotels, enormous shopping centers, and artificial islands.",
      "Its skyline features many futuristic skyscrapers rising near the desert.",
      "The Burj Khalifa, the world's tallest building, towers over this city."
    ]
  },
  {
    answer: "Toronto, Canada",
    acceptedAnswers: ["toronto", "toronto canada", "toronto ontario"],
    image: "toronto.png",
    clues: [
      "This Canadian city sits along the shore of Lake Ontario.",
      "It is the largest city in Canada and is known for its multicultural population.",
      "The Toronto Blue Jays play beneath a retractable roof at Rogers Centre.",
      "A needle-shaped landmark called the CN Tower dominates its skyline."
    ]
  },
  {
    answer: "Singapore",
    acceptedAnswers: ["singapore"],
    image: "singapore.png",
    clues: [
      "This island city-state is located in Southeast Asia.",
      "It is known for its multicultural neighborhoods, spotless streets, and busy food centers.",
      "Its waterfront features giant artificial trees that glow at night.",
      "Three towers topped by a ship-shaped SkyPark overlook Marina Bay."
    ]
  },
  {
    answer: "Tokyo, Japan",
    acceptedAnswers: ["tokyo", "tokyo japan"],
    image: "tokyo.png",
    clues: [
      "This capital city is located on the Japanese island of Honshu.",
      "It is known for high-speed trains, neon signs, anime, and busy street crossings.",
      "Its skyline includes a red-and-white tower inspired by the Eiffel Tower.",
      "Tokyo Skytree, the tallest structure in Japan, rises above this city."
    ]
  },
  {
    answer: "Rio de Janeiro, Brazil",
    acceptedAnswers: ["rio", "rio de janeiro", "rio de janeiro brazil"],
    image: "rio.png",
    clues: [
      "This Brazilian city sits along the Atlantic coast.",
      "It is famous for samba music, Carnival, and Copacabana Beach.",
      "A rounded peak called Sugarloaf Mountain rises beside its harbor.",
      "A giant statue of Christ with outstretched arms overlooks the city."
    ]
  },
  {
    answer: "Cape Town, South Africa",
    acceptedAnswers: ["cape town", "cape town south africa"],
    image: "capetown.png",
    clues: [
      "This South African city sits near the southwestern tip of the continent.",
      "It is known for colorful Bo-Kaap houses and nearby beaches with African penguins.",
      "A huge, flat-topped mountain rises directly behind the city.",
      "Robben Island, where Nelson Mandela was imprisoned, lies just offshore."
    ]
  },
  {
    answer: "Moscow",
    acceptedAnswers: ["moscow", "moscow russia"],
    image: "moscow.png",
    clues: [
      "This city is located along the Moskva River in western Russia.",
      "It is home to a famous public space called Red Square.",
      "A historic fortress called the Kremlin stands in the heart of the city.",
      "St. Basil's Cathedral is known for its brightly colored onion-shaped domes."
    ]
  }
];

const pointsByClues = [40, 30, 20, 10];
const citiesPerLevel = 10;
const cityLevels = [
  {
    title: "Collection 1",
    description: "U.S. Skyline Cases",
    cities: cities.slice(0, 10)
  },
  {
    title: "Collection 2",
    description: "U.S. Skyline Cases",
    cities: cities.slice(10, 20)
  },
  {
    title: "Collection 3",
    description: "International Skyline Cases",
    cities: cities.slice(20, 30)
  }
];

const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");
const resultScreen = document.querySelector("#result-screen");
const levelOptions = document.querySelector("#level-options");
const playAgainButton = document.querySelector("#play-again-button");
const levelSelectButton = document.querySelector("#level-select-button");
const roundLabel = document.querySelector("#round-label");
const scoreDisplay = document.querySelector("#score-display");
const pointsDisplay = document.querySelector("#points-display");
const skylineImage = document.querySelector("#skyline-image");
const clueProgress = document.querySelector("#clue-progress");
const clueList = document.querySelector("#clue-list");
const guessForm = document.querySelector("#guess-form");
const guessInput = document.querySelector("#guess-input");
const showAnswerButton = document.querySelector("#show-answer-button");
const feedback = document.querySelector("#feedback");
const finalScore = document.querySelector("#final-score");
const scoreSummaryLabel = document.querySelector("#score-summary-label");
const resultTitle = document.querySelector("#result-title");
const resultMessage = document.querySelector("#result-message");

let currentCityIndex = 0;
let gameCities = [];
let activeLevel = null;
let revealedClues = 0;
let incorrectGuesses = 0;
let score = 0;
let roundComplete = false;
let earnedThisRound = 0;
let answerRevealed = false;

function showScreen(screen) {
  [startScreen, gameScreen, resultScreen].forEach((item) => {
    item.classList.toggle("hidden", item !== screen);
  });
}

function normalizeGuess(value) {
  return value.trim().toLowerCase().replace(/[.,]/g, "").replace(/\s+/g, " ");
}

function currentCity() {
  return gameCities[currentCityIndex];
}

function availablePoints() {
  const cluePenalty = revealedClues === 0 ? 0 : revealedClues - 1;
  const totalPenalty = cluePenalty + incorrectGuesses;

  return Math.max(0, pointsByClues[0] - totalPenalty * 10);
}

function shuffleCities(cityList) {
  const shuffled = [...cityList];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function renderLevelOptions() {
  levelOptions.innerHTML = "";

  cityLevels.forEach((level) => {
    if (level.cities.length === 0) {
      return;
    }

    const cityCount = Math.min(level.cities.length, citiesPerLevel);
    const button = document.createElement("button");

    button.type = "button";
    button.className = "level-card";
    button.innerHTML = `
      <span>${level.title}</span>
      <strong>${cityCount} ${cityCount === 1 ? "city" : "cities"}</strong>
      <small>${level.description}</small>
    `;
    button.addEventListener("click", () => startGame(level));
    levelOptions.appendChild(button);
  });
}

function updateScoreboard() {
  const points = availablePoints();

  scoreDisplay.textContent = score;
  pointsDisplay.textContent = points;
  showAnswerButton.classList.toggle("hidden", roundComplete || points > 0);
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
  incorrectGuesses = 0;
  roundComplete = false;
  earnedThisRound = 0;
  answerRevealed = false;
  roundLabel.textContent = `${activeLevel.title} · City ${currentCityIndex + 1} of ${gameCities.length}`;
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

function startGame(level = activeLevel || cityLevels[0]) {
  activeLevel = level;
  gameCities = shuffleCities(level.cities).slice(0, citiesPerLevel);
  currentCityIndex = 0;
  score = 0;
  startRound();
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
    incorrectGuesses += 1;
    updateScoreboard();
    feedback.textContent = `Not quite. Reveal another clue or try again. This city is now worth ${availablePoints()} points.`;
    feedback.className = "feedback error";
    guessInput.select();
    return;
  }

  roundComplete = true;
  earnedThisRound = availablePoints();
  score += earnedThisRound;
  updateScoreboard();
  feedback.textContent = `Correct! You earned ${earnedThisRound} points.`;
  feedback.className = "feedback success";
  guessInput.disabled = true;
  guessForm.querySelector("button").disabled = true;
  showAnswerButton.classList.add("hidden");

  window.setTimeout(showResult, 700);
}

function showAnswer() {
  if (roundComplete || availablePoints() > 0) {
    return;
  }

  const city = currentCity();

  roundComplete = true;
  answerRevealed = true;
  earnedThisRound = 0;
  guessInput.disabled = true;
  guessForm.querySelector("button").disabled = true;
  showAnswerButton.classList.add("hidden");
  feedback.textContent = `The answer is ${city.answer}. This round is worth 0 points.`;
  feedback.className = "feedback";
  updateScoreboard();

  window.setTimeout(showResult, 900);
}

function showResult() {
  const city = currentCity();
  const isFinalRound = currentCityIndex === gameCities.length - 1;
  const clueText = revealedClues === 0
    ? "without revealing any clues"
    : `after revealing ${revealedClues} clue${revealedClues === 1 ? "" : "s"}`;

  resultTitle.textContent = isFinalRound
    ? `${activeLevel.title} cases closed.`
    : answerRevealed ? `${city.answer} revealed.` : `${city.answer} solved.`;
  finalScore.textContent = score;
  scoreSummaryLabel.textContent = isFinalRound ? "Final Score" : "Total Score";
  resultMessage.textContent = isFinalRound
    ? `You finished all ${gameCities.length} skylines in ${activeLevel.title} with ${score} points.`
    : answerRevealed
      ? `The answer was ${city.answer}. This round earned 0 points, and the next case is ready.`
      : `You identified ${city.answer} ${clueText} and earned ${earnedThisRound} points this round.`;
  playAgainButton.textContent = isFinalRound ? `Play ${activeLevel.title} Again` : "Next City";
  levelSelectButton.classList.toggle("hidden", !isFinalRound);
  showScreen(resultScreen);
}

function handleResultButton() {
  if (currentCityIndex < gameCities.length - 1) {
    currentCityIndex += 1;
    startRound();
    return;
  }

  startGame(activeLevel);
}

levelSelectButton.addEventListener("click", () => showScreen(startScreen));
playAgainButton.addEventListener("click", handleResultButton);
guessForm.addEventListener("submit", submitGuess);
showAnswerButton.addEventListener("click", showAnswer);
renderLevelOptions();
