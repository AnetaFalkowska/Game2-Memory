const imagesArray = [
  {
    name: "cheesburger",
    image: "Images/cheeseburger.png",
  },
  {
    name: "fries",
    image: "Images/fries.png",
  },
  {
    name: "hotdog",
    image: "Images/hotdog.png",
  },
  {
    name: "ice-cream",
    image: "Images/ice-cream.png",
  },
  {
    name: "milkshake",
    image: "Images/milkshake.png",
  },
  {
    name: "pizza",
    image: "Images/pizza.png",
  },
  {
    name: "cheesburger",
    image: "Images/cheeseburger.png",
  },
  {
    name: "fries",
    image: "Images/fries.png",
  },
  {
    name: "hotdog",
    image: "Images/hotdog.png",
  },
  {
    name: "ice-cream",
    image: "Images/ice-cream.png",
  },
  {
    name: "milkshake",
    image: "Images/milkshake.png",
  },
  {
    name: "pizza",
    image: "Images/pizza.png",
  },
];

imagesArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
const scoreDisplay = document.querySelector("#result");

let uncoveredCards = [];
let uncoveredCardsIds = [];
let foundPairs = [];

function createBoard() {
  for (let i = 0; i < 12; i++) {
    const card = document.createElement("img");
    card.setAttribute("card-id", i);
    card.setAttribute("src", "Images/blank.png");
    card.addEventListener("click", flipCard);
    grid.append(card);
  }
}

createBoard();

function checkForMatch() {
  const cards = document.querySelectorAll("img");

  if (uncoveredCards[0] === uncoveredCards[1]) {
    cards[uncoveredCardsIds[0]].setAttribute("src", "Images/white.png");
    cards[uncoveredCardsIds[0]].removeEventListener("click", flipCard);
    cards[uncoveredCardsIds[1]].setAttribute("src", "Images/white.png");
    cards[uncoveredCardsIds[1]].removeEventListener("click", flipCard);
    foundPairs.push(uncoveredCards);
  } else {
    cards[uncoveredCardsIds[0]].setAttribute("src", "Images/blank.png");
    cards[uncoveredCardsIds[1]].setAttribute("src", "Images/blank.png");
  }
  scoreDisplay.innerHTML = foundPairs.length;
  uncoveredCards = [];
  uncoveredCardsIds = [];
  
  if (foundPairs.length == imagesArray.length / 2) {
    scoreDisplay.innerHTML = "Congratulations you found them all!";
  }
}

function flipCard() {
  const cardId = this.getAttribute("card-id");
  uncoveredCards.push(imagesArray[cardId].name);
  uncoveredCardsIds.push(cardId);
  this.setAttribute("src", imagesArray[cardId].image);
  if (uncoveredCards.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}
