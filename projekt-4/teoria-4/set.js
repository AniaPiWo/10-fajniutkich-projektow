//set i map to klasy
//set i map to struktury danych przechowujące kolekcje unikalnych wartości

//set przypomina tablice ale bez indeksow, iterowalny
//map przypomina tablice ale z indeksami i obiekt (klucz wartosc), iterowalny
//ulatwiaja zarzadzanie kolekcjami danych
//nie przechowuja duplikatow!

//KIEDY UZYWAC SET
//kiedy potrzebujemy kolekcji unikalnych wartości
//kiedy potrzebujemy szybkiego wyszukiwania elementów
//kiedy nie potrzebujemy indeksów
//kiedy mamy duze kolekcje danych(szybsze niz tablica)

//SET - zbiór unikalnych wartości
//nie posiada indeksów, nie przechowuje kolejności elementów
const emptySet = new Set();
console.log(emptySet); //Set(0) {}

const numbers = new Set([1, 2, 3, 3, 4, 5, 6, 7, 8, 9]);
console.log(numbers); //Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

const strings = new Set('hello');
console.log(strings); //Set(4) { 'h', 'e', 'l', 'o' }

//METODY SET
//dodawanie
//UWAGA - nie dodaje duplikatów! czyli jak dodasz 1 to nie doda kolejnego 1 itd

const letters = new Set();
letters.add('a');
letters.add('text');
letters.add('{name: "John"}');
letters.add('[1, 2, 3]');
console.log(letters); //Set(4) { 'a', 'text', '{name: "John"}', '[1, 2, 3]' }

//mozna łańcuchować
letters.add('a').add('b').add('c');
console.log(letters); //Set(7) { 'a', 'text', '{name: "John"}', '[1, 2, 3]', 'b', 'c' }

//typy referencyjne a duplikaty
const myset = new Set();
myset.add([]);
myset.add([]);
myset.add([]);
console.log(myset); //Set(3) { [], [], [] } - bo to sa 3 rozne obiekty, [] === [] to false

//USUWANIE - zwraca true jeśli usunie, false jeśli nie
const arr = [];
const myset2 = new Set([arr, []]); //Set(2) { [], [] }
myset2.delete(arr); //usuwa pierwszy element

//SPRAWDZANIE CZY ELEMENT ISTNIEJE
const myset3 = new Set([1, 2, 3, 4, 5]);
console.log(myset3.has(1)); //true
console.log(myset3.has('text')); //false

//SPRAWDZANIE DLUUGOSCI
console.log(myset3.size); //5

//ITEROWANIE PO SET
const myset4 = new Set([1, 2, 3]);
for (const item of myset4) {
  console.log(item);
}
myset4.forEach((item) => console.log(item));
myset4.forEach((item, index) => console.log(item, index)); //nie ma indeksow, wiec index to tez item

//SET i ARRAY roznice
//tablica ma wiecej metod iterowania, set ma tylko 2
//set nie ma indeksow, tablica ma
//set nie ma duplikatow, tablica moze miec
//set ma metody has, add, delete, clear, tablica nie ma
//set jest szybszy niz tablica

//ZAMIANA TABLICY NA SET - usuwa duplikaty
const arr2 = [1, 2, 3, 4, 5, 5, 5, 5, 5];
const myset5 = new Set(arr2);
console.log(myset5); //Set(5) { 1, 2, 3, 4, 5 }

//ZAMIANA SET NA TABLICE
const arr3 = [...myset5];
console.log(arr3); //[ 1, 2, 3, 4, 5 ]
