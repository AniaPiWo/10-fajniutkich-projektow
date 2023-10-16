//wyrazenia regularne
//to zasady ktore okreslaja jakie znaki moga wystapic w danym miejscu
//walidacja stringow, wyszukiwanie w stringach, zastepowanie stringow
//regex - regular expression

//dwa sposoby tworzenia wyrazen regularnych
const reg1 = new RegExp('abc');
console.log(reg1); // /abc/
const reg2 = /abc/;
console.log(reg2); // /abc/

//metody
//test - sprawdza czy string pasuje do wyrazenia regularnego
const reg3 = /parostatkiem w piekny rejs/;
console.log(/rejs/.test('parostatkiem w piekny rejs')); //true

//metaznaki
// . - dowolny znak
// ^ - poczatek stringa
// $ - koniec stringa
// * - zero lub wiecej powtorzen
// + - jedno lub wiecej powtorzen
// ? - zero lub jedno powtorzenie
// {x} - dokladnie x powtorzen
// {x,} - x lub wiecej powtorzen
// {x,y} - od x do y powtorzen
// [xyz] - jeden ze znakow z listy
// [^xyz] - znak nie bedacy z listy
// [a-z] - znak z zakresu
// [^a-z] - znak spoza zakresu
// \d - cyfra
// \D - znak nie bedacy cyfra
// \w - znak alfanumeryczny
// \W - znak nie bedacy alfanumeryczny
// \s - bialy znak
// \S - znak nie bedacy bialym znakiem
// \b - granica slowa
// \B - nie granica slowa
// \n - nowa linia

//flagi
// i - ignorowanie wielkosci liter
// g - globalne dopasowanie
// m - wieloliniowe dopasowanie
