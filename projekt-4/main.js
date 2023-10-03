const voteForm = document.querySelector('.vote-form');
const voteOptions = document.querySelector('.vote-options');
const voteResult = document.querySelector('.results');
const voteInfo = document.querySelector('.vote-info');
const userName = document.querySelector('.user-name');
const userId = document.querySelector('.user-id');

const validUserIds = new Map([
  ['Roman', '12345678'],
  ['Stanisław', '87654321'],
  ['Dzesika', '11111111 '],
  ['Krzysiek', '22222222 '],
  ['Brajan', '33333333 '],
]);

const voteCount = new Map();
voteCount.set('Opcja 1', 0);
voteCount.set('Opcja 2', 0);
voteCount.set('Opcja 3', 0);

//userzy ktorzy juz glosowali
const votedUsers = new Set();

const voting = (e) => {
  e.preventDefault();
  const user = userName.value;
  const password = userId.value;
  const select = voteOptions.value;
  if (validUserIds.get(user) === password) {
    if (votedUsers.has(user)) {
      voteInfo.textContent = 'Już głosowałeś!';
      return;
    } else {
      votedUsers.add(user);
      voteCount.set(select, voteCount.get(select) + 1);
      console.log(votedUsers);
    }
  } else {
    voteInfo.textContent = 'Nieprawidłowe dane!';
    return;
  }
  updateResult();
};

const updateResult = () => {
  voteResult.style.display = 'block';
  let output = '';
  voteCount.forEach((value, option) => {
    output += `<li>${option}: ${value}</li>`;
  });
  /*   for (const [option, value] of voteCount.entries()) {
    output += `<li>${option}: ${value}</li>`;
  } */
  voteResult.innerHTML = output;
};

voteForm.addEventListener('submit', voting);
