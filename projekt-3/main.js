const user_span = document.querySelector('.user_span');

//LocalStorage - przechowuje stringi do 10mb dla danej domeny
//LocalStorage pracuje z domena i w zakresie przegladarki
//jesli chcemy boolean, number itd musimy je wczesniej na stringa
//mozna tez jsona
//Dane w LocalStorage sa trwale i nei wygasaja, sa dostepne w zakladkach jesli maja ta sama domene glowna
//zostaja az sie je usunie
//np koszyk zakupowy, caching danych API, uzupelnianie formularzy

//API localStorage
//localStorage.setItem("klucz", "wartość")
localStorage.setItem('id', '140');

//localStorage.getItem("klucz")
localStorage.getItem('id');

//localStorage.removeItem("id")
localStorage.removeItem('id');

//remove all
localStorage.clear();

localStorage.setItem('id1', '140');
localStorage.setItem('id2', '146');
const localLength = localStorage.length; //ilosc par klucz-warosc
console.log(localLength);

//JSON
const user = { name: 'jagna', age: 5 };
localStorage.setItem('user', JSON.stringify(user));

const stored_user = JSON.parse(localStorage.getItem('user'));
console.log(stored_user);
user_span.textContent = `${stored_user.name}, age ${stored_user.age}`;

window.addEventListener('storage', function (event) {
  console.log('Klucz zmieniony', event.key);
  console.log('Stara wartość');
  console.log('Nowa wartość');
});

//obsluga bledow
try {
  localStorage.setItem('key', 'value');
} catch (event) {
  console.error('co sie tu:', event);
}

console.log(localStorage);
