//MAP
//przechowuje pary klucz-wartość
//klucze mogą być dowolnego typu
//klucze są unikalne
//klucze są iterowalne
//klucze nie mogą być duplikatami
//bardzo szybkie wyszukiwanie po kluczu

const myMap = new Map();
console.log(myMap); //Map(0) {}

const myMap2 = new Map([
  ['name', 'John'],
  ['age', 32],
]);
console.log(myMap2); //Map(2) { 'name' => 'John', 'age' => 32 }

// Tworzenie mapy - MUSI BYC TABLICA Z DWUELEMENTOWYMI TABLICAMI (klucz, wartosc)
// w ten sposob jest iterowalny
// proba dodaaania obiektu, ktory nie jest iterowalny zakonczy sie bledem

//DODAWANIE

const myMap3 = new Map();
myMap3.set('name', 'John');
myMap3.set('age', 32);
myMap3.set({}, 'empty object');
myMap3.set([], 'empty array');
//zwraca sie zaktualiowana mapę

//Łańcuchowanie
myMap3.set('name', 'John').set('age', 32);

const myMap4 = new Map();
myMap4.set('item');
console.log(myMap4); //Map(1) { 'item' => undefined }

//MODYFIKACJA
//zamiana wartosci
//set z kluczem, ktory juz istnieje, nadpisuje wartosc
const myMap5 = new Map();
myMap5.set('name', 'John'); //Map(1) { 'name' => 'John' }
myMap5.set('name', 'Adam'); //Map(1) { 'name' => 'Adam' }

//USUWANIE
//delete z kluczem itemu do usuniecia
const myMap6 = new Map();
myMap6.set('name', 'John');
myMap6.delete('name'); //true
console.log(myMap6); //Map(0) {}

//SPRAWDZANIE CZY ISTNIEJE KLUCZ(bo unikalny)
const myMap7 = new Map();
myMap7.set('name', 'John');
myMap7.has('name'); //true

//ITEROWANIE
//uwaga - kolejnosc value i key jest odwrotna niz w set
const myMap8 = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
myMap8.forEach((value, key) => {
  console.log(key, value);
}); //1 'one' 2 'two' 3 'three'

for (const item of myMap8) {
  console.log(item);
} //[ 1, 'one' ] [ 2, 'two' ] [ 3, 'three' ]

//MAP W ARRAYS
const mapArray = [...myMap8];
console.log(mapArray); //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
//ewenrtualnie
const mapArray2 = Array.from(myMap8);
console.log(mapArray2); //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]

//OBIEKT W MAP
//entries zwraca tablice z tablicami klucz-wartosc
const myObject = {
  name: 'John',
  age: 32,
};

const mapFromObject = new Map(Object.entries(myObject));
console.log(mapFromObject); //Map(2) { 'name' => 'John', 'age' => 32 }

const myMap9 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);
for (const key of myMap9.keys()) {
  console.log(`Key: ${key}`);
}
for (const value of myMap9.values()) {
  console.log(`Value: ${value}`);
}
for (const [key, value] of myMap9.entries()) {
  console.log(`Key: ${key}, Value: ${value}`);
}
