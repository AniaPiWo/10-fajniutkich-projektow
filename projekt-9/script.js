const cardColors = [
  'red',
  'red',
  'blue',
  'blue',
  'yellow',
  'yellow',
  'brown',
  'brown',
  'green',
  'green',
  'gray',
  'gray',
  'lightgreen',
  'lightgreen',
  'violet',
  'violet',
  'cadetblue',
  'cadetblue',
];

let cards = document.querySelectorAll('div');
cards = [...cards];

const startTime = new Date().getTime();
let activeCard = '';
const activeCards = [];
const gamePairs = cards.length / 2;
let gameResult = 0;

if (gamePairs === gameResult) {
  console.log('koniec gry');
}

const clickCard = function () {
  activeCard = this;

  if (activeCard == activeCards[0]) return;

  activeCard.classList.remove('hidden');

  //1st click
  if (activeCards.length === 0) {
    activeCards[0] = activeCard;
    return;
  } else {
    //2nd click
    cards.forEach((card) => card.removeEventListener('click', clickCard));
    activeCards[1] = activeCard;
    setTimeout(function () {
      if (activeCards[0].className === activeCards[1].className) {
        activeCards.forEach((card) => card.classList.add('off'));
        gameResult++;
        cards = cards.filter((card) => !card.classList.contains('off'));
        if (gamePairs === gameResult) {
          const endTime = new Date().getTime();
          const gameTime = (endTime - startTime) / 1000;
          alert(`Udało się! Twój wynik to: ${gameTime} sekund`);
          location.reload();
        }
      } else {
        activeCards.forEach((card) => card.classList.add('hidden'));
        console.log('przegrana');
      }
      activeCard = '';
      activeCards.length = 0;
      cards.forEach((card) => card.addEventListener('click', clickCard));
    }, 1000);
  }
};

const init = () => {
  cards.forEach((card) => {
    const position = Math.floor(Math.random() * cardColors.length);
    card.classList.add(cardColors[position]);
    cardColors.splice(position, 1);
  });

  setTimeout(() => {
    cards.forEach((card) => {
      card.classList.add('hidden');
      card.addEventListener('click', clickCard);
    });
  }, 2000);
};

init();
